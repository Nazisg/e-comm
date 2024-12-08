import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoIcon from '../../media/icons/logo.svg'
import facebook from '../../media/icons/facebook.svg'
import twitter from '../../media/icons/twitter.svg'
import card1 from '../../media/icons/card-1.png'
import card2 from '../../media/icons/card-2.png'
import card3 from '../../media/icons/card-3.png'
import card4 from '../../media/icons/card-4.png'

const Footer = () => {
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'Home', icon: 'home-icon' },
    { path: '/search', label: 'Search', icon: 'search-icon' },
    { path: '/cart', label: 'Cart', icon: 'cart-icon', notification: 2 },
    { path: '/offers', label: 'Offer', icon: 'offer-icon' },
    { path: '/profile', label: 'User', icon: 'user-icon' },
  ];
  return (
    <footer>
      <div className='bg-[#BCDDFE] pb-10 pt-20 hidden md:block'>
        <div className='w-[85%] mx-auto'>
          <div className='flex justify-between'>
            <div className='w-[17%] flex flex-col gap-4'>
              <Link to='/' className='flex gap-1 items-center'>
                <img src={logoIcon} alt="logo" />
                <span className='text-lg font-bold'>E-Comm</span>
              </Link>
              <p className='proxima-400 text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
            </div>
            <div className='w-[17%] flex flex-col gap-4'>
              <h5 className='text-lg poppins-500'>Follow Us</h5>
              <p className='proxima-400 text-xs'>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
              <div className='flex gap-6 items-center'>
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
              </div>
            </div>
            <div className='w-[13%] flex flex-col gap-4'>
              <h5 className='text-lg poppins-500'>Contact Us</h5>
              <p className='text-sm'>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
            </div>
          </div>
          <div className='flex justify-between items-start py-16'>
            <div>
              <h5 className='text-lg'>Infomation</h5>
              <ul className='text-sm mt-4'>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h5 className='text-lg'>Service</h5>
              <ul className='text-sm mt-4'>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h5 className='text-lg'>My Account</h5>
              <ul className='text-sm mt-4'>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h5 className='text-lg'>Our Offers</h5>
              <ul className='text-sm mt-4'>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>

          </div>
          <div className='w-full h-[1px] bg-[#F6F7F8]'></div>
          <div className='flex justify-between py-4 items-center'>
            <p className='proxima-400 text-sm text-[#C1C8CE]'>© 2018 Ecommerce theme by www.bisenbaev.com</p>
            <div className='flex gap-1 items-center'>
              <img src={card1} alt="card" />
              <img src={card2} alt="card" />
              <img src={card3} alt="card" />
              <img src={card4} alt="card" />
            </div>
          </div>
        </div>
      </div>
      <div className='block md:hidden fixed bottom-0 z-50 bg-[#fff] p-3 px-4 w-full border-t-[2px] border-t-[#EDF2FF]'>
        <div className='flex gap-1 justify-between items-center z-50'>
          <Link to='/' className='flex flex-col gap-1 justify-center items-center'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9.75L12 3L21 9.75" stroke={location.pathname === '/'?'#40BFFF':"#9098B1"} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21 9.75V21H3V9.75" stroke={location.pathname === '/'?'#40BFFF':"#9098B1"}stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.25 14.25H9.75V21H14.25V14.25Z" stroke={location.pathname === '/'?'#40BFFF':"#9098B1"}stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p 
            className={` ${location.pathname === '/' ? 'text-blue' : 'text-[#9098B1]'}`}
            > Home</p>
          </Link>

          <div className='flex flex-col gap-1 justify-center items-center'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="#9098B1" stroke-width="2" stroke-miterlimit="10" />
              <path d="M16.5 16.5L21 21" stroke="#9098B1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
            </svg>
            <p className='text-[#9098B1]'>Search</p>
          </div>

          <Link to='/cart' className='flex flex-col gap-1 justify-center items-center relative'>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.22974 21.7395C9.5404 21.7395 9.79224 21.4877 9.79224 21.177C9.79224 20.8663 9.5404 20.6145 9.22974 20.6145C8.91908 20.6145 8.66724 20.8663 8.66724 21.177C8.66724 21.4877 8.91908 21.7395 9.22974 21.7395Z" fill="#9098B1" stroke={location.pathname === '/cart'?'#40BFFF':"#9098B1"} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.1047 21.7395C17.4154 21.7395 17.6672 21.4877 17.6672 21.177C17.6672 20.8663 17.4154 20.6145 17.1047 20.6145C16.7941 20.6145 16.5422 20.8663 16.5422 21.177C16.5422 21.4877 16.7941 21.7395 17.1047 21.7395Z" fill="#9098B1" stroke={location.pathname === '/cart'?'#40BFFF':"#9098B1"} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3.04224 3.7395H5.29224L7.54224 17.2395H18.7922L21.0422 7.1145H6.41724" stroke={location.pathname === '/cart'?'#40BFFF':"#9098B1"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div className='absolute top-[-7px] right-[-7px] h-5 w-5 rounded-full bg-red flex justify-center items-center text-white text-[10px]'>2</div>
            <p 
            className={` ${location.pathname === '/cart' ? 'text-blue' : 'text-[#9098B1]'}`}
            >Cart</p>
          </Link>

          <div className='flex flex-col gap-1 justify-center items-center'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.0625 8.625C8.37316 8.625 8.625 8.37316 8.625 8.0625C8.625 7.75184 8.37316 7.5 8.0625 7.5C7.75184 7.5 7.5 7.75184 7.5 8.0625C7.5 8.37316 7.75184 8.625 8.0625 8.625Z" fill="#9098B1" stroke="#9098B1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21 13.0001L13.0001 21L3 10.9999V3H10.9999L21 13.0001Z" stroke="#9098B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <p className='text-[#9098B1]'>Offer</p>
          </div>

          <div className='flex flex-col gap-1 justify-center items-center'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.00055C10.3971 4.00055 9.09766 5.29999 9.09766 6.90293C9.09766 8.50587 10.3971 9.80531 12 9.80531C13.603 9.80531 14.9024 8.50587 14.9024 6.90293C14.9024 5.29999 13.603 4.00055 12 4.00055ZM7.09766 6.90293C7.09766 4.19542 9.29253 2.00055 12 2.00055C14.7075 2.00055 16.9024 4.19542 16.9024 6.90293C16.9024 9.61044 14.7075 11.8053 12 11.8053C9.29253 11.8053 7.09766 9.61044 7.09766 6.90293Z" fill="#9098B1" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51784 15.3904C6.47035 15.3904 4 17.8608 4 20.9083V20.9994C4 21.5517 3.55228 21.9994 3 21.9994C2.44772 21.9994 2 21.5517 2 20.9994V20.9083C2 16.7562 5.36578 13.3904 9.51784 13.3904H14.4822C18.6342 13.3904 22 16.7562 22 20.9083V20.9994C22 21.5517 21.5523 21.9994 21 21.9994C20.4477 21.9994 20 21.5517 20 20.9994V20.9083C20 17.8608 17.5296 15.3904 14.4822 15.3904H9.51784Z" fill="#9098B1" />
            </svg>
            <p className='text-[#9098B1]'>User</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer