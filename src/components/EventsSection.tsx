"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiCalendar, FiArrowRight } from "react-icons/fi";

const events = [
  {
    id: 1,
    image: "/images/event_harela.png",
    title: "Harela Festival",
    date: "July 2026",
    description: "Celebrating the festival of greenery and prosperity.",
  },
  {
    id: 2,
    image: "/images/event_cultural.png",
    title: "Kumaoni & Garhwali Cultural Night",
    date: "August 2026",
    description: "An evening of traditional music, dance and culture.",
  },
  {
    id: 3,
    image: "/images/event_diwali.png",
    title: "Diwali Celebration",
    date: "November 2026",
    description:
      "Festival of lights with community dinner and cultural programs.",
  },
  {
    id: 4,
    image: "/images/event_food.png",
    title: "Uttarakhand Food Festival",
    date: "December 2026",
    description: "Savor the authentic flavors of Uttarakhand.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function EventsSection() {
  return (
    <section className="py-24 bg-[#E8651A]/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-[-52] -translate-y-1/2 w-[300px] md:w-[420px] h-[740px] pointer-events-none z-0">
        <Image
          src="/images/temple.png"
          alt="Temple Decorative Background"
          fill
          sizes="(max-width: 768px) 300px, 420px"
          className="object-contain object-left-bottom opacity-50" /* Adjust opacity as needed */
        />
      </div>
      <div className="absolute top-1/2 right-[-62] -translate-y-1/2 w-[300px] md:w-[420px] h-[740px] pointer-events-none z-0">
        <Image
          src="/images/temple.png"
          alt="Temple Decorative Background"
          fill
          sizes="(max-width: 768px) 300px, 420px"
          className="object-contain object-left-bottom opacity-50" /* Adjust opacity as needed */
        />
      </div>
      {/* Decorative Faint Background Temples (Abstract logic matching the image) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] flex justify-between px-10">
        <Image
          src="/images/prayingHands.png"
          alt="bg"
          width={400}
          height={400}
          className="object-contain transform -translate-x-1/2 opacity-20"
        />
        <Image
          src="/images/greenMoutain.png"
          alt="bg"
          width={400}
          height={400}
          className="object-contain transform translate-x-1/2 opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 flex items-center justify-center gap-5">
          <span className="text-[#EE660C] text-2xl font-serif select-none opacity-80">
            ❖
          </span>
          <h2 className="text-4xl md:text-[42px] font-playfair font-bold text-[#1A2340]">
            Upcoming Events
          </h2>
          <span className="text-[#EE660C] text-2xl font-serif select-none opacity-80">
            ❖
          </span>
        </div>

        {/* Events Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              className="bg-white rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-300 flex flex-col group"
            >
              <div className="w-full h-48 relative overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-[18px] font-bold text-[#1A2340] font-inter leading-snug mb-3">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-[#1A2340]/70 mb-3">
                  <FiCalendar className="w-4 h-4" />
                  <span className="font-inter text-[13.5px] font-semibold">
                    {event.date}
                  </span>
                </div>
                <p className="text-gray-600 font-inter text-[14px] leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <motion.a
            href="/events"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#1A2340] hover:bg-[#2A375C] text-white font-semibold font-inter px-8 py-3.5 rounded-lg text-[15px] transition-colors duration-200 shadow-md"
          >
            View All Events
            <FiArrowRight className="w-[18px] h-[18px]" strokeWidth={2.5} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
