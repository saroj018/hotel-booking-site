import React, { useEffect, useState } from 'react'
import InputBar from '../../component/bar/InputBar'
import FilterBar from '../../component/bar/FilterBar'
import Cards from '../../component/Cards'

const Home = () => {

    
  return (
    <div>
        <InputBar/>
        <FilterBar/>

        <div className='grid grid-cols-4 gap-5 px-10'>
            <Cards price={'$120'} name={'Kathmandu,Nepal'} imgDet={'Mountain View and Park'} date={'14th April-28 May'} img={'https://a0.muscache.com/im/pictures/miso/Hosting-776617598835422814/original/79d42290-68f6-4622-be39-f004c4b77f8d.jpeg?im_w=720'}/>
            <Cards price={'$120'} name={'Kathmandu,Nepal'} imgDet={'Mountain View and Park'} date={'14th April-28 May'} img={'https://a0.muscache.com/im/pictures/miso/Hosting-554774580414686671/original/5bcc4bfe-fa51-4a81-b351-c43fe2268185.jpeg?im_w=720'}/>
            <Cards price={'$120'} name={'Kathmandu,Nepal'} imgDet={'Mountain View and Park'} date={'14th April-28 May'} img={'https://a0.muscache.com/im/pictures/miso/Hosting-568517731809040109/original/5bbf0534-3335-4569-b4c0-16b2a4dae089.jpeg?im_w=720'}/>
            <Cards price={'$120'} name={'Kathmandu,Nepal'} imgDet={'Mountain View and Park'} date={'14th April-28 May'} img={'https://a0.muscache.com/im/pictures/miso/Hosting-568517731809040109/original/5bbf0534-3335-4569-b4c0-16b2a4dae089.jpeg?im_w=720'}/>
            <Cards price={'$120'} name={'Kathmandu,Nepal'} imgDet={'Mountain View and Park'} date={'14th April-28 May'} img={'https://a0.muscache.com/im/pictures/miso/Hosting-568517731809040109/original/5bbf0534-3335-4569-b4c0-16b2a4dae089.jpeg?im_w=720'}/>
        </div>
    </div>
    
  )
}

export default Home