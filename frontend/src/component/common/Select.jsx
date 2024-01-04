import React from 'react'

const Select = ({children,...props}) => {
  return <select {...props} name="" id="">{children}</select>
}

export default Select