import React from 'react'
import Button from '../../component/common/Button'
import { useNavigate } from 'react-router-dom'

const FinalPage = () => {

    const navigate=useNavigate()
    return (
        <div className='bg-white text-black w-full mt-10'>
            <div className=' w-1/2 mx-auto h-full flex justify-center items-center flex-col gap-20'>
                <h1 className='text-7xl font-bold  text-center'>Congratulation {localStorage.getItem('user') || ''}</h1>
                <p className='text-center text-5xl font-bold'>Now,You is the Part of Airbnb eHost</p>
            <Button onClick={()=>navigate('/host/dashboard/listing')} className={' text-white border-none bg-red-500'}>Go to Dashboard</Button>
            </div>
        </div>
    )
}

export default FinalPage