"use client"
import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';
const events=[
  {
    id:1,
    Title:"Lorem ipsm ",
    time:"10:00 AM-11:00 AM",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."

  },
  { 
    id:2,
    Title:"Lorem ipsm ",
    time:"10:00 AM-11:00 AM",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
  },

  {
      id:3,
    Title:"Lorem ipsm ",
    time:"10:00 AM-11:00 AM",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
  }

];


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalanderReact = () => {
    const [value,onChange]=useState<Value>(new Date());
  return (
    <div className='bg-white'><Calendar onChange={onChange} value={value} />
    <div className='flex items-center justify-between '>
      <h1 className='text-xl font-semibold my-4'>Events</h1>
      <Image 
      src="/moreDark.png" 
      alt="more" 
      width={20} 
      height={20} 
      />
    </div>
    <div className='flex flex-col gap-4'>
      {events.map((event)=>(
        <div key={event.id} className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple'>
          <div  className='flex items-center justify-between'>
          <h3 className='font-semibold text-gray-600'>{event.Title}</h3>
          <span className='text-gray-300 text-xs'>{event.time}</span>
        </div>
        <p className='text-gray-400 mt-2 text-sm'>{event.description}</p>
        </div>
        
      ))}
    </div>
    </div>
  )
}


export default CalanderReact;
