import React, {  useEffect, useState } from 'react'
import { nightCalculator } from './utlils/nightCalculator'
import { useParams, useSearchParams } from 'react-router-dom'
import { useGetFetch } from '../hooks/fetch-data'

const PriceBox = () => {
const[hotelData,setHotelData]=useState({})
    const[searchParams,setSearchParams]=useSearchParams()
const Adults = Number(searchParams.get('Adults'))
const Children = Number(searchParams.get('Children'))
const Infants = Number(searchParams.get('Infants'))
const checkIn = searchParams.get('checkIn')
const checkOut = searchParams.get('checkOut')
const totalNight = nightCalculator([checkIn, checkOut])
const totalPrice = (Adults * hotelData?.price?.adults) * totalNight + (Children * hotelData?.price?.childrens) * totalNight + (Infants * hotelData?.price?.infants) * totalNight
const {id}=useParams()

const getDetails=async ()=>{
    const result=await useGetFetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/${id}`)
    setHotelData(result.data)
  }
useEffect(()=>{
  getDetails()

},[])  
    return (
        <div className='max-w-[40%] w-full border-2 border-neutral-400 rounded-md h-fit p-5 mt-10 shadow-md'>
            <div className='flex items-start gap-5 p-4'>
                <img className='w-[30%] rounded-md' src={hotelData?.idOfImage?.[0]?.url} alt="" />
                <div>
                    <p className='text-2xl'>{hotelData?.houseTitle?.slice(0,40)+'.....'}</p>
                </div>
            </div>
            <hr />
            <div>
                <h1 className='text-2xl font-bold my-3'>Price Details</h1>
                <div className='flex justify-between items-center'>
                    <div>
                    <p className='text-xl font-bold'>{`${totalNight } nights`}</p>
                    <p className='text-xl'>{`${Adults}  Adults ${Children}  Children ${Infants}  Infants`}</p>
                    </div>
                    <p className='text-2xl'>${totalPrice}</p>
                </div>
                <div className='flex text-red-500 font-bold justify-between items-center my-2'>
                    <p className='text-xl'>Taxes</p>
                    <p className='text-2xl'>$100</p>
                </div>
            </div>
            <hr />
            <div className='flex justify-between my-4 items-center'>
                <h1 className='text-2xl font-bold'>Total</h1>
                <p className='text-2xl my-2'>{`$${totalPrice+100}`}</p>
            </div>
        </div>
    )
}

export default PriceBox