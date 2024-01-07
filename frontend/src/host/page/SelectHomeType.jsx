import Footer from '../bar/Footer'
import { Blinds, Building, CarTaxiFront, Home, Sailboat, Tractor, UtensilsCrossed } from 'lucide-react'
// import {  useNavigate } from 'react-router-dom'

const SelectHomeType = () => {

    const homeType=[
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
    
    // const navigate=useNavigate()
  return (
    <>
        <h1 className='text-center text-4xl font-bold my-8'>Which of these best describes your place?</h1>
        <div className='grid grid-cols-3 w-[50%] gap-5 mx-auto'>
            {
                homeType.map((ele,index)=>{
                    return <div key={index+ele.name} className='p-4 border-2 border-neutral-600 cursor-pointer rounded-md shadow-sm'>
                        <span>{ele.icon}</span>
                        <p className='text-2xl font-bold'>{ele.name}</p>
                    </div>
                })
            }
        </div>
        <Footer back={'/host'} forward={'/host/roomtype'}/>
    </>
  )
}

export default SelectHomeType