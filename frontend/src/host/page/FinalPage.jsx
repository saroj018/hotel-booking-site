import React from 'react'
import Button from '../../component/common/Button'

const FinalPage = () => {
    return (
        <div className='bg-black h-screen w-full'>
            <div className=' w-1/2 mx-auto h-full flex justify-center items-center flex-col gap-20'>
                <h1 className='text-7xl font-bold text-white text-center'>Congratulation Saroj</h1>
                <p className='text-center text-5xl font-bold text-white'>Now,You is the Part of Airbnb eHost</p>
            <Button className={'bg-white text-black'}>Go to Dashboard</Button>
            </div>
        </div>
    )
}

export default FinalPage