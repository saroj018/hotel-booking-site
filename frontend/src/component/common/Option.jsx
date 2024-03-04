import React from 'react'

const Option = ({children,className,...props}) => {
  return <option  className={className} {...props}>{children}</option>
}

export default Option