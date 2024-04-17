import React, { Fragment, useCallback, useContext, useState } from 'react'
import Popup from 'reactjs-popup'
import { Context } from '../../host/context/HotelDetailContext'
import TextArea from '../common/TextArea';
import Button from '../common/Button';
import { FaRegStar, FaStar } from "react-icons/fa";
import { usePostFetch } from '../../hooks/fetch-data';

const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
const ReviewPopup = () => {

    const { reviewPopup, setReviewPopup,hotelId } = useContext(Context)
    const [star, setStar] = useState(new Array(5).fill(null))
    const [rating, setRating] = useState(0)
    const[reviewMessage,setReviewMessage]=useState('')

    const mouseHandler = (index) => {
        if (star[index]) {
            star[index] = null
            return
        }
        setStar((prv) => {
            let newArr = [...prv]
            for (let i = 0; i < index + 1; i++) {
                newArr[i] = true
            }
            return newArr
        })
    }
    const clickHandler = useCallback((index) => {
        setStar((prv) => {
            let newArr = [...prv]
            for (let i = 0; i < index + 1; i++) {
                newArr[i] = true
            }
            return newArr
        })
        setRating(index+1)
    },[rating])

    const changeHandler=(e)=>{
        setReviewMessage(e.target.value)
    }

    const submitHandler=async(e)=>{
        e.stopPropagation()
        const result=await usePostFetch(`${import.meta.env.VITE_HOSTNAME}/api/feedback/review`,{reviewMessage,rating,hotelId})
        console.log(result);
        if(result.success){
            setReviewPopup(false)
        }
    }
    return (
        <Popup lockScroll={true} open={reviewPopup} onClose={() => setReviewPopup(false)} {...{ overlayStyle }}>
            <div onClick={() => setStar(new Array(5).fill(null))} className=' w-[500px] h-[500px]  shadow-md rounded-md bg-white p-4'>
                <h1 className='text-center text-3xl'>Thanks for choosing us.</h1>
                <h1 className='text-center text-4xl my-3 text-red-500'>Please give star & review</h1>
                <div className='flex items-center justify-center gap-3 my-2'>

                    {
                        new Array(5).fill(null).map((ele, index) => {
                            return <Fragment key={index}>
                                {
                                    star[index] ? <FaStar onClick={() => clickHandler(index)} onMouseOver={() => mouseHandler(index)} className='text-4xl cursor-pointer text-red-500' /> :
                                        <FaRegStar onClick={() => clickHandler(index)} onMouseOver={() => mouseHandler(index)} className='text-4xl cursor-pointer' />
                                }
                            </Fragment>
                        })
                    }
                </div>
                <TextArea onChange={changeHandler} value={reviewMessage} onClick={(e) =>  e.stopPropagation()} className='border-2 border-black w-full rounded-md p-2' placeholder='write your review'></TextArea>
                <Button onClick={submitHandler} className={'w-full my-2'}>Submit</Button>
            </div>
        </Popup>
    )
}

export default ReviewPopup