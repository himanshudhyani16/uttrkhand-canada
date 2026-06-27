import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiUser, FiClock, FiChevronRight } from "react-icons/fi";

interface BlogDetailHeroProps {
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  description: string;
  image: string;
}

export default function BlogDetailHero({
  title,
  category,
  date,
  author,
  readTime,
  description,
  image,
}: BlogDetailHeroProps) {
  return (
    <div className="w-full">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm font-inter text-[#4A5568] mb-6">
        <Link href="/" className="hover:text-[#EE660C] transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Home
        </Link>
        <FiChevronRight className="w-4 h-4 text-gray-400" />
        <Link href="/blog" className="hover:text-[#EE660C] transition-colors">
          Blog
        </Link>
        <FiChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-[#1A2340] font-medium truncate">{title}</span>
      </div>

      {/* Hero Image Block */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000e0] via-[#00000080] to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end max-w-3xl z-10">
          
          <div className="bg-[#EE660C] text-white text-xs font-inter font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider w-fit mb-5">
            {category}
          </div>

          <h1 className="text-white font-playfair font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-5 drop-shadow-md">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-gray-200 font-inter text-sm mb-5 drop-shadow-md">
            <div className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4 text-white" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiUser className="w-4 h-4 text-white" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="w-4 h-4 text-white" />
              <span>{readTime}</span>
            </div>
          </div>

          <div className="h-[2px] w-12 bg-[#EE660C] mb-4"></div>

          <p className="text-gray-200 font-inter text-base md:text-lg leading-relaxed drop-shadow-md max-w-2xl">
            {description}
          </p>
          
        </div>
      </div>
    </div>
  );
}
