import React, { useContext, useState } from 'react'
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
import HotelDetailContext, { Context } from '../context/HotelDetailContext'
import ReadyToSend from './ReadyToSend'

const HotelDetails = () => {
    const[count,setCount]=useState(1)
    const{btnDisable,setBtnDisable}=useContext(Context)
  return (
    <>
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
    {count===13 && <ReadyToSend/>}
    {count===14 && <FinalPage   />}
      <div className=' flex justify-between items-center p-7 h-[80px] top-[90%] w-full fixed left-0  -z-1'>
        {count>1 && <Button  className={`text-2xl py-0`} onClick={() => setCount(count-1)}> Back</Button>}
        {count<13 && <Button disabled={btnDisable}  className={`text-2xl py-0 ${btnDisable ? 'cursor-not-allowed':''}`} onClick={() => (setCount(count+1),setBtnDisable(true))}>Next</Button>}
      </div>
    </>
  )
}

export default HotelDetails