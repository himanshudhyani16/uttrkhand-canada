"use client";

import { motion, Variants } from "framer-motion";
import { FaUsers, FaHome, FaCalendarAlt, FaHandHoldingHeart } from "react-icons/fa";
import Image from "next/image";

const statsData = [
  {
    id: 1,
    icon: FaUsers,
    number: "500+",
    label: "Members",
    color: "#EE660C", // Saffron/Orange
  },
  {
    id: 2,
    icon: FaHome,
    number: "50+",
    label: "Families",
    color: "#39722D", // Green
  },
  {
    id: 3,
    icon: FaCalendarAlt,
    number: "15+",
    label: "Events Organized",
    color: "#EE660C", // Saffron/Orange
  },
  {
    id: 4,
    icon: FaHandHoldingHeart,
    number: "5+",
    label: "Years of Community Service",
    color: "#D32F2F", // Red
  },
];

export default function AboutStats() {
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
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-[#111A31] relative overflow-hidden py-12 md:py-16">
      
      {/* Background Mountain Graphics */}
      <div className="absolute left-[-150px] top-42 -translate-y-1/2 w-[600px] h-[400px] opacity-[0.2] pointer-events-none mix-blend-screen hidden md:block">
        <Image src="/images/blueMoutain.png" alt="Mountain Sketch" fill className="object-cover" />
      </div>
      <div className="absolute right-[-150px] top-46 -translate-y-1/2 w-[600px] h-[400px] opacity-[0.2] pointer-events-none mix-blend-screen hidden md:block">
        <Image src="/images/blueMoutain.png" alt="Mountain Sketch" fill className="object-cover" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="flex items-center justify-center sm:justify-start lg:justify-center gap-5 group"
            >
              {/* Circular Icon Container */}
              <div
                className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-transform duration-300 group-hover:scale-105"
                style={{
                  borderColor: stat.color,
                  backgroundColor: `rgba(255, 255, 255, 0.02)`,
                  boxShadow: `inset 0 0 20px rgba(0,0,0,0.2), 0 0 15px ${stat.color}15`,
                }}
              >
                <stat.icon
                  className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: stat.color }}
                />
              </div>

              {/* Text Info */}
              <div className="flex flex-col">
                <span className="text-white font-playfair font-bold text-3xl md:text-4xl tracking-wide mb-1 leading-none">
                  {stat.number}
                </span>
                <span className="text-gray-300 font-inter text-[13px] md:text-[14px] leading-tight max-w-[140px]">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
