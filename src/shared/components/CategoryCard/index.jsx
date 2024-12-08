import React from 'react'
import men from '../../media/icons/men.svg'

const CategoryCard = () => {
    return (
        <div className='flex flex-col gap-1 items-center'>
            <div className='w-[70px] h-[70px] bg-white border border-[#EBF0FF] rounded-full flex justify-center items-center'>
                <img src={men} alt="men" />
            </div>
            <p className='text-[#9098B1] text-[10px]'>Man Shirt</p>
        </div>)
}

export default CategoryCard