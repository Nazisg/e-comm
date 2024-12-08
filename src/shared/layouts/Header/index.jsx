import React from 'react'
import profileIcon from '../../media/icons/profile.svg'
import cartIcon from '../../media/icons/cart.svg'
import searchIcon from '../../media/icons/search.svg'
import logoIcon from '../../media/icons/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='justify-between text-xl w-[93%] md:w-[85%] mx-auto py-4 hidden md:flex'>
        <div className='text-xl'>EN USD</div>
        <div className='flex gap-4'>
          <div className='flex items-center gap-1'>
            <img src={profileIcon} alt="profile" />
            <span>My profile</span>
          </div>
          <Link to='/cart' className='relative'>
            <img src={cartIcon} alt="cart" />
            <div className='absolute top-[-7px] right-[-7px] h-5 w-5 rounded-full bg-red flex justify-center items-center text-white text-[10px]'>2</div>
          </Link>
          <p> Items</p>
          <p className='text-[#262626]'>$0.00</p>
          <img src={searchIcon} alt="search" />
        </div>
      </div>
      <div className='w-full h-[2px] bg-[#FAFAFB]'></div>
      <div className='w-[93%] md:w-[85%] mx-auto py-2 md:py-4 flex justify-between items-center'>
        <Link to='/' className='gap-1 items-center hidden md:flex'>
          <img src={logoIcon} alt="logo" />
          <span className='text-lg font-bold'>E-Comm</span>
        </Link>
        <ul className='w-[60%] justify-between gap-2 items-center text-lg lg:text-2xl font-medium hidden md:flex'>
          <li className='text-blue'><Link to="/">HOME</Link></li>
          <li>BAGS</li>
          <li>SNEAKERS</li>
          <li>BELT</li>
          <li>CONTACT</li>
        </ul>
        <div className='border border-[#EBF0FF] flex md:hidden p-3 gap-2 rounded-md'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="#40BFFF" stroke-width="2" stroke-miterlimit="10" />
            <path d="M16.5 16.5L21 21" stroke="#40BFFF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
          </svg>
          <input type="text" placeholder="Search Product" />
        </div>
        <div className="flex md:hidden gap-3">
          <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8223 2.96095C13.4661 2.96161 14.096 3.14809 14.6365 3.49806C15.1769 3.84802 15.6048 4.34656 15.8688 4.93379C16.1328 5.52101 16.2216 6.17198 16.1247 6.80848C16.0277 7.44498 15.7491 8.03992 15.3223 8.52192C14.7093 9.21292 9.48229 14.106 9.48229 14.106C9.48229 14.106 4.24428 9.21293 3.63128 8.51093C3.09008 7.90347 2.79236 7.11753 2.79528 6.30396C2.81044 5.42723 3.16935 4.59147 3.79473 3.97681C4.42011 3.36216 5.26191 3.01777 6.13878 3.01777C7.01565 3.01777 7.8574 3.36216 8.48278 3.97681C9.10816 4.59147 9.46713 5.42723 9.48229 6.30396C9.48229 5.86482 9.56875 5.42995 9.73681 5.02424C9.90486 4.61853 10.1512 4.24992 10.4617 3.9394C10.7722 3.62888 11.1408 3.38254 11.5466 3.21449C11.9523 3.04643 12.3871 2.95997 12.8263 2.95997L12.8223 2.96095ZM12.8263 0.730965C11.62 0.72886 10.4459 1.12032 9.48229 1.84596C8.37833 1.02657 7.01043 0.644147 5.64159 0.772225C4.27276 0.900303 2.99955 1.52985 2.06676 2.5398C1.13397 3.54976 0.607416 4.86886 0.588307 6.24354C0.569199 7.61822 1.05889 8.95145 1.96325 9.98695C2.58925 10.7049 6.71225 14.565 7.96325 15.731C8.37617 16.1171 8.92042 16.3319 9.48577 16.3319C10.0511 16.3319 10.5953 16.1171 11.0082 15.731C12.2522 14.566 16.3582 10.716 16.9922 9.99897C17.7036 9.19543 18.1678 8.20361 18.3291 7.14265C18.4904 6.08169 18.342 4.99671 17.9016 4.01807C17.4612 3.03944 16.7476 2.20873 15.8466 1.6258C14.9456 1.04287 13.8954 0.732491 12.8223 0.731942L12.8263 0.730965Z" fill="#9098B1" />
          </svg>
         <div className="relative">
         <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00001 2C5.66879 2 2.96876 4.70004 2.96876 8.03125V13.2816C2.96876 13.3971 2.94875 13.5117 2.90963 13.6204L2.54791 14.625H15.4521L15.0904 13.6204C15.0513 13.5117 15.0313 13.3971 15.0313 13.2816V8.03125C15.0313 4.70004 12.3312 2 9.00001 2ZM0.968756 8.03125C0.968756 3.59547 4.56422 0 9.00001 0C13.4358 0 17.0313 3.59547 17.0313 8.03125V13.1071L17.8159 15.2862C17.9262 15.5926 17.8804 15.9336 17.6932 16.2C17.5059 16.4664 17.2007 16.625 16.875 16.625H1.12501C0.799353 16.625 0.494096 16.4664 0.306848 16.2C0.119599 15.9336 0.0738154 15.5926 0.184136 15.2862L0.968756 13.1071V8.03125Z" fill="#9098B1" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.625 14.625C6.17728 14.625 6.625 15.0727 6.625 15.625C6.625 16.9368 7.68816 18 9 18C10.3118 18 11.375 16.9368 11.375 15.625C11.375 15.0727 11.8227 14.625 12.375 14.625C12.9273 14.625 13.375 15.0727 13.375 15.625C13.375 18.0414 11.4164 20 9 20C6.58359 20 4.625 18.0414 4.625 15.625C4.625 15.0727 5.07272 14.625 5.625 14.625Z" fill="#9098B1" />
          </svg>
          <div className="absolute top-[-2px] right-0 w-[8px] h-[8px] bg-red rounded-full"></div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Header