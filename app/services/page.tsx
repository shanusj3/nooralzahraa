import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesHero from "../(pages)/services/ServicesHero";
import ServiceList from "../(pages)/services/ServiceList";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F5ECE1]">
      <Navbar />
      <main>
        <ServicesHero />
        <ServiceList />
      </main>
      <Footer />
    </div>
  );
}
