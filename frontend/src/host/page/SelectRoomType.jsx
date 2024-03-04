import { Blinds, DoorClosed, Home } from 'lucide-react'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import RoomType from '../component/RoomType'
import { Context } from '../context/HotelDetailContext'


const SelectRoomType = () => {

    const{hotelDetails,setHotelDetails,setBtnDisable}=useContext(Context)

    const clickHandler = (item) => {
        setHotelDetails((prv)=>({...prv,roomType:item}))
    }

    useEffect(()=>{
        if(hotelDetails.roomType!=''){
            setBtnDisable(false)
        }
    },[hotelDetails.roomType])

    const roomInfo = [
        {
            name: 'An Entire Place',
            description: 'Guests have the whole place to themselves.',
            icon: <Home size={60} strokeWidth={1} />,
            type:'entire-place'
        },
        {
            name: 'A Room',
            description: 'Guests have their own room in a home, plus access to shared spaces.',
            icon: <DoorClosed size={60} strokeWidth={1} />,
            type:'room'
        }, {
            name: 'A Shared Room',
            description: 'Guests sleep in a room or common area that may be shared with you or others.',
            icon: <Blinds size={60} strokeWidth={1} />,
            type:'shared-room'
        }
    ]
    return (
        <div className='w-1/2 mx-auto' >
            {
                roomInfo.map((item, index) => {
                    return  <RoomType onClick={()=>clickHandler(item.type)} key={index} name={item.name} description={item.description} icon={item.icon} className={`${hotelDetails.roomType===item.type ? 'bg-[#ff5a5f] text-white border-none':''}`} />
                })
            }
        </div >
    )
}

export default SelectRoomType