import React, { useContext, useEffect } from 'react'
import Button from '../../component/common/Button'
import { Context } from '../context/HotelDetailContext'


const AddLocation = () => {

  const{setBtnDisable,hotelDetails}=useContext(Context)

  useEffect(()=>{
    if(true){
        setBtnDisable(false)
    }
},[])
  return (
    <>
      <div className='flex justify-between items-center flex-col gap-10'>
        <h1 className='text-3xl font-bold text-center'>Where's your place located?</h1>
        <Button>Get Location</Button>
        <div>
         
        </div>
      </div>
    </>
  )
}

export default AddLocation