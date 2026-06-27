import Link from "next/link";

const categories = [
  { name: "Uttarakhand Culture", count: 24, slug: "uttarakhand-culture" },
  { name: "Temples", count: 18, slug: "temples" },
  { name: "Tourism", count: 32, slug: "tourism" },
  { name: "Festivals", count: 16, slug: "festivals" },
  { name: "Community News", count: 12, slug: "community-news" },
  { name: "Travel Blogs", count: 21, slug: "travel-blogs" },
  { name: "Success Stories", count: 15, slug: "success-stories" },
];

export default function CategoriesWidget() {
  return (
    <div className="bg-white rounded-xl shadow-[0_2px_15px_rgb(0,0,0,0.06)] border border-gray-100 p-6">
      
      {/* Title */}
      <div className="mb-6">
        <h3 className="text-[#1A2340] font-playfair font-bold text-xl md:text-[22px] mb-2">
          Categories
        </h3>
        {/* Decorative Line */}
        <div className="flex items-center">
          <div className="h-[2px] w-6 bg-[#EE660C]"></div>
          <svg className="w-4 h-4 text-[#EE660C] -ml-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L22 12L12 22L9 19L15 13H2V11H15L9 5L12 2Z" />
          </svg>
        </div>
      </div>

      {/* Categories List */}
      <div className="flex flex-col gap-3">
        {categories.map((cat, index) => (
          <Link 
            href={`/blog/category/${cat.slug}`} 
            key={index} 
            className="flex items-center justify-between group py-1.5"
          >
            <span className="text-[#1A2340] font-inter font-medium text-[15px] group-hover:text-[#EE660C] transition-colors">
              {cat.name}
            </span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#EE660C]/30 text-[#EE660C] font-inter text-[13px] font-semibold bg-white group-hover:bg-[#EE660C] group-hover:text-white transition-colors">
              {cat.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
