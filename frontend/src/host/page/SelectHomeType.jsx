import { Blinds, Building, CarTaxiFront, Home, Sailboat, Tractor, UtensilsCrossed } from 'lucide-react'
import React, { useContext } from 'react'
import {Context } from '../context/HotelDetailContext'
// import { Context, useFormData } from '../context/HotelDetailContext'

const SelectHomeType = () => {

    const homeTypes=[
        {
            name:'House',
            icon:<Home />
        },
        {
            name:'Apartment',
            icon:<Building/>
        },
        {
            name:'Barn',
            icon:<Blinds />
        },
        {
            name:'Bed & BreakFast',
            icon:<UtensilsCrossed />
        },
        {
            name:'Boat',
            icon:<Sailboat />
        },
        {
            name:'Cabin',
            icon:<CarTaxiFront />
        },
        {
            name:'Farm',
            icon:<Tractor />
        }
    ]

    const {hotelDetails,setHotelDetails}=useContext(Context)
    
    
    
    
    const clickHandler=(item)=>{
        setHotelDetails((prv)=>({
            ...prv,
            homeType:item
        }))
    }
    console.log(hotelDetails);
    
  return (
    <>
        <h1 className='text-center text-4xl font-bold my-8'>Which of these best describes your place?</h1>
        <div className='grid grid-cols-3 w-[50%] gap-5 mx-auto'>
            {
                homeTypes.map((ele,index)=>{
                    return <div  onClick={()=>clickHandler(ele.name.toLocaleLowerCase())} key={index+ele.name} className={`p-4 border-2 border-neutral-600 cursor-pointer rounded-md shadow-sm ${hotelDetails.homeType===ele.name.toLocaleLowerCase() ? 'bg-[#ff5a5f] text-white border-none':''}`}>
                        <span>{ele.icon}</span>
                        <p className='text-2xl font-bold'>{ele.name}</p>
                    </div>
                })
            }
        </div>
    </>
  )
}

export default SelectHomeType