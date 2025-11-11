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
import oscilloscopeImage from "@/assets/products/oscilloscope-tektronix.jpg";

const products = [
  {
    name: "MDO3000 Series Mixed Domain Oscilloscope",
    brand: "TEKTRONIX",
    image: oscilloscopeImage,
    description: "Industry-leading mixed domain oscilloscope combining analog, digital, and RF analysis capabilities in a single instrument.",
    features: [
      "Up to 1 GHz bandwidth with 4 analog channels",
      "5 GS/s sample rate with 10 M record length",
      "Integrated spectrum analyzer (9 kHz to 3 GHz)",
      "Advanced triggering and protocol decode",
      "10.4-inch capacitive touchscreen display"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "InfiniiVision 4000 X-Series Oscilloscope",
    brand: "KEYSIGHT",
    image: oscilloscopeImage,
    description: "High-performance oscilloscope delivering exceptional signal integrity and the industry's lowest noise floor.",
    features: [
      "200 MHz to 1.5 GHz bandwidth options",
      "Up to 5 GSa/s sample rate",
      "4 Mpts standard memory (upgradable to 1 Gpts)",
      "12.1-inch capacitive touchscreen",
      "Zone touch trigger for complex signals"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "RTM3000 Oscilloscope",
    brand: "ROHDE & SCHWARZ",
    image: oscilloscopeImage,
    description: "Versatile oscilloscope with outstanding signal fidelity and the industry's best 10-bit ADC for precision measurements.",
    features: [
      "100 MHz to 1 GHz bandwidth",
      "10-bit ADC resolution for superior accuracy",
      "Up to 5 GSa/s real-time sampling",
      "80 million waveforms/s update rate",
      "Large 10.1-inch HD touchscreen"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "DS7000 Series Digital Oscilloscope",
    brand: "RIGOL",
    image: oscilloscopeImage,
    description: "Cost-effective high-performance oscilloscope ideal for embedded systems and power electronics applications.",
    features: [
      "100 MHz to 500 MHz bandwidth",
      "10 GSa/s maximum real-time sample rate",
      "Up to 500 Mpts memory depth",
      "Low noise front-end design",
      "Multiple serial bus decoding options"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "SDS6000 Pro Digital Oscilloscope",
    brand: "SIGLENT",
    image: oscilloscopeImage,
    description: "Professional-grade oscilloscope with exceptional performance for demanding measurement applications.",
    features: [
      "1 GHz to 2 GHz bandwidth",
      "10 GSa/s sample rate with 10-bit ADC",
      "Up to 2 Gpts memory depth",
      "5,000,000 wfm/s waveform capture rate",
      "13.3-inch full HD capacitive touchscreen"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "WaveRunner 8000 HD Oscilloscope",
    brand: "TELEDYNE LECROY",
    image: oscilloscopeImage,
    description: "HD4096 high-definition technology delivers 12-bit resolution for the ultimate measurement clarity and accuracy.",
    features: [
      "1 GHz to 4 GHz bandwidth",
      "12-bit ADC with HD4096 technology",
      "Up to 20 GS/s sample rate",
      "Advanced math and measurement capabilities",
      "15.6-inch touch screen display"
    ],
    price: "Request Quote",
    inStock: true
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
              Precision waveform analysis instruments from world-leading brands including TEKTRONIX, KEYSIGHT, and ROHDE & SCHWARZ
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
