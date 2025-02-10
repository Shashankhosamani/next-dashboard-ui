import Annocenmets from '@/app/components/Annocenmets';
import React from 'react'
import BidCalender from '@/app/components/BidCalender';

const TeacherPage = () => {
  return (
    <div className='flex-1 p-4 gap-4 flex-col xl:flex-row'>
      {/* left */}

      <div className='w-full xl:w-2/3'>
      <div className='h-full bg-white p-4 rounded-md'>
        <h1 className='text-xl font-semibold'>Scheudle</h1>
        <BidCalender />
        </div>

      </div>
    

      {/* right */}
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
 
        <Annocenmets />   
      </div>
    </div>

  )
}


export default TeacherPage;