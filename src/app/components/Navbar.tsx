import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
        {/* {Search Bar} */}
        <div 
        className='hidden md:flex items-center gap-2 text-xs ring-gray-300 px-2 ring-[1.5px] rounded-full '>
            <Image 
            src="/search.png" 
            alt="search" 
            width={14} 
            height={14} 
            />

            <input type="text" name="" id="" placeholder='Search...'  className='w-[200px] outline-none bg-transparent p-2' />

        </div>
        {/* {icons and users} */}
        <div className='flex items-center gap-6 justify-end w-full'>
            <div className='flex items-center gap-2 bg-white rounded-full w-7 h-7 justify-center cursor-pointer'>
                <Image 
                src="/message.png" 
                alt="message" 
                width={20} 
                height={20} 
                />
            </div>
            <div className='flex items-center gap-2 bg-white rounded-full w-7 h-7 justify-center cursor-pointer relative'>
                <Image 
                src="/announcement.png" 
                alt="message" 
                width={20} 
                height={20} 
                />
                <div 
                className='absolute -top-3 -right-3 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center
                text-xs'>
                    <span className='text-[10px] text-white'>5</span>
                </div>
            </div>
            <div className='flex flex-col'>
                <span className='text-sm leading-3 font-medium'>John Doe</span>
                <span className='text-[10px] text-gray-500 text-right'>Admin</span>
            </div>
            <Image 
            src="/avatar.png" 
            alt="profile" 
            width={36} 
            height={36} 
            className='rounded-full'/>
        </div>
    </div>

  )
}

export default Navbar;