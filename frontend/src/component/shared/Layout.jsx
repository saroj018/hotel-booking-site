import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import { Globe } from 'lucide-react'
import ProfilePopup from '../popup/ProfilePopup'

const Layout = () => {

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
      title: 'Details',
      url: '/details'
    },
    {
      title: 'Dashboard',
      url: '/host/dashboard'
    }
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