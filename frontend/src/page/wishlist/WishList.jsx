
import React, { useEffect, useState } from 'react'
import Cards from '../../component/Cards'
import { useGetFetch } from '../../hooks/fetch-data'
import { useSelector } from 'react-redux'

const WishList = () => {
  const[wishList,setWishlist]=useState([])
  const id=useSelector(state=>state.wishlist.id)


  const getWishList=async()=>{
   let result= await useGetFetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/${id}`)
   setWishlist((prv)=>[...prv,...result.data])
  }

useEffect(()=>{
  getWishList()
},[id])  
  console.log(wishList);

  return (
    <div>
        <h1 className='text-4xl font-bold my-7'>WishList</h1>
        <div className='grid grid-cols-4 gap-5'>
        {
          wishList.length>0 && wishList?.map((item)=>{
            return <Cards optional={false} rating={'Remove'} price={'$120'} name={item.houseTitle.slice(0,40)+'...'} imgDet={item.homeType} date={'14th April-28 May'} img={item.idOfImage[0].url}/>
          })
        }
        </div>
    </div>
  )
}

export default WishList