import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does GrowMetra ensure safe payments?",
    answer:
      "GrowMetra uses secure escrow payments — funds are only released when both the buyer and seller confirm satisfaction. All transactions are encrypted and monitored for safety.",
  },
  {
    question: "Is GrowMetra only for Nigerian farmers?",
    answer:
      "Currently, GrowMetra focuses on connecting Nigerian farmers and buyers, but we plan to expand across Africa soon.",
  },
  {
    question: "How can I join as a farmer?",
    answer:
      "Simply sign up on our website, complete your profile, and verify your farm. Once verified, you can start listing your produce immediately.",
  },
  {
    question: "What types of produce can I sell or buy?",
    answer:
      "You can trade a wide variety of farm produce including tomatoes, maize, yams, rice, and more. New categories are added regularly.",
  },
  {
    question: "What makes GrowMetra different from other platforms?",
    answer:
      "GrowMetra combines direct farmer access, transparent pricing, logistics support, and digital payments all in one trusted ecosystem.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFFDF5] py-20 px-6">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Questions? We’ve Got Answers.
        </h2>
        <p className="text-gray-500 mt-2">
          Everything you need to know to get started
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-[#FFF7D4] rounded-lg shadow-sm overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="flex justify-between items-center w-full px-6 py-4 text-left text-gray-900 font-medium"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-700" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className="px-6 pb-4 text-gray-600 text-sm"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
