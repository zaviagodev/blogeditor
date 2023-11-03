
  import React from 'react';


  import dynamic from 'next/dynamic'
  const Blog = dynamic(
    () => import('./pages/blog/page'),
    { ssr: false }
  )


  export default async function MyApp() {

      return <Blog></Blog>

  }
