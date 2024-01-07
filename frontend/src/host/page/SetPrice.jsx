import {  Pencil } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../bar/Footer'
import PricePopup from '../popup/PricePopup'

const SetPrice = () => {

    const [priceDrop, setPriceDrop] = useState(false)
    const [edit, setEdit] = useState(false)

    window.addEventListener('click', () => {
        setEdit(false)
    })
    return (
        <>
            <div className='w-1/2 mx-auto'>
                <h1 className=' text-4xl text-center font-bold'>Now, set your price</h1>
                <p className='text-2xl my-4 text-center'>You can change it anytime.</p>
                <div className='relative'>
                    <div className='relative  w-fit mx-auto'>
                        <h1 contentEditable={edit} onClick={(e) => e.stopPropagation()} className='w-fit p-6 text-9xl font-extrabold mx-auto '>$144</h1>
                        <Pencil onClick={(e) => { e.stopPropagation(), setEdit(true) }} strokeWidth={1} size={30} color='black' className='absolute cursor-pointer left-full top-[35%] ' />
                    </div>
                    <p className='text-center relative text-2xl my-5'>Price After Service Fee $200 </p>
                    <p onClick={(e) => { e.stopPropagation(), setPriceDrop(!priceDrop) }} className='text-lg text-blue-800 w-fit mx-auto underline cursor-pointer mt-10'>Show Price Details</p>
                    {priceDrop && <PricePopup className={'absolute left-[7%] top-[105%] z-10 bg-white'} />}
                </div>
            </div>
            <Link to={'/host/discount'}><Footer /></Link>
        </>
    )
}

export default SetPrice