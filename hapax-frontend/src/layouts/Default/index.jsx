import React from 'react';
import SideNav from '../../components/SideNav';
import TopNav from '../../components/TopNav';
import './index.css'

export const DefaultLayout = (props) => {
  const { children } = props

  const [isOpen, setIsOpen] = React.useState(false);

  const openNav = () => {
    setIsOpen(true)
  }

  const closeNav = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <SideNav 
        className={`defaultLayout sideNav ${isOpen && 'openNav'}`}
        handleClose={closeNav}
      /> 
      <TopNav handleOpen={openNav}/>
      <div className={`defaultLayout main ${isOpen && 'openNav'}`}>
        { children }
      </div>
    </div>
  )
}

export default DefaultLayout