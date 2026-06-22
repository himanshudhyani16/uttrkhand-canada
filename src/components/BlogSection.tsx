"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const blogs = [
  {
    id: 1,
    image: "/images/devbhoomi_bg.png",
    title: "Why Uttarakhand Culture Matters Abroad",
    description: "Keeping our roots alive wherever we are.",
    link: "/blog/uttarakhand-culture-abroad",
  },
  {
    id: 2,
    image: "/images/polaroid_3.png",
    title: "Top 10 Places to Visit in Uttarakhand",
    description: "Explore the most beautiful destinations.",
    link: "/blog/top-10-places",
  },
  {
    id: 3,
    image: "/images/event_harela.png",
    title: "Celebrating Harela Festival in Canada",
    description: "How we celebrate traditions together.",
    link: "/blog/harela-festival",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function BlogSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex items-center justify-center gap-5">
          <span className="text-[#EE660C] text-2xl font-serif select-none opacity-80">❖</span>
          <h2 className="text-4xl md:text-[42px] font-playfair font-bold text-[#1A2340]">
            Latest from Our Blog
          </h2>
          <span className="text-[#EE660C] text-2xl font-serif select-none opacity-80">❖</span>
        </div>

        {/* Blog Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogs.map((blog) => (
            <motion.div 
              key={blog.id}
              variants={cardVariants}
              className="relative bg-[#FCFBF8] rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.09)] border border-gray-100 transition-all duration-300 flex flex-col group"
            >
              {/* Image on Top */}
              <div className="w-full h-[220px] relative overflow-hidden">
                <Image 
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              
              {/* Text Content Below */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-[20px] font-bold text-[#1A2340] font-inter leading-tight mb-3 group-hover:text-[#EE660C] transition-colors">
                  <Link href={blog.link} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {blog.title}
                  </Link>
                </h3>
                <p className="text-gray-600 font-inter text-[15px] leading-relaxed mb-6 flex-grow">
                  {blog.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-[#1A2340] font-bold font-inter text-[15px] group-hover:text-[#EE660C] transition-colors">
                    Read More
                    <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#1A2340] hover:bg-[#2A375C] text-white font-semibold font-inter px-8 py-3.5 rounded-lg text-[15px] transition-colors duration-200 shadow-md"
            >
              View All Blogs
              <FiArrowRight className="w-[18px] h-[18px]" strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
