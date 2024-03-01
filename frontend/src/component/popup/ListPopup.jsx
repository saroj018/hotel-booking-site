import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Context } from '../../host/context/HotelDetailContext';

const ListPopup = ({ className,setTotalPrice }) => {
    const [count, setCount] = useState({
        Adults: 1,
        Children: 0,
        Infants: 0
    })
    console.log('price>>>>>>>>>>>',count);
    const{hotelData}=useContext(Context)

    const listItme = [
        {
            title: 'Adults',
            age: '13+'
        },
        {
            title: 'Children',
            age: '2-12'
        },
        {
            title: 'Infants',
            age: 'Under 2'
        }
    ]

    const clickHandler = (title, value) => {
        if (value === 'add') {
            setCount((prv) => ({ ...prv, [title]:prv[title]+1}))
        }
        else {
            if (count[title] < 1) return
            setCount((prv => ({ ...prv, [title]: prv[title] - 1 })))
        }
    }

    useEffect(()=>{
      let adultPrice=count.Adults*hotelData?.price?.adults
      let childrenPrice=count.Children*hotelData?.price?.childrens
      let infantPrice=count.Infants*hotelData?.price?.infants
      
      setTotalPrice({adultPrice,childrenPrice,infantPrice,count})
    },[count])
    return (
        <div className={className}>
            {
                listItme.map((ele, index) => {
                    return <div className='flex items-center border-2 p-3 rounded-md my-3 justify-between' key={ele.title + index}>
                        <div>
                            <p className='text-2xl font-semibold my-1'>{ele.title}</p>
                            <p className='text-xl'>Age {ele.age}</p>
                        </div>
                        <div className='flex w-[40%]  justify-between'>
                            <p onClick={() => clickHandler(ele.title, 'add')} className=' select-none rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>+</p>
                            <p className='rounded-full select-none cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>{count[ele.title]}</p>
                            <p onClick={() => clickHandler(ele.title, 'less')} className=' select-none rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>-</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default ListPopup