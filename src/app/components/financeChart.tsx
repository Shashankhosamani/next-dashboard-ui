"use client"


import Image from 'next/image'
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    expense: 4000,
    revenue: 2400,


  },

  {
    name: 'Feb',
    expense: 3000,
    revenue: 1398,
  

  },

    {
    name: 'Mar',
    expense: 2000,
    revenue: 9800,
    

  },

  {
    name: 'Apr',
    expense: 2780,
    revenue: 3908,
    

  },

  {
    name: 'May',
    expense: 1890,
    revenue: 4800,
   

  },

  {
    name: 'Jun',
    expense: 2390,
    revenue: 3800,
    

  },

  {
    name: 'Jul',
    expense: 5490,
    revenue: 9300,
    

  },

  {
    name: 'Aug',
    expense: 2490,
        revenue: 1300,
    

  },    

  {
    name: 'Sep',
    expense: 3190,
    revenue: 5300,
    

  },        

  {
    name: 'Oct',
    expense: 3490,
    revenue: 4100,
  },            


  {
    name: 'Nov',
    expense: 3430,
    revenue: 4200,
  },                


  {
    name: 'Dec',
    expense: 3930,
    revenue: 4500,

  },                    
];

const financeChart = () => {
  return (
    <div className='w-full h-full bg-white rounded-2xl p-4'>
        {/* TITLe */}
    <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>Finance</h1>
        <Image
        src="/moreDark.png"
        alt="more"
        width={20}
        height={20}
        />
        </div>
        {/* CHART */}
        <div className='w-full h-[75%] relative'>
        <ResponsiveContainer width="100%" height="90%">
        <LineChart
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
          <CartesianGrid strokeDasharray="3 3"  vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#d1d5db'}} tickMargin={10}/>
          <YAxis axisLine={false} tickLine={false} tick={{fill: '#d1d5db'}} tickMargin={20}/>
          <Tooltip contentStyle={{borderRadius: '10px', borderColor: 'lightgray'}}/>
          <Legend verticalAlign='top' align='center' height={36} iconType='circle' iconSize={10} wrapperStyle={{paddingTop: '20px' , paddingBottom: '40px'}}/>
          <Line 
          type="monotone" 
          dataKey="expense" 
          stroke="#8884d8" 
          strokeWidth={5}

           />
          <Line 
          type="monotone" 
          dataKey="revenue" 
          stroke="#82ca9d" 
          strokeWidth={5}
          />

        </LineChart>
      </ResponsiveContainer>
            
        </div>
    </div>
  )
}



export default financeChart