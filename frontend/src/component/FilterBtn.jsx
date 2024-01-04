import { ListFilter } from 'lucide-react'
import React from 'react'

const FilterBtn = ({onClick}) => {
  return (
    <div onClick={onClick} className='flex gap-3 border-2 border-neutral-200 cursor-pointer p-3'>
            <ListFilter />
            <p>Filters</p>
            </div>
  )
}

export default FilterBtn