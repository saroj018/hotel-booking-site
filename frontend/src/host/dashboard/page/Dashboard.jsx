import React from 'react'
import Button from '../../../component/common/Button'

const Dashboard = () => {

  const itemList=[
    {
      name:'Checking Out (0)'
    },
    {
      name:'Currently Hosting (0)'
    },
    {
      name:'Arriving Soon (0)'
    },
    {
      name:'Upcomming (0)'
    },
    {
      name:'Pending Review (0)'
    }
  ]
  return (
    <div className='mt-3'>
      <h1 className='text-5xl font-bold '>Welcome back, Saroj</h1>
      <div className='flex justify-between mt-10'>
        <p className='text-3xl font-bold'>Your reservations</p>
        <Button>All reservations (0)</Button>
      </div>
      <div className='flex items-center mt-4'>
          {
            itemList.map((ele,index)=>{
              return <p key={index} className='border-2 p-2 border-neutral-600 rounded-full text-lg mx-2 cursor-pointer'>{ele.name}</p>
            })
          }
      </div>
      <div className='bg-neutral-100 mt-6 h-[300px] rounded-xl flex justify-center items-center'>
        <p className='text-3xl font-bold'>You Don't Have any Guest</p>
      </div>
    </div>
  )
}

export default Dashboard