// src/components/Button.jsx
import React from "react";
import Icon from "../../assets/icons/SVG.svg"; // optional static icon

const Button = ({ text, onClick, icon, className }) => {
  return (
    // Reusable button
    <button
      onClick={onClick}
      className={`flex items-center gap-2 border cursor-pointer border-green-500 text-green-500 px-4 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 ${className}`}
    >
      {icon && <img src={Icon} alt="" className="w-4 h-4" />} {/* SVG icon */}
      <span>{text}</span>
    </button>
  );
};

export default Button;
