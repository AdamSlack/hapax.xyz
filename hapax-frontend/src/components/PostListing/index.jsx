import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export const PostListing = () => {
  const posts = [
    { "title": "Hello World", "key": "HelloWorld" },
    { "title": "Whut Whut", "key": "WhutWhut" }
  ]

  return (
    <>
      <h1>Posts</h1>
      <ul className="post-listing">
        {posts.map(({key, title}) => (
          <li key={key}>
            <Link to={`/posts/${key}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PostListing 

