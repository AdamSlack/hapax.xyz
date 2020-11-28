import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import './index.css'
import CodeBlock from '../CodeBlock'

export const Post = () => {
  const { postId } = useParams()

  const [postData, setPostData] = useState('')

  useEffect(() => {
    const url = `https://hapax.xyz/markdown-posts/${postId}.md`
    fetch(url)
    .then((md) => md.text())
    .then((data) => {
      setPostData(data)
      console.log(data);
    })
  }, [postId])

  return (
    <div id="post-content">
      <ReactMarkdown renderers={ { code: CodeBlock }}>{postData}</ReactMarkdown>
    </div>
  )
}

export default Post