import React from 'react'
import Header from '../Header'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Header/>   
        <main className='bg-white'>
        <Outlet/>
        </main>
    </div>
  )
}

export default Layout