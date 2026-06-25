"use client";

import { motion, Variants } from "framer-motion";
import { FiCalendar, FiUsers, FiGlobe, FiHeart, FiHome } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";
import Image from "next/image";

const timelineData = [
  {
    year: "2005",
    color: "#EE660C", // Saffron
    icon: FiCalendar,
    description: "First community gathering in Canada with a small group of Uttarakhandis.",
  },
  {
    year: "2010",
    color: "#1A2340", // Navy
    icon: FiHeart,
    description: "Cultural programs and festivals were initiated.",
  },
  {
    year: "2015",
    color: "#EE660C", // Saffron
    icon: FiUsers,
    description: "Membership expansion and youth engagement programs began.",
  },
  {
    year: "2020",
    color: "#1A2340", // Navy
    icon: FiGlobe,
    description: "Online community growth and virtual events started during pandemic.",
  },
  {
    year: "2025",
    color: "#EE660C", // Saffron
    icon: FaBuilding,
    description: "Strong community presence across Canada with 500+ members.",
  },
];

export default function OurJourney() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-[#E8651A]/10 py-16 md:py-20 relative overflow-hidden">
      
      {/* Faint Background Sketches */}
      <div className="absolute left-[0] top-1/2 w-[400px] h-[300px] opacity-[0.30] pointer-events-none mix-blend-multiply hidden md:block">
        <Image src="/images/badrinath.png" alt="Temple Sketch" fill className="object-contain object-bottom" />
      </div>
      <div className="absolute right-[-50px] bottom-0 w-[500px] h-[350px] opacity-[0.05] pointer-events-none mix-blend-multiply hidden md:block">
        <Image src="/images/blueMoutain.png" alt="Mountain Sketch" fill className="object-contain object-bottom" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-20 md:mb-28">
          <span className="text-[#EE660C] text-xl font-serif">❖</span>
          <h2 className="text-[#1A2340] font-playfair font-bold text-2xl md:text-3xl tracking-widest uppercase">
            Our Journey
          </h2>
          <span className="text-[#EE660C] text-xl font-serif">❖</span>
        </div>

        {/* Timeline Container */}
        <motion.div
          className="relative w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Horizontal Dotted Line (Desktop) */}
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] border-t-2 border-dashed border-[#D1C8B8] z-0" />
          
          {/* Vertical Dotted Line (Mobile) */}
          <div className="block lg:hidden absolute top-0 left-[40px] md:left-[50px] h-full w-[2px] border-l-2 border-dashed border-[#D1C8B8] z-0" />

          {/* Timeline Items */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-stretch relative z-10 gap-10 lg:gap-4">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                variants={itemVariants}
                className="flex flex-row lg:flex-col items-center lg:items-center relative w-full lg:w-1/5 group"
              >
                {/* Mobile Tiny Dot on the line */}
                <div 
                  className="block lg:hidden absolute left-[37px] md:left-[47px] w-2 h-2 rounded-full z-0"
                  style={{ backgroundColor: item.color }}
                />

                {/* Desktop Tiny Dot on the line (to the left of the circle) */}
                <div 
                  className="hidden lg:block absolute top-[37px] left-[10%] w-2 h-2 rounded-full z-0"
                  style={{ backgroundColor: item.color }}
                />

                {/* Icon Circle */}
                <div className="flex-shrink-0 flex items-center justify-center relative w-20 h-20 md:w-[80px] md:h-[80px] z-10 ml-0 lg:ml-auto lg:mr-auto mb-0 lg:mb-6">
                  <div 
                    className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] group-hover:scale-110 transition-transform duration-300 border-2"
                    style={{ borderColor: item.color }}
                  >
                    <item.icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col items-start lg:items-center text-left lg:text-center ml-6 lg:ml-0 mt-2 lg:mt-0 w-full pr-4 lg:pr-0">
                  <h3 
                    className="font-playfair font-bold text-2xl md:text-3xl mb-3 transition-colors duration-300"
                    style={{ color: item.color }}
                  >
                    {item.year}
                  </h3>
                  <p className="text-[#4A4A4A] font-inter text-[14px] leading-[1.6] max-w-[220px]">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
