import React from 'react'
import profileIcon from '../../media/icons/profile.svg'
import cartIcon from '../../media/icons/cart.svg'
import searchIcon from '../../media/icons/search.svg'
import logoIcon from '../../media/icons/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='flex justify-between text-xl w-[85%] mx-auto py-4'>
        <div className='text-xl'>EN USD</div>
        <div className='flex gap-4'>
          <div className='flex items-center gap-1'>
            <img src={profileIcon} alt="profile" />
            <span>My profile</span>
          </div>
          <div className='relative'>
            <img src={cartIcon} alt="cart" />
            <div className='absolute top-[-7px] right-[-7px] h-5 w-5 rounded-full bg-red flex justify-center items-center text-white text-[10px]'>2</div>
          </div>
          <p> Items</p>
          <p className='text-[#262626]'>$0.00</p>
          <img src={searchIcon} alt="search" />
        </div>
      </div>
      <div className='w-full h-[2px] bg-[#FAFAFB]'></div>
      <div className='w-[85%] mx-auto py-4 flex justify-between items-center'>
        <Link to='/' className='flex gap-1 items-center'>
          <img src={logoIcon} alt="logo" />
          <span className='text-lg font-bold'>E-Comm</span>
        </Link>
        <ul className='w-[60%] flex justify-between items-center text-2xl font-medium'>
          <li className='text-blue'><Link to="/">HOME</Link></li>
          <li>BAGS</li>
          <li>SNEAKERS</li>
          <li>BELT</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </>
  )
}

export default Header