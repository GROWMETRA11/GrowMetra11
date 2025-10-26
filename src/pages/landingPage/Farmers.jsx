import React from "react";
import { motion } from "framer-motion";
import Cards from "../../Components/Cards/Cards";
import farmerImg1 from "../../assets/images/Nigerian woman farmer with fresh tomatoes.webp";
import farmerImg2 from "../../assets/images/Nigerian male farmer working in green farm.webp";
import buyerImg from "../../assets/images/Nigerian businessman buyer inspecting farm produce.webp";

import icon1 from "../../assets/icons/Overlay3.svg";
import icon2 from "../../assets/icons/Overlay (1).svg";
import icon3 from "../../assets/icons/Overlay (2).svg";
import icon4 from "../../assets/icons/Overlay.svg";
import Button from "../../Components/Buttons/Button";

const Farmers = () => {
  const securities = [
    { icon: icon1, id: "Verified Network", text: "Every farmer thoroughly verified for quality" },
    { icon: icon2, id: "Secure Escrow", text: "Protected payments until delivery confirmed" },
    { icon: icon3, id: "Smart Dashboard", text: "Manage listings and track sales effortlessly" },
    { icon: icon4, id: "Fast Delivery", text: "Reliable logistics across Nigeria" },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="w-full py-[96px] px-3 overflow-hidden">
      <div className="max-w-[1152px] w-full mx-auto">
        {/* Header */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-[550px] mx-auto font-bold text-[60px] leading-[60px] mb-[13px] text-center"
        >
          Built for Farmers. Trusted by Buyers.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="inter text-[20px] font-normal leading-[32.5px] text-center mb-20"
        >
          Everything you need to trade with confidence and grow together
        </motion.p>

        {/* Farmer Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-16"
        >
          {[farmerImg1, farmerImg2, buyerImg].map((img, index) => (
            <motion.div key={index} variants={fadeUp} custom={index + 2}>
              <Cards
                image={img}
                title={
                  index === 0
                    ? "For Agribusinesses"
                    : index === 1
                    ? "For Cooperatives"
                    : "For Buyers & Partners"
                }
                description={
                  index === 0
                    ? "List your produce, reach verified buyers, and grow your business with transparent pricing"
                    : index === 1
                    ? "Manage multiple farms, track inventory, and connect with bulk buyers seamlessly"
                    : "Source quality produce directly from verified farmers with secure payment protection"
                }
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Security Icons */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 mb-[66px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {securities.map((security, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index + 3}
              className="text-center"
            >
              <img className="mx-auto w-10 h-10 mb-2" src={security.icon} alt="Security Icon" />
              <div className="font-semibold text-sm inter">{security.id}</div>
              <div className="font-medium inter">{security.text}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          className="flex flex-col items-center justify-center"
        >
          <p className="text-center font-normal text-[18px] mb-6">
            See what's available in the marketplace right now
          </p>
          <Button icon text="Explore Marketplace" />
        </motion.div>
      </div>
    </section>
  );
};

export default Farmers;
