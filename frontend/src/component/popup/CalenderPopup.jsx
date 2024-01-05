import React from 'react'
import Input from '../common/Input'

const CalenderPopup = () => {
  return (
    <div>
        <h1 className='text-center text-3xl'>Set Calender</h1>
        <div>
            <Input type='date'/>
        </div>
    </div>
  )
}

export default CalenderPopup