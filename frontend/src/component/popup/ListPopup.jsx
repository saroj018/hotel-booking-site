import React from 'react'
import { useSearchParams } from 'react-router-dom';

const ListPopup = ({ className}) => {

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

    const[searchParams,setSearchParams]=useSearchParams()

    const clickHandler = (operation, title) => {
        if (operation == 'add') {
            if(title=='Adults'){
                setSearchParams({
                    checkIn: searchParams.get('checkIn'),
                    checkOut: searchParams.get('checkOut'),
                    Adults: Number(searchParams.get('Adults'))+1,
                    Children: searchParams.get('Children'),
                    Infants: searchParams.get('Infants')
                })
            }
            else if(title=='Children'){
                setSearchParams({
                    checkIn: searchParams.get('checkIn'),
                    checkOut: searchParams.get('checkOut'),
                    Adults: searchParams.get('Adults'),
                    Children: Number(searchParams.get('Children'))+1,
                    Infants: searchParams.get('Infants')
                })
            }
            else {
                setSearchParams({
                    checkIn: searchParams.get('checkIn'),
                    checkOut: searchParams.get('checkOut'),
                    Adults: searchParams.get('Adults'),
                    Children: searchParams.get('Children'),
                    Infants: Number(searchParams.get('Infants'))+1
                })
            }
        }
        else {
            if (Number(searchParams.get(title)) < 1) return
            if(title=='Adults'){
                setSearchParams({
                    checkIn: searchParams.get('checkIn'),
                    checkOut: searchParams.get('checkOut'),
                    Adults: Number(searchParams.get('Adults'))-1,
                    Children: searchParams.get('Children'),
                    Infants: searchParams.get('Infants')
                })
            }
            else if(title=='Children'){
                setSearchParams({
                    checkIn: searchParams.get('checkIn'),
                    checkOut: searchParams.get('checkOut'),
                    Adults: searchParams.get('Adults'),
                    Children: Number(searchParams.get('Children'))-1,
                    Infants: searchParams.get('Infants')
                })
            }
            else {
                setSearchParams({
                    checkIn: searchParams.get('checkIn'),
                    checkOut: searchParams.get('checkOut'),
                    Adults: searchParams.get('Adults'),
                    Children: searchParams.get('Children'),
                    Infants: Number(searchParams.get('Infants'))-1
                })
            }
        }
    }

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
                            <p onClick={() => clickHandler('add', ele.title)} className=' select-none rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>+</p>
                            <p className='rounded-full select-none cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>{searchParams.get(ele.title)}</p>
                            <p onClick={() => clickHandler('less', ele.title)} className=' select-none rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>-</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default ListPopup