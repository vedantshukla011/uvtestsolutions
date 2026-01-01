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
  // Priority brands: KEYSIGHT, FLUKE, TEKTRONIX first
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
    price: "Request Quote"
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
    price: "Request Quote"
  },
  // Other brands
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
    price: "Request Quote"
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
    price: "Request Quote"
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
    price: "Request Quote"
  },
  {
    name: "SPD1000X Series Single Channel Power Supply",
    brand: "SIGLENT",
    image: powerSupplyImage,
    description: "Cost-effective single channel power supply with excellent regulation and protection features.",
    features: [
      "Single channel output up to 360W",
      "High resolution: 10 mV/1 mA",
      "Low ripple: < 500 µVrms",
      "OVP, OCP, OTP protection",
      "4.3-inch TFT LCD display"
    ],
    price: "Request Quote"
  },
  {
    name: "IT6000 Series High Power DC Power Supply",
    brand: "ITECH",
    image: powerSupplyImage,
    description: "High power programmable DC power supply for industrial and automotive testing applications.",
    features: [
      "Up to 144 kW output power",
      "Bidirectional power capability",
      "Fast transient response",
      "Built-in waveform generation",
      "Master/slave parallel operation"
    ],
    price: "Request Quote"
  },
  {
    name: "IT6500 Series Wide Range DC Power Supply",
    brand: "ITECH",
    image: powerSupplyImage,
    description: "Wide-range programmable DC power supply with auto-ranging technology for versatile applications.",
    features: [
      "Up to 6000W output power",
      "Auto-ranging output capability",
      "High slew rate for dynamic testing",
      "Solar array simulation function",
      "USB, LAN, RS-232, GPIB interfaces"
    ],
    price: "Request Quote"
  },
  {
    name: "PSW Series Programmable Switching Power Supply",
    brand: "GW INSTEK",
    image: powerSupplyImage,
    description: "High-efficiency switching power supply with compact design for benchtop and system integration.",
    features: [
      "Up to 1080W output power",
      "Voltage range: 0-80V, Current: 0-135A",
      "Remote sense function",
      "USB, RS-232, LAN interfaces",
      "Compact 2U rack-mount design"
    ],
    price: "Request Quote"
  },
  {
    name: "GPD-4303S Programmable Linear DC Power Supply",
    brand: "GW INSTEK",
    image: powerSupplyImage,
    description: "Four-channel programmable linear power supply for comprehensive power supply needs.",
    features: [
      "Four independent output channels",
      "Low noise: < 1 mVrms",
      "Series/parallel tracking modes",
      "USB interface for remote control",
      "Output timer function"
    ],
    price: "Request Quote"
  },
  {
    name: "ODP Series Programmable DC Power Supply",
    brand: "OWON",
    image: powerSupplyImage,
    description: "Compact programmable power supply with multiple channels for education and R&D applications.",
    features: [
      "Triple output channels",
      "Low ripple and noise",
      "High resolution setting",
      "OVP/OCP protection",
      "USB connectivity"
    ],
    price: "Request Quote"
  },
  {
    name: "UTP1000 Series DC Power Supply",
    brand: "UNI-T",
    image: powerSupplyImage,
    description: "Professional DC power supply with precise voltage and current control for laboratory use.",
    features: [
      "Dual channel output",
      "High resolution: 10 mV/1 mA",
      "Constant voltage/current modes",
      "Overload protection",
      "Large LED display"
    ],
    price: "Request Quote"
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
              High-precision programmable power supplies from KEYSIGHT, RIGOL, SIGLENT, ITECH, GW INSTEK, OWON and UNI-T
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
