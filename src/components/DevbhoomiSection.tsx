"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiArrowRight } from "react-icons/fi";
import BecomeMember from "./BecomeMember";

const locations = [
  "Kedarnath",
  "Badrinath",
  "Nainital",
  "Ranikhet",
  "Valley of Flowers",
];

export default function DevbhoomiSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* TOP SECTION: Devbhoomi Hero */}
      <div className="relative min-h-[500px] w-full flex items-center py-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/devbhoomi_bg.png"
            alt="Devbhoomi Uttarakhand Landscape"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Gradient Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1627]/95 via-[#0d1627]/70 to-[#0d1627]/10" />
        </div>

        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            {/* Left Content */}
            <motion.div
              className="w-full lg:w-1/2 flex flex-col items-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-[#EE660C] font-semibold text-[17px] font-inter mb-2">
                About Uttarakhand
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white leading-tight mb-4">
                Devbhoomi Uttarakhand
              </h2>
              <p className="text-gray-200 font-inter text-base md:text-[17px] leading-relaxed mb-8 max-w-xl">
                Land of Gods, breathtaking Himalayas, serene lakes, spiritual
                yatras and vibrant culture.
              </p>

              {/* Locations List */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10">
                {locations.map((loc) => (
                  <div
                    key={loc}
                    className="flex items-center gap-1.5 text-white/90"
                  >
                    <FiMapPin className="w-[15px] h-[15px]" />
                    <span className="font-inter text-[14.5px]">{loc}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about-uttarakhand"
                className="inline-flex items-center gap-2 bg-[#EE660C] hover:bg-[#D6590A] text-white font-semibold font-inter px-7 py-3 rounded-md text-[15px] transition-colors shadow-lg"
              >
                Explore Uttarakhand
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right Content: Polaroid Collage */}
            <motion.div
              className="w-full lg:w-1/2 relative h-[380px] hidden md:block"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                {/* Image 4 (Back right) */}
                <motion.div
                  className="absolute right-[5%] top-[10%] w-[180px] h-[220px] bg-white p-2 shadow-xl rotate-[12deg]"
                  whileHover={{ scale: 1.05, zIndex: 50 }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/polaroid_4.png"
                      alt="Valley of Flowers"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Image 3 (Bottom middle) */}
                <motion.div
                  className="absolute left-[35%] bottom-[5%] w-[200px] h-[160px] bg-white p-2 shadow-2xl -rotate-[4deg] z-20"
                  whileHover={{ scale: 1.05, zIndex: 50 }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/polaroid_3.png"
                      alt="Nainital Lake"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Image 2 (Top middle) */}
                <motion.div
                  className="absolute left-[30%] top-[0%] w-[220px] h-[150px] bg-white p-2 shadow-2xl rotate-[3deg] z-10"
                  whileHover={{ scale: 1.05, zIndex: 50 }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/polaroid_2.png"
                      alt="Himalayas"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Image 1 (Front left) */}
                <motion.div
                  className="absolute left-[5%] top-[20%] w-[160px] h-[220px] bg-white p-2 shadow-2xl -rotate-[8deg] z-30"
                  whileHover={{ scale: 1.05, zIndex: 50 }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/polaroid_1.png"
                      alt="Kedarnath Temple"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

     
    </section>
  );
}
