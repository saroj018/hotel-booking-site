import React, { useState } from 'react'
import Lable from '../../component/common/Lable'
import Input from '../../component/common/Input'
import Select from '../../component/common/Select'
import Option from '../../component/common/Option'
import Button from '../../component/common/Button'
import {useForm} from 'react-hook-form'
import { verifyFormValidation } from '../../validation/userValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import OtpPopup from '../../component/popup/OtpPopup'
import dayjs from 'dayjs'
import {usePostFetch} from '../../hooks/fetch-data'

const EditForm = () => {
    const[isOpen,setIsOpen]=useState(false)
    const[timer,setTimer]=useState({min:0,sec:0})
    const{register,watch,handleSubmit,formState:{errors}}=useForm({resolver:zodResolver(verifyFormValidation),defaultValues:{
        firstname:'Saroj',
        lastname:'Aryal',
        address:'Ratnanagar',
        email:'abc@gmail.com',
        cemail:'abc@gmail.com',
        phone:982345324,
        dob:dayjs().format('YYYY-MM-DD'),
        gender:'male'
    }})

    const onSubmit=async(data)=>{
        console.log(data);
       const result= await usePostFetch(`${import.meta.env.VITE_HOSTNAME}/api/sendmail`,data)
       console.log(result);
       if(result.success){
        setIsOpen(true)
       }
       setTimer({min:0,sec:0})
    }
   

  
    return (
        <div className='border-2 border-neutral-100 shadow-md w-[800px] p-3 mt-6 mx-auto'>
            <h1 className='text-center text-4xl font-bold my-3'>Verify your account</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='flex items-center gap-4'>
                    <div className='grow'>
                        <Lable className={'text-lg'}>First Name</Lable>
                        <Input {...register('firstname')} className={'border-2 border-neutral-500 rounded-md w-full'} />
                        <p className='text-red-500'>{errors?.firstname?.message}</p>
                    </div>
                    <div className='grow'>
                        <Lable className={'text-lg'}>Last Name</Lable>
                        <Input {...register('lastname')} className={'border-2 border-neutral-500 rounded-md w-full'} />
                        <p className='text-red-500'>{errors?.lastname?.message}</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='grow'>
                        <Lable className={'text-lg'}>Address</Lable>
                        <Input {...register('address')} className={'border-2 border-neutral-500 rounded-md w-full'} />
                        <p className='text-red-500'>{errors?.address?.message}</p>
                    </div>
                    <div className='grow'>
                        <Lable className={'text-lg'}>Phone</Lable>
                        <Input {...register('phone',{valueAsNumber:true})}  className={'border-2 border-neutral-500  rounded-md w-full'} />
                        <p className='text-red-500'>{errors?.phone?.message}</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='grow'>
                        <Lable className={'text-lg'}>Gender</Lable>
                        <Select {...register('gender')} className={'w-full h-[50px] px-2 text-lg rounded-md border-2 bg-white border-neutral-500'}>
                            <Option value={'male'} >Male</Option>
                            <Option value={'female'} >Female</Option>
                            <Option value={'other'} >Other</Option>
                        </Select>
                        <p className='text-red-500'>{errors?.gender?.message}</p>
                    </div>
                    <div className='grow'>
                        <Lable className={'text-lg'}>DOB</Lable>
                        <Input {...register('dob',{valueAsDate:true})} type={'date'} className={'border-2 border-neutral-500  rounded-md w-full'} />
                        <p className='text-red-500'>{errors?.dob?.message}</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='grow'>
                        <Lable className={'text-lg'}>Email</Lable>
                        <Input {...register('email')} className={'border-2 border-neutral-500  rounded-md w-full'} />
                        <p className='text-red-500'>{errors?.email?.message}</p>
                    </div>
                    <div className='grow'>
                        <Lable className={'text-lg'}>Confirm Email</Lable>
                        <Input {...register('cemail')} className={'border-2 border-neutral-500  rounded-md w-full'} />
                        <p className='text-red-500'>{errors?.cemail?.message}</p>
                    </div>
                </div>
                <Button type='submit' className='w-full my-5'>Submit</Button>
            </form>
            <OtpPopup timer={timer} setTimer={setTimer} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}

export default EditForm