import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'

const AboutPopup = ({details}) => {

    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
    const[open,setOpen]=useState(false)
  
  return (
    <div>
        <button onClick={()=>setOpen(true)} className='text-xl font-bold my-4'>Show More..</button>
        <Popup open={open} lockScroll={true} onClose={()=>setOpen(false)} {...{overlayStyle}}>
            <div className='mx-auto relative w-1/2 h-fit bg-white pl-10 py-3 rounded-md shadow-md max-h-[600px] overflow-y-scroll'>
                <X onClick={()=>setOpen(false)} className='absolute left-[95%] top-6 cursor-pointer'/>
                <h1 className='text-3xl font-bold my-3 underline'>About this space</h1>
                <div>
                    <p className='text-xl my-5'>{details.description}</p>

                    <ul className='list-disc text-xl'>
                        <li>{details?.roomType}</li>
                        <li>Discount: {details?.discount}%</li>
                        <li>{details?.homeType}</li>
                        <li>Maximum Occupancy {details?.customerNumber?.guest} Guests</li>
                        <li>{details?.customerNumber?.bedroom} Bedroom</li>
                        <li>{details?.customerNumber?.bed} Bed</li>
                        <li>{details?.customerNumber?.bathroom} Bathroom</li>
                        <li>{details?.aboutHome} Enviroment</li>
                        <li>Booking Type: {details?.bookingType}</li>
                        <li>Price: {details?.price?.adults}(Adults) {details?.price?.childrens}(Children) {details?.price?.infants} (Infants)</li>
                    </ul>
                    
                </div>
                <div >
                    <h1 className='text-2xl my-4 font-bold underline'>The Space</h1>
                    <ul className='list-disc text-xl'>
                        {
                            details?.offerServices?.map((ele,index)=>(
                                <li key={index}>{ele}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </Popup>
    </div>
  )
}

export default AboutPopup