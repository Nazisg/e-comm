import React from 'react'
import Counter from '../Counter'
import product from '../../media/imgs/product-sneakers-4.png'

const CartItemMobile = () => {
  return (
    <div className='border border-[#EBF0FF] p-2 flex gap-3 rounded-md'>
    <div className='w-[72px] h-[72px] rounded-md'>
      <img src={product} alt="product" className='w-full h-full object-contain' />
    </div>
    <div>
      <div className='flex gap-1'>
        <h5 className='text-sm text-[#223263] poppins-700'>Nike Air Zoom Pegasus 36 Miami</h5>
        <div className='flex gap-1 items-center'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.54493 12.7754L12.0001 20.0631L19.4553 12.7754L19.4956 12.736C21.5563 10.7215 21.5563 7.46185 19.4956 5.44831C17.4348 3.43478 14.1002 3.43384 12.0404 5.44831L12.0001 5.48767L11.9589 5.44738C9.89814 3.43291 6.56352 3.43291 4.50371 5.44738C2.4439 7.46185 2.44294 10.7215 4.50371 12.7351L4.54493 12.7754Z" fill="#FB7181" stroke="#FB7181" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6.375H21" stroke="#9098B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.625 3H15.375" stroke="#9098B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.75 6.375H5.25V21H18.75V6.375Z" stroke="#9098B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <h4 className='text-blue text-sm poppins-700'>$299,43</h4>
        <Counter/>
      </div>
    </div>
  </div>  )
}

export default CartItemMobile