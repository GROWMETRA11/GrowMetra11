import React from "react";

const CategoryCards = ({ icon, title, listings, bgColor, className, border }) => {
  return (
    <div
      className={`flex flex-col  mx-auto max-w-[368px] w-full  h-[206px] justify-center border rounded-2xl p-[32px]  transition duration-200 cursor-pointer ${bgColor} ${className} ${border}`}
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
