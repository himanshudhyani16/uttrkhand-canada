"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiCalendar, FiUsers, FiMapPin, FiAward } from "react-icons/fi";
import { BiDonateHeart } from "react-icons/bi";

const stats = [
  {
    id: 1,
    icon: FiCalendar,
    value: "50+",
    label: "Events Organized"
  },
  {
    id: 2,
    icon: FiUsers,
    value: "10,000+",
    label: "Community Members"
  },
  {
    id: 3,
    icon: FiMapPin,
    value: "25+",
    label: "Cities Across Canada"
  },
  {
    id: 4,
    icon: BiDonateHeart,
    value: "100+",
    label: "Volunteers"
  },
  {
    id: 5,
    icon: FiAward,
    value: "5+",
    label: "Years of Togetherness"
  }
];

export default function EventStats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-[#0B162C] py-12 md:py-16 relative overflow-hidden">
      
      {/* Background Subtle Trees/Mountains */}
      <div className="absolute top-0 left-0 w-[300px] h-full opacity-20 pointer-events-none z-0">
        <Image 
          src="/images/moutain1.png" 
          alt="Background Texture" 
          fill 
          className="object-cover object-left opacity-30 invert mix-blend-screen"
        />
      </div>
      <div className="absolute top-0 right-0 w-[300px] h-full opacity-20 pointer-events-none z-0 scale-x-[-1]">
        <Image 
          src="/images/moutain1.png" 
          alt="Background Texture" 
          fill 
          className="object-cover object-left opacity-30 invert mix-blend-screen"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              variants={itemVariants}
              className="flex items-center gap-4 group"
            >
              {/* Icon */}
              <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-white stroke-[1.5]" />
              </div>
              
              {/* Text Info */}
              <div className="flex flex-col">
                <span className="text-[#EE660C] font-playfair font-bold text-2xl md:text-3xl leading-tight">
                  {stat.value}
                </span>
                <span className="text-white font-inter text-xs md:text-[13px] font-medium tracking-wide">
                  {stat.label}
                </span>
              </div>

              {/* Divider (hide on last item and on mobile) */}
              {index !== stats.length - 1 && (
                <div className="hidden md:block h-12 w-[1px] bg-white/20 ml-8 lg:ml-12"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
