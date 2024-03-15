import React, { useEffect, useState } from 'react'
import { useGetFetch } from '../../hooks/fetch-data'
import Cards from '../../component/Cards'
import dayjs from 'dayjs'

const MyTrip = () => {
    const [reserveInfo, setReserveInfo] = useState([])
    const reserveInfoData = async () => {
        let result = await useGetFetch(`${import.meta.env.VITE_HOSTNAME}/api/reserve/getreservehoteldetails`)
        console.log(result);
        setReserveInfo(result.data)
    }
    useEffect(() => {
        reserveInfoData()
    }, [])
    return (
        <>
        <h1 className='text-4xl font-black text-center my-3 underline text-red-500'>Wait for Approve</h1>
        <hr />
        <div className='grid grid-cols-4 gap-5'>
        {
            reserveInfo.length>0 && reserveInfo?.map((item)=>{
                return <Cards id={item?.hotel?._id} key={item?._id} trip={false} optional={true} heart={false} rating={'4.3/5'} price={'$120'} name={item?.hotel?.houseTitle.slice(0, 40) + '...'} imgDet={item?.hotel?.homeType} date={dayjs(item.checkIn).format('MM-DD')+' to '+dayjs(item.checkOut).format('MM-DD')} img={item?.hotel?.idOfImage[0].url} />
            })
        }
        </div>
        </>
    )
}

export default MyTrip