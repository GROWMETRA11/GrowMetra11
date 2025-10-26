import React from "react";
import topDesign from "../../assets/images/Image.png";
import number1 from "../../assets/icons/Background+Shadow.svg";
import number2 from "../../assets/icons/Background+Shadow (1).svg";
import number3 from "../../assets/icons/Background+Shadow (2).svg";

const Journey = () => {
  const textNum = [
    {
      icon: number1,
      text: "Sign Up",
      description:
        " Create your account in minutes. Whether you're a farmer or buyer, we've made it simple. ",
    },
    {
      icon: number2,
      text: "Get Verified",
      description:
        " Complete our quick verification process to build trust and unlock the full marketplace. ",
    },
    {
      icon: number3,
      text: "Start Trading",
      description:
        " List your produce or place orders with confidence. Every transaction is protected by our escrow system. ",
    },
  ];

  return (
    <section className="w-full">
      <img src={topDesign} alt="topDesign" />
      <div className="w-full max-w-[1024px] min-h-[1066.5px] py-12 mx-auto ">
        <div className="text-center">
          <h2 className="font-bold text-6xl leading-[60px] mb-6">
            Your Journey Stats Here
          </h2>
          <p className="inter font-normal text-md leading-[32.5px] mb-20">
            Three simple steps to transform how you trade{" "}
          </p>
        </div>
        <div className="flex justify-center items-center gap-[63px] mb-[83px]">
          {textNum.map((item, index) => (
            <div
              key={index}
              className="text-center flex flex-col justify-center items-center "
            >
              <img className="" src={item.icon} alt={item.text} />
              <h2>{item.text}</h2>
              <p className="inter font-normal text-[16px] max-w-[287.8px] leading[26px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center text-white ">
          <div className=" w-[512px] h-[512px] rounded-xl shadow-lg"></div>
          <div className="bg-green-400 w-[512px] h-[512px] rounded-xl shadow-lg px-12 py-[150px]">
            <h3 className="font-bold text-3xl leading-[36px] mb-5">Technology meets tradition</h3>
            <p className=" inter text-[18.5px] font-normal leading-[29.25px] mb-[30px]">
              We've designed GrowMetra to be simple enough for anyone to use,
              yet powerful enough to transform your entire business.
            </p>
            <p className=" inter font-normal text-[17.5px] leading-[24px]">
              No complicated processes. No hidden fees. Just honest trading that
              works for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
