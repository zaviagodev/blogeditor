'use client'
import dynamic from 'next/dynamic'

const PlaygroundPage = dynamic(
  () => import('../../component/playground'),
  { ssr: false }
)
import { Suspense } from "react"

export default function NewBlogger () {
    return(
        <Suspense fallback={'Loading...'}>
        <PlaygroundPage state={'new'} page={'Blogger'}></PlaygroundPage>
        </Suspense>
    )
}