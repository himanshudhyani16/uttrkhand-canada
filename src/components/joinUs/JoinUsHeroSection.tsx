"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { FiUserPlus, FiCalendar } from "react-icons/fi";

export default function JoinUsHeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
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
        subtitleRef.current,
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
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100vh - 68px)" }}
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-kedarnath.png"
          alt="Kedarnath Temple in the Himalayas — Uttarakhand"
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
      <div className="relative z-20 h-full flex items-center">
        <div className="container  w-full mx-auto px-6 sm:px-10 lg:px-14">
          <div className="max-w-4xl">
            {/* Headline */}
            <h1
              ref={headlineRef}
              className="font-gelasio font-bold text-white leading-[1.1] mb-5 text-[36px] md:text-[48px] lg:text-[72px]"
              style={{ opacity: 0 }}
            >
              Connecting
              <span className="text-[#EE660C]"> Uttarakhandi</span> Hearts
              Across Canada
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-white/75 font-inter font-light leading-relaxed mb-8"
              style={{
                fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
                opacity: 0,
                maxWidth: "440px",
              }}
            >
              Preserving our heritage, celebrating our culture,
              <br />
              and building a stronger community together.
            </p>

            {/* CTA Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-wrap gap-3 mb-10"
              style={{ opacity: 0 }}
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/join-us"
                  id="hero-join-community-btn"
                  className="inline-flex items-center gap-2 bg-[#E8651A] hover:bg-[#C9520F] text-white border-2 border-[#EE660C] font-semibold font-inter px-6 py-3 rounded-md text-sm transition-all duration-200 shadow-lg hover:shadow-[0_6px_24px_rgba(232,101,26,0.45)]"
                >
                  <FiUserPlus className="w-5 h-5" strokeWidth={2.5} />
                  Join Our Community
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/events"
                  id="hero-events-btn"
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-[#EE660C] text-white font-semibold font-inter px-6 py-3 rounded-md text-sm border-2 border-white/60 hover:border-[#EE660C] transition-all duration-200"
                >
                  <FiCalendar className="w-4 h-4" strokeWidth={2} />
                  Upcoming Events
                </Link>
              </motion.div>
            </div>
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
  );
}
