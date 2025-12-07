import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Gauge } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import multimeterImage from "@/assets/products/multimeter-fluke.jpg";

const products = [
  {
    name: "87V Industrial Multimeter",
    brand: "FLUKE",
    image: multimeterImage,
    description: "Industry-standard digital multimeter for demanding industrial environments with superior accuracy and reliability.",
    features: [
      "True RMS measurements for accurate readings",
      "0.05% DC accuracy specification",
      "Temperature measurement capability",
      "Low-pass filter for precise measurements on VFDs",
      "CAT III 1000V, CAT IV 600V safety rating"
    ],
    price: "Request Quote"
  },
  {
    name: "Fluke 117 Electrician's Multimeter",
    brand: "FLUKE",
    image: multimeterImage,
    description: "Ideal multimeter for electricians with VoltAlert technology and non-contact voltage detection.",
    features: [
      "True RMS for accurate measurements on non-linear loads",
      "VoltAlert technology for non-contact voltage detection",
      "AutoVolt automatic AC/DC voltage selection",
      "Large white LED backlight for low-light areas",
      "CAT III 600V safety rated"
    ],
    price: "Request Quote"
  },
  {
    name: "U1272A Handheld Digital Multimeter",
    brand: "KEYSIGHT",
    image: multimeterImage,
    description: "Professional handheld DMM with dual display, data logging, and PC connectivity for comprehensive measurements.",
    features: [
      "60,000 count resolution with 0.025% basic DCV accuracy",
      "Dual display with analog bar graph",
      "Built-in data logger with USB interface",
      "Harmonic ratio measurement",
      "CAT III 1000V, CAT IV 600V safety rated"
    ],
    price: "Request Quote"
  },
  {
    name: "34465A Digital Multimeter 6½ Digit",
    brand: "KEYSIGHT",
    image: multimeterImage,
    description: "Truevolt series DMM with graphical display and industry-leading accuracy for benchtop measurements.",
    features: [
      "6½ digit resolution with 0.0016% DCV accuracy",
      "1,000 readings/second digitizing rate",
      "Graphical display with histogram, trend chart",
      "Math operations and limit testing",
      "USB, LAN, and GPIB connectivity"
    ],
    price: "Request Quote"
  },
  {
    name: "DM3068 Digital Multimeter",
    brand: "RIGOL",
    image: multimeterImage,
    description: "6½ digit precision benchtop DMM with dual measurement display and comprehensive measurement functions.",
    features: [
      "6½ digit resolution with 0.0035% DCV accuracy",
      "Dual measurement display capability",
      "Up to 50,000 readings/s scanning speed",
      "Built-in 6-slot scanner card",
      "USB, LAN, and GPIB interfaces"
    ],
    price: "Request Quote"
  },
  {
    name: "SDM3065X Digital Multimeter",
    brand: "SIGLENT",
    image: multimeterImage,
    description: "High-precision 6½ digit benchtop multimeter with color display and advanced measurement capabilities.",
    features: [
      "6½ digit resolution with fast measurement speed",
      "Dual display with 4.3-inch color TFT LCD",
      "11 measurement functions including capacitance",
      "Built-in 10-channel scanner card slot",
      "Multiple interface options (USB, LAN, GPIB)"
    ],
    price: "Request Quote"
  },
  {
    name: "UT61E+ True RMS Multimeter",
    brand: "UNI-T",
    image: multimeterImage,
    description: "Professional True RMS digital multimeter with high accuracy and comprehensive measurement functions.",
    features: [
      "22000 count display resolution",
      "True RMS AC voltage and current",
      "USB data transfer capability",
      "Auto power off function",
      "CAT III 600V safety rated"
    ],
    price: "Request Quote"
  },
  {
    name: "UT139C Digital Multimeter",
    brand: "UNI-T",
    image: multimeterImage,
    description: "Compact True RMS multimeter ideal for field technicians and electronics professionals.",
    features: [
      "6000 count auto-ranging display",
      "True RMS measurement capability",
      "NCV non-contact voltage detection",
      "Temperature measurement function",
      "Data hold and relative mode"
    ],
    price: "Request Quote"
  },
  {
    name: "DMM4050 6½ Digit Precision Multimeter",
    brand: "TEKTRONIX",
    image: multimeterImage,
    description: "Precision benchtop DMM combining exceptional measurement accuracy with comprehensive analysis capabilities.",
    features: [
      "6½ digit resolution with 0.0024% DCV accuracy",
      "Graphical display with trend chart",
      "1000 reading/s digitize rate",
      "Built-in statistics and histogram functions",
      "USB and Ethernet connectivity"
    ],
    price: "Request Quote"
  },
  {
    name: "GDM-8261A Digital Multimeter",
    brand: "GW INSTEK",
    image: multimeterImage,
    description: "Dual measurement display DMM with high precision for R&D and production testing applications.",
    features: [
      "6½ digit resolution with 0.0035% DCV accuracy",
      "Dual measurement display",
      "11 measurement functions",
      "USB, RS-232, and GPIB interfaces",
      "Built-in math and statistics"
    ],
    price: "Request Quote"
  },
  {
    name: "DT-9989 Professional Multimeter",
    brand: "HTC",
    image: multimeterImage,
    description: "Professional digital multimeter with thermal imaging capability for comprehensive electrical analysis.",
    features: [
      "Built-in thermal imaging camera",
      "True RMS measurements",
      "Bluetooth connectivity",
      "50000 count display",
      "CAT IV 600V safety rating"
    ],
    price: "Request Quote"
  },
  {
    name: "Rish Multi 18S Multimeter",
    brand: "RISHABH",
    image: multimeterImage,
    description: "Professional grade digital multimeter designed for industrial and laboratory applications.",
    features: [
      "True RMS AC/DC measurements",
      "4000 count display",
      "Capacitance and frequency measurement",
      "Auto power off function",
      "CAT III 600V rated"
    ],
    price: "Request Quote"
  }
];

const Multimeters = () => {
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
                    Multimeters
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
              <Gauge className="w-4 h-4" />
              <span className="text-sm font-medium">Precision Measurement</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Multimeters
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Industry-leading digital multimeters from FLUKE, KEYSIGHT, UNI-T, RISHABH and other trusted brands
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

export default Multimeters;
