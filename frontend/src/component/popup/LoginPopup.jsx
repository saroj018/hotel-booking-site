import React, { useContext, useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Popup from 'reactjs-popup'
import Lable from '../common/Lable'
import { X } from 'lucide-react'
import { useGetFetch, usePostFetch } from '../../hooks/fetch-data'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { user } from '../../validation/userValidation'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../host/context/HotelDetailContext'
import ChangePasswordPopup from './ChangePasswordPopup'


const LoginPopup = () => {

    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

    const [isShow, setIsShow] = useState(false)
    const { isAuth, setIsAuth,setName } = useContext(Context)
    const navigate = useNavigate()
    const[isOpen,setIsOpen]=useState(false)
    const[emailPopup,setEmailPopup]=useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(user),defaultValues:{email:'harry@gmail.com',password:'password'} })

    const onSubmit = async (data) => {
        let result = await usePostFetch(`${import.meta.env.VITE_HOSTNAME}/api/user/login`, data)
        if (!result.success) {
            toast.error(result.message)
        }
        else{

            setIsShow(false)
            localStorage.setItem('token', result.token)
            localStorage.setItem('user',result.user.fullname)
            setIsAuth(true)
            navigate('/')
        }
    }

    const googleLoginHandler=async()=>{
        const resp=await fetch(`${import.meta.env.VITE_HOSTNAME}/api/user/loginwithgoogle`,{
        })
        console.log(resp);
        // window.location.href=resp.url
    }

    const facebookLoginHandler=()=>{
        
    }

    return (
        <div>
            <Button className={'rounded-full bg-pink-500 outline-none border-none'} onClick={() => setIsShow(true)}>Login</Button>
            <Popup lockScroll={true} open={isShow} onClose={() => setIsShow(false)} {...{ overlayStyle }}>
                <div className=' border-2 w-[500px] bg-white p-4 rounded-md relative '>
                    <X onClick={() => setIsShow(false)} className='absolute left-[93%] cursor-pointer' />
                    <h1 className='text-center text-4xl font-bold' >Login Form</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Lable>Email</Lable>
                        <Input {...register("email")} className={'border-2 rounded-md px-3 w-full border-pink-400'} />
                        <p className='text-red-500'>{errors?.email?.message }</p>
                        <Lable>Password</Lable>
                        <Input {...register("password")} className={'border-2 rounded-md px-3 w-full border-pink-400'} type='password' />
                        <p className='text-red-500'>{errors?.password?.message}</p>
                        <p onClick={()=>setIsOpen(true)} className='text-blue-500 cursor-pointer mt-3'>Forgot password</p>
                        <Button className={'w-full bg-pink-400 my-4 border-none outline-none py-3 rounded-full'}>Login</Button>
                        <p className='text-center text-xl'>Or</p>
                        <p onClick={googleLoginHandler} className='w-full rounded-full text-center py-4 my-4 font-bold cursor-pointer text-black border-2 border-neutral-500 text-xl'>Login with Google <span></span></p>
                        <p onClick={facebookLoginHandler} className='w-full rounded-full text-center py-4 my-4 font-bold cursor-pointer text-black border-2 border-neutral-500 text-xl'>Login with Facebook</p>
                    </form>
                </div>
            </Popup>
                        <ChangePasswordPopup isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}

export default LoginPopup