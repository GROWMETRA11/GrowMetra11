import React, { useState } from "react";
import farmers from "../../assets/images/Nierian farmers working together.jpg";
import GoogleIcon from "../../Components/iconComponent/Google.jsx";
import X from "../../Components/iconComponent/X.jsx";
import Instagram from "../../Components/iconComponent/Instagram.jsx";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()
const [showPassword,setShowPassword] = useState(false);

  return (
    <section className="flex w-full mx-auto h-screen">
      
      { /* Left Side */ }
      <div className="w-1/2 relative hidden lg:flex flex-col justify-center items-center text-center" style={{ backgroundImage: `url(${farmers})` }}>

      {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 to-green-500 opacity-70"></div>

         {/* Content */}
        <div className="relative z-10 text-center text-[#333333]">
          <h2 className="font-bold text-5xl leading-[48px] mb-[25px] max-w-[432px] mx-auto">
            Start Your Journey With Us Today
          </h2>
          <p className="inter max-w-[504px] mx-auto text-2xl font-normal leading-[32.5px]">
            Connect with verified buyers, get fair prices, and grow your
            business with confidence.
          </p>
        </div>
      </div>

      { /* Right Side */ }
      <div className="w-full px-3 lg:max-w-1/2 mx-auto flex justify-center items-center bg-white">
      <div className="max-w-[448px] mx-auto w-full h-screen py-[106px] overflow-y-auto no-scrollbar">
        <div onClick={() => navigate("/")} className="flex items-center gap-2 mb-8">
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
            <h2 className="manrope font-bold text-4xl mb-3 ">
              Create Your Account
            </h2>
            <p className=" text-[18px] font-normal mb-8 ">
              Join the GrowMetra community
            </p>
          </div>
          <div>
            <button className="w-full h-12 flex justify-center gap-2 items-center border-2 tex-[14px] border-gray-400 rounded-lg font-medium mb-3 ">
              <GoogleIcon />
              Continue with Google
            </button>
            <button className="w-full h-12 flex justify-center gap-2 items-center border-2 tex-[14px] border-gray-400 rounded-lg font-medium mb-3 ">
              <X />
              Continue with X
            </button>
            <button className="w-full h-12 flex justify-center gap-2 items-center border-2 tex-[14px] border-gray-400 rounded-lg font-medium mb-[33.5px] ">
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

{ /* Form */ }
          <form action="">
            <div>
              <label htmlFor="Fname" id="Fname"  > Full Name </label> <br />
              <input className=" w-full h-12 px-[13px] py-[15.5px] border-2 border-gray-400 rounded-lg mt-2 mb-5 " type="text" name="Fname" id="Fname" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" name="email" id="email"> Email Address </label> <br />
              <input className=" w-full h-12 px-[13px] py-[15.5px] border-2 border-gray-400 rounded-lg mt-2 mb-5" type="email" name="email" id="email" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="phone" id="phone"  > Phone Number </label> <br />
              <input className=" w-full h-12 px-[13px] py-[15.5px] border-2 border-gray-400 rounded-lg mt-2 mb-5" type="number" name="phone" id="phone" placeholder=" +234 800 000 0000" />
            </div>
            <div className="relative">
              <label htmlFor="password" id="password" > Password </label> <br />
              <input className=" w-full h-12 px-[13px] py-[15.5px] border-2 border-gray-400 rounded-lg mt-2 mb-5" type={showPassword ? "text" : "password"} name="password" id="password" placeholder="••••••••" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-[47px]"> {showPassword ? <EyeOff size={18}/> : <Eye size={18}/> } </button>
            </div>
            <div className="relative">
              <label htmlFor="" className="inter font-medium"> I am a </label><br />
              <select name="" id="" className="w-full h-12 px-[21px] py-[14px] border-2 border-gray-400 rounded-lg mb-5 mt-2 text-[16px] font-normal leading-[20px]">
                <option value="">Select a role</option>
                <option value="farmer">Farmer</option>
                <option value="buyer">Buyer</option>
              </select>
               {/* Custom arrow */}
  <svg
    class="absolute right-5 top-14 -translate-y-1/2 w-6 h-6 appearance-none text-gray-500 pointer-events-none"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
            </div>
            <button type="submit" className="w-full h-12 py-[14px] bg-green-400 text-white rounded-lg mb-[34px] text-[16px] inter font-medium leading-[24px]"> Create Account</button>
            <div className="flex justify-center items-center space-x-1 inter font-normal text-[16px]">
              <p>Already have an account?</p>
              <a href="/login" className="text-green-500">Log in</a>
            </div>
          </form>
      </div>
      </div>
    </section>
  );
};

export default SignUp;
