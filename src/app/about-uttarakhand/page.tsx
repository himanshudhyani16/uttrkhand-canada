import DiscoverUttarakhand from "@/components/aboutUttarakhand/DiscoverUttarakhand";
import CommonHeroSection from "@/components/CommonHeroSection";
import UttarakhandStats from "@/components/aboutUttarakhand/UttarakhandStats";
import { FiMail, FiUserPlus } from "react-icons/fi";
import UttarakhandSeasons from "@/components/aboutUttarakhand/UttarakhandSeasons";
import CommunityBanner from "@/components/aboutUttarakhand/CommunityBanner";
export default function AboutUttarakhand() {
  return (
    <>
      {" "}
      <CommonHeroSection
        subtitle="About Uttarakhand"
        title={
          <>
            About <span className="text-[#EE660C]">Uttarakhand</span>
          </>
        }
        description="Uttarakhand, the Land of Gods, is a place of divine beauty, rich culture, and warm-hearted people. From the majestic Himalayas to sacred rivers and vibrant traditions, it's a heritage we are proud to celebrate and preserve."
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
      <DiscoverUttarakhand />
      <UttarakhandStats />
      <UttarakhandSeasons />
      <CommunityBanner />
    </>
  );
}
