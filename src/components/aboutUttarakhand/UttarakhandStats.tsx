"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import { GiMountains, GiTempleDoor, GiMusicalNotes } from "react-icons/gi";

const stats = [
  {
    id: 1,
    icon: <GiMountains className="w-12 h-12 text-white opacity-90" />,
    value: "13",
    title: "Districts",
    subtitle: "Rich in Natural Beauty",
  },
  {
    id: 2,
    icon: (
      <svg className="w-12 h-12 text-white opacity-95 stroke-[1.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* Flag */}
        <path d="M12 2v3" />
        <path d="M12 2l4 1.5-4 1.5" />
        {/* Top Dome */}
        <ellipse cx="12" cy="6" rx="2" ry="1" />
        {/* Spire Tiers */}
        <path d="M11 7l-1 4h4l-1-4" />
        <path d="M9 11l-1.5 6h9l-1.5-6" />
        {/* Side Pavilions */}
        <path d="M4 14l1.5-3h1L7 14" />
        <path d="M20 14l-1.5-3h-1L17 14" />
        {/* Base */}
        <path d="M3 17h18" />
        <path d="M4 17v4h16v-4" />
        <path d="M2 21h20" />
        {/* Central Door */}
        <path d="M10 21v-3.5a2 2 0 0 1 4 0V21" />
      </svg>
    ),
    value: "1000+",
    title: "Temples",
    subtitle: "Across the State",
  },
  {
    id: 3,
    icon: <GiMusicalNotes className="w-11 h-11 text-white opacity-90" />,
    value: "200+",
    title: "Festivals",
    subtitle: "Celebrated Every Year",
  },
  {
    id: 4,
    icon: <FiMapPin className="w-10 h-10 text-white opacity-90 stroke-[1.5]" />,
    value: (
      <>
        53,000+ <span className="text-xl md:text-2xl font-inter font-normal">km²</span>
      </>
    ),
    title: "Area",
    subtitle: "Of Pure Devbhoomi",
  },
];

export default function UttarakhandStats() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#FCFBF8] py-8">
    {/* <section className="bg-[#FCFBF8] py-8 md:py-12 px-4 sm:px-6 md:px-12"> */}
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative bg-[#0A192F] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between py-10 md:py-8"
        >
          {/* Background Mandala on the right edge */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] opacity-[0.06] pointer-events-none translate-x-1/4">
            <Image
              src="/images/mandala.png"
              alt="Mandala Background"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-16 gap-10 md:gap-0">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="flex items-center gap-5 md:gap-6 group flex-1 justify-center md:justify-start"
              >
                {/* Icon */}
                <div className="shrink-0 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                  {stat.icon}
                </div>

                {/* Text Info */}
                <div className="flex flex-col">
                  <span className="text-[#EE660C] font-playfair font-bold text-3xl md:text-4xl leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="text-white font-inter font-bold text-sm md:text-base tracking-wide mb-0.5">
                    {stat.title}
                  </span>
                  <span className="text-gray-300 font-inter text-[11px] md:text-xs">
                    {stat.subtitle}
                  </span>
                </div>

                {/* Vertical Divider (hide on last item and mobile) */}
                {index !== stats.length - 1 && (
                  <div className="hidden md:block h-16 w-[1px] bg-white/10 ml-auto mr-auto"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
