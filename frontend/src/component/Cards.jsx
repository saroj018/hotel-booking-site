import { Heart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ name, imgDet, date, price, img }) => {
  return (
    <Link to={'/details'} className='mt-8 relative'>
      <Heart enableBackground={true} color='white' size={30} className='absolute left-[90%] cursor-pointer top-3' />
      <img className='rounded-xl' src={img} alt="" />
      <div className='flex  justify-between items-end'>
        <h1 className='text-xl font-bold mt-5'>{name}</h1>
        <p className='text-lg text-black font-bold'>New</p>
      </div>
      <p className='my-2 text-neutral-700 text-lg'>{imgDet}</p>
      <p className='text-neutral-800 text-lg'>{date}</p>
      <h1 className='text-xl font-extrabold mt-3 text-black'>{price} <span className='text-neutral-600 text-lg
        '>night</span></h1>
    </Link>
  )
}

export default Cards