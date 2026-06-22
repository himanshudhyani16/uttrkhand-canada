"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiUsers, FiHome, FiCalendar, FiHeart } from "react-icons/fi";

const stats = [
  {
    id: 1,
    icon: FiUsers,
    number: "500+",
    label: "Members",
    color: "text-[#1A2340]",
    borderColor: "border-[#1A2340]/30",
    bgHover: "hover:bg-[#1A2340]/5",
  },
  {
    id: 2,
    icon: FiHome,
    number: "50+",
    label: "Families",
    color: "text-[#2D6A4F]",
    borderColor: "border-[#2D6A4F]/30",
    bgHover: "hover:bg-[#2D6A4F]/5",
  },
  {
    id: 3,
    icon: FiCalendar,
    number: "15+",
    label: "Events Organized",
    color: "text-[#EE660C]",
    borderColor: "border-[#EE660C]/30",
    bgHover: "hover:bg-[#EE660C]/5",
  },
  {
    id: 4,
    icon: FiHeart,
    number: "5+",
    label: "Years of Community Service",
    color: "text-[#D32F2F]",
    borderColor: "border-[#D32F2F]/30",
    bgHover: "hover:bg-[#D32F2F]/5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function StatsSection() {
  return (
    // <section className="py-16 bg-[#FAFAFA] border-y border-gray-200/60">
    <section className="py-16  border-y border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className={`flex items-center gap-5 p-4 rounded-xl transition-colors duration-300 ${stat.bgHover}`}
            >
              <div
                className={`flex-shrink-0 w-16 h-16 rounded-full border-[1.5px] ${stat.borderColor} flex items-center justify-center bg-white shadow-sm`}
              >
                <stat.icon
                  className={`w-7 h-7 ${stat.color}`}
                  strokeWidth={2}
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-3xl md:text-[34px] font-gelasio font-bold ${stat.color} leading-none mb-1`}
                >
                  {stat.number}
                </span>
                <span className="text-gray-600 font-inter text-sm md:text-[15px] font-medium leading-tight">
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
