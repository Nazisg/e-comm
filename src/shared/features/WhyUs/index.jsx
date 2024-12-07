import React from 'react'
import shipping from '../../media/icons/shipping.svg'
import refund from '../../media/icons/refund.svg'
import support from '../../media/icons/support.svg'

const WhyUs = () => {
    return (
        <div className='py-20 flex items-center justify-around'>
            <div className='flex flex-col gap-3 items-center w-[200px]'>
                <img src={shipping} alt="shipping" />
                <div>
                    <h5 className='text-[27px] poppins-500'>FREE SHIPPING</h5>
                    <p className='text-lg proxima-400 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className='flex flex-col gap-3 items-center w-[200px]'>
                <img src={refund} alt="refund" />
                <div>
                    <h5 className='text-[27px] poppins-500'>100% REFUND</h5>
                    <p className='text-lg proxima-400 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className='flex flex-col gap-3 items-center w-[200px]'>
                <img src={support} alt="support" />
                <div>
                    <h5 className='text-[27px] poppins-500'>SUPPORT 24/7</h5>
                    <p className='text-lg proxima-400 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyUs