"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    id: 1,
    question: "How can I become a member?",
    answer:
      "You can become a member by visiting our Join Us page and filling out the membership registration form. We offer various membership options to suit your needs.",
  },
  {
    id: 2,
    question: "Can I sponsor an event or initiative?",
    answer:
      "Absolutely! We welcome sponsorships from local businesses and individuals. Please reach out to us via the contact form or email us directly to discuss sponsorship packages.",
  },
  {
    id: 3,
    question: "How do I volunteer with the association?",
    answer:
      "We are always looking for passionate volunteers. You can sign up through our Volunteer section on the Join Us page, or simply send us a message using the form above.",
  },
  {
    id: 4,
    question: "How do I contact the committee?",
    answer:
      "You can reach the committee by using the contact form on this page, or by emailing our official support email address. We aim to respond within 24-48 business hours.",
  },
  {
    id: 5,
    question: "Do you organize cultural events?",
    answer:
      "Yes, we organize numerous cultural events throughout the year to celebrate Uttarakhandi heritage, including major festivals, community meetups, and cultural showcases.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#FCFBF8] py-20 md:py-28 relative overflow-hidden">
      {/* Background Mandala Sketches */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-[300px] w-[600px] h-[600px] opacity-[0.5] pointer-events-none z-0">
        <Image
          src="/images/mandala1.png"
          alt="Mandala Pattern"
          fill
          className="object-contain"
          style={{ animation: "rotateSlow 35s linear infinite" }}
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-[300px] w-[600px] h-[600px] opacity-[0.5] pointer-events-none z-0">
        <Image
          src="/images/mandala1.png"
          alt="Mandala Pattern"
          fill
          className="object-contain"
          style={{ animation: "rotateSlow 35s linear infinite" }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              <div className="h-[1px] w-8 sm:w-12 bg-[#EE660C]"></div>
              <span className="text-[#EE660C] text-xs">❖</span>
            </div>
            <h2 className="text-[#1A2340] font-playfair font-bold text-2xl md:text-3xl lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="flex items-center gap-1">
              <span className="text-[#EE660C] text-xs">❖</span>
              <div className="h-[1px] w-8 sm:w-12 bg-[#EE660C]"></div>
            </div>
          </div>
        </motion.div>

        {/* FAQs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-transparent border border-gray-200/80 rounded-lg overflow-hidden h-fit transition-all duration-300 ${openId === faq.id ? "bg-white shadow-md border-transparent" : "hover:bg-white/50 hover:border-gray-300"}`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
              >
                <span className="text-[#1A2340] font-inter font-bold text-[14.5px]">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#1A2340] shrink-0 ml-4"
                >
                  <FiChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-1 border-t border-gray-100">
                      <p className="text-[#4A5568] font-inter text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
