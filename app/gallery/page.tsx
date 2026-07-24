import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryHero from "../(pages)/gallery/GalleryHero";
import GalleryGrid from "../(pages)/gallery/GalleryGrid";
import PremiumBanner from "../(pages)/home/PremiumBanner";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#F5ECE1]">
      <Navbar />
      <main>
        <GalleryHero />
        <GalleryGrid />
        <PremiumBanner />
      </main>
      <Footer />
    </div>
  );
}
