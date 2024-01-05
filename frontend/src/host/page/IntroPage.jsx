
import { Link } from 'react-router-dom'
import Button from '../../component/common/Button'
import React from 'react'
import Footer from '../bar/Footer'


const IntroPage = () => {
  return (
    <div className='w-full'>
        <h1 className='text-center text-7xl font-bold text-red-600'>Earn with Airbnb</h1>
        <h1 className='text-center mt-10 text-black font-extrabold text-7xl underline'>Airbnb it easily with Airbnb Setup</h1>
        <div className='mt-10'>
            <img src="https://a0.muscache.com/im/pictures/65214d06-ffb4-4b70-93c0-01d368e76649.jpg?im_w=2560&im_q=highq" alt="" />
        </div>

        <Link to={'hometype'}><Button className={'text-4xl px-10 py-5 w-[20%] my-10 ml-[40%]'}>Airbnb Setup</Button></Link>
    </div>
  )
}

export default IntroPage