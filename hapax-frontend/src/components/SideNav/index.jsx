import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export const SideNav = (props) => {
  const { handleClose, className } = props;

  const posts = [
    { title: 'Middy Morphisms', subtitle: 'Lambda Body Transforms', key: 'MiddyMorphisms' },
    { title: 'Hello World', subtitle: 'Test Hello World markdown file', key: 'HelloWorld' },
    { title: 'Whut Whut', subtitle: 'Another test markdown file', key: 'WhutWhut' }
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
        posts.map(({title, key}) => (
          <Link
            to={`/posts/${key}`}
            onClick={handleClose}
            key={key}
          >
            {title}
          </Link>
        ))
      }
    </div>
  )
}

export default SideNav