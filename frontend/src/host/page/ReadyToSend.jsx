import React, { useContext } from 'react'
import { Context } from '../context/HotelDetailContext'
import { toast } from 'react-toastify'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import Button from '../../component/common/Button'
import { useNavigate } from 'react-router-dom'
import { dummyDescription, dummyHouseTitle } from '../../../DummyData'

const ReadyToSend = () => {
    const { hotelDetails, setHotelInfo, hotelInformantion, setHotelDetails, setVerify } = useContext(Context)
    const navigate = useNavigate()

    const clickHandler = async () => {
        console.log(hotelInformantion);
        console.log('hotelInformantion');
        try {
            const resp = await fetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/addhoteldetails`, {
                method: "POST",
                body: hotelInformantion,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            const result = await resp.json()
            console.log(result);
            setHotelInfo(result.hotelDetails)
            if (result.success) {

                toast.success(result.message)
                useLocalStorage(result.token, 'ownerToken', 'set')
                navigate('/host/finalpage')
            }
            else {

                toast.error(result.errmsg)
            }
            if (result.verify) {
                console.log(result.error);
                console.log(result);
                setVerify(true)
            }
        } catch (error) {
            toast.error(error.message)
        }

        // setHotelDetails({
        //     homeType: '',
        //     roomType: '',
        //     locatedPlace: {},
        //     customerNumber: {
        //       guest: 1,
        //       bed: 1,
        //       bathroom: 1,
        //       bedroom: 1
        //     },
        //     offerServices: [],
        //     houseTitle: dummyHouseTitle,
        //     aboutHome: '',
        //     description: dummyDescription,
        //     bookingType: '',
        //     price: {
        //       adults: 500,
        //       childrens: 300,
        //       infants: 100
        //       ,
        //     },
        //     discount: 0,
        // })
    }


    return (
        <>
            <h1 className='text-center text-4xl text-blue-500 my-3'>Check Your Details</h1>
            <table className='flex'>
                <thead>
                    <tr className='flex flex-col border-red-500 border-2'>
                        <th className='border-2 border-red-500 p-5'>HomeType</th>
                        <th className='border-2 border-red-500 p-5'>RoomType</th>
                        <th className='border-2 border-red-500 p-5'>HouseTitle</th>
                        <th className='border-2 border-red-500 p-5'>AboutHome</th>
                        <th className='border-2 border-red-500 p-5'>BookingType</th>
                        <th className='border-2 border-red-500 p-5'>Discount</th>
                        <th className='border-2 border-red-500 p-5 h-[98px]'>Price</th>
                        <th className='border-2 border-red-500 p-5 h-[90px]'>Location</th>
                        <th className='border-2 border-red-500 p-5 h-[185px]'>Description</th>
                        <th className='border-2 border-red-500 p-5'>OfferServices</th>
                        <th className='border-2 border-red-500 p-5 h-[140px]'>CustomerNumbers</th>
                        <th className='border-2 border-red-500 p-5'>BookingType</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='flex flex-col border-red-500 border-2'>
                        <td className='border-2 border-red-500 p-5'>{hotelDetails.homeType}</td>
                        <td className='border-2 border-red-500 p-5'>{hotelDetails.roomType}</td>
                        <td className='border-2 border-red-500 p-5'>{hotelDetails.houseTitle}</td>
                        <td className='border-2 border-red-500 p-5'>{hotelDetails.aboutHome}</td>
                        <td className='border-2 border-red-500 p-5'>{hotelDetails.bookingType}</td>
                        <td className='border-2 border-red-500 p-5'>{hotelDetails.discount}</td>
                        <td className='border-2 border-red-500 p-3'>
                            <ul>
                                <li>Adults: {hotelDetails.price.adults}</li>
                                <li>Childrens: {hotelDetails.price.childrens}</li>
                                <li>Infants: {hotelDetails.price.infants}</li>
                            </ul>
                        </td>
                        <td className='border-2 border-red-500 p-5'>
                            <ul>
                                <li>Lat: {hotelDetails.locatedPlace.lat}</li>
                                <li>Lan: {hotelDetails.locatedPlace.lan}</li>
                            </ul>
                        </td>
                        <td className='border-2 border-red-500 p-5'>{hotelDetails.description}</td>
                        <td className='border-2 border-red-500 p-5'>
                            {
                                hotelDetails.offerServices.map((ele) => {
                                    return <span key={ele}>{ele}</span>
                                })
                            }
                        </td>
                        <td className='border-2 border-red-500 p-5'>
                            <ul>
                                <li>Guest: {hotelDetails.customerNumber.guest}</li>
                                <li>Bed: {hotelDetails.customerNumber.bed}</li>
                                <li>BedRoom: {hotelDetails.customerNumber.bedroom}</li>
                                <li>BathRoom: {hotelDetails.customerNumber.bathroom}</li>
                            </ul>
                        </td>
                        <td className='border-2 border-red-500 p-5'>{hotelDetails.bookingType}</td>
                    </tr>
                </tbody>
            </table>
            <Button className={'ml-[85%] mb-20 mt-2 '} onClick={clickHandler}>Register</Button>
        </>
    )
}

export default ReadyToSend