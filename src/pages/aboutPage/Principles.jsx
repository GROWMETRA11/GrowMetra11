import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Handshake, Lightbulb, Leaf, Users } from "lucide-react";


const PrinciplesSection = () => {

  const principles = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
      title: "Trust",
      text: "Verified farmers and transparent processes form the foundation of every trade.",
      bg: "rgba(76,175,80,0.125)",
    },
    {
      icon: <Handshake className="w-8 h-8 text-green-600" />,
      title: "Fairness",
      text: "Direct connections ensure farmers earn what they deserve.",
      bg: "rgba(76,175,80,0.125)",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Innovation",
      text: "Using modern technology to simplify trade and strengthen relationships.",
      bg: "rgba(255,235,59,0.125)",
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Sustainability",
      text: "Building systems that support long-term growth and responsible practices.",
      bg: "rgba(76,175,80,0.125)",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Community",
      text: "Collaboration and shared growth across Nigeria’s agriculture network.",
      bg: "rgba(76,175,80,0.125)",
    },
  ];



  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };



  return (

    <section className="w-full bg-white py-20 px-6 md:px-12
     lg:px-24 overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto text-center">

        {/* 🔹 Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px]
           font-[Manrope] font-bold leading-tight text-[#333333]"
        >
          The Principles That Drive Everything We Do
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="text-[15px] sm:text-[16px] md:text-[18px] 
          font-[Inter] font-normal text-[#4A5565] leading-[28px]
           mt-6 max-w-[700px] mx-auto"
        >
          Our values guide every decision, every feature, and every interaction
          on the GrowMetra platform.
        </motion.p>

        {/*  Animated Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
           xl:grid-cols-5 gap-8 mt-16 justify-items-center"
        >

          {principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index + 2}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { type: "spring", stiffness: 150 },
              }}
              className="w-full max-w-[360px] bg-[#FAFAFA] rounded-[16px]
               shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] text-left p-8 
               transition-transform duration-300"
            >

              <div
                className="w-16 h-16 rounded-full flex items-center 
                justify-center"
                style={{ backgroundColor: principle.bg }}
              >
                {principle.icon}
              </div>
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-[Manrope] font-bold text-[#333333] mt-6">
                {principle.title}
              </h3>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] font-[Inter] text-[#364153] leading-[26px] mt-3">
                {principle.text}
              </p>
            </motion.div>


          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default PrinciplesSection;
