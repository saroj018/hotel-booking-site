import React, { useEffect, useState } from 'react'
import { Badge, Calendar } from 'antd'
import CalendarPopup from '../../popup/CalendarPopup'
import dayjs from 'dayjs'
import { useGetFetch, usePostFetch } from '../../../hooks/fetch-data'
import { getListData } from '../../../component/utlils/ListData'
import { v4 as uuid } from 'uuid'

const CalenderPage = () => {
  const [id, setId] = useState('')
  const [hotelInfo, setHotelInfo] = useState()
  const [reserveDate, setReserveDate] = useState([])

  const changeHandler = async (e) => {
    const result = await usePostFetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/getsingledetails`, { hotelId: id, date: dayjs(e).format('YYYY-MM-DD') })
    setHotelInfo(result.hotel)
  }
  const getHotel = async () => {
    setReserveDate([])
    const result = await useGetFetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/${id}`)
    console.log(result);
    result?.dates?.forEach((ele) => {
      ele?.dateList?.forEach((item) => {
        setReserveDate((prv) => {
          let data=[...prv]
          if (!data.includes(item)) {
            data=[...prv,item]
          }
          return data
        })
      })
    })
  }
  console.log(hotelInfo);
  console.log(reserveDate);

  useEffect(() => {
    getHotel()
  }, [id])

  const dateCellRender = (value) => {
    const listData = getListData(value, reserveDate);
    return (
      <ul className="events">
        {listData?.map((item, index) => (
          <li key={uuid()}>
            <Badge style={{ fontWeight: 'bold',color:'red'}} status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    return info.originNode;
  }
  return (
    <div>
      <div className='w-full flex gap-5 mt-5 border-2 '>
        <Calendar cellRender={cellRender} onChange={changeHandler} className='text-center max-w-[72%] text-xl' />
        <CalendarPopup hotelInfo={hotelInfo} id={id} setId={setId} />
      </div>
    </div>
  )
}

export default CalenderPage