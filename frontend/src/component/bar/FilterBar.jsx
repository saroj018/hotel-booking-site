import { Blinds, Building, CarTaxiFront, Home, ListFilter, Minimize2, Sailboat, ShieldPlus, Tractor, UtensilsCrossed } from 'lucide-react'
import React, { useState } from 'react'
import '../CSS/style.css'
import FilterPopup from '../popup/FilterPopup'
import { usePostFetch } from '../../hooks/fetch-data'

const FilterBar = ({setDetails}) => {

    const filterOption = [
        {
            name: 'All',
            icon: <ShieldPlus />
        },
        {
            name: 'House',
            icon: <Home />
        },
        {
            name: 'Apartment',
            icon: <Building />
        },
        {
            name: 'Barn',
            icon: <Blinds />
        },
        {
            name: 'Bed & BreakFast',
            icon: <UtensilsCrossed />
        },
        {
            name: 'Boat',
            icon: <Sailboat />
        },
        {
            name: 'Cabin',
            icon: <CarTaxiFront />
        },
        {
            name: 'Farm',
            icon: <Tractor />
        },
    ]

    const [house, setHouse] = useState('all')
    console.log(house);

    const clickHandler = async (item) => {
        const result = await usePostFetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/houseType`, { type: item.toLocaleLowerCase() })
        setDetails(result.data)
        setHouse(item.toLocaleLowerCase())
    }
    return (
        <div className='filterbar flex gap-5 px-2 mt-8 items-center justify-between sticky border-2 rounded-md  top-[15%] bg-white'>
            <div className='flex gap-2 rounded-xl cursor-pointer max-w-[70%]  overflow-x-scroll px-5'>
                {
                    filterOption.map((item, index) => {
                        return (
                            <div onClick={() => clickHandler(item.name)} className={`flex flex-col text-sm border-2 border-neutral-200 rounded-md shadow-md text-center items-center min-w-[130px]  my-4 gap-4 p-2 ${house == item.name.toLocaleLowerCase() ? 'bg-red-500 text-white outline-none border-none' : ''}`} key={index + item.name}>
                                <span>{item.icon}</span>
                                <p>{item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex gap-7 text-lg'>
                <FilterPopup setDetails={setDetails} />

                <div className='p-2 border-2 gap-3 flex border-neutral-200 items-center '>
                    <p>Display total before taxes</p>
                    <div className="toggle border-2 border-green-500 "></div>
                </div>
            </div>
        </div>
    )
}

export default FilterBar