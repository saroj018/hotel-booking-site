import { Home, ListFilter } from 'lucide-react'
import React from 'react'
import '../CSS/style.css'

const FilterBar = () => {

    const filterOption=[
        {
            name:'Amazing View',
            icon:<Home />
        },
        {
            name:'Amazing View',
            icon:<Home />
        },
        {
            name:'Amazing View',
            icon:<Home />
        },
        {
            name:'Amazing View',
            icon:<Home />
        },
        {
            name:'Amazing View',
            icon:<Home />
        },
        {
            name:'Amazing View',
            icon:<Home />
        },
        {
            name:'Amazing View',
            icon:<Home />
        },
        
    ]
  return (
    <div className='flex gap-5 px-10 mt-8 items-center justify-between sticky z-10 top-[15%] bg-white'>
       <div className='flex gap-5 overflow-scroll max-w-[70%]  px-5'>
       {
            filterOption.map((item,index)=>{
                return(
                    <div className='flex flex-1 w-[200px] gap-3 flex-col justify-center items-center p-2' key={index+item.name}>
                        <span>{item.icon}</span>
                        <p className='text-lg'>{item.name}</p>
                    </div>
                )
            })
        }
       </div>

        <div className='flex gap-7 text-lg'>
            <div className='flex gap-3 border-2 border-neutral-200 cursor-pointer p-3'>
            <ListFilter />
            <p>Filters</p>
            </div>

            <div className='p-2 border-2 gap-3 flex border-neutral-200 items-center '>
                <p>Display total before taxes</p>
                <div className="toggle border-2 border-green-500 "></div>
            </div>
        </div>
    </div>
  )
}

export default FilterBar