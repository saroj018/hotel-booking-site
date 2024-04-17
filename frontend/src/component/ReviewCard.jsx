import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

const ReviewCard = ({user,reviewMessage,star}) => {
    return (
            <div className='border-2 border-neutral-500 rounded-md p-2'>
                <p className='text-black text-lg uppercase font-bold my-1'>{user}</p>
                <div className='flex items-center gap-2 mb-4'>
                    {
                        Array(star).fill(null).map((ele,index)=>(
                            <FaStar key={index} className='text-2xl text-orange-500' />
                        ))
                    }
                </div>
                <p>{reviewMessage}</p>
            </div>
            
    )
}

export default ReviewCard