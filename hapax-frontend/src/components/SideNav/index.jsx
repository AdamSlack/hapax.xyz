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
    <div className={className}>
      <button className="closeBtn" 
        onClick={handleClose}
      >
        &times;
      </button>
      {
        postTitles.map((postTitle) => (
        <Link to={`/posts/${postTitle}`} onClick={handleClose}>{postTitle}</Link>
        ))
      }
    </div>
  )
}

export default SideNav