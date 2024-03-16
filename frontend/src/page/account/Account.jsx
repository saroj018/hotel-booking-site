import { CreditCard, ShieldHalf } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ChangePasswordPopup from '../../component/popup/ChangePasswordPopup'

const infoDetails = [
    {
        name: 'Personal Info',
        para: 'Provide personal details and how we can reach you.',
        icon: <CreditCard size={50} strokeWidth={1} />,
        url:'info'
    },
    {
        name: 'Login & Security',
        para: 'Update your password and secure your account.',
        icon: <ShieldHalf size={50} strokeWidth={1} />,
        url:'#'
    }
]



const AccountInfo = ({ name, para, icon,onClick }) => {
    return <div onClick={onClick} className='border-2 border-neutral-400 rounded-md p-5 cursor-pointer shadow-xl'>
        <span>{icon}</span>
        <h1 className='text-2xl font-bold'>{name}</h1>
        <p className='flex items-center gap-3 text-lg my-3'>{para}</p>
    </div>
}

const Account = () => {
    const[isOpen,setIsOpen]=useState(false)

    const clickHandler=(params)=>{
        console.log(params);
        if(params=='Login & Security'){
            setIsOpen(true)
        }
    }
    return (
        <>
            <h1 className='text-4xl font-bold my-10' >Account</h1>
            <div className='grid grid-cols-4 gap-5'>
            {
                infoDetails.map((ele,index)=>{
                    return <Link key={index} to={ele.url}><AccountInfo onClick={()=>clickHandler(ele.name)}  name={ele.name} icon={ele.icon} para={ele.para}/></Link>
                })
            }
            </div>
            <ChangePasswordPopup isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
}

export default Account