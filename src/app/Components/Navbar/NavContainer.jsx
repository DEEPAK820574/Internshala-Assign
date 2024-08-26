
import React from 'react'
import Search from '../Ui/Search'
import NavLinkContainer from './NavLinkContainer'
const navContainer = () => {
  return (
    <div className='w-[1300px] h-[34px] absolute top-[70px] left-[310px] flex items-center space-x-[30px] ' >
      <Search bg="rgba(238, 247, 247, 1)" containerWidth="366px"/>
      <NavLinkContainer/>
    </div>
  )
}

export default navContainer