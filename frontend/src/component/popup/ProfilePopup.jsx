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
    <div className={twMerge('bg-white profilemodal border-neutral-300 border-2 shadow-md rounded-md',className)}>
        {
            profileItem.map((ele,index)=>{
                return <Link {...props} className='block py-3 px-7 z-10 hover:bg-neutral-200 ' key={index+ele.name}>{ele.name}</Link>
            })
        }
    </div>
  )
}

export default ProfilePopup