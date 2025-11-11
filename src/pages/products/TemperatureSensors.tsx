import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Thermometer } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import tempSensorImage from "@/assets/products/temperature-sensor.jpg";

const products = [
  {
    name: "FLUKE 1523/1524 Reference Thermometer",
    brand: "FLUKE CALIBRATION",
    image: tempSensorImage,
    description: "Precision reference thermometer providing laboratory accuracy for industrial and field calibration applications.",
    features: [
      "± 0.03°C accuracy with PRTs",
      "Temperature range: -200°C to 670°C",
      "Dual channel inputs for simultaneous measurements",
      "Data logging with USB interface",
      "NVLAP-accredited calibration available"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "Pt100 RTD Temperature Sensor",
    brand: "OMEGA ENGINEERING",
    image: tempSensorImage,
    description: "Industrial-grade Pt100 RTD sensors offering exceptional accuracy and long-term stability for demanding applications.",
    features: [
      "Class A accuracy: ± 0.15°C at 0°C",
      "Temperature range: -200°C to 850°C",
      "2-wire, 3-wire, or 4-wire configurations",
      "Various probe lengths and diameters available",
      "316 stainless steel construction"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "Type K Thermocouple Probes",
    brand: "FLUKE",
    image: tempSensorImage,
    description: "Versatile Type K thermocouple probes designed for general purpose temperature measurements in industrial environments.",
    features: [
      "Temperature range: -40°C to 260°C",
      "Fast response time for quick measurements",
      "Ruggedized design for harsh environments",
      "Compatible with all FLUKE thermometers",
      "Various probe tip configurations available"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "T3000 Series Temperature Transmitter",
    brand: "SIEMENS",
    image: tempSensorImage,
    description: "Smart temperature transmitter with HART protocol for accurate and reliable industrial temperature monitoring.",
    features: [
      "Universal input for RTD, TC, and mV signals",
      "Accuracy up to ± 0.05% of span",
      "HART 7 communication protocol",
      "4-20 mA output with diagnostics",
      "Wide operating temperature range"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "Thermistor Temperature Sensors",
    brand: "TE CONNECTIVITY",
    image: tempSensorImage,
    description: "High-precision thermistor sensors providing exceptional sensitivity and accuracy for laboratory applications.",
    features: [
      "High sensitivity: 10,000 Ω at 25°C",
      "Accuracy to ± 0.1°C or better",
      "Fast thermal response time",
      "Excellent long-term stability",
      "Small form factor for point measurements"
    ],
    price: "Request Quote",
    inStock: true
  },
  {
    name: "IR Temperature Sensor Module",
    brand: "OPTRIS",
    image: tempSensorImage,
    description: "Non-contact infrared temperature sensor for accurate measurements in challenging industrial applications.",
    features: [
      "Measurement range: -40°C to 1030°C",
      "Response time: 150 ms",
      "0-10V or 4-20 mA analog output",
      "USB interface for configuration",
      "IP65 protection rating"
    ],
    price: "Request Quote",
    inStock: true
  }
];

const TemperatureSensors = () => {
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
                    Temperature Sensors
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
              <Thermometer className="w-4 h-4" />
              <span className="text-sm font-medium">Thermal Measurement</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Precision
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Temperature Sensors
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Industrial temperature measurement solutions from FLUKE CALIBRATION, OMEGA ENGINEERING, and other leading manufacturers
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

export default TemperatureSensors;
