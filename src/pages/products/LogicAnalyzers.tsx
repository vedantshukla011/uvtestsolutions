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
    name: "MSO5000 Series Mixed Signal Oscilloscope",
    brand: "TEKTRONIX",
    image: logicAnalyzerImage,
    description: "Advanced mixed signal oscilloscope combining analog and digital analysis with exceptional performance.",
    features: [
      "4 analog + 16 digital channels",
      "Up to 2 GHz analog bandwidth",
      "12.5 M record length per channel",
      "FastAcq with 500,000 wfms/s capture rate",
      "Advanced serial protocol triggering and decode"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "Logic Pro 16 USB Logic Analyzer",
    brand: "SALEAE",
    image: logicAnalyzerImage,
    description: "High-performance USB logic analyzer with intuitive software for embedded systems debugging and validation.",
    features: [
      "16 digital channels with 100 MS/s sampling",
      "Voltage range: 1.2V to 5.5V",
      "Advanced protocol analyzers built-in",
      "Intuitive cross-platform software",
      "Automatic protocol detection"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "MSOX3000 Series Mixed Signal Oscilloscope",
    brand: "KEYSIGHT",
    image: logicAnalyzerImage,
    description: "Versatile mixed signal oscilloscope delivering comprehensive analysis with 16 integrated digital channels.",
    features: [
      "4 analog + 16 digital channels",
      "1 GHz analog bandwidth options",
      "Upgradable memory up to 4 Mpts",
      "Built-in protocol decode and triggering",
      "8.5-inch capacitive touchscreen"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "SLA5000 Series Logic Analyzer",
    brand: "SIGLENT",
    image: logicAnalyzerImage,
    description: "Cost-effective logic analyzer providing comprehensive digital analysis capabilities for embedded development.",
    features: [
      "16 digital channels with 500 MS/s",
      "Up to 64 Mpts memory depth",
      "Multiple protocol decode options",
      "Advanced triggering capabilities",
      "USB connectivity with PC software"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "MSO6000 Series Mixed Signal Oscilloscope",
    brand: "RIGOL",
    image: logicAnalyzerImage,
    description: "Professional mixed signal oscilloscope combining powerful analog and digital analysis in one instrument.",
    features: [
      "4 analog + 16 digital channels",
      "Up to 1 GHz analog bandwidth",
      "1 GSa/s digital sample rate",
      "Comprehensive serial bus decode",
      "10.1-inch multi-touch display"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "MSO64 Mixed Signal Oscilloscope",
    brand: "TEKTRONIX",
    image: logicAnalyzerImage,
    description: "Industry-leading MSO delivering unprecedented visibility into complex embedded systems with 12-bit ADC.",
    features: [
      "4, 6, or 8 FlexChannel inputs",
      "Up to 8 GHz analog bandwidth",
      "12-bit ADC with TEK061 technology",
      "Up to 62.5 Mpts per channel memory",
      "15.6-inch high-definition touchscreen"
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
