import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandsCarousel from "@/components/BrandsCarousel";
import ProductCategories from "@/components/ProductCategories";
import Features from "@/components/Features";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
