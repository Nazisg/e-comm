import React from 'react'

const FooterTop = () => {
    return (
        <div className='flex justify-center py-10'>
            <div className='w-[40%] border-[2px] border-[#BCDDFE] flex rounded-sm'>
                <input type="text" placeholder='Search query...' className='w-full p-3' />
                <button className='poppins-600 text-xl text-white bg-blue p-4 rounded-tr-sm rounded-br-sm'>Search</button>
            </div>
        </div>
    )
}

export default FooterTop