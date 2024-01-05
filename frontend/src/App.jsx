import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './component/shared/Layout'
import Home from './page/home/Home'
import DetailPage from './page/details/DetailPage'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/detail' element={<DetailPage/>}/>
        </Route>
    </Routes>
  )
}

export default App