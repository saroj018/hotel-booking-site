import { Bell } from 'lucide-react'
import Header from '../../component/Header'
import ProfilePopup from '../../component/popup/ProfilePopup'

const Navbar = () => {

 const navlinks=[
    {
        title:'Today',
        url:''
    },
    {
        title:'Calender',
        url:''
    },
    {
        title:'Listings',
        url:''
    },
    {
        title:'Inbox',
        url:''
    },
    {
        title:'Menu',
        url:''
    }
 ]

 const profileItem=[
    {
        name:'Profile'
    },
    {
        name:'Account'
    },
    {
        name:'Switch to Traveller'
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