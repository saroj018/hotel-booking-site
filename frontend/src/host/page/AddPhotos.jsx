import { ImagePlus } from 'lucide-react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../context/HotelDetailContext'
import { toast } from 'react-toastify'


const AddPhotos = () => {

    const inputFile = useRef()

    const { photo, setPhoto, setBtnDisable } = useContext(Context)
    const [imageUrl, setImageUrl] = useState([])

    const changeHandler = (e) => {
        setPhoto([...e.target.files])
    }
    console.log(photo);

    useEffect(() => {
        let isValid = []
      
        if (photo?.length > 5 || photo?.length < 5) {
            toast.error("Image must be 5")
            setBtnDisable(true)
        }
        else {
            let acceptImgFormat = ['jpeg', 'jpg', 'webp']
            isValid = photo.map((ele) => {
                if (ele.size > 2000000) {
                    toast.error("Image must be less than 2MB ")
                    return false
                }
                else if (!(acceptImgFormat.includes(ele.type.split('/')[1].toLowerCase()))) {
                    console.log(ele.type.split('/')[1].toLowerCase());
                    toast.error("Image format must be jpeg/jpg")
                    return false
                }
                else {
                    return true
                }
            })
        }
        let photoColl = photo.map((ele) => {
            return URL.createObjectURL(ele)
        })
        setImageUrl(photoColl);
        
        if (isValid?.includes(false) || isValid.length == 0) {
            setBtnDisable(true)
        } else {
            setBtnDisable(false)
        }

    }, [photo])
    return (
        <>
            <div className=' w-full'>
                <div className='my-6'>
                    <h1 className='text-4xl font-bold text-center'>Add some photos of your house</h1>
                    <p className='text-xl font-bold text-center my-4'>You'll need 5 photos to get started. You can add more or make changes later.</p>
                </div>
                <div onClick={() => inputFile.current.click()} className='border-2 border-dotted border-neutral-800 rounded-md w-1/2 mx-auto text-center p-5 h-[400px] cursor-pointer'>
                    <ImagePlus strokeWidth={1} size={100} className='mx-auto' />
                    <p className='text-3xl'>Drag your photos here</p>
                    <p className='text-xl my-3'>Choose at least 5 photos</p>
                    <p className='underline text-xl'>Upload from your device</p>
                    <div className='grid grid-cols-5 gap-1 w-full mt-2'>
                        {
                            imageUrl.map((ele) => {
                                return <img className='h-[100%]' src={ele} alt="" />
                            })
                        }
                    </div>
                    <input onChange={changeHandler} multiple ref={inputFile} type="file" hidden />
                </div>
            </div>
        </>
    )
}

export default AddPhotos