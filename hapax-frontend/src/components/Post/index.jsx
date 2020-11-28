import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import './index.css'
import CodeBlock from '../CodeBlock'


export const Post = () => {
  const { postId } = useParams()

  const [postData, setPostData] = useState('')

  const createHeading = (props) => {
    const { level, children } = props;
    const [{ props: { children: text }}] = children
    const id = text.toLowerCase().replace(/[ ]/g,'-')
    const element = `h${level}`    
    return React.createElement(element, { id }, children)
  }

  useEffect(() => {
    const url = `https://hapax.xyz/markdown-posts/${postId}.md`
    fetch(url)
    .then((md) => md.text())
    .then((data) => {
      setPostData(data)
    })
  }, [postId])

  return (
    <div id="post-content">
      <ReactMarkdown renderers={ { code: CodeBlock, heading: createHeading }}>{postData}</ReactMarkdown>
    </div>
  )
}

export default Post