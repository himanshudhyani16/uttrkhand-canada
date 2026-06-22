"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiTarget, FiFlag, FiUsers } from "react-icons/fi";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col space-y-8"
          >
            <div>
              <motion.h3 variants={fadeInVariants} className="text-[#EE660C] font-bold text-[17px] font-inter tracking-wide mb-3">
                Who We Are
              </motion.h3>
              <motion.h2 variants={fadeInVariants} className="text-[#1A2340]  text-4xl md:text-[44px] font-gelasio font-bold leading-tight">
                About Our Association
              </motion.h2>
            </div>

            <div className="space-y-10 mt-6">
              {/* Feature 1 */}
              <motion.div variants={fadeInVariants} className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-[60px] h-[60px] rounded-full border-2 border-[#1A2340]/20 flex items-center justify-center text-[#1A2340] bg-transparent shadow-sm">
                    <FiTarget className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h4 className="text-[#1A2340] text-[20px] font-bold font-inter mb-2">Our Vision</h4>
                  <p className="text-[#1A2340]/80 font-inter text-[15.5px] leading-[1.6]">
                    To be a strong and united Uttarakhandi community across Canada.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div variants={fadeInVariants} className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-[60px] h-[60px] rounded-full border-2 border-[#1A2340]/20 flex items-center justify-center text-[#1A2340] bg-transparent shadow-sm">
                    <FiUsers className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h4 className="text-[#1A2340] text-[20px] font-bold font-inter mb-2">Our Mission</h4>
                  <p className="text-[#1A2340]/80 font-inter text-[15.5px] leading-[1.6]">
                    To preserve our culture, support our members and promote Uttarakhand&apos;s heritage and values.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div variants={fadeInVariants} className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-[60px] h-[60px] rounded-full border-2 border-[#1A2340]/20 flex items-center justify-center text-[#1A2340] bg-transparent shadow-sm">
                    <FiFlag className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h4 className="text-[#1A2340] text-[20px] font-bold font-inter mb-2">Our Goal</h4>
                  <p className="text-[#1A2340]/80 font-inter text-[15.5px] leading-[1.6]">
                    To create opportunities, organize events and build a lasting legacy for future generations.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            {/* Top Image (Large) */}
            <div className="w-full h-[340px] rounded-2xl overflow-hidden shadow-lg relative group">
              <Image 
                src="/images/about-main.png"
                alt="Uttarakhand Community Gathering"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-in-out"
              />
            </div>
            
            {/* Bottom 3 Images */}
            <div className="grid grid-cols-3 gap-4 h-[180px]">
              <div className="rounded-2xl overflow-hidden shadow-md relative group">
                <Image 
                  src="/images/about-sub1.png"
                  alt="Traditional Dance"
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md relative group">
                <Image 
                  src="/images/about-sub2.png"
                  alt="Cultural Performance"
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md relative group">
                <Image 
                  src="/images/about-sub3.png"
                  alt="Festive Celebration"
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-in-out"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
