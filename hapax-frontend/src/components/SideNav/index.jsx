import React from 'react'
import { Link } from 'react-router-dom'

export const SideNav = (props) => {
  const { handleClose, className } = props;

  return (
    <div className={className}>
      <a className="closeBtn" 
        onClick={handleClose}
      >
        &times;
      </a>
      <Link to="/posts/testPost1" onClick={handleClose}>Test Post 1</Link>
      <Link to="/posts/testPost2" onClick={handleClose}>Test Post 2</Link>
      <Link to="/posts/testPost3" onClick={handleClose}>Test Post 3</Link>
    </div>
  )
}

export default SideNav