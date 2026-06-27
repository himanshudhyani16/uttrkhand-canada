import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function BlogDetailContent() {
  return (
    <article className="w-full bg-white md:bg-transparent">
      
      {/* Article Body */}
      <div className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:font-bold prose-headings:text-[#1A2340] prose-p:font-inter prose-p:text-[#4A5568] prose-p:leading-relaxed prose-a:text-[#EE660C] hover:prose-a:text-[#d65909]">
        
        <h2 className="text-2xl md:text-3xl mt-8 mb-4">Introduction</h2>
        <p>
          Nestled in the Kumaon region of Uttarakhand, Nainital is a picturesque hill station 
          famous for its emerald lakes, pleasant climate, and charming landscapes. Surrounded 
          by lush green hills, this beautiful town is a perfect getaway for nature lovers, families, 
          and adventure seekers.
        </p>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">The Iconic Naini Lake</h2>
        <p>
          At the heart of Nainital lies the mesmerizing Naini Lake, a natural freshwater lake 
          shaped like an eye. Boating in the lake is an experience that every visitor cherishes. 
          The reflection of surrounding hills and the bustling Mall Road on the lake adds to its 
          unmatched beauty.
        </p>

        {/* Embedded Image */}
        <div className="my-8 w-full h-[250px] sm:h-[350px] md:h-[400px] relative rounded-xl overflow-hidden shadow-md">
          <Image 
            src="/images/season_summer.png" 
            alt="Naini Lake" 
            fill 
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">Places to Visit in Nainital</h2>
        <ul className="list-none pl-0 space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <FiCheckCircle className="w-5 h-5 text-[#EE660C] shrink-0 mt-1" />
            <span className="font-inter text-[#4A5568]">
              <strong className="text-[#1A2340]">Naina Devi Temple</strong> – A revered temple located on the northern shore of the lake.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FiCheckCircle className="w-5 h-5 text-[#EE660C] shrink-0 mt-1" />
            <span className="font-inter text-[#4A5568]">
              <strong className="text-[#1A2340]">Snow View Point</strong> – Offers stunning views of the Himalayas, including Nanda Devi.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FiCheckCircle className="w-5 h-5 text-[#EE660C] shrink-0 mt-1" />
            <span className="font-inter text-[#4A5568]">
              <strong className="text-[#1A2340]">Tiffin Top</strong> – A perfect spot for trekking and picnics with breathtaking views.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FiCheckCircle className="w-5 h-5 text-[#EE660C] shrink-0 mt-1" />
            <span className="font-inter text-[#4A5568]">
              <strong className="text-[#1A2340]">Nainital Zoo</strong> – Also known as the High Altitude Zoo, home to various Himalayan species.
            </span>
          </li>
        </ul>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">Best Time to Visit</h2>
        <p>
          Nainital can be visited throughout the year, but the best time is from March to June 
          (summer) and September to November (autumn). Winters (December to February) 
          bring a different charm with misty mornings and fewer crowds.
        </p>

        <h2 className="text-2xl md:text-3xl mt-10 mb-4">Conclusion</h2>
        <p>
          Whether you are seeking peace, adventure, or a family vacation, Nainital has something 
          for everyone. Its natural beauty and warm hospitality make it a true gem of Uttarakhand.
        </p>

        {/* Blockquote */}
        <div className="my-10 bg-[#F9F4EE] border-l-4 border-[#EE660C] p-6 md:p-8 rounded-r-xl relative overflow-hidden">
          <svg className="absolute top-4 left-4 w-10 h-10 text-[#EE660C] opacity-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="font-playfair italic text-lg md:text-xl text-[#1A2340] leading-relaxed relative z-10 m-0 pl-8">
            "Nainital is not just a destination, it's an experience that stays in your heart forever."
          </p>
        </div>
      </div>

      {/* Tags Section */}
      <div className="flex flex-wrap items-center gap-3 mt-12 pt-8 border-t border-gray-200">
        <span className="font-inter font-bold text-[#1A2340] mr-2">Tags:</span>
        {["Nainital", "Uttarakhand", "Travel", "Lake", "Hill Station"].map((tag, idx) => (
          <Link href={`/blog/tag/${tag.toLowerCase()}`} key={idx} className="border border-[#EE660C]/30 text-[#EE660C] hover:bg-[#EE660C] hover:text-white transition-colors px-4 py-1.5 rounded-full text-xs font-inter font-medium">
            {tag}
          </Link>
        ))}
      </div>

      {/* Post Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        
        {/* Previous Post */}
        <Link href="#" className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#EE660C] hover:shadow-md transition-all group bg-white">
          <FiChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-[#EE660C] shrink-0" />
          <div className="w-[60px] h-[60px] rounded-md overflow-hidden shrink-0 relative hidden sm:block">
            <Image src="/images/season_winter.png" alt="Prev" fill className="object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-inter text-gray-500 uppercase tracking-wider mb-1">Previous Post</span>
            <span className="font-inter font-semibold text-[#1A2340] text-sm leading-snug group-hover:text-[#EE660C] transition-colors line-clamp-2">
              Kedarnath Dham – A Journey of Faith and Devotion
            </span>
          </div>
        </Link>

        {/* Next Post */}
        <Link href="#" className="flex items-center justify-end gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#EE660C] hover:shadow-md transition-all group bg-white text-right">
          <div className="flex flex-col items-end">
            <span className="text-[11px] font-inter text-gray-500 uppercase tracking-wider mb-1">Next Post</span>
            <span className="font-inter font-semibold text-[#1A2340] text-sm leading-snug group-hover:text-[#EE660C] transition-colors line-clamp-2">
              Harela Festival – A Celebration of Nature and New Beginnings
            </span>
          </div>
          <div className="w-[60px] h-[60px] rounded-md overflow-hidden shrink-0 relative hidden sm:block">
            <Image src="/images/season_spring.png" alt="Next" fill className="object-cover" />
          </div>
          <FiChevronRight className="w-6 h-6 text-gray-400 group-hover:text-[#EE660C] shrink-0" />
        </Link>
        
      </div>

    </article>
  );
}
