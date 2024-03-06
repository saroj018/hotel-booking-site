import React, { useEffect, useState } from 'react'
import { useGetFetch } from '../../hooks/fetch-data'

const MyTrip = () => {
    const [reserveInfo, setReserveInfo] = useState()
    const reserveInfoData = async () => {
        let result = await useGetFetch(`${import.meta.env.VITE_HOSTNAME}/api/reserve/getreservehoteldetails`)
        setReserveInfo(result)
    }

    useEffect(() => {
        reserveInfoData()
    }, [])
    return (
        <>

        </>
    )
}

export default MyTrip