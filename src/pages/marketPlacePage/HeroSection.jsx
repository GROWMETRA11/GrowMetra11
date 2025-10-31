import React from "react";
import ArrowForward from "../../Components/iconComponent/ArrowForward";
import { Search, MapPin, LayoutGrid } from "lucide-react"; // from lucide-react

const HeroSection = () => {

     const stats = [
    { number: "5,000+", label: "Verified Farmers" },
    { number: "12,000+", label: "Active Buyers" },
    { number: "₦2.5B+", label: "Transactions" },
  ];


  return (
    <>
    <section className="w-full h-[1020px] mx-auto px-5 flex justify-center items-center bg-[linear-gradient(to_bottom_right,_#D1EBD2_45%,_#FFFFFF_55%,_#FFFACF_65%)] py-[96px] lg:py-[105px] ">
      <div className="max-w-[1024px] mx-auto text-center   ">
        <p className="inter font-semibold text-[14px]  max-w-[241px] mb-[23px] mx-auto px-6 py-2 bg-[#4CAF501A] text-[#4CAF50] rounded-full leading-5">
          EXPLORE WITHOUT LIMITS
        </p>
        <div className="font-bold text-[40px] lg:text-8xl mx-auto w-[908px] leading-[50px] lg:leading-[106px]">
        
          <div className=""> Nigeria's Premier</div>
          <div className="text-green-500">Agriculture Marketplace</div>
        </div>
        <p className="inter max-w-[720px] mx-auto leading-[39px] font-light mb-[53px] text-2xl text-[#4A5565]">
          Connect with verified farmers, discover quality produce, and invest in
          sustainable agriculture — all in one seamless platform.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row mb-[48px] justify-center items-center gap-[15px]">
          <a
            className="px-5 py-[22px] flex items-center gap-2 border-1 rounded-full bg-[#4CAF50] text-white"
            href=""
          >
            Browse MarketPlace <ArrowForward />          
          </a>
          <a className="px-10 py-[22px] text-[#4CAF50] border rounded-full bg-white" href="">
            Create Account 
          </a>
        </div>

        { /* Stats */  }
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center text-center divide-y md:divide-y-0 md:divide-x divide-gray-200 px-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex-1 px-4 py-2">
            <h2 className="text-4xl md:text-[40px] font-bold text-green-600">
              {stat.number}
            </h2>
            <p className="inter font-medium text-gray-700 text-lg mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
      </div>
      
    </section> 
      <div className="w-full max-w-3xl mx-auto my-20  flex items-center bg-white border border-gray-200 rounded-2xl shadow-sm px-4 py-4 space-x-3">
      {/* Search Input */}
      <div className="flex items-center flex-1 space-x-2">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search for crops, produce, equipment..."
          className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-400"
        />
      </div>

      {/* Divider */}
      <div className="w-px h-6 bg-gray-200"></div>

      {/* Location Dropdown */}
      <div className="flex items-center space-x-1 cursor-pointer text-gray-600 hover:text-green-600">
        <MapPin size={18} />
        <span className="text-sm">Location</span>
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Divider */}
      <div className="w-px h-6 bg-gray-200"></div>

      {/* Category Dropdown */}
      <div className="flex items-center space-x-1 cursor-pointer text-gray-600 hover:text-green-600">
        <LayoutGrid size={18} />
        <span className="text-sm">Category</span>
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
      </>
  );
};

export default HeroSection;
