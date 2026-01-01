import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Radio } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import signalGeneratorImage from "@/assets/products/signal-generator.jpg";

const products = [
  // Priority brands: KEYSIGHT, FLUKE, TEKTRONIX first - Keysight already at top
  {
    name: "N9000B CXA Signal Analyzer",
    brand: "KEYSIGHT",
    image: signalGeneratorImage,
    description: "Entry-level signal analyzer with excellent performance for general-purpose spectrum analysis.",
    features: ["9 kHz to 26.5 GHz frequency range", "±0.3 dB amplitude accuracy", "PowerSuite one-button measurements", "Advanced triggering capabilities", "10.1-inch multi-touch display"],
    price: "Request Quote"
  },
  // Other brands
  {
    name: "DSA815-TG Spectrum Analyzer",
    brand: "RIGOL",
    image: signalGeneratorImage,
    description: "Cost-effective spectrum analyzer with tracking generator for EMC pre-compliance.",
    features: ["9 kHz to 1.5 GHz frequency range", "Built-in tracking generator", "-135 dBm displayed average noise level", "Advanced EMI filter and detector", "8-inch WVGA LCD display"],
    price: "Request Quote"
  },
  {
    name: "RSA5065 Real-Time Spectrum Analyzer",
    brand: "RIGOL",
    image: signalGeneratorImage,
    description: "Professional real-time spectrum analyzer with advanced signal capture.",
    features: ["9 kHz to 6.5 GHz frequency range", "Real-time bandwidth up to 40 MHz", "Density display for visualization", "EMI pre-compliance measurements", "10.1-inch multi-touch display"],
    price: "Request Quote"
  },
  {
    name: "SSA3000X Plus Spectrum Analyzer",
    brand: "SIGLENT",
    image: signalGeneratorImage,
    description: "High-performance spectrum analyzer with advanced measurement capabilities.",
    features: ["9 kHz to 3.2 GHz frequency range", "-161 dBm/Hz DANL", "10 Hz minimum RBW", "Advanced EMI measurement", "10.1-inch touchscreen"],
    price: "Request Quote"
  },
  {
    name: "GSP-9300 Spectrum Analyzer",
    brand: "GW INSTEK",
    image: signalGeneratorImage,
    description: "Portable spectrum analyzer for field testing and laboratory applications.",
    features: ["9 kHz to 3 GHz frequency range", "-130 dBm sensitivity", "Tracking generator option", "EMI pre-compliance mode", "7-inch TFT display"],
    price: "Request Quote"
  }
];

const SpectrumAnalyzers = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
                <BreadcrumbItem><BreadcrumbPage className="text-accent font-semibold">Spectrum Analyzers</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
              <Radio className="w-4 h-4" />
              <span className="text-sm font-medium">RF Analysis</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Professional<span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Spectrum Analyzers</span></h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">Advanced RF analysis solutions from KEYSIGHT, RIGOL, SIGLENT, GW INSTEK</p>
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

export default SpectrumAnalyzers;
