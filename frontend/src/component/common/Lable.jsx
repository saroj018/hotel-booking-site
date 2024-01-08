import React from 'react'
import { twMerge } from 'tailwind-merge'

const Lable = ({children,className}) => {
  return <label className={twMerge('block text-2xl my-3 font-bold',className)} htmlFor="">{children}</label>
}

export default Lable