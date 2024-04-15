import React, { useContext, useEffect } from 'react'
import Input from '../../component/common/Input'
import { Context } from '../context/HotelDetailContext'

const DiscountPage = () => {

    const{hotelDetails,setHotelDetails,setBtnDisable}=useContext(Context)

    const changeHandler=(e)=>{
        let discountPer=Number(e.target.value)
        console.log(typeof discountPer);
        setHotelDetails((prv)=>({...prv,discount:discountPer}))
    }

    useEffect(()=>{
            setBtnDisable(false)
        
    },[hotelDetails.discount])
  
    return (
       <>
        <div className='w-1/2 mx-auto'>
            <h1 className='text-center text-4xl font-bold'>Add discounts</h1>
            <p className='text-xl text-center my-2'>Help your place stand out to get booked faster and earn your first reviews.</p>
            <div className='mt-5'>
                <div className='flex cursor-pointer items-center justify-between border-2 border-neutral-300 rounded-md p-4 bg-neutral-100'>
                    <div className='flex items-center gap-6'>
                        <p className='text-2xl'>40%</p>
                        <div>
                            <p className='text-2xl font-bold'>New Listing Promotation</p>
                            <p className='text-xl my-2'>Offer 20% off your first 3 bookings</p>
                        </div>
                    </div>
                    <Input name={'discountPercent'} value={'40'} checked={hotelDetails.discount=='40'} onChange={changeHandler} className={'h-7 w-14'} type='radio' />
                </div>
                <div className='flex items-center cursor-pointer justify-between border-2 border-neutral-300 rounded-md p-4 my-7 bg-neutral-100'>
                    <div className='flex items-center gap-6'>
                        <p className='text-2xl'>20%</p>
                        <div>
                            <p className='text-2xl font-bold'>Weekly discount</p>
                            <p className='text-xl my-2'>For stays of 7 nights or more</p>
                        </div>
                    </div>
                    <Input name={'discountPercent'} checked={hotelDetails.discount=='20'} value={'20'} onChange={changeHandler} className={'h-7 w-14'} type='radio' />
                </div>
                <div className='flex items-center cursor-pointer justify-between border-2 border-neutral-300 rounded-md p-4 bg-neutral-100'>
                    <div className='flex items-center gap-6'>
                        <p className='text-2xl'>15%</p>
                        <div>
                            <p className='text-2xl font-bold' >Monthly discount</p>
                            <p className='text-xl my-2'>For stays of 28 nights or more</p>
                        </div>
                    </div>
                    <Input name={'discountPercent'} checked={hotelDetails.discount==15} value={15} onChange={changeHandler} className={'h-7 w-14'} type='radio' />
                </div>
                <div className='flex items-center py-6 mt-4 cursor-pointer justify-between border-2 border-neutral-300 rounded-md p-4 bg-neutral-100'>
                    <div className='flex items-center  gap-6'>
                        <p className='text-2xl font-bold text-red-500'>No discount</p>
                       
                    </div>
                    <Input name={'discountPercent'} checked={hotelDetails.discount=='0'} value={'0'} onChange={changeHandler} className={'h-7 w-14'} type='radio' />
                </div>
            </div>
        </div>
       </>
    )
}

export default DiscountPage