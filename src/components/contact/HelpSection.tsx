"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiUsers, FiCalendar, FiHeart, FiArrowRight } from "react-icons/fi";

const helpCards = [
  {
    id: 1,
    title: "Membership Support",
    icon: FiUsers,
    iconBg: "bg-[#EE660C]",
    description:
      "Questions about membership, renewal, or benefits? We're happy to help.",
    linkText: "Learn More",
    linkUrl: "#",
  },
  {
    id: 2,
    title: "Event Enquiries",
    icon: FiCalendar,
    iconBg: "bg-[#1A2340]",
    description:
      "Interested in our upcoming events or want to collaborate? Let's connect.",
    linkText: "View Events",
    linkUrl: "/events",
  },
  {
    id: 3,
    title: "Volunteer With Us",
    icon: FiHeart,
    iconBg: "bg-[#EE660C]",
    description:
      "Join our team of passionate volunteers and make an impact in our community.",
    linkText: "Become a Volunteer",
    linkUrl: "/join-us",
  },
];

export default function HelpSection() {
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
    <section className="w-full bg-[#1A2340] py-15 md:py-20 relative overflow-hidden">
      {/* Background Mountain Sketches */}
      <div className="absolute bottom-[-120px] left-0 w-full max-w-[500px] h-[400px] opacity-[0.12] pointer-events-none  invert z-0">
        <Image
          src="/images/blueMoutain.png"
          alt="Mountains"
          fill
          className="object-contain object-bottom"
        />
      </div>
      <div className="absolute bottom-[-120px] right-0 w-full max-w-[500px] h-[300px] opacity-[0.12] pointer-events-none invert scale-x-[-1] z-0">
        <Image
          src="/images/blueMoutain.png"
          alt="Mountains"
          fill
          className="object-contain object-bottom"
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#EE660C] text-2xl font-serif select-none opacity-80">
              ❖
            </span>
            <h2 className="text-white font-playfair font-bold text-3xl md:text-4xl">
              We&apos;re Here to Help
            </h2>
            <span className="text-[#EE660C] text-2xl font-serif select-none opacity-80">
              ❖
            </span>
          </div>
          <p className="text-gray-300 font-inter text-[15px] max-w-[600px]">
            Whether you have a question, need support, or want to get involved,
            we&apos;re here for you.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {helpCards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="bg-[#FCFBF8] rounded-xl p-8 lg:p-10 flex flex-col items-start gap-4 shadow-lg hover:-translate-y-2 transition-transform duration-300 group"
            >
              {/* Card Header (Icon + Title) */}
              <div className="flex items-center gap-4 mb-2">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-white shrink-0 ${card.iconBg} shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-[#1A2340] font-playfair font-bold text-[22px] leading-tight">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[#4A5568] font-inter text-[15px] leading-relaxed flex-grow">
                {card.description}
              </p>

              {/* Action Link */}
              <Link
                href={card.linkUrl}
                className="mt-4 flex items-center gap-2 text-[#EE660C] font-inter font-bold text-sm hover:text-[#D45A0A] transition-colors"
              >
                {card.linkText}
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
