import React, { useState } from "react";
import farmerHarvest from "../../assets/images/Nigerian farmer with harvest.jpg";
import GoogleIcon from "../../Components/iconComponent/Google.jsx";
import X from "../../Components/iconComponent/X.jsx";
import Instagram from "../../Components/iconComponent/Instagram.jsx";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen flex items-center  justify-center">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full px-3  flex flex-col justify-center items-center overflow-y-auto no-scrollbar ">
        <div
          onClick={() => navigate("/")}
          className="max-w-[448px] w-full h-screen mx-auto "
        >
          <div className="flex items-center gap-2 mb-8 pt-10">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00004 12.6673L3.33337 8.00065L8.00004 3.33398"
                stroke="#4A5565"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.6667 8H3.33337"
                stroke="#4A5565"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className=" inter font-normal text-[16px] ">Back to Home</p>
          </div>
          <div>
            <h2 className="manrope font-bold text-4xl mb-3 ">Welcome Back</h2>
            <p className=" text-[18px] font-normal mb-8 ">
              Log in to continue growing with us
            </p>
          </div>
          <div>
            <button className="w-full h-12 flex justify-center gap-2 items-center border-2 text-[14px] border-gray-400 rounded-lg font-medium mb-3 ">
              <GoogleIcon />
              Continue with Google
            </button>
            <button className="w-full h-12 flex justify-center gap-2 items-center border-2 text-[14px] border-gray-400 rounded-lg font-medium mb-3 ">
              <X />
              Continue with X
            </button>
            <button className="w-full h-12 flex justify-center gap-2 items-center border-2 text-[14px] border-gray-400 rounded-lg font-medium mb-[33.5px] ">
              <Instagram />
              Continue with instagram
            </button>
          </div>
          {/* OR Divider */}
          <div className="flex items-center justify-center mb-[33.5px]">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-3 text-gray-500 font-medium">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Form */}
          <form action="" className="pb-6">
            <div>
              <label htmlFor="email" name="email" id="email">
                {" "}
                Email Address{" "}
              </label>{" "}
              <br />
              <input
                className=" w-full h-12 px-[13px] py-[15.5px] border-2 border-gray-400 rounded-lg mt-2 mb-5"
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="relative">
              <label htmlFor="password" id="password">
                {" "}
                Password{" "}
              </label>{" "}
              <br />
              <input
                className=" w-full h-12 px-[13px] py-[15.5px] border-2 border-gray-400 rounded-lg mt-2 mb-5"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[47px]"
              >
                {" "}
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}{" "}
              </button>
            </div>
            <button
              type="submit"
              className="w-full h-12 py-[14px] bg-green-400 text-white rounded-lg text-[16px] inter font-medium mb-[34px] leading-[24px]"
            >
              {" "}
              Log in
            </button>
            <div className="flex justify-center items-center space-x-1 inter font-normal  text-[16px]">
              <p>Do you have an account?</p>
              <a href="/register" className="text-green-500">
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div
        style={{ backgroundImage: `url(${farmerHarvest})` }}
        className="w-1/2 relative text-white  min-h-screen hidden lg:flex flex-col items-center justify-center bg-center bg-cover object-fit"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-700 to-green-500 opacity-70"></div>

        {/* Contents */}
        <div className="relative z-10 text-center">
          <h2 className=" font-bold text-5xl mb-[25px] mx-auto max-w-[290px]">
            Your Farm, Your Future
          </h2>
          <p className="inter font-normal text-2xl max-w-[500px]">
            Join thousands of farmers and buyers building a sustainable
            agricultural future together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
