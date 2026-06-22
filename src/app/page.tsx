import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import CultureSection from "@/components/CultureSection";
import EventsSection from "@/components/EventsSection";
import DevbhoomiSection from "@/components/DevbhoomiSection";
import BlogSection from "@/components/BlogSection";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WelcomeSection />
      <AboutSection />
      <StatsSection />
      <EventsSection />
      <CultureSection />
      <DevbhoomiSection />
      <GallerySection />
      <BlogSection />
    </main>
  );
}
