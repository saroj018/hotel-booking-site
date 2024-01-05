import React from 'react'

const Select = ({children,className,...props}) => {
  return <select className={className} {...props} name="" id="">{children}</select>
}

export default Select