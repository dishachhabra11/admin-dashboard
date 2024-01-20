import React from 'react'
import { MdSearch } from "react-icons/md";

const Header = () => {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200'>
        <div className='relative '>
            <MdSearch fontSize={23} className='text-gray-400 absolute top-1/4 px- pl-2 '/><input type="text" placeholder='Search....' className='text-sm focus:outline-none active:outline-none h-10 w-[24rem]  border border-gray-300 rounded-sm px-7'></input></div>
        <div className='flex-items-center gap-2 mr-2'>
            {/* icon  sixe 24 or 23 */}
        </div>
    </div>
  )
}

export default Header