import HeroSection from "./(pages)/home/HeroSection";
import ServiceSection from "./(pages)/home/ServiceSection";
import GalleryPreviewSection from "./(pages)/home/GalleryPreviewSection";
import TestimonialSection from "./(pages)/home/TestimonialSection";
import PremiumBanner from "./(pages)/home/PremiumBanner";
import ContactInfoBar from "./(pages)/home/ContactInfoBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <GalleryPreviewSection />
      <TestimonialSection />
      <PremiumBanner />
      <ContactInfoBar />
      <Footer />
    </div>
  );
}