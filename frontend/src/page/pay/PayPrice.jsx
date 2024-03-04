import React, { useContext, useEffect, useRef, useState } from 'react'
import Button from '../../component/common/Button'
import Input from '../../component/common/Input'
import Select from '../../component/common/Select'
import Option from '../../component/common/Option'
import PriceBox from '../../component/PriceBox'
import { useSearchParams } from 'react-router-dom'
import { Space, DatePicker } from 'antd'
import ListPopup from '../../component/popup/ListPopup'
import dayjs from 'dayjs'
import { usePostFetch } from '../../hooks/fetch-data'
import Popup from 'reactjs-popup'
import { XCircle } from 'lucide-react'

const PayPrice = () => {
    const [datePicker, setDatePicker] = useState(false)
    const [guest, setGuest] = useState(false)
    const [payment, setPayment] = useState('')
    const [paymentOption, setPaymentOption] = useState('')
    const [show, setShow] = useState(false)
    const [reserveInfo, setReserveInfo] = useState({
        checkIn: '',
        checkOut: '',
        Adults: 0,
        Children: 0,
        Infants: 0,
        payMethod: '',
        payVia: ''
    })
    const [searchParams, setSearchParams] = useSearchParams()
    const checkIn = searchParams.get('checkIn')
    const checkOut = searchParams.get('checkOut')
    const Adults = Number(searchParams.get('Adults'))
    const Children = Number(searchParams.get('Children'))
    const Infants = Number(searchParams.get('Infants'))
    const { RangePicker } = DatePicker
    const partialRef = useRef()
    const fullRef = useRef()
    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };


    const getDate = (_, date) => {
        setSearchParams({
            checkIn: date[0] == null ? "" : date[0],
            checkOut: date[1] == null ? "" : date[1],
            Adults: Adults == null ? 0 : Adults,
            Children: Children == null ? 0 : Children,
            Infants: Infants == null ? 0 : Infants
        })
    }

    const clickHandler = (param) => {
        if (param == 'fullpay') {
            fullRef.current.click()
        }
        else {
            partialRef.current.click()
        }
    }

    const payMethodHandler = (e) => {
        setPayment(e.target.value)
    }

    const paymentOptionHandler = (e) => {
        setPaymentOption(e.target.value)
    }

    const reserveHandler = () => {
        setShow(true)
        setReserveInfo({
            checkIn,
            checkOut,
            Adults,
            Children,
            Infants,
            payMethod: payment,
            payVia: paymentOption
        })
    }


    const sendDataHandler =async () => {
        await usePostFetch(`${import.meta.env.VITE_HOSTNAME}/api/reserve/addreserve`, reserveInfo)
        setShow(false)
    }



    return (
        <div className='flex justify-between w-full pl-[10%] ' >
            <div >
                <h1 className='text-5xl font-bold my-10'>Confirm and pay</h1>
                <div >
                    <h1 className='text-4xl my-5'>Your Trip</h1>
                    <div className='flex relative justify-between my-4 items-center'>
                        <div>
                            <p className='text-xl font-bold'>Dates</p>
                            <p className='text-lg'>{`${checkIn}/${checkOut}`}</p>
                        </div>
                        <Button onClick={() => setDatePicker(!datePicker)} className={'px-10'}>Edit</Button>
                        {datePicker && <Space className='w-[50%] my-1 absolute left-[50%] bottom-[100%] ' direction="vertical" size={100}>
                            <RangePicker defaultValue={[dayjs(checkIn), dayjs(checkOut)]} onChange={getDate} popupStyle={{ fontSize: '18px' }} size='large' className='w-full text-3xl cursor-pointer outline-none' />
                        </Space>}
                    </div>
                    <div className='flex relative justify-between my-4 items-center'>
                        <div >
                            <p className='text-xl font-bold'>Guests</p>
                            <p className='text-lg'>{Adults + Children + Infants} Guest</p>
                        </div>
                        <Button onClick={() => setGuest(!guest)} className={'px-10'}>Edit</Button>
                        {guest && <ListPopup className={'absolute top-full left-[35%] bg-white w-[70%]'} />}
                    </div>
                </div>

                <div className=' mt-10'>
                    <h1 className='text-3xl font-bold my-6'>Choose how to pay</h1>

                    <div onClick={() => clickHandler('fullpay')} className='flex cursor-pointer justify-between items-center p-4 rounded-md border-2 border-neutral-700 my-3'>
                        <div>
                            <p className='text-2xl font-bold'>Pay in Full</p>
                            <p className='text-xl my-2'>Pay the total ($5,911.52).</p>
                        </div>
                        <Input onChange={payMethodHandler} value={'full'} ref={fullRef} name="paymethod" type='radio' className={'cursor-pointer h-6 w-6'} />
                    </div>
                    <div onClick={() => clickHandler('partialpay')} className='flex cursor-pointer justify-between items-center p-4 rounded-md border-2 border-neutral-700'>
                        <div>
                            <p className='text-2xl font-bold'>Pay part now, part later</p>
                            <p className='text-xl my-2'>$2,955.76 due today, $2,955.76 on Jan 21, 2024. No extra fees.</p>
                        </div>
                        <Input onChange={payMethodHandler} value={'partial'} ref={partialRef} name="paymethod" type='radio' className={'cursor-pointer h-6 w-6'} />
                    </div>
                </div>

                <div className=''>
                    <div className='flex items-center justify-between my-6'>
                        <h1 className='text-2xl font-bold'>Pay with</h1>
                        <div className='flex items-center gap-2'>
                            <img className=' w-10' src="https://dev-cdn.esewa.com.np/ui/images/logos/esewa-icon-large.png" alt="" />
                            <img className=' w-10' src="https://blog.khalti.com/wp-content/uploads/2021/02/Naya_Khalti_Logo_icon_2018-300x300.png" alt="" />
                            <img className=' w-10' src="https://play-lh.googleusercontent.com/LzKjYKvzLnyMq9XaRm3RauNI-ni7QwuN4r_IzClSXUNpO6o443SDACRd92ePn03UNHU" alt="" />
                            <img className=' w-10' src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo-2016-2020.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <Select onChange={paymentOptionHandler} className={'w-full h-14 rounded-md px-6 text-2xl'}>
                            <Option name={'paymentoption'} disabled >Select Payment Method</Option>
                            <Option name={'paymentoption'} value={'esewa'}>Esewa</Option>
                            <Option name={'paymentoption'} value={'khalti'}>Khalti</Option>
                            <Option name={'paymentoption'} value={'imepay'}>IME Pay</Option>
                            <Option name={'paymentoption'} value={'mastercard'}>Mastercard</Option>
                        </Select>
                    </div>
                    <Button onClick={reserveHandler} className={'bg-[#E00B41] border-none outline-none py-5 px-14 my-7 float-right'}>Confirm and Pay</Button>
                </div>
            </div>
            <PriceBox />

            <Popup lockScroll={true} onClose={() => setShow(false)} open={show} {...{ overlayStyle }}>
                <div className='h-[300px] w-[400px] bg-white p-5 rounded-md shadow-md'>
                    <div className='mx-auto w-fit'><XCircle size={110} color='red' strokeWidth={1} /></div>
                    <h1 className='text-center text-4xl font-bold '>Are you sure?</h1>
                    <h1 className='text-xl text-center my-4 font-extrabold text-red-500'>After exit your all details are delete!!</h1>
                    <div className='flex h-[23%] items-end gap-x-3 justify-between'>
                        <Button onClick={sendDataHandler} className={'w-[200px] bg-red-500 border-none'}>Yes</Button>
                        <Button onClick={() => setShow(false)} className={'w-[200px] bg-green-500 border-none'}>No</Button>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default PayPrice