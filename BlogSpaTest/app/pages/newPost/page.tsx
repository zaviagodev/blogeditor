'use client'
import dynamic from 'next/dynamic'

const PlaygroundPage = dynamic(
  () => import('../../component/playground'),
  { ssr: false }
)

export default function NewBlog () {
    return(

        <PlaygroundPage state={'new'} page={'Post'}></PlaygroundPage>

    )
}