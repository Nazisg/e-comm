import React from 'react'

const Breadcrumbs = () => {
    return (
        <div className='bg-[#F6F7F8] w-full py-2 justify-center hidden md:flex'>
            <div className='flex gap-2 items-center text-lg'>
                <p className='text-[#33A0FF] proxima-400'>Home</p>
                <span className='text-[#C1C8CE] text-sm'>/</span>
                <p className='proxima-400 text-[#33A0FF]'>Hot Deal</p>
                <span className='text-[#C1C8CE] text-sm'>/</span>
                <p className='proxima-400'>Nike Airmax 270 React</p>
            </div>
        </div>
    )
}

export default Breadcrumbs