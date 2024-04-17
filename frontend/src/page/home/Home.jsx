import React, { useCallback, useContext, useEffect, useState } from 'react'
import InputBar from '../../component/bar/InputBar'
import FilterBar from '../../component/bar/FilterBar'
import Cards from '../../component/Cards'
import SignupPopup from '../../component/popup/SignupPopup'
import { useGetFetch } from '../../hooks/fetch-data'
import { v4 as uuid } from 'uuid'
import { Search } from 'lucide-react'
import Input from '../../component/common/Input'
import Skeloten from '../../component/utlils/Skeloten'
import { useDebouce } from '../../hooks/useDebounce'
import { Context } from '../../host/context/HotelDetailContext'
import ReviewPopup from '../../component/popup/ReviewPopup'

const Home = () => {
  const [search, setSearch] = useState('')
  const [timeUp, setTimeUp] = useState(false)
  const { details, setDetails } = useContext(Context)
  const [skip, setSkip] = useState(0)
  const [loading, setLoading] = useState(false)
  const debounce = useDebouce(search, 1000)
  const [count, setCount] = useState(0)

  const hotelDetails = async () => {
    setLoading(true)
    const result = await useGetFetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/getallhotel/?limitData=${8}&&skipData=${skip}`)
    console.log(result);
    setLoading(false)
    setDetails((prv) => [...prv, ...result?.details])

  }

  useEffect(() => {
    hotelDetails()
  }, [skip])


  const apiCall = async () => {
    setCount(count + 1)
    if (count > 0) {
      setTimeUp(false)
      let result = await useGetFetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/searchhotels/?payload=${search}`)
      setDetails(result.data)
    }

  }


  const scrollHandler = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {

      setSkip((prv) => prv + 8)
    }
  }

  useEffect(() => {



    document.documentElement.scrollTop = 0
    window.addEventListener('scroll', scrollHandler)

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])


  useEffect(() => {
    apiCall()

  }, [debounce])

  useEffect(() => {
    setTimeUp(false)
    let id
    id = setTimeout(() => {
      console.log(details.length);
      if (details?.length < 1) {

        setTimeUp(true)
      }
    }, 2000);

    return () => clearTimeout(id)
  }, [details])

  // console.log(timeUp);
  return (
    <>
      <div>
        <div className='w-fit mx-auto my-3 relative'>
          {<Input onChange={(e) => setSearch(e.target.value)} type='text' value={search} className={'border-2 border-neutral-600 min-w-[600px] rounded-full pl-4 '} placeholder={'Search your destinations...(based on type of place:unique,central etc)'} />}
          {<Search className='absolute left-[93%] top-3 opacity-20' />}
        </div>
        <FilterBar setTimeUp={setTimeUp} setDetails={setDetails} />

        {
          timeUp ?
            <h1 className='text-center text-red-500 mt-10 text-5xl'>Hotel not found</h1> :
            details?.length < 1 ?
              <div className='grid grid-cols-4 mt-6 gap-4'>
                <Skeloten height={'250px'} />
                <Skeloten height={'250px'} />
                <Skeloten height={'250px'} />
                <Skeloten height={'250px'} />
                <Skeloten height={'250px'} />
                <Skeloten height={'250px'} />
                <Skeloten height={'250px'} />
                <Skeloten height={'250px'} />
              </div>
              :
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
                {
                  details?.map((item, index) => {
                    return <Cards key={uuid()} id={item._id} price={item.price.adults} name={item.houseTitle.slice(0, 40) + '...'} imgDet={item.aboutHome} date={'14th April-28 May'} img={item?.idOfImage?.[0]?.url} />
                  })
                }

              </div>
        }
        {
          loading ? <h1 className='text-red-500 text-center text-5xl font-bold my-7'>Loading......</h1> : null
        }
      </div>
      <ReviewPopup />
    </>

  )
}

export default Home