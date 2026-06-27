import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiUser, FiClock, FiArrowRight } from "react-icons/fi";

export interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  description: string;
  slug: string;
}

export default function BlogCard({
  image,
  category,
  title,
  date,
  author,
  readTime,
  description,
  slug,
}: BlogCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-[0_2px_15px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col group hover:shadow-[0_8px_25px_rgb(0,0,0,0.12)] transition-shadow duration-300">
      {/* Image Container */}
      <div className="w-full h-[200px] sm:h-[220px] relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-[#EE660C] text-white text-[11px] font-inter font-semibold px-2.5 py-1 rounded-sm shadow-md z-10 uppercase tracking-wider">
          {category}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 md:p-6 flex flex-col flex-1 bg-white">
        
        <h3 className="text-[#1A2340] font-playfair font-bold text-xl md:text-[22px] leading-tight mb-3 group-hover:text-[#EE660C] transition-colors duration-300">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-[#718096] font-inter text-[13px] mb-4">
          <div className="flex items-center gap-1.5">
            <FiCalendar className="w-3.5 h-3.5 text-[#EE660C]" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FiUser className="w-3.5 h-3.5 text-[#EE660C]" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FiClock className="w-3.5 h-3.5 text-[#EE660C]" />
            <span>{readTime}</span>
          </div>
        </div>

        <p className="text-[#4A5568] font-inter text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>

        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-1.5 text-[#EE660C] font-inter font-semibold text-sm hover:text-[#d65909] transition-colors mt-auto w-fit"
        >
          Read More <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
