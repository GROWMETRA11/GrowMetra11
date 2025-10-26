import React from "react";
import Btn from "../../Components/Buttons/Button";

const Harvest = () => {
  return (
    <section className="w-full min-h-[624px] flex justify-center items-center bg-[#333333] text-white py-32 px-3">
      <div className="max-w-[896px] mx-auto flex flex-col items-center justify-center text-center  ">
        <h2 className=" text-[60px] max-w-[683.56px]   mb-[34px]"> Every Harvest Deserves <span className="text-green-500  ">A Fair Chance.</span> </h2>
        <p className="inter text-2xl font-normal max-w-[623.72px]  mb-[53px] ">
          Join thousands of farmers and buyers building a more transparent,
          sustainable future for Nigerian agriculture.
        </p>
        <div className=" flex justify-center items-center gap-3 ">
          <Btn className="bg-green-400 text-white " text="Start Your Journey" />
          <Btn icon text="Browse Marketplace" />
        </div>
      </div>
    </section>
  );
};

export default Harvest;
