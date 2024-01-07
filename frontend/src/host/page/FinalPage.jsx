import { Link } from 'react-router-dom'

const FinalPage = () => {
    return (
        <div className='bg-black h-screen w-full'>
            <div className=' w-1/2 mx-auto h-full flex justify-center items-center flex-col gap-20'>
                <h1 className='text-7xl font-bold text-white text-center'>Congratulation Saroj</h1>
                <p className='text-center text-5xl font-bold text-white'>Now,You is the Part of Airbnb Host</p>
                <Link to={'/host/dashboard'}><p className='text-2xl border-2 rounded-md p-3 cursor-pointer text-white text-center'>Continue With Dashboard</p></Link>
            </div>
        </div>
    )
}

export default FinalPage