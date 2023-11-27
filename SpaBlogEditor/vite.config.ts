import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import { webserver_port } from "../../../sites/common_site_config.json";
import getProxyOptions from './proxyOptions';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 8080,
		proxy: getProxyOptions({ port: webserver_port }),
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
	},
});




