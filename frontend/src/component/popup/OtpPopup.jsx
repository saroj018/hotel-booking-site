import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import Input from '../common/Input'
import Button from '../common/Button'
import dayjs from 'dayjs';
import { usePostFetch } from '../../hooks/fetch-data';
import { useNavigate } from 'react-router-dom';

const overlayStyle = { background: 'rgba(0,0,0,0.5)' };



const OtpPopup = ({ isOpen, setIsOpen,timer,setTimer }) => {

const[active,setActive]=useState(false)
const[otp,setOtp]=useState('')
const navigate=useNavigate()

  useEffect(() => {
    let id = setInterval(() => {
      if(timer.min==2){
        clearInterval(id)
        setActive(true)
        return 
      }
      if (timer.sec > 59) {
        setTimer((prv) => ({ ...prv, min: prv.min + 1,sec:0 }))

      }
      else {
        setTimer((prv) => ({ ...prv, sec: prv.sec + 1 }))
        setActive(false)
      }
    }, 1000);

    return () => clearInterval(id)
  }, [timer])

  const closeHandler=()=>{
    setIsOpen(false)
    setTimer({min:0,sec:0})
    setOtp('')
  }

  const changeHandler=(e)=>{
    setOtp(e.target.value)
  }

  const clickHandler=async()=>{
    let result=await usePostFetch(`${import.meta.env.VITE_HOSTNAME}/api/sendmail`,{otp})
    console.log(result);
    setIsOpen(result.success)
    if(result.success){
      navigate('/host/dashboard')
    }
  }

  const resendHandler=()=>{
    setTimer({min:0,sec:0})
  }

  return (
    <Popup lockScroll={true} open={isOpen} onClose={closeHandler} {...{ overlayStyle }} >
      <div className='w-[400px] p-3 flex  bg-white border-2 border-black rounded-md shadow-md flex-col justify-center items-center gap-y-3'>
        <img className='h-[100px]' src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Email_icon.png" alt="" />
        <h1 className='text-center text-lg'>Please checck your email.You can receive a otp on yoyr email.This otp is valid for 2 min</h1>
        <Input onChange={changeHandler} value={otp} className={'border-2 border-neutral-500 rounded-md'} />
        <p>{`${timer.min}:${timer.sec}`}</p>
        {active && <p onClick={resendHandler} className='cursor-pointer text-blue-500 font-bold underline'>Resend it</p>}
        <Button onClick={clickHandler} className={'bg-pink-500 border-none outline-none '}>Submit</Button>
      </div>
    </Popup>
  )
}

export default React.memo(OtpPopup)