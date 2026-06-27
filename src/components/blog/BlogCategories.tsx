"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GiMountains, GiTrophyCup } from "react-icons/gi";

const TempleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v3" />
    <path d="M12 2l4 1.5-4 1.5" />
    <ellipse cx="12" cy="6" rx="2" ry="1" />
    <path d="M11 7l-1 4h4l-1-4" />
    <path d="M9 11l-1.5 6h9l-1.5-6" />
    <path d="M4 14l1.5-3h1L7 14" />
    <path d="M20 14l-1.5-3h-1L17 14" />
    <path d="M3 17h18" />
    <path d="M4 17v4h16v-4" />
    <path d="M2 21h20" />
    <path d="M10 21v-3.5a2 2 0 0 1 4 0V21" />
  </svg>
);

const DancingIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Left Figure */}
    <circle cx="8" cy="6" r="1.5" />
    <path d="M8 8c-1 2-1 4-1 6" />
    <path d="M8 8c1 2 1 4 1 6" />
    <path d="M7 14l-2 4" />
    <path d="M9 14l1.5 4" />
    <path d="M5 9l3-1 2 2" />
    {/* Right Figure */}
    <circle cx="16" cy="5" r="1.5" />
    <path d="M16 7c-1 2-1 4-1 6" />
    <path d="M16 7c1 2 1 4 1 6" />
    <path d="M15 13l-1.5 4" />
    <path d="M17 13l2 4" />
    <path d="M13 8l3-1 2 2" />
  </svg>
);

const FireworksIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1l2.1-2.1M17 7l2.1-2.1" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const SuitcaseIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="8" width="16" height="12" rx="2" />
    <path d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2" />
    <path d="M4 13h16" />
    {/* Luggage Tag */}
    <path d="M10 8v5a1 1 0 001 1h2a1 1 0 001-1V8" />
  </svg>
);

const categories = [
  { id: 1, name: "Uttarakhand Culture", icon: <DancingIcon className="w-12 h-12" />, color: "text-[#EE660C]" },
  { id: 2, name: "Temples", icon: <TempleIcon className="w-12 h-12" />, color: "text-[#EE660C]" },
  { id: 3, name: "Tourism", icon: <GiMountains className="w-12 h-12" />, color: "text-[#1A2340]" },
  { id: 4, name: "Festivals", icon: <FireworksIcon className="w-12 h-12" />, color: "text-[#EE660C]" },
  { id: 5, name: "Community News", icon: <HiOutlineUserGroup className="w-12 h-12" />, color: "text-[#1A2340]" },
  { id: 6, name: "Travel Blogs", icon: <SuitcaseIcon className="w-12 h-12" />, color: "text-[#1A2340]" },
  { id: 7, name: "Success Stories", icon: <GiTrophyCup className="w-12 h-12" />, color: "text-[#EE660C]" },
];

export default function BlogCategories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="bg-white py-12 md:py-16 relative overflow-hidden">
      
      {/* Hide scrollbar styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* Background Mandalas */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] opacity-[0.03] pointer-events-none -translate-x-1/2 -translate-y-1/2">
        <Image src="/images/mandala.png" alt="Mandala" fill className="object-contain" />
      </div>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] opacity-[0.03] pointer-events-none translate-x-1/2 -translate-y-1/2">
        <Image src="/images/mandala.png" alt="Mandala" fill className="object-contain" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-10 md:mb-14">
          <div className="flex items-center">
            <div className="h-[1.5px] w-6 md:w-8 bg-[#EE660C]"></div>
            <svg className="w-5 h-5 text-[#EE660C] -ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          
          <h2 className="text-[#1A2340] font-playfair font-bold text-2xl md:text-3xl lg:text-[32px]">
            Explore by Categories
          </h2>
          
          <div className="flex items-center">
            <svg className="w-5 h-5 text-[#EE660C] -mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="h-[1.5px] w-6 md:w-8 bg-[#EE660C]"></div>
          </div>
        </div>

        {/* Categories Flex/Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-x-visible sm:flex-wrap justify-start sm:justify-center gap-4 md:gap-6 lg:gap-8 hide-scrollbar snap-x snap-mandatory"
        >
          {categories.map((category) => (
            <Link href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} key={category.id} className="shrink-0 snap-center">
              <motion.div 
                variants={itemVariants}
                className="w-[130px] h-[130px] sm:w-[140px] sm:h-[140px] md:w-[150px] md:h-[150px] bg-white rounded-[20px] shadow-[0_4px_15px_rgb(0,0,0,0.05)] border border-gray-100 flex flex-col items-center justify-center p-3 sm:p-4 group hover:shadow-[0_8px_25px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className={`${category.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-sm mb-3`}>
                  {category.icon}
                </div>
                
                <span className="text-[#1A2340] font-inter font-semibold text-sm text-center leading-snug">
                  {category.name.split(" ").map((word, i, arr) => (
                    <span key={i}>
                      {word}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </motion.div>
            </Link>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
