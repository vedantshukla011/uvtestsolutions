import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { ChevronRight, Download, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import vernierCaliperImg from "@/assets/products/multimeter-fluke.jpg";
import airPurifierImg from "@/assets/products/power-supply.jpg";
import electricalComponentImg from "@/assets/products/logic-analyzer.jpg";

const products = [
  {
    name: "Digital Vernier Caliper 150mm",
    brand: "MITUTOYO",
    image: vernierCaliperImg,
    description: "High-precision digital caliper with 150mm measuring range and data output capability.",
    features: ["0.01mm resolution", "IP67 dust/water protection", "Data output function", "Carbide-tipped jaws"],
  },
  {
    name: "Dial Vernier Caliper 200mm",
    brand: "INSIZE",
    image: vernierCaliperImg,
    description: "Professional dial caliper with 200mm range for industrial applications.",
    features: ["0.02mm accuracy", "Hardened stainless steel", "Shock-resistant dial", "Thumb roller adjustment"],
  },
  {
    name: "FX-888D Soldering Station",
    brand: "HAKKO",
    image: electricalComponentImg,
    description: "Professional digital soldering station with rapid heat recovery.",
    features: ["70W power output", "Digital temperature control", "Quick heat-up time", "ESD safe design"],
  },
  {
    name: "BK936D+ Soldering Station",
    brand: "BAKON",
    image: electricalComponentImg,
    description: "Compact soldering station with precise temperature control for electronics work.",
    features: ["60W power output", "200-480°C range", "LCD temperature display", "Sleep function"],
  },
  {
    name: "Educational Lab Kit",
    brand: "SCIENTECH",
    image: electricalComponentImg,
    description: "Comprehensive electronics training kit for educational institutions.",
    features: ["Multiple experiment modules", "Complete with manual", "Student-friendly design", "Durable construction"],
  },
  {
    name: "Embedded Development Board",
    brand: "EMBUILT",
    image: electricalComponentImg,
    description: "Professional embedded systems development platform for R&D applications.",
    features: ["ARM processor based", "Multiple I/O interfaces", "USB programming", "Complete SDK included"],
  },
  {
    name: "Scientific Trainer Kit",
    brand: "JOMA",
    image: electricalComponentImg,
    description: "Laboratory trainer kit for electronics and electrical engineering education.",
    features: ["Multiple experiment setups", "Comprehensive manual", "Modular design", "Industrial grade components"],
  },
  {
    name: "Digital Micrometer 0-25mm",
    brand: "MITUTOYO",
    image: vernierCaliperImg,
    description: "High-precision digital micrometer with electronic display and data output.",
    features: ["0.001mm resolution", "SPC data output", "Ratchet thimble", "Carbide measuring faces"],
  }
];

const catalogs = [
  { name: "Digital Multimeter Catalog", file: "/catalogs/digital-multimeter-catalog.pdf" },
  { name: "Oscilloscopes Catalog", file: "/catalogs/oscilloscopes-catalog.pdf" },
  { name: "Network Analyzer Catalog", file: "/catalogs/network-analyzer-catalog.pdf" },
  { name: "High-Performance Digital Catalog", file: "/catalogs/high-performance-digital-catalog.pdf" },
  { name: "Signal Generation Catalog", file: "/catalogs/signal-generation-catalog.pdf" },
  { name: "Signal Analysis Catalog", file: "/catalogs/signal-analysis-catalog.pdf" },
  { name: "Waveform & Function Generator Catalog", file: "/catalogs/waveform-function-generator-catalog.pdf" },
  { name: "Smart Bench Essentials Catalog", file: "/catalogs/smart-bench-essentials-catalog.pdf" },
];

const OtherProducts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium">Other Products</span>
            </nav>
            
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Other Products & Accessories</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore our range of soldering equipment, educational kits, precision measuring instruments from HAKKO, BAKON, SCIENTECH, EMBUILT, JOMA, MITUTOYO and INSIZE.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (<ProductCard key={index} {...product} />))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-accent/5 via-background to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Catalogs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Download our comprehensive product catalogs to explore detailed specifications and features.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {catalogs.map((catalog, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <FileText className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-4 text-sm leading-tight">{catalog.name}</h3>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={catalog.file} download className="flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OtherProducts;
