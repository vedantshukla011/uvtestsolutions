import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RepublicDayPopup from "@/components/RepublicDayPopup";
import BrandsCarousel from "@/components/BrandsCarousel";
import ProductCategories from "@/components/ProductCategories";
import Features from "@/components/Features";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#products") {
      setTimeout(() => {
        const element = document.getElementById("products");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <RepublicDayPopup />
      <Header />
      <main>
        <Hero />
        <BrandsCarousel />
        <ProductCategories />
        <Features />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
