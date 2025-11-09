import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/landingPage'
import SignUp from '../pages/auth/SignUp'
import LoginPage from '../pages/auth/LoginPage'
import MarketPlacePage from '../pages/marketPlacePage'
import Dashboard from '../pages/dashboard/famers/screen/Dashboard'
import MarketPlace from '../pages/dashboard/famers/screen/MarketPlace'
import Orders from '../pages/dashboard/famers/screen/Orders'
import Cart from '../pages/dashboard/famers/screen/Cart'
import Wallet from '../pages/dashboard/famers/screen/Wallet'
import AboutUs from '../pages/aboutPage/AboutUs'


const AppRoutes = () => {
  return (

    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/marketPlacePage' element={<MarketPlacePage/>}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/marketplace' element={<MarketPlace/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wallet' element={<Wallet/>}/>
        <Route path='/about' element={<AboutUs/>}/>
    </Routes>
  
  )
}

export default AppRoutes