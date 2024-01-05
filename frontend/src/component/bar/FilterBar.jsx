import { Home, ListFilter } from 'lucide-react'
import React, { useState } from 'react'
import '../CSS/style.css'
import FilterPopup from '../popup/FilterPopup'

const FilterBar = () => {

    const filterOption = [
        {
            name: 'Amazing View',
            icon: <Home />
        },
        {
            name: 'Amazing View',
            icon: <Home />
        },
        {
            name: 'Amazing View',
            icon: <Home />
        },
        {
            name: 'Amazing View',
            icon: <Home />
        },
        {
            name: 'Amazing View',
            icon: <Home />
        },
        {
            name: 'Amazing View',
            icon: <Home />
        },
        {
            name: 'Amazing View',
            icon: <Home />
        },
        {
            name: 'Amazing View',
            icon: <Home />
        },
        {
            name: 'Amazing View',
            icon: <Home />
        },
        {
            name: 'Amazing View',
            icon: <Home />
        },
        {
            name: 'Amazing View',
            icon: <Home />
        },
        {
            name: 'Amazing View',
            icon: <Home />
        },
        {
            name: 'Amazing View',
            icon: <Home />
        },
        {
            name: 'Amazing View',
            icon: <Home />
        },

    ]
    return (
        <div className='filterbar flex gap-5 px-2 mt-8 items-center justify-between sticky border-2 rounded-md  top-[15%] bg-white'>
            <div className='flex gap-2 rounded-xl cursor-pointer max-w-[70%]  overflow-x-scroll px-5'>
                {
                    filterOption.map((item, index) => {
                        return (
                            <div className='flex flex-col items-center min-w-[130px]  my-4 gap-4 p-2' key={index + item.name}>
                                <span>{item.icon}</span>
                                <p className='text-lg'>{item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex gap-7 text-lg'>
                <FilterPopup />

                <div className='p-2 border-2 gap-3 flex border-neutral-200 items-center '>
                    <p>Display total before taxes</p>
                    <div className="toggle border-2 border-green-500 "></div>
                </div>
            </div>
        </div>
    )
}

export default FilterBar