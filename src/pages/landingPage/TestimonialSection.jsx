import React from "react";
import { motion } from "framer-motion";
import love from "../../assets/icons/love SVG.svg"

//  Import your images
import farmer1 from "../../assets/images/Nigerian woman farmer with fresh tomatoes.webp";
import chef from "../../assets/images/Nigerian businessman buyer inspecting farm produce.webp";
import field from "../../assets/images/Nigerian male farmer working in green farm.webp";

const TestimonialSection = () => {
  const testimonials = [
    {
      image: farmer1,
      badgeText: "Income increased by 50%",
      badgeColor: "bg-green-600",
      quote:
        "I used to wake up at 3 AM, travel 4 hours to the market, and still sell my tomatoes for less than they’re worth. GrowMetra changed everything. Now buyers come to me and I get fair prices. My children are in better schools because of this platform.",
      name: "Mary Okafor",
      role: "Tomato Farmer",
      location: "Ogun State",
      experience: "5 years farming",
    },
    {
      image: chef,
      badgeText: "Reduced food waste by 40%",
      badgeColor: "bg-yellow-500",
      quote:
        "My restaurant serves 200 customers daily. Before GrowMetra, I never knew if my produce would arrive fresh or on time. Now I have direct relationships with farmers I trust. This quality is consistent, and my customers notice the difference.",
      name: "Kehinde Adebayo",
      role: "Restaurant Owner",
      location: "Lagos",
      experience: "15 years in business",
    },
    {
      image: field,
      badgeText: "Created 6 local jobs",
      badgeColor: "bg-green-500",
      quote:
        "As a young farmer, I struggled to be taken seriously. GrowMetra gave me a platform where my produce speaks for itself. I've built a reputation, expanded my farm, and now I employ 6 people from my community. This is more than a marketplace — it’s a movement.",
      name: "Ibrahim Musa",
      role: "Vegetable Farmer",
      location: "Kano State",
      experience: "2 years farming",
    },
  ];

  return (
    <motion.section
      className="bg-gray-50 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[250.52px] mx-auto flex gap-3 px-4  py-2 justify-center items-center text-green-400 rounded-full bg-green-200">
        <img src={love} alt="love logo" />
        <p>Real Stories, Real Impact</p>
      </div>
      <h2 className="text-6xl font-bold text-center my-6 ">Lives Transformed Through Connection</h2>
      <p className="inter font-normal text-[20px] max-w-[650px] text-center mx-auto mb-[84.5px] ">
        Every transaction tells a story. Every connection changes a life. These
        are the voices of our community.
      </p>
      <section className="max-w-[1152px] w-fill mx-auto px-4 flex  justify-center gap-8 mb-16">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col gap-4 max-w-sm w-full hover:shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            {/* Image and Badge */}
            <div className="relative">
              <motion.img
                src={t.image}
                alt={t.name}
                className="w-full h-48 object-cover rounded-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.span
                className={`absolute top-3 left-3 text-sm text-white px-3 py-1 rounded-full ${t.badgeColor}`}
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t.badgeText}
              </motion.span>
            </div>

            {/* Quote */}
            <p className="text-gray-700 inter font-normal leading-[26px] text-[16px] ">
              “{t.quote}”
            </p>

            {/* Name and Details */}
            <div>
              <h3 className="font-semibold text-gray-900">{t.name}</h3>
              <p className="text-sm text-green-700">
                {t.role}, {t.location}
              </p>
              <p className="text-xs text-gray-400">{t.experience}</p>
            </div>
          </motion.div>
        ))}
      </section>
      <p className="text-center mb-6">Join thousands of farmers and buyers building a better future</p>
      <div className="flex gap-2 items-center justify-center">
        <div className="flex">
          <img className="w-10 h-10 rounded-full" src={farmer1} alt="farmer" />
          <img className="w-10 h-10 rounded-full" src={field} alt="field" />
          <img className="w-10 h-10 rounded-full" src={chef} alt="chef" />
        </div>
        <p>5,000+ active users</p>
      </div>
    </motion.section>
  );
};

export default TestimonialSection;
