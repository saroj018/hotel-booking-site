import { BookHeart, Heart } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './common/Button'
import { useDeleteFetch, useGetFetch, usePostFetch } from '../hooks/fetch-data'

const Cards = ({ id, removeId, btn,params, name, heart = true, imgDet, date, rating = '4.2/5', price, img, optional = true, setRef, refe }) => {
  const [resp, setResp] = useState(false)
  const clickHandler = async (e, ids) => {
    e.preventDefault()
    let result = await usePostFetch(`${import.meta.env.VITE_HOSTNAME}/api/wishlist/addonwishlist`, { ids })
    setResp(result.success)
  }

  const removeHandler = async (e, id) => {
    e.preventDefault()
    if(params=='wishlist'){

      await useDeleteFetch(`${import.meta.env.VITE_HOSTNAME}/api/wishlist/removewishlist`, id)
      setRef(!refe)
    }else{
      await useDeleteFetch(`${import.meta.env.VITE_HOSTNAME}/api/reserve/reservecancel/${id}`)
      setRef(!refe)
    }
  }
  return (
    <div className='mt-8 relative '>
      <Link to={`/details/${id}`} >
        {heart && <Heart onClick={(e) => clickHandler(e, id)} enableBackground={'true'} fill={resp ? 'red' : 'transparent'} color={resp ? 'red' : 'white'} size={35} strokeWidth={1} className='absolute left-[90%] cursor-pointer top-3' />}
        <img className='rounded-xl h-[50%] w-[100%]' src={img} alt="" />
        <div className='flex  justify-between items-end'>
          <h1 className='text-xl font-bold mt-5'>{name}</h1>
          <p className='text-lg text-black font-bold'>{rating}</p>
        </div>
        <p className='my-2 text-neutral-700 text-lg'>{imgDet}</p>
        <p className='text-neutral-800 text-lg'>{date}</p>
        <h1 className='text-xl font-extrabold mt-3 text-black'>{price} <span className='text-neutral-600 text-lg
        '>per night</span></h1>
      </Link>
      {!optional && <Button onClick={(e) => removeHandler(e, removeId)} className={'w-full my-5'}>{btn}</Button>}
    </div>
  )
}

export default Cards