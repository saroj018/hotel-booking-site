import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Globe, Menu, Search } from 'lucide-react'
import Input from './common/Input'
import ProfilePopup from './popup/ProfilePopup'
import { twMerge } from 'tailwind-merge'
import Button from './common/Button'
import SignupPopup from './popup/SignupPopup'
import LoginPopup from './popup/LoginPopup'
import { Context } from '../host/context/HotelDetailContext'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useGetFetch } from '../hooks/fetch-data'

const Header = ({ className, navlinks, accountSwitch, icon, profileItem, extraItem = true }) => {




    const [scrollValue, setScrollValue] = useState(false)
    const [showProfileModal, setShowProfileModal] = useState(false)
    const [search, setSearch] = useState('')
    const[timeUp,setTimeUp]=useState(false)
    const { isAuth, setIsAuth, setDetails,details } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        window.addEventListener('click', () => {
            if (showProfileModal == true) {
                setShowProfileModal(false)
            }
        })
    }, [showProfileModal])
    useEffect(() => {
        function getScrollValue() {
            if (window.scrollY > 24) {
                setScrollValue(true)
            }
            else {
                setScrollValue(false)
            }

        }
        window.addEventListener('scroll', getScrollValue)

        return () => window.removeEventListener('scroll', getScrollValue)

    }, [])
    const closePopup = () => {
        setShowProfileModal(false)
    }

    const logoutHandler = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setIsAuth(false)
        navigate('/')
    }

    const apiCall = async () => {
        setTimeUp(false)
        let result = await useGetFetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/searchhotels/?payload=${search}`)
        setDetails(result.data)
    
      }
    
      useEffect(() => {
        let id
        if (details.length < 1) {
          id = setTimeout(() => {
            setTimeUp(true)
          }, 500);
    
          return () => clearTimeout(id)
        }
      }, [details])
    
      useEffect(() => {
       
        let id = setTimeout(() => {
          apiCall()
        }, 1000);
    
        return () => clearTimeout(id)
      }, [search])


    return (
        <header className={twMerge(`flex items-center shadow-md z-10 justify-between px-10 py-8 text-xl text-neutral-700 ${extraItem ? 'sticky' : ''} top-0 bg-white`, className)}>
            <Link to={'/'}><img className='h-10' src="https://th.bing.com/th/id/R.11566b13ebe3fe195137ce2bd1804a69?rik=Og%2bcKTbfN4mhBA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f03%2fAirbnb_logo.png&ehk=QhLUqOjF6HxBvuuxjqpvtKEeCf%2bnDOuAUWx8DInRPOo%3d&risl=&pid=ImgRaw&r=0" alt="" /></Link>

            <div className='relative lg:block hidden'>


                <nav className={`flex items-center gap-8 ${scrollValue ? 'hidden' : ''}`}>
                    {
                        navlinks.map((ele, index) => {
                            return <Link to={ele.url} key={index}>{ele.title}</Link>
                        })
                    }
                </nav>
                {scrollValue && extraItem && <Input onChange={(e)=>setSearch(e.target.value)} value={search} type='text' className={' border-2 border-neutral-600 min-w-[600px] rounded-full pl-4 '} placeholder={'Search your destinations...'} />}
                {scrollValue && extraItem && <Search className='absolute left-[93%] top-4 ' />}
            </div>


            <nav className='flex relative items-center gap-6'>
                <Link to={'/host'} className='font-semibold text-black'>{accountSwitch}</Link>
                {extraItem && !isAuth && <LoginPopup />}
                {extraItem && !isAuth && <SignupPopup />}
                {isAuth && <Button onClick={logoutHandler}>Log Out</Button>}
                <span className='cursor-pointer border-2 rounded-full p-1'>{icon}</span>

                <div onClick={(e) => { e.stopPropagation(), setShowProfileModal(!showProfileModal) }} className='flex  items-center gap-3 border-2 border-neutral-300 px-3 py-2 cursor-pointer rounded-full'>
                    {isAuth ? <p className='text-lg select-none font-black  uppercase'>{localStorage.getItem('user')?.split(' ')[0]}</p> : <Menu />}
                    <img className='h-10 w-10 rounded-full' src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg" alt="" />
                </div>
                {showProfileModal && <ProfilePopup closePopup={closePopup} profileItem={profileItem} onClick={(e) => e.stopPropagation()} className={'absolute  w-[300px] left-[60%] top-[120%]'} />}
            </nav>
        </header>
    )
}

export default Header