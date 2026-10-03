import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/home/HeroSection";
import FeaturedCollection from "./components/home/FeaturedCollection";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[var(--color-cream)]">
      <Navbar />
      <main className="w-full relative">
        <HeroSection />
        <FeaturedCollection />
      </main>
    </div>
  );
}
