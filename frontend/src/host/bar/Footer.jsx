import React from 'react'
import Button from '../../component/common/Button'

const Footer = () => {

    
  return (
    <div className='footer bg-neutral-300 flex justify-between p-10 absolute w-full left-0 top-full'>
        <Button> Back</Button>
        <Button>Next</Button>
    </div>
  )
}

export default Footer