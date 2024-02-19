import React, { useState } from 'react'


const AboutRoom = () => {

    const[aboutRoom,setAboutRoom]=useState({
        guest:1,
        bed:1,
        bathroom:1
    })

    const addHandler=(text)=>{
        
        setAboutRoom((prv)=>({...prv,[text]:prv[text]+1}))
    }
    const lessHandler=(text)=>{
        if(aboutRoom[text]>1){
            setAboutRoom((prv)=>({...prv,[text]:prv[text]-1}))
        }
    }

    return (
       <>
        <div className='w-1/2 mx-auto'>
            <h1 className='text-4xl font-bold my-4'>Share some basics about your place</h1>
            <p className='text-xl'>You'll add more details later, like bed types.</p>
            <div>
                <div className='flex items-center border-2 p-3 rounded-md my-3 justify-between'>
                        <p className='text-xl font-semibold my-1'>Guests</p>
                    <div className='flex w-[25%] gap-6'>
                        <p onClick={()=>addHandler('guest')} className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>+</p>
                        <p className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>{aboutRoom.guest}</p>
                        <p onClick={()=>lessHandler('guest')} className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>-</p>
                    </div>
                </div>
                <div className='flex items-center border-2 p-3 rounded-md my-3 justify-between'>
                        <p className='text-xl font-semibold my-1'>Beds</p>
                    <div className='flex w-[25%] gap-6'>
                        <p onClick={()=>addHandler('bed')} className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>+</p>
                        <p className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>{aboutRoom.bed}</p>
                        <p onClick={()=>lessHandler('bed')} className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>-</p>
                    </div>
                </div>
                <div className='flex items-center border-2 p-3 rounded-md my-3 justify-between'>
                        <p className='text-xl font-semibold my-1'>Bathrooms</p>
                    <div className='flex w-[25%] gap-6'>
                        <p onClick={()=>addHandler('bathroom')} className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>+</p>
                        <p className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>{aboutRoom.bathroom}</p>
                        <p onClick={()=>lessHandler('bathroom')} className='rounded-full cursor-pointer border-2 text-2xl px-4 py-2 h-[50px] w-[50px]'>-</p>
                    </div>
                </div>
            </div>
        </div>
        
       </>
    )
}

export default AboutRoom