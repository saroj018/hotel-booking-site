import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Globe, Menu, Search } from 'lucide-react'
import Input from './common/Input'

const Header = () => {

    const [scrollValue, setScrollValue] = useState(false)
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
    return (
        <header className='flex items-center z-10 justify-between px-10 py-8 text-xl text-neutral-700 sticky top-0 bg-white'>
            <img className='h-10' src="https://th.bing.com/th/id/R.11566b13ebe3fe195137ce2bd1804a69?rik=Og%2bcKTbfN4mhBA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f03%2fAirbnb_logo.png&ehk=QhLUqOjF6HxBvuuxjqpvtKEeCf%2bnDOuAUWx8DInRPOo%3d&risl=&pid=ImgRaw&r=0" alt="" />

            <div className='relative lg:block hidden'>
                <nav className={`flex items-center gap-8 ${scrollValue ? 'hidden' : ''}`}>
                    <Link>Stays</Link>
                    <Link>Experinces</Link>
                    <Link>Online Experinces</Link>
                </nav>
                {scrollValue && <Input className={' border-2 border-neutral-600 min-w-[800px] rounded-full pl-4 '} placeholder={'Search your destinations...'} />}
                {scrollValue && <Search className='absolute left-[95%] top-4 ' />}
            </div>


            <nav className='flex items-center gap-8'>
                <Link className='font-semibold text-black'>Airbnb your Home</Link>
                <Globe />

                <div className='flex items-center gap-3 border-2 border-neutral-300 px-3 py-2 rounded-full'>
                    <Menu />
                    <img className='h-10 w-10 rounded-full' src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg" alt="" />
                </div>
            </nav>
        </header>
    )
}

export default Header