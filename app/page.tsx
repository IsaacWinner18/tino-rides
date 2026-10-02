import Hero from "@/components/Hero";
import CarCategory from "@/components/CarCategory";
import TrendVehicles from "@/components/TrendVehicles";
import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import PromoBanner from "@/components/PromoBanner";
import BrandMarquee from "@/components/BrandMarquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#111215] flex flex-col">
      <main className="flex-1 w-full">
        <Hero />
        <CarCategory />
        <TrendVehicles />
        <AboutUs />
        <Features />
        <PromoBanner />
        <BrandMarquee />
      </main>
      <Footer />
    </div>
  );
}




