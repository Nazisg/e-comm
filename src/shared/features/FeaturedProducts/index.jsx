import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import FeaturedCard from '../../components/FeaturedCard'

const FeaturedProducts = () => {
    return (
        <div className='w-[85%] mx-auto py-10'>
            <SectionHeader title={"FEATURED PRODUCTS"} />
            <div className='flex items-center justify-between py-8'>
              <FeaturedCard/>
              <FeaturedCard/>
              <FeaturedCard/>
            </div>
        </div>
    )
}

export default FeaturedProducts