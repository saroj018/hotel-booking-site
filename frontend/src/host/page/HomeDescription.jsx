import React, { useState } from 'react'
import TextArea from '../../component/common/TextArea'


const HomeDescription = () => {

  const[description,setDescription]=useState('')

  const changeHandler=(e)=>{
    setDescription(e.target.value)
  }
  console.log(description);
  return (
    <>
    <div className='w-1/2 mx-auto relative'>
        <h1 className='text-4xl text-center font-bold'>Create your description</h1>
        <p className='text-xl text-center my-2'>Share what makes your place special.</p>
        <TextArea value={description} onChange={changeHandler} className={'w-full my-7 rounded-md border-2 outline-none border-neutral-700 text-xl font-bold p-3'}/>
        <p className='inline-block absolute left-0 top-[93%] text-xl'>500</p>
    </div>
    </>
  )
}

export default HomeDescription