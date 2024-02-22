import React, { createContext, useContext, useState } from 'react'

export const Context=createContext()

const HotelDetailContext = ({children}) => {
  const[hotelDetails,setHotelDetails]=useState({
    homeType:'',
    roomType:'',
    location:'',
    customerNumber:{
      guest:1,
      bed:1,
      bathroom:1
  },
    offerServices:[],
    photos:[],
    houseTitle:'',
    aboutHome:'',
    description:'',
    bookingType:'',
    price:0,
    discount:0,

  })
    
  return (
    <Context.Provider value={{hotelDetails,setHotelDetails}}>
      {children}
    </Context.Provider>
  )
}

export default HotelDetailContext

export const useHotelInfo=()=>{
  let {hotelDetails,setHotelDetails}=useContext(Context)
  return {hotelDetails,setHotelDetails}
}