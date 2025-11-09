import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";



const HeroSection = () => {


  // Fade-up animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };



  return (

    <section
      className="relative w-full min-h-screen flex flex-col
       justify-center items-center text-white overflow-hidden"

      style={{
        backgroundImage: `linear-gradient(
            180deg,
            rgba(76, 175, 80, 0.6) 0%,
            rgba(76, 175, 80, 0.5) 50%,
            rgba(250, 250, 250, 1) 100%
          ),
          url('/hero.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >


      {/* CONTENT CONTAINER */}
      <div className="relative flex flex-col justify-center 
      items-center px-4 sm:px-6 lg:px-8 text-center max-w-[900px] mx-auto"
      >
        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="font-[Manrope] font-bold text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-tight md:leading-[80px] text-white drop-shadow-lg"
        >

          Empowering Nigeria&apos;s <br className="hidden sm:block" />
          Agriculture Through <br className="hidden sm:block" />
          People, Purpose <br className="hidden sm:block" />
          and Technology
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="font-[Inter] text-[16px] sm:text-[18px]
           md:text-[20px] leading-[28px] md:leading-[36px] text-white
            opacity-95 mt-6 md:mt-8 max-w-[760px]"
        >
          At GrowMetra, we believe every farmer deserves fair access to markets,
          every buyer deserves quality they can trust, and every community
          deserves to thrive through agriculture.
        </motion.p>
      </div>

      {/* Chevron Icon Animation */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-10 h-10 text-white opacity-90 
        animate-bounce" />
      </motion.div>
    </section>

    
  );
};

export default HeroSection;
