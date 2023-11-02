'use client'
import dynamic from 'next/dynamic'

const PlaygroundPage = dynamic(
  () => import('../../component/playground'),
  { ssr: false }
)
import { Suspense } from "react"

export default function ViewCategory () {
    return(
        <Suspense fallback={'Loading...'}>
        <PlaygroundPage state={'view'} page={'Categories'}></PlaygroundPage >
        </Suspense>
    )
}