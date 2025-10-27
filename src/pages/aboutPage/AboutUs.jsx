import React from 'react'
import Header from '../../Components/Header';
import AboutHero from './AboutHero';
import MissionVisionSection from './MissionVision';
import StorySection from './StorySection';
import PrinciplesSection from './Principles';
import RealChangeSection from './RealChange';
import GrowNigeriaFuture from './Growing';
import Footer from '../../Components/Footer';

const AboutUs = () => {
  return (
    <>
      <Header />
      <AboutHero />
      <MissionVisionSection />
      <StorySection />
      <PrinciplesSection />
      <RealChangeSection />
      <GrowNigeriaFuture />
      <Footer />
    </>
  )
}

export default AboutUs
