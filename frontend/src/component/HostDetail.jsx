import { Hotel, ShieldCheck, Star } from 'lucide-react'
import React from 'react'
import ChatPopup from './popup/ChatPopup'
import OwnerProfile from './OwnerProfile'

const HostDetail = ({owner}) => {

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
            <div className='flex justify-between items-center pr-10'>
                <OwnerProfile title={owner} subtitle={'Host'}/>
                <ChatPopup/>
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