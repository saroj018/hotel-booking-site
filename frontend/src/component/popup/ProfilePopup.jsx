import React from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import '../CSS/style.css'

const ProfilePopup = ({className,...props}) => {

    const profileItem=[
        {
            name:'Message'
        },
        {
            name:'Trips'
        },
        {
            name:'WishList'
        },
        {
            name:'Account'
        },
        {
            name:'Airbnb Your Home'
        },
        {
            name:'LogOut'
        }
    ]
  return (
    <div className={twMerge('bg-white border-2 profilemodal text-xl font-black shadow-md rounded-xl',className)}>
        {
            profileItem.map((ele,index)=>{
                return <Link {...props} className='block py-3 px-7 z-10 hover:bg-neutral-50 ' key={index+ele.name}>{ele.name}</Link>
            })
        }
    </div>
  )
}

export default ProfilePopup