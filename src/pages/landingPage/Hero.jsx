import React from "react";
import heroBg from "../../assets/images/Hero bg.webp";
import icon from "../../assets/icons/SVG.svg";
import Button from "../../Components/Buttons/Button";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${heroBg})` }}
      className="bg-cover bg-center h-screen md:flex flex-col items-center justify-center"
    >
      <div className="max-w-[778px] mx-auto min-h-[559px]">
        <h1 className="font-bold text-5xl md:text-[72px] text-center ">
          Connecting Farmers and{" "}
          <span className="text-green-500">Buyers with Trust</span>{" "}
        </h1>
        <p className="max-w-[695.7px] leading-[39px] inter text-xl md:text-[24px] mx-auto font-light text-center">
          {" "}
          Every harvest tells a story. Every transaction builds a future.
          GrowMetra connects Nigerian farmers with buyers who value quality,
          fairness, and transparency.
        </p>
        {/* Buttons */}
        <section>
          <div className="flex justify-center items-center">
            <Button
              text="Explore Marketplace"
              icon={icon}
              onClick={() => alert("Clicked!")}
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
