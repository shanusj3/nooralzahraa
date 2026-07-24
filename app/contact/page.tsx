import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../(pages)/contact/ContactHero";
import ContactForm from "../(pages)/contact/ContactForm";
import ContactInfoBar from "../(pages)/home/ContactInfoBar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5ECE1]">
      <Navbar />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactInfoBar />
      </main>
      <Footer />
    </div>
  );
}
