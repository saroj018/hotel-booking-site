import React from 'react'
import {twMerge} from 'tailwind-merge'

const Input = React.forwardRef(({type='text',value,inputRef,className,...props},ref) => {
  return (
    <input value={value} {...props}  ref={ref} type={type} className={twMerge('py-3 px-3 outline-none',className)}  />
  )
})

export default Input