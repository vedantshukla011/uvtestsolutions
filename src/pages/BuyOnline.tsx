import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const CATALOG_URL = "https://tandmcatalog.lovable.app/";

const BuyOnline = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Buy Online | Digital Catalog — UV Test Solutions"
        description="Browse and buy test & measuring instruments online from UV Test Solutions' digital catalog — oscilloscopes, multimeters, DC loads, soldering stations and more."
        canonical="/buy-online"
        keywords="buy test instruments online India, digital catalog, oscilloscopes online, multimeters online, DC electronic load online, UV Test Solutions catalog"
      />
      <Header />
      <main className="flex-1 pt-16">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Buy Online</h1>
              <p className="text-muted-foreground mt-2">
                Explore our complete digital catalog of test & measuring instruments.
              </p>
            </div>
            <a href={CATALOG_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="gap-2">
                Open Full Catalog
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <div className="w-full rounded-xl overflow-hidden border border-border shadow-lg bg-muted">
            <iframe
              src={CATALOG_URL}
              title="UV Test Solutions Digital Catalog"
              className="w-full h-[80vh] min-h-[600px] bg-background"
              loading="lazy"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BuyOnline;
