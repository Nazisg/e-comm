import React, { useState, useEffect } from 'react';
import bagImage from '../../media/imgs/product-bag-1.png'
import sneakersImage from '../../media/imgs/product-sneakers-1-tr.png'
import sneakersImage2 from '../../media/imgs/product-sneakers-2.png'
const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60 * 60);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    };
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const { hours, minutes, seconds } = formatTime(timeLeft);
  return (
    <div className='md:m-0 m-3'>
      <div className="relative w-full h-[206px] md:h-[653px]">
        <div className="hero-image w-full h-full bg-cover bg-center md:rounded-none rounded-md"></div>
        <div className="absolute inset-0 bg-hero-gradient md:rounded-none rounded-md"></div>
        <div className="absolute inset-0 flex flex-col justify-center z-10 w-[85%] mx-auto">
          <h1 className="text-[22px] md:text-[40px]  xl:text-[64px] w-[75%] xl:w-[50%] font-bold text-white">Super Flash Sale 50% Off</h1>
          <div className="flex md:hidden gap-1 mt-2 items-center">
            <div className="w-[42px] h-[42px] flex justify-center items-center bg-white rounded-md poppins-700 text-[#223263]">
              {hours}
            </div>
            <div className="text-white poppins-700">:</div>
            <div className="w-[42px] h-[42px] flex justify-center items-center bg-white rounded-md poppins-700 text-[#223263]">
              {minutes}
            </div>
            <div className="text-white poppins-700">:</div>
            <div className="w-[42px] h-[42px] flex justify-center items-center bg-white rounded-md poppins-700 text-[#223263]">
              {seconds}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[-100px] lg:w-full xl:w-[85%] mx-auto shadow-boxshadow hidden md:flex'>
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
