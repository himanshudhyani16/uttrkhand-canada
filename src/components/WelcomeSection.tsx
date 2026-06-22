"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


export default function WelcomeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const dividerLineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  // GSAP: animate the horizontal divider lines on scroll
  useEffect(() => {
    if (!dividerLineRef.current) return;
    const lines = dividerLineRef.current.querySelectorAll(".gsap-line");
    gsap.fromTo(
      lines,
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: dividerLineRef.current,
          start: "top 88%",
        },
      }
    );
  }, []);

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.72, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  const illustrationVariants: Variants = {
    hidden: { opacity: 0, scale: 0.82 },
    visible: {
      opacity: 1, scale: 1,
      transition: { duration: 0.75, ease: "easeOut" as const },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="welcome"
      className="relative bg-[#E8651A]/10  py-14 md:py-16 overflow-hidden"
      aria-label="Welcome section"
    >
      {/* Subtle background blobs */}
      <div className="absolute top-0 left-0 w-56 h-56 rounded-full bg-[#E8651A]/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none"/>
      <div className="absolute bottom-0 right-0 w-44 h-44 rounded-full bg-[#E8651A]/5 translate-x-1/3 translate-y-1/3 pointer-events-none"/>

      <div className="container mx-auto px-4 sm:px-8">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-8"> */}
        {/* ── Om Divider ── */}
        <div ref={dividerLineRef} className="flex items-center justify-center gap-4 mb-10">
          <div
            className="gsap-line h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-[#E8651A]/50"
            style={{ transformOrigin: "right", transform: "scaleX(0)", opacity: 0 }}
          />
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#E8651A] text-2xl font-serif select-none"
          >
            ❁
          </motion.span>
          <span className="text-[#C9520F] text-[22px] font-serif select-none">ॐ</span>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#E8651A] text-2xl font-serif select-none"
          >
            ❁
          </motion.span>
          <div
            className="gsap-line h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-[#E8651A]/50"
            style={{ transformOrigin: "left", transform: "scaleX(0)", opacity: 0 }}
          />
        </div>

        {/* ── 3-column layout ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-[280px_1fr_280px] lg:grid-cols-[320px_1fr_320px] gap-6 md:gap-10 items-center"
        >
          {/* Left: Praying Hands */}
          <motion.div variants={illustrationVariants} className="flex justify-center md:justify-end">
            <motion.div
              className="w-28 h-36 md:w-68 md:h-68"
              animate={isInView ? { y: [0, -9, 0] } : {}}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <Image src="/images/prayingHands.png" alt="Praying Hands" width={184} height={296} className="w-full h-full object-contain drop-shadow-sm" />
            </motion.div>
          </motion.div>

          {/* Center: Text */}
          <motion.div variants={fadeUpVariants} className="text-center px-2 md:px-4">
            <h2 className="font-playfair font-bold text-[#E8651A] leading-snug mb-3"
              style={{ fontSize: "clamp(1.65rem, 3.2vw, 2.2rem)" }}>
              Namaste &amp;
              <br />
              Jai Badri Vishal!
            </h2>

            <div className="w-10 h-[2px] bg-[#E8651A]/40 mx-auto mb-4 rounded-full"/>

            <p className="text-gray-600 font-inter leading-relaxed"
              style={{ fontSize: "clamp(0.82rem, 1.4vw, 0.92rem)" }}>
              A warm welcome to the Uttarakhand Community Association of Canada.
              Our mission is to unite Uttarakhandi families, celebrate our rich
              cultural heritage, support one another, and pass our traditions to
              future generations living in Canada.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {["Heritage", "Culture", "Community", "Unity"].map((tag) => (
                <span key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-[#E8651A]/10 text-[#C9520F] text-[11px] font-semibold font-inter border border-[#E8651A]/20 tracking-wide">
                  {tag}
                </span>
              ))}
            </div>

            <motion.div className="mt-5">
              <motion.a
                href="/about"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-1.5 text-[#E8651A] text-[13px] font-semibold font-inter hover:underline underline-offset-2 transition-all"
              >
                Learn more about us
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Mountain Temple */}
          <motion.div variants={illustrationVariants} className="flex justify-center md:justify-start">
            <motion.div
              // className="w-32 h-36 md:w-98 md:h-98"
              animate={isInView ? { y: [0, -7, 0] } : {}}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            >
              <Image src="/images/greenMoutain.png" alt="Mountain Temple" width={572} height={572} className="w-full h-full object-contain drop-shadow-sm" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
