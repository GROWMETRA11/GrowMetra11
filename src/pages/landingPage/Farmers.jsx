import React from "react";
import Cards from "../../Components/Cards/Cards";
import farmerImg1 from "../../assets/images/Nigerian woman farmer with fresh tomatoes.webp";
import farmerImg2 from "../../assets/images/Nigerian male farmer working in green farm.webp";
import buyerImg from "../../assets/images/Nigerian businessman buyer inspecting farm produce.webp";

import icon1 from "../../assets/icons/Overlay3.svg"
import icon2 from "../../assets/icons/Overlay (1).svg"
import icon3 from "../../assets/icons/Overlay (2).svg"
import icon4 from "../../assets/icons/Overlay.svg"
import Button from "../../Components/Buttons/Button";
const Farmers = () => {
  const securities = [
    {icon: icon1 , id: "Verified Network", text: "Every farmer thoroughly verified for quality" },
    {icon: icon2 , id: "Secure Escrow", text: "Protected payments until delivery confirmed" },
    {icon: icon3 , id: "Smart Dashboard", text: "Manage listings and track sales effortlessly"},
    {icon: icon4 , id: "Fast Delivery", text: "Reliable logistics across Nigeria" }
  ]

  return (
    <section className="w-full py-[96px] px-3">
      <div className=" max-w-[1152px] w-full mx-auto ">
        <h2 className="max-w-[550px] mx-auto font-bold text-[60px] leading-[60px] mb-[13px]">
          Built for Farmers. Trusted by Buyers.
        </h2>
        <p className="inter text-[20px] font-normal leading-[32.5px] text-center mb-20">
          Everything you need to trade with confidence and grow together
        </p>

        {/* Farmers Images */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-16">
          <Cards
            image={farmerImg1}
            title="For Agribusinesses"
            description="List your produce, reach verified buyers, and grow your business with transparent pricing"
          />
          <Cards
            image={farmerImg2}
            title="For Cooperatives"
            description="Manage multiple farms, track inventory, and connect with bulk buyers seamlessly"
          />
          <Cards
            image={buyerImg}
            title="For Buyers & Partners"
            description="Source quality produce directly from verified farmers with secure payment protection"
          />
        </div>

        { /* Security */ }
        <div className="flex items-center justify-center gap-8 mb-[66px]">
          {securities.map((security,index) => (
            <div key={index} className="text-center ">
               <img className="mx-auto w-10 h-10 mb-2" src={security.icon} alt="Security Icon" />
               <div className="font-semibold text-sm inter">{security.id} </div>
               <div className="font-medium  inter">{security.text}</div>
                </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center ">
           <p className="text-center font-normal text-[18px] mb-6">See what's available in the marketplace right now</p>
           <Button
          icon
          text="Explore Marketplace" 
          /> 
        </div>
      </div>

    </section>
  );
};

export default Farmers;
