import React from 'react'
import { ControlBox } from './Control'

const BookSummery = () => {
  return (
    <div>
        <ControlBox title={'Booked By:'} value={'Saroj Aryal'}/>
        <ControlBox title={'Booked On:'} value={'12th Jan,2:05 AM'}/>
        <ControlBox title={'Price:'} value={'$144'}/>
        <ControlBox title={'Discount:'} value={'10%'}/>
        <ControlBox title={'Total Guest:'} value={'5 Guest'}/>
    </div>
  )
}

export default BookSummery