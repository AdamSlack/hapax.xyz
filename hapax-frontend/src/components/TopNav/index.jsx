import React from 'react';
import { Link } from 'react-router-dom';
import BurgerIcon from '../BurgerIcon';
import './index.css'

export const TopNav = ( props ) => {
  const {handleOpen} = props
  return (
    <nav>
      <div onClick={handleOpen}>
        <a>
          <BurgerIcon />
        </a>
      </div>
      <div>
        <Link to="/">
          Hapax.xyz
        </Link>
      </div>
    </nav>
  )
}

export default TopNav