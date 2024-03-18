import React, { useContext } from 'react'
import Button from '../common/Button'
import Popup from 'reactjs-popup'
import { Context } from '../../host/context/HotelDetailContext';
import { ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
const VerifyPopup = () => {
    const { verify, setVerify } = useContext(Context)
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate('/account/info')
        setVerify(false)
    }
    return (
        <Popup open={verify} onClose={() => setVerify(false)} {...{ overlayStyle }}  >
            <div className='w-[400px] gap-2  bg-white rounded-md border-black p-3 shadow-md flex flex-col items-center h-[300px]'>
                <h1 className='text-2xl font-bold'>Please verify yourself first </h1>
                <ShieldCheck color='red' size={70} strokeWidth={2} />
                <p className='text-xl  text-center text-black'>Please verify from your active email because our offers and message sent via this email</p>
                <p className='text-blue-500 text-2xl'>Thank You</p>
                <Button onClick={clickHandler} className={'bg-red-500 border-none outline-none w-full '}>Ok</Button>
            </div>
        </Popup>
    )
}

export default VerifyPopup