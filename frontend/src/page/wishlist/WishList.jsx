
import React, { useEffect, useState } from 'react'
import Cards from '../../component/Cards'
import { useGetFetch } from '../../hooks/fetch-data'

const WishList = () => {
  const [wishList, setWishlist] = useState([])
  const [refe, setRef] = useState(false)

  const getWishList = async () => {
    let result = await useGetFetch(`${import.meta.env.VITE_HOSTNAME}/api/wishlist/getwishlist`)
    setWishlist(result.wishlist)
  }


  useEffect(() => {
    getWishList()
  }, [refe])

  return (
    <div>
      <h1 className='text-4xl font-bold my-7 text-center'>WishList</h1>
      {
        wishList?.length<1 ?
        <h1 className='text-center text-4xl text-red-500 font-bold mt-10'>There is not any wishList</h1>:
        <div className='grid grid-cols-4 gap-5'>
        {
           wishList?.map((item) => {
            return <Cards btn={'Remove'} params={'wishlist'} setRef={setRef} heart={false} refe={refe} id={item?.hotel?._id} key={item?._id} removeId={item?._id} optional={false} rating={'4.3/5'} price={'$120'} name={item?.hotel?.houseTitle.slice(0, 40) + '...'} imgDet={item?.hotel?.homeType} date={'14th April-28 May'} img={item?.hotel?.idOfImage[0].url} />
          })
        }
      </div>}
    </div>
  )
}

export default WishList