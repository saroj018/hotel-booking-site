import React from 'react'

const PricePopup = ({ className }) => {
    return (
        <div className={className+' w-[700px] border-2 border-neutral-600 rounded-md p-4'}>
            <div>
                <div className='flex justify-between items-center text-2xl font-bold border-2 border-neutral-600 rounded-md p-3 my-3'>
                    <p>Base Price</p>
                    <p>$144</p>
                </div>
                <div className='flex justify-between items-center text-2xl font-bold border-2 border-neutral-600 rounded-md p-3 my-3'>
                    <p>Service Fee</p>
                    <p>$20</p>
                </div>
                <div className='flex justify-between items-center text-2xl font-bold border-2 border-neutral-600 rounded-md p-3 my-3'>
                    <p>Total Fee</p>
                    <p>$164</p>
                </div>
                <div className='flex justify-between items-center text-2xl font-bold border-2 border-neutral-600 rounded-md p-3 my-3'>
                    <p>You Earn</p>
                    <p>$140</p>
                </div>
            </div>
        </div>
    )
}

export default PricePopup