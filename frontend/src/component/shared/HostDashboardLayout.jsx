import React from 'react'
import Navbar from '../../host/dashboard/Navbar'
import { Outlet } from 'react-router-dom'

const HostDashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <main className='mx-10'>
        <Outlet />
      </main>
    </div>
  )
}

export default HostDashboardLayout