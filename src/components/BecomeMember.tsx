"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function BecomeMember() {
  return (
    <>
      <section className="relative w-full overflow-hidden">
        {/* BOTTOM SECTION: Become a Member */}
        <div className="w-full bg-[#1A2340] relative border-t-2 border-[#1A2340]/90 shadow-[0_-10px_30px_rgba(26,35,64,0.3)] z-20">
          {/* Subtle decorative mountain outlines on left/right */}
          <div className="absolute left-0 top-[-39] pointer-events-none opacity-[0.5] w-[360px] h-[300px]">
            <Image
              src="/images/blueMoutain.png"
              alt="Mountain Decoration Left"
              fill
              className="object-contain object-bottom"
            />
          </div>
          <div className="absolute right-0 top-[-19] pointer-events-none opacity-[0.5] w-[360px] h-[300px] transform scale-x-[-1]">
            <Image
              src="/images/blueMoutain.png"
              alt="Mountain Decoration Right"
              fill
              // className=" object-bottom"
            />
          </div>

          <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10 md:py-8 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              {/* Icon + Text */}
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 flex-1">
                {/* Circular Emblem */}
                <div className="flex-shrink-0 w-24 h-24 bg-[#EE660C] rounded-full flex items-center justify-center p-1 shadow-lg border-2 border-white/10">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/mandalaArt.svg"
                      alt="Emblem"
                      fill
                      className="object-contain brightness-0 invert" // Turns black SVG to white
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center pt-1 md:pt-2">
                  <h3 className="text-2xl md:text-[28px] font-playfair font-bold text-white mb-2 leading-none">
                    Become a Member Today
                  </h3>
                  <p className="text-gray-300 font-inter text-[14.5px] leading-relaxed max-w-[480px]">
                    Join our growing family and stay connected with
                    Uttarakhand&apos;s culture, traditions, and community events
                    across Canada.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 pointer-events-none opacity-[0.3] w-[520px] h-[240px] transform scale-x-[-1] rotate-[-25deg] z-[-1] overflow-hidden">
                <Image
                  src="/images/flags.png"
                  alt="Mountain Decoration Right"
                  fill
                  // className=" object-bottom"
                />
              </div>
              {/* Button */}
              <div className="flex-shrink-0">
                <Link
                  href="/join-us"
                  className="inline-flex items-center gap-2 bg-[#EE660C] hover:bg-[#D6590A] text-white font-semibold font-inter px-8 py-3.5 rounded-md text-[15.5px] transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Join Us
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
