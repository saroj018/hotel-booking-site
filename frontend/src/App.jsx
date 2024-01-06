import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './component/shared/Layout'
import Home from './page/home/Home'
import DetailPage from './page/details/DetailPage'
import IntroPage from './host/page/IntroPage'
import LayoutHost from './component/shared/LayoutHost'
import SelectHomeType from './host/page/SelectHomeType'
import SelectRoomType from './host/page/SelectRoomType'
import AddLocation from './host/page/AddLocation'
import AboutRoom from './host/page/AboutRoom'
import OfferServices from './host/page/OfferServices'
import AddPhotos from './host/page/AddPhotos'
import HouseTitle from './host/page/HouseTitle'
import HomeSummery from './host/page/HomeSummery'
import HomeDescription from './host/page/HomeDescription'
import BookingType from './host/page/BookingType'
import SetPrice from './host/page/SetPrice'
import DiscountPage from './host/page/DiscountPage'
import FinalPage from './host/page/FinalPage'
import Dashboard from './host/dashboard/page/Dashboard'
import HostDashboardLayout from './component/shared/HostDashboardLayout'
import Listing from './host/dashboard/page/Listing'
import CalenderPage from './host/dashboard/page/CalenderPage'
import PayPrice from './page/pay/PayPrice'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='details' element={<DetailPage />} />
        <Route path='payprice' element={<PayPrice />} />
      </Route>
      <Route path='/host' element={<LayoutHost />}>
        <Route index element={<IntroPage />} />
        <Route path='hometype' element={<SelectHomeType />} />
        <Route path='roomtype' element={<SelectRoomType />} />
        <Route path='addlocation' element={<AddLocation />} />
        <Route path='aboutroom' element={<AboutRoom />} />
        <Route path='offerservice' element={<OfferServices />} />
        <Route path='addphotos' element={<AddPhotos />} />
        <Route path='housename' element={<HouseTitle />} />
        <Route path='homesummery' element={<HomeSummery />} />
        <Route path='description' element={<HomeDescription />} />
        <Route path='bookingtype' element={<BookingType />} />
        <Route path='setprice' element={<SetPrice />} />
        <Route path='discount' element={<DiscountPage />} />
      </Route>
      <Route path='/host/finalpage' element={<FinalPage />} />
      <Route path='/host/dashboard' element={<HostDashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='listing' element={<Listing />} />
        <Route path='calender' element={<CalenderPage />} />
      </Route>
    </Routes>
  )
}

export default App