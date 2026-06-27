"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { FiUserPlus, FiCalendar, FiMail } from "react-icons/fi";

export interface CommonHeroSectionProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt?: string;
  primaryButton?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  };
  secondaryButton?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  };
}

export default function CommonHeroSection({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = "Hero Background",
  primaryButton,
  secondaryButton,
}: CommonHeroSectionProps) {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: -16 },
      { opacity: 1, y: 0, duration: 0.6 },
      0.3,
    )
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 44, skewY: 1.5 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.85 },
        "-=0.25",
      )
      .fromTo(
        descriptionRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.65 },
        "-=0.4",
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.35",
      )
      .fromTo(
        statsRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.55 },
        "-=0.25",
      );
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative w-full overflow-hidden"
        style={{ height: "calc(80vh - 68px)" }}
        aria-label="Hero section"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            quality={92}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Dark gradient overlay — heavy left, fades right */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(5,8,25,0.88) 0%, rgba(5,8,25,0.72) 35%, rgba(5,8,25,0.30) 60%, rgba(5,8,25,0.05) 100%)",
          }}
        />
        {/* Bottom fade to cream for wave transition */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 h-28"
          style={{
            background:
              "linear-gradient(to top, rgba(5,8,25,0.55) 0%, transparent 100%)",
          }}
        />

        {/* Mandala decorative — far left edge */}
        <div className="absolute left-[-290px] top-1/2 -translate-y-1/2 z-10 opacity-[0.15] hidden xl:block pointer-events-none">
          <Image
            src="/images/mandala.svg"
            alt="Mandala Decoration"
            width={580}
            height={580}
            className="mandala-spin"
            style={{ animation: "rotateSlow 35s linear infinite" }}
          />
        </div>
        {/* ── Hero Content ── */}
        {/* <div className="relative z-20 w-full h-full flex items-center px-6 md:px-16 lg:px-24"> */}
        <div className="relative container  z-20 w-full h-full  flex items-center mx-auto px-6 sm:px-10 lg:px-14">
          <div className="max-w-2xl flex flex-col gap-5">
            {/* Badge / Subtitle */}
            {subtitle && (
              <div
                ref={badgeRef}
                className="flex items-center gap-3"
                style={{ opacity: 0 }}
              >
                <span className="text-[#EE660C] text-lg font-serif">❖</span>
                <span className="text-[#EE660C] font-inter font-bold tracking-widest text-sm uppercase">
                  {subtitle}
                </span>
                <div className="w-12 h-[2px] bg-[#EE660C]" />
              </div>
            )}

            {/* Title */}
            <h1
              ref={headlineRef}
              className="text-4xl md:text-5xl lg:text-[54px] font-playfair font-bold text-white leading-[1.15]"
            >
              {title}
            </h1>

            {/* Description */}
            <p
              ref={descriptionRef}
              className="text-gray-300 font-inter text-[16px] md:text-[18px] leading-relaxed max-w-xl"
            >
              {description}
            </p>

            {/* Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-wrap items-center gap-4 mt-4"
            >
              {primaryButton && (
                <Link
                  href={primaryButton.href}
                  className="bg-[#EE660C] hover:bg-[#D85A09] text-white font-inter font-semibold px-8 py-3.5 rounded-lg flex items-center gap-2 transition-colors shadow-lg"
                >
                  {primaryButton.label}
                  {primaryButton.icon}
                </Link>
              )}

              {secondaryButton && (
                <Link
                  href={secondaryButton.href}
                  className="bg-transparent border border-white/30 hover:border-white hover:bg-white/5 text-white font-inter font-semibold px-8 py-3.5 rounded-lg flex items-center gap-3 transition-colors"
                >
                  {secondaryButton.label}
                  {secondaryButton.icon}
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Bottom wave → transitions to cream welcome section */}
        <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 72"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full block"
            style={{ height: "72px" }}
          >
            <path
              d="M0,72 L0,38 Q180,6 360,28 Q540,52 720,28 Q900,6 1080,28 Q1260,52 1440,18 L1440,72 Z"
              fill="#FDF8F0"
            />
          </svg>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-20 right-10 z-30 hidden lg:flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-white/35 text-[9px] tracking-[0.22em] uppercase font-inter">
            Scroll
          </span>
        </motion.div>
      </section>
    </>
  );
}
