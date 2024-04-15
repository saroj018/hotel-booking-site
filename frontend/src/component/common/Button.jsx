import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({children,className,...props}) => {
  return <button {...props} className={twMerge('bg-black text-white  outline-none cursor-pointer px-6 text-xl border-2 border-black font-bold py-1 rounded-md',className)}>{children}</button>
}
export default Button