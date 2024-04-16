import React, { useContext, useEffect, useRef, useState } from 'react'
import Button from '../../component/common/Button'
import { Context } from '../context/HotelDetailContext'
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import CurrentMarker from '../map/CurrentMarker';


const AddLocation = () => {

  const { setBtnDisable, hotelDetails,setHotelDetails } = useContext(Context)
  const [location, setLocation] = useState({lat:27.70169, lan:85.3206})
  const[done,setDone]=useState(false)


  navigator.geolocation.getCurrentPosition((position)=>{
    setLocation({lat:position.coords.latitude,lan:position.coords.longitude})
    setHotelDetails((prv)=>({...prv,locatedPlace:{lat:position.coords.latitude,lan:position.coords.longitude}}))
   
      setDone(true)
    
  })
  
 

useEffect(()=>{
  setHotelDetails((prv)=>({...prv,locatedPlace:location}))
},[location])

  useEffect(() => {
    if (done) {
      setBtnDisable(false)
    }
  }, [hotelDetails.locatedPlace])


  
  return (
    <>
      <div className='flex justify-between items-center flex-col'>
        <h1 className='text-3xl mb-3 font-bold text-center'>Where's your place located?</h1>
        <h1 className='text-xl text-red-500 mb-3 font-bold text-center'>Click On Map For Find Your Current Location and You Can Also Drag the Icon</h1>
        <h1 className='text-xl text-red-500 mb-3 font-bold text-center'>Please wait few second it automatacally find your current location</h1>
        {done && <p className='text-center my-2 select-none text-xl text-green-500 font-bold'>Location Selected</p>}
        <div className='z-0'>
          <MapContainer center={[27.70169, 85.3206]} zoom={20} >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CurrentMarker setLocation={setLocation} toolTip={'your is here'} draggable={true} />
            </MapContainer>
        </div>
      </div>
    </>
  )
}

export default AddLocation