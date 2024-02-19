import { Blinds, DoorClosed, Home } from 'lucide-react'
import React, { Fragment, useState } from 'react'
import RoomType from '../component/RoomType'


const SelectRoomType = () => {

    const [roomType, setRoomType] = useState()

    const clickHandler = (item) => {
        console.log(item);
        setRoomType(item)
    }

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
                    return  <RoomType onClick={()=>clickHandler(item.type)} key={index} name={item.name} description={item.description} icon={item.icon} className={`${roomType===item.type ? 'bg-[#ff5a5f] text-white border-none':''}`} />
                })
            }
        </div >
    )
}

export default SelectRoomType