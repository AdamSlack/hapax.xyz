import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export const SideNav = (props) => {
  const { handleClose, className } = props;

  const postTitles = [
    'HelloWorld',
    'WhutWhut',
  ]

  return (
    <div className={`${className} sideNav`}>
      <button className="closeBtn" 
        onClick={handleClose}
      >
        &times;
      </button>
      <h2>Posts</h2>
      {
        postTitles.map((postTitle) => (
          <Link
            to={`/posts/${postTitle}`}
            onClick={handleClose}
            key={postTitle}
          >
            {postTitle}
          </Link>
        ))
      }
    </div>
  )
}

export default SideNav