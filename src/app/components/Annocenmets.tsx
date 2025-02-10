import React from 'react'

const Annocenmets = () => {
  return (
    <div className="bg-white p-4 rounded-md my-2">
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold'>Annocements</h1>
            <span className='text-gray-400 text-xs'>viewAll</span>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
            <div className='bg-lamaSkyLight rounded-md p-4'>
                <div className='flex items-center justify-between'>
                   <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</h2>
                   <span className='text-gray-400 text-xs bg-white rounded-md px-1 py-1'>2/12/2024</span>
                </div>
                <p className='text-gray-400 text-sm mt-2'>Lorem ipsm dafd fdaihfua fdisafhias fjdisaofh afudha </p>
            </div>
            <div className='bg-lamaPurpleLight rounded-md p-4'>
                <div className='flex items-center justify-between'>
                   <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</h2>
                   <span className='text-gray-400 text-xs bg-white rounded-md px-1 py-1'>2/12/2024</span>
                </div>
                <p className='text-gray-400 text-sm mt-2'>Lorem ipsm dafd fdaihfua fdisafhias fjdisaofh afudha </p>
            </div>
            <div className='bg-lamaYellowLight rounded-md p-4'>
                <div className='flex items-center justify-between'>
                   <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</h2>
                   <span className='text-gray-400 text-xs bg-white rounded-md px-1 py-1'>2/12/2024</span>
                </div>
                <p className='text-gray-400 text-sm mt-2'>Lorem ipsm dafd fdaihfua fdisafhias fjdisaofh afudha </p>
            </div>
        </div>
    </div>
  )
}

export default Annocenmets