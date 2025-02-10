import Usercards from '@/app/components/Usercards'
import CountChat from '@/app/components/CountChat'
import React from 'react'
import AttendanceChart from '@/app/components/AttendanceChart'
import FinanceChart from '@/app/components/financeChart'
import CalanderReact from '@/app/components/calanderReact'
import Annocenmets from '@/app/components/Annocenmets'
import ChatBot from '@/app/components/Chatbot'
const AdminPage = () => {
  return (
    <div className='flex p-4 gap-4 flex-col md:flex-row'>



      {/* {left} */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
      {/* usercards */}
      <div className='flex  gap-4 justify-between  flex-wrap'>
        <Usercards type="student" />
        <Usercards type="teacher" />
        <Usercards type="parent" />
        <Usercards type="staff" />
      </div>
      <div>
        {/* middle chats */}
        <div className='flex gap-4 flex-col lg:flex-row '>
          {/* Count chart */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChat />
          </div>
          {/* Attendance chart */}
          <div className='w-full lg:w-2/3 h-[450px]'>
          <AttendanceChart />
          </div>
        </div>
        </div>
        {/* bottom chats */}
        <div className='w-full h-[500px]'>
          <FinanceChart />
        </div>
      </div>
      
      {/* {right} */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
      <div>
        <CalanderReact />
        <Annocenmets />
      </div>
      <ChatBot />
      </div>

    </div>

  )
}

export default AdminPage