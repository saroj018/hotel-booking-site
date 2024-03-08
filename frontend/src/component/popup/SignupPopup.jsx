import React, { useRef, useState } from 'react'
import Lable from '../common/Lable'
import Input from '../common/Input'
import Popup from 'reactjs-popup'
import Button from '../common/Button'
import { ImageIcon, X } from 'lucide-react'
import { usePostFetch } from '../../hooks/fetch-data'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { user } from '../../validation/userValidation'
import {  toast } from 'react-toastify';


const SignupPopup = () => {

    const [isShow, setIsShow] = useState(false)
    const inputRef = useRef()
    const [serverError, setServerError] = useState()

    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

    const{register,formState:{errors},handleSubmit}=useForm({resolver:zodResolver(user)})

    const onSubmit=async (data)=>{
        const result=await usePostFetch(`${import.meta.env.VITE_HOSTNAME}/api/user/signup`,data)
        if(!result.success){
            setServerError(result.message)
            
        }else{

            setIsShow(false)
        }
    }
    


    return (
        <>
            <Button className={'rounded-full bg-pink-500 outline-none border-none'} onClick={() => setIsShow(true)}>SignUp</Button>
            <Popup lockScroll={true} open={isShow} onClose={() => setIsShow(false)} {...{ overlayStyle }}>
                <div className=' border-2 w-[500px] bg-white p-4 rounded-md relative'>
                    <X onClick={() => setIsShow(false)} className='absolute left-[93%] cursor-pointer' />
                    <h1 className='text-center text-4xl font-bold' >Signup Form</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Lable className={'block'}>Name</Lable>
                        <Input {...register("fullname")}  className={'border-2 rounded-md px-3 w-full border-pink-400'} />
                        <p className='text-red-600'>{errors?.fullname?.message || serverError?.fullname?._errors[0]}</p>
                        <Lable>Email</Lable>
                        <Input {...register("email")}  className={'border-2 rounded-md px-3 w-full border-pink-400'} />
                        <p className='text-red-600'>{errors?.email?.message || serverError?.email?._errors[0]}</p>
                        <Lable>Password</Lable>
                        <Input {...register("password")} className={'border-2 rounded-md px-3 w-full border-pink-400'} type='password' />
                        <p className='text-red-600'>{errors?.password?.message || serverError?.password?._errors[0]}</p>
                        <Button type="submit" className={'w-full bg-pink-400 my-4 border-none outline-none py-3 rounded-full'}>SignUp</Button>

                    </form>
                </div>
            </Popup>
            
        </>
    )
}

export default SignupPopup