import React, { Fragment } from 'react'

const ListPopup = ({className}) => {

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
    return (
        <div className={className}>
                {
                    listItme.map((ele, index) => {
                        return <div className='flex items-center border-2 p-3 rounded-md my-3 justify-between' key={ele.title+index}>
                            <div>
                                <p className='text-2xl font-semibold my-1'>{ele.title}</p>
                                <p className='text-xl'>Age {ele.age}</p>
                            </div>
                            <div className='flex w-[40%]  justify-between'>
                                <p className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>+</p>
                                <p className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>4</p>
                                <p className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>-</p>
                            </div>
                        </div>
                    })
                }
        </div>
    )
}

export default ListPopup