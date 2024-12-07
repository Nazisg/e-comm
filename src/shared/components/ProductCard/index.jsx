import React from 'react'
import sneakers from '../../media/imgs/product-sneakers-3.png'
import starFill from '../../media/icons/star-fill.svg'
import star from '../../media/icons/star.svg'
import heart from '../../media/icons/heart.svg'
import cart from '../../media/icons/cart-2.svg'
import { Link } from 'react-router-dom'

const ProductCard = () => {
    return (
        <div className='relative w-full flex flex-col gap-2 items-center border-[3px] border-[#F6F7F8] rounded-[5px]'>
            <div className='proxima-400 text-lg bg-red z-10 py-1 px-2 text-white rounded-sm absolute top-0 left-0'>HOT</div>
            <div className='relative w-full'>
                <img src={sneakers} alt="sneakers" className='rounded-[5px] w-full h-full object-cover' />
                <div className='absolute flex justify-center items-center gap-3 m-6 inset-0 bg-white z-20 opacity-0 hover:opacity-90 transition-opacity duration-300'>
                    <div className='w-[52px] h-[52px] cursor-pointer border-[2px] border-[#33A0FF] rounded-full flex justify-center items-center'>
                        <img src={heart} alt="heart" />
                    </div>
                    <div className='w-[52px] h-[52px] cursor-pointer border-[2px] border-[#33A0FF] rounded-full flex justify-center items-center'>
                        <img src={cart} alt="cart" />
                    </div>
                </div>
            </div>
            <Link to='/product/1' className='flex flex-col gap-2 items-center'>
                <h4 className='poppins-700 text-lg text-[##223263]'>Nike Air Max 270 React</h4>
                <div className='flex gap-4 items-center'>
                    <img src={starFill} alt="star" />
                    <img src={starFill} alt="star" />
                    <img src={starFill} alt="star" />
                    <img src={starFill} alt="star" />
                    <img src={star} alt="star" />
                </div>
                <div className='flex gap-4 items-center pb-4'>
                    <p className='text-lg poppins-700 text-blue'>$299,43</p>
                    <div className='flex gap-1 items-center text-sm'>
                        <p className='text-gray line-through'>$534,33</p>
                        <p className='text-red poppins-700'>24% Off</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard