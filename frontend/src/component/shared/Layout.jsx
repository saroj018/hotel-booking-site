import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import { Globe } from 'lucide-react'
import ProfilePopup from '../popup/ProfilePopup'
import SignupPopup from '../popup/SignupPopup'

const Layout = () => {

  const profileItem=[
    {
        name:'Message',
        url:'/message'
    },
    {
        name:'Trips',
        url:'mytrips'
    },
    {
        name:'WishList',
        url:'wishlist'
    },
    {
        name:'Account',
        url:'/account'
    },
    {
        name:'Airbnb Your Home',
        url:'/host'
    },
]

 
  return (
    <div>
      <Header profileItem={profileItem} profilePopup={<ProfilePopup/>} />
      <main className='bg-white px-10'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout