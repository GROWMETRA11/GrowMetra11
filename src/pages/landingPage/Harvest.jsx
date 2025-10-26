import React from "react";
import { motion } from "framer-motion";
import Btn from "../../Components/Buttons/Button";

const Harvest = () => {
  // Reusable fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full min-h-[624px] flex justify-center items-center bg-[#333333] text-white py-32 px-3 overflow-hidden">
      <motion.div
        className="max-w-[896px] mx-auto flex flex-col items-center justify-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-[48px] md:text-[60px] max-w-[683.56px] mb-[34px] font-bold leading-[1.2]"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          Every Harvest Deserves{" "}
          <span className="text-green-500">A Fair Chance.</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="inter text-lg md:text-2xl font-normal max-w-[623.72px] mb-[53px]"
          variants={fadeUp}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Join thousands of farmers and buyers building a more transparent,
          sustainable future for Nigerian agriculture.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center items-center gap-3"
          variants={fadeUp}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Btn className="bg-green-400 text-white" text="Start Your Journey" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Btn icon text="Browse Marketplace" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Harvest;
