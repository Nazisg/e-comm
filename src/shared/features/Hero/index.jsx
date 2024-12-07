import React from 'react';
import bagImage from '../../media/imgs/product-bag-1.png'
import sneakersImage from '../../media/imgs/product-sneakers-1.png'
import sneakersImage2 from '../../media/imgs/product-sneakers-2.png'
const Hero = () => {
  return (
    <div>
      <div className="relative w-full h-[100vh]">
        <div className="bg-hero-image w-full h-full bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <div className="absolute inset-0 flex flex-col justify-center z-10 w-[85%] mx-auto">
          <h1 className="text-[64px] w-[50%] font-bold text-white">Super Flash Sale 50% Off</h1>
        </div>
      </div>

      <div className='flex mt-[-100px] w-[85%] mx-auto shadow-boxshadow'>
        <div className='bg-[#E2E2E2] p-10 z-20'>
          <h5 className='text-[#223263] text-xl poppins-700 w-[60%]'>FS - QUILTED MAXI CROSS BAG</h5>
          <img src={bagImage} alt="bag" />
          <div className='flex gap-1 items-center'>
            <p className='text-gray text-lg line-through'>$534,33</p>
            <p className='text-red poppins-700'>24% Off</p>
          </div>
          <div className='flex justify-end raleway-700 text-blue text-3xl'>$299,43</div>
        </div>
        <div className='bg-[#F6F6F6] p-10 z-20'>
          <div className='flex items-center justify-between'>
            <h5 className='text-[#223263] text-xl poppins-700 w-[60%]'>FS - Nike Air Max 270 React...</h5>
            <div className='raleway-700 text-blue text-3xl'>$299,43</div>
          </div>
          <img src={sneakersImage} alt="sneakers" />
          <div className='flex gap-1 items-center justify-center pt-4'>
            <p className='text-gray text-lg line-through'>$534,33</p>
            <p className='text-red poppins-700'>24% Off</p>
          </div>
        </div>
        <div className='bg-[#F6F6F6] p-10 z-20'>
          <h5 className='text-[#223263] text-xl poppins-700 w-[60%]'>FS - Nike Air Max 270 React...</h5>
          <div className='flex gap-1 items-center justify-center pt-4'>
            <p className='text-gray text-lg line-through'>$534,33</p>
            <p className='text-red poppins-700'>24% Off</p>
          </div>
          <img src={sneakersImage2} alt="sneakers" />
          <div className='flex justify-end raleway-700 text-blue text-3xl'>$299,43</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
