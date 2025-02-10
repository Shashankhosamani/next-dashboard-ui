import Annocenmets from '@/app/components/Annocenmets';
import CalanderReact from '@/app/components/calanderReact';
import React from 'react'
import BidCalender from '@/app/components/BidCalender';

const StudentPage = () => {
  return (
    <div className='flex p-4 gap-4 flex-col xl:flex-row'>
      {/* left */}
      <div className='w-full xl:w-2/3'>
      <div className='h-full bg-white p-4 rounded-md'>
        <h1 className='text-xl font-semibold'> Schedule(4A)</h1>
        <BidCalender />
        </div>
      </div>
    

      {/* right */}
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
      <CalanderReact />
        <Annocenmets />   
      </div>
    </div>

  )
}


export default StudentPage;