import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OffersHero from "../(pages)/offers/OffersHero";
import OffersContent from "../(pages)/offers/OffersContent";
import PremiumBanner from "../(pages)/home/PremiumBanner";

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-[#F5ECE1]">
      <Navbar />
      <main>
        <OffersHero />
        <OffersContent />
        <PremiumBanner />
      </main>
      <Footer />
    </div>
  );
}
