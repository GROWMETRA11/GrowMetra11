import React, { useState } from "react";
import logo from "../assets/logos/Growmetra_limited_Logo-removebg-preview 1.svg";
import { FiMenu, FiX } from "react-icons/fi"; // For menu icon
import AboutUs from "../pages/aboutPage/AboutUs";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navBar = ["About", "Features", "How it works", "Stories", "FAQs"];
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const buttons = [
    {
      text: "Login",
      href: "/login",
      className: "text-gray-500 text-sm hover:text-green-500 transition",
    },
    {
      text: "Sign Up",
      href: "/register",
      className:
        "px-4 py-2 rounded-full border text-sm border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition",
    },
    {
      text: "Visit Marketplace",
      href: "#",
      className:
        "px-4 py-2 rounded-full bg-green-500 text-white text-sm hover:opacity-90 transition",
    },
  ];

  // HELPER FUNCTION TO HANDLE NAVIGATION
  const handleNavClick = (item) => {
    setActive(item);
    if (item === "About") {
      navigate("/about");
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <section className="max-w-[1536px] mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={logo} alt="GrowMetra Logo" className="w-[60px]" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex ml-35 gap-6 items-center inter font-normal">
          {navBar.map((item, index) => (
            <a
              key={index}
              href="#"
              onClick={() => handleNavClick(item)}
              className={`cursor-pointer text-sm transition duration-200 ${
                active === item
                  ? "text-green-500 border-b-2 border-green-500"
                  : "text-gray-500 hover:text-green-500"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4 items-center">
          {buttons.map((btn, index) => (
            <a key={index} href={btn.href} className={btn.className}>
              {btn.text}
            </a>
          ))}
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="lg:hidden text-2xl text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </section>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white px-4 py-6 shadow-md">
          <nav className="flex flex-col gap-4 mb-6">
            {navBar.map((item, index) => (
              <a
                key={index}
                href="#"
                onClick={() => {
                  handleNavClick(item);
                  setIsMenuOpen(false);
                }}
                className={`text-base font-medium transition ${
                  active === item
                    ? "text-green-500"
                    : "text-gray-600 hover:text-green-500"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className=" flex flex-col gap-4 w-fit">
            {buttons.map((btn, index) => (
              <a key={index} href={btn.href} className={btn.className}>
                {btn.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
