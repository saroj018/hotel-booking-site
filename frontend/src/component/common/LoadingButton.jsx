import React from 'react'
import { twMerge } from 'tailwind-merge'

const LoadingButton = ({children,className,...props}) => {
  return <button {...props} className={twMerge('bg-black text-white  outline-none cursor-pointer px-8 text-xl border-2 border-black font-bold py-2 rounded-md',className)}>{children}</button>
}
export default LoadingButton