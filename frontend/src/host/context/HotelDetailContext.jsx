import React, { createContext, useContext, useState } from 'react'

export const Context=createContext()

const HotelDetailContext = ({children}) => {
    const formData=new FormData()
    console.log(formData);
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