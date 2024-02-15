import React from 'react'
import OwnerProfile from '../../../component/OwnerProfile'
import ChatBox from '../../component/ChatBox'


const Inbox = () => {
    return (
        <div className='flex w-full h-[84vh]'>
            <div className='mt-1 border-2 w-[35%] p-2 overflow-y-scroll'>
                {
                    Array.from({ length: 10 }).map((ele, index) => {
                        return <OwnerProfile key={index} className={'border-2 cursor-pointer my-3  rounded-xl p-2'} title={'Saroj Aryal'} subtitle={'hello'} />
                    })
                }
            </div>
            <ChatBox/>
        </div>
    )
}

export default Inbox