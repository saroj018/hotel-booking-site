import React from 'react'
import OwnerProfile from '../../component/OwnerProfile'
import { twMerge } from 'tailwind-merge'
import Input from '../../component/common/Input'
import { Send, SendHorizontal } from 'lucide-react'

const ChatBox = ({className}) => {

    const messages = [
        { text: 'Hello!', isOutgoing: true },
        { text: 'Hi there!', isOutgoing: false },
        { text: 'Hi there!', isOutgoing: false },
        { text: 'Hi there!', isOutgoing: false },
        { text: 'How are you?', isOutgoing: true },
        { text: 'I am doing well, thanks!', isOutgoing: false },
        { text: 'Hello!', isOutgoing: true },
        { text: 'Hi there!', isOutgoing: false },
        { text: 'How are you?', isOutgoing: true },
        { text: 'How are you?', isOutgoing: true },
        { text: 'How are you?', isOutgoing: true },
        { text: 'I am doing well, thanks!', isOutgoing: false },
        { text: 'How are you?', isOutgoing: true },
        // Add more messages as needed
    ];;

  return (
    <div className={twMerge('mt-2 w-full relative',className)}>
        <div className='border-2 shadow-md p-4'>
            <OwnerProfile title={'Saroj Aryal'} subtitle={'online'}/>
        </div>
        <div className='flex flex-col px-7 h-[78%] text-lg   py-3 overflow-y-scroll'>
        {
                messages.map((ele,index)=>{
                    return <p key={index} className={`${ele.isOutgoing===true ? 'self-start  bg-neutral-300 rounded-md p-2  text-black': 'self-end bg-blue-500 text-white p-2 rounded-md'} my-1 `}>{ele.text}</p>
                })
            }
        </div>
        <div className='flex w-[95%] absolute left-4 top-[90%] bg-white'>
            <Input className={'w-full text-xl pl-4 border-2 border-neutral-700 rounded-full'}/>
            <SendHorizontal color='purple' size={34} className='relative top-2 left-3 cursor-pointer'/>
        </div>
    </div>
  )
}

export default ChatBox