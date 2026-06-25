"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FiTarget, FiUsers, FiHeart, FiBookOpen } from "react-icons/fi";
import { FaGraduationCap, FaUtensils } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const whatWeDoData = [
  {
    title: "Cultural Festivals",
    description:
      "Celebrate Harela, Phool Dei, Diwali, Janmashtami and other traditional festivals.",
    image: "/images/event_cultural.png",
    icon: FiTarget,
    color: "#EE660C", // Orange
  },
  {
    title: "Community Gatherings",
    description:
      "Family picnics, social meetups and community networking events.",
    image: "/images/culture_garhwali.png", // Using placeholder available in your images
    icon: FiUsers,
    color: "#1A2340", // Navy
  },
  {
    title: "Youth Programs",
    description:
      "Workshops, leadership training and youth development activities.",
    image: "/images/culture_kumaoni.png", // Using placeholder
    icon: FaGraduationCap,
    color: "#39722D", // Green
  },
  {
    title: "Charity & Volunteer Work",
    description: "Supporting local charities and helping those in need.",
    image: "/images/prayingHands.png",
    icon: FiHeart,
    color: "#C1272D", // Red
  },
  {
    title: "Food Festivals",
    description: "Promoting traditional Uttarakhandi cuisine and food culture.",
    image: "/images/event_food.png",
    icon: FaUtensils,
    color: "#EE660C", // Orange
  },
  {
    title: "Cultural Education",
    description: "Language classes, heritage education and cultural learning.",
    image: "/images/event_harela.png",
    icon: FiBookOpen,
    color: "#1A2340", // Navy
  },
];

export default function WhatWeDo() {
  return (
    <section className="w-full bg-[#FCFBF8] py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className="text-[#EE660C] text-xl font-serif">❖</span>
          <h2 className="text-[#1A2340] font-playfair font-bold text-2xl md:text-3xl tracking-widest uppercase">
            What We Do
          </h2>
          <span className="text-[#EE660C] text-xl font-serif">❖</span>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full px-2 lg:px-8 relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1} // Mobile default
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2, // Tablet
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3, // Laptop
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4, // Desktop
                spaceBetween: 30,
              },
            }}
            className="!pb-16 !px-2 md:!px-16"
          >
            {whatWeDoData.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="h-full bg-[#FFFDFB] border border-[#F0EBE1] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col group">
                  {/* Image Section with Overlapping Icon */}
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Dark gradient overlay at bottom of image for contrast */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Centered Overlapping Icon */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
                      <div
                        className="w-[60px] h-[60px] rounded-full flex items-center justify-center border-[4px] border-[#FFFDFB] shadow-md group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: item.color }}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 flex flex-col items-center text-center px-6 pt-12 pb-8">
                    <h3 className="text-[#1A2340] font-playfair font-bold text-xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#4A4A4A] font-inter text-[14px] leading-[1.6]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom styles to color the Swiper pagination bullets */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #d1c8b8 !important;
          opacity: 0.6 !important;
          width: 10px !important;
          height: 10px !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #ee660c !important;
          opacity: 1 !important;
          transform: scale(1.2) !important;
        }
        /* Custom styles for Swiper Navigation Arrows */
        .swiper-button-next,
        .swiper-button-prev {
          color: #ee660c !important;
          background-color: white;
          width: 44px !important;
          height: 44px !important;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border: 1px solid #f0ebe1;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: bold;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: #ee660c;
          color: white !important;
        }
        .swiper-button-next {
          right: 4px !important;
        }
        .swiper-button-prev {
          left: 4px !important;
        }
        /* Hide arrows on mobile to prevent squishing, users can swipe */
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
