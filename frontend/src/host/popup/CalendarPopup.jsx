import React, { useState } from 'react'
import Control from '../component/Control'
import BookSummery from '../component/BookSummery'

const CalendarPopup = ({id,setId,hotelInfo}) => {

    const [show, setShow] = useState('select')

    return (
        <div className='grow border-2 rounded-md p-4 overflow-y-scroll max-h-[700px]'>
            <div className='flex gap-5 items-center mx-auto w-fit text-xl font-bold  my-4'>
                <p onClick={() => setShow('select')} className={`cursor-pointer ${show=='select' ? 'text-red-500':''}`}>Select hotel</p>
                <p onClick={() => setShow('summery')} className={`cursor-pointer ${show=='summery' ? 'text-red-500':''}`}>Book Summery</p>
            </div>
            <hr />
            <div>
                {show=='select' && <Control  id={id} setId={setId} />}
                {show=='summery' && <BookSummery hotelInfo={hotelInfo} />}
            </div>
        </div>
    )
}

export default CalendarPopup