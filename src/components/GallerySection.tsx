"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const galleryImages = [
  "/images/event_cultural.png",
  "/images/event_harela.png",
  "/images/culture_garhwali.png",
  "/images/devbhoomi_bg.png",
  "/images/polaroid_3.png",
  "/images/culture_kumaoni.png",
  "/images/event_diwali.png",
  "/images/culture_food.png",
];

// Duplicate the array so it can loop seamlessly in the marquee
const duplicatedImages = [...galleryImages, ...galleryImages];

export default function GallerySection() {
  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="text-center flex items-center justify-center gap-5">
          <span className="text-[#EE660C] text-2xl font-serif select-none opacity-80">
            ❖
          </span>
          <h2 className="text-4xl md:text-[42px] font-playfair font-bold text-[#1A2340]">
            Gallery
          </h2>
          <span className="text-[#EE660C] text-2xl font-serif select-none opacity-80">
            ❖
          </span>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-hidden">
        {/* Gradient Fades for edges to make it look premium */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 md:gap-5 px-2 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40, // Controls the speed of the scroll
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative w-[260px] h-[170px] md:w-[420px] md:h-[320px] flex-shrink-0 rounded-[14px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-white group cursor-pointer"
            >
              <Image
                src={src}
                alt={`Gallery photo ${index + 1}`}
                fill
                sizes="(max-width: 768px) 260px, 320px"
                className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#1A2340]/0 group-hover:bg-[#1A2340]/20 transition-colors duration-300" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* View Gallery Button */}
      <div className="mt-14 flex justify-center">
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-[#1A2340] hover:bg-[#2A375C] text-white font-semibold font-inter px-8 py-3 rounded-lg text-[15px] transition-colors duration-200 shadow-md"
          >
            View Full Gallery
            <FiArrowRight className="w-[18px] h-[18px]" strokeWidth={2.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
