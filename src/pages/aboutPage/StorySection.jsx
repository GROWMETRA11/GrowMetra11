import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const StorySection = () => {
  const sectionRef = useRef(null);
  const [dividerStyle, setDividerStyle] = useState({});


  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      const cards = section.querySelectorAll(".story-card");
      if (cards.length > 0) {
        const firstCard = cards[0].getBoundingClientRect();
        const lastCard = cards[cards.length - 1].getBoundingClientRect();
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;

        const startY = firstCard.top + window.scrollY - sectionTop;
        const endY = lastCard.bottom + window.scrollY - sectionTop;


        setDividerStyle({
          top: `${startY}px`,
          height: `${endY - startY}px`,
        });
      }
    }
  }, []);



  return (

    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-white flex flex-col 
      items-center text-center py-20 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 
      overflow-visible"
    >
      
      {/* HEADER */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="font-[Manrope] font-bold text-[28px] sm:text-[32px] 
        md:text-[40px] lg:text-[48px] leading-tight text-[#333333] mb-8 
        max-w-[940px] mx-auto px-2"
      >
        Born from the Fields. Built for the Future.
      </motion.h2>

      {/* INTRO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-24 max-w-[900px] mx-auto px-2"
      >
        <p className="font-[Inter] text-[16px] sm:text-[18px] md:text-[20px] 
        leading-[30px] md:leading-[32.5px] text-[#364153] mb-6">
          GrowMetra started as a response to a gap — where farmers struggled to
          gain fair access to markets, technology, and opportunities.
        </p>

        <p className="font-[Inter] text-[16px] sm:text-[18px] md:text-[20px] 
        leading-[30px] md:leading-[32.5px] text-[#364153]">
          We saw this challenge not as a barrier but as an opportunity to build a
          bridge — uniting farmers, buyers, and innovators.
        </p>
      </motion.div>

      {/* DIVIDER LINE */}
      <div
        className="hidden md:block absolute left-1/2 transform 
        -translate-x-1/2 bg-[rgba(76,175,80,0.2)]"
        style={{
          width: "4px",
          ...dividerStyle,
          transition: "all 0.3s ease-in-out",
          zIndex: 5,
        }}
      />

      {/* STORY CARDS */}
      {[
        {
          id: 1,
          title: "The Challenge",
          text: "Nigerian farmers worked tirelessly in their fields, yet many faced limited access to markets, technology, and support systems.",
          img: "/challenge.jpg",
          reverse: true,
        },
        {
          id: 2,
          title: "The Spark",
          text: "We saw this challenge not as a barrier but as an opportunity to build something meaningful — connecting farmers, buyers, and innovators.",
          img: "/spark.jpg",
          reverse: false,
        },
        {
          id: 3,
          title: "The Change",
          text: "Today, GrowMetra is transforming agriculture across Nigeria by empowering farmers with access to data, markets, and technology for sustainable growth.",
          img: "/change.jpg",
          reverse: true,
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: i * 0.2 }}
          viewport={{ once: true }}
          className={`story-card w-full max-w-[1600px] mx-auto flex flex-col ${
            item.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center justify-between gap-12 md:gap-24 mb-24 relative z-10`}
        >
          {/* CARD */}
          <article
            className="relative shadow-lg rounded-2xl bg-[#FAFAFA] w-full 
            max-w-[560px] p-6 sm:p-8 text-left hover:-translate-y-2 
            transition-transform duration-300"
            style={{
              boxShadow:
                "0px 8px 10px -6px rgba(0,0,0,0.1), 0px 20px 25px -5px rgba(0,0,0,0.1)",
            }}
          >
            <div
              className="absolute flex items-center justify-center text-white 
              font-[Manrope] font-bold"
              style={{
                width: "48px",
                height: "48px",
                top: "32px",
                left: "32px",
                borderRadius: "9999px",
                backgroundColor: "rgba(76,175,80,1)",
                fontSize: "20px",
                lineHeight: "28px",
              }}
            >
              {item.id}
            </div>

            <div className="pl-[80px] sm:pl-[96px] pt-[4px]">
              <h3 className="font-[Manrope] font-bold text-[22px] sm:text-[24px] leading-[32px] text-[#333333] mb-3">
                {item.title}
              </h3>

              <p className="font-[Inter] text-[15px] sm:text-[16px] leading-[26px] text-[#364153]">
                {item.text}
              </p>
            </div>
          </article>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[16px] bg-[#FAFAFA] w-full md:w-[560px] 
            h-[220px] sm:h-[300px] md:h-[360px] xl:h-[420px] shadow-lg"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url('${item.img}')`,
            }}
          ></motion.div>
        </motion.div>
      ))}
    </section>
  );
};

export default StorySection;
