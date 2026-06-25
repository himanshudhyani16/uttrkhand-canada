import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMail } from "react-icons/fi";

interface InnerPageHeroProps {
  subtitle: string;
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  primaryButton?: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
}

export default function InnerPageHero({
  subtitle,
  title,
  description,
  imageSrc,
  primaryButton,
  secondaryButton,
}: InnerPageHeroProps) {
  return (
    <div className="relative w-full bg-[#FAFAFA] pt-24 md:pt-32 pb-8">
      {/* Main Banner Container */}
      <div className="relative w-full  mx-auto h-[450px] md:h-[500px] overflow-hidden bg-[#1A2340] rounded-none md:rounded-[24px] shadow-2xl flex flex-col md:flex-row">
        
        {/* Background Image (Right Side) */}
        <div className="absolute inset-0 md:left-[40%] z-0 h-full">
          <Image
            src={imageSrc}
            alt="Hero Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Mobile Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-[#1A2340]/70 md:hidden" />
        </div>

        {/* Slanted Blue Overlay (Left Side) */}
        {/* We use an SVG to create the smooth curved/slanted cut over the image */}
        <div className="hidden md:block absolute top-0 left-[40%] h-full w-[200px] z-10">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full text-[#1A2340] fill-current"
          >
            <path d="M0 0 Q 80 50 0 100 L 0 100 L -100 100 L -100 0 Z" />
          </svg>
        </div>
        <div className="hidden md:block absolute inset-y-0 left-0 w-[40%] bg-[#1A2340] z-10" />

        {/* Mandala/Decorative Watermark on Left */}
        <div className="absolute top-[-50px] left-[-50px] w-[300px] h-[300px] opacity-[0.03] z-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
             {/* Simple mandala/flower placeholder shape */}
             <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" strokeDasharray="4 4" />
             <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="1" fill="none" />
             <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" />
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-20 w-full h-full flex items-center px-6 md:px-16 lg:px-24">
          <div className="max-w-2xl flex flex-col gap-5">
            
            {/* Subtitle */}
            <div className="flex items-center gap-3">
              <span className="text-[#EE660C] text-lg font-serif">❖</span>
              <span className="text-[#EE660C] font-inter font-bold tracking-widest text-sm uppercase">
                {subtitle}
              </span>
              <div className="w-12 h-[2px] bg-[#EE660C]" />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-playfair font-bold text-white leading-[1.15]">
              {title}
            </h1>

            {/* Description */}
            <p className="text-gray-300 font-inter text-[16px] md:text-[18px] leading-relaxed max-w-xl">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
              {primaryButton && (
                <Link
                  href={primaryButton.href}
                  className="bg-[#EE660C] hover:bg-[#D85A09] text-white font-inter font-semibold px-8 py-3.5 rounded-lg flex items-center gap-2 transition-colors shadow-lg"
                >
                  {primaryButton.label}
                  <span className="font-serif ml-1">❖</span>
                </Link>
              )}
              
              {secondaryButton && (
                <Link
                  href={secondaryButton.href}
                  className="bg-transparent border border-white/30 hover:border-white hover:bg-white/5 text-white font-inter font-semibold px-8 py-3.5 rounded-lg flex items-center gap-3 transition-colors"
                >
                  {secondaryButton.label}
                  <FiMail className="w-5 h-5" />
                </Link>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Torn Paper / Decorative Bottom Divider */}
      {/* We add this below the banner, hanging slightly over it or just under it */}
      <div className="relative w-full h-[30px] md:h-[40px] mt-[-20px] md:mt-[-25px] z-30 pointer-events-none px-4 md:px-0">
        <div className="max-w-[1440px] mx-auto h-full relative">
           <svg
             viewBox="0 0 1200 40"
             preserveAspectRatio="none"
             className="w-full h-full text-[#FAFAFA] fill-current drop-shadow-[0_-5px_5px_rgba(0,0,0,0.05)]"
           >
             {/* A stylized torn edge effect */}
             <path d="M0,40 L0,20 Q150,40 300,10 T600,20 T900,10 T1200,25 L1200,40 Z" />
           </svg>
        </div>
      </div>

      {/* Center Decorative Diamond */}
      <div className="flex justify-center -mt-6 relative z-40">
        <div className="bg-[#FAFAFA] px-4">
           <span className="text-[#EE660C] text-3xl font-serif">❖</span>
        </div>
      </div>
    </div>
  );
}
