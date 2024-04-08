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

  const navlinks = [
    {
      title: 'Stays',
      url: ''
    },
    {
      title: 'Experinces',
      url: ''
    },
    {
      title: 'Online Experinces',
      url: ''
    },
    {
      title: 'Dashboard',
      url: '/host/dashboard'
    },
  ]
  return (
    <div>
      <Header profileItem={profileItem} profilePopup={<ProfilePopup/>} navlinks={navlinks} accountSwitch={'Airbnb Your Home'} icon={<Globe size={24}/>} />
      <main className='bg-white px-10'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout