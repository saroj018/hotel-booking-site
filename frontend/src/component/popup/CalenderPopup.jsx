import React from 'react'
import { twMerge } from 'tailwind-merge'
import DateRange from '../utlils/DateRange'

const CalenderPopup = ({className}) => {
  return (
    <div>
        <h1 className={twMerge('text-center text-3xl',className)}>Select Checkout Date</h1>
        <div className='w-full border-2 border-red-500' >
            <DateRange/>
        </div>
    </div>
  )
}

export default CalenderPopup