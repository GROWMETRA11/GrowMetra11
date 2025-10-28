import React from "react";
import { motion } from "framer-motion";
import heroBg from "../../assets/images/Hero bg.webp";
import icon from "../../assets/icons/SVG.svg";
import Button from "../../Components/Buttons/Button";
import verify from "../../assets/icons/verify icon.svg";
import secure from "../../assets/icons/secure payment icon.svg";
import fair from "../../assets/icons/fair pricing icon.svg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const safeties = [
    { id: verify, text: "Verified Farmers" },
    { id: secure, text: "Secure Payments" },
    { id: fair, text: "Fair Pricing" },
  ];

  const navigate = useNavigate()

  // animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      style={{ backgroundImage: `url(${heroBg})` }}
      className="bg-cover bg-center min-h-[876px] flex flex-col items-center justify-center text-center px-4 md:px-0"
    >
      <motion.div
        className="max-w-[778px] mx-auto min-h-[559px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Heading */}
        <motion.h1
          className="font-bold text-5xl md:text-[72px] pt-15 text-center mb-4"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          Connecting Farmers and{" "}
          <span className="text-green-500">Buyers with Trust</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="max-w-[695.7px] leading-[39px] inter text-xl md:text-[24px] mx-auto font-light text-center mb-10"
          variants={fadeUp}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Every harvest tells a story. Every transaction builds a future.
          GrowMetra connects Nigerian farmers with buyers who value quality,
          fairness, and transparency.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center items-center flex-wrap gap-4 mb-10"
          variants={fadeUp}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              onClick={() => navigate("/register")}
              text="Sign Up Now"
              className="text-white bg-green-500 hover:bg-transparent border border-green-500 hover:text-green-500 transition-all duration-300"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              text="Explore Marketplace"
              icon={icon}
              onClick={() => alert("Clicked!")}
            />
          </motion.div>
        </motion.div>

        {/* Link */}
        <motion.a
          href="#"
          className="inter font-medium text-[14px] underline flex justify-center items-center mb-10"
          variants={fadeUp}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          See How it Works
        </motion.a>

        {/* Safety Icons */}
        <motion.div
          className="flex justify-center items-center gap-12 flex-wrap"
          variants={fadeUp}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {safeties.map((safety, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={safety.id} alt="safety icon" className="w-6 h-6" />
              <p className="font-medium">{safety.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
