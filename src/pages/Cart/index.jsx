import React from 'react'
import Breadcrumbs from '../../shared/components/Breadcrumbs'
import CartItem from '../../shared/components/CartItem'
import CartItemMobile from '../../shared/components/CartItemMobile'
const Cart = () => {
  return (
    <>
      <Breadcrumbs />
      <div className='w-[85%] mx-auto py-3 md:py-10 md:mb-0 mb-14'>
        <table className='w-full hidden md:table'>
          <thead className='py-5'>
            <tr className='border-b-[2px] border-b-[#F6F7F8] text-left'>
              <th className='py-4'>PRODUCT</th>
              <th>PRICE</th>
              <th>QTY</th>
              <th>UNIT PRICE</th>
            </tr>
          </thead>
          <tbody className='text-lg'>
            <CartItem />
            <CartItem />
          </tbody>
        </table>
        <div className='flex flex-col gap-2 md:hidden'>
          <CartItemMobile />
          <CartItemMobile />
        </div>
        <div className='flex flex-col md:flex-row py-5 md:py-20 justify-between items-start'>
          <div className='md:w-[40%] w-full border-[2px] border-[#F1F3F4] flex rounded-sm'>
            <input type="text" placeholder='Voucher code' className='w-full p-3' />
            <button className='poppins-600 text-lg text-white bg-blue p-4 rounded-tr-sm rounded-br-sm'>Redeem</button>
          </div>
          <div className='md:w-[370px] w-full md:border-none border-[2px] border-[#EBF0FF] p-4 mt-4 md:mt-0 rounded-md'>
            <table className='text-lg w-full'>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td className='text-right py-2'>$998</td>
                </tr>
                <tr>
                  <td>Shipping fee</td>
                  <td className='text-right py-2'>$20</td>
                </tr>
                <tr>
                  <td>Coupon</td>
                  <td className='text-right py-2'>No</td>
                </tr>
              </tbody>
            </table>
            <div className='w-full h-[2px] bg-[#F6F7F8] my-4'></div>
            <table className='w-full'>
              <tbody>
                <tr className='poppins-500 text-[22px] md:text-[30px]'>
                  <td>TOTAL</td>
                  <td className='text-right'>$118</td>
                </tr>
              </tbody>
            </table>
            <button
              className='bg-[#33A0FF] poppins-500 text-lg text-white w-full p-4 rounded-lg mt-4'>
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart