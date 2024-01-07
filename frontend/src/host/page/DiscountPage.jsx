import Input from '../../component/common/Input'
import { Link } from 'react-router-dom'
import Footer from '../bar/Footer'

const DiscountPage = () => {
    return (
       <>
        <div className='w-1/2 mx-auto'>
            <h1 className='text-center text-4xl font-bold'>Add discounts</h1>
            <p className='text-xl text-center my-4'>Help your place stand out to get booked faster and earn your first reviews.</p>
            <div className='mt-10'>
                <div className='flex items-center justify-between border-2 border-neutral-300 rounded-md p-4 bg-neutral-100'>
                    <div className='flex items-center gap-6'>
                        <p className='text-2xl'>20%</p>
                        <div>
                            <p className='text-2xl font-bold'>New Listing Promotation</p>
                            <p className='text-xl my-2'>Offer 20% off your first 3 bookings</p>
                        </div>
                    </div>
                    <Input className={'h-7 w-14'} type='checkbox' />
                </div>
                <div className='flex items-center justify-between border-2 border-neutral-300 rounded-md p-4 my-7 bg-neutral-100'>
                    <div className='flex items-center gap-6'>
                        <p className='text-2xl'>10%</p>
                        <div>
                            <p className='text-2xl font-bold'>Weekly discount</p>
                            <p className='text-xl my-2'>For stays of 7 nights or more</p>
                        </div>
                    </div>
                    <Input className={'h-7 w-14'} type='checkbox' />
                </div>
                <div className='flex items-center justify-between border-2 border-neutral-300 rounded-md p-4 bg-neutral-100'>
                    <div className='flex items-center gap-6'>
                        <p className='text-2xl'>20%</p>
                        <div>
                            <p className='text-2xl font-bold' >Monthly discount</p>
                            <p className='text-xl my-2'>For stays of 28 nights or more</p>
                        </div>
                    </div>
                    <Input className={'h-7 w-14'} type='checkbox' />
                </div>
            </div>
        </div>
        <Link to={'/host/finalpage'}><Footer/></Link>
       </>
    )
}

export default DiscountPage