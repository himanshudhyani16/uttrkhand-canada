import CommonHeroSection from "@/components/CommonHeroSection";
import { FiMail, FiUserPlus } from "react-icons/fi";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import GallerySection from "@/components/GallerySection";
import BecomeMember from "@/components/BecomeMember";
import EventStats from "@/components/events/EventStats";

export default function AIpanRow() {
  return (
    <>
      <CommonHeroSection
        subtitle="OUR EVENTS"
        title={
          <>
            Celebrating <span className="text-[#EE660C]">Culture</span>
            <br />
            Building <span className="text-[#EE660C]">Community</span>
          </>
        }
        description="Join us in vibrant cultural events, festivals, and gatherings that bring the Uttarakhandi community in Canada together."
        imageSrc="/images/eventsbg.png"
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
      <UpcomingEvents />
      <EventStats />
      <GallerySection /> 
      <BecomeMember />
    </>
  );
}
