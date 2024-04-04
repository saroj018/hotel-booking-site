import { AirVent, Bath, Building2, Droplets, Ship, Star, Tv, Wifi } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import Checkout from '../../component/Checkout'
import AboutPopup from '../../component/popup/AboutPopup'
import HostDetail from '../../component/HostDetail'
import OwnerProfile from '../../component/OwnerProfile'
import { useLocation, useParams } from 'react-router-dom'
import { useGetFetch } from '../../hooks/fetch-data'
import { Context } from '../../host/context/HotelDetailContext'
import {v4 as uuid} from 'uuid'
import Skeloten from '../../component/utlils/Skeloten'

const DetailPage = () => {

  const[details,setDetails]=useState({})
  const[dateCollection,setDateCollection]=useState()
  const{setHotelData}=useContext(Context)
  const {id}=useParams()
  const {pathname}=useLocation()

  const getDetails=async ()=>{
    const result=await useGetFetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/${id}`)
    setDetails(result?.data)
    setHotelData(result?.data)
    setDateCollection(result?.dates)
  }

  useEffect(()=>{
    getDetails()
  },[])

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

  const offerService = [
    {
      name: 'Ocian View',
      icon: <Ship />
    },
    {
      name: 'Wifi',
      icon: <Wifi />
    },
    {
      name: 'TV',
      icon: <Tv />
    },
    {
      name: 'Bathtub',
      icon: <Bath />
    },
    {
      name: 'Pools',
      icon: <Droplets />
    },
    {
      name: 'AC',
      icon: <AirVent />
    },
    {
      name: 'Balcony',
      icon: <Building2 />
    },
    {

    }
  ]
  return (
    <div>
      <h1 className='text-4xl font-bold my-5'>{details?.houseTitle}</h1>
     {
     Object.keys(details).length<1 ?
     <div className='flex gap-2 items-center w-full h-[500px] overflow-hidden rounded-xl'>
      <Skeloten height={'100%'} width='50%'/>
      <div className='grid grid-cols-2 gap-3 h-full '>
        <Skeloten height={'100%'} width='300px'/>
        <Skeloten height={'100%'} width='300px'/>
        <Skeloten height={'100%'} width='300px'/>
        <Skeloten height={'100%'} width='300px'/>
      </div>
     </div>
     :
     <div className='flex gap-2 items-center w-full h-[500px] overflow-hidden rounded-xl'>
        <img className='max-w-[60%] h-[100%]' src={details?.idOfImage?.[0]?.url} alt="" />
        <div className='grid grid-cols-2 gap-3 h-full '>
          {
            details?.idOfImage?.map((item,index)=>{
              if(index===4) return
              return  <img key={uuid()} className='h-[100%] ' src={item?.url} alt="" />

            })
          }
        </div>
      </div>}

      <div className='mt-10 '>
        <div className='inline-block my-7 '>
          <h1 className='text-3xl font-bold'>Private room in resort in Kaafu Atoll, Maldives</h1>
          <p className='text-xl font-black my-4'>{`${details?.customerNumber?.bed} beds ${details?.customerNumber?.guest} guests  ${details?.customerNumber?.bathroom} bathrooms  ${details?.customerNumber?.bedroom} bedrooms`}</p>
          <div className='flex gap-3 mb-4 items-center'>
            <Star />
            <Star />
            <Star />
            <Star />
          </div>

          <hr />
          <OwnerProfile title={details?.uploadedBy?.fullname} subtitle={'Joined in 2018'}/>

          <div className='mt-6 w-1/2 border-2 rounded-md shadow-sm p-5'>
        <p className='text-xl'>{details?.description?.slice(0,300)+'...'}</p>
        <AboutPopup/>
      </div>
        </div>
        <Checkout dateCollection={dateCollection} className={'float-right sticky '} />
      </div>
      <hr />
      <div className='mt-7 '>
        <h1 className='text-3xl font-bold'>What this place offers</h1>
        <div className='grid grid-cols-2 w-[50%] my-5'>
          {
            details?.offerServices?.map((ele, index) => {
              return <div key={uuid()} className='flex items-center my-3 gap-4'>
                <span>{ele.icon}</span>
                <span className='text-2xl'>{ele}</span>
              </div>
            })
          }
        </div>
        <div>
        </div>
      </div>
      <hr />
      <HostDetail owner={details?.uploadedBy?.fullname}/>

    </div>
  )
}

export default DetailPage