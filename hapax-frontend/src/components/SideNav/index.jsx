import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export const SideNav = (props) => {
  const { handleClose, className } = props;

  return (
    <div className={className}>
      <button className="closeBtn" 
        onClick={handleClose}
      >
        &times;
      </button>
      <Link to="/posts/testPost1" onClick={handleClose}>Test Post 1</Link>
      <Link to="/posts/testPost2" onClick={handleClose}>Test Post 2</Link>
      <Link to="/posts/testPost3" onClick={handleClose}>Test Post 3</Link>
    </div>
  )
}

export default SideNav