"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const committeeData = [
  {
    name: "Rajesh Pande",
    role: "President",
    image: "/images/committee-1.jpg", // Placeholder paths
    linkedin: "#",
    email: "mailto:#",
  },
  {
    name: "Anita Rawat",
    role: "Vice President",
    image: "/images/committee-2.jpg",
    linkedin: "#",
    email: "mailto:#",
  },
  {
    name: "Sandeep Bisht",
    role: "Secretary",
    image: "/images/committee-3.jpg",
    linkedin: "#",
    email: "mailto:#",
  },
  {
    name: "Pooja Negi",
    role: "Treasurer",
    image: "/images/committee-4.jpg",
    linkedin: "#",
    email: "mailto:#",
  },
];

export default function MeetOurCommittee() {
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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-[#FCFBF8] py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className="text-[#EE660C] text-xl font-serif">❖</span>
          <h2 className="text-[#1A2340] font-playfair font-bold text-2xl md:text-3xl tracking-widest uppercase">
            Meet Our Committee
          </h2>
          <span className="text-[#EE660C] text-xl font-serif">❖</span>
        </div>

        {/* Committee Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {committeeData.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-[#F6EFE6] rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col relative"
            >
              {/* Top Image Section */}
              <div className="relative w-full aspect-[4/5] bg-[#E8DFD3] flex items-center justify-center overflow-hidden">
                {/* Fallback Icon if image doesn't load/exist */}
                <FiUser className="absolute w-20 h-20 text-[#CBBBA4] z-0" />
                
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top z-10 opacity-0 group-hover:scale-105 transition-all duration-500"
                  // A neat trick to hide broken image icons before the user adds real photos:
                  onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>

              {/* Bottom Info Section (Overlapping effect) */}
              <div className="bg-[#FFFDFB] mt-[-30px] z-20 rounded-[20px] mx-3 mb-3 p-5 flex flex-col items-center text-center shadow-sm relative">
                <h3 className="text-[#1A2340] font-playfair font-bold text-xl mb-1">
                  {member.name}
                </h3>
                <p className="text-[#6B6B6B] font-inter text-[13px] font-medium mb-4">
                  {member.role}
                </p>
                
                {/* Social Icons */}
                <div className="flex items-center gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#F0EBE1] flex items-center justify-center text-[#1A2340] hover:bg-[#EE660C] hover:text-white transition-colors duration-300"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                  <a
                    href={member.email}
                    className="w-8 h-8 rounded-full bg-[#F0EBE1] flex items-center justify-center text-[#1A2340] hover:bg-[#EE660C] hover:text-white transition-colors duration-300"
                  >
                    <FaEnvelope className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
