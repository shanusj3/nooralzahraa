import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../(pages)/about/AboutHero";
import AboutContent from "../(pages)/about/AboutContent";
import PremiumBanner from "../(pages)/home/PremiumBanner";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5ECE1]">
      <Navbar />
      <main>
        <AboutHero />
        <AboutContent />
        <PremiumBanner />
      </main>
      <Footer />
    </div>
  );
}
