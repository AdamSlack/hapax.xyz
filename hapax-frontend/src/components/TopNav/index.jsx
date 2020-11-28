import React from 'react';
import { Link } from 'react-router-dom';
import BurgerIcon from '../BurgerIcon';
import './index.css'

export const TopNav = ( props ) => {
  const {handleOpen} = props
  return (
    <nav>
      <div onClick={handleOpen}>
        <button className="menu">
          <BurgerIcon />
        </button>
      </div>
      <div>
        <Link to="/">
          Hapax.xyz
        </Link>
      </div>
      <div>
        <Link to="/posts">
          Posts
        </Link>
      </div>
    </nav>
  )
}

export default TopNav