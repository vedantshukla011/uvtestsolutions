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
import signalGenImage from "@/assets/products/signal-generator.jpg";

const products = [
  // Priority brands: KEYSIGHT, FLUKE, TEKTRONIX first
  {
    name: "33600A Series Waveform Generator",
    brand: "KEYSIGHT",
    image: signalGenImage,
    description: "Trueform technology delivers unmatched capabilities for generating a full range of signals for your most demanding measurements.",
    features: [
      "80 MHz or 120 MHz bandwidth options",
      "1 GSa/s sampling rate with 16-bit resolution",
      "Exclusive Trueform signal generation technology",
      "Arbitrary waveform sequencing",
      "Advanced modulation capabilities"
    ],
    price: "Request Quote"
  },
  {
    name: "AFG31000 Series Arbitrary Function Generator",
    brand: "TEKTRONIX",
    image: signalGenImage,
    description: "Advanced arbitrary function generator with touchscreen interface and exceptional signal fidelity up to 250 MHz.",
    features: [
      "25 MHz, 150 MHz, or 250 MHz models available",
      "1 GS/s sample rate with 14-bit vertical resolution",
      "128 Mpts arbitrary waveform memory",
      "Dual-channel independent or synchronized operation",
      "Large 9-inch capacitive touchscreen display"
    ],
    price: "Request Quote"
  },
  // Other brands
  {
    name: "DG900 Pro Series Waveform Generator",
    brand: "RIGOL",
    image: signalGenImage,
    description: "Professional dual-channel function/arbitrary waveform generator with superior signal quality.",
    features: [
      "25 MHz to 70 MHz bandwidth options",
      "625 MSa/s sample rate with 16-bit resolution",
      "16 Mpts arbitrary waveform memory",
      "SiFi IV signal generation technology",
      "4.3-inch TFT color display"
    ],
    price: "Request Quote"
  },
  {
    name: "DG5000 Series Function/Arbitrary Waveform Generator",
    brand: "RIGOL",
    image: signalGenImage,
    description: "High-performance dual-channel generator with advanced capabilities for demanding applications.",
    features: [
      "100 MHz, 200 MHz, or 350 MHz bandwidth",
      "1 GSa/s sample rate with 14-bit vertical resolution",
      "8 Mpts arbitrary waveform memory per channel",
      "Rich modulation functions including AM, FM, PM",
      "Built-in 7-inch color display"
    ],
    price: "Request Quote"
  },
  {
    name: "SDG6000X Series Arbitrary Waveform Generator",
    brand: "SIGLENT",
    image: signalGenImage,
    description: "High-performance dual-channel AWG with excellent signal quality and comprehensive modulation functions.",
    features: [
      "500 MHz maximum frequency with low jitter",
      "2.4 GSa/s sample rate with 16-bit vertical resolution",
      "Up to 512 Mpts arbitrary waveform length",
      "Multi-tone generation up to 16 tones",
      "Advanced modulation and sweep functions"
    ],
    price: "Request Quote"
  },
  {
    name: "SDG2000X Plus Waveform Generator",
    brand: "SIGLENT",
    image: signalGenImage,
    description: "Dual-channel function/arbitrary waveform generator with excellent signal fidelity.",
    features: [
      "120 MHz maximum frequency",
      "1.2 GSa/s sample rate with 16-bit resolution",
      "16 Mpts arbitrary waveform memory",
      "TrueArb and EasyPulse technology",
      "4.3-inch TFT touchscreen"
    ],
    price: "Request Quote"
  },
  {
    name: "AG Series Arbitrary Waveform Generator",
    brand: "OWON",
    image: signalGenImage,
    description: "Versatile arbitrary waveform generator for education and general-purpose signal generation.",
    features: [
      "25 MHz to 60 MHz bandwidth",
      "250 MSa/s sample rate",
      "8K points arbitrary waveform",
      "Multiple standard waveforms",
      "3.5-inch TFT LCD display"
    ],
    price: "Request Quote"
  },
  {
    name: "AFG-2000 Series Function Generator",
    brand: "GW INSTEK",
    image: signalGenImage,
    description: "Professional function generator with comprehensive modulation and sweep capabilities.",
    features: [
      "12 MHz to 25 MHz bandwidth options",
      "120 MSa/s sample rate",
      "10-bit resolution",
      "Multiple modulation modes",
      "3.5-inch TFT LCD display"
    ],
    price: "Request Quote"
  },
  {
    name: "MFG-2000 Series Multi-Channel Function Generator",
    brand: "GW INSTEK",
    image: signalGenImage,
    description: "Multi-channel function generator with advanced features for complex signal generation.",
    features: [
      "60 MHz maximum frequency",
      "200 MSa/s sample rate",
      "16K points arbitrary waveform",
      "Dual-channel independent output",
      "4.3-inch TFT LCD display"
    ],
    price: "Request Quote"
  },
  {
    name: "IT-115 Function Generator",
    brand: "ITECH",
    image: signalGenImage,
    description: "Compact function generator with essential features for basic signal generation needs.",
    features: [
      "15 MHz maximum frequency",
      "Multiple standard waveforms",
      "AM/FM modulation capability",
      "Linear and logarithmic sweep",
      "Compact benchtop design"
    ],
    price: "Request Quote"
  },
  {
    name: "UTG1000 Series Function Generator",
    brand: "UNI-T",
    image: signalGenImage,
    description: "Dual-channel function generator with arbitrary waveform capability for versatile applications.",
    features: [
      "40 MHz to 80 MHz bandwidth",
      "250 MSa/s sample rate",
      "14-bit vertical resolution",
      "Multiple modulation functions",
      "3.5-inch TFT color display"
    ],
    price: "Request Quote"
  }
];

const SignalGenerators = () => {
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
                    Signal Generators
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
              <Radio className="w-4 h-4" />
              <span className="text-sm font-medium">Waveform Generation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Advanced
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Signal Generators
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Precision signal generation equipment from TEKTRONIX, KEYSIGHT, SIGLENT, GW INSTEK, UNI-T and ITECH
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

export default SignalGenerators;
