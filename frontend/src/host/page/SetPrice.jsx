import { ChevronUp, Pencil } from 'lucide-react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import PricePopup from '../popup/PricePopup'
import Input from '../../component/common/Input'
import { Context } from '../context/HotelDetailContext'

const SetPrice = () => {


    const [priceDrop, setPriceDrop] = useState(false)
    const [edit, setEdit] = useState(false)
    const[price,setPrice]=useState('50')
    const{hotelDetails,setHotelDetails,setBtnDisable}=useContext(Context)

    window.addEventListener('click', () => {
        setEdit(false)
    })

    useEffect(()=>{
        if(hotelDetails.price>100){
            setBtnDisable(false)
        }
    },[hotelDetails.price])
    console.log(hotelDetails);
    return (
        <>
            <div className='w-1/2 mx-auto'>
                <h1 className=' text-4xl text-center font-bold'>Now, set your price</h1>
                <p className='text-2xl my-4 text-center'>You can change it anytime.</p>
                <div className='relative'>
                    <div className='relative flex items-center text-9xl font-extrabold  w-fit mx-auto'>
                        <h1 className='mx-4' >$</h1>
                        <Input value={hotelDetails.price} onChange={(e)=>setHotelDetails((prv)=>({...prv,price:e.target.value}))} className=' p-0 h-[150px] w-[350px] text-center text-9xl font-extrabold border-2 border-black '/>
                    </div>
                    <p className='text-center relative text-2xl my-5'>Price After Service Fee $200 </p>
                    <p onClick={(e) => { e.stopPropagation(), setPriceDrop(!priceDrop) }} className='text-lg text-blue-800 w-fit mx-auto underline cursor-pointer mt-10'>Show Price Details</p>
                    {priceDrop && <PricePopup className={'absolute left-[7%] top-[105%] z-10 bg-white'} />}
                </div>
            </div>
        </>
    )
}

export default SetPrice