import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import nike from '../../media/icons/nike.svg'
import figma from '../../media/icons/figma.svg'
const LatestNews = () => {
    return (
        <div className='w-[85%] mx-auto hidden md:block'>
            <SectionHeader title={"LATEST NEWS"} />
            <div className='flex items-center justify-between py-8'>
                <div className='flex gap-2 items-center'>
                    <img src={nike} alt="nike" />
                    <div className='flex flex-col gap-1 w-[200px]'>
                        <span className='text-lg poppins-500 text-[#C1C8CE]'>01 Jan, 2015</span>
                        <h5 className='text-[22px] poppins-600'>Fashion Industry</h5>
                        <p className='proxima-400 text-lg '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <img src={figma} alt="nike" />
                    <div className='flex flex-col gap-1 w-[200px]'>
                        <span className='text-lg poppins-500 text-[#C1C8CE]'>01 Jan, 2015</span>
                        <h5 className='text-[22px] poppins-600'>Best Design Tools</h5>
                        <p className='proxima-400 text-lg '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <img src={figma} alt="nike" />
                    <div className='flex flex-col gap-1 w-[200px]'>
                        <span className='text-lg poppins-500 text-[#C1C8CE]'>01 Jan, 2015</span>
                        <h5 className='text-[22px] poppins-600'>Best Design Tools</h5>
                        <p className='proxima-400 text-lg '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestNews