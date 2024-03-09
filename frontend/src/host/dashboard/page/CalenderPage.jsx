import React, { useEffect, useState } from 'react'
import { Badge, Calendar } from 'antd'
import CalendarPopup from '../../popup/CalendarPopup'
import dayjs from 'dayjs'
import { useGetFetch, usePostFetch } from '../../../hooks/fetch-data'
import { getListData } from '../../../component/utlils/ListData'

const CalenderPage = () => {
  const[id,setId]=useState('')
  const[hotelInfo,setHotelInfo]=useState()

  const changeHandler=async(e)=>{
    const result=await usePostFetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/getsingledetails`,{hotelId:id,date:dayjs(e).format('YYYY-MM-DD')})
    setHotelInfo(result.hotel)
  }
  console.log(id);
  const getHotel=async()=>{
    const result=await useGetFetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/${id}`)
    console.log(result);
  }

  useEffect(()=>{
    getHotel()
  },[])

  const dateCellRender=(value)=>{
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type } text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  
  const cellRender=(current,info)=>{
    if (info.type === 'date') return dateCellRender(current);
    return info.originNode;
  }
  return (
    <div>
        <div className='w-full flex gap-5 mt-5 border-2 h-screen'>
            <Calendar cellRender={cellRender} onChange={changeHandler} className='text-center max-w-[72%] text-xl'/>
            <CalendarPopup hotelInfo={hotelInfo} id={id} setId={setId}/>
        </div>
    </div>
  )
}

export default CalenderPage