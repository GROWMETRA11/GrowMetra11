import React from "react";
import Header from "../../Components/Header";
import Hero from "./Hero";
import Farmers from "./Farmers";
import Footer from "../../Components/Footer";
import Mission from "./Mission";
import Journey from "./Journey";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Mission />
      <Farmers />
      <Journey />
      <Footer />
    </>
  );
};

export default LandingPage;
