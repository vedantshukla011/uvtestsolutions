import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Activity } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

import oscilloscopeKeysight from "@/assets/products/oscilloscope-keysight.jpg";
import oscilloscopeTektronix from "@/assets/products/oscilloscope-tektronix-mdo.jpg";
import oscilloscopeRigol from "@/assets/products/oscilloscope-rigol.jpg";
import oscilloscopeSiglent from "@/assets/products/oscilloscope-siglent.jpg";
import oscilloscopeHantek from "@/assets/products/oscilloscope-hantek.jpg";
import oscilloscopeOwon from "@/assets/products/oscilloscope-owon.jpg";
import oscilloscopeGwinstek from "@/assets/products/oscilloscope-gwinstek.jpg";

const products = [
  // Priority brands: KEYSIGHT, FLUKE, TEKTRONIX first
  {
    name: "InfiniiVision 4000 X-Series Oscilloscope",
    brand: "KEYSIGHT",
    image: oscilloscopeKeysight,
    description: "High-performance oscilloscope delivering exceptional signal integrity and the industry's lowest noise floor.",
    features: [
      "200 MHz to 1.5 GHz bandwidth options",
      "Up to 5 GSa/s sample rate",
      "4 Mpts standard memory (upgradable to 1 Gpts)",
      "12.1-inch capacitive touchscreen",
      "Zone touch trigger for complex signals"
    ],
    price: "Request Quote"
  },
  {
    name: "MDO3000 Series Mixed Domain Oscilloscope",
    brand: "TEKTRONIX",
    image: oscilloscopeTektronix,
    description: "Industry-leading mixed domain oscilloscope combining analog, digital, and RF analysis capabilities in a single instrument.",
    features: [
      "Up to 1 GHz bandwidth with 4 analog channels",
      "5 GS/s sample rate with 10 M record length",
      "Integrated spectrum analyzer (9 kHz to 3 GHz)",
      "Advanced triggering and protocol decode",
      "10.4-inch capacitive touchscreen display"
    ],
    price: "Request Quote"
  },
  // Other brands
  {
    name: "DHO4000 Series Digital Oscilloscope",
    brand: "RIGOL",
    image: oscilloscopeRigol,
    description: "High-bandwidth digital oscilloscope with UltraVision III architecture for advanced debugging and analysis.",
    features: [
      "200 MHz to 800 MHz bandwidth options",
      "4 GSa/s real-time sample rate",
      "Up to 250 Mpts memory depth",
      "12-bit vertical resolution ADC",
      "10.1-inch HD capacitive touchscreen"
    ],
    price: "Request Quote"
  },
  {
    name: "DHO800/900 Series Digital Oscilloscope",
    brand: "RIGOL",
    image: oscilloscopeRigol,
    description: "Entry-level digital oscilloscope with 12-bit ADC resolution perfect for education and basic R&D applications.",
    features: [
      "70 MHz to 200 MHz bandwidth",
      "1.25 GSa/s sample rate per channel",
      "12-bit vertical resolution",
      "50 Mpts memory depth",
      "7-inch WVGA touchscreen display"
    ],
    price: "Request Quote"
  },
  {
    name: "SDS6000 Pro Digital Oscilloscope",
    brand: "SIGLENT",
    image: oscilloscopeSiglent,
    description: "Professional-grade oscilloscope with exceptional performance for demanding measurement applications.",
    features: [
      "1 GHz to 2 GHz bandwidth",
      "10 GSa/s sample rate with 10-bit ADC",
      "Up to 2 Gpts memory depth",
      "5,000,000 wfm/s waveform capture rate",
      "13.3-inch full HD capacitive touchscreen"
    ],
    price: "Request Quote"
  },
  {
    name: "SDS2000X Plus Oscilloscope",
    brand: "SIGLENT",
    image: oscilloscopeSiglent,
    description: "High-performance 4-channel digital oscilloscope with advanced features for professional applications.",
    features: [
      "100 MHz to 350 MHz bandwidth",
      "2 GSa/s sample rate",
      "200 Mpts memory depth",
      "SPO technology for fast waveform capture",
      "7-inch TFT-LCD touchscreen"
    ],
    price: "Request Quote"
  },
  {
    name: "DSO5000 Series Digital Oscilloscope",
    brand: "HANTEK",
    image: oscilloscopeHantek,
    description: "Cost-effective digital storage oscilloscope ideal for education and basic electronics testing.",
    features: [
      "60 MHz to 200 MHz bandwidth",
      "1 GSa/s real-time sample rate",
      "40K memory depth per channel",
      "7-inch TFT LCD display",
      "USB device and host interfaces"
    ],
    price: "Request Quote"
  },
  {
    name: "DSO2000 Series Portable Oscilloscope",
    brand: "HANTEK",
    image: oscilloscopeHantek,
    description: "Compact portable oscilloscope with excellent performance for field service applications.",
    features: [
      "70 MHz to 150 MHz bandwidth",
      "1 GSa/s sample rate",
      "2M memory depth",
      "5.6-inch TFT color display",
      "Compact and lightweight design"
    ],
    price: "Request Quote"
  },
  {
    name: "SDS-E Series Digital Oscilloscope",
    brand: "OWON",
    image: oscilloscopeOwon,
    description: "Entry-level digital oscilloscope with essential features for education and hobbyist applications.",
    features: [
      "50 MHz to 100 MHz bandwidth",
      "1 GSa/s sample rate",
      "10K memory depth",
      "7-inch color TFT display",
      "32 automatic measurements"
    ],
    price: "Request Quote"
  },
  {
    name: "XDS Series Digital Oscilloscope",
    brand: "OWON",
    image: oscilloscopeOwon,
    description: "Advanced digital oscilloscope with WiFi connectivity and touchscreen interface.",
    features: [
      "100 MHz to 200 MHz bandwidth",
      "1 GSa/s sample rate",
      "40M record length",
      "8-inch touchscreen display",
      "Built-in WiFi connectivity"
    ],
    price: "Request Quote"
  },
  {
    name: "GDS-2000E Series Oscilloscope",
    brand: "GW INSTEK",
    image: oscilloscopeGwinstek,
    description: "Feature-rich digital storage oscilloscope for R&D and production testing environments.",
    features: [
      "100 MHz to 200 MHz bandwidth",
      "1 GSa/s sample rate",
      "10 Mpts memory depth",
      "8-inch TFT LCD display",
      "VPO technology for enhanced visualization"
    ],
    price: "Request Quote"
  },
  {
    name: "GDS-3000 Series Oscilloscope",
    brand: "GW INSTEK",
    image: oscilloscopeGwinstek,
    description: "High-performance oscilloscope with advanced triggering and analysis capabilities.",
    features: [
      "150 MHz to 500 MHz bandwidth",
      "4 GSa/s sample rate",
      "25 Mpts memory depth",
      "8-inch WVGA LCD display",
      "Advanced serial bus decode"
    ],
    price: "Request Quote"
  }
];

const Oscilloscopes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-accent font-semibold">
                    Oscilloscopes
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
              <Activity className="w-4 h-4" />
              <span className="text-sm font-medium">Waveform Analysis</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Oscilloscopes
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Precision waveform analysis instruments from TEKTRONIX, KEYSIGHT, RIGOL, SIGLENT, HANTEK, OWON and GW INSTEK
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Oscilloscopes;