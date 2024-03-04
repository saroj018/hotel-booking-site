import React, { useContext, useEffect, useState } from 'react'
import TextArea from '../../component/common/TextArea'
import { Context } from '../context/HotelDetailContext'


const HomeDescription = () => {

  const[description,setDescription]=useState('')
  const{hotelDetails,setHotelDetails,setBtnDisable}=useContext(Context)

  const changeHandler=(e)=>{
    setHotelDetails((prv)=>({...prv,description:e.target.value}))
  }

  useEffect(()=>{
    if(hotelDetails.description.length>=100){
        setBtnDisable(false)
    }
},[hotelDetails.description])
  return (
    <>
    <div className='w-1/2 mx-auto relative'>
        <h1 className='text-4xl text-center font-bold'>Create your description</h1>
        <p className='text-xl text-center my-2'>Share what makes your place special.</p>
        <TextArea value={hotelDetails.description} onChange={changeHandler} className={'w-full my-7 rounded-md border-2 outline-none border-neutral-700 text-xl font-bold p-3'}/>
        <p className='inline-block absolute left-0 top-[93%] text-xl'>{hotelDetails.description.length}/1000</p>
    </div>
    </>
  )
}

export default HomeDescription