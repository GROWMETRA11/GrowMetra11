// src/components/Button.jsx
import React from "react";
import Icon from "../../assets/icons/SVG.svg"; // optional static icon

const Button = ({ text, onClick, icon }) => {
  return (
    // Reusable button
    <a href="#"
      onClick={onClick}
      className="flex items-center gap-2 border border-green-500 text-green-500 px-4 py-2 rounded-full hover:bg-green-500 hover:text-white transition"
    >
      {icon && <img src={Icon} alt="" className="w-4 h-4" />} {/* SVG icon */}
      <span>{text}</span>
    </a>
  );
};

export default Button;
