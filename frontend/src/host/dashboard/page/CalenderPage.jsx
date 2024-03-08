import React from 'react'
import { Calendar } from 'antd'
import CalendarPopup from '../../popup/CalendarPopup'

const CalenderPage = () => {

  const changeHandler=(e)=>{
    console.log(e);
  }
  return (
    <div>
        <div className='w-full flex gap-5 mt-5 border-2 h-screen'>
            <Calendar onChange={changeHandler} className='text-center max-w-[72%] text-xl'/>
            <CalendarPopup/>
        </div>
    </div>
  )
}

export default CalenderPage