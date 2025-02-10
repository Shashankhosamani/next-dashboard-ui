"use client"
import React, { PureComponent } from 'react';
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
    name: 'total',
    count: 106,
    fill: 'white',
  },
  {
    name: 'girls',
    count: 53,
    fill: '#F9D949',
  },
  
  {
    name: 'boys',
    count: 50,
    fill: '#C3EBFA',
  },
  
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};





const CountChat = () => {
  return (
    <div className='w-full h-full bg-white rounded-2xl p-4'>
        {/* TITLe */}
    <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>Students</h1>
        <Image
        src="/moreDark.png"
        alt="more"
        width={20}
        height={20}
        />

    </div>
    {/* CHART */}
    <div className='w-full h-[75%] relative'>
        <ResponsiveContainer >
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <Image src="/malefemale.png"
        alt="male"
        width={50}
        height={50}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        />


      </div>

    </div>
    {/* FOOTER */}
    <div className='flex justify-center gap-16'>
        <div className='flex flex-col gap-1'>
            <div className='w-5 h-5 bg-lamaSky rounded-full'/>
                <h1 className='font-bold'>123</h1>
                <h2 className='text-sm text-gray-300'>Boys (12%)</h2>
          
        </div>
        <div className='flex flex-col gap-1'>
            <div className='w-5 h-5 bg-lamaYellow rounded-full'/>
                <h1 className='font-bold'>123</h1>
                <h2 className='text-sm text-gray-300'>girls (44%)</h2>
            
        </div>
    </div>
    </div>
    
    
  )
}

export default CountChat