import React from 'react'
import Popup from 'reactjs-popup'
import Label from '../common/Lable'
import Input from '../common/Input'
import Button from '../common/Button'
import { X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePostFetch } from '../../hooks/fetch-data'
import { toast } from 'react-toastify'

const validate=z.object({
    oldpassword:z.string({
     required_error:"Old password is required"
    }).trim().min(8,{message:"password musb be 8 character"}),
    newpassword:z.string({
        required_error:"New password is required"
    }).trim().min(8,{message:"password musb be 8 character"}),
    cpassword:z.string({
        required_error:"Confirm password is required"
    }).trim().min(8,{message:"password musb be 8 character"})
})
const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

const ChangePasswordPopup = ({ isOpen, setIsOpen }) => {

    const{register,handleSubmit,reset,formState:{errors}}=useForm({resolver:zodResolver(validate)})

    const onSubmit=async(data)=>{
        console.log(data);
        let result = await usePostFetch(`${import.meta.env.VITE_HOSTNAME}/api/user/updatepassword`, data)
        console.log(result);
        if (result.success) {
            setIsOpen(false)
            reset()
        }
    }
    return (
        <Popup open={isOpen} onClose={() => setIsOpen(false)} {...{overlayStyle}} >
            <div className='w-[400px] border-2 border-neutral-500 shadow-md p-3 bg-white rounded-md relative'>
                <X onClick={()=>setIsOpen(false)} className='absolute left-[92%] top-2 cursor-pointer'/>
                <h1 className='text-3xl text-red-500 text-center '>Change Password</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Label className={'text-lg'}>Old Password</Label>
                        <Input {...register('oldpassword',{required:true})} className={'border-2 border-neutral-500 rounded-md w-full'} />
                        <p className='text-red-500'>{errors?.oldpassword?.message}</p>
                    </div>
                    <div>
                        <Label className={'text-lg'}>New Password</Label>
                        <Input {...register('newpassword',{required:true})} className={'border-2 border-neutral-500 rounded-md w-full'} />
                        <p className='text-red-500'>{errors?.newpassword?.message}</p>
                    </div>
                    <div>
                        <Label className={'text-lg'}>Confirm Password</Label>
                        <Input {...register('cpassword',{required:true})} className={'border-2 border-neutral-500 rounded-md w-full'} />
                        <p className='text-red-500'>{errors?.cpassword?.message}</p>
                    </div>
                    <p className='text-blue-500 cursor-pointer my-3 font-bold'>Forgot Password</p>
                    <Button type='submit' className={'w-full my-3'}>Update</Button>
                </form>
            </div>
        </Popup>
    )
}

export default ChangePasswordPopup