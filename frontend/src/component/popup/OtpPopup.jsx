import React from 'react'
import Popup from 'reactjs-popup'

const OtpPopup = ({isOpen,setIsOpen}) => {
  return (
    <Popup open={isOpen} onClose={()=>setIsOpen(false)}>
<h1>hello</h1>
    </Popup>
  )
}

export default OtpPopup