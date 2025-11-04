import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";



const GrowNigeriaFuture = () => {


  // Scroll-based parallax animation
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 120]); 

  return (


    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background — fully covers all screen sizes */}
      <motion.div
        style={{
          y,
          backgroundImage: "url('/together.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[150vw] h-[150vh] will-change-transform"
      />

      {/* Overlay for readability */}

      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/*  Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-center 
                   text-center text-white px-6 md:px-12 lg:px-20 
                   max-w-[1100px] mx-auto"
      >


        {/*  Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="font-[Manrope] font-bold text-3xl sm:text-4xl md:text-5xl 
                     lg:text-6xl leading-snug mb-6"
        >


          Together, We're <br /> Growing Nigeria's Future
        </motion.h2>

        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-[Inter] text-base sm:text-lg md:text-xl 
                     leading-relaxed text-white/95 mb-3"
        >
          Whether you're a farmer, a buyer, or a partner — GrowMetra is your home
          for trust, trade, and growth.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="font-[Inter] text-sm sm:text-base md:text-lg 
                     leading-relaxed text-white/90 mb-10"
        >
          Join a community that's building the future of agriculture, one
          connection at a time.
        </motion.p>
        

        {/*  Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >


          <button
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#4CAF50] 
                       text-white font-[Inter] font-semibold text-base 
                       md:text-lg leading-7 shadow-lg hover:bg-[#3e9941] 
                       hover:scale-105 transition-all duration-300"
          >
            Join GrowMetra Today
          </button>

          <button
            className="w-full sm:w-auto px-8 py-3 rounded-full border-2 border-white 
                       bg-transparent text-white font-[Inter] font-semibold text-base 
                       md:text-lg leading-7 shadow-lg hover:bg-white hover:text-[#4CAF50] 
                       hover:scale-105 transition-all duration-300"
          >
            Explore Marketplace
          </button>
        </motion.div>



        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="font-[Inter] text-xs sm:text-sm md:text-base text-white/80"
        >
          Be part of a movement transforming how agriculture works in Nigeria.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default GrowNigeriaFuture;
