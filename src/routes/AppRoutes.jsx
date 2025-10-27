import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/landingPage'
import SignUp from '../pages/auth/SignUp'

const AppRoutes = () => {
  return (
    <BrowserRouter >
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/register' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes