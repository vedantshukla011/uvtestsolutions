import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProductCard from "@/components/ProductCard";
import { Cpu } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

import genericPlaceholder from "@/assets/products/generic-placeholder.jpg";

const products = [
  // Priority brands: KEYSIGHT, FLUKE, TEKTRONIX first
  {
    name: "16860A Series Logic Analyzer",
    brand: "KEYSIGHT",
    image: genericPlaceholder,
    description: "High-performance portable logic analyzer with deep memory for debugging complex digital systems.",
    features: ["Up to 204 channels at 250 MHz", "4M sample depth per channel", "400 ps timing resolution", "Advanced triggering capabilities", "Eye scan and jitter analysis"],
    price: "Request Quote"
  },
  {
    name: "MSOX6004A Mixed Signal Oscilloscope",
    brand: "KEYSIGHT",
    image: genericPlaceholder,
    description: "Industry-leading mixed signal oscilloscope with FlexChannel technology.",
    features: ["Up to 6 GHz bandwidth", "Flexible 4-8 analog channels", "16 digital channels per scope", "Zone touch triggering", "Advanced jitter analysis"],
    price: "Request Quote"
  },
  // Other brands
  {
    name: "MSO8000 Series Mixed Signal Oscilloscope",
    brand: "RIGOL",
    image: genericPlaceholder,
    description: "Professional mixed signal oscilloscope combining analog and digital analysis.",
    features: ["4 analog + 16 digital channels", "Up to 2 GHz analog bandwidth", "10 GSa/s sample rate", "500 Mpts memory depth", "Advanced serial decode"],
    price: "Request Quote"
  },
  {
    name: "DSO5000 Logic Analyzer Module",
    brand: "HANTEK",
    image: genericPlaceholder,
    description: "USB-based logic analyzer for digital signal debugging and protocol analysis.",
    features: ["16 digital channels", "200 MHz sampling rate", "USB 2.0 connectivity", "Protocol decode support", "Free PC software"],
    price: "Request Quote"
  },
  {
    name: "LA5000 Logic Analyzer",
    brand: "OWON",
    image: genericPlaceholder,
    description: "Compact logic analyzer for embedded systems development and debugging.",
    features: ["34 channels available", "500 MHz timing analysis", "128M sample memory", "I2C, SPI, UART decode", "USB interface"],
    price: "Request Quote"
  }
];

const LogicAnalyzers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Logic Analyzers - Mixed Signal Oscilloscopes India"
        description="Buy logic analyzers from Keysight, Rigol, Hantek, OWON. Mixed signal oscilloscopes with digital channels for embedded debugging. Best prices in India."
        canonical="/products/logic-analyzers"
        keywords="logic analyzer India, mixed signal oscilloscope, digital analyzer, Keysight MSO, protocol analyzer"
      />
      <Header />
      
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink asChild><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage className="text-accent font-semibold">Logic Analyzers</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
              <Cpu className="w-4 h-4" />
              <span className="text-sm font-medium">Digital Analysis</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Professional<span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Logic Analyzers</span></h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">Advanced logic analysis tools from KEYSIGHT, RIGOL, HANTEK, OWON for embedded systems development</p>
          </div>
        </div>
      </section>

      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (<ProductCard key={idx} {...product} />))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LogicAnalyzers;