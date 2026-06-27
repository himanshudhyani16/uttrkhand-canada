import BlogCategories from "@/components/blog/BlogCategories";
import BlogSection from "@/components/blog/BlogSection";
import StoryBanner from "@/components/blog/StoryBanner";
import CommonHeroSection from "@/components/CommonHeroSection";
import { FiMail, FiUserPlus } from "react-icons/fi";
export default function BlogPage() {
  return (
    <>
      <CommonHeroSection
        subtitle="Our Blog"
        title={
          <>
            Stories That
            <br />
            Inspire & <span className="text-[#EE660C] text-4xl">Connect</span>
          </>
        }
        description="Explore stories, cultural insights, travel guides, community news, and inspiring journeys from Uttarakhand and the Uttarakhandi community across Canada. Celebrate our traditions, heritage, and experiences together."
        imageSrc="/images/rishikesh.png"
        imageAlt="Kedarnath Temple in the Himalayas — Uttarakhand"
        primaryButton={{
          label: "Join Our Community",
          href: "/join-us",
          icon: <FiUserPlus className="w-5 h-5" strokeWidth={2.5} />,
        }}
        secondaryButton={{
          label: "Contact Us",
          href: "/events",
          icon: <FiMail className="w-4 h-4" strokeWidth={2} />,
        }}
      />
      <BlogCategories />
      <BlogSection />
      <StoryBanner />
    </>
  );
}
