import React, { useContext, useEffect, useState } from 'react'
import Input from '../../component/common/Input'
import { Context } from '../context/HotelDetailContext'


const HouseTitle = () => {

  const{hotelDetails,setHotelDetails,setBtnDisable}=useContext(Context)

  useEffect(()=>{
    if(hotelDetails.houseTitle.length>10){
        setBtnDisable(false)
    }
},[hotelDetails.houseTitle])
  return (
    <>
    <div className='w-1/2 mx-auto'>
        <h1 className='text-center text-3xl my-4'>Now, let's give your house a title</h1>
        <p className='text-xl text-center'>Short titles work best. Have fun with it—you can always change it later.</p>
        <Input value={hotelDetails.houseTitle} onChange={(e)=>setHotelDetails((prv)=>({...prv,houseTitle:e.target.value}))} className={'border-2 border-neutral-800 w-full rounded-md my-5 px-4 text-xl '}/>
    </div>
    </>
  )
};

export default HouseTitle;
