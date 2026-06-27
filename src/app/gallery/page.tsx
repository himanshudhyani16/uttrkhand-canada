import CommonHeroSection from "@/components/CommonHeroSection";
import LatestUploads from "@/components/gallery/LatestUploads";
import { FiMail, FiUserPlus } from "react-icons/fi";

export default function GalleryPage() {
  return (
    <>
      <CommonHeroSection
        subtitle="Gallery"
        title={
          <>
            Moments That
            <br />
            <span className="text-[#EE660C] ">Unite Us</span>
          </>
        }
        description="We're here to connect, support, and celebrate the Uttarakhandi community across Canada. We'd love to hear from you."
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
      <LatestUploads />
    </>
  );
}
