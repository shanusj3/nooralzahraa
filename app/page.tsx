import HeroSection from "./(pages)/home/HeroSection";
import AboutSection from "./(pages)/home/AboutSection";
import ServicesBar from "./components/Servicebar";
import GalleryPreviewSection from "./(pages)/home/GalleryPreviewSection";
import PremiumBanner from "./(pages)/home/PremiumBanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0A0807]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesBar />
      <GalleryPreviewSection />
      <PremiumBanner />
      <Footer />
    </div>
  );
}