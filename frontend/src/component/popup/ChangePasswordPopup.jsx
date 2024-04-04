import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import Label from '../common/Lable'
import Input from '../common/Input'
import Button from '../common/Button'
import { X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePostFetch } from '../../hooks/fetch-data'
import { toast } from 'react-toastify'

const validate = z.object({
    oldpassword: z.string({
        required_error: "Old password is required"
    }).trim().min(8, { message: "password musb be 8 character" }),
    newpassword: z.string({
        required_error: "New password is required"
    }).trim().min(8, { message: "password musb be 8 character" }),
    cpassword: z.string({
        required_error: "Confirm password is required"
    }).trim().min(8, { message: "password musb be 8 character" })
})
const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

const ChangePasswordPopup = ({ isOpen, setIsOpen }) => {
    const [onPassword, setOnPassword] = useState(false)
    const [show, setShow] = useState(false)
    const [changePassword, setChangePassword] = useState(false)
    const [resetPassword, setResetPassword] = useState('')
    const [resetOtp, setResetOtp] = useState('')
    const[email,setEmail]=useState('')

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(validate) })

    const onSubmit = async (data) => {
        console.log(data);
        let result = await usePostFetch(`${import.meta.env.VITE_HOSTNAME}/api/user/updatepassword`, data)
        console.log(result);
        if (result.success) {
            setIsOpen(false)
            reset()
        }
    }

    const clickHandler = async () => {
        if(!email){
            toast.error('please enter email')
        }
        const result = await usePostFetch(`${import.meta.env.VITE_HOSTNAME}/api/forgotpassword`,{email})
        console.log(result);
        setShow(result.success)
    }

    const submitHandler = async () => {
        const result = await usePostFetch(`${import.meta.env.VITE_HOSTNAME}/api/forgotpassword`, { resetOtp })
        setChangePassword(result.success)
        setOnPassword(!result.success)
    }

    const resetPasswordHandler = async () => {
        const result = await usePostFetch(`${import.meta.env.VITE_HOSTNAME}/api/user/resetpassword`, { resetPassword,email })
        if (!result.success) {
            toast.error(result.error)
        } else {
            setChangePassword(false)
            setResetPassword('')
        }
    }

    const forgotPasswordHandler = (e) => {
        console.log('clicked');
        e.preventDefault()
        setOnPassword(true)
        setIsOpen(false)
    }
    return (
        <>
            <Popup open={isOpen} onClose={() => setIsOpen(false)} {...{ overlayStyle }} >
                <div onClick={()=>console.log('click')} className='w-[400px] border-2 border-neutral-500 shadow-md p-3 bg-white rounded-md relative'>
                    <X onClick={() => setIsOpen(false)} className='absolute left-[92%] top-2 cursor-pointer' />
                    <h1 className='text-3xl text-red-500 text-center '>Change Password</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <Label className={'text-lg'}>Old Password</Label>
                            <Input {...register('oldpassword', { required: true })} className={'border-2 border-neutral-500 rounded-md w-full'} />
                            <p className='text-red-500'>{errors?.oldpassword?.message}</p>
                        </div>
                        <div>
                            <Label className={'text-lg'}>New Password</Label>
                            <Input {...register('newpassword', { required: true })} className={'border-2 border-neutral-500 rounded-md w-full'} />
                            <p className='text-red-500'>{errors?.newpassword?.message}</p>
                        </div>
                        <div>
                            <Label className={'text-lg'}>Confirm Password</Label>
                            <Input {...register('cpassword', { required: true })} className={'border-2 border-neutral-500 rounded-md w-full'} />
                            <p className='text-red-500'>{errors?.cpassword?.message}</p>
                        </div>
                        <p onClick={forgotPasswordHandler} className='text-blue-500 cursor-pointer my-3 font-bold'>Forgot Password</p>
                        <Button type='submit' className={'w-full my-3'}>Update</Button>
                    </form>
                </div>
            </Popup>
            <Popup open={onPassword} onClose={() => { setOnPassword(false), setShow(false) }} {...{ overlayStyle }}>
                <div className='w-[400px] flex flex-col items-center border-2 border-neutral-500 shadow-md p-3 bg-white rounded-md '>
                    {!show && <h1 className='text-xl text-center'>Enter your Email & Click on <span className='text-red-500 font-bold'>Get OTP</span> button and you will receive a otp on your email.This otp is valid for 2 min</h1>}
                    {show && <h1 className='text-xl text-center'>Please check your email</h1>}
                    <img className='h-[150px]' src="https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-lock-icon-locked-with-password-png-image_6131226.png" alt="" />
                    {show && <Input onChange={(e) => setResetOtp(e.target.value)} className={'border-2 border-neutral-500 rounded-md w-full'} />}
                    {!show && <Input value={email} onChange={(e) => setEmail(e.target.value)} className={'border-2 border-neutral-500 rounded-md w-full'} />}
                    {show && <Button onClick={submitHandler} className={'w-full mt-6'}>Submit</Button>}
                    {!show && <Button onClick={clickHandler} className={'w-full mt-6'}>Get OTP</Button>}
                </div>
            </Popup>
            <Popup open={changePassword} onClose={() => { setChangePassword(false), setShow(false) }} {...{ overlayStyle }}>
                <div className='w-[400px] flex flex-col items-center border-2 border-neutral-500 shadow-md p-3 bg-white rounded-md '>
                    <Label className={'text-lg'}>New Password</Label>
                    <Input onChange={(e) => setResetPassword(e.target.value)} value={resetPassword} className={'border-2 border-neutral-500 rounded-md w-full'} />
                    <p className='text-red-500'>{errors?.resetpassword?.message}</p>
                    <Button type='submit' onClick={resetPasswordHandler} className={'w-full mt-6'}>Change</Button>
                </div>
            </Popup>
        </>
    )
}

export default ChangePasswordPopup