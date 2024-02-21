import React, { useState } from 'react'
import SelectHomeType from './SelectHomeType'
import SelectRoomType from './SelectRoomType'
import AddLocation from './AddLocation'
import OfferServices from './OfferServices'
import AddPhotos from './AddPhotos'
import HomeSummery from './HomeSummery'
import HomeDescription from './HomeDescription'
import BookingType from './BookingType'
import SetPrice from './SetPrice'
import DiscountPage from './DiscountPage'
import FinalPage from './FinalPage'
import Button from '../../component/common/Button'
import AboutRoom from './AboutRoom'
import HouseTitle from './HouseTitle'
import HotelDetailContext from '../context/HotelDetailContext'

const HotelDetails = () => {
    const[count,setCount]=useState(1)
  return (
    <HotelDetailContext>
    {count===1 && <SelectHomeType/>}
    {count===2 && <SelectRoomType/>}
    {count===3 && <AddLocation/>}
    {count===4 && <AboutRoom/>}
    {count===5 && <OfferServices/>}
    {count===6 && <AddPhotos/>}
    {count===7 && <HouseTitle/>}
    {count===8 && <HomeSummery/>}
    {count===9 && <HomeDescription/>}
    {count===10 && <BookingType/>}
    {count===11 && <SetPrice/>}
    {count===12 && <DiscountPage/>}
    {count===13 && <FinalPage   />}
      <div className='footer bg-neutral-300 p-7 fixed w-full left-0 top-[87%] z-0'>
        {count>1 && <Button className='text-2xl ' onClick={() => setCount(count-1)}> Back</Button>}
        {count<13 && <Button className='text-2xl ml-[85%]' onClick={() => setCount(count+1)}>Next</Button>}
      </div>
    </HotelDetailContext>
  )
}

export default HotelDetails