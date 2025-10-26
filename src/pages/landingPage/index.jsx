import React from "react";
import Header from "../../Components/Header";
import Hero from "./Hero";
import Farmers from "./Farmers";
import Footer from "../../Components/Footer";
import FAQSection from "./FAQSection"
import Harvest from "./Harvest";
import Mission from "./Mission";
import Journey from "./Journey";
import TestimonialSection from "./TestimonialSection";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Mission />
      <Farmers />
      <Journey />
      <TestimonialSection />
      <FAQSection />
      <Harvest />
      <Footer />
    </>
  );
};

export default LandingPage;
