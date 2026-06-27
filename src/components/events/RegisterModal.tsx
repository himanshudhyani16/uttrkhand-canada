"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiX, FiSend, FiPhone } from "react-icons/fi";
import { EventDetails } from "./EventModal";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: EventDetails | null;
}

export default function RegisterModal({
  isOpen,
  onClose,
  event,
}: RegisterModalProps) {
  if (!event) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-[110] flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FCFBF8] w-full max-w-[650px] rounded-2xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Background Mandala Sketch */}
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] opacity-[0.06] pointer-events-none z-0 translate-x-1/4 translate-y-1/4">
              <Image
                src="/images/mandala.png"
                alt="Mandala Pattern"
                fill
                className="object-contain"
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
              <div className="mb-8">
                <h2 className="text-[#1A2340] font-playfair font-bold text-2xl md:text-3xl mb-2">
                  Register
                </h2>
                <div className="flex items-center gap-1">
                  <div className="h-[1.5px] w-8 bg-[#EE660C] rounded-full"></div>
                  <span className="text-[#EE660C] text-xs">❖</span>
                </div>
                <p className="text-[#4A5568] font-inter text-sm mt-4 font-medium">
                  Event:{" "}
                  <span className="text-[#1A2340] font-bold">
                    {event.title}
                  </span>
                </p>
              </div>

              {/* Form */}
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#1A2340] font-inter font-bold text-sm">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm font-inter text-gray-700 focus:outline-none focus:border-[#EE660C] focus:ring-1 focus:ring-[#EE660C] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#1A2340] font-inter font-bold text-sm">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm font-inter text-gray-700 focus:outline-none focus:border-[#EE660C] focus:ring-1 focus:ring-[#EE660C] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#1A2340] font-inter font-bold text-sm">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="(123) 456-7890"
                      className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm font-inter text-gray-700 focus:outline-none focus:border-[#EE660C] focus:ring-1 focus:ring-[#EE660C] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 relative">
                    <label className="text-[#1A2340] font-inter font-bold text-sm">
                      Number of Participants{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      defaultValue=""
                      className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm font-inter text-gray-700 appearance-none focus:outline-none focus:border-[#EE660C] focus:ring-1 focus:ring-[#EE660C] transition-all cursor-pointer relative z-10"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5+">5+</option>
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="absolute right-4 top-[38px] pointer-events-none z-20">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6B7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1A2340] font-inter font-bold text-sm">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Any message..."
                    className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 text-sm font-inter text-gray-700 focus:outline-none focus:border-[#EE660C] focus:ring-1 focus:ring-[#EE660C] transition-all resize-none"
                  ></textarea>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 bg-[#EE660C] hover:bg-[#D45A0A] text-white transition-colors rounded-md py-3 px-6 font-inter font-bold text-sm shadow-md w-fit shrink-0"
                  >
                    <FiSend className="w-4 h-4" />
                    Confirm Registration
                  </button>

                  <div className="flex items-center gap-2 shrink-0">
                    <FiPhone className="w-4 h-4 text-[#EE660C]" />
                    <span className="text-[#4A5568] font-inter text-sm">
                      Need help? Call us at{" "}
                      <span className="text-[#1A2340] font-bold">
                        +1 (437) 123-4567
                      </span>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
