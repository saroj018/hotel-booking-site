import React, { useContext, useEffect, useRef, useState } from 'react'
import Button from '../../../component/common/Button'
import Input from '../../../component/common/Input'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/HotelDetailContext'
import { useDeleteFetch, useGetFetch } from '../../../hooks/fetch-data'
import { toast } from 'react-toastify'

const Listing = () => {

    const { setVerify } = useContext(Context)
    const [hotelDetails, setHotelDetails] = useState()
    const [id, setId] = useState([])
    const[state,setState]=useState(false)

    const getHotelDetails = async () => {
        const result = await useGetFetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/gethoteldetails`)
        console.log(result);
        setVerify(result.verify)
        setHotelDetails(result.detals)
    }

    const deleteHotelDetails = async () => {
        const result = await useDeleteFetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/deletehoteldetails`,id)
        if (result?.success) {
            toast.success(result?.message)
            getHotelDetails()
        }
        else {
            toast.error(result?.message)
        }
        

    }

    useEffect(() => {
        getHotelDetails()
    }, [])

    useEffect(()=>{
        if(id.length>0){
            setState(true)
        }else setState(false)
    },[id])
    const deleteHandler=()=>{
        deleteHotelDetails()
    }

    const navigate = useNavigate()

    const changeHandler = (e) => {
        
        setId((prv) => {
            if (e.target.checked) {
                let data = [...prv, e.target.value]
                return data

            }
            else return prv.filter((item => item !== e.target.value))
            
        })

    }
    return (
        <div>
            <div className='flex justify-between mt-7'>
                <p className='text-2xl font-bold'>{hotelDetails?.length} Listings</p>
                <Button onClick={() => navigate('/host/hoteldetails')}>+ Create Listing</Button>
            </div>
            {state && <div className='w-fit mx-auto flex'>
                <p onClick={deleteHandler} className='border-2 px-8 py-2 border-neutral-600 rounded-full text-lg mx-2 cursor-pointer'>Delete</p>
            </div>}
            <div className={' max-h-[600px]'}>
                <table className='text-center text-xl mt-10'>
                    <thead className='border-2 border-neutral-700 border-l-0 border-r-0 '>
                        <th>Select</th>
                        <th className='p-4'>Listing</th>
                        {/* <th className='p-4 w-[150px]'>Status</th> */}
                        <th className='p-4 w-[350px]'>House Title</th>
                        <th className='p-4'>Bed Rooms</th>
                        <th className='p-4'>Beds</th>
                        <th className='p-4'>Bath Rooms</th>
                        <th className='p-4'>Instant Book</th>
                        <th colSpan={3} className='p-4'>Price</th>
                        <th className='p-4'>Discount</th>
                        <th className='p-4'>HouseType</th>
                    </thead>

                    <tbody>
                        {
                            hotelDetails?.map((item, index) => {
                                return <tr key={index} className='border-2 border-neutral-700 border-l-0 border-r-0'>
                                    <td><Input value={item._id} onChange={changeHandler} className={'w-5 h-5 cursor-pointer'} type='checkbox' /></td>
                                    <td className='w-[10%] p-3'>
                                        <img className='w-[100%] rounded-md' src={item?.idOfImage[0]?.url} alt="" />
                                    </td>
                                    {/* <td className='p-3'>pending</td> */}
                                    <td className='p-3 text-left'>{`${item?.houseTitle.slice(0, 30)}...`}</td>
                                    <td className='p-3'>{item?.customerNumber?.bedroom}</td>
                                    <td className='p-3'>{item?.customerNumber?.bed}</td>
                                    <td className='p-3'>{item?.customerNumber?.bathroom}</td>
                                    <td className='p-3'>{item?.bookingType.includes('instant') ? 'ON' : "OFF"}</td>
                                    <td className='p-3'>${item?.price?.adults}</td>
                                    <td className='p-3'>${item?.price?.childrens}</td>
                                    <td className='p-3'>${item?.price?.infants}</td>
                                    <td className='p-3'>{item?.discount}%</td>
                                    <td className='p-3'>{item?.roomType}</td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Listing