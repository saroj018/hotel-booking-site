import React from 'react'
import Button from '../../component/common/Button'
import Input from '../../component/common/Input'
import Select from '../../component/common/Select'
import Option from '../../component/common/Option'
import PriceBox from '../../component/PriceBox'

const PayPrice = () => {
    return (
        <div className='flex justify-between w-full pl-[10%] ' >
            <div >
                <h1 className='text-5xl font-bold my-10'>Confirm and pay</h1>
                <div >
                    <h1 className='text-4xl my-5'>Your Trip</h1>
                    <div className='flex justify-between my-4 items-center'>
                        <div>
                            <p className='text-xl font-bold'>Dates</p>
                            <p className='text-lg'>Jan 2-Jan 20</p>
                        </div>
                        <Button className={'px-10'}>Edit</Button>
                    </div>
                    <div className='flex justify-between my-4 items-center'>
                        <div >
                            <p className='text-xl font-bold'>Guests</p>
                            <p className='text-lg'>1 Guest</p>
                        </div>
                        <Button className={'px-10'}>Edit</Button>
                    </div>
                </div>

                <div className=' mt-10'>
                    <h1 className='text-3xl font-bold my-6'>Choose how to pay</h1>

                    <div className='flex justify-between items-center p-4 rounded-md border-2 border-neutral-700 my-3'>
                        <div>
                            <p className='text-2xl font-bold'>Pay in Full</p>
                            <p className='text-xl my-2'>Pay the total ($5,911.52).</p>
                        </div>
                        <Input type='checkbox' className={'cursor-pointer h-6 w-6'} />
                    </div>
                    <div className='flex justify-between items-center p-4 rounded-md border-2 border-neutral-700'>
                        <div>
                            <p className='text-2xl font-bold'>Pay part now, part later</p>
                            <p className='text-xl my-2'>$2,955.76 due today, $2,955.76 on Jan 21, 2024. No extra fees.</p>
                        </div>
                        <Input type='checkbox' className={'cursor-pointer h-6 w-6'} />
                    </div>
                </div>

                <div className=''>
                    <div className='flex items-center justify-between my-6'>
                        <h1 className='text-2xl font-bold'>Pay with</h1>
                        <div className='flex items-center gap-2'>
                            <img className=' w-10' src="https://dev-cdn.esewa.com.np/ui/images/logos/esewa-icon-large.png" alt="" />
                            <img className=' w-10' src="https://blog.khalti.com/wp-content/uploads/2021/02/Naya_Khalti_Logo_icon_2018-300x300.png" alt="" />
                            <img className=' w-10' src="https://play-lh.googleusercontent.com/LzKjYKvzLnyMq9XaRm3RauNI-ni7QwuN4r_IzClSXUNpO6o443SDACRd92ePn03UNHU" alt="" />
                            <img className=' w-10' src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo-2016-2020.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <Select className={'w-full h-14 rounded-md px-6 text-2xl'}>
                            <Option>Esewa</Option>
                            <Option>Khalti</Option>
                            <Option>IME Pay</Option>
                            <Option>Mastercard</Option>
                        </Select>
                    </div>
                    <Button className={'bg-[#E00B41] border-none outline-none py-5 px-14 my-7 float-right'}>Confirm and Pay</Button>
                </div>
            </div>
            <PriceBox />
        </div>
    )
}

export default PayPrice