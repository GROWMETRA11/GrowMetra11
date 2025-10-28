import React from "react";
import { motion } from "framer-motion";

const Mission = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i = 1) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="w-full lg:py-[96px] px-3 overflow-hidden">
      <div className="max-w-[1152px] w-full mx-auto py-[14px] lg:py-[48px]">
        
        {/* Top Gradient Box */}
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-t from-gray-700 to-gray-200 max-w-[1152px] mx-auto px-12 py-8 lg:pt-[244px] pb-[54px] text-white rounded-2xl mb-[64px]"
        >
          <h3 className="max-w-[982.8px] font-bold text-2xl md:text-4xl mb-5 leading-[48px] lg:text-4xl">
            We understand your journey because we've walked it too
          </h3>
          <p className="inter text-[20px] max-w-[700px] leading-[32.5px] font-normal">
            Every feature we build comes from real conversations with farmers
            and buyers across Nigeria.
          </p>
        </motion.div>

        {/* Green Gradient Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative bg-[#4CAF50] max-w-[1152px] mx-auto px-10 py-10 text-white rounded-2xl"
        >
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
              fillOpacity="0.1"
            />
          </svg>
          <h2 className="max-w-[550px] w-full font-bold text-2xl md:text-4xl mb-5 leading-[48px] lg:text-5xl">
            From Data to Decisions, From Farm to Fork.
          </h2>
          <p className="inter text-[20px] max-w-[700px] leading-[32.5px] font-normal">
            We're building a connected, sustainable African agribusiness where
            technology empowers farmers, buyers trade with confidence, and
            communities thrive together.
          </p>
        </motion.div>

        {/* Flex Cards */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Yellow Card */}
          <motion.div
            variants={scaleUp}
            custom={1}
            className="relative bg-[#FFEB3B] max-w-[564px] w-full rounded-2xl px-10 py-10"
          >
            <h3 className="max-w-[410.84px] font-bold text-[24px] leading-[32px] mb-5">
              We've seen the harvest spoiled by a broken thread to the market.
            </h3>
            <p className="inter max-w-[481px] font-light leading-[26px]">
              Too many farmers lose their hard work to middlemen, delayed
              payments, and broken promises. We built GrowMetra to change that
              story.
            </p>
            <svg
              className="absolute bottom-0 right-0"
              width="128"
              height="128"
              viewBox="0 0 128 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.1">
                <path
                  d="M64 115.201C92.277 115.201 115.2 92.2778 115.2 64.0008C115.2 35.7238 92.277 12.8008 64 12.8008C35.7231 12.8008 12.8 35.7238 12.8 64.0008C12.8 92.2778 35.7231 115.201 64 115.201Z"
                  fill="#161616"
                />
                <path
                  d="M64 96C81.6731 96 96 81.6731 96 64C96 46.3269 81.6731 32 64 32C46.3269 32 32 46.3269 32 64C32 81.6731 46.3269 96 64 96Z"
                  stroke="#161616"
                  strokeWidth="3.84"
                />
              </g>
            </svg>
          </motion.div>

          {/* Green Card */}
          <motion.div
            variants={scaleUp}
            custom={2}
            className="relative bg-[#2E7D32] max-w-[564px] w-full rounded-2xl px-10 py-10 text-white"
          >
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
            <h3 className="max-w-[483.84px] font-bold text-2xl leading-[32px] mb-5">
              We've tried to build trust with nothing but a handshake.
            </h3>
            <p className="inter max-w-[472.68px] font-light text-base">
              In a world where trust is earned through transparency, we created
              a platform where every transaction is protected, every farmer is
              verified, and every buyer knows exactly what they're getting.
            </p>
          </motion.div>
        </motion.div>

        {/* Mission Text */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="inter text-[20px] font-medium leading-[32.5px] max-w-[710px] mx-auto text-center mt-[68px] text-[#4A5565]"
        >
          Our mission is simple: empower farmers with fair opportunities, give
          buyers confidence in every purchase, and build a marketplace where
          agriculture thrives on trust and technology.
        </motion.p>
      </div>
    </section>
  );
};

export default Mission;
