"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUsers,
  FiX,
  FiCheck,
} from "react-icons/fi";

export interface EventDetails {
  id: number;
  image: string;
  category: string;
  title: string;
  dateInfo: string;
  timeInfo: string;
  locationInfo: string;
  description?: string;
  audience?: string;
  fee?: string;
  highlights?: string[];
}

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: EventDetails | null;
  onRegisterClick?: () => void;
}

export default function EventModal({
  isOpen,
  onClose,
  event,
  onRegisterClick,
}: EventModalProps) {
  if (!event) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FCFBF8] w-full max-w-[850px] rounded-2xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Background Temple Sketch */}
            <div className="absolute bottom-0 right-0 w-[450px] h-[350px] opacity-[0.1] pointer-events-none z-0">
              <Image
                src="/images/badrinath.png"
                alt="Temple Pattern"
                fill
                className="object-contain object-bottom-right hue-rotate-[-30deg] saturate-[200%]"
              />
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 bg-white rounded-full shadow-sm text-gray-500 hover:text-[#EE660C] transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10 overflow-y-auto relative z-10 custom-scrollbar">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-[#1A2340] font-playfair font-bold text-2xl md:text-3xl mb-2">
                  Event Details
                </h2>
                <div className="flex items-center gap-1">
                  <div className="h-[1.5px] w-8 bg-[#EE660C] rounded-full"></div>
                  <span className="text-[#EE660C] text-xs">❖</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-10">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                  <div className="relative w-full h-[220px] rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-[#4A5568] font-inter text-sm leading-relaxed mb-5">
                      {event.description ||
                        "Join us for a spiritual journey. Let's seek blessings together and celebrate our devotion and heritage."}
                    </p>

                    <h4 className="text-[#1A2340] font-inter font-bold text-[15px] mb-3">
                      Highlights:
                    </h4>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                      {(
                        event.highlights || [
                          "Pooja & Aarti",
                          "Bhajan & Kirtan",
                          "Cultural Performances",
                          "Community Dinner",
                        ]
                      ).map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="bg-transparent border border-[#EE660C] rounded-full p-[2px] shrink-0">
                            <FiCheck className="w-2.5 h-2.5 text-[#EE660C] stroke-[3]" />
                          </div>
                          <span className="text-[#4A5568] font-inter text-[13px] font-medium">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col pt-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#EE660C] rounded-md px-3 py-1 shadow-sm shrink-0">
                      <span className="text-white font-inter font-bold text-[11px] uppercase tracking-wider">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-[#1A2340] font-playfair font-bold text-2xl leading-tight">
                      {event.title}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-4 mt-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5">
                        <FiCalendar className="w-5 h-5 text-[#EE660C]" />
                      </div>
                      <span className="text-[#4A5568] font-inter text-[14.5px] font-medium">
                        {event.dateInfo}
                      </span>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-0.5">
                        <FiClock className="w-5 h-5 text-[#EE660C]" />
                      </div>
                      <span className="text-[#4A5568] font-inter text-[14.5px] font-medium">
                        {event.timeInfo}
                      </span>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-0.5">
                        <FiMapPin className="w-5 h-5 text-[#EE660C]" />
                      </div>
                      <span className="text-[#4A5568] font-inter text-[14.5px] font-medium">
                        {event.locationInfo}
                      </span>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-0.5">
                        <FiUsers className="w-5 h-5 text-[#EE660C]" />
                      </div>
                      <span className="text-[#4A5568] font-inter text-[14.5px] font-medium">
                        {event.audience || "Open to All"}
                      </span>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex items-center justify-center w-5 h-5">
                        <span className="text-[#EE660C] font-bold text-[19px] leading-none">
                          ₹
                        </span>
                      </div>
                      <span className="text-[#4A5568] font-inter text-[14.5px] font-medium">
                        {event.fee || "Member: Free | Non-Member: $20"}
                      </span>
                    </div>
                  </div>

                  {/* Action Button inside Modal */}
                  <button 
                    onClick={onRegisterClick}
                    className="mt-8 bg-[#EE660C] hover:bg-[#D45A0A] text-white transition-colors rounded-md py-3 font-inter font-bold text-sm shadow-md"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
