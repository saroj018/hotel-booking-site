import { ChefHat, Tv, Wifi, ParkingCircle, AirVent, Cross, Dumbbell, GlassWater, ShowerHead, FlameKindling, Refrigerator, Briefcase } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../bar/Footer'

const OfferServices = () => {

    const servicesOffer=[
        {
            name:'Wifi',
            icon:<Wifi size={70} strokeWidth={1} />
        },
        {
            name:'TV',
            icon:<Tv size={70} strokeWidth={1}/>
        },
        {
            name:'Kitchen',
            icon:<ChefHat size={70} strokeWidth={1} />
        },
        {
            name:'Washer',
            icon:<GlassWater size={70} strokeWidth={1} />
        },
        {
            name:'Parking',
            icon:<ParkingCircle size={70} strokeWidth={1} />
        },
        {
            name:'AC',
            icon:<AirVent size={70} strokeWidth={1} />
        },
        {
            name:'First Aid Kit',
            icon:<Cross size={70} strokeWidth={1} />
        },
        {
            name:'Excercise Equipment',
            icon:<Dumbbell size={70} strokeWidth={1} />
        },
        {
            name:'Shower',
            icon:<ShowerHead size={70} strokeWidth={1} />
        },
        {
            name:'Fire Camp',
            icon:<FlameKindling size={70} strokeWidth={1} />
        },
        {
            name:'Freez',
            icon:<Refrigerator size={70} strokeWidth={1} />
        },
        {
            name:'Work Room',
            icon:<Briefcase size={70} strokeWidth={1} />
        }
    ]
  return (
    <>
    <div className='w-1/2 mx-auto'>
        <h1 className='text-4xl font-bold text-center'>Tell guests what your place has to offer</h1>
        <p className='text-center text-2xl my-6'>You can add more amenities after you publish your listing.</p>
        <div className='grid grid-cols-3 gap-3'>
            {
                servicesOffer.map((ele,index)=>{
                    return <div key={index+ele.name} className='border-2 border-neutral-600 rounded-md p-3 flex justify-between items-center flex-col'>
                        <span>{ele.icon}</span>
                        <p className='text-2xl font-bold'>{ele.name}</p>
                    </div>
                })
            }
        </div>
    </div>
    <Link to={'/host/addphotos'}><Footer/></Link>
    </>
  )
}

export default OfferServices