import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
import logicAnalyzerImage from "@/assets/products/logic-analyzer.jpg";

const products = [
  {
    name: "16860A Series Logic Analyzer",
    brand: "KEYSIGHT",
    image: logicAnalyzerImage,
    description: "High-performance portable logic analyzer with deep memory and fast timing for debugging complex digital systems.",
    features: [
      "Up to 204 channels at 250 MHz",
      "4M sample depth per channel",
      "400 ps timing resolution",
      "Advanced triggering capabilities",
      "Eye scan and jitter analysis"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "U4164A Logic Analyzer Module",
    brand: "KEYSIGHT",
    image: logicAnalyzerImage,
    description: "Modular logic analyzer providing exceptional timing and state analysis for high-speed digital design verification.",
    features: [
      "136 channels at 2.5 Gb/s",
      "6.25 GHz timing analysis",
      "Deep memory options",
      "Advanced protocol decode",
      "Pattern generator option"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "DS70000 Series Digital Oscilloscope",
    brand: "RIGOL",
    image: logicAnalyzerImage,
    description: "High-bandwidth digital oscilloscope with integrated logic analyzer functionality for mixed-signal debugging.",
    features: [
      "Up to 2 GHz bandwidth",
      "16 digital channels option",
      "10 GSa/s sample rate",
      "500 Mpts memory depth",
      "Protocol triggering and decode"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "MSO8000 Series Mixed Signal Oscilloscope",
    brand: "RIGOL",
    image: logicAnalyzerImage,
    description: "Professional mixed signal oscilloscope combining analog and digital analysis with exceptional performance.",
    features: [
      "4 analog + 16 digital channels",
      "Up to 2 GHz analog bandwidth",
      "10 GSa/s sample rate",
      "500 Mpts memory depth",
      "Advanced serial decode"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "MSOX6004A Mixed Signal Oscilloscope",
    brand: "KEYSIGHT",
    image: logicAnalyzerImage,
    description: "Industry-leading mixed signal oscilloscope with FlexChannel technology for comprehensive signal analysis.",
    features: [
      "Up to 6 GHz bandwidth",
      "Flexible 4-8 analog channels",
      "16 digital channels per scope",
      "Zone touch triggering",
      "Advanced jitter analysis"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "MSO5000 Series Mixed Signal Oscilloscope",
    brand: "RIGOL",
    image: logicAnalyzerImage,
    description: "Versatile mixed signal oscilloscope offering excellent value for embedded systems development and debugging.",
    features: [
      "4 analog + 16 digital channels",
      "Up to 350 MHz bandwidth",
      "8 GSa/s sample rate",
      "200 Mpts memory depth",
      "Serial protocol analysis"
    ],
    price: "Request Quote",
    inStock: true
  }
];

const LogicAnalyzers = () => {
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
                    Logic Analyzers
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
              <Cpu className="w-4 h-4" />
              <span className="text-sm font-medium">Digital Analysis</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Logic Analyzers
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Advanced logic analysis tools from TEKTRONIX, KEYSIGHT, SALEAE for embedded systems development and debugging
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

export default LogicAnalyzers;
