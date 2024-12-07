import React from 'react'
import ProductCard from '../../components/ProductCard'
import SectionHeader from '../../components/SectionHeader'

const BestSeller = () => {
    return (
        <div className='py-10 w-[85%] mx-auto'>
            <SectionHeader title={'BEST SELLER'} />
            <ul className='flex gap-16 text-[22px] justify-center items-center mt-4'>
                <li className='pb-[2px] border-b-2 border-b-[#40bfff] text-blue'>All</li>
                <li>Bags</li>
                <li>Sneakers</li>
                <li>Belt</li>
                <li>Sunglasses</li>
            </ul>

            <div className='py-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>
            <div className='flex justify-center'><span className='poppins-500 text-blue text-xl pb-1 border-b-2 border-b-blue'>LOAD MORE</span></div>
        </div>
    )
}

export default BestSeller