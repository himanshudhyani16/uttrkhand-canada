"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const cultureItems = [
  {
    id: 1,
    image: "/images/event_cultural.png",
    title: "Folk Music & Dance",
    description: "Vibrant Chholiya dance and traditional melodies.",
  },
  {
    id: 2,
    image: "/images/event_harela.png",
    title: "Festivals & Fairs",
    description: "Joyous celebrations like Uttarayan Mela and Harela.",
  },
  {
    id: 3,
    image: "/images/culture_aipan.png",
    title: "Aipan Art",
    description: "Sacred folk art that reflects devotion and heritage.",
  },
  {
    id: 4,
    image: "/images/culture_food.png",
    title: "Traditional Cuisine",
    description: "Aloo Ke Gutke, Kafuli, Jhangora Kheer, Bal Mithai and more.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CultureSection() {
  return (
    <section className="py-24 bg-[#FCFBF8] relative overflow-hidden">
      {/* Mandala decorative — far left edge */}
      <div className="absolute left-[-290px] top-1/2 -translate-y-1/2 z-10 opacity-[0.25] hidden xl:block pointer-events-none">
        <Image
          src="/images/aipan.png"
          alt="Mandala Decoration"
          width={580}
          height={580}
          className="mandala-spin"
          style={{ animation: "rotateSlow 35s linear infinite" }}
        />
      </div>
      <div className="absolute right-[-290px] top-1/2 -translate-y-1/2 z-10 opacity-[0.25] hidden xl:block pointer-events-none">
        <Image
          src="/images/aipan.png"
          alt="Mandala Decoration"
          width={580}
          height={580}
          className="mandala-spin"
          style={{ animation: "rotateSlow 35s linear infinite" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 flex items-center justify-center gap-5">
          <span className="text-[#EE660C] text-2xl font-serif select-none opacity-80">
            ❖
          </span>
          <h2 className="text-4xl md:text-[42px] font-playfair font-bold text-[#1A2340]">
            Our Culture, Our Pride
          </h2>
          <span className="text-[#EE660C] text-2xl font-serif select-none opacity-80">
            ❖
          </span>
        </div>

        {/* Culture Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cultureItems.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="bg-white rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-300 flex flex-col group text-center"
            >
              <div className="w-full h-[290px] relative p-1.5 pb-0">
                <div className="relative w-full h-full rounded-t-[12px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
              </div>
              <div className="px-5 py-7 flex flex-col flex-grow items-center justify-start">
                <h3 className="text-[17px] font-bold text-[#1A2340] font-inter leading-snug mb-2.5">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-inter text-[13.5px] leading-relaxed max-w-[220px]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
