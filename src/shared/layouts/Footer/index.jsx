import React from 'react'
import { Link } from 'react-router-dom'
import logoIcon from '../../media/icons/logo.svg'
import facebook from '../../media/icons/facebook.svg'
import twitter from '../../media/icons/twitter.svg'
import card1 from '../../media/icons/card-1.png'
import card2 from '../../media/icons/card-2.png'
import card3 from '../../media/icons/card-3.png'
import card4 from '../../media/icons/card-4.png'

const Footer = () => {
  return (
    <div className='bg-[#BCDDFE] pb-10 pt-20'>
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
  )
}

export default Footer