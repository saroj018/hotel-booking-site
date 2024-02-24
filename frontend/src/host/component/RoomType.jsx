import { Home } from 'lucide-react'
import React, { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'

const RoomType = ({ name, description, icon,className,...props }) => {


    return (
        < >
            <div {...props} className={twMerge('flex justify-between items-center cursor-pointer border-2 rounded-xl border-neutral-500 shadow-md p-5 mt-7',className)}>
                <div >
                    <h1 className='text-2xl font-bold my-2'>{name}</h1>
                    <p className='text-xl'>{description}</p>
                </div>
                <span>{icon}</span>
            </div>

        </>
    )
}

export default RoomType