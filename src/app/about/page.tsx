import AboutStats from "@/components/about/AboutStats";
import MeetOurCommittee from "@/components/about/MeetOurCommittee";
import OurJourney from "@/components/about/OurJourney";
import OurPurpose from "@/components/about/OurPurpose";
import WhatWeDo from "@/components/about/WhatWeDo";
import WhoWeAre from "@/components/about/WhoWeAre";
import WhyJoinUs from "@/components/about/WhyJoinUs";
import BecomeMember from "@/components/BecomeMember";
import CommonHeroSection from "@/components/CommonHeroSection";
import GallerySection from "@/components/GallerySection";
import { FiUserPlus, FiMail } from "react-icons/fi";

export default function AboutPage() {
  return (
    <>
      <CommonHeroSection
        subtitle="ABOUT US"
        title={
          <>
            About Uttarakhand
            <br />
            Community Association
            <br />
            of Canada <span className="text-[#EE660C] text-4xl">🍁</span>
          </>
        }
        description="United by our roots. Inspired by our culture. Committed to our community."
        imageSrc="/images/aboutpagebg.png"
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
      <WhoWeAre />
      <OurPurpose />
      <OurJourney />
      <WhatWeDo />
      <MeetOurCommittee />
      <AboutStats />
      <WhyJoinUs />
      <GallerySection /> <BecomeMember />
    </>
  );
}
