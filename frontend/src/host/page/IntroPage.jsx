
import React from 'react'
import Button from '../../component/common/Button'
import { Link } from 'react-router-dom'


const IntroPage = () => {
  return (
    <div className='w-full'>
        <h1 className='text-center text-7xl font-bold text-red-600'>Earn with Airbnb</h1>
        <h1 className='text-center mt-10 text-black font-extrabold text-7xl underline'>Airbnb it easily with Airbnb Setup</h1>
        <div className='mt-4'>
            <img className='w-[50%] shadow-xl mx-auto' src="https://a0.muscache.com/im/pictures/65214d06-ffb4-4b70-93c0-01d368e76649.jpg?im_w=2560&im_q=highq" alt="" />
        </div>
          <Link to={'/host/hoteldetails'}><Button className={'ml-[45%] mt-6 px-10'}>Start</Button></Link>
    </div>
  )
}

export default IntroPage