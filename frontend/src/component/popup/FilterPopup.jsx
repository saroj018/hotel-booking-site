import React, { useState } from 'react'
import FilterBtn from '../FilterBtn'
import Popup from 'reactjs-popup'
import Input from '../common/Input';
import Select from '../common/Select';
import Option from '../common/Option';
import { BedDouble, Home, Hotel, School } from 'lucide-react';
import Button from '../common/Button';


const FilterPopup = () => {

  const inputNumber=[
    {
      name:'Rooms',
      type:'number'
    },
    {
      name:'Beds',
      type:'number'
    },
    {
      name:'Bathrooms',
      type:'number'
    }
  ]

  const propertyType=[
    {
      name:'Home',
      icon:<Home  strokeWidth={1} size={60} />
    },
    {
      name:'Apartment',
      icon:<School strokeWidth={1} size={60} />
    },
    {
      name:'GuestHouse',
      icon:<BedDouble strokeWidth={1} size={60} />
    },
    {
      name:'Hotel',
      icon:<Hotel strokeWidth={1} size={60} />
    }
  ]

  const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <FilterBtn onClick={() => setIsOpen(true)} />

      <Popup onClose={() => setIsOpen(false)} open={isOpen} {...{ overlayStyle }}>
        <div className='bg-white px-7 shadow-md rounded-md py-3 w-[1000px] max-h-[700px] overflow-y-scroll  border-2 border-red-500'>
          <h1 className='text-center my-4 text-3xl font-bold'>Filter</h1>
          <hr />
          <div className='my-6'>
            <h1 className='text-3xl font-bold'>Type of Place</h1>
            <p className='text-xl my-4'>A home all to yourself</p>
          </div>
          <div className='flex px-9 text-center my-5'>
            <div className='grow p-3 border-2 border-neutral-500 rounded-md cursor-pointer text-xl hover:bg-black hover:text-white font-bold '>Any Type</div>
            <div className='grow p-3 border-2 border-neutral-500 rounded-md cursor-pointer text-xl hover:bg-black hover:text-white font-bold '>Room</div>
            <div className='grow p-3 border-2 border-neutral-500 rounded-md cursor-pointer text-xl hover:bg-black hover:text-white font-bold '>Entire Home</div>
          </div>
          <hr />
          <div className='mt-9'>
            <h1 className='font-bold my-3 text-3xl'>Price Range</h1>
            <p className='text-xl my-3'>Nightly prices before fees and taxes</p>
          </div>
          <div className='border-2 flex justify-between'>
            <Input className={'w-[80%] mx-auto '} type='range' />
          </div>
          <div className='flex items-center my-5 w-[70%] gap-10 mx-auto'>
            <div className='rounded-md py-2 px-10 border-2 grow'>
              <p className='text-2xl'>Minimum</p>
              <h1 className='font-bold'>$ 48</h1>
            </div>
            -
            <div className='rounded-md py-2 px-10 border-2 grow'>
              <p className='text-2xl'>Maximum</p>
              <h1 className='font-bold'>$ 100</h1>
            </div>
          </div>
            <hr />  
          <div>
            <h1 className='text-2xl font-bold my-3'>Rooms & Beds</h1>
            <div className='flex gap-4 justify-center my-5 text-xl items-center'>
              {
                inputNumber.map((ele,index)=>{
                  return <div key={index+ele.name}>
                    <p className='text-xl my-3 text-black font-bold'>{ele.name}</p>
                    <Input className={'border-2 border-neutral-600 rounded-md p-2'} type={ele.type}/>
                  </div>
                })
              }
            </div>
          </div>
                <hr />
          <div className='mt-5'>
            <h1 className='text-3xl font-bold my-5'>Property Type</h1>
            <div className='flex justify-center items-center gap-4 '>
             {
              propertyType.map((ele,index)=>{
                return <div className='grow flex flex-col gap-8 p-4 border-2 rounded-lg' key={index+ele.name}>
                  {ele.icon}
                  <p className='text-2xl font-bold my-4'>{ele.name}</p>
                </div>
              })
             }
            </div>
          </div>
        <div className='flex justify-between my-4 p-4'>
        <Button>Clear</Button>
        <Button>Find</Button>
        </div>
        </div>
      </Popup>
    </div>
  )
}

export default FilterPopup