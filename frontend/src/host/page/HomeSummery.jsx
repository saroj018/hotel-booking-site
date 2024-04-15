import { BringToFront, Contact, MapPin, Shell, ShieldHalf } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/HotelDetailContext'


const HomeSummery = () => {

    const item=[
        {
            name:'Peacfull',
            icon:<Shell/>
        },
        {
            name:'Unique',
            icon:<ShieldHalf />
        },
        {
            name:'Family-Freindly',
            icon:<Contact/>
        },
        {
            name:'Stylish',
            icon:<BringToFront />
        },
        {
            name:'Central',
            icon:<MapPin />
        }
    ]

    const{hotelDetails,setHotelDetails,setBtnDisable}=useContext(Context)

    const clickHandler=(text)=>{
        setHotelDetails((prv)=>({...prv,aboutHome:text}))
    }

    useEffect(()=>{
        if(hotelDetails.aboutHome!=''){
            setBtnDisable(false)
        }
    },[hotelDetails.aboutHome])

  return (
    <>
    <div className='w-1/2 mx-auto mt-20'>
        <h1 className='text-center text-4xl font-bold'>Next, let's describe your house</h1>
        <p className='text-xl text-center my-6'>Choose up to 2 highlights. We'll use these to get your description started.</p>
        <div className='grid grid-cols-3 gap-4'>
            {
                item.map((ele,index)=>{
                    return <div onClick={()=>clickHandler(ele.name)} key={index+ele.name} className={`border-2 rounded-full p-2 flex items-center cursor-pointer border-neutral-600 gap-3 ${hotelDetails.aboutHome===ele.name ? 'bg-[#ff5a5f] border-none text-white':''}`}>
                        <span>{ele.icon}</span>
                        <span className='text-xl'>{ele.name}</span>
                    </div>
                })
            }
        </div>
    </div>
    </>
  )
}

export default HomeSummery