"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";

export default function ContactForm() {
  return (
    <section className="w-full bg-[#FCFBF8] py-8 md:py-8 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* ─── LEFT COLUMN: FORM (Takes 7 columns on Desktop) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] p-8 md:p-10 relative overflow-hidden flex flex-col"
          >
            {/* Faint Temple Sketch Background */}
            <div className="absolute bottom-[-20px] right-[-20px] w-[250px] h-[250px] opacity-[0.2] pointer-events-none">
              <Image
                src="/images/badrinath.png"
                alt="Temple Sketch"
                fill
                className="object-contain object-bottom-right"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-[#1A2340] font-playfair font-bold text-2xl md:text-3xl mb-3">
                Send Us a Message
              </h2>
              {/* Divider line */}
              <div className="flex items-center gap-2 mb-8">
                <span className="text-[#EE660C] text-sm">❖</span>
                <div className="h-[2px] w-12 bg-[#EE660C] rounded-full"></div>
              </div>

              <form
                className="flex flex-col gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#1A2340] font-inter text-[14px] font-bold">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full bg-transparent border border-gray-200 rounded-md px-4 py-3 text-sm font-inter text-gray-700 focus:outline-none focus:border-[#EE660C] focus:ring-1 focus:ring-[#EE660C] transition-all bg-white"
                      required
                    />
                  </div>
                  {/* Email Address */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#1A2340] font-inter text-[14px] font-bold">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full bg-transparent border border-gray-200 rounded-md px-4 py-3 text-sm font-inter text-gray-700 focus:outline-none focus:border-[#EE660C] focus:ring-1 focus:ring-[#EE660C] transition-all bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#1A2340] font-inter text-[14px] font-bold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full bg-transparent border border-gray-200 rounded-md px-4 py-3 text-sm font-inter text-gray-700 focus:outline-none focus:border-[#EE660C] focus:ring-1 focus:ring-[#EE660C] transition-all bg-white"
                    />
                  </div>
                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#1A2340] font-inter text-[14px] font-bold">
                      Subject
                    </label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-transparent border border-gray-200 rounded-md px-4 py-3 text-sm font-inter text-gray-500 appearance-none focus:outline-none focus:border-[#EE660C] focus:ring-1 focus:ring-[#EE660C] transition-all bg-white cursor-pointer">
                        <option value="" disabled>
                          Select a subject
                        </option>
                        <option value="general">General Inquiry</option>
                        <option value="membership">Membership</option>
                        <option value="events">Events</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-400"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#1A2340] font-inter text-[14px] font-bold">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full bg-transparent border border-gray-200 rounded-md px-4 py-3 text-sm font-inter text-gray-700 focus:outline-none focus:border-[#EE660C] focus:ring-1 focus:ring-[#EE660C] transition-all resize-y min-h-[120px] bg-white"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-2">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-[#EE660C] hover:bg-[#D45A0A] text-white font-inter font-bold text-sm px-8 py-3.5 rounded-md transition-colors w-full sm:w-auto"
                  >
                    <FiSend className="w-4 h-4" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* ─── RIGHT COLUMN: INFO CARDS (Takes 5 columns on Desktop) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Office Information Card */}
            <div className="bg-[#FAF6EE] rounded-xl p-8 md:p-10 flex flex-col w-full">
              <h2 className="text-[#1A2340] font-playfair font-bold text-2xl md:text-3xl mb-3">
                Office Information
              </h2>
              {/* Divider line */}
              <div className="flex items-center gap-2 mb-8">
                <span className="text-[#EE660C] text-sm">❖</span>
                <div className="h-[2px] w-12 bg-[#EE660C] rounded-full"></div>
              </div>

              <div className="flex flex-col gap-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 text-[#EE660C]">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[#1A2340] font-inter font-bold text-[15px] mb-2">
                      Office Address
                    </h4>
                    <p className="text-[#4A5568] font-inter text-[14px] leading-[1.6]">
                      Uttarakhand Community Association of Canada Toronto,
                      Ontario Canada
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 text-[#EE660C]">
                    <FiClock className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col w-full">
                    <h4 className="text-[#1A2340] font-inter font-bold text-[15px] mb-2">
                      Business Hours
                    </h4>

                    <div className="flex flex-col gap-1.5 w-full">
                      <div className="flex justify-between items-center w-full max-w-[240px]">
                        <span className="text-[#4A5568] font-inter text-[14px]">
                          Monday - Friday
                        </span>
                        <span className="text-[#1A2340] font-inter text-[14px] font-medium">
                          9:00 AM - 6:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between items-center w-full max-w-[240px]">
                        <span className="text-[#4A5568] font-inter text-[14px]">
                          Saturday
                        </span>
                        <span className="text-[#1A2340] font-inter text-[14px] font-medium">
                          10:00 AM - 3:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between items-center w-full max-w-[240px]">
                        <span className="text-[#4A5568] font-inter text-[14px]">
                          Sunday
                        </span>
                        <span className="text-[#1A2340] font-inter text-[14px] font-medium">
                          Closed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Become a Volunteer Card */}
            <div className="bg-white border border-[#EE660C]/30 rounded-xl p-8 relative overflow-hidden flex flex-col">
              {/* Faint Hands Sketch Background */}
              <div className="absolute bottom-0 right-0 w-[150px] h-[150px] opacity-[0.2] pointer-events-none">
                <Image
                  src="/images/temple.png" // Fallback to temple if hands sketch isn't available
                  alt="Sketch"
                  fill
                  className="object-contain object-bottom-right"
                />
              </div>

              <div className="relative z-10 w-full max-w-[80%]">
                <h3 className="text-[#1A2340] font-playfair font-bold text-xl mb-3">
                  Become a Volunteer
                </h3>
                <p className="text-[#4A5568] font-inter text-[14px] leading-relaxed mb-6">
                  Make a difference in our community and help us grow together.
                </p>
                <Link
                  href="/join-us"
                  className="inline-flex items-center gap-2 border border-[#EE660C] text-[#EE660C] hover:bg-[#EE660C] hover:text-white transition-colors font-inter font-bold text-[13px] px-6 py-2.5 rounded-md bg-white"
                >
                  Join Us <GrGroup className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
