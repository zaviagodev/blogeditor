'use client'
import dynamic from 'next/dynamic'

const PlaygroundPage = dynamic(
  () => import('../../component/playground'),
  { ssr: false }
)

export default function ViewPage () {
    if(typeof window !== "undefined" )
    return(
        <PlaygroundPage state={'view'} page={'Page'}></PlaygroundPage>
    )
}