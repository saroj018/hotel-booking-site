import { ChevronUp, Pencil } from 'lucide-react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import PricePopup from '../popup/PricePopup'
import Input from '../../component/common/Input'
import { Context } from '../context/HotelDetailContext'

const SetPrice = () => {


    const [priceDrop, setPriceDrop] = useState(false)
    const [edit, setEdit] = useState(false)
    const [price, setPrice] = useState('50')
    const { hotelDetails, setHotelDetails, setBtnDisable } = useContext(Context)

    window.addEventListener('click', () => {
        setEdit(false)
    })
    useEffect(() => {
        if (Number(hotelDetails.price.adults) >= 500 && Number(hotelDetails.price.childrens) >= 300 && Number(hotelDetails.price.infants) >= 100){
        setBtnDisable(false)
    }
        else {
    setBtnDisable(true)
}
    }, [hotelDetails.price])

const priceHandler = (para, e) => {
    let price=Number(e.target.value)
    setHotelDetails((prv) => ({ ...prv, price: { ...prv.price, [para]: price } }))
    
}
return (
    <>
        <div className='w-1/2 b mx-auto'>
            <h1 className=' text-4xl text-center font-bold'>Now, set your price</h1>
            <div className=' w-1/2 mx-auto'>
                <p className=' text-2xl my-2'>For Adults (Age 13+)</p>
                <div className='font-extrabold flex items-center gap-2'>
                    <span className='text-5xl' >$</span>
                    <Input value={hotelDetails.price.adults} onChange={(e) => priceHandler('adults', e)} className=' p-0 h-[100px]  w-full text-center text-7xl font-extrabold border-2 border-black ' />
                </div>
                {/* <p onClick={(e) => { e.stopPropagation(), setPriceDrop(!priceDrop) }} className='text-lg text-blue-800 w-fit mx-auto underline cursor-pointer mt-10'>Show Price Details</p> */}

            </div>
            <div className='w-1/2 mx-auto'>
                <p className=' text-2xl my-2'>For Children(Age 2-12)</p>
                <div className=' font-extrabold flex items-center gap-3'>
                    <sapn className='text-5xl' >$</sapn>
                    <Input value={hotelDetails.price.childrens} onChange={(e) => priceHandler('childrens', e)} className=' p-0 h-[100px]  w-full text-center text-7xl font-extrabold border-2 border-black ' />
                </div>
                {/* <p onClick={(e) => { e.stopPropagation(), setPriceDrop(!priceDrop) }} className='text-lg text-blue-800 w-fit mx-auto underline cursor-pointer mt-10'>Show Price Details</p> */}

            </div>
            <div className='w-1/2 mx-auto'>
                <p className='text-2xl my-1'>For Infants(Age Under 2)</p>
                <div className='flex gap-3 items-center font-extrabold'>
                    <span className='text-5xl' >$</span>
                    <Input value={hotelDetails.price.infants} onChange={(e) => priceHandler('infants', e)} className=' p-0 h-[100px] w-full text-center text-7xl font-extrabold border-2 border-black ' />
                </div>
                {/* <p onClick={(e) => { e.stopPropagation(), setPriceDrop(!priceDrop) }} className='text-lg text-blue-800 w-fit mx-auto underline cursor-pointer mt-10'>Show Price Details</p> */}

            </div>
        </div>
    </>
)
}

export default SetPrice