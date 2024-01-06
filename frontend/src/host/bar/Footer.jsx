import React from 'react'
import Button from '../../component/common/Button'
import { useNavigate } from 'react-router-dom'

const Footer = ({back,forward}) => {

    const navigate=useNavigate()

    
  return (
    <div className='footer bg-neutral-300 flex justify-between p-7 fixed w-full left-0 top-[87%] z-0'>
        <Button onClick={()=>navigate(back)}> Back</Button>
        <Button onClick={()=>navigate(forward)}>Next</Button>
    </div>
  )
}

export default Footer