'use client'
import React, {Suspense} from "react";
import dynamic from 'next/dynamic'

const PreviewPage = dynamic(
  () => import('@/app/component/preview'),
  { ssr: false }
)

export default function Preview () {
    return (
        <Suspense fallback={'Loading...'}>
            <PreviewPage></PreviewPage>
        </Suspense>
    )
}