import React, { createContext, useContext, useState } from 'react'

const Context=createContext()

const HotelDetailContext = ({children}) => {
    const formData=new FormData()
  return (
    <Context.Provider value={formData}>
      {children}
    </Context.Provider>
  )
}

export default HotelDetailContext

export const useFormData=()=>{
  const formData=useContext(Context)
  return formData
}