import React, { useState } from 'react'
import Button from '../common/Button'
import Popup from 'reactjs-popup'
import OwnerProfile from '../OwnerProfile';
import Input from '../common/Input';
import { Send, SendHorizontal, X } from 'lucide-react';

const ChatPopup = () => {

    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

    const [openPopup, setOpenPopup] = useState(false)


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
        <div>
            <Button onClick={() => setOpenPopup(true)}>Chat with Host</Button>

            <Popup lockScroll={true} open={openPopup} onClose={() => setOpenPopup(false)} {...{ overlayStyle }}>
                <div className='bg-white shadow-md rounded-md py-3 w-[600px] h-[700px] overflow-hidden '>
                    <div className='sticky px-7 left-0 -top-5 bg-white border-2 shadow-md w-full'>
                        <h1 className='text-2xl font-bold py-1 text-center'>Chat Box</h1>
                        <hr />
                        <OwnerProfile className={'py-3'} title={'Saroj Aryal'} subtitle={'Online'} />
                    <X onClick={() => setOpenPopup(false)} className='absolute left-[94%] top-2 cursor-pointer' />
                    </div>
                    <hr />

                    <div className='flex px-7 flex-col h-[70%] pt-3 overflow-y-scroll mb-3'>
                        {
                            messages.map((ele, index) => {
                                return <p key={index} className={`${ele.isOutgoing == true ? 'self-start bg-neutral-300 rounded-md py-2 px-3 text-lg text-black ' : 'self-end bg-blue-500 rounded-md py-2 px-3 text-lg text-white'} my-1`}>{ele.text}</p>
                            })
                        }
                    </div>
                    <div className='mt-4 absolute top-[86%] bg-white w-full p-4 left-0 '>
                        <Input className={'w-[90%] px-4 text-xl rounded-full border-2 border-neutral-700'} />
                        <SendHorizontal color='purple' size={35} className='absolute cursor-pointer left-[90%] top-6' />
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default ChatPopup