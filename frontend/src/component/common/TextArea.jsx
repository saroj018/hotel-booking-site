import React from 'react'

const TextArea = ({children,className,...props}) => {
  return <textarea maxLength={500}  minLength={100} className={className} {...props}  cols="30" rows="10">{children}</textarea>
}

export default TextArea