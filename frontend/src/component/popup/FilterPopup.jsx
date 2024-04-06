import React, { useState } from 'react'
import FilterBtn from '../FilterBtn'
import Popup from 'reactjs-popup'
import Input from '../common/Input';
import Select from '../common/Select';
import Option from '../common/Option';
import { BedDouble, BringToFront, Contact, Home, Hotel, MapPin, School, Shell, ShieldHalf, X } from 'lucide-react';
import Button from '../common/Button';
import { usePostFetch } from '../../hooks/fetch-data';


const FilterPopup = ({setDetails,setTimeUp}) => {

  const inputNumber = [
    {
      name: 'Rooms',
      type: 'number'
    },
    {
      name: 'Beds',
      type: 'number'
    },
    {
      name: 'Bathrooms',
      type: 'number'
    }
  ]

  const houseType = [
    {
      name: 'Peacfull',
      icon: <Shell size={50} strokeWidth={1} />
    },
    {
      name: 'Unique',
      icon: <ShieldHalf size={50} strokeWidth={1} />
    },
    {
      name: 'Family-Freindly',
      icon: <Contact size={50} strokeWidth={1} />
    },
    {
      name: 'Stylish',
      icon: <BringToFront size={50} strokeWidth={1} />
    },
    {
      name: 'Central',
      icon: <MapPin size={50} strokeWidth={1} />
    }
  ]

  const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

  const [isOpen, setIsOpen] = useState(false)
  const [filterParams, setFilterParams] = useState({
    about: '',
    place: '',
    price: {
      min: 2000,
      max: 5000
    },
    BRB: {
      Beds: 1,
      Rooms: 1,
      Bathrooms: 1
    }
  })

  const clearHandler = () => {
    setFilterParams({
      type: '',
      place: '',
      price: {
        min: 2000,
        max: 5000
      },
      BRB: {
        Beds: 1,
        Rooms: 1,
        Bathrooms: 1
      }
    })
  }

  const maxHandler = (e) => {
    setFilterParams((prv) => ({ ...prv, price: { ...prv.price, max: e.target.value * 900 } }))
  }
  const minHandler = (e) => {
    setFilterParams((prv) => ({ ...prv, price: { ...prv.price, min: e.target.value * 100 } }))
  }

  const filterHandler = async () => {
    setTimeUp(false)
    const result = await usePostFetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/filterhotels`, { filterParams })
    
    if(result.success){
      setIsOpen(false)
      setDetails(result.data)
    }
  }

  const changeHandler=(e)=>{
    let num=Number(e.target.value)
setFilterParams((prv)=>({...prv,BRB:{...prv.BRB,[e.target.name]:Number(num)}}))
  }


  return (
    <div>
      <FilterBtn onClick={() => setIsOpen(true)} />

      <Popup lockScroll={true} onClose={() => setIsOpen(false)} open={isOpen} {...{ overlayStyle }}>
        <div className='bg-white px-7 shadow-md rounded-md py-3 w-[1000px] max-h-[700px] overflow-y-scroll relative'>
          <X onClick={() => setIsOpen(false)} className='absolute left-[95%] cursor-pointer top-6' />
          <h1 className='text-center my-4 text-3xl font-bold'>Filter</h1>
          <hr />
          <div className='my-6'>
            <h1 className='text-3xl font-bold'>Type of Place</h1>
            <p className='text-xl my-4'>A home all to yourself</p>
          </div>
          <div className='flex px-9 text-center my-5'>
            <div onClick={() => setFilterParams((prv) => ({ ...prv, place: 'entire-place' }))} className={`grow p-3 border-2 border-neutral-500 rounded-md cursor-pointer text-xl hover:bg-black hover:text-white font-bold ${filterParams.place === 'entire-place' ? 'bg-black text-white' : ''} `}>Entire Place</div>
            <div onClick={() => setFilterParams((prv) => ({ ...prv, place: 'room' }))} className={`grow p-3 mx-2 border-2 border-neutral-500 rounded-md cursor-pointer text-xl hover:bg-black hover:text-white font-bold ${filterParams.place === 'room' ? 'bg-black text-white' : ''} `}>Room</div>
            <div onClick={() => setFilterParams((prv) => ({ ...prv, place: 'entirehome' }))} className={`grow p-3 border-2 border-neutral-500 rounded-md cursor-pointer text-xl hover:bg-black hover:text-white font-bold ${filterParams.place === 'entirehome' ? 'bg-black text-white' : ''} `}>Entire Home</div>
          </div>
          <hr />
          <div className='mt-9'>
            <h1 className='font-bold my-3 text-3xl'>Price Range</h1>
            <p className='text-xl my-3'>Nightly prices before fees and taxes</p>
          </div>
          <div className='border-2 flex justify-between'>
            <Input value={setFilterParams?.price?.min} onChange={minHandler} className={'grow mx-auto '} type='range' />
            <Input value={setFilterParams?.price?.max} onChange={maxHandler} className={'grow mx-auto '} type='range' />
          </div>
          <div className='flex items-center my-5 w-[70%] gap-10 mx-auto'>
            <div className='rounded-md py-2 px-10 border-2 grow'>
              <p className='text-2xl'>Minimum</p>
              <h1 className='font-bold'>$ {filterParams?.price?.min}</h1>
            </div>
            -
            <div className='rounded-md py-2 px-10 border-2 grow'>
              <p className='text-2xl'>Maximum</p>
              <h1 className='font-bold'>$ {filterParams?.price?.max}</h1>
            </div>
          </div>
          <hr />
          <div>
            <h1 className='text-2xl font-bold my-3'>Rooms & Beds</h1>
            <div className='flex gap-4 justify-center my-5 text-xl items-center'>
              {
                inputNumber.map((ele, index) => {
                  return <div key={index + ele.name}>
                    <p className='text-xl my-3 text-black font-bold'>{ele.name}</p>
                    <Input onChange={changeHandler} name={ele.name} value={filterParams?.BRB?.[ele.name]} className={'border-2 border-neutral-600 rounded-md p-2'} type='text' />
                  </div>
                })
              }
            </div>
          </div>
          <hr />
          <div className='mt-5'>
            <h1 className='text-3xl font-bold my-5'>House Type</h1>
            <div className='flex justify-center items-center gap-4 '>
              {
                houseType.map((ele, index) => {
                  return <div onClick={() => setFilterParams((prv) => ({ ...prv, about: ele.name}))}
                    className={`grow flex flex-col items-center gap-8 p-4 border-2 cursor-pointer rounded-lg ${filterParams.about == ele.name? 'bg-red-500 text-white' : ''}`} key={index + ele.name}>
                    {ele.icon}
                    <p className='text-2xl font-bold my-4'>{ele.name}</p>
                  </div>
                })
              }
            </div>
          </div>
          <div className='flex justify-between my-4 p-4'>
            <Button onClick={clearHandler}>Clear</Button>
            <Button onClick={filterHandler}>Find</Button>
          </div>
        </div>
      </Popup>
    </div>
  )
}

export default FilterPopup