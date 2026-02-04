import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
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

import tempFlukeRef from "@/assets/products/temp-fluke-ref.jpg";
import tempFlukeProbe from "@/assets/products/temp-fluke-probe.jpg";
import tempTesto from "@/assets/products/temp-testo.jpg";
import tempIrSensor from "@/assets/products/temp-ir-sensor.jpg";
import tempHtc from "@/assets/products/temp-htc.jpg";

const products = [
  // Priority brands: KEYSIGHT, FLUKE, TEKTRONIX first
  {
    name: "FLUKE 1523/1524 Reference Thermometer",
    brand: "FLUKE CALIBRATION",
    image: tempFlukeRef,
    description: "Precision reference thermometer providing laboratory accuracy for industrial and field calibration applications.",
    features: [
      "± 0.03°C accuracy with PRTs",
      "Temperature range: -200°C to 670°C",
      "Dual channel inputs for simultaneous measurements",
      "Data logging with USB interface",
      "NVLAP-accredited calibration available"
    ],
    price: "Request Quote"
  },
  {
    name: "Type K Thermocouple Probes",
    brand: "FLUKE",
    image: tempFlukeProbe,
    description: "Versatile Type K thermocouple probes designed for general purpose temperature measurements.",
    features: [
      "Temperature range: -40°C to 260°C",
      "Fast response time",
      "Ruggedized design",
      "Compatible with all FLUKE thermometers",
      "Various probe tip configurations"
    ],
    price: "Request Quote"
  },
  // Other brands
  {
    name: "testo 735 Precision Thermometer",
    brand: "TESTO",
    image: tempTesto,
    description: "High-precision multichannel thermometer for laboratory and industrial temperature measurement.",
    features: [
      "3-channel measurement capability",
      "Accuracy up to ±0.05°C",
      "Memory for 10,000 readings",
      "PC software for data analysis",
      "Multiple probe compatibility"
    ],
    price: "Request Quote"
  },
  {
    name: "testo 926 Temperature Measuring Instrument",
    brand: "TESTO",
    image: tempTesto,
    description: "Fast-response temperature measuring instrument ideal for food industry applications.",
    features: [
      "Response time < 3 seconds",
      "Temperature range: -50°C to +400°C",
      "Audible alarm function",
      "Waterproof housing IP65",
      "HACCP compliant"
    ],
    price: "Request Quote"
  },
  {
    name: "IR Temperature Sensor Module",
    brand: "OPTRIS",
    image: tempIrSensor,
    description: "Non-contact infrared temperature sensor for accurate measurements in challenging applications.",
    features: [
      "Measurement range: -40°C to 1030°C",
      "Response time: 150 ms",
      "0-10V or 4-20 mA analog output",
      "USB interface for configuration",
      "IP65 protection rating"
    ],
    price: "Request Quote"
  },
  {
    name: "DT-8869H IR Thermometer",
    brand: "HTC",
    image: tempHtc,
    description: "Professional infrared thermometer with high temperature measurement capability.",
    features: [
      "Temperature range: -50°C to 1850°C",
      "Distance to spot ratio: 50:1",
      "Adjustable emissivity",
      "Data logging function",
      "Laser targeting system"
    ],
    price: "Request Quote"
  }
];

const TemperatureSensors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Temperature Sensors - Thermometers & IR Sensors"
        description="Buy temperature measuring instruments from Fluke, Testo, HTC. Reference thermometers, thermocouple probes, IR sensors. Best prices in India."
        canonical="/products/temperature-sensors"
        keywords="temperature sensor India, Fluke thermometer, thermocouple probe, IR temperature sensor, Testo thermal"
      />
      <Header />
      
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-accent font-semibold">Temperature Sensors</BreadcrumbPage>
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
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Temperature Sensors</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Industrial temperature measurement solutions from FLUKE, TESTO, HTC and other leading manufacturers
            </p>
          </div>
        </div>
      </section>

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