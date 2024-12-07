import React from 'react'
import product from '../../media/imgs/featured-product.png'
import starFill from '../../media/icons/star-fill.svg'
import star from '../../media/icons/star.svg'

const FeaturedCard = () => {
  return (
    <div className='flex gap-4 items-start'>
    <img src={product} alt="product" />
    <div className='flex flex-col gap-3 w-[200px]'>
        <h5 className='text-[22px] proxima-400'>Blue Swade Nike Sneakers</h5>
        <div className='flex gap-3 items-center'>
            <img src={starFill} alt="star" />
            <img src={starFill} alt="star" />
            <img src={starFill} alt="star" />
            <img src={starFill} alt="star" />
            <img src={star} alt="star" />
        </div>
        <div className='flex gap-1 items-center text-xl'>
            <span className='text-red poppins-500'>$499</span>
            <span className='line-through text-[#C1C8CE]'>$599</span>
        </div>
    </div>
</div>  )
}

export default FeaturedCard