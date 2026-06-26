import BecomeMember from "@/components/BecomeMember";
import CommonHeroSection from "@/components/CommonHeroSection";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import FAQ from "@/components/contact/FAQ";
import FindUs from "@/components/contact/FindUs";
import HelpSection from "@/components/contact/HelpSection";
import { FiMail, FiUserPlus } from "react-icons/fi";

export default function ContactPage() {
  return (
    <>
      <CommonHeroSection
        subtitle="GET IN TOUCH"
        title={
          <>
            Contact Uttarakhand
            <br />
            Community Association
            <br />
            of Canada <span className="text-[#EE660C] text-4xl">🍁</span>
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
      <ContactInfo />
      <ContactForm />
      <FindUs />
      <HelpSection />
      <FAQ />
      <BecomeMember />
    </>
  );
}
