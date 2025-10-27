import React from "react";
import farmers from "../../assets/images/Nierian farmers working together.jpg";
import GoogleIcon from "../../Components/iconComponent/Google.jsx";
import X from "../../Components/iconComponent/X.jsx";
import Instagram from "../../Components/iconComponent/Instagram.jsx";

const SignUp = () => {
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
      <div className="w-full max-w-1/2 mx-auto flex justify-center items-center bg-white">
      <div className="max-w-[448px] mx-auto w-full h-screen py-[106px] overflow-y-auto no-scrollbar">
        <div className="flex items-center gap-2 mb-8">
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
              <label htmlFor="Fname" id="Fname" > Full Name </label> <br />
              <input className=" w-full h-12 px-[13px] py-[15.5px] border-1 border-gray-300 rounded-lg" type="text" name="Fname" id="Fname" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" id="email" > Email Address </label> <br />
              <input className=" w-full h-12 px-[13px] py-[15.5px] border-1 border-gray-300 rounded-lg" type="email" name="email" id="email" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="Fname" id="Fname" > Phone Number </label> <br />
              <input className=" w-full h-12 px-[13px] py-[15.5px] border-1 border-gray-300 rounded-lg" type="number" name="Fname" id="Fname" placeholder=" +234 800 000 0000" />
            </div>
            <div>
              <label htmlFor="Fname" id="Fname" > Password </label> <br />
              <input className=" w-full h-12 px-[13px] py-[15.5px] border-1 border-gray-300 rounded-lg" type="password" name="Fname" id="Fname" />
            </div>
          </form>
      </div>
      </div>
    </section>
  );
};

export default SignUp;
