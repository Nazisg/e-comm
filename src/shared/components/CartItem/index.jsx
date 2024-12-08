import React from 'react'
import remove from '../../media/icons/x.svg'
import product from '../../media/imgs/product-sneakers-2.png'
import Counter from '../Counter'

const CartItem = () => {
    return (
        <tr className='text-left border-b-[2px] border-b-[#F6F7F8]'>
            <td className='py-5'>
                <div className='flex gap-6 items-center'>
                    <div className='bg-[#FFF7F8] w-[23px] h-[23px] rounded-full flex justify-center items-center cursor-pointer'><img src={remove} alt="remove" /></div>
                    <div className='bg-[#F6F6F6] w-[137px] h-[94px] rounded-lg'><img src={product} alt="product" className='w-full h-full object-contain' /></div>
                    <h5 >Nike Airmax 270 react</h5>
                </div>
            </td>
            <td >$998</td>
            <td>
                <Counter />
            </td>
            <td>$499</td>
        </tr>)
}

export default CartItem