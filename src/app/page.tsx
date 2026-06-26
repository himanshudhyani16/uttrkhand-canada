import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import CultureSection from "@/components/CultureSection";
import EventsSection from "@/components/EventsSection";
import DevbhoomiSection from "@/components/DevbhoomiSection";
import BlogSection from "@/components/BlogSection";
import GallerySection from "@/components/GallerySection";
import BecomeMember from "@/components/BecomeMember";
import AIpanRow from "@/components/AIpanRow";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WelcomeSection />
      <AboutSection />
      <StatsSection />
      <AIpanRow />
      <EventsSection />
      <CultureSection />
      <DevbhoomiSection />
      <BecomeMember />
      <GallerySection />
      <BlogSection />
    </main>
  );
}
