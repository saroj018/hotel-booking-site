import React from 'react'

const Select = React.forwardRef(({children,className,...props},ref) => {
  return <select className={className} {...props} >{children}</select>
})

export default Select