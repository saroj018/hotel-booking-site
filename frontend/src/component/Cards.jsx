import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './common/Button'

const Cards = ({ name, imgDet, date,rating='4.2/5', price, img,optional=true }) => {
  return (
    <div className='mt-8 relative'>
    <Link to={'/details'} >
     {optional && <Heart onClick={(e)=>e.preventDefault()} enableBackground={true} color='white' size={30} className='absolute left-[90%] cursor-pointer top-3' />}
      <img className='rounded-xl' src={img} alt="" />
      <div className='flex  justify-between items-end'>
        <h1 className='text-xl font-bold mt-5'>{name}</h1>
        <p className='text-lg text-black font-bold'>{rating}</p>
      </div>
      <p className='my-2 text-neutral-700 text-lg'>{imgDet}</p>
      <p className='text-neutral-800 text-lg'>{date}</p>
      <h1 className='text-xl font-extrabold mt-3 text-black'>{price} <span className='text-neutral-600 text-lg
        '>night</span></h1>
    </Link>
       {!optional && <Button onClick={(e)=>{e.stopPropagation()}} className={'w-full my-5'}>Remove</Button>}
    </div>
  )
}

export default Cards