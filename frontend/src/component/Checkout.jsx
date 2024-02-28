import React, { useContext, useEffect, useState } from 'react'
import ListPopup from './popup/ListPopup'
import { ChevronDown } from 'lucide-react'
import Button from './common/Button'
import { twMerge } from 'tailwind-merge'
import DateRangePicker from './utlils/DateRange'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Space, DatePicker } from 'antd'
import { Context } from '../host/context/HotelDetailContext'
import { useDispatch } from 'react-redux'
import { addPrice } from '../redux/slices/priceSlice'
import { dateValidate } from '../validation/userValidation'

const Checkout = ({ className }) => {

    const [list, setList] = useState(false)
    const[dateRange,setDateRange]=useState([])
    const[night,setNight]=useState(0)
    const[totalPrice,setTotalPrice]=useState({
        adultPrice:0,
        childrenPrice:0,
        infantPrice:0,
        count:{}
    })
    const[dateRangeValidate,setDateRangeValidate]=useState()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {id}=useParams()

    const { RangePicker } = DatePicker;
    const{hotelData}=useContext(Context)
    console.log(totalPrice.infantPrice);

    const getDate=(_,date)=>{
        
        setDateRange(date)
        setDateRangeValidate(false)
      }

      useEffect(()=>{
        // let totalNight=new Date(dateRange[0]-dateRange[1]).getTime()
        const checkInTime=new Date(dateRange[0]).getTime()
        const checkOutTime=new Date(dateRange[1]).getTime()
        const nightMili=checkOutTime-checkInTime
        const millisecondsInDay = 24 * 60 * 60 * 1000; 
     let totalNight=Math.ceil(nightMili / millisecondsInDay) || 0;
     setNight(totalNight)
      },[dateRange])

      console.log(dateRange);

      const clickHandler=()=>{
        try {
            const reserveDate=[new Date(dateRange[0]),new Date(dateRange[1])]
        const validate=dateValidate.parse(reserveDate)
            navigate(`/${id}/payprice`)
            
            dispatch(addPrice({night,totalPrice}))
            setDateRangeValidate(false)
        } catch (error) {
            setDateRangeValidate(true)
            
        }
      }

    return (
        <div className={twMerge('w-[500px] rounded-xl shadow-xl p-5 border-2 relative', className)}>
            <h1 className='text-2xl font-bold'>{'$'+hotelData.price.adults} <span>per night</span></h1>
            <div className=' my-3'>
                <Space className='w-full my-1' direction="vertical" size={100}>
                    <RangePicker onChange={getDate} popupStyle={{ fontSize: '18px' }} size='large' className='w-full text-3xl cursor-pointer outline-none' />
                </Space>
                {dateRangeValidate? <p className='text-red-500 text-xl mb-2'>Invalid Date</p>:''}
                <div className='flex'>
                    <div className='border-2 px-4 py-1 grow text-xl'>
                        <p>CheckIn</p>
                        <p className='text-lg font-black'>{dateRange[0]}</p>
                    </div>
                    <div className='border-2 px-4 py-1 text-xl grow'>
                        <p>CheckOut</p>
                        <p className='text-lg font-black'>{dateRange[1]}</p>
                    </div>
                </div>
                <div onClick={() => setList(!list)} className='w-full my-2 flex justify-between items-center cursor-pointer h-[70px] px-4 py-2 text-xl border-2'>
                    <div>
                        <p className='font-bold'>Guest</p>
                        <p>{totalPrice.count.Adults+totalPrice.count.Children+totalPrice.count.Infants} Guest</p>
                    </div>
                    <ChevronDown className={!list ? 'rotate-180 duration-300' : 'rotate-0 duration-300'} />
                </div>
            </div>
            <ListPopup setTotalPrice={setTotalPrice} className={`${list ? 'hidden':''} absolute top-[46%] left-[4%] bg-white max-w-[92%] w-full`} />

           <Button onClick={clickHandler} className={'w-full my-5 bg-[#ff385c] outline-none border-none hover:bg-[#ff385c] hover:text-white'}>Reserve</Button>

            <p className='text-center text-xl'>You won't be Charged Yet</p>
            <div className='flex justify-between items-center my-4 text-2xl'>
                <div>
                <p>{`$${hotelData?.price?.adults}*${night} night`}</p>
                <p className='text-lg text-green-500'>{`(${totalPrice.adultPrice/600} Adults ${totalPrice.childrenPrice/400} Childrens ${totalPrice.infantPrice/200} Infants)`}</p>
                </div>
                <p>{`$${(totalPrice.adultPrice+totalPrice.childrenPrice+totalPrice.infantPrice)*night}`}</p>
            </div>
            <div className='flex justify-between items-center text-2xl  my-4'>
                <p>Airbnb Service Fee</p>
                <p>${`${night<1 ? 0:500}`}</p>
            </div>

            <hr />

            <div className='flex justify-between items-center my-5 text-2xl font-semibold'>
                <p>Total </p>
                <p>{`$${(totalPrice.adultPrice+totalPrice.childrenPrice+totalPrice.infantPrice)*night+ (night<1?0:500)}`}</p>
            </div>
        </div>
    )
}

export default Checkout