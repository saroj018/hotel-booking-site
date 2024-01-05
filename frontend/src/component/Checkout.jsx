import React, { useState } from 'react'
import Input from './common/Input'
import Select from './common/Select'
import Option from './common/Option'
import ListPopup from './popup/ListPopup'
import { ChevronDown } from 'lucide-react'
import Button from './common/Button'
import { twMerge } from 'tailwind-merge'
import DateRangePicker from './utlils/DateRange'

const Checkout = ({className}) => {

    const[list,setList]=useState(false)
    return (
        <div className={twMerge('w-[500px] rounded-xl shadow-xl p-5 border-2 relative',className)}>
            <h1 className='text-2xl font-bold'>$909 <span>night</span></h1>
            <div className=' my-3'>
                <DateRangePicker/>
                <div className='flex'>
                    <div className='border-2 px-4 py-1 grow text-xl'>
                        <p>CheckIn</p>
                        <p className='text-lg font-black'>2023/2/3</p>
                    </div>
                    <div className='border-2 px-4 py-1 text-xl grow'>
                        <p>CheckOut</p>
                        <p className='text-lg font-black'>2023/2/3</p>
                    </div>
                </div>
                <div onClick={()=>setList(!list)} className='w-full flex justify-between items-center cursor-pointer h-[70px] px-4 py-2 text-xl border-2'>
                    <div>
                        <p className='font-bold'>Guest</p>
                        <p>1 Guest</p>
                    </div>
                    <ChevronDown className={!list ? 'rotate-180 duration-300': 'rotate-0 duration-300'} />
                </div>
            </div>
            {list && <ListPopup className={'absolute top-[38%] left-[4%] bg-white max-w-[92%] w-full'} />}

            <Button className={'w-full my-5 bg-[#ff385c] outline-none border-none hover:bg-[#ff385c] hover:text-white'}>Reserve</Button>

            <p className='text-center text-xl'>You won't be Charged Yet</p>
            <div className='flex justify-between items-center my-4 text-2xl'>
                <p>$600 * 6 nights</p>
                <p>$3,600</p>
            </div>
            <div className='flex justify-between items-center text-2xl  my-4'>
                <p>Airbnb Service Fee</p>
                <p>$508</p>
            </div>

            <hr />

            <div className='flex justify-between items-center my-5 text-2xl font-semibold'>
                <p>Total Befor Taxes</p>
                <p>$4,108</p>
            </div>
        </div>
    )
}

export default Checkout