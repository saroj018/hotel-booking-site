import React, { createContext, useContext, useState, useEffect } from 'react'
import { dummyDescription, dummyHouseTitle } from '../../../DummyData';
import { usePostFetch } from '../../hooks/fetch-data';
import Button from '../../component/common/Button';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';

export const Context = createContext()

const HotelDetailContext = ({ children }) => {
  const [btnDisable, setBtnDisable] = useState(true)
  const [hotelData, setHotelData] = useState()
  const [hotelInfo, setHotelInfo] = useState({})
  const[searchParams,setSearchParams]=useSearchParams()

  const [hotelDetails, setHotelDetails] = useState({
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
    photos: [],
    houseTitle: dummyHouseTitle,
    aboutHome: '',
    description: dummyDescription,
    bookingType: '',
    price: {
      adults:500,
      childrens:300,
      infants:100
,    },
    discount: 0,
  });

  const hotelInformantion = new FormData()

  for (let hotel in hotelDetails) {
    if (Array.isArray(hotelDetails[hotel])) {
      if (typeof hotelDetails[hotel][0] === 'string') {
        hotelInformantion.append(hotel, JSON.stringify(hotelDetails[hotel]))
      }
      hotelDetails[hotel].forEach((item) => {
        if (typeof item === 'object') {
          for (let newObj of item) {
            hotelInformantion.append('photo', newObj)
          }
        }

      })
    }
    // else if (typeof hotelDetails[hotel] === 'object' && !Array.isArray(hotelDetails[hotel])) {

    //   hotelInformantion.append(hotel, JSON.stringify(hotelDetails[hotel]))

    // }
    else {
      hotelInformantion.append(hotel, JSON.stringify(hotelDetails[hotel]))
    }

  }

  const clickHandler = async () => {
    try {
      const resp = await fetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/addhoteldetails`, {
        method: "POST",
        body: hotelInformantion,
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
      const result = await resp.json()
      setHotelInfo(result.hotelDetails)
      if (result.success) {

        toast.success(result.message)
      }
      else {

        toast.error(result.error)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }


  return (
    <Context.Provider value={{ hotelDetails, setHotelDetails, hotelData, setHotelData, btnDisable,setSearchParams,searchParams, setBtnDisable, hotelInfo }}>
      {children}
      <Button onClick={clickHandler}>Send</Button>
    </Context.Provider>
  );
}

export default HotelDetailContext

