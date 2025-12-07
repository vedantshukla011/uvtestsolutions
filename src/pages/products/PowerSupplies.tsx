import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Zap } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import powerSupplyImage from "@/assets/products/power-supply.jpg";

const products = [
  {
    name: "E36300 Series Triple Output Power Supply",
    brand: "KEYSIGHT",
    image: powerSupplyImage,
    description: "Versatile triple-output programmable DC power supply delivering clean power with exceptional performance.",
    features: [
      "Three independent isolated outputs",
      "6V/5A, 25V/1A, -25V/1A output configuration",
      "± 0.03% voltage programming accuracy",
      "Low noise: <350 µVrms (5 Hz-10 MHz)",
      "Built-in data logging and analysis"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "E36200 Series Autoranging DC Power Supply",
    brand: "KEYSIGHT",
    image: powerSupplyImage,
    description: "Single output autoranging power supply with advanced protection features and fast transient response.",
    features: [
      "Autoranging output up to 200W",
      "Output voltage: 0-60V, Current: 0-10A",
      "Low output noise: <3 mVpp",
      "Fast transient response < 50 µs",
      "USB, LAN, and GPIB interfaces"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "PWS4000 Series Programmable DC Power Supply",
    brand: "TEKTRONIX",
    image: powerSupplyImage,
    description: "High-performance programmable power supply with touchscreen interface and advanced measurement capabilities.",
    features: [
      "Up to 800W output power",
      "Voltage range: 0-80V, Current range: 0-60A",
      "± 0.02% voltage and current accuracy",
      "5-inch color touchscreen display",
      "List mode with up to 100 programmable steps"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "DP800 Series Programmable Linear DC Power Supply",
    brand: "RIGOL",
    image: powerSupplyImage,
    description: "Multi-channel programmable power supply combining excellent performance with innovative features.",
    features: [
      "Three independent isolated channels",
      "Low ripple: < 350 µVrms at full load",
      "High resolution: 1 mV/0.1 mA",
      "Built-in V, A, W measurements and waveforms",
      "Flexible output configurations"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "DP900 Series Programmable Power Supply",
    brand: "RIGOL",
    image: powerSupplyImage,
    description: "Entry-level triple output power supply with excellent stability and low noise for basic applications.",
    features: [
      "Three isolated output channels",
      "32V/3A per channel capability",
      "Low ripple and noise < 500 µVrms",
      "Timing output control function",
      "USB interface for remote control"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "DP2000 Series High Precision Power Supply",
    brand: "RIGOL",
    image: powerSupplyImage,
    description: "High-precision linear DC power supply with ultra-low noise for sensitive electronic applications.",
    features: [
      "Dual channel isolated outputs",
      "60V/5A or 30V/10A configurations",
      "Ultra-low ripple: < 300 µVrms",
      "High resolution: 0.1 mV/0.01 mA",
      "4.3-inch TFT LCD display"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "SPD3000X Series Programmable DC Power Supply",
    brand: "SIGLENT",
    image: powerSupplyImage,
    description: "Linear DC power supply with ultra-low ripple and noise for sensitive electronic measurements.",
    features: [
      "Triple-channel output configuration",
      "≤ 350µVrms ripple and noise",
      "5-digit high-resolution display",
      "Built-in waveform display function",
      "USB, LAN, and RS232 interfaces"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "ZUP Series Electronic Load and Power Supply",
    brand: "TDK-LAMBDA",
    image: powerSupplyImage,
    description: "Versatile programmable power supply combining bipolar operation with electronic load functionality.",
    features: [
      "Bipolar operation: source and sink modes",
      "Up to 1500W output power",
      "Fast transient response < 30 µs",
      "Built-in arbitrary waveform generation",
      "USB, LAN, and GPIB interfaces"
    ],
    price: "Request Quote",
    inStock: true
  }
];

const PowerSupplies = () => {
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
                    Power Supplies
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Power Generation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Programmable
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Power Supplies
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              High-precision programmable power supplies from KEYSIGHT, TEKTRONIX, RIGOL for laboratory and industrial applications
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

export default PowerSupplies;
