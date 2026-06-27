"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import BlogCard from "./BlogCard";
import BlogSidebar from "./BlogSidebar";

const recentBlogs = [
  {
    id: 1,
    image: "/images/season_summer.png",
    category: "Tourism",
    title: "Nainital – The Lake District Gem of Uttarakhand",
    date: "May 18, 2024",
    author: "Admin",
    readTime: "5 min read",
    description: "Discover the scenic beauty, boating experience, and local attractions that make Nainital a must-visit destination.",
    slug: "nainital-lake-district",
  },
  {
    id: 2,
    image: "/images/season_winter.png",
    category: "Temples",
    title: "Kedarnath Dham – A Journey of Faith and Devotion",
    date: "May 15, 2024",
    author: "Admin",
    readTime: "6 min read",
    description: "Everything you need to know about Kedarnath Dham, its history, significance, and travel guidelines.",
    slug: "kedarnath-dham-journey",
  },
  {
    id: 3,
    image: "/images/season_spring.png",
    category: "Festivals",
    title: "Harela Festival – A Celebration of Nature and New Beginnings",
    date: "May 10, 2024",
    author: "Admin",
    readTime: "4 min read",
    description: "Celebrate Harela, the beautiful festival of Uttarakhand that honors nature, agriculture, and cultural roots.",
    slug: "harela-festival",
  },
  {
    id: 4,
    image: "/images/discover_culture.png",
    category: "Uttarakhand Culture",
    title: "Uttarakhandi Culture & Traditions We Cherish",
    date: "May 08, 2024",
    author: "Admin",
    readTime: "7 min read",
    description: "Explore the rich traditions, folk music, dance, cuisine, and lifestyle that define our unique Uttarakhandi identity.",
    slug: "uttarakhandi-culture",
  },
  {
    id: 5,
    image: "/images/season_autumn.png",
    category: "Travel Blogs",
    title: "Trekker's Paradise – Top 7 Treks in Uttarakhand",
    date: "May 05, 2024",
    author: "Admin",
    readTime: "5 min read",
    description: "From Valley of Flowers to Roopkund, explore the best trekking routes for adventure lovers.",
    slug: "trekkers-paradise",
  },
  {
    id: 6,
    image: "/images/season_monsoon.png",
    category: "Success Stories",
    title: "From Mountains to Canada – An Inspiring Journey",
    date: "May 02, 2024",
    author: "Admin",
    readTime: "4 min read",
    description: "Read inspiring stories of Uttarakhandi individuals who moved to Canada and made a difference.",
    slug: "mountains-to-canada",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#FCFBF8] py-12 md:py-20 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          
          {/* Main Content (Left Side) */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
              <div>
                <h2 className="text-[#1A2340] font-playfair font-bold text-2xl md:text-3xl lg:text-[32px] mb-2">
                  Latest Blogs
                </h2>
                {/* Decorative Line */}
                <div className="flex items-center">
                  <div className="h-[2px] w-6 bg-[#EE660C]"></div>
                  <svg className="w-4 h-4 text-[#EE660C] -ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L22 12L12 22L9 19L15 13H2V11H15L9 5L12 2Z" />
                  </svg>
                </div>
              </div>
              
              <Link 
                href="/blog" 
                className="hidden sm:inline-flex items-center gap-1.5 text-[#EE660C] font-inter font-semibold hover:text-[#d65909] transition-colors"
              >
                View All Blogs <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {recentBlogs.map((blog) => (
                <BlogCard key={blog.id} {...blog} />
              ))}
            </div>

            {/* Mobile View All Button */}
            <Link 
              href="/blog" 
              className="mt-8 sm:hidden inline-flex items-center justify-center gap-1.5 bg-[#EE660C] text-white font-inter font-semibold py-3 px-6 rounded-md shadow-md w-full"
            >
              View All Blogs <FiArrowRight className="w-4 h-4" />
            </Link>

          </div>

          {/* Sidebar (Right Side) */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            {/* Desktop Header alignment spacing */}
            <div className="hidden lg:block h-[90px]"></div>
            <BlogSidebar />
          </div>

        </div>

      </div>
    </section>
  );
}
