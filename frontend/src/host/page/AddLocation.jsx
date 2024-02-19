import React from 'react'
import Button from '../../component/common/Button'


const AddLocation = () => {
  return (
    <>
    <div className='flex justify-between items-center flex-col gap-10'>
        <h1 className='text-3xl font-bold text-center'>Where's your place located?</h1>
        <Button>Get Location</Button>
    </div>
    </>
  )
}

export default AddLocation