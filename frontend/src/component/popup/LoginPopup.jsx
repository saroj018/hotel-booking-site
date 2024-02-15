import React, { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Popup from 'reactjs-popup'
import Lable from '../common/Lable'
import { X } from 'lucide-react'
import { usePostFetch } from '../../hooks/fetch-data'

const LoginPopup = () => {

    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

    const [isShow, setIsShow] = useState(false)
    const[loginData,setLoginData]=useState({
        email:"",
        password:""
    })

    const inputHandler=(e)=>{
        setLoginData((prv)=>({...prv,[e.target.name]:e.target.value}))
    }

    const clickHandler=async (e)=>{
        e.preventDefault()
        const result=await usePostFetch('http://localhost:3000/api/user/login',loginData)
        console.log(result);
    }
    return (
        <>
            <Button className={'rounded-full bg-pink-500 outline-none border-none'} onClick={() => setIsShow(true)}>Login</Button>
            <Popup lockScroll={true} open={isShow} onClose={() => setIsShow(false)} {...{ overlayStyle }}>
                <div className=' border-2 w-[500px] bg-white p-4 rounded-md relative '>
                    <X onClick={() => setIsShow(false)} className='absolute left-[93%] cursor-pointer' />
                    <h1 className='text-center text-4xl font-bold' >Login Form</h1>
                    <form>
                        <Lable>Email</Lable>
                        <Input onChange={inputHandler} name={'email'} value={loginData.email} className={'border-2 rounded-md px-3 w-full border-pink-400'} />
                        <Lable>Password</Lable>
                        <Input onChange={inputHandler} name={'password'} value={loginData.password} className={'border-2 rounded-md px-3 w-full border-pink-400'} type='password' />
                        <Button onClick={clickHandler} className={'w-full bg-pink-400 my-4 border-none outline-none py-3 rounded-full'}>Login</Button>
                        <p className='text-center text-xl'>Or</p>
                        <p className='w-full rounded-full text-center py-4 my-4 font-bold cursor-pointer text-black border-2 border-neutral-500 text-xl'>Login with Google <span></span></p>
                        <p className='w-full rounded-full text-center py-4 my-4 font-bold cursor-pointer text-black border-2 border-neutral-500 text-xl'>Login with Facebook</p>
                    </form>
                </div>
            </Popup>
        </>
    )
}

export default LoginPopup