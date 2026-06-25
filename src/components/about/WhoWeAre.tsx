"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function WhoWeAre() {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-[#FCFBF8] py-16 md:py-24 overflow-hidden relative">
      {/* Container */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Image Section (Sketch) */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[550px] aspect-[1.3] mix-blend-multiply">
              {/* Note: I'm using temple.png assuming it is the sketch from the design. */}
              <Image
                src="/images/kedarnath1.png"
                alt="Uttarakhand Temple Sketch"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-start text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {/* Badge/Subtitle */}
            <motion.div variants={textVariants} className="mb-3">
              <span className="text-[#EE660C] font-inter font-bold tracking-[0.15em] text-sm md:text-[15px] uppercase">
                Who We Are
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={textVariants} className="mb-6">
              <h2 className="text-[#1A2340] font-gelasio  font-bold text-[28px] md:text-[32px] lg:text-[36px] leading-[1.2]">
                Connecting Generations<br className="hidden lg:block" /> Through Culture & Community
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={textVariants}>
              <p className="text-[#4A4A4A] font-inter text-base md:text-[17px] leading-[1.8] max-w-xl">
                The Uttarakhand Community Association of Canada was established to
                bring together Uttarakhandi families across Canada, preserve our rich
                cultural heritage, promote community engagement, and create
                opportunities for future generations to stay connected with their roots.
              </p>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
