"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import Link from "next/link";
import { FiUserPlus } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";

const navLinks = [
  { href: "/", label: "Home", active: true },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/join-us", label: "Join Us" },
  { href: "/about-uttarakhand", label: "About Uttarakhand" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.fromTo(
      headerRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1 },
    );
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
      }`}
      style={{ opacity: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            {/* Mountain + Maple Leaf SVG logo */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Mountains */}
              <path d="M4 52 L18 24 L26 36 L34 22 L50 52Z" fill="#1A2340" />
              <path
                d="M18 24 L22 31 L18 28 L14 31Z"
                fill="white"
                opacity="0.9"
              />
              <path
                d="M34 22 L38 29 L34 26 L30 29Z"
                fill="white"
                opacity="0.9"
              />
              {/* Trees */}
              <path
                d="M6 52 L6 46 M4 48 L6 44 L8 48"
                stroke="#1A2340"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M52 52 L52 46 M50 48 L52 44 L54 48"
                stroke="#1A2340"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              {/* Maple leaf - top right */}
              <path
                d="M46 6 L48 10 L52 8 L50 12 L54 13 L50 14 L52 18 L48 16 L46 20 L44 16 L40 18 L42 14 L38 13 L42 12 L40 8 L44 10Z"
                fill="#E8651A"
              />
              <line
                x1="46"
                y1="20"
                x2="46"
                y2="23"
                stroke="#E8651A"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <div className="leading-[1.2]">
              <span className="block font-extrabold text-[15px] tracking-wider text-[#1A2340] font-inter uppercase">
                Uttarakhand
              </span>
              <span className="block text-[8.5px] tracking-[0.12em] text-gray-500 font-inter uppercase font-medium">
                Community Association of Canada
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav
            className="hidden lg:flex items-center gap-5 xl:gap-7"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[13.5px] font-semibold font-inter pb-0.5 transition-colors duration-200
                  ${
                    link.active
                      ? "text-[#E8651A]"
                      : "text-gray-700 hover:text-[#E8651A]"
                  }
                `}
              >
                {link.label}
                {link.active && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#E8651A] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* ── Join Us CTA ── */}
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:block"
            >
              <Link
                href="/join-us"
                id="header-join-btn"
                className="inline-flex items-center gap-2 bg-[#E8651A] hover:bg-[#C9520F] text-white text-sm font-semibold font-inter px-5 py-2.5 rounded-md transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {/* Person+ icon */}
                <GrGroup  className="w-5 h-5" strokeWidth={2.5} />
                Join Us
              </Link>
            </motion.div>

            {/* Hamburger */}
            <button
              id="mobile-menu-btn"
              className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <motion.span
                className="block h-0.5 w-5 bg-gray-700 rounded-full"
                animate={
                  isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block h-0.5 w-5 bg-gray-700 rounded-full"
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block h-0.5 w-5 bg-gray-700 rounded-full"
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.25 }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <nav className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium font-inter transition-colors ${link.active ? "text-[#E8651A] bg-orange-50" : "text-gray-700 hover:text-[#E8651A] hover:bg-orange-50"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2 pb-1">
                <Link
                  href="/join-us"
                  className="flex items-center justify-center gap-2 bg-[#E8651A] text-white text-sm font-semibold px-4 py-2.5 rounded-md"
                >
                  Join Us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
