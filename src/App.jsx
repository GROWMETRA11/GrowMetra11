import './App.css'
import AboutUs from './pages/aboutPage/AboutUs'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/index.jsx';

function App() {


  return (
    <>
    
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App
