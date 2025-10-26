import React from "react";
import { motion } from "framer-motion";
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

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="w-full overflow-hidden">
      <img src={topDesign} alt="topDesign" />

      <motion.div
        className="w-full max-w-[1024px] min-h-[1066.5px] py-12 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Header */}
        <motion.div
          className="text-center"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold text-6xl leading-[60px] mb-6">
            Your Journey Starts Here
          </h2>
          <p className="inter font-normal text-md leading-[32.5px] mb-20">
            Three simple steps to transform how you trade
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-[63px] mb-[83px]"
          variants={fadeUp}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {textNum.map((item, index) => (
            <motion.div
              key={index}
              className="text-center flex flex-col justify-center items-center"
              variants={fadeUp}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={item.icon} alt={item.text} />
              <h2 className="font-bold mt-4">{item.text}</h2>
              <p className="inter font-normal text-[16px] max-w-[287.8px] leading-[26px] mt-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-center items-center text-white gap-6 md:gap-10">
          <motion.div
            className="w-[512px] h-[512px] rounded-xl shadow-lg bg-gray-300"
            variants={fadeLeft}
            transition={{ duration: 0.8 }}
          ></motion.div>

          <motion.div
            className="bg-green-500 w-[512px] h-[512px] rounded-xl shadow-lg px-12 py-[150px]"
            variants={fadeRight}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-bold text-3xl leading-[36px] mb-5">
              Technology meets tradition
            </h3>
            <p className="inter text-[18.5px] font-normal leading-[29.25px] mb-[30px]">
              We've designed GrowMetra to be simple enough for anyone to use,
              yet powerful enough to transform your entire business.
            </p>
            <p className="inter font-normal text-[17.5px] leading-[24px]">
              No complicated processes. No hidden fees. Just honest trading that
              works for everyone.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Journey;
