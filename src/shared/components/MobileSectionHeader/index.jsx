import React from 'react'

const MobileSectionHeader = ({ title, more }) => {
    return (
        <div className='flex justify-between gap-2 items-center my-3 md:hidden'>
            <h4 className='poppins-700 text-[#223263] text-sm'>{title}</h4>
            <a href="#" className='poppins-700 text-[#40BFFF] text-sm'>{more}</a>
        </div>
    )
}

export default MobileSectionHeader