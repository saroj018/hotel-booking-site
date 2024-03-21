import React, { useContext, useEffect, useState } from 'react'
import InputBar from '../../component/bar/InputBar'
import FilterBar from '../../component/bar/FilterBar'
import Cards from '../../component/Cards'
import SignupPopup from '../../component/popup/SignupPopup'
import { useGetFetch } from '../../hooks/fetch-data'
import { v4 as uuid } from 'uuid'
import { Search } from 'lucide-react'
import Input from '../../component/common/Input'
import Skeloten from '../../component/utlils/Skeloten'

const Home = () => {

  const [details, setDetails] = useState([])

  const hotelDetails = async () => {
    const result = await useGetFetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/getallhotel`)
    setDetails(result.details)
  }

  useEffect(() => {
    hotelDetails()
  }, [])
  console.log(details);

  return (
    <div>
      <div className='w-fit mx-auto my-3 relative'>
        {<Input className={'border-2 border-neutral-600 min-w-[600px] rounded-full pl-4 '} placeholder={'Search your destinations...'} />}
        {<Search className='absolute left-[93%] top-3 cursor-pointer' />}
      </div>
      <FilterBar setDetails={setDetails} />

      {
        details?.length < 1 ?
          <div className='grid grid-cols-4 mt-6 gap-4'>
            <Skeloten height={'250px'}/>
            <Skeloten height={'250px'}/>
            <Skeloten height={'250px'}/>
            <Skeloten height={'250px'}/>
            <Skeloten height={'250px'}/>
            <Skeloten height={'250px'}/>
            <Skeloten height={'250px'}/>
            <Skeloten height={'250px'}/>
          </div>
          :
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
            {
              details?.map((item, index) => {
                return <Cards key={item._id} id={item._id} price={item.price.adults} name={item.houseTitle.slice(0, 40) + '...'} imgDet={item.aboutHome} date={'14th April-28 May'} img={item?.idOfImage?.[0]?.url} />
              })
            }
          </div>}
    </div>

  )
}

export default Home