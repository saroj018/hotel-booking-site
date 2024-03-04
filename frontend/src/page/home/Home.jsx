import React, { useContext, useEffect, useState } from 'react'
import InputBar from '../../component/bar/InputBar'
import FilterBar from '../../component/bar/FilterBar'
import Cards from '../../component/Cards'
import SignupPopup from '../../component/popup/SignupPopup'
import { useGetFetch } from '../../hooks/fetch-data'
import {v4 as uuid} from 'uuid'

const Home = () => {

  const[details,setDetails]=useState([])

  const hotelDetails=async ()=>{
    const result=await useGetFetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/gethoteldetails`)
    setDetails(result.detals)
  }

  useEffect(()=>{
    hotelDetails()
  },[])
    
  return (
    <div >
        <InputBar/>
        <FilterBar/>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
           {
            details?.map((item,index)=>{
              return  <Cards key={uuid()} id={item._id} price={item.price.adults} name={item.houseTitle.slice(0,40)+'...'} imgDet={item.aboutHome} date={'14th April-28 May'} img={item.idOfImage[0].url}/>
            })
           }
        </div>
    </div>
    
  )
}

export default Home