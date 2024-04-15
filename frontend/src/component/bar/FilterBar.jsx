import { Blinds, Building, CarTaxiFront, Home, ListFilter, Minimize2, Sailboat, ShieldPlus, Tractor, UtensilsCrossed } from 'lucide-react'
import React, { useState } from 'react'
import '../CSS/style.css'
import FilterPopup from '../popup/FilterPopup'
import { usePostFetch } from '../../hooks/fetch-data'

const FilterBar = ({ setDetails,setTimeUp }) => {

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

    const clickHandler = async (item) => {
        setTimeUp(false)
        const result = await usePostFetch(`${import.meta.env.VITE_HOSTNAME}/api/hotel/houseType`, { type: item.toLocaleLowerCase() })
        setDetails(result.data)
        setHouse(item.toLocaleLowerCase())
        
    }
    return (
        <div className='filterbar flex gap-5 px-2 items-center justify-between sticky border-2 rounded-md  top-[15%] bg-white'>
            <div className='flex gap-2 rounded-xl cursor-pointer max-w-[85%]  overflow-x-scroll px-5'>
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
                <FilterPopup setTimeUp={setTimeUp} setDetails={setDetails} />

        </div>
    )
}

export default FilterBar