'use client'

import { Suspense } from "react"
import dynamic from 'next/dynamic'

const PlaygroundPage = dynamic(
  () => import('../../component/playground'),
  { ssr: false }
)

export default function EditBlog () {
    return(
        <Suspense fallback={'Loading...'}>
        <PlaygroundPage state={'edit'} page={'Post'}></PlaygroundPage>
        </Suspense>
    )
}