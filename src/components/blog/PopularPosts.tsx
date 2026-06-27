import Image from "next/image";
import Link from "next/link";
import { FiCalendar } from "react-icons/fi";

const popularPosts = [
  {
    id: 1,
    title: "Badrinath Dham - The Sacred Abode in Himalayas",
    date: "May 12, 2024",
    image: "/images/event-kedarnath.png",
    slug: "badrinath-dham",
  },
  {
    id: 2,
    title: "Rishikesh - Yoga Capital of the World",
    date: "May 09, 2024",
    image: "/images/about-main.png",
    slug: "rishikesh-yoga-capital",
  },
  {
    id: 3,
    title: "Makar Sankranti in Uttarakhand",
    date: "May 06, 2024",
    image: "/images/event-cultural.png",
    slug: "makar-sankranti",
  },
  {
    id: 4,
    title: "Pahari Cuisine - A Taste of the Hills",
    date: "May 03, 2024",
    image: "/images/discover_culture.png", // Using a placeholder that works
    slug: "pahari-cuisine",
  },
];

export default function PopularPosts() {
  return (
    <div className="bg-white rounded-xl shadow-[0_2px_15px_rgb(0,0,0,0.06)] border border-gray-100 p-6">
      
      {/* Title */}
      <div className="mb-6">
        <h3 className="text-[#1A2340] font-playfair font-bold text-xl md:text-[22px] mb-2">
          Popular Posts
        </h3>
        {/* Decorative Line */}
        <div className="flex items-center">
          <div className="h-[2px] w-6 bg-[#EE660C]"></div>
          <svg className="w-4 h-4 text-[#EE660C] -ml-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L22 12L12 22L9 19L15 13H2V11H15L9 5L12 2Z" />
          </svg>
        </div>
      </div>

      {/* Posts List */}
      <div className="flex flex-col gap-5">
        {popularPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id} className="flex gap-4 group items-center">
            {/* Image */}
            <div className="w-[80px] h-[70px] rounded-lg overflow-hidden shrink-0 relative">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col flex-1">
              <h4 className="text-[#1A2340] font-inter font-semibold text-sm leading-snug mb-1.5 group-hover:text-[#EE660C] transition-colors line-clamp-2">
                {post.title}
              </h4>
              <div className="flex items-center gap-1.5 text-[#718096] font-inter text-[12px]">
                <FiCalendar className="w-3 h-3 text-[#EE660C]" />
                <span>{post.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
