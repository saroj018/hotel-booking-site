import React from 'react'
import { twMerge } from 'tailwind-merge'

const OwnerProfile = ({className,title,subtitle}) => {
  return (
    <div className={twMerge('flex items-center gap-4 ',className)}>
    <img className='rounded-full h-[50px] w-[50px]' src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg" alt="" />
    <div>
        <h1 className='text-xl font-black'>{title}</h1>
        <p className='text-lg '>{subtitle}</p>
    </div>
</div>
  )
}

export default OwnerProfile