import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AdPopup from "@/components/AdPopup";
import BrandsCarousel from "@/components/BrandsCarousel";
import ProductCategories from "@/components/ProductCategories";
import HighestSellingProducts from "@/components/HighestSellingProducts";
import Features from "@/components/Features";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getHomepageJsonLd } from "@/lib/seoData";

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
      <AdPopup />
      <SEO
        title="UV Test Solutions | Test & Measuring Instruments India"
        description="Indian supplier of oscilloscopes, multimeters, signal generators, soldering stations and power tools from top global brands. Get a quote today."
        canonical="/"
        keywords="test and measuring instruments India, oscilloscopes, multimeters, signal generators, soldering stations, power tools, hand tools, Keysight, Fluke, Tektronix, Rigol, Siglent, buy test equipment online India, electronic instruments dealer"
        jsonLd={getHomepageJsonLd()}
      />
      <Header />
      <main>
        <Hero />
        <BrandsCarousel />
        <ProductCategories />
        <HighestSellingProducts />
        <Features />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
