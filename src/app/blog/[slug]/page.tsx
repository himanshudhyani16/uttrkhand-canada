import BlogDetailHero from "@/components/blog/BlogDetailHero";
import BlogDetailContent from "@/components/blog/BlogDetailContent";
import BlogSidebar from "@/components/blog/BlogSidebar";

// This is the dynamic route for every specific blog detail page
export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  
  // In a real production app, you would fetch data from a CMS or database using the slug:
  // const blog = await getBlogBySlug(params.slug);
  
  // Using static data for the specific Nainital blog as requested in the design
  const blog = {
    title: "Nainital – The Lake District Gem of Uttarakhand",
    category: "Tourism",
    date: "May 18, 2024",
    author: "Admin",
    readTime: "5 min read",
    description: "Discover the scenic beauty, boating experience, and local attractions that make Nainital a must-visit destination.",
    image: "/images/season_summer.png"
  };

  return (
    <main className="bg-[#FCFBF8] min-h-screen py-8 md:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Hero Section spans full width of the container */}
        <BlogDetailHero {...blog} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mt-8 md:mt-12">
          
          {/* Main Article Content (Left Side) */}
          <div className="lg:col-span-8">
            <BlogDetailContent />
          </div>

          {/* Sidebar (Right Side) */}
          <div className="lg:col-span-4">
            <BlogSidebar isDetail={true} />
          </div>

        </div>
      </div>
    </main>
  );
}
