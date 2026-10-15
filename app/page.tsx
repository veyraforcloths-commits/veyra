import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/home/HeroSection";
import AtelierMarquee from "./components/home/AtelierMarquee";
import AtelierDistinction from "./components/home/AtelierDistinction";
import FeaturedCollection from "./components/home/FeaturedCollection";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[var(--color-cream)]">
      <Navbar />
      <main className="w-full relative">
        <HeroSection />
        <AtelierMarquee />
        <AtelierDistinction />
        <FeaturedCollection />
      </main>
      <Footer />
    </div>
  );
}
