import React from 'react'
import Breadcrumbs from '../../shared/components/Breadcrumbs'
import mainImage from '../../shared/media/imgs/product-sneakers-2.png'
import starFill from '../../shared/media/icons/star-fill.svg'
import star from '../../shared/media/icons/star.svg'
import cart from '../../shared/media/icons/cart-2.svg'
import heart from '../../shared/media/icons/heart.svg'
import facebook from '../../shared/media/icons/facebook-white.svg'
import twitter from '../../shared/media/icons/twitter-white.svg'
import ProductCard from '../../shared/components/ProductCard'
import SectionHeader from '../../shared/components/SectionHeader'
const ProductDeatils = () => {
  return (
    <>
      <Breadcrumbs />
      <div className='w-[85%] mx-auto py-10'>
        <div className='flex items-start gap-6 w-full'>
          <div className='w-[80%]'>
            <div className='flex gap-6'>
              <div className='flex flex-col gap-4'>
                <div className='w-[375px] h-[271px] bg-[#F6F6F6] rounded-lg' >
                  <img src={mainImage} alt="product" className='w-full h-full object-contain' />
                </div>
                <div className='flex items-center gap-3'>
                  <div className='bg-[#F6F6F6] w-[85px] h-[85px] border-[3px] border-[#E5E8EA]'>
                    <img src={mainImage} alt="product" className='w-full h-full object-contain' />
                  </div>
                  <div className='bg-[#F6F6F6] w-[85px] h-[85px] border-[3px] border-[#E5E8EA]'>
                    <img src={mainImage} alt="product" className='w-full h-full object-contain' />
                  </div>
                  <div className='bg-[#F6F6F6] w-[85px] h-[85px] border-[3px] border-[#E5E8EA]'>
                    <img src={mainImage} alt="product" className='w-full h-full object-contain' />
                  </div>
                  <div className='bg-[#F6F6F6] w-[85px] h-[85px] border-[3px] border-[#006CFF]'>
                    <img src={mainImage} alt="product" className='w-full h-full object-contain' />
                  </div>
                </div>
              </div>
              <div className='w-full flex flex-col gap-5'>
                <h2 className='poppins-500 text-2xl'>Nike Airmax 270 React</h2>
                <div className='flex gap-3 items-center'>
                  <div className='flex gap-2 items-center'>
                    <img src={starFill} alt="star" />
                    <img src={starFill} alt="star" />
                    <img src={starFill} alt="star" />
                    <img src={starFill} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <p className='text-[#C1C8CE] proxima-400'>0 reviews</p>
                  <p className='text-[#33A0FF] proxima-400'>Submit a review</p>
                </div>
                <div className='w-full h-[2px] bg-[#F6F7F8]'></div>
                <div className='flex gap-3 items-center'>
                  <h3 className='text-blue poppins-700 text-xl'>$299,43</h3>
                  <p className='text-sm text-[#9098B1] line-through'>$534,33</p>
                  <p className='text-red poppins-700 text-sm'>24% Off</p>
                </div>
                <table className='text-sm w-[60%]'>
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
                <table className='w-[60%]'>
                  <tr>
                    <td className='py-2'>Select Color:</td>
                    <td>
                      <div className='flex gap-4 items-center'>
                        <div className='w-[17px] h-[17px] rounded-full bg-[#006CFF] border-[2px] border-[#006CFF]'></div>
                        <div className='w-[17px] h-[17px] rounded-full bg-[#FC3E39]'></div>
                        <div className='w-[17px] h-[17px] rounded-full bg-[#171717]'></div>
                        <div className='w-[17px] h-[17px] rounded-full bg-[#FFF600]'></div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='py-2'>Size</td>
                    <td>
                      <select name="" id="">XS</select>
                    </td>
                  </tr>
                </table>
                <div className='w-full h-[2px] bg-[#F6F7F8]'></div>
                <div className='flex justify-between items-center'>
                  <div className='inline-flex justify-start items-start bg-[#F6F7F8] rounded-md'>
                    <div className='text-[#33A0FF] py-2 px-3'>+</div>
                    <div className='py-2 px-3'>2</div>
                    <div className='text-[#33A0FF] py-2 px-3'>-</div>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <button className='bg-[#EBF5FF] flex gap-3 items-center py-3 px-5 rounded-lg text-[#33A0FF]'><img src={cart} alt="cart" /> Add To Cart</button>
                    <button className='bg-[#EBF5FF] flex gap-3 items-center p-4 rounded-lg text-[#33A0FF]'><img src={heart} alt="heart" /></button>
                  </div>
                </div>
                <div className='w-full h-[2px] bg-[#F6F7F8]'></div>
                <div className='flex gap-2 items-center'>
                  <button className='w-[50%] bg-[#385C8E] flex gap-3 py-3 justify-center items-center text-white rounded-lg poppins-500'><img src={facebook} alt="facebook" />Share on Facebook</button>
                  <button className='w-[50%] bg-[#03A9F4] flex gap-3 py-3 justify-center items-center text-white rounded-lg poppins-500'><img src={twitter} alt="twitter" />Share on Twitter</button>
                </div>
              </div>
            </div>
            <div className='py-10'>
              <div className='bg-[#FAFAFB] p-6 rounded-xl'>
                <ul className='flex gap-6 items-center text-lg border-b-[2px] border-[#E5E8EA]'>
                  <li className='text-[#2E90E5] border-b-[2px] border-[2E90E5] pb-3 cursor-pointer'>Product Infomation</li>
                  <li className='pb-3 cursor-pointer'>Reviews 0</li>
                  <li className='pb-3 cursor-pointer'>Another tab</li>
                </ul>
                <div className='text-xs text-[#9098B1] pt-6 leading-6 tracking-[0.5px]'>
                  air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
                  <br /> air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
                  <br /> air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
                </div>
              </div>
            </div>
          </div>
          <div className='w-[20%] px-2'>
            <h4 className='proxima-400 text-lg text-[#C1C8CE] mb-2'>BEST SELLER</h4>
            <ProductCard />
          </div>
        </div>
        <div className='py-10'>
          <SectionHeader title={"RELATED PRODUCTS"} />
          <div className='py-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDeatils