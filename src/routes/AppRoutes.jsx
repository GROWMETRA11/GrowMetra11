import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/landingPage'
import SignUp from '../pages/auth/SignUp'
import LoginPage from '../pages/auth/LoginPage'
import MarketPlacePage from '../pages/marketPlacePage'
import MarketPlace from '../pages/dashboard/famers/screen/marketplace/MarketPlace'
import Orders from '../pages/dashboard/famers/screen/orders/Orders'
import Cart from '../pages/dashboard/famers/screen/cart/Cart'
import Wallet from '../pages/dashboard/famers/screen/wallet/Wallet'
import AddFunds from '../pages/dashboard/famers/screen/wallet/AddFunds'
import AboutUs from '../pages/aboutPage/AboutUs'
import Logout from '../pages/dashboard/famers/screen/Logout'
import Settings from '../pages/dashboard/famers/screen/settings/Settings'
import Dashboard from '../pages/dashboard/famers/screen/Dashboard/Dashboard'
import BuyersDashboard from '../pages/dashboard/buyers/screens/BuyersDashboard'
import Products from '../pages/dashboard/buyers/screens/Products'
import AddProducts from '../pages/dashboard/buyers/screens/AddProducts'
import Inventory from '../pages/dashboard/buyers/screens/Inventory'
import Order from '../pages/dashboard/buyers/screens/Orders'
import Deliveries from '../pages/dashboard/buyers/screens/Deliveries'



const AppRoutes = () => {
  return (

    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/marketPlacePage' element={<MarketPlacePage/>}/>
        <Route path='/dashboard/farmers' element={<Dashboard />}/>
        <Route path='/dashboard/buyers' element={<BuyersDashboard />}/>
        <Route path='/dashboard/buyers/products' element={<Products />}/>
        <Route path='/dashboard/buyers/add-product' element={<AddProducts />}/>
        <Route path='/dashboard/buyers/inventory' element={<Inventory />}/>
        <Route path='/dashboard/buyers/orders' element={<Order />}/>
        <Route path='/dashboard/buyers/deliveries' element={<Deliveries />}/>
        <Route path='/dashboard/farmers/marketplace' element={<MarketPlace/>}/>
        <Route path='/dashboard/farmers/orders' element={<Orders/>}/>
        <Route path='/dashboard/farmers/cart' element={<Cart/>}/>
        <Route path='/dashboard/farmers/wallet' element={<Wallet/>}/>
        <Route path='/dashboard/farmers/Wallet/addFunds' element={<AddFunds/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/about' element={<AboutUs/>}/>
    </Routes>
  
  )
}

export default AppRoutes