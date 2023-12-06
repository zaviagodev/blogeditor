import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import { webserver_port } from "../../../sites/common_site_config.json";
import getProxyOptions from './proxyOptions';
import { splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), splitVendorChunkPlugin()],
	server: {
		port: 8080,
		proxy: getProxyOptions({ port: webserver_port }),
		cors: {
			origin: "*",
			credentials: true,
			methods: "GET POST PUT DELETE OPTIONS",
			
		}
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	build: {
		outDir: `../${path.basename(path.resolve(".."))}/public/SpaBlogEditor`,
		emptyOutDir: true,
		target: 'es2015',
		sourcemap: true,
		rollupOptions: {
			preserveEntrySignatures: 'allow-extension',
			output : {
				format: 'es',
				manualChunks: (id : string) => {
					// creating a chunk to @open-ish deps. Reducing the vendor chunk size
				},

			},
		},
	},
		
	});




