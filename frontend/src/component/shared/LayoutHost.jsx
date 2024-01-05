import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../host/bar/NavBar'
import Footer from '../../host/bar/Footer'


const LayoutHost = () => {
    return (
        <div>
            <NavBar />
            <main className='bg-white px-10 '>
                <Outlet />
            </main>
        </div>
    )
}

export default LayoutHost