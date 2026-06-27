"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiImage, FiVideo, FiFolder, FiRefreshCw, FiArrowRight, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

type MediaType = "all" | "photo" | "video" | "album";

interface MediaItem {
  id: number;
  type: "photo" | "video" | "album";
  src: string;
  poster?: string;
  colSpan: string;
  title?: string;
  count?: number;
  date?: string;
}

const mediaItems: MediaItem[] = [
  // Row 1
  { id: 1, type: "photo", src: "/images/discover_culture.png", colSpan: "md:col-span-1" },
  { id: 2, type: "photo", src: "/images/season_winter.png", colSpan: "md:col-span-2" },
  { id: 3, type: "video", src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", poster: "/images/season_summer.png", colSpan: "md:col-span-1" },
  // Row 2
  { id: 4, type: "photo", src: "/images/season_monsoon.png", colSpan: "md:col-span-1" },
  { id: 5, type: "photo", src: "/images/season_spring.png", colSpan: "md:col-span-1" },
  { id: 6, type: "photo", src: "/images/discover_culture.png", colSpan: "md:col-span-2" },
  // Row 3
  { id: 7, type: "video", src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", poster: "/images/blog_cta_bg.png", colSpan: "md:col-span-1" },
  { id: 8, type: "photo", src: "/images/discover_culture.png", colSpan: "md:col-span-1" },
  { id: 9, type: "photo", src: "/images/season_winter.png", colSpan: "md:col-span-2" },
  // Row 4
  { id: 10, type: "photo", src: "/images/season_autumn.png", colSpan: "md:col-span-1" },
  { id: 11, type: "photo", src: "/images/blog_cta_bg.png", colSpan: "md:col-span-2" },
  { id: 12, type: "video", src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", poster: "/images/season_monsoon.png", colSpan: "md:col-span-1" },
  
  // Albums
  { id: 13, type: "album", src: "/images/discover_culture.png", colSpan: "md:col-span-1", title: "Harela Festival 2024", count: 98, date: "May 2024" },
  { id: 14, type: "album", src: "/images/season_winter.png", colSpan: "md:col-span-1", title: "Kedarnath Yatra 2024", count: 76, date: "Jun 2024" },
  { id: 15, type: "album", src: "/images/about-main.png", colSpan: "md:col-span-1", title: "Community Picnic", count: 64, date: "Apr 2024" },
  { id: 16, type: "album", src: "/images/season_summer.png", colSpan: "md:col-span-1", title: "Diwali Celebration 2023", count: 82, date: "Nov 2023" },
  { id: 17, type: "album", src: "/images/season_spring.png", colSpan: "md:col-span-1", title: "Holi Celebration 2024", count: 72, date: "Mar 2024" },
  { id: 18, type: "album", src: "/images/season_autumn.png", colSpan: "md:col-span-1", title: "Nainital Trip 2024", count: 58, date: "Jul 2024" },
  { id: 19, type: "album", src: "/images/blog_cta_bg.png", colSpan: "md:col-span-1", title: "Uttarakhand Landscapes", count: 120, date: "Aug 2024" },
  { id: 20, type: "album", src: "/images/discover_culture.png", colSpan: "md:col-span-1", title: "Temple Visits", count: 96, date: "Sep 2024" },
  { id: 21, type: "album", src: "/images/season_winter.png", colSpan: "md:col-span-1", title: "Winter in Uttarakhand", count: 68, date: "Jan 2024" },
];

export default function LatestUploads() {
  const [activeFilter, setActiveFilter] = useState<MediaType>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  // Derived filtered items so Prev/Next only cycles through what is currently visible
  const filteredMedia = mediaItems.filter(item => 
    activeFilter === 'all' ? item.type !== 'album' : item.type === activeFilter
  );

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredMedia.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredMedia.length) % filteredMedia.length);
    }
  };

  const closeModal = () => setSelectedIndex(null);

  return (
    <section className="bg-white py-12 md:py-20 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-[#1A2340] font-playfair font-bold text-2xl md:text-3xl lg:text-[32px] mb-1">
              Latest Uploads
            </h2>
            <div className="h-[2px] w-12 bg-[#EE660C] mt-1"></div>
          </div>
          
         
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10">
          <button 
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2 rounded-md font-inter font-medium text-sm transition-colors ${
              activeFilter === "all" 
                ? "bg-[#EE660C] text-white shadow-md border border-[#EE660C]" 
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#EE660C] hover:text-[#EE660C]"
            }`}
          >
            All
          </button>
          
          <button 
            onClick={() => setActiveFilter("photo")}
            className={`px-5 py-2 rounded-md font-inter font-medium text-sm flex items-center gap-2 transition-colors ${
              activeFilter === "photo" 
                ? "bg-[#EE660C] text-white shadow-md border border-[#EE660C]" 
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#EE660C] hover:text-[#EE660C]"
            }`}
          >
            <FiImage className="w-4 h-4" /> Photos
          </button>

          <button 
            onClick={() => setActiveFilter("video")}
            className={`px-5 py-2 rounded-md font-inter font-medium text-sm flex items-center gap-2 transition-colors ${
              activeFilter === "video" 
                ? "bg-[#EE660C] text-white shadow-md border border-[#EE660C]" 
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#EE660C] hover:text-[#EE660C]"
            }`}
          >
            <FiVideo className="w-4 h-4" /> Videos
          </button>

          <button 
            onClick={() => setActiveFilter("album")}
            className={`px-5 py-2 rounded-md font-inter font-medium text-sm flex items-center gap-2 transition-colors ${
              activeFilter === "album" 
                ? "bg-[#EE660C] text-white shadow-md border border-[#EE660C]" 
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#EE660C] hover:text-[#EE660C]"
            }`}
          >
            <FiFolder className="w-4 h-4" /> Albums
          </button>
        </div>

        {/* Gallery Grid */}
        <div className={`grid gap-4 transition-all duration-500 ${activeFilter === 'album' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[280px]' : 'grid-cols-1 md:grid-cols-4 auto-rows-[220px]'}`}>
          {filteredMedia.map((item, index) => (
            <div 
              key={item.id} 
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${activeFilter === 'album' ? 'col-span-1' : item.colSpan}`}
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={item.poster || item.src}
                alt={`Gallery media ${item.id}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Overlay on hover for Photos and Videos */}
              {item.type !== "album" && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              )}

              {/* Album Gradient and Text Overlay */}
              {item.type === "album" && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex items-end justify-between p-4 md:p-5">
                  <div className="flex-1 pr-4">
                    <h3 className="text-white font-inter font-bold text-[17px] md:text-[19px] leading-tight mb-1.5 group-hover:-translate-y-1 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 font-inter text-[13px] md:text-[14px] group-hover:-translate-y-1 transition-transform duration-300">
                      {item.date} &middot; {item.count} Photos
                    </p>
                  </div>
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-black/40 border-[1.5px] border-white/40 backdrop-blur-md flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 group-hover:border-white/70 transition-all duration-300">
                    <FiImage className="w-5 h-5 md:w-[22px] md:h-[22px] text-white" />
                  </div>
                </div>
              )}
              
              {/* Play Button Overlay for Videos */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-[#EE660C] group-hover:border-[#EE660C] transition-colors duration-300 shadow-lg">
                    <FaPlay className="text-white w-4 h-4 ml-1" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-2 bg-white text-[#EE660C] border border-[#EE660C]/30 hover:border-[#EE660C] font-inter font-semibold py-3 px-8 rounded-md transition-colors shadow-sm hover:shadow-md">
            {activeFilter === 'album' ? 'View More Albums' : 'Load More'} <FiRefreshCw className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110] p-2"
            onClick={closeModal}
          >
            <FiX className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button 
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] p-4 group"
            onClick={handlePrev}
          >
            <FiChevronLeft className="w-10 h-10 md:w-14 md:h-14 group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Main Media Container */}
          <div 
            className="relative w-[90vw] h-[80vh] md:max-w-6xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent clicking media from closing modal
          >
            {filteredMedia[selectedIndex].type === "video" ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <video 
                  src={filteredMedia[selectedIndex].src} 
                  poster={filteredMedia[selectedIndex].poster}
                  controls
                  autoPlay
                  className="max-w-full max-h-full rounded-lg shadow-2xl outline-none"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <Image 
                src={filteredMedia[selectedIndex].src} 
                alt="Enlarged Photo" 
                fill 
                className="object-contain"
              />
            )}
          </div>

          {/* Next Button */}
          <button 
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] p-4 group"
            onClick={handleNext}
          >
            <FiChevronRight className="w-10 h-10 md:w-14 md:h-14 group-hover:translate-x-1 transition-transform" />
          </button>
          
          {/* Media Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-inter text-sm">
            {selectedIndex + 1} / {filteredMedia.length}
          </div>
        </div>
      )}

    </section>
  );
}
