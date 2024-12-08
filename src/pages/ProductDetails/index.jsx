import React, { useState } from "react";
import Breadcrumbs from '../../shared/components/Breadcrumbs'
import starFill from '../../shared/media/icons/star-fill.svg'
import star from '../../shared/media/icons/star.svg'
import cart from '../../shared/media/icons/cart-2.svg'
import heart from '../../shared/media/icons/heart.svg'
import facebook from '../../shared/media/icons/facebook-white.svg'
import twitter from '../../shared/media/icons/twitter-white.svg'
import ProductCard from '../../shared/components/ProductCard'
import SectionHeader from '../../shared/components/SectionHeader'
import Tabs from '../../shared/features/Tabs'
import Counter from "../../shared/components/Counter";
import ImageSlider from "../../shared/features/ImageSlider";
import sneakers from '../../shared/media/imgs/product-sneakers-3.png'
import bag from '../../shared/media/imgs/product-bag-2.png'
import bag2 from '../../shared/media/imgs/product-bag-3.png'
import sneakers2 from '../../shared/media/imgs/product-sneakers-4.png'
import MobileSectionHeader from "../../shared/components/MobileSectionHeader";
import profile from '../../shared/media/imgs/profile.png'
import product1 from '../../shared/media/imgs/slider-image-1.png'
import product2 from '../../shared/media/imgs/slider-image-2.png'
import product3 from '../../shared/media/imgs/slider-image-3.png'

const ProductDeatils = () => {
  const [selectedSize, setSelectedSize] = useState("XS");
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };
  const [selectedColor, setSelectedColor] = useState("blue");

  const colors = [
    { id: "blue", colorCode: "#006CFF" },
    { id: "red", colorCode: "#FC3E39" },
    { id: "black", colorCode: "#171717" },
    { id: "yellow", colorCode: "#FFF600" },
  ];
  return (
    <>
      <Breadcrumbs />
      <div className='w-[93%] md:w-[85%] mx-auto py-2 md:py-5 lg:py-10 mb-36 md:mt-0'>
        <div className='flex items-start gap-6 w-full'>
          <div className='w-full lg:w-[80%]'>
            <div className='flex lg:flex-row flex-col gap-2 md:gap-6'>
              <div className='flex flex-col gap-4'>
                <ImageSlider />
              </div>
              <div className='w-full flex flex-col gap-2 md:gap-5'>
                <h2 className='poppins-500 text-2xl'>Nike Airmax 270 React</h2>
                <div className='flex gap-3 items-center'>
                  <div className='flex gap-2 items-center'>
                    <img src={starFill} alt="star" />
                    <img src={starFill} alt="star" />
                    <img src={starFill} alt="star" />
                    <img src={starFill} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <p className='text-[#C1C8CE] proxima-400 hidden md:block'>0 reviews</p>
                  <p className='text-[#33A0FF] proxima-400 hidden md:block'>Submit a review</p>
                </div>
                <div className='w-full h-[2px] bg-[#F6F7F8]'></div>
                <div className='flex gap-3 items-center'>
                  <h3 className='text-blue poppins-700 text-xl'>$299,43</h3>
                  <p className='text-sm text-[#9098B1] line-through'>$534,33</p>
                  <p className='text-red poppins-700 text-sm'>24% Off</p>
                </div>
                <table className='text-sm w-full md:-[60%]'>
                  <tr>
                    <td className='py-2'>Availability:</td>
                    <td>In stock</td>
                  </tr>
                  <tr>
                    <td className='py-2'>Category:</td>
                    <td>Accessories</td>
                  </tr>
                  <tr>
                    <td className='py-2'>Free shipping</td>
                  </tr>
                </table>
                <div className='w-full h-[2px] bg-[#F6F7F8]'></div>
                <table className='w-full md:w-[60%]'>
                  <tr>
                    <td className='py-2'>Select Color:</td>
                    <td>
                      <div className="flex gap-4 items-center">
                        {colors.map((color) => (
                          <label key={color.id} className="relative">
                            <input
                              type="radio"
                              name="color"
                              value={color.id}
                              checked={selectedColor === color.id}
                              onChange={() => setSelectedColor(color.id)}
                              className="hidden"
                            />
                            <span
                              className={`w-[20px] h-[20px] rounded-full cursor-pointer block ${selectedColor === color.id
                                ? `ring-2 ring-offset-2 ring-${color.colorCode}`
                                : ""
                                }`}
                              style={{ backgroundColor: color.colorCode }}
                            />
                          </label>
                        ))}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='py-2'>Size</td>
                    <td>
                      <select
                        className="p-2 border-[2px] border-[#F1F3F4] rounded outline-none w-[123px]"
                        value={selectedSize}
                        onChange={handleSizeChange}
                      >
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                      </select>
                    </td>
                  </tr>
                </table>
                <div className='w-full h-[2px] bg-[#F6F7F8]'></div>
                <div className='justify-between items-center md:flex hidden'>
                  <Counter />
                  <div className='gap-3 items-center md:flex hidden'>
                    <button className='bg-[#EBF5FF] flex gap-3 items-center py-3 px-5 rounded-lg text-[#33A0FF]'><img src={cart} alt="cart" /> Add To Cart</button>
                    <button className='bg-[#EBF5FF] flex gap-3 items-center p-4 rounded-lg text-[#33A0FF]'><img src={heart} alt="heart" /></button>
                  </div>
                </div>
                <div className='w-full h-[2px] bg-[#F6F7F8] md:block hidden'></div>
                <div className='hidden md:flex gap-2 items-center'>
                  <button className='w-[50%] bg-[#385C8E] flex gap-3 py-3 justify-center items-center text-white rounded-lg poppins-500'><img src={facebook} alt="facebook" />Share on Facebook</button>
                  <button className='w-[50%] bg-[#03A9F4] flex gap-3 py-3 justify-center items-center text-white rounded-lg poppins-500'><img src={twitter} alt="twitter" />Share on Twitter</button>
                </div>
              </div>
            </div>
            <Tabs />
          </div>
          <div className='w-[20%] px-2 hidden lg:block'>
            <h4 className='proxima-400 text-lg text-[#C1C8CE] mb-2'>BEST SELLER</h4>
            <ProductCard />
          </div>
        </div>
        <div className='py-10 hidden md:block'>
          <SectionHeader title={"RELATED PRODUCTS"} />
          <div className='py-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
            <ProductCard hot={true} image={sneakers} />
            <ProductCard image={bag} />
            <ProductCard image={bag2} />
            <ProductCard image={sneakers2} />
          </div>
        </div>
        <div className="block md:hidden py-2">
          <MobileSectionHeader title={"Review Product"} more={"See More"} />
          <div className="flex gap-2 items-center">
            <div className='flex gap-1 items-center'>
              <img src={starFill} alt="star" />
              <img src={starFill} alt="star" />
              <img src={starFill} alt="star" />
              <img src={starFill} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p className="text-[10px] text-[#9098B1] poppins-700">4.5</p>
            <p className="text-[10px] text-[#9098B1]">(5 Review)</p>
          </div>

          <div className="flex gap-2 items-center mt-4">
            <img src={profile} alt="profile" className="w-[48px] h-[48px] rounded-full" />
            <div className="flex flex-col gap-1 ">
              <h4 className="text-[14px] text-[#223263] poppins-700">James Lawson</h4>
              <div className='flex gap-1 items-center'>
                <img src={starFill} alt="star" />
                <img src={starFill} alt="star" />
                <img src={starFill} alt="star" />
                <img src={starFill} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>
          </div>
          <p className="text-[12px] mt-4 text-[#9098B1]">air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
          <div className="flex gap-2 mt-3">
            <div className="w-[72px] h-[72px]">
              <img src={product1} alt="product" className="w-full h-full object-contain rounded-md" />
            </div>
            <div className="w-[72px] h-[72px]">
              <img src={product2} alt="product" className="w-full h-full object-contain rounded-md" />
            </div>
            <div className="w-[72px] h-[72px]">
              <img src={product3} alt="product" className="w-full h-full object-contain rounded-md" />
            </div>
          </div>
          <p className="text-[#9098B1] text-[10px]">December 10, 2016</p>
        </div>
        <div className="block md:hidden">
          <MobileSectionHeader title={"You Might Also Like"} />
          <div className='grid grid-cols-2 gap-2'>
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div className="block md:hidden fixed bottom-[90px] w-[93%] mx-auto z-50">
          <button className="w-full text-sm poppins-700 rounded-md text-white bg-[#40BFFF] py-4">Add To Cart</button>
        </div>
      </div>
    </>
  )
}

export default ProductDeatils