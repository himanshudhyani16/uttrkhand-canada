"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiCamera, FiMap, FiUsers, FiCheckCircle } from "react-icons/fi";
import { GiTempleDoor, GiMountains } from "react-icons/gi"; // For temple and mountains if possible, otherwise use standard. We'll use standard feather icons to be safe, or just custom SVGs.
import { LuTentTree } from "react-icons/lu";

const discoverCards = [
  {
    id: 1,
    title: "Culture",
    description:
      "Rich traditions, vibrant arts, and unique heritage passed down through generations.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    list: ["Traditions", "Folk Dance", "Music", "Food", "Festivals"],
    image: "/images/discover_culture.png",
  },
  {
    id: 2,
    title: "Temples",
    description:
      "Sacred temples and pilgrimage sites that hold deep spiritual importance.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-5a3 3 0 016 0v5"
        />
      </svg>
    ),
    list: [
      "Kedarnath",
      "Badrinath",
      "Haridwar",
      "Rishikesh",
      "Jageshwar Temple",
    ],
    image: "/images/discover_temple.png",
  },
  {
    id: 3,
    title: "Hill Stations",
    description:
      "Breathtaking hill stations offering serenity, adventure, and scenic beauty.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
        />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    list: ["Nainital", "Mussoorie", "Auli", "Almora", "Ranikhet"],
    image: "/images/discover_nainital.png",
  },
  {
    id: 4,
    title: "Tourism & Heritage",
    description:
      "Explore stunning destinations, ancient heritage, and travel experiences like no other.",
    icon: <FiCamera className="w-6 h-6 text-white" />,
    list: [
      "Tourist Destinations",
      "Pilgrimage Places",
      "Travel Information",
      "Historical Importance",
    ],
    image: "/images/discover_rishikesh.png",
  },
];

export default function DiscoverUttarakhand() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#FCFBF8] py-20  relative overflow-hidden">
      {/* <section className="bg-[#FCFBF8]  relative overflow-hidden"> */}
      {/* Background Mandalas */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] opacity-[0.04] pointer-events-none -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/images/mandala.png"
          alt="Mandala"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.04] pointer-events-none translate-x-1/2 -translate-y-1/2">
        <Image
          src="/images/mandala.png"
          alt="Mandala"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-[1440px] mx-auto  relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-6">
            {/* Left Decorative Arrow */}
            <span className="text-[#EE660C] text-2xl font-serif select-none opacity-80">
              ❖
            </span>

            <h2 className="text-[#1A2340] font-playfair font-bold text-3xl md:text-5xl">
              Discover Uttarakhand
            </h2>

            <span className="text-[#EE660C] text-2xl font-serif select-none opacity-80">
              ❖
            </span>
          </div>

          <p className="text-[#4A5568] font-inter text-base md:text-lg max-w-2xl leading-relaxed">
            A land of spiritual significance, natural wonders, and vibrant
            traditions. Explore its culture, temples, hill stations, and
            timeless heritage.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {discoverCards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col sm:flex-row hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 h-full p-4 sm:p-5 gap-6"
            >
              {/* Left Content */}
              <div className="flex flex-col flex-1 py-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#EE660C] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="text-[#1A2340] font-playfair font-bold text-2xl">
                    {card.title}
                  </h3>
                </div>

                <p className="text-[#4A5568] font-inter text-[13px] leading-relaxed mb-6">
                  {card.description}
                </p>

                <div className="flex flex-col gap-3 mt-auto">
                  {card.list.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="border border-[#EE660C] rounded-full p-[2px] shrink-0">
                        <svg
                          className="w-2.5 h-2.5 text-[#EE660C]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-[#4A5568] font-inter text-[13px] font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full sm:w-[240px] md:w-[280px] h-[220px] sm:h-auto relative rounded-xl overflow-hidden shrink-0 shadow-sm group">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
