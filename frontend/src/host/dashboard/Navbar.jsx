import { Bell } from 'lucide-react'
import Header from '../../component/Header'
import ProfilePopup from '../../component/popup/ProfilePopup'

const Navbar = () => {

 const navlinks=[
    {
        title:'Today',
        url:'/host/dashboard'
    },
    {
        title:'Calender',
        url:'/host/dashboard/calender'
    },
    {
        title:'Listings',
        url:'/host/dashboard/listing'
    },
    {
        title:'Inbox',
        url:'/host/dashboard/inbox'
    },
    {
        title:'Stats.',
        url:'/host/dashboard/stats'
    },
 ]

 const profileItem=[
    {
        name:'Profile'
    },
    {
        name:'Account',
        url:'/account'
    },
    {
        name:'Switch to Traveller',
        url:'/'
    },
    {
        name:'Log Out'
    }
]


  return (
    <Header extraItem={false} className={'border-2'} profileItem={profileItem} ProfilePopup={<ProfilePopup />} navlinks={navlinks} accountSwitch={'Switch to Traveller'} icon={<Bell size={25}/>}/>
  )
}

export default Navbar