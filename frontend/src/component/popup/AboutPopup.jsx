import { X } from 'lucide-react';
import { useState } from 'react'
import Popup from 'reactjs-popup'

const AboutPopup = () => {

    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
    const[open,setOpen]=useState(false)
  return (
    <div>
        <button onClick={()=>setOpen(true)} className='text-xl font-bold my-4'>Show More..</button>

        <Popup open={open}  onClose={()=>setOpen(false)} {...{overlayStyle}}>
            <div className='mx-auto  relative w-1/2 h-fit bg-white pl-10 py-3 rounded-md shadow-md max-h-[600px] overflow-scroll'>
                <X onClick={()=>setOpen(false)} className='absolute left-[95%] top-6 cursor-pointer'/>
                <h1 className='text-3xl font-bold my-3 underline'>About this space</h1>
                <div>
                    <p className='text-xl my-5'>In The Two Bedroom Villa, the first floor features a master bedroom and a second bedroom with king and twin beds, each equipped with its own terrace. The ground floor, with a living area and outdoor terrace which provides direct access to the beach, is perfect for family bonding.</p>

                    <ul className='list-disc text-xl'>
                        <li>Entire Place at a 4 star Resort</li>
                        <li>140 SQM</li>
                        <li>Place is by 45 minutes speedboat ride,</li>
                        <li>Maximum Occupancy 6 Guests</li>
                    </ul>
                    <p className='my-9 text-xl'>Kindly, ping me before sending reservation request to arrange transportation to & from Male Airport.</p>
                </div>
                <div >
                    <h1 className='text-2xl my-4 font-bold underline'>The Space</h1>
                    <ul className='list-disc text-xl'>
                        <li>Ground floor living space with an outdoor terrace</li>
                        <li>Complimentary Wi-Fi access</li>
                        <li>Bluetooth docking station</li>
                        <li>32-inch flat screen TV</li>
                        <li>Outdoor rain shower</li>
                        <li>Signature bathroom amenities</li>
                        <li>Pillow menu</li>
                        <li>Ceiling fan</li>
                        <li>Mini bar</li>
                        <li>Coffee/tea making facility</li>
                        <li>In-room safe</li>
                        <li>Hair dryer</li>
                    </ul>
                </div>
            </div>
        </Popup>
    </div>
  )
}

export default AboutPopup