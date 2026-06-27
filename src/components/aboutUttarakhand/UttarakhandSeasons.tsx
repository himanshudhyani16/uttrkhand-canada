"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiSun, FiCloudRain, FiWind } from "react-icons/fi";
import { GiFlowerPot, GiFallingLeaf, GiSnowflake1 } from "react-icons/gi";
import { TbFlower } from "react-icons/tb";

const seasons = [
  {
    id: 1,
    title: "Spring (Mar – Apr)",
    description: "Blossoming rhododendrons and pleasant weather.",
    icon: <TbFlower className="w-5 h-5 text-[#EE660C]" />,
    image: "/images/season_spring.png",
  },
  {
    id: 2,
    title: "Summer (May – Jun)",
    description: "Perfect time for hill stations and adventure.",
    icon: <FiSun className="w-5 h-5 text-[#EE660C]" />,
    image: "/images/season_summer.png",
  },
  {
    id: 3,
    title: "Monsoon (Jul – Sep)",
    description: "Lush greenery and refreshing landscapes.",
    icon: <FiCloudRain className="w-5 h-5 text-[#EE660C]" />,
    image: "/images/season_monsoon.png",
  },
  {
    id: 4,
    title: "Autumn (Oct – Nov)",
    description: "Clear skies and stunning mountain views.",
    icon: <GiFallingLeaf className="w-5 h-5 text-[#EE660C]" />,
    image: "/images/season_autumn.png",
  },
  {
    id: 5,
    title: "Winter (Dec – Feb)",
    description: "Snow-covered landscapes and spiritual journeys.",
    icon: <GiSnowflake1 className="w-5 h-5 text-[#EE660C]" />,
    image: "/images/season_winter.png",
  },
];

export default function UttarakhandSeasons() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Background Mandalas (optional, based on design consistency) */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] opacity-[0.03] pointer-events-none -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/images/mandala.png"
          alt="Mandala"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#EE660C] text-2xl font-serif select-none opacity-80">
              ❖
            </span>

            <h2 className="text-[#1A2340] font-playfair font-bold text-2xl md:text-4xl lg:text-5xl">
              Uttarakhand in Every Season
            </h2>
            <span className="text-[#EE660C] text-2xl font-serif select-none opacity-80">
              ❖
            </span>
          </div>

          <p className="text-[#4A5568] font-inter text-sm md:text-base max-w-2xl">
            A different charm to experience throughout the year.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {seasons.map((season) => (
            <motion.div
              key={season.id}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-[0_2px_15px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col group hover:shadow-[0_8px_25px_rgb(0,0,0,0.12)] transition-shadow duration-300"
            >
              {/* Image Area */}
              <div className="w-full h-[180px] sm:h-[160px] md:h-[180px] relative overflow-hidden">
                <Image
                  src={season.image}
                  alt={season.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content Area with overlapping icon */}
              <div className="relative pt-8 pb-6 px-5 flex flex-col flex-1 bg-white">
                {/* Overlapping Icon */}
                <div className="absolute -top-6 left-5 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_10px_rgb(0,0,0,0.1)] border border-gray-50 z-10 group-hover:-translate-y-1 transition-transform duration-300">
                  {season.icon}
                </div>

                <h3 className="text-[#1A2340] font-playfair font-bold text-lg md:text-[19px] mb-2">
                  {season.title}
                </h3>

                <p className="text-[#4A5568] font-inter text-[13px] leading-relaxed">
                  {season.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
