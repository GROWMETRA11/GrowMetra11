import React from "react";


const GrowNigeriaFuture = () => {
  return (
    <section
      className="relative w-full h-[708px] flex items-center justify-center overflow-hidden"
    >
      {/* 🔹 Background Image  */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/together.jpg')", // image url
          backgroundSize: "cover",
            backgroundPosition: "center",
          width: "2112px",
          height: "778.8px",
          top: "-35.4px",
          left: "-96px",
          opacity: 1,
        }}
      ></div>

      {/* 🔹 Overlay to improve text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔹 Main Content Container */}
      <div className="relative z-10 w-[896px] h-[452px] flex flex-col items-center justify-center text-center text-white px-4">
        {/* Header */}
        <h2
          className="font-[Manrope] font-bold text-[60px] leading-[75px] mb-6"
          style={{
            color: "rgba(255,255,255,1)",
          }}
        >
          Together, We're <br /> Growing Nigeria's Future
        </h2>

        {/* Paragraph 1 */}
        <p
          className="font-[Inter] font-normal text-[24px] leading-[39px] mb-3"
          style={{
            color: "rgba(255,255,255,0.95)",
          }}
        >
          Whether you're a farmer, a buyer, or a partner — GrowMetra is your home for
          trust, trade, and growth.
        </p>

        {/* Paragraph 2 */}
        <p
          className="font-[Inter] font-normal text-[18px] leading-[28px] mb-10"
          style={{
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Join a community that's building the future of agriculture, one connection at a time.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          {/* Primary Button */}
          <button
            className="w-[276.44px] h-[56px] rounded-full bg-[#4CAF50] text-white font-[Inter] 
            font-semibold text-[18px] leading-[28px] 
            shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),_0px_20px_25px_-5px_rgba(0,0,0,0.1)] 
            cursor-pointer hover:bg-[#3e9941] hover:-translate-y-1"
          >
            Join GrowMetra Today
          </button>

          {/* Secondary Button */}
          <button
            className="w-[262.59px] h-[56px] rounded-full border-2
             border-white bg-transparent text-white font-[Inter] 
            font-semibold text-[18px] leading-[28px] 
            shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),_0px_20px_25px_-5px_rgba(0,0,0,0.1)] 
            hover:-translate-y-1 cursor-pointer"
          >
            Explore Marketplace
          </button>
        </div>

        {/* Footer Paragraph */}
        <p
          className="font-[Inter] font-normal text-[14px] leading-[20px]"
          style={{
            color: "rgba(255,255,255,0.8)",
          }}
        >
          Be part of a movement transforming how agriculture works in Nigeria.
        </p>
      </div>
    </section>
  );
};

export default GrowNigeriaFuture;
