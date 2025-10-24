import React from "react";
import Cards from "../../Components/Cards/Cards";
import farmerImg1 from "../../assets/images/Nigerian woman farmer with fresh tomatoes.webp";
import farmerImg2 from "../../assets/images/Nigerian male farmer working in green farm.webp";
import buyerImg from "../../assets/images/Nigerian businessman buyer inspecting farm produce.webp";

const Farmers = () => {
  return (
    <section className="w-full lg:py-[96x] px-3">
      <div className=" max-w-[1152px] w-full mx-auto ">
        <h2 className="max-w-[550px] mx-auto font-bold text-[60px] leading-[60px] mb-[13px]">
          Built for Farmers. Trusted by Buyers.
        </h2>
        <p className="inter text-[20px] font-normal leading-[32.5px] text-center mb-20">
          Everything you need to trade with confidence and grow together
        </p>

        {/* Farmers Images */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
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
      </div>
    </section>
  );
};

export default Farmers;
