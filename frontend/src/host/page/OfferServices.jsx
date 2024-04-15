import { ChefHat, Tv, Wifi, ParkingCircle, AirVent, Cross, Dumbbell, GlassWater, ShowerHead, FlameKindling, Refrigerator, Briefcase } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/HotelDetailContext'


const OfferServices = () => {

    const servicesOffer = [
        {
            name: 'Wifi',
            icon: <Wifi size={50} strokeWidth={1} />
        },
        {
            name: 'TV',
            icon: <Tv size={50} strokeWidth={1} />
        },
        {
            name: 'Kitchen',
            icon: <ChefHat size={50} strokeWidth={1} />
        },
        {
            name: 'Washer',
            icon: <GlassWater size={50} strokeWidth={1} />
        },
        {
            name: 'Parking',
            icon: <ParkingCircle size={50} strokeWidth={1} />
        },
        {
            name: 'AC',
            icon: <AirVent size={50} strokeWidth={1} />
        },
        {
            name: 'First Aid Kit',
            icon: <Cross size={50} strokeWidth={1} />
        },
        {
            name: 'Excercise',
            icon: <Dumbbell size={50} strokeWidth={1} />
        },
        {
            name: 'Shower',
            icon: <ShowerHead size={50} strokeWidth={1} />
        },
        {
            name: 'Fire Camp',
            icon: <FlameKindling size={50} strokeWidth={1} />
        },
        {
            name: 'Freez',
            icon: <Refrigerator size={50} strokeWidth={1} />
        },
        {
            name: 'Work Room',
            icon: <Briefcase size={50} strokeWidth={1} />
        }
    ]

    const { hotelDetails, setHotelDetails, setBtnDisable } = useContext(Context)

    const clickHandler = (text) => {
        console.log(text);
        const result = hotelDetails.offerServices.find((item) => item === text)
        if (!result) {
            
            setHotelDetails((prv) => ({ ...prv, offerServices: [...prv.offerServices, text] }))
        }
        else {
            setHotelDetails((prv) => ({ ...prv, offerServices: prv.offerServices.filter((item) => item !== text) }))
        }
        
    }

    useEffect(() => {
        if (hotelDetails.offerServices.length > 0) {
            setBtnDisable(false)
        }
    }, [hotelDetails.offerServices])
    return (
        <>
            <div className='w-[55%] mx-auto '>
                <h1 className='text-3xl my-8 font-bold text-center'>Tell guests what your place has to offer</h1>
                <div className='grid grid-cols-4 gap-3'>
                    {
                        servicesOffer.map((ele, index) => {
                            return <div onClick={() => clickHandler(ele.name)} key={index + ele.name} className={`border-2 select-none cursor-pointer z-10 border-neutral-600 rounded-md p-3 flex justify-between items-center flex-col ${hotelDetails.offerServices.find((item) => item == ele.name) ? 'bg-red-500 text-white border-none' : ''}`}>
                                <span>{ele.icon}</span>
                                <p className='text-2xl font-bold'>{ele.name}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default OfferServices