import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import BrandsCarousel from "@/components/BrandsCarousel";
import ProductCategories from "@/components/ProductCategories";
import ATESolutions from "@/components/ATESolutions";
import NewLaunches, { newLaunches } from "@/components/NewLaunches";
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
      
      <SEO
        title="UV Test Solutions | Test & Measuring Instruments India"
        description="India's trusted supplier of oscilloscopes, multimeters, DC loads, soldering stations & power tools from top global brands."
        canonical="/"
        keywords="test and measuring instruments India, oscilloscopes, multimeters, DC electronic load, Jartul JT6311A, programmable electronic load 150W, signal generators, soldering stations, power tools, hand tools, Keysight, Fluke, Tektronix, Rigol, Siglent, buy test equipment online India, electronic instruments dealer"
        jsonLd={[
          ...getHomepageJsonLd(),
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": newLaunches[0].name,
            "model": newLaunches[0].model,
            "sku": newLaunches[0].model,
            "category": "DC Electronic Load",
            "description": newLaunches[0].brief,
            "image": "https://www.uvtestsolutions.com/assets/unit-utl8211plus.jpg",
            "releaseDate": "2026-08",
            "brand": { "@type": "Brand", "name": "UNI-T" },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "INR",
              "url": "https://www.uvtestsolutions.com/products/unit-utl8211plus-dc-electronic-load",
              "seller": { "@type": "Organization", "name": "UV Test Solutions" }
            }
          }
        ]}
      />
      <Header />
      <main>
        <Hero />
        <NewLaunches />
        <BrandsCarousel />
        <ProductCategories />
        <ATESolutions />
        <Features />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
