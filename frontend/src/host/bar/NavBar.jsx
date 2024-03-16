
import React, { useContext, useState } from 'react'
import Button from '../../component/common/Button'
import { Link, useNavigate } from 'react-router-dom'
import Popup from 'reactjs-popup'
import { XCircle } from 'lucide-react'
import { dummyDescription, dummyHouseTitle } from '../../../DummyData'
import { Context } from '../context/HotelDetailContext'

const NavBar = () => {
const{setHotelDetails}=useContext(Context)
  const[show,setShow]=useState(false)
  const navigate=useNavigate()

  const clickHandler=()=>{
    setShow(true)
  }

  const navigateHandler=()=>{
setHotelDetails({
  homeType: '',
  roomType: '',
  locatedPlace: {},
  customerNumber: {
    guest: 1,
    bed: 1,
    bathroom: 1,
    bedroom: 1
  },
  offerServices: [],
  houseTitle: dummyHouseTitle,
  aboutHome: '',
  description: dummyDescription,
  bookingType: '',
  price: {
    adults: 500,
    childrens: 300,
    infants: 100
    ,
  },
  discount: 0,
})
    navigate('/')
  }

  const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
  return (
    <div className='px-10 py-3 flex justify-between sticky top-0 left-0 items-center bg-white shadow-md'>
        <img className='h-10' src="https://th.bing.com/th/id/R.11566b13ebe3fe195137ce2bd1804a69?rik=Og%2bcKTbfN4mhBA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f03%2fAirbnb_logo.png&ehk=QhLUqOjF6HxBvuuxjqpvtKEeCf%2bnDOuAUWx8DInRPOo%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <Button onClick={clickHandler} className='text-2xl outline-none bg-[#fe375b] text-white border-none'>Exit</Button>
        <Popup lockScroll={true} onClose={()=>setShow(false)} open={show} {...{overlayStyle}}>
          <div className='h-[300px] w-[400px] bg-white p-5 rounded-md shadow-md'>
          <div className='mx-auto w-fit'><XCircle size={110} color='red' strokeWidth={1} /></div>
            <h1 className='text-center text-4xl font-bold '>Are you sure?</h1>
            <h1 className='text-xl text-center my-4 font-extrabold text-red-500'>After exit your all details are delete!!</h1>
            <div className='flex h-[23%] items-end gap-x-3 justify-between'>
              <Button onClick={navigateHandler} className={'w-[200px] bg-red-500 border-none'}>Yes</Button>
              <Button onClick={()=>setShow(false)} className={'w-[200px] bg-green-500 border-none'}>No</Button>
            </div>
          </div>
        </Popup>
    </div>
  )
}

export default NavBar