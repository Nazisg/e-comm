import React from 'react'
import CategoryCard from '../../components/CategoryCard'
import MobileSectionHeader from '../../components/MobileSectionHeader'
import ProductCard from '../../components/ProductCard'
const MobileSections = () => {
    return (
        <div className='block md:hidden w-[93%] mx-auto mb-28'>
            <MobileSectionHeader title={'Category'} more={"More Category"} />
            <div className='my-2 flex gap-3 items-center'>
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
            <MobileSectionHeader title={'Flash Sale'} more={"See More"} />
            <div className='flex gap-2'>
                <ProductCard />
                <ProductCard />
            </div>
            <MobileSectionHeader title={'Mega Sale'} more={"See More"} />
            <div className='flex gap-2'>
                <ProductCard />
                <ProductCard />
            </div>
            <div className="relative w-full h-[206px] my-4">
                <div className="bg-mobile-image w-full h-full bg-cover bg-center md:rounded-none rounded-md"></div>
                <div className="absolute inset-0 bg-hero-gradient md:rounded-none rounded-md"></div>
                <div className="absolute inset-0 flex flex-col justify-center z-10 w-[85%] mx-auto">
                    <h1 className="text-[22px] w-[75%] font-bold text-white">Recomended Product</h1>
                    <p className='text-xs text-white mt-3'>We recommend the best for you</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default MobileSections