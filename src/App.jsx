import './App.css'
<<<<<<< HEAD
import AboutUs from './pages/aboutPage/AboutUs'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/index.jsx';
=======
import AppRoutes from './routes/AppRoutes'
>>>>>>> 444c3d4c3818e75c339886af637dfe965a18cbca

function App() {


  return (
<<<<<<< HEAD
    <>
    
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
=======
    <AppRoutes />
>>>>>>> 444c3d4c3818e75c339886af637dfe965a18cbca
  )
}

export default App
