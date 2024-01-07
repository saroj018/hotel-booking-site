import  { useState } from 'react'
import Control from '../component/Control'
import BookSummery from '../component/BookSummery'

const CalendarPopup = () => {

    const [show, setShow] = useState({
        control: true,
        summery: false
    })

    const controlPopup = (value) => {
        setShow(() => ({
            control: value === 'control' ? true : false,
            summery: value === 'summery' ? true : false
        }))
    }
    return (
        <div className='grow border-2 rounded-md p-4 h-full overflow-scroll'>
            <div className='flex gap-5 items-center mx-auto w-fit text-xl font-bold underline my-4'>
                <p onClick={() => controlPopup('control')} className=' cursor-pointer'>Control</p>
                <p onClick={() => controlPopup('summery')} className=' cursor-pointer'>Book Summery</p>
            </div>
            <hr />
            <div>
                {show.control && <Control />}
                {show.summery && <BookSummery />}
            </div>
        </div>
    )
}

export default CalendarPopup