import React from 'react'
import Button from '../../../component/common/Button'
import Input from '../../../component/common/Input'

const Listing = () => {
  return (
    <div>
        <div className='flex justify-between mt-7'>
            <p className='text-2xl font-bold'>3 Listings</p>
            <Button>+ Create Listing</Button>
        </div>
        <div className='w-fit mx-auto flex'>
            <p className='border-2 px-8 py-2 border-neutral-600 rounded-full text-lg mx-2 cursor-pointer'>Edit</p>
            <p className='border-2 px-8 py-2 border-neutral-600 rounded-full text-lg mx-2 cursor-pointer'>Delete</p>
        </div>
        <div>
            <table className='text-center text-xl mt-10'>
                <thead className='border-2 border-neutral-700 border-l-0 border-r-0 '>
                    <th><Input className={'w-5 h-5 cursor-pointer'} type='checkbox'/></th>
                    <th className='p-4'>Listing</th>
                    <th className='p-4'>Status</th>
                    <th className='p-4'>Bed Rooms</th>
                    <th className='p-4'>Beds</th>
                    <th className='p-4'>Bath Rooms</th>
                    <th className='p-4'>Instant Book</th>
                    <th className='p-4'>Location</th>
                </thead>

                <tbody>
                    <tr className='border-2 border-neutral-700 border-l-0 border-r-0'>
                        <td><Input className={'w-5 h-5 cursor-pointer'} type='checkbox'/></td>
                        <td className='w-[10%] p-3'>
                            <img className='w-[100%] rounded-md' src="https://cdn.jhmrad.com/wp-content/uploads/beautiful-houses-world-home-design-top-most_498290.jpg" alt="" />
                        </td>
                        <td className='p-3'>Pending</td>
                        <td className='p-3'>3</td>
                        <td className='p-3'>6</td>
                        <td className='p-3'>1</td>
                        <td className='p-3'>OFF</td>
                        <td className='p-3'>Ratnanagar</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Listing