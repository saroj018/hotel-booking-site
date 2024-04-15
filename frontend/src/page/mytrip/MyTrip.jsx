import React, { useEffect, useState } from 'react'
import { useGetFetch } from '../../hooks/fetch-data'
import Cards from '../../component/Cards'
import dayjs from 'dayjs'

const MyTrip = () => {
    const [reserveInfo, setReserveInfo] = useState([])
    const [refe, setRef] = useState(false)
    const reserveInfoData = async () => {
        let result = await useGetFetch(`${import.meta.env.VITE_HOSTNAME}/api/reserve/getreservehoteldetails`)
        setReserveInfo(result.data)
    }
    useEffect(() => {
        reserveInfoData()
    }, [refe])
    return (
        <>
            {
                reserveInfo?.length > 0 ?
                    <h1 className='text-4xl font-black text-center my-3 underline text-red-500'>Your Trip</h1>
                    :
                    <h1 className='text-4xl font-black text-center my-3 underline text-red-500'>There is not any reserve</h1>
            }
            <hr />
            {
                reserveInfo.length === 0 ?
                    <h1 className='text-5xl text-center  w-full mt-4 text-red-500'>Loading........</h1>
                    : <div className='grid grid-cols-4 gap-5 overflow-y-scroll'>
                        {

                            reserveInfo?.map((item) => {
                                return <Cards refe={refe} setRef={setRef} params={'mytrip'} removeId={item._id} btn={'Cancel'} id={item?.hotel?._id} key={item?._id} trip={false} optional={false} heart={false} rating={'4.3/5'} price={'$120'} name={item?.hotel?.houseTitle.slice(0, 40) + '...'} imgDet={item?.hotel?.homeType} date={dayjs(item.checkIn).format('MM-DD') + ' to ' + dayjs(item.checkOut).format('MM-DD')} img={item?.hotel?.idOfImage[0].url} />
                            })
                        }
                    </div>
            }
        </>
    )
}

export default MyTrip