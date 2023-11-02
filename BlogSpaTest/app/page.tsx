'use server'
  import React from 'react';
  import { cookies } from 'next/headers'

  import dynamic from 'next/dynamic'
  const Blog = dynamic(
    () => import('./pages/blog/page'),
    { ssr: false }
  )
  const LogButton = dynamic(
    () => import('./component/loginButton'),
    { ssr: false }
  )

  export default async function MyApp() {
    const token = cookies().get('token')
    if (token) {
      return <Blog></Blog>
    } else {
      return (    
        <LogButton></LogButton>
      );
    }
  }
