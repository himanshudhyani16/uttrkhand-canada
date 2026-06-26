"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";

const upcomingEvents = [
  {
    id: 1,
    image: "/images/event-kedarnath.png", 
    dateBadge: { day: "25", month: "May", year: "2024" },
    category: "Festival",
    title: "Kedarnath Dham Yatra 2024",
    dateInfo: "25 May, 2024 (Saturday)",
    timeInfo: "10:00 AM - 5:00 PM",
    locationInfo: "Brampton, Ontario",
  },
  {
    id: 2,
    image: "/images/event-cultural.png", 
    dateBadge: { day: "15", month: "Jun", year: "2024" },
    category: "Cultural",
    title: "Uttarakhandi Cultural Festival",
    dateInfo: "15 June, 2024 (Saturday)",
    timeInfo: "11:00 AM - 7:00 PM",
    locationInfo: "Mississauga, Ontario",
  },
  {
    id: 3,
    image: "/images/event-trek.png", 
    dateBadge: { day: "21", month: "Jul", year: "2024" },
    category: "Community",
    title: "Trek & Nature Walk",
    dateInfo: "21 July, 2024 (Sunday)",
    timeInfo: "8:00 AM - 2:00 PM",
    locationInfo: "Banff National Park, AB",
  },
  {
    id: 4,
    image: "/images/event-rakhi.png", 
    dateBadge: { day: "10", month: "Aug", year: "2024" },
    category: "Celebration",
    title: "Raksha Bandhan Celebration",
    dateInfo: "10 August, 2024 (Saturday)",
    timeInfo: "4:00 PM - 8:00 PM",
    locationInfo: "Surrey, British Columbia",
  },
];

export default function UpcomingEvents() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-[#FCFBF8] py-20 md:py-28 relative overflow-hidden">
      
      {/* Background Mandala Sketch */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.05] pointer-events-none z-0 translate-x-1/4 -translate-y-1/4">
        <Image 
          src="/images/mandala.png" 
          alt="Mandala Pattern" 
          fill 
          className="object-contain"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          {/* Centered logic for Title */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="text-[#EE660C] text-xs">❖</span>
                <div className="h-[1.5px] w-8 bg-[#EE660C] rounded-full"></div>
              </div>
              <h2 className="text-[#1A2340] font-playfair font-bold text-2xl md:text-3xl lg:text-4xl text-center">
                Upcoming Events
              </h2>
              <div className="flex items-center gap-1">
                <div className="h-[1.5px] w-8 bg-[#EE660C] rounded-full"></div>
                <span className="text-[#EE660C] text-xs">❖</span>
              </div>
            </div>
          </div>
          
         
        </div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {upcomingEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group border border-gray-100 flex flex-col h-full"
            >
              {/* Event Image & Badges */}
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                
                {/* Date Badge (Top Left) */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-sm flex flex-col items-center justify-center min-w-[55px]">
                  <span className="text-[#EE660C] font-playfair font-bold text-2xl leading-none">
                    {event.dateBadge.day}
                  </span>
                  <span className="text-[#1A2340] font-inter font-bold text-[13px] leading-tight mt-0.5">
                    {event.dateBadge.month}
                  </span>
                  <span className="text-gray-500 font-inter text-[10px] font-medium leading-none mt-1">
                    {event.dateBadge.year}
                  </span>
                </div>

                {/* Category Tag (Top Right) */}
                <div className="absolute top-4 right-4 bg-[#EE660C] rounded-md px-3 py-1 shadow-sm">
                  <span className="text-white font-inter font-bold text-[11px] uppercase tracking-wider">
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Event Details Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-[#1A2340] font-inter font-bold text-[17px] mb-5 leading-tight line-clamp-2">
                  {event.title}
                </h3>
                
                <div className="flex flex-col gap-3 mb-8">
                  {/* Date */}
                  <div className="flex items-center gap-3">
                    <FiCalendar className="w-4 h-4 text-[#EE660C] shrink-0" />
                    <span className="text-[#4A5568] font-inter text-[13px] font-medium">
                      {event.dateInfo}
                    </span>
                  </div>
                  {/* Time */}
                  <div className="flex items-center gap-3">
                    <FiClock className="w-4 h-4 text-[#EE660C] shrink-0" />
                    <span className="text-[#4A5568] font-inter text-[13px] font-medium">
                      {event.timeInfo}
                    </span>
                  </div>
                  {/* Location */}
                  <div className="flex items-center gap-3">
                    <FiMapPin className="w-4 h-4 text-[#EE660C] shrink-0" />
                    <span className="text-[#4A5568] font-inter text-[13px] font-medium truncate">
                      {event.locationInfo}
                    </span>
                  </div>
                </div>

                {/* Spacer to push buttons to the bottom if title is short */}
                <div className="flex-grow"></div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <Link 
                    href="#" 
                    className="flex items-center justify-center border border-[#1A2340] text-[#1A2340] hover:bg-[#1A2340] hover:text-white transition-colors rounded-md py-2.5 font-inter font-bold text-[13px]"
                  >
                    View Details
                  </Link>
                  <Link 
                    href="#" 
                    className="flex items-center justify-center bg-[#EE660C] hover:bg-[#D45A0A] text-white transition-colors rounded-md py-2.5 font-inter font-bold text-[13px]"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
