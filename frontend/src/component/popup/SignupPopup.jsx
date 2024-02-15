import React, {  useState } from 'react'
import Lable from '../common/Lable'
import Input from '../common/Input'
import Popup from 'reactjs-popup'
import Button from '../common/Button'
import { X } from 'lucide-react'

const SignupPopup = () => {

    const [isShow, setIsShow] = useState(false)
    const[signupData,setSignupData]=useState({
        fullname:'',
        email:'',
        password:''
    })

    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
    console.log(signupData);

    const inputHandler=(e)=>{
       setSignupData((prv)=>({...prv,[e.target.name]:e.target.value}))
    }
    return (
        <>
            <Button className={'rounded-full bg-pink-500 outline-none border-none'} onClick={() => setIsShow(true)}>SignUp</Button>
                <Popup lockScroll={true} open={isShow} onClose={() => setIsShow(false)} {...{ overlayStyle }}>
            <div className=' border-2 w-[500px] bg-white p-4 rounded-md relative'>
                <X onClick={()=>setIsShow(false)} className='absolute left-[93%] cursor-pointer'/>
                    <h1 className='text-center text-4xl font-bold' >Signup Form</h1>
                    <form>
                        <Lable className={'block'}>Name</Lable>
                        <Input name={'fullname'} value={signupData.name} onChange={inputHandler} className={'border-2 rounded-md px-3 w-full border-pink-400'} />
                        <Lable>Email</Lable>
                        <Input name={'email'} value={signupData.email} onChange={inputHandler} className={'border-2 rounded-md px-3 w-full border-pink-400'} />
                        <Lable>Password</Lable>
                        <Input name={'password'} value={signupData.password} onChange={inputHandler} className={'border-2 rounded-md px-3 w-full border-pink-400'} type='password' />
                        <Button className={'w-full bg-pink-400 my-4 border-none outline-none py-3 rounded-full'}>SignUp</Button>
                        <p className='text-center text-xl'>Or</p>
                        <p className='w-full rounded-full text-center py-4 my-4 font-bold cursor-pointer text-black border-2 border-neutral-500 text-xl'>SignUp with Google <span></span></p>
                        <p className='w-full rounded-full text-center py-4 my-4 font-bold cursor-pointer text-black border-2 border-neutral-500 text-xl'>SignUp with Facebook</p>
                    </form>
            </div>
                </Popup>
        </>
    )
}

export default SignupPopup