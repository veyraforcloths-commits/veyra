import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/home/HeroSection";

export default function Home() {
  return (
    <div className="h-screen h-[100dvh] w-full overflow-hidden flex flex-col bg-[var(--color-cream)]">
      <Navbar />
      <main className="flex-1 w-full h-full relative overflow-hidden">
        <HeroSection />
      </main>
    </div>
  );
}
