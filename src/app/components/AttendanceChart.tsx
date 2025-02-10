"use client"

import Image from 'next/image';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',

    present: 60,
    absent: 24,
    total: 84,


  },
  {
    name: 'Tuesday',
    present: 30,
    absent: 66,
    total: 96,


  },

  {
    name: 'Wednesday',
    present: 50,
    absent: 56,
    total: 106,


  },

  {
    name: 'Thursday',
    present: 77,
    absent: 33,
    total: 110,


  },

  {
    name: 'Friday',
    present: 90,
    absent: 16,
    total: 106,
  }


];


const AttendanceChart = () => {
  return (
    <div className="bg-white w-full h-full rounded-2xl p-4">
        <div className='flex justify-between items-center '>
            <h1 className='text-2xl font-bold'>Attendance</h1>
            <Image 
            src="/moreDark.png" 
            alt="more" 
            width={20} 
            height={20} 
            />
        </div>
        <div className='w-full h-[75%] relative my-4'>
        <ResponsiveContainer >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false}  tickLine={false} tick={{fill: '#d1d5db'}}/>
          <YAxis axisLine={false} tickLine={false} tick={{fill: '#d1d5db'}} />
          <Tooltip contentStyle={{borderRadius: '10px', borderColor: 'lightgray'}}/>
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop: '20px',paddingBottom: '40px'}} />
          <Bar 
          dataKey="present" 
          fill="#43C7A0" 


          radius={[10, 10, 0, 0]}
          legendType='circle'
          />
          <Bar 
          dataKey="absent" 
          fill="#EA5455" 
          radius={[10, 10, 0, 0]}
          legendType='circle'


           />
        </BarChart>

      </ResponsiveContainer>
    </div>
    </div>

   
  )
}

export default AttendanceChart