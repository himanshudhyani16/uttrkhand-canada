import { FiSend } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import PopularPosts from "./PopularPosts";
import CategoriesWidget from "./CategoriesWidget";

function SubscribeWidget() {
  return (
    <div className="bg-white rounded-xl shadow-[0_2px_15px_rgb(0,0,0,0.06)] border border-gray-100 p-6">
      <h3 className="text-[#1A2340] font-playfair font-bold text-xl md:text-[22px] mb-3">
        Subscribe to Our Newsletter
      </h3>
      <p className="text-[#4A5568] font-inter text-sm mb-4 leading-relaxed">
        Get the latest blogs and updates straight to your inbox.
      </p>
      <form className="flex flex-col gap-3">
        <input 
          type="email" 
          placeholder="Enter your email address" 
          className="w-full border border-gray-200 rounded-md px-4 py-2.5 font-inter text-sm focus:outline-none focus:border-[#EE660C] transition-colors"
          required
        />
        <button 
          type="submit" 
          className="w-full bg-[#EE660C] hover:bg-[#d65909] text-white rounded-md py-2.5 font-inter font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
        >
          <FiSend className="w-4 h-4" /> Subscribe
        </button>
      </form>
    </div>
  );
}

function FollowUsWidget() {
  return (
    <div className="bg-white rounded-xl shadow-[0_2px_15px_rgb(0,0,0,0.06)] border border-gray-100 p-6">
      <h3 className="text-[#1A2340] font-playfair font-bold text-xl md:text-[22px] mb-3">
        Follow Us
      </h3>
      <p className="text-[#4A5568] font-inter text-sm mb-4 leading-relaxed">
        Stay connected with us on social media.
      </p>
      <div className="flex items-center gap-3">
        <a href="#" className="w-9 h-9 rounded-full bg-[#3b5998] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
          <FaFacebookF className="w-4 h-4" />
        </a>
        <a href="#" className="w-9 h-9 rounded-full bg-[#C13584] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
          <FaInstagram className="w-4 h-4" />
        </a>
        <a href="#" className="w-9 h-9 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
          <FaYoutube className="w-4 h-4" />
        </a>
        <a href="#" className="w-9 h-9 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
          <FaLinkedinIn className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

function SharePostWidget() {
  return (
    <div className="bg-white rounded-xl shadow-[0_2px_15px_rgb(0,0,0,0.06)] border border-gray-100 p-6">
      <h3 className="text-[#1A2340] font-playfair font-bold text-xl md:text-[22px] mb-4">
        Share This Post
      </h3>
      <div className="flex items-center gap-3">
        <button className="w-9 h-9 rounded-full bg-[#3b5998] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
          <FaFacebookF className="w-4 h-4" />
        </button>
        <button className="w-9 h-9 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
          <FaTwitter className="w-4 h-4" />
        </button>
        <button className="w-9 h-9 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
          <FaLinkedinIn className="w-4 h-4" />
        </button>
        <button className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
          <FaWhatsapp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function PopularTagsWidget() {
  const tags = ["Temple", "Travel", "Culture", "Festival", "Uttarakhand", "Trekking", "Himalayas", "Adventure"];
  return (
    <div className="bg-white rounded-xl shadow-[0_2px_15px_rgb(0,0,0,0.06)] border border-gray-100 p-6">
      <h3 className="text-[#1A2340] font-playfair font-bold text-xl md:text-[22px] mb-4">
        Popular Tags
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <a href={`/blog/tag/${tag.toLowerCase()}`} key={i} className="bg-[#F9F4EE] text-[#4A5568] hover:bg-[#EE660C] hover:text-white px-3 py-1.5 rounded-md font-inter text-xs transition-colors">
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function BlogSidebar({ isDetail = false }: { isDetail?: boolean }) {
  return (
    <aside className="w-full flex flex-col gap-8">
      {isDetail && <SharePostWidget />}
      <PopularPosts />
      <CategoriesWidget />
      <SubscribeWidget />
      {isDetail && <PopularTagsWidget />}
      {!isDetail && <FollowUsWidget />}
    </aside>
  );
}
