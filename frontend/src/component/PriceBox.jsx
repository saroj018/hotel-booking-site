import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

const PriceBox = ({hotelData}) => {

    const stateData=useSelector(state=>state.price)
    console.log(stateData);
    return (
        <div className='max-w-[40%] w-full border-2 border-neutral-400 rounded-md h-fit p-5 mt-10 shadow-md'>
            <div className='flex items-start gap-5 p-4'>
                <img className='w-[30%] rounded-md' src={hotelData?.idOfImage?.[0].url} alt="" />
                <div>
                    <p className='text-2xl'>{hotelData?.houseTitle?.slice(0,40)+'.....'}</p>
                </div>
            </div>
            <hr />
            <div>
                <h1 className='text-2xl font-bold my-3'>Price Details</h1>
                <div className='flex justify-between items-center'>
                    <div>
                    <p className='text-xl font-bold'>{`${stateData.night } nights`}</p>
                    <p className='text-xl'>{`${stateData.totalPrice.adultPrice/600}  Adults ${stateData.totalPrice.childrenPrice/400}  Children ${stateData.totalPrice.infantPrice/200}  Infants`}</p>
                    </div>
                    <p className='text-2xl'>{`$${stateData.totalPrice.adultPrice*stateData.night+stateData.totalPrice.childrenPrice*stateData.night+stateData.totalPrice.infantPrice*stateData.night}`}</p>
                </div>
                <div className='flex text-red-500 font-bold justify-between items-center my-2'>
                    <p className='text-xl'>Taxes</p>
                    <p className='text-2xl'>$100</p>
                </div>
            </div>
            <hr />
            <div className='flex justify-between my-4 items-center'>
                <h1 className='text-2xl font-bold'>Total</h1>
                <p className='text-2xl my-2'>{`$${stateData.totalPrice.adultPrice*stateData.night+stateData.totalPrice.childrenPrice*stateData.night+stateData.totalPrice.infantPrice*stateData.night+100}`}</p>
            </div>
        </div>
    )
}

export default PriceBox