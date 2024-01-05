
import React from 'react'
import Button from '../../component/common/Button'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='px-10 py-3 flex justify-between items-center'>
        <img className='h-10' src="https://th.bing.com/th/id/R.11566b13ebe3fe195137ce2bd1804a69?rik=Og%2bcKTbfN4mhBA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f03%2fAirbnb_logo.png&ehk=QhLUqOjF6HxBvuuxjqpvtKEeCf%2bnDOuAUWx8DInRPOo%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <Link to={'/'}><Button className='text-2xl outline-none bg-[#fe375b] text-white border-none'>Exit</Button></Link>
    </div>
  )
}

export default NavBar