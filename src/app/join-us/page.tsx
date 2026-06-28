import CommonHeroSection from "@/components/CommonHeroSection";
import JoinUsHeroSection from "@/components/joinUs/JoinUsHeroSection";
import RegistrationForm from "@/components/joinUs/RegistrationForm";
import { FiMail, FiUserPlus } from "react-icons/fi";

export default function JoinUsPage() {
  return (
    <>
      <CommonHeroSection
        subtitle="Rangela Garhwal  •  Chabila Kumaon"
        title={
          <>
            Young Uttarakhand
            <br />
            <span className="text-[#EE660C] "> Foundation</span>
          </>
        }
        description="Rooted in culture, united in progress"
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
      <RegistrationForm />
    </>
  );
}
