import { ActivitySquare, MessageCircleMore } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../bar/Footer'

const BookingType = () => {
  return (
    <>
    <div className='w-1/2 mx-auto mt-20'>
        <h1 className='text-center text-4xl font-bold'>Decide how you’ll confirm reservations</h1>
        <div>
            <div className='flex justify-between border-2 border-neutral-600 rounded-md p-8 mt-8 items-center'>
                <div>
                    <h1 className='text-3xl font-bold'>Approve or decline requests</h1>
                    <p className='text-xl my-3'>Guests must ask if they can book.</p>
                </div>
                    <MessageCircleMore size={80} strokeWidth={1}/>
            </div>

            <div className='flex justify-between border-neutral-600 border-2 rounded-md p-8 items-center my-6'>
                <div>
                    <h1 className='text-3xl font-bold'>Use Instant Book</h1>
                    <p className='text-xl font-bold my-3'>Guests can book automatically.</p>
                </div>
                    <ActivitySquare size={80} strokeWidth={1} />
            </div>
        </div>
    </div>

    <Link to={'/host/setprice'}><Footer/></Link>
    </>
  )
}

export default BookingType