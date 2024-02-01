import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { TabProvider } from './provider/tabProvider.tsx';
import { PostProvider } from './provider/postProvider.tsx';
import { TypeProvider } from './provider/typeProvider.tsx';
import {PageProvider} from './provider/pageProvider.tsx';
import {BloggerProvider} from './provider/BloggerProvider.tsx';
import { SystemPageProvider } from './provider/SystemPageProvider.tsx';
import { AnimationProvider } from './provider/animationProvider.tsx';
import { CategoryProvider } from './provider/categoryProvider.tsx';
import { FrappeProvider } from 'frappe-react-sdk'
import { Toaster } from "@/components/ui/toaster"
import { LoadingStateProvider } from './provider/loadinStateProvider.tsx';
import { ProgressDemo } from './component/progress.tsx';
import { getToken } from "./utils/helper";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FrappeProvider
      url={import.meta.env.VITE_ERP_URL ?? ""}
      enableSocket={false}
      tokenParams={
        import.meta.env.VITE_USE_TOKEN_AUTH == 'true' ?
        {
          type: import.meta.env.VITE_TOKEN_TYPE ? import.meta.env.VITE_TOKEN_TYPE : "token", 
          useToken: true,
          token: () => import.meta.env.VITE_TOKEN_API ? `${import.meta.env.VITE_TOKEN_API}:${import.meta.env.VITE_TOKEN_SECRET}` : getToken,
        } : undefined
    }>
      <AnimationProvider>
      <TabProvider>
      <LoadingStateProvider>
      <TypeProvider>
      <SystemPageProvider>
      <BloggerProvider>
      <PostProvider>
      <PageProvider>
      <CategoryProvider>
      <ProgressDemo/>
      <App />
      <Toaster />
      </CategoryProvider> 
      </PageProvider>  
      </PostProvider>
      </BloggerProvider>
      </SystemPageProvider>
      </TypeProvider>
      </LoadingStateProvider>
      </TabProvider>
      </AnimationProvider>
      </FrappeProvider>
  </React.StrictMode>,
)
