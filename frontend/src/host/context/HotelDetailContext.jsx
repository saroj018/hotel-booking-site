import React, { createContext, useContext, useState, useEffect } from 'react'
import { dummyDescription, dummyHouseTitle } from '../../../DummyData';
import { usePostFetch } from '../../hooks/fetch-data';
import Button from '../../component/common/Button';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import VerifyPopup from '../../component/popup/VerifyPopup';

export const Context = createContext()

const HotelDetailContext = ({ children }) => {
  const [btnDisable, setBtnDisable] = useState(true)
  const [hotelData, setHotelData] = useState()
  const [hotelInfo, setHotelInfo] = useState({})
  const [searchParams, setSearchParams] = useSearchParams()
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'))
  const [photo, setPhoto] = useState([])
  const[verify,setVerify]=useState(false)
  const[details,setDetails]=useState([])
  const[reviewPopup,setReviewPopup]=useState(false)
  const[hotelId,setHotelId]=useState([])
 


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
  });

  const hotelInformantion = new FormData()
  const infoOfHotel = JSON.stringify(hotelDetails)
  hotelInformantion.append('details', infoOfHotel)
  photo?.forEach((item) => {
    hotelInformantion.append('photo', item)
  })
  console.log('sos'.hotelInformantion);

  

  const contextValue = {
    hotelDetails,
    photo,
    setPhoto,
    setHotelDetails,
    hotelData,
    isAuth,
    setIsAuth,
    setHotelData,
    btnDisable,
    setSearchParams,
    searchParams,
    setBtnDisable,
    hotelInfo,
    hotelInformantion,
    setHotelInfo,
    verify,
    setVerify,
    details,
    setDetails,
    setReviewPopup,
    reviewPopup,
    setHotelId,
    hotelId
  }

  return (
    <Context.Provider value={contextValue}>
      {children}
      <VerifyPopup/>
    </Context.Provider>
  );
}

export default HotelDetailContext

