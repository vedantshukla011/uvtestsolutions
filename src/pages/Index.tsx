import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandsCarousel from "@/components/BrandsCarousel";
import ProductCategories from "@/components/ProductCategories";
import Features from "@/components/Features";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

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
      <SEO
        title="UV Test Solutions - Electronic Measuring Instruments India"
        description="India's leading supplier of precision electronic measuring instruments. Oscilloscopes, multimeters, signal generators from Keysight, Fluke, Tektronix, Rigol. ISO 9001 certified."
        canonical="/"
        keywords="oscilloscopes India, multimeters, signal generators, electronic test equipment, Keysight, Fluke, Tektronix, Rigol, Siglent"
      />
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
