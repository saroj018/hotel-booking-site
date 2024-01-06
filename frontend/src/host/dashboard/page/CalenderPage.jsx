import React from 'react'
import { Calendar } from 'antd'
import CalendarPopup from '../../popup/CalendarPopup'

const CalenderPage = () => {
  return (
    <div>
        <div className='w-full flex gap-5 mt-5 border-2 h-screen'>
            <Calendar className='text-center max-w-[72%] text-xl'/>
            <CalendarPopup/>
        </div>
    </div>
  )
}

export default CalenderPage