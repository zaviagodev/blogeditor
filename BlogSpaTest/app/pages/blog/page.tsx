'use client'
import React from "react";
import { Suspense } from "react"
import dynamic from 'next/dynamic'

const MusicPage = dynamic(
  () => import('../../component/main'),
  { ssr: false }
)

export default function Blog  () {
    
    return (
      <Suspense fallback={'Loading...'}>
      <MusicPage></MusicPage>
      </Suspense>
    )
}
