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
  {
    name: "N9000B CXA Signal Analyzer",
    brand: "KEYSIGHT",
    image: signalGeneratorImage,
    description: "Entry-level signal analyzer with excellent performance for general-purpose spectrum analysis and basic wireless testing.",
    features: [
      "9 kHz to 26.5 GHz frequency range",
      "±0.3 dB amplitude accuracy",
      "PowerSuite one-button measurements",
      "Advanced triggering capabilities",
      "10.1-inch multi-touch display"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "N9020B MXA Signal Analyzer",
    brand: "KEYSIGHT",
    image: signalGeneratorImage,
    description: "Mid-range signal analyzer delivering superior performance for advanced R&D and manufacturing test applications.",
    features: [
      "10 Hz to 50 GHz frequency range",
      "±0.19 dB amplitude accuracy",
      "Real-time spectrum analysis",
      "160 MHz analysis bandwidth",
      "Advanced measurement applications"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "DSA815-TG Spectrum Analyzer",
    brand: "RIGOL",
    image: signalGeneratorImage,
    description: "Cost-effective spectrum analyzer with tracking generator, ideal for EMC pre-compliance and general RF measurements.",
    features: [
      "9 kHz to 1.5 GHz frequency range",
      "Built-in tracking generator",
      "-135 dBm displayed average noise level",
      "Advanced EMI filter and detector",
      "8-inch WVGA LCD display"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "RSA5065 Real-Time Spectrum Analyzer",
    brand: "RIGOL",
    image: signalGeneratorImage,
    description: "Professional real-time spectrum analyzer with advanced signal capture for complex signal analysis.",
    features: [
      "9 kHz to 6.5 GHz frequency range",
      "Real-time bandwidth up to 40 MHz",
      "Density display for signal visualization",
      "EMI pre-compliance measurements",
      "10.1-inch multi-touch display"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "N9030B PXA Signal Analyzer",
    brand: "KEYSIGHT",
    image: signalGeneratorImage,
    description: "High-performance signal analyzer with industry-leading dynamic range for the most demanding aerospace and defense applications.",
    features: [
      "3 Hz to 50 GHz frequency range",
      "-172 dBm/Hz displayed average noise level",
      "510 MHz analysis bandwidth",
      "Real-time spectrum analysis option",
      "Multi-touch interface with streaming"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "RSA3045N Real-Time Spectrum Analyzer",
    brand: "RIGOL",
    image: signalGeneratorImage,
    description: "Versatile real-time spectrum analyzer combining traditional spectrum analysis with real-time capabilities.",
    features: [
      "9 kHz to 4.5 GHz frequency range",
      "25 MHz real-time analysis bandwidth",
      "Spectrogram and density displays",
      "Built-in tracking generator",
      "Vector signal analysis option"
    ],
    price: "Request Quote",
    inStock: true
  }
];

const SpectrumAnalyzers = () => {
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
                    Spectrum Analyzers
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
              <Radio className="w-4 h-4" />
              <span className="text-sm font-medium">RF Analysis</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Spectrum Analyzers
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Advanced RF and signal analysis solutions from KEYSIGHT, RIGOL for wireless testing, EMC compliance, and research applications
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

export default SpectrumAnalyzers;
