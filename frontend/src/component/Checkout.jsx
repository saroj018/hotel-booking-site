import React, { useContext, useEffect, useState } from 'react'
import ListPopup from './popup/ListPopup'
import { ChevronDown } from 'lucide-react'
import Button from './common/Button'
import { twMerge } from 'tailwind-merge'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Space, DatePicker } from 'antd'
import { Context } from '../host/context/HotelDetailContext'
import { nightCalculator } from './utlils/nightCalculator'
import { z } from 'zod'
import dayjs from 'dayjs'
import { toast } from 'react-toastify'
import { useDateListMaker } from '../hooks/useDateListMaker'

const Checkout = ({ className, dateCollection }) => {
    const [list, setList] = useState(false)
    const [dateLists, setDateLists] = useState([])
    const { RangePicker } = DatePicker
    const [searchParams, setSearchParams] = useSearchParams()
    const { hotelData } = useContext(Context)
    const dateValidate = z.tuple([z.string().min(3, { message: 'Date is required' }), z.string().min(3, { message: 'Date is required' })]);
    const navigate = useNavigate()
    const { id } = useParams()
    const Adults = Number(searchParams.get('Adults'))
    const Children = Number(searchParams.get('Children'))
    const Infants = Number(searchParams.get('Infants'))
    const checkIn = searchParams.get('checkIn')
    const checkOut = searchParams.get('checkOut')
    const totalNight = nightCalculator([checkIn, checkOut])
    const totalPrice = (Adults * hotelData?.price.adults) * totalNight + (Children * hotelData?.price.childrens) * totalNight + (Infants * hotelData?.price.infants) * totalNight
    useEffect(() => {
        setSearchParams({
            checkIn: checkIn == null ? dayjs().format('YYYY-MM-DD') : checkIn,
            checkOut: checkOut == null ? dayjs().add(1, 'd').format('YYYY-MM-DD') : checkOut,
            Adults: Adults == null ? 1 : Adults,
            Children: Children == null ? 0 : Children,
            Infants: Infants == null ? 0 : Infants,
        })
    }, [])

    const dateHandler = (_, date) => {
        setSearchParams({
            checkIn: date[0] == null ? "" : date[0],
            checkOut: date[1] == null ? "" : date[1],
            Adults: Adults,
            Children: Children,
            Infants: Infants,
        })
    }

 


    const reserveHandler = () => {
        let startingDate = searchParams.get('checkIn')
        let endingDate = searchParams.get('checkOut')
        const dates=useDateListMaker(startingDate,endingDate)

        try {
            dateValidate.parse([checkIn, checkOut])
            if (Adults + Children + Infants < 1) {
                toast.error("Atleast 1 guest required")
                return
            }

        //   let result= dateCollection?.some((ele)=>{
        //     return ele?.dateList?.some((item)=>{
        //       return  dates.includes(item)
        //     })
        //    })

        let result=dateCollection?.find((ele)=>{
            return ele?.dateList?.find((item)=>{
                return dates?.includes(item)
            })
        })

            if (result) {
                toast.error("Selected date is unavilable")
                return
            }
            if(totalNight<1){
                toast.error("Minimum 1 night is required")
                return
            }

            navigate(`/${id}/payprice?checkIn=${checkIn}&checkOut=${checkOut}&Adults=${Adults}&Children=${Children}&Infants=${Infants}`) 
        } catch (error) {
            toast.error(error.format()[0]._errors[0])
        }
    }

    const disableDateHandler = (current) => {
        let data= dateCollection?.some((ele) => {
            let particularDate= ele?.dateList?.some((item) => current.isSame(item)) 
            return particularDate 
        })
        return current && current < dayjs().endOf('day') || data
    }


    return (
        <div className={twMerge('w-[500px] rounded-xl shadow-xl p-5 border-2 relative', className)}>
            <h1 className='text-2xl font-bold'>$ {hotelData?.price.adults} <span>per night(for adults)</span></h1>
            <div className=' my-3'>
                <Space className='w-full my-1' direction="vertical" size={100}>
                    <RangePicker disabledDate={disableDateHandler} format={'YYYY-MM-DD'} defaultValue={[dayjs(), dayjs().add(1, 'd')]} onChange={dateHandler} popupStyle={{ fontSize: '18px' }} size='large' className='w-full text-3xl cursor-pointer outline-none' />
                </Space>
                <div className='flex'>
                    <div className='border-2 px-4 py-1 grow text-xl'>
                        <p>CheckIn</p>
                        <p className='text-lg font-black'>{checkIn}</p>
                    </div>
                    <div className='border-2 px-4 py-1 text-xl grow'>
                        <p>CheckOut</p>
                        <p className='text-lg font-black'>{checkOut}</p>
                    </div>
                </div>
                <div onClick={() => setList(!list)} className='w-full my-2 flex justify-between items-center cursor-pointer h-[70px] px-4 py-2 text-xl border-2'>
                    <div>
                        <p className='font-bold'>Guest</p>
                        <p>{Adults + Children + Infants} Guest</p>
                    </div>
                    <ChevronDown className={!list ? 'rotate-180 duration-300' : 'rotate-0 duration-300'} />
                </div>
            </div>
            <ListPopup setSearchParams={setSearchParams} searchParams={searchParams} className={`${list ? 'hidden' : ''} absolute top-[46%] left-[4%] bg-white max-w-[92%] w-full`} />

            <Button onClick={reserveHandler} className={'w-full my-5 bg-[#ff385c] outline-none border-none hover:bg-[#ff385c] hover:text-white'}>Reserve</Button>

            <p className='text-center text-xl'>You won't be Charged Yet</p>
            <div className='flex justify-between items-center my-4 text-2xl'>
                <div>
                    <p>{totalNight} Night</p>
                    <p className='text-lg text-green-500'>{`(${Adults} Adults ${Children} Childrens ${Infants} Infants)`}</p>
                </div>
                <p>{`$${totalPrice}`}</p>
            </div>
            <div className='flex justify-between items-center text-2xl  my-4'>
                <p>Airbnb Service Fee</p>
                <p>$100</p>
            </div>

            <hr />

            <div className='flex justify-between items-center my-5 text-2xl font-semibold'>
                <p>Total </p>
                <p>{totalPrice + 100}</p>
            </div>
        </div>
    )
}

export default Checkout