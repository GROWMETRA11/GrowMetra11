import React from "react";

const Cards = ({ image, title, description }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="max-w-[368px] relative  w-full lg:min-h-[300px] h-[320px] rounded-xl overflow-hidden object-contain bg-cover bg-center flex items-end text-white  p-6 transition-transform duration-300 hover:scale-105"
    >
      <div className="bg-black/30 absolute inset-0 "></div>
      <div className="relative z-10 ">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="inter max-w-[297.04px] font-normal text-[14px]  text-gray-200 mt-[9px]">
          {" "}
          {description}{" "}
        </p>
      </div>
    </div>
  );
};

export default Cards;
