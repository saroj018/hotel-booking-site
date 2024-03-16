import React from 'react'

const Option = ({children,className,value,...props}) => {
  return <option value={value}  className={className} {...props}>{children}</option>
}

export default Option