import { Hotel, ShieldCheck, Star } from 'lucide-react'
import React from 'react'

const HostDetail = () => {

    const hostView = [
        {
            name: '234 Review',
            icon: <Star />
        },
        {
            name: 'Identy Verified',
            icon: <ShieldCheck />
        },
        {
            name: 'SuperHost',
            icon: <Hotel />
        }
    ]
    return (
        <div className='my-8'>
            <div className='flex items-center gap-4 '>
                <img className='rounded-full h-[50px] w-[50px]' src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg" alt="" />
                <div>
                    <h1 className='text-xl font-black'>Hosted By Saroj</h1>
                    <p className='text-lg '>Joind in 2018</p>
                </div>
            </div>
            <div className='flex items-center gap-4 mt-5'>
                {
                    hostView.map((ele, index) => {
                        return <div key={index + ele.name} className='flex gap-3 items-center'>
                            <span>{ele.icon}</span>
                            <p className='text-xl'>{ele.name}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default HostDetail