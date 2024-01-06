import React from 'react'
import Button from '../../component/common/Button'

 export const ControlBox = ({ title, value }) => {
    return <div className='border-2 p-4 rounded-md my-5'>
        <h1 className='text-2xl font-bold mb-3'>{title}</h1>
        <p>{value}</p>
    </div>
}



const Control = () => {
    return (
        <>
            <ControlBox title={'Per Night'} value={'$144'} />
            <ControlBox title={'Discount'} value={'14%'} />
            <ControlBox title={'Aditinal Charges'} value={'$45'} />
            <ControlBox title={'Total Guest'} value={'5'} />
            <Button>Lock</Button>
        </>
    )
}

export default Control