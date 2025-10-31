import React from "react";

const CategoryCards = ({ icon, title, listings, bgColor, className }) => {
  return (
    <div
      className={`flex flex-col  mx-auto w-[368px] h-[206px] justify-center rounded-2xl p-[32px] shadow-sm hover:shadow-md transition duration-200 cursor-pointer ${bgColor} ${className}`}
    >
      {icon && (
        <img src={icon} alt={title} className="w-[56px] h-[56px] mb-3 object-contain" />
      )}
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{listings}</p>
    </div>
  );
};

export default CategoryCards;
