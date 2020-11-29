import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export const PostListing = () => {
  const posts = [
    { title: 'Middy Morphisms', subtitle: 'Lambda Body Transforms', key: 'MiddyMorphisms' },
    { title: 'Hello World', subtitle: 'Test Hello World markdown file', key: 'HelloWorld' },
    { title: 'Whut Whut', subtitle: 'Another test markdown file', key: 'WhutWhut' }
  ]

  return (
    <>
      <h1>Posts</h1>
      <ul className='post-listing'>
        {posts.map(({key, title, subtitle}) => (
          <li key={key}>
            <Link to={`/posts/${key}`}>{title}: {subtitle}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PostListing 

