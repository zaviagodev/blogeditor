'use client'
import dynamic from 'next/dynamic'

const PlaygroundPage = dynamic(
  () => import('../../component/playground'),
  { ssr: false }
)
import { Suspense } from "react"

export default function EditSystemPage () {
    return(
        <Suspense fallback={'Loading...'}>
        <PlaygroundPage state={'edit'} page={'SystemPage'}></PlaygroundPage>
        </Suspense>
    )
}