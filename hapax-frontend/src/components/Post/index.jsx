import React from 'react'
import { useParams } from 'react-router-dom'

export const Post = () => {
  const { postId } = useParams()

  return (
    <div>
      <h2>Post: {postId}</h2>
    </div>
  )
}

export default Post