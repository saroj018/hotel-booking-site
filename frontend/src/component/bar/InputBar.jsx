import React from 'react'
import Input from '../common/Input'
import { Search } from 'lucide-react'
import '../CSS/style.css'

const InputBar = () => {

    const searchSection = [
        {
            name: 'Check-in',
            para: 'Add dates',
        },
        {
            name: 'Check-out',
            para: 'Add dates',
        },
        {
            name: 'Who',
            para: 'Add guest',
            icon:<Search />
        }
    ]
    return (
        <section className='flex mb-10 items-center my-5 py-1 h-[70px] w-full max-w-[1000px] border-2 border-neutral-300 mx-auto p-1 rounded-full shadow-sm'>

            <div className='inpdiv pl-10 border-r h-full w-full cursor-pointer pb-2  pr-4  rounded-full'>
                <Input className={ 'input w-full h-full  cursor-pointer rounded-r-full'} id={'destinations'} placeholder={'Search destinations'} />
            </div>

            {
                searchSection.map((item, index) => {
                    return (
                        <div key={index} className='pl-5 border-r min-w-[180px] h-full flex flex-col text-neutral-700 justify-center text-lg font-semibold hover:bg-neutral-300 cursor-pointer  rounded-full'>
                            <h1 >{item.name ?? ''}</h1>
                            <p className='text-neutral-400'>{item.para}</p>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default InputBar