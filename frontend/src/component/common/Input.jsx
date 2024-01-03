import React from 'react'
import {twMerge} from 'tailwind-merge'

const Input = ({className,...props}) => {
  return (
    <input type="text" className={twMerge('py-3 outline-none',className)} {...props} />
  )
}

export default Input