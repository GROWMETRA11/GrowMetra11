import React from "react";
import heroBg from "../../assets/images/Hero bg.webp";
import icon from "../../assets/icons/SVG.svg";
import Button from "../../Components/Buttons/Button";
import verify from "../../assets/icons/verify icon.svg";
import secure from "../../assets/icons/secure payment icon.svg";
import fair from "../../assets/icons/fair pricing icon.svg";

const Hero = () => {
  const safeties = [
    { id: verify, text: "Verified Farmers" },
    { id: secure, text: "Secure Payments" },
    { id: fair, text: "Fair Payments" },
  ];

  return (
    <section
      style={{ backgroundImage: `url(${heroBg})` }}
      className="bg-cover bg-center min-h[876px] md:flex flex-col items-center justify-center pt-50"
    >
      <div className="max-w-[778px] mx-auto min-h-[559px]">
        <h1 className="font-bold text-5xl md:text-[72px] text-center mb-4 ">
          Connecting Farmers and{" "}
          <span className="text-green-500">Buyers with Trust</span>{" "}
        </h1>
        <p className="max-w-[695.7px] leading-[39px] inter text-xl md:text-[24px] mx-auto font-light text-center mb-10">
          {" "}
          Every harvest tells a story. Every transaction builds a future.
          GrowMetra connects Nigerian farmers with buyers who value quality,
          fairness, and transparency.
        </p>
        {/* Buttons */}

        <div className="flex justify-center items-center gap-4 mb-10">
          <Button
            text="Sign Up Now"
            className="text-white bg-green-500 hover:bg-transparent  transition-all duration-300"
          />
          <Button
            text="Explore Marketplace"
            icon={icon}
            onClick={() => alert("Clicked!")}
          />
        </div>
        <a
          href="#"
          className="inter font-medium text-[14px] underline flex justify-center items-center mb-10"
        >
          {" "}
          See How it works{" "}
        </a>

        <div className="flex justify-center items-center gap-12 ">
          {safeties.map((safety, index) => (
            <div className="flex justify-center items-center" key={index}>
              <img src={safety.id} alt="safety icon" />
              <p>{safety.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
