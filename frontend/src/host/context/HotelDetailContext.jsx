import React, { createContext, useContext, useState, useEffect } from 'react'
import { dummyDescription, dummyHouseTitle } from '../../../DummyData';

export const Context = createContext()

const HotelDetailContext = ({ children }) => {
  const[btnDisable,setBtnDisable]=useState(true)
  const [hotelDetails, setHotelDetails] = useState({
    homeType: '',
    roomType: '',
    location: '123',
    customerNumber: {
      guest: 1,
      bed: 1,
      bathroom: 1
    },
    offerServices: [],
    photos: [],
    houseTitle: dummyHouseTitle,
    aboutHome: '',
    description: dummyDescription,
    bookingType: '',
    price: 100,
    discount: 0,
  });

  const hotelInformantion = new FormData()

  for (let hotel in hotelDetails) {
    if(Array.isArray(hotelDetails[hotel])){
      hotelDetails[hotel].forEach((item)=>{
        if(typeof item==='object'){
         for(let newObj of item){
          hotelInformantion.append(newObj.name.split('.')[0],newObj)
         }
        } else return
      })
    }
    else if (typeof hotelDetails[hotel] === 'object' && !Array.isArray(hotelDetails[hotel])) {

        for (let objData in hotelDetails[hotel]) {
          hotelInformantion.append(objData, hotelDetails[hotel][objData])
        }
      
    }
    else {
      hotelInformantion.append(hotel, hotelDetails[hotel])
    }
  }

  console.log(hotelInformantion);
  console.table(hotelDetails.offerServices);
  return (
    <Context.Provider value={{ hotelDetails, setHotelDetails,btnDisable,setBtnDisable }}>
      {children}
    </Context.Provider>
  );
}

export default HotelDetailContext

export const useHotelInfo = () => {
  const { hotelDetails, setHotelDetails } = useContext(Context)
  return { hotelDetails, setHotelDetails }
}
