import { AirVent, Bath, Building2, Droplets, Ship, Star, Tv, Wifi } from 'lucide-react'
import React from 'react'
import Checkout from '../../component/Checkout'
import AboutPopup from '../../component/popup/AboutPopup'
import HostDetail from '../../component/HostDetail'


const DetailPage = () => {

  const offerService = [
    {
      name: 'Ocian View',
      icon: <Ship />
    },
    {
      name: 'Wifi',
      icon: <Wifi />
    },
    {
      name: 'TV',
      icon: <Tv />
    },
    {
      name: 'Bathtub',
      icon: <Bath />
    },
    {
      name: 'Pools',
      icon: <Droplets />
    },
    {
      name: 'AC',
      icon: <AirVent />
    },
    {
      name: 'Balcony',
      icon: <Building2 />
    },
    {

    }
  ]
  return (
    <div>
      <h1 className='text-4xl font-bold my-5'>Two Bedroom Beach House Seaview</h1>
      <div className='flex gap-2 items-center w-full h-[500px] overflow-hidden rounded-xl border-2 border-green-500'>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-859709719997723808/original/ca07821e-c540-41a5-8e89-1daf0ea9e9a6.jpeg?im_w=960" alt="" />
        <div className='grid grid-cols-2 gap-3'>
          <img className='h-[243px]' src="https://a0.muscache.com/im/pictures/miso/Hosting-859709719997723808/original/d3a5392e-e3fb-4c21-b13f-62455ec4f164.jpeg?im_w=720" alt="" />
          <img className='h-[243px]' src="https://a0.muscache.com/im/pictures/miso/Hosting-859709719997723808/original/9bafe674-5e9c-400b-b659-2b1568e16167.jpeg?im_w=720" alt="" />
          <img className='h-[243px]' src="https://a0.muscache.com/im/pictures/miso/Hosting-859709719997723808/original/dc33f1e9-6ce3-4d45-833b-e04420f2c489.jpeg?im_w=720" alt="" />
          <img className='h-[243px]' src="https://a0.muscache.com/im/pictures/miso/Hosting-859709719997723808/original/9e7e4d76-58a2-437f-8388-d435d8381b52.png?im_w=720" alt="" />
        </div>
      </div>

      <div className='mt-10 '>
        <div className='inline-block my-7 '>
          <h1 className='text-3xl font-bold'>Private room in resort in Kaafu Atoll, Maldives</h1>
          <p className='text-xl font-black my-4'>6 guests 2 bedrooms 3 beds 2 baths</p>
          <div className='flex gap-3 mb-4 items-center'>
            <Star />
            <Star />
            <Star />
            <Star />
          </div>

          <hr />
          <div className='flex items-center gap-4 my-5'>
            <img className='rounded-full h-[50px] w-[50px]' src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg" alt="" />
            <div>
              <h1 className='text-xl font-black'>Hosted By Saroj</h1>
              <p className='text-lg '>Superhost</p>
            </div>
          </div>

          <div className='mt-6 w-1/2 border-2 rounded-md shadow-sm p-5'>
        <p className='text-xl'>In  The Two Bedroom Villa, the first floor features a master bedroom and a second bedroom with king and twin beds, each equipped with its own terrace. The ground floor, with a living area and outdoor terrace which provides direct access to the beach, is perfect for family bonding.</p>
        <AboutPopup/>
      </div>
        </div>
        <Checkout className={'float-right sticky '} />
      </div>
      <hr />
      <div className='mt-7 '>
        <h1 className='text-3xl font-bold'>What this place offers</h1>
        <div className='grid grid-cols-2 w-[50%] my-5'>
          {
            offerService.map((ele, index) => {
              return <div key={index + ele.name} className='flex items-center my-3 gap-4'>
                <span>{ele.icon}</span>
                <span className='text-2xl'>{ele.name}</span>
              </div>
            })
          }
        </div>
        <div>
        </div>
      </div>
      <hr />
      <HostDetail/>

    </div>
  )
}

export default DetailPage