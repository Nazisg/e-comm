import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import SectionHeader from '../../components/SectionHeader';
import sneakers from '../../media/imgs/product-sneakers-3.png'
import bag from '../../media/imgs/product-bag-2.png'
import bag2 from '../../media/imgs/product-bag-3.png'
import sneakers2 from '../../media/imgs/product-sneakers-4.png'

const BestSeller = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Bags', 'Sneakers', 'Belt', 'Sunglasses'];

    return (
        <div className='py-10 w-[85%] mx-auto hidden md:block'>
            <SectionHeader title={'BEST SELLER'} />
            <ul className='flex gap-16 text-[22px] justify-center items-center mt-4'>
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className={`pb-[2px] ${activeCategory === category ? 'border-b-2 border-b-[#40bfff] text-blue' : ''} cursor-pointer`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>

            <div className='py-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
                <ProductCard hot={true} image={sneakers} />
                <ProductCard image={bag} />
                <ProductCard image={bag2} />
                <ProductCard image={sneakers2} />
                <ProductCard image={sneakers} />
                <ProductCard image={bag} />
                <ProductCard image={bag2} />
                <ProductCard image={sneakers2} />
            </div>
            <div className='flex justify-center'>
                <span
                    className='poppins-500 text-blue text-xl pb-1 border-b-2 border-b-blue cursor-pointer'
                    onClick={() => console.log("Load more products here")}
                >
                    LOAD MORE
                </span>
            </div>
        </div>
    );
};

export default BestSeller;
