import { ActivitySquare, MessageCircleMore } from 'lucide-react'
import React, { useState } from 'react'


const BookingType = () => {

    const[booking,setBooking]=useState('')

    const clickHandler=(text)=>{
        setBooking(text)
    }
  return (
    <>
    <div className='w-1/2 mx-auto mt-20'>
        <h1 className='text-center text-4xl font-bold'>Decide how you’ll confirm reservations</h1>
            <div onClick={()=>clickHandler('approve')} className={`flex justify-between border-2 cursor-pointer border-neutral-600 rounded-md p-8 mt-8 items-center ${booking==='approve' ? 'bg-[#ff5a5f] border-none text-white':''}`}>
                <div>
                    <h1 className='text-3xl font-bold'>Approve or decline requests</h1>
                    <p className='text-xl my-3'>Guests must ask if they can book.</p>
                </div>
                    <MessageCircleMore size={80} strokeWidth={1}/>
            </div>

            <div onClick={()=>clickHandler('instant')} className={`flex justify-between cursor-pointer border-neutral-600 border-2 rounded-md p-8 items-center my-6 ${booking==='instant' ? 'bg-[#ff5a5f] border-none text-white':''}`}>
                <div >
                    <h1 className='text-3xl font-bold'>Use Instant Book</h1>
                    <p className='text-xl font-bold my-3'>Guests can book automatically.</p>
                </div>
                    <ActivitySquare size={80} strokeWidth={1} />
            </div>
    </div>

    </>
  )
}

export default BookingType