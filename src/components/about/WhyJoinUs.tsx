"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { FiCheck, FiArrowRight } from "react-icons/fi";

const reasonsList = [
  "Connect with Uttarakhandi families across Canada",
  "Build lasting friendships and networks",
  "Participate in cultural events and celebrations",
  "Support youth and educational programs",
  "Volunteer and give back to community",
  "Preserve our roots for future generations",
];

export default function WhyJoinUs() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-[#FCFBF8] py-16 md:py-24 border-t border-[#F0EBE1]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Image (Takes up 4 cols on desktop) */}
          <motion.div
            className="lg:col-span-4 w-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              {/* Using a generic placeholder if the exact image isn't available */}
              <Image
                src="/images/about-main.png"
                alt="Community Group"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Center Column: List (Takes up 5 cols on desktop) */}
          <motion.div
            className="lg:col-span-5 flex flex-col pl-0 lg:pl-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-[#EE660C] font-inter font-bold text-sm md:text-base tracking-[0.15em] uppercase mb-8">
              Why Join Us?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
              {reasonsList.map((reason, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-[22px] h-[22px] rounded-full bg-[#EE660C]/10 flex items-center justify-center flex-shrink-0 mt-[2px] group-hover:bg-[#EE660C] transition-colors duration-300">
                    <FiCheck
                      className="w-3.5 h-3.5 text-[#EE660C] group-hover:text-white transition-colors duration-300"
                      strokeWidth={3}
                    />
                  </div>
                  <p className="text-[#1A2340] font-inter text-[14px] leading-[1.5] font-medium pr-2">
                    {reason}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: CTA & Sketches (Takes up 3 cols on desktop) */}
          <motion.div
            className="lg:col-span-3 flex flex-col items-center justify-end relative w-full h-full min-h-[220px] mt-8 lg:mt-0 pb-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Background Composition */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pointer-events-none opacity-[0.8] pb-8 md:pb-12">
              {/* Mountains layered on bottom */}
              <div className="relative w-full max-w-[280px] h-[500px]">
                <Image
                  src="/images/moutain1.png"
                  alt="Mountains"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            {/* CTA Button placed on top of sketches */}
            <div className="relative z-10 mt-12 mb-5 w-full flex  justify-center  pr-0 lg:pr-2">
              <Link
                href="/join"
                className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-[#EE660C] to-[#F57C33] text-white px-8 py-3.5 rounded-lg font-inter font-bold text-[15px] shadow-[0_4px_15px_rgba(238,102,12,0.3)] hover:shadow-[0_6px_20px_rgba(238,102,12,0.4)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Join Us Today
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
