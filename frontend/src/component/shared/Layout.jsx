import Header from '../Header'
import { Outlet } from 'react-router-dom'
import { Globe } from 'lucide-react'
import ProfilePopup from '../popup/ProfilePopup'

const Layout = () => {

  const profileItem=[
    {
        name:'Message',
        url:'/message'
    },
    {
        name:'Trips'
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