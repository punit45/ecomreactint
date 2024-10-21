import React from 'react'
import {assets} from '../assets/assets';

const NavBar = () => {
  return (
    <div className='flex items-center justify-center py-5 font-medium'>
        <img src={assets.logo} alt="logo " className='w-36' />
    </div>
  )
}

export default NavBar