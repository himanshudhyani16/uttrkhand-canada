"use client";

import { motion, Variants } from "framer-motion";
import { FiTarget, FiCheck } from "react-icons/fi";
import { FaMountain, FaStar } from "react-icons/fa";
import Image from "next/image";

export default function OurPurpose() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-[#FCFBF8] py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className="text-[#EE660C] text-xl font-serif">❖</span>
          <h2 className="text-[#1A2340] font-playfair font-bold text-2xl md:text-3xl tracking-widest uppercase">
            Our Purpose
          </h2>
          <span className="text-[#EE660C] text-xl font-serif">❖</span>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFDFB] border border-[#F0EBE1] rounded-xl p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
          >
            {/* Background Mountain Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-[60px] opacity-[0.08] pointer-events-none">
              <Image src="/images/blueMoutain.png" alt="Mountain Decoration" fill className="object-cover object-bottom" />
            </div>

            <div className="flex items-start gap-5 relative z-10">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#F57C33] to-[#EE660C] p-1 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full border-2 border-white/30 flex items-center justify-center">
                   <FiTarget className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#EE660C] font-playfair font-bold text-2xl mb-3">Our Mission</h3>
                <p className="text-[#4A4A4A] font-inter text-[15px] leading-relaxed">
                  To preserve and promote Uttarakhand&apos;s cultural heritage while fostering a strong and supportive community in Canada.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFDFB] border border-[#F0EBE1] rounded-xl p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
          >
            {/* Background Mountain Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-[60px] opacity-[0.08] pointer-events-none">
              <Image src="/images/blueMoutain.png" alt="Mountain Decoration" fill className="object-cover object-bottom" />
            </div>

            <div className="flex items-start gap-5 relative z-10">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#273562] to-[#1A2340] p-1 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full border-2 border-white/30 flex items-center justify-center">
                   <FaMountain className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#1A2340] font-playfair font-bold text-2xl mb-3">Our Vision</h3>
                <p className="text-[#4A4A4A] font-inter text-[15px] leading-relaxed">
                  To build a vibrant, united and thriving Uttarakhandi community for future generations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Goals Card */}
          <motion.div
            variants={cardVariants}
            className="bg-[#FFFDFB] border border-[#F0EBE1] rounded-xl p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group md:col-span-2 lg:col-span-1"
          >
            {/* Background Mountain Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-[60px] opacity-[0.08] pointer-events-none">
              <Image src="/images/blueMoutain.png" alt="Mountain Decoration" fill className="object-cover object-bottom" />
            </div>

            <div className="flex items-start gap-5 relative z-10">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#4D8C40] to-[#39722D] p-1 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full border-2 border-white/30 flex items-center justify-center">
                   <FaStar className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <h3 className="text-[#39722D] font-playfair font-bold text-2xl mb-4">Our Goals</h3>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "Cultural Preservation",
                    "Community Development",
                    "Youth Engagement",
                    "Volunteer Activities",
                    "Educational Programs",
                  ].map((goal, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FiCheck className="w-5 h-5 text-[#39722D] flex-shrink-0" strokeWidth={3} />
                      <span className="text-[#4A4A4A] font-inter text-[14px] font-medium">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
