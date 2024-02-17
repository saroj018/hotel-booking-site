import React from 'react'
import {twMerge} from 'tailwind-merge'

const Input = React.forwardRef(({type='text',inputRef,className,...props},ref) => {
  return (
    <input ref={ref} type={type} className={twMerge('py-3 outline-none',className)} {...props} />
  )
})

export default Input