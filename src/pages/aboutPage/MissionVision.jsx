import React from "react";
import { motion } from "framer-motion";




const MissionVisionSection = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (

    <section
      className="relative w-full min-h-screen flex justify-center 
      items-center overflow-hidden py-16 px-6 md:px-12 lg:px-24"
      style={{
        background:
          "linear-gradient(135deg, rgba(76, 175, 80, 0.5) 0%, rgba(255,255,255,1) 50%, rgba(255, 235, 59, 0.5) 100%)",
      }}
    >


      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row justify-between items-center
         w-full max-w-[1600px] xl:max-w-[1800px] gap-16"
      >



        {/*  Text Content */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col justify-center text-left max-w-[700px]
           text-[#364153]"
        >


          <motion.h3
            variants={fadeUp}
            custom={0.2}
            className="font-[Manrope] text-2xl sm:text-3xl md:text-[30px]
             leading-tight text-[#4CAF50] mb-4"
          >


            Our Mission
          </motion.h3>



          <motion.p
            variants={fadeUp}
            custom={0.4}
            className="font-[Inter] text-base sm:text-lg md:text-[18px] 
            leading-relaxed mb-12"
          >
            To empower Nigerian farmers and buyers through a transparent,
            tech-driven marketplace that promotes fairness, trust, and
            sustainability.
          </motion.p>

          <motion.h3
            variants={fadeUp}
            custom={0.6}
            className="font-[Manrope] text-2xl sm:text-3xl md:text-[30px] 
            leading-tight text-[#4CAF50] mb-4"
          >
            Our Vision
          </motion.h3>

          <motion.p
            variants={fadeUp}
            custom={0.8}
            className="font-[Inter] text-base sm:text-lg md:text-[18px]
             leading-relaxed"
          >
            To become Africa’s leading agri-marketplace — transforming
            agriculture into a connected, trusted, and thriving ecosystem where
            everyone grows together.
          </motion.p>
        </motion.div>

        {/*   Image Card */}
        <motion.div
          variants={fadeUp}
          custom={1}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="rounded-[16px] w-full max-w-[650px] h-[300px]
           sm:h-[400px] md:h-[500px] lg:h-[550px] bg-cover bg-center shadow-2xl"

          style={{
            backgroundImage: "url('/vision.jpg')",
            boxShadow:
              "0px 8px 10px -6px rgba(0,0,0,0.1), 0px 20px 25px -5px rgba(0,0,0,0.15)",
          }}
        ></motion.div>

      </motion.div>
      
    </section>
  );
};

export default MissionVisionSection;
