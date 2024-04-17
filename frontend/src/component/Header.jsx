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


const Header = ({ className,navlinks, profileItem, extraItem = true }) => {



    const [scrollValue, setScrollValue] = useState(false)
    const [showProfileModal, setShowProfileModal] = useState(false)
    const [search, setSearch] = useState('')
    const [timeUp, setTimeUp] = useState(false)
    const[nav,setNav]=useState('Today')
    const { isAuth, setIsAuth, setDetails, details } = useContext(Context)
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
        <header className={twMerge(`flex items-center shadow-md z-10 justify-between px-10 py-6 text-xl text-neutral-700 ${extraItem ? 'sticky' : ''} top-0 bg-white`, className)}>
            <Link to={'/'}><img className='w-[80px]' src="https://imgs.search.brave.com/rCW37zsT-MV2TZdWc2wtqIXBoinS9sD8aN2uba2BOYg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzEwL2FpcmJuYi1s/b2dvLTAucG5n" alt="" /></Link>

             <div className='relative lg:block hidden'>

                {scrollValue && extraItem && <Input onChange={(e) => setSearch(e.target.value)} value={search} type='text' className={' border-2 border-neutral-600 min-w-[600px] rounded-full pl-4 '} placeholder={'Search your destinations...'} />}
                {scrollValue && extraItem && <Search className='absolute left-[93%] top-4 ' />}
            </div>

            <ul className='flex gap-8'>
                {
                    navlinks?.map((ele,index)=>{
                       return <Link onClick={()=>setNav(ele.title)} className={nav==ele.title ? 'text-red-500 underline':''} key={index} to={ele.url}><li>{ele.title}</li></Link>
                    })
                }
            </ul>


            <nav className='flex relative items-center gap-6'>
                {isAuth && <Link to={'/host'} className='font-semibold text-black'>Airbnb Your Home</Link>}
                {isAuth && <Link to={'/host/dashboard'}>
                    Dashboard
                </Link>}
                {extraItem && !isAuth && <LoginPopup />}
                {extraItem && !isAuth && <SignupPopup />}
                {isAuth && <Button onClick={logoutHandler}>Log Out</Button>}

                <div onClick={(e) => { e.stopPropagation(), setShowProfileModal(!showProfileModal) }} className='flex relative items-center gap-3 border-2 border-neutral-300 px-3 py-2 cursor-pointer rounded-full'>
                    {/* <p className='absolute top-[65%] left-4 text-sm text-red-500'>verified</p> */}
                    {isAuth ? <p className='text-lg select-none font-black  uppercase'>{localStorage.getItem('user')?.split(' ')[0]}</p> : <Menu />}
                    <img className='h-10 w-10 rounded-full' src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg" alt="" />
                </div>
                {showProfileModal && <ProfilePopup closePopup={closePopup} profileItem={profileItem} onClick={(e) => e.stopPropagation()} className={'absolute  w-[300px] left-[45%] top-[120%]'} />}
            </nav>
        </header>
    )
}

export default Header