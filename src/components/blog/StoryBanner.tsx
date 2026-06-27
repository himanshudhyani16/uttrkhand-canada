"use client";

import Image from "next/image";
import Link from "next/link";
import { FiEdit3, FiMail } from "react-icons/fi";

export default function StoryBanner() {
  return (
    <section className="bg-white py-12 ">
      <div className=" mx-auto px-4 sm:px-6 md:px-12">
        {/* Main wrapper must NOT have overflow-hidden so the temple can break out */}
        <div className="relative w-full min-h-[300px] md:min-h-[220px] flex items-center">
          {/* Inner Background Container (handles rounded corners and overflow for the background only) */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden bg-[#0A192F] shadow-xl">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-90 mix-blend-luminosity">
              <Image
                src="/images/blog_cta_bg.png"
                alt="Himalayan Mountains"
                fill
                className="object-cover"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/80 to-[#0A192F]/90"></div>

            {/* Right Decorative Image (Flags) - Kept inside so it clips to the rounded corners */}
            <div className="absolute -right-6 md:right-0 top-0 w-[150px] md:w-[350px] h-[150px] md:h-[250px] opacity-90 pointer-events-none mix-blend-screen hidden md:block rotate-[25deg]">
              <Image
                src="/images/flags2.png"
                alt="Prayer Flags"
                fill
                className="object-contain object-top"
              />
            </div>
          </div>

          <div className="absolute -left-4 md:-left-0 -top-12 md:-top-20 bottom-0 w-[220px] md:w-[299px] z-20 pointer-events-none hidden sm:block">
            <Image
              src="/images/kedarnath2.png"
              alt="Temple"
              fill
              className="rounded-bl-2xl object-cover object-bottom drop-shadow-2xl"
            />
          </div>

          {/* Content Container - Z-index above the background */}
          <div className="relative z-30 w-full px-6 py-10 md:py-12 md:px-[320px] flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-white font-playfair font-bold text-2xl md:text-3xl lg:text-4xl mb-3 drop-shadow-md">
                Have a Story to Share?
              </h2>
              <p className="text-gray-200 font-inter text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                We'd love to hear from you! Contribute to our blog and inspire
                our community with your experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                href="/write-for-us"
                className="bg-[#EE660C] hover:bg-[#d65909] text-white font-inter font-semibold py-3 px-6 md:px-8 rounded-md transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <FiEdit3 className="w-4 h-4 md:w-5 md:h-5" /> Write for Us
              </Link>
              <Link
                href="/contact"
                className="bg-transparent hover:bg-white/10 text-white border border-white font-inter font-semibold py-3 px-6 md:px-8 rounded-md transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Contact Us <FiMail className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
