import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import BrandsCarousel from "@/components/BrandsCarousel";
import ProductCategories from "@/components/ProductCategories";
import ATESolutions from "@/components/ATESolutions";
import NewLaunches, { newLaunches } from "@/components/NewLaunches";
import ExclusiveBrands from "@/components/ExclusiveBrands";
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
        title="Multimeter, Clamp Meter & Oscilloscope Price India"
        description="Compare digital multimeter, clamp meter, oscilloscope, LCR meter and DC power supply prices in India. Genuine Fluke, Keysight, Rigol & UNI-T — get a quote today."
        canonical="/"
        keywords="multimeter price in india, multimeter, vernier caliper price, digital vernier caliper, digital multimeter price, clamp meter price, oscilloscope price in india, digital storage oscilloscope price, lcr meter price, soldering station price, dc power supply price, programmable dc power supply, dc electronic load, function generator price, spectrum analyzer price, thermal imaging camera price, insulation tester price, ac power source, esd testing equipment, bench power supply india, test and measuring instruments, test and measuring instruments India, Fluke, Keysight, Tektronix, Rigol, Siglent, UNI-T, buy test equipment online India"
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
        <ExclusiveBrands />
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
