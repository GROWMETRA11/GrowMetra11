import React from 'react'
import Header from '../../Components/Header'
import HeroSection from './HeroSection'
import CategorySection from './CategorySection'
import ProductSection from './ProductSection'
import MarketInsightSection from './MarketInsightSection'
import Footer from "../../Components/Footer"
import SearchSection from './SearchSection'

const MarketPlacePage = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <SearchSection />
    <CategorySection />
    <ProductSection />
    <MarketInsightSection />
    <Footer />
    </>
  )
}

export default MarketPlacePage