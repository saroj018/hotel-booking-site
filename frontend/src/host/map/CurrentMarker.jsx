import React, { useEffect, useMemo, useState } from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import locationLogo from '../../../src/assets/location.png'
import L from "leaflet";

const CurrentMarker = ({setLocation,toolTip,draggable}) => {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })
useEffect(()=>{
    map.locate()
},[])

const eventHandlers = {
    dragend(e) {
      setLocation(e.target.getLatLng())
    }
  };

  const pointerIcon = new L.Icon({
    iconUrl: locationLogo,
    iconSize: [50, 58], 
    iconAnchor: [20, 58],
    popupAnchor: [0, -60], 
  });


    return position === null ? null : (
        <Marker icon={pointerIcon} autoPan={true} eventHandlers={eventHandlers} draggable={draggable} position={position}>
            <Popup>{toolTip}</Popup>
        </Marker>
    )

}

export default CurrentMarker