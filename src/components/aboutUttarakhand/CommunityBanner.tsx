"use client";

import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiUsers } from "react-icons/fi";

export default function CommunityBanner() {
  return (
    <section className="w-full py-8 md:py-0 bg-[#F9F4EE] border-y border-[#EAE0D5] relative overflow-hidden flex items-center min-h-[160px] md:min-h-[180px]">
      {/* Background Mandalas */}
      <div className="absolute left-0 top-0 w-[300px] h-[300px] opacity-[0.5] pointer-events-none -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/images/mandala1.png"
          alt="Mandala"
          fill
          className="object-contain"
          style={{ animation: "rotateSlow 60s linear infinite" }}
        />
      </div>
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] opacity-[0.5] pointer-events-none translate-x-1/3 translate-y-1/3">
        <Image
          src="/images/mandala1.png"
          alt="Mandala"
          fill
          className="object-contain"
          style={{ animation: "rotateSlow 60s linear infinite" }}
        />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        {/* Left Side: Temple Sketch */}
        <div className="w-full md:w-[280px] lg:w-[320px] h-[140px] md:h-[180px] relative hidden sm:block shrink-0 -ml-4 md:-ml-8 opacity-90 mix-blend-multiply">
          <Image
            src="/images/kedarnath.png"
            alt="Uttarakhand Temple Sketch"
            fill
            className="object-contain object-left-bottom"
          />
        </div>

        {/* Center: Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left py-2 md:py-8 max-w-2xl mx-auto md:mx-4 z-20">
          <h2 className="text-[#1A2340] font-gelasio font-bold text-2xl md:text-3xl lg:text-[34px] leading-tight mb-2 md:mb-3">
            Proud of Our Roots,
            <br className="hidden md:block" /> Connected Across Canada
          </h2>
          <p className="text-[#1A2340] font-inter text-[13px] md:text-[15px] leading-relaxed max-w-[520px] opacity-80">
            The Uttarakhand Community in Canada carries forward the essence of
            our homeland with pride and unity.
          </p>
        </div>

        {/* Right Side: Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 shrink-0 relative z-20 md:pr-8 lg:pr-16">
          <Link
            href="/community"
            className="bg-[#EE660C] hover:bg-[#d65909] text-white px-6 md:px-7 py-2.5 md:py-3 rounded-md font-inter font-semibold text-sm transition-colors flex items-center justify-center gap-2 w-full sm:w-auto shadow-md"
          >
            Join Community
            <FiUsers className="w-4 h-4" />
          </Link>

          <Link
            href="/events"
            className="bg-transparent border-[1.5px] border-[#1A2340] text-[#1A2340] hover:bg-[#1A2340] hover:text-white px-6 md:px-7 py-2.5 md:py-3 rounded-md font-inter font-semibold text-sm transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Explore Events
            <FiCalendar className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
