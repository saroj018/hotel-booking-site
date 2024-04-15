import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/HotelDetailContext'


const AboutRoom = () => {

    const{hotelDetails,setHotelDetails,setBtnDisable}=useContext(Context)

    useEffect(()=>{
        if(true){
            setBtnDisable(false)
        }
    },[])

    const addHandler=(text)=>{
        
        setHotelDetails((prv)=>({...prv,customerNumber:{
            ...prv.customerNumber,
            [text]:prv.customerNumber[text]+1
        }}))
    }
    const lessHandler=(text)=>{
        if(hotelDetails?.customerNumber?.[text]>1){
            setHotelDetails((prv)=>({...prv,customerNumber:{
                ...prv.customerNumber,
                [text]: prv.customerNumber[text] - 1
            }}))
        }
    }

    

    return (
       <>
        <div className='w-1/2 mx-auto'>
            <h1 className='text-4xl font-bold my-4'>Share some basics about your place</h1>
            <p className='text-xl'>You'll add more details later, like bed types.</p>
            <div>
                <div className='flex items-center border-2 p-3 rounded-md my-3 justify-between'>
                        <p className='text-xl font-semibold my-1'>Guests</p>
                    <div className='flex gap-6'>
                        <p onClick={()=>addHandler('guest')} className='rounded-full select-none cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>+</p>
                        <p className='rounded-full cursor-pointer border-2 text-2xl px-4 select-none py-2 h-[50px] w-[50px]'>{hotelDetails?.customerNumber?.guest}</p>
                        <p onClick={()=>lessHandler('guest')} className='rounded-full select-none cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>-</p>
                    </div>
                </div>
                <div className='flex items-center border-2 p-3 rounded-md my-3 justify-between'>
                        <p className='text-xl font-semibold my-1'>Beds</p>
                    <div className='flex gap-6'>
                        <p onClick={()=>addHandler('bed')} className='rounded-full select-none cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>+</p>
                        <p className='rounded-full cursor-pointer border-2 text-2xl px-4 select-none py-2 h-[50px] w-[50px]'>{hotelDetails?.customerNumber?.bed}</p>
                        <p onClick={()=>lessHandler('bed')} className='rounded-full select-none cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>-</p>
                    </div>
                </div>
                <div className='flex items-center border-2 p-3 rounded-md my-3 justify-between'>
                        <p className='text-xl font-semibold my-1'>Bed Room</p>
                    <div className='flex gap-6'>
                        <p onClick={()=>addHandler('bedroom')} className='rounded-full select-none cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>+</p>
                        <p className='rounded-full cursor-pointer border-2 text-2xl px-4 select-none py-2 h-[50px] w-[50px]'>{hotelDetails?.customerNumber?.bedroom}</p>
                        <p onClick={()=>lessHandler('bedroom')} className='rounded-full select-none cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>-</p>
                    </div>
                </div>
                <div className='flex items-center border-2 p-3 rounded-md my-3 justify-between'>
                        <p className='text-xl font-semibold my-1'>Bathrooms</p>
                    <div className='flex gap-6'>
                        <p onClick={()=>addHandler('bathroom')} className='rounded-full select-none cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>+</p>
                        <p className='rounded-full cursor-pointer border-2 text-2xl px-4 select-none py-2 h-[50px] w-[50px]'>{hotelDetails?.customerNumber?.bathroom}</p>
                        <p onClick={()=>lessHandler('bathroom')} className='rounded-full select-none cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>-</p>
                    </div>
                </div>
            </div>
        </div>
        
       </>
    )
}

export default AboutRoom