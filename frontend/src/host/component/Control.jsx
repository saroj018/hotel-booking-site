import React, { useEffect, useState } from 'react'
import { useGetFetch } from '../../hooks/fetch-data'


const Control = ({id,setId}) => {
    const [hotelDetails, setHotelDetails] = useState()


    const getHotelDetails = async () => {
        const result = await useGetFetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/gethoteldetails`)
        setId(result?.detals?.[0]?._id)
        setHotelDetails(result.detals)
        console.log('damm>>>',result);
    }
    useEffect(()=>{
        getHotelDetails()
    },[])

    return (
        <>
{
    hotelDetails?.map((ele)=>{
        return <div key={ele._id} onClick={()=>{setId(ele._id)}} className={`flex mt-3 cursor-pointer gap-3 border-2  rounded-md p-1 ${id==ele._id ? 'border-red-500 border-4':'border-gray-300'}`}>
            <img className='w-[20%]' src={ele.idOfImage[0].url} alt="" />
            <p>{ele.houseTitle.slice(0,45)}...</p>
        </div>
    })
}
        </>
    )
}

export default Control