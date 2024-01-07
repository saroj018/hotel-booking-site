import { CreditCard, ShieldHalf } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const infoDetails = [
    {
        name: 'Personal Info',
        para: 'Provide personal details and how we can reach you.',
        icon: <CreditCard size={50} strokeWidth={1} />
    },
    {
        name: 'Login & Security',
        para: 'Update your password and secure your account.',
        icon: <ShieldHalf size={50} strokeWidth={1} />
    }
]

const AccountInfo = ({ name, para, icon }) => {
    return <div className='border-2 border-neutral-400 rounded-md p-5 cursor-pointer shadow-xl'>
        <span>{icon}</span>
        <h1 className='text-2xl font-bold'>{name}</h1>
        <p className='flex items-center gap-3 text-lg my-3'>{para}</p>
    </div>
}

const Account = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold my-10' >Account</h1>
            <div className='grid grid-cols-4 gap-5'>
            {
                infoDetails.map((ele,index)=>{
                    return <AccountInfo key={index} name={ele.name} icon={ele.icon} para={ele.para}/>
                })
            }
            </div>
        </div>
    )
}

export default Account