'use client'
import dynamic from 'next/dynamic'

const PlaygroundPage = dynamic(
  () => import('../../component/playground'),
  { ssr: false }
)
import { Suspense } from "react"

export default function NewSystemPage () {
    return(
        <Suspense fallback={'Loading...'}>
        <PlaygroundPage state={'new'} page={'SystemPage'}></PlaygroundPage>
        </Suspense>
    )
}