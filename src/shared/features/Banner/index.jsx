import React from 'react'
import bannerIcon from '../../media/imgs/banner-icon.png'

const Banner = () => {
  return (
    <div className='bg-blue py-6 hidden md:block'>
       <div className='w-[85%] mx-auto flex'>
       <div className=' flex flex-col items-start justify-center gap-4'>
            <h2 className='poppins-500 text-[55px] text-white'>Adidas Men Running Sneakers</h2>
            <p className='text-2xl text-white'>Performance and design. Taken right to the edge.</p>
            <button className='border-0 border-b-2 border-b-white poppins-600 text-xl text-white'>SHOP NOW</button>
        </div>
        <div className='relative top-[-80px]'>
            <img src={bannerIcon} alt="banner-icon" />
        </div>
       </div>
    </div>
  )
}

export default Banner