import { ImagePlus } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../bar/Footer'

const AddPhotos = () => {
    return (
        <>
            <div className=' w-full'>
                <div className='my-16'>
                    <h1 className='text-4xl font-bold text-center mb-5'>Add some photos of your house</h1>
                    <p className='text-xl font-bold text-center'>You'll need 5 photos to get started. You can add more or make changes later.</p>
                </div>
                <div className='border-2 border-dotted border-neutral-800 rounded-md w-1/2 mx-auto text-center p-5 h-[400px] cursor-pointer'>
                    <ImagePlus strokeWidth={1} size={100} className='mx-auto' />
                    <p className='text-3xl'>Drag your photos here</p>
                    <p className='text-xl my-3'>Choose at least 5 photos</p>
                    <p className='underline text-xl'>Upload from your device</p>
                </div>
            </div>
            <Link to={'/host/housename'}><Footer/></Link>
        </>
    )
}

export default AddPhotos