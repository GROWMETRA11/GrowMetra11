import React from "react";

const Mission = () => {
  return (
    <section className="w-full lg:py-[96px] ">
      <div className="max-w-[1152px] w-full mx-auto py-[14px] lg:py-[48px] ">
        <div className="relative bg-[#4CAF50] max-w-[1152px] mx-auto px-10 py-10 text-white rounded-2xl ">
          <svg
            className="absolute right-0 top-0"
            width="128"
            height="128"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="-128"
              width="256"
              height="256"
              rx="128"
              fill="white"
              fill-opacity="0.1"
            />
          </svg>
          <h2 className="max-w-[547.04px] w-full font-bold text-2xl md:text-4xl mb-5 leading-[48px] lg:text-5xl">
            From Data to Decisions, From Farm to Fork.
          </h2>
          <p className="inter max-w-[752.58px] w-full ">
            We're building a connected, sustainable African agribusiness where
            technology empowers farmers, buyers trade with confidence, and
            communities thrive together.
          </p>
        </div>
        {/* Flex Items */}
        <div className="flex flex-col xl:flex-row items-center justify-center gap-6 mt-6">
          <div className="relative  bg-[#FFEB3B] max-w-[564px] w-full rounded-2xl px-10 py-10">
            <div className="">
              <h3 className="max-w-[410.84px] font-bold text-[24px] leading-[32px]">
                We've seen the harvest spoiled by a broken thread to the market.
              </h3>
              <p className="inter max-w-[481px] font-light leading-[26px]">
                Too many farmers lose their hard work to middlemen, delayed
                payments, and broken promises. We built GrowMetra to change that
                story.
              </p>
              <svg
                className="absolute right-0 bottom-0"
                width="103"
                height="103"
                viewBox="0 0 103 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M51.2 102.4C79.477 102.4 102.4 79.477 102.4 51.2C102.4 22.923 79.477 0 51.2 0C22.923 0 0 22.923 0 51.2C0 79.477 22.923 102.4 51.2 102.4Z"
                  fill="#161616"
                />
              </svg>
            </div>
          </div>
          <div className="relative bg-[#2E7D32] max-w-[564px] w-full rounded-2xl px-10 py-10 text-white ">
            <svg
              className="absolute top-0 left-0"
              width="128"
              height="128"
              viewBox="0 0 128 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.1">
                <path
                  d="M64 12.8008L115.2 115.201H12.8L64 12.8008Z"
                  fill="white"
                />
              </g>
            </svg>

            <h3 className="max-w-[483.84px] font-bold text-2xl leading-[32px] ">
              We've tried to build trust with nothing but a handshake.
            </h3>
            <p className="inter max-w-[472.68px] font-light text-base ">
              In a world where trust is earned through transparency, we created
              a platform where every transaction is protected, every farmer is
              verified, and every buyer knows exactly what they're getting.
            </p>
          </div>
        </div>
        <p className="inter text-[20px] font-medium leading-[32.5px] max-w-[710px] mx-auto text-center mt-[68px] text-[#4A5565]">
          Our mission is simple: empower farmers with fair opportunities, give
          buyers confidence in every purchase, and build a marketplace where
          agriculture thrives on trust and technology.
        </p>
      </div>
    </section>
  );
};

export default Mission;
