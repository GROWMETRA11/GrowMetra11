import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/landingPage'
import SignUp from '../pages/auth/SignUp'
import LoginPage from '../pages/auth/LoginPage'
<<<<<<< HEAD
=======
import MarketPlacePage from '../pages/marketPlacePage'
>>>>>>> origin

const AppRoutes = () => {
  return (
    <BrowserRouter >
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<LoginPage/>}/>
<<<<<<< HEAD
=======
        <Route path='/marketPlacePage' element={<MarketPlacePage/>}/>
>>>>>>> origin
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes