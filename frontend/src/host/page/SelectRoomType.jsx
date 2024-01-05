import { Blinds, DoorClosed, Home } from 'lucide-react'
import React from 'react'
import Footer from '../bar/Footer'
import { Link } from 'react-router-dom'

const SelectRoomType = () => {
    return (
        <>
        <div className='w-[50%] mx-auto mt-14'>
            <h1 className='text-center text-4xl font-extrabold'>What type of place will guests have?</h1>
            <div className='flex justify-between items-center border-2 rounded-xl border-neutral-500 shadow-md p-5 mt-7'>
                <div>
                    <h1 className='text-2xl font-bold my-2'>An Entire Place</h1>
                    <p className='text-xl'>Guests have the whole place to themselves.</p>
                </div>
                <Home size={60} strokeWidth={1}/>
            </div>
            <div className='flex justify-between items-center border-2 rounded-xl border-neutral-500 shadow-md p-5 mt-5'>
                <div>
                    <h1 className='text-2xl font-bold my-2'>A Room</h1>
                    <p className='text-xl'>Guests have their own room in a home, plus access to shared spaces.</p>
                </div>
                <DoorClosed size={60} strokeWidth={1}/>
            </div>
            <div className='flex justify-between items-center border-2 rounded-xl border-neutral-500 shadow-md p-5 mt-5'>
                <div>
                    <h1 className='text-2xl font-bold my-2'>A Shared Room</h1>
                    <p className='text-xl'>Guests sleep in a room or common area that may be shared with you or others.</p>
                </div>
                <Blinds size={60} strokeWidth={1}/>
            </div>
        </div>
        <Link to={'/host/addlocation'}><Footer/></Link>
        </>
    )
}

export default SelectRoomType