import React, { useEffect, useState } from 'react'
import Button from '../../../component/common/Button'
import { useGetFetch, usePostFetch } from '../../../hooks/fetch-data'
import { nightCalculator } from '../../../component/utlils/nightCalculator'

const Dashboard = () => {
  const [params, setParams] = useState('All reservations')
  const [details, setDetails] = useState()
  const[update,setUpdate]=useState({
    success:false,
    upadted:[]
  })

  const itemList = [
    {
      name: `All reservations (${details?.length || 0})`
    },
    {
      name: `Currently Hosting (${details?.filter((ele)=>ele.reserveType.includes('instant')).length || 0})`
    },
    {
      name: `Wait for Approval (${details?.filter((ele)=>ele.reserveType.includes('approve')).length || 0})`
    },
  ]

  const getReserved = async () => {
    const result = await useGetFetch(`${import.meta.env.VITE_HOSTNAME}/api/reserve/totalreservehotel`)
    console.log(result);
    setDetails(result.data)
  }


  useEffect(() => {
    getReserved()
  }, [update])
  
  const clickHandler=async(id)=>{
    console.log(id);
    const result=await usePostFetch(`${import.meta.env.VITE_HOSTNAME}/api/reserve/approve`,{id})
    console.log(result);
    setUpdate(result)
  }

  return (
    <>
      <div className='mt-3'>
        <h1 className='text-5xl font-bold '>Welcome back, {localStorage.getItem('user')}</h1>
        <div className='flex justify-between mt-10'>
          <p className='text-3xl font-bold'>Your reservations</p>
        </div>
        <div className='flex items-center mt-4'>
          {
            itemList.map((ele, index) => {
              return <p key={index} onClick={() => setParams(ele.name)} className={`border-2 p-2 border-neutral-600  rounded-full text-lg mx-2 cursor-pointer ${params.includes(ele.name.split(' ')[1]) ? 'bg-red-500 border-none text-white' : ''}`}>{ele.name}</p>
            })
          }
        </div>
        <div className=' mt-6  rounded-xl h-[400px]'>
          {
            params.includes('All reservations') && <table className='w-full border-2 border-gray-500'>
              <thead className='sticky top-0 left-0  bg-red-500 text-white'>
                <tr>
                  <th className='p-2 border-2 border-gray-500'>Image</th>
                  <th className='p-2 border-2 border-gray-500'>Name</th>
                  <th className='p-2 border-2 border-gray-500'>Reserved Date</th>
                  <th className='p-2 border-2 border-gray-500'>Reserved Time</th>
                  <th className='p-2 border-2 border-gray-500'>Reserved By</th>
                  <th className='p-2 border-2 border-gray-500'>Payment</th>
                  <th className='p-2 border-2 border-gray-500'>Check In</th>
                  <th className='p-2 border-2 border-gray-500'>Check Out</th>
                  <th className='p-2 border-2 border-gray-500'>Adults</th>
                  <th className='p-2 border-2 border-gray-500'>Childrens</th>
                  <th className='p-2 border-2 border-gray-500'>Infants</th>
                  <th className='p-2 border-2 border-gray-500'>Total Price</th>
                  <th className='p-2 border-2 border-gray-500'>Total Nights</th>
                  <th className='p-2 border-2 border-gray-500'>Status</th>
                  <th className='p-2 border-2 border-gray-500'>Action</th>
                </tr>
              </thead>
              <tbody className='border-2 border-gray-500 text-center uppercase'>
                {
                  details?.map((item) => {
                    return <tr key={item._id} className='border-2 border-gray-500'>
                      <td className='border-2 border-gray-500 w-[10%] '><img className='p-1 rounded-md' src={item.hotel.idOfImage[0].url} alt="" /></td>
                      <td className='border-2 border-gray-500'>{item.hotel.houseTitle.slice(0, 35)}</td>
                      <td className='border-2 border-gray-500'>{item.reserveDate}</td>
                      <td className='border-2 border-gray-500'>{item.reserveTime}</td>
                      <td className='border-2 border-gray-500'>{item.reservedBy.fullname}</td>
                      <td className='border-2 border-gray-500'>{item.payMethod}</td>
                      <td className='border-2 border-gray-500'>{item.checkIn}</td>
                      <td className='border-2 border-gray-500'>{item.checkOut}</td>
                      <td className='border-2 border-gray-500'>{item.Adults}</td>
                      <td className='border-2 border-gray-500'>{item.Children}</td>
                      <td className='border-2 border-gray-500'>{item.Infants}</td>
                      <td className='border-2 border-gray-500'>{Number(item.hotel.price.adults)+Number(item.hotel.price.childrens)+Number(item.hotel.price.infants)}</td>
                      <td className='border-2 border-gray-500'>{nightCalculator([item.checkIn, item.checkOut])}</td>
                      <td className={`border-2 border-gray-500 font-bold ${item.reserveType.includes('instant') ? 'text-red-500' : 'text-green-500'}`}>{item.reserveType.includes('instant') ? 'Booked' : 'Pending'}</td>
                      <td className={`border-2 border-gray-500 font-bold p-2  `}>{!item.reserveType.includes('instant') && <p onClick={()=>clickHandler(item._id)} className={`${item.hotel.bookingType == '"instant"' ? 'hidden' : ''} border-2 p-2 bg-red-500 text-white rounded-md cursor-pointer`}>Approve</p>}</td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          }
          {
            params.includes('Currently Hosting') && <table className='w-full border-2 border-gray-500'>
              <thead className='sticky top-0 left-0 border-2 border-gray-500 bg-red-500 text-white'>
                <tr>
                  <th className='p-2 border-2 border-gray-500'>Image</th>
                  <th className='p-2 border-2 border-gray-500'>Name</th>
                  <th className='p-2 border-2 border-gray-500'>Reserved Date</th>
                  <th className='p-2 border-2 border-gray-500'>Reserved Time</th>
                  <th className='p-2 border-2 border-gray-500'>Reserved By</th>
                  <th className='p-2 border-2 border-gray-500'>Payment</th>
                  <th className='p-2 border-2 border-gray-500'>Check In</th>
                  <th className='p-2 border-2 border-gray-500'>Check Out</th>
                  <th className='p-2 border-2 border-gray-500'>Adults</th>
                  <th className='p-2 border-2 border-gray-500'>Childrens</th>
                  <th className='p-2 border-2 border-gray-500'>Infants</th>
                  <th className='p-2 border-2 border-gray-500'>Total Price</th>
                  <th className='p-2 border-2 border-gray-500'>Total Nights</th>
                </tr>
              </thead>
              <tbody className='border-2 border-gray-500 text-center uppercase'>
                {
                  details?.filter((ele)=>ele.reserveType.includes('instant'))?.map((item) => {
                    return <tr key={item._id} className='border-2 border-gray-500'>
                      <td className='border-2 border-gray-500 w-[10%] '><img className='p-1 rounded-md' src={item.hotel.idOfImage[0].url} alt="" /></td>
                      <td className='border-2 border-gray-500'>{item.hotel.houseTitle.slice(0, 35)}</td>
                      <td className='border-2 border-gray-500'>{item.reserveDate}</td>
                      <td className='border-2 border-gray-500'>{item.reserveTime}</td>
                      <td className='border-2 border-gray-500'>{item.reservedBy.fullname}</td>
                      <td className='border-2 border-gray-500'>{item.payMethod}</td>
                      <td className='border-2 border-gray-500'>{item.checkIn}</td>
                      <td className='border-2 border-gray-500'>{item.checkOut}</td>
                      <td className='border-2 border-gray-500'>{item.Adults}</td>
                      <td className='border-2 border-gray-500'>{item.Children}</td>
                      <td className='border-2 border-gray-500'>{item.Infants}</td>
                      <td className='border-2 border-gray-500'>{Number(item.hotel.price.adults)+Number(item.hotel.price.childrens)+Number(item.hotel.price.infants)}</td>
                      <td className='border-2 border-gray-500'>{nightCalculator([item.checkIn, item.checkOut])}</td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          }
          {
            params.includes('Wait for Approval') && <table className='w-full border-2 border-gray-500'>
              <thead className='sticky top-0 left-0 border-2 border-gray-500 bg-red-500 text-white'>
                <tr>
                  <th className='p-2 border-2 border-gray-500'>Image</th>
                  <th className='p-2 border-2 border-gray-500'>Name</th>
                  <th className='p-2 border-2 border-gray-500'>Reserved Date</th>
                  <th className='p-2 border-2 border-gray-500'>Reserved Time</th>
                  <th className='p-2 border-2 border-gray-500'>Reserved By</th>
                  <th className='p-2 border-2 border-gray-500'>Payment</th>
                  <th className='p-2 border-2 border-gray-500'>Check In</th>
                  <th className='p-2 border-2 border-gray-500'>Check Out</th>
                  <th className='p-2 border-2 border-gray-500'>Adults</th>
                  <th className='p-2 border-2 border-gray-500'>Childrens</th>
                  <th className='p-2 border-2 border-gray-500'>Infants</th>
                  <th className='p-2 border-2 border-gray-500'>Total Price</th>
                  <th className='p-2 border-2 border-gray-500'>Total Nights</th>
                  <th className='p-2 border-2 border-gray-500'>Action</th>
                </tr>
              </thead>
              <tbody className='border-2 border-gray-500 text-center uppercase'>
                {
                  details?.filter((ele)=>ele.reserveType.includes('approve'))?.map((item) => {
                    return <tr key={item._id} className='border-2 border-gray-500'>
                      <td className='border-2 border-gray-500 w-[10%] '><img className='p-1 rounded-md' src={item.hotel.idOfImage[0].url} alt="" /></td>
                      <td className='border-2 border-gray-500'>{item.hotel.houseTitle.slice(0, 35)}</td>
                      <td className='border-2 border-gray-500'>{item.reserveDate}</td>
                      <td className='border-2 border-gray-500'>{item.reserveTime}</td>
                      <td className='border-2 border-gray-500'>{item.reservedBy.fullname}</td>
                      <td className='border-2 border-gray-500'>{item.payMethod}</td>
                      <td className='border-2 border-gray-500'>{item.checkIn}</td>
                      <td className='border-2 border-gray-500'>{item.checkOut}</td>
                      <td className='border-2 border-gray-500'>{item.Adults}</td>
                      <td className='border-2 border-gray-500'>{item.Children}</td>
                      <td className='border-2 border-gray-500'>{item.Infants}</td>
                      <td className='border-2 border-gray-500'>{Number(item.hotel.price.adults)+Number(item.hotel.price.childrens)+Number(item.hotel.price.infants)}</td>
                      <td className='border-2 border-gray-500'>{nightCalculator([item.checkIn, item.checkOut])}</td>
                      <td className={`border-2 border-gray-500 font-bold p-2  `}><p onClick={()=>clickHandler(item._id)} className={` border-2 p-2 bg-red-500 text-white rounded-md cursor-pointer`}>Approve</p></td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          }
        </div>
      </div>
    </>
  )
}

export default Dashboard