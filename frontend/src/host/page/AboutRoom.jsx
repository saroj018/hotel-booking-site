import Footer from '../bar/Footer'
import { Link } from 'react-router-dom'

const AboutRoom = () => {
    return (
       <>
        <div className='w-1/2 mx-auto'>
            <h1 className='text-4xl font-bold my-4'>Share some basics about your place</h1>
            <p className='text-xl'>Youll add more details later, like bed types.</p>
            <div>
                <div className='flex items-center border-2 p-3 rounded-md my-3 justify-between'>
                        <p className='text-xl font-semibold my-1'>Guests</p>
                    <div className='flex w-[25%] gap-6'>
                        <p className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>+</p>
                        <p className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>4</p>
                        <p className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>-</p>
                    </div>
                </div>
                <div className='flex items-center border-2 p-3 rounded-md my-3 justify-between'>
                        <p className='text-xl font-semibold my-1'>Beds</p>
                    <div className='flex w-[25%] gap-6'>
                        <p className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>+</p>
                        <p className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>4</p>
                        <p className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>-</p>
                    </div>
                </div>
                <div className='flex items-center border-2 p-3 rounded-md my-3 justify-between'>
                        <p className='text-xl font-semibold my-1'>Bathrooms</p>
                    <div className='flex w-[25%] gap-6'>
                        <p className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>+</p>
                        <p className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>4</p>
                        <p className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>-</p>
                    </div>
                </div>
            </div>
        </div>
        <Link to={'/host/offerservice'}><Footer/></Link>
       </>
    )
}

export default AboutRoom