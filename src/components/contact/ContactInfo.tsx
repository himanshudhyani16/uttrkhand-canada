"use client";

import { motion, Variants } from "framer-motion";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import {
  FaUsers,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const contactCards = [
  {
    id: 1,
    title: "Visit Us",
    icon: FiMapPin,
    iconBg: "bg-[#EE660C]",
    content: (
      <>
        <span className="block text-[#4A5568] font-inter text-[14px] font-medium leading-relaxed">
          Toronto, Ontario
        </span>
        <span className="block text-[#4A5568] font-inter text-[14px] font-medium leading-relaxed">
          Canada
        </span>
      </>
    ),
  },
  {
    id: 2,
    title: "Email Us",
    icon: FiMail,
    iconBg: "bg-[#1A2340]",
    content: (
      <>
        <a
          href="mailto:info@uttarakhandcanada.ca"
          className="block text-[#4A5568] font-inter text-[14px] font-medium leading-relaxed hover:text-[#EE660C] transition-colors"
        >
          info@uttarakhandcanada.ca
        </a>
        <a
          href="mailto:support@uttarakhandcanada.ca"
          className="block text-[#4A5568] font-inter text-[14px] font-medium leading-relaxed hover:text-[#EE660C] transition-colors"
        >
          support@uttarakhandcanada.ca
        </a>
      </>
    ),
  },
  {
    id: 3,
    title: "Call Us",
    icon: FiPhone,
    iconBg: "bg-[#EE660C]",
    content: (
      <>
        <a
          href="tel:+14371234567"
          className="block text-[#4A5568] font-inter text-[14px] font-bold leading-relaxed mb-1 hover:text-[#EE660C] transition-colors"
        >
          +1 (437) 123-4567
        </a>
        <span className="block text-[#4A5568] font-inter text-[13px] font-medium leading-relaxed">
          Mon - Fri
        </span>
        <span className="block text-[#4A5568] font-inter text-[13px] font-medium leading-relaxed">
          9:00 AM - 6:00 PM
        </span>
      </>
    ),
  },
  {
    id: 4,
    title: "Follow Us",
    icon: FaUsers,
    iconBg: "bg-[#1A2340]",
    content: (
      <div className="flex items-center justify-center gap-3 mt-1">
        <Link
          href="#"
          className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:-translate-y-1 transition-transform shadow-sm"
        >
          <FaFacebookF className="w-4 h-4" />
        </Link>
        <Link
          href="#"
          className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#C13584] flex items-center justify-center text-white hover:-translate-y-1 transition-transform shadow-sm"
        >
          <FaInstagram className="w-4 h-4" />
        </Link>
        <Link
          href="#"
          className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:-translate-y-1 transition-transform shadow-sm"
        >
          <FaLinkedinIn className="w-4 h-4" />
        </Link>
        <Link
          href="#"
          className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:-translate-y-1 transition-transform shadow-sm"
        >
          <FaYoutube className="w-4 h-4" />
        </Link>
      </div>
    ),
  },
];

export default function ContactInfo() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-[#FCFBF8] py-8 pt-12 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8 pt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {contactCards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 pt-12 pb-8 relative flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300 group "
            >
              {/* Overlapping Top Icon */}
              <div
                className={`absolute -top-6 left-1/2 -translate-x-1/2 w-13 h-13 rounded-full flex items-center justify-center shadow-md ${card.iconBg} z-20 group-hover:scale-110 transition-transform duration-300`}
              >
                <card.icon className="w-6 h-6 text-white" />
              </div>

              {/* Faint Mountain Sketch at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-[60px] opacity-[0.06] pointer-events-none z-0">
                <Image
                  src="/images/blueMoutain.png"
                  alt="Mountain Sketch"
                  fill
                  className="object-cover object-bottom"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 w-full flex flex-col items-center">
                <h3 className="text-[#1A2340] font-gelasio font-bold text-xl mb-4">
                  {card.title}
                </h3>
                <div className="flex flex-col items-center gap-1 min-h-[60px] justify-center">
                  {card.content}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
