import { ChefHat, Tv, Wifi, ParkingCircle, AirVent, Cross, Dumbbell, GlassWater, ShowerHead, FlameKindling, Refrigerator, Briefcase } from 'lucide-react'
import React, { useState } from 'react'


const OfferServices = () => {

    const servicesOffer=[
        {
            name:'Wifi',
            icon:<Wifi size={50} strokeWidth={1} />
        },
        {
            name:'TV',
            icon:<Tv size={50} strokeWidth={1}/>
        },
        {
            name:'Kitchen',
            icon:<ChefHat size={50} strokeWidth={1} />
        },
        {
            name:'Washer',
            icon:<GlassWater size={50} strokeWidth={1} />
        },
        {
            name:'Parking',
            icon:<ParkingCircle size={50} strokeWidth={1} />
        },
        {
            name:'AC',
            icon:<AirVent size={50} strokeWidth={1} />
        },
        {
            name:'First Aid Kit',
            icon:<Cross size={50} strokeWidth={1} />
        },
        {
            name:'Excercise',
            icon:<Dumbbell size={50} strokeWidth={1} />
        },
        {
            name:'Shower',
            icon:<ShowerHead size={50} strokeWidth={1} />
        },
        {
            name:'Fire Camp',
            icon:<FlameKindling size={50} strokeWidth={1} />
        },
        {
            name:'Freez',
            icon:<Refrigerator size={50} strokeWidth={1} />
        },
        {
            name:'Work Room',
            icon:<Briefcase size={50} strokeWidth={1} />
        }
    ]

    const[services,setServices]=useState([])

    const clickHandler=(text)=>{
       const result= services.find((item)=>item===text)
        if(!result){

            setServices([...services,text])
        }
    }
    console.log(services);
  return (
    <>
    <div className='w-[45%] mx-auto '>
        <h1 className='text-4xl font-bold text-center'>Tell guests what your place has to offer</h1>
        <p className='text-center text-2xl my-6'>You can add more amenities after you publish your listing.</p>
        <div className='grid grid-cols-3 gap-3'>
            {
                servicesOffer.map((ele,index)=>{
                    return <div onClick={()=>clickHandler(ele.name)} key={index+ele.name} className={`border-2 cursor-pointer z-10 bg-white border-neutral-600 rounded-md p-3 flex justify-between items-center flex-col ${services.find((item)=>item===ele.name) ? 'bg-[#ff5a5f] text-white border-none':''}`}>
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