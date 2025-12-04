import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Import product images
import vernierCaliperImg from "@/assets/products/multimeter-fluke.jpg";
import airPurifierImg from "@/assets/products/power-supply.jpg";
import electricalComponentImg from "@/assets/products/logic-analyzer.jpg";

const products = [
  {
    name: "Digital Vernier Caliper 150mm",
    brand: "MITUTOYO",
    image: vernierCaliperImg,
    description: "High-precision digital caliper with 150mm measuring range, featuring an easy-to-read LCD display and data output capability.",
    features: ["0.01mm resolution", "IP67 dust/water protection", "Data output function", "Carbide-tipped jaws"],
  },
  {
    name: "Dial Vernier Caliper 200mm",
    brand: "INSIZE",
    image: vernierCaliperImg,
    description: "Professional dial caliper with 200mm range, offering reliable mechanical measurement for industrial applications.",
    features: ["0.02mm accuracy", "Hardened stainless steel", "Shock-resistant dial", "Thumb roller adjustment"],
  },
  {
    name: "Industrial Air Purifier HEPA",
    brand: "HONEYWELL",
    image: airPurifierImg,
    description: "Heavy-duty industrial air purifier with HEPA filtration, designed for manufacturing and laboratory environments.",
    features: ["HEPA H13 filter", "500 CFM capacity", "Activated carbon layer", "Auto air quality sensor"],
  },
  {
    name: "Portable Air Purifier with UV",
    brand: "PHILIPS",
    image: airPurifierImg,
    description: "Compact portable air purifier with UV-C sterilization, ideal for cleanrooms and sensitive work areas.",
    features: ["UV-C sterilization", "3-stage filtration", "Quiet operation", "Energy efficient"],
  },
  {
    name: "Precision Resistor Kit",
    brand: "VISHAY",
    image: electricalComponentImg,
    description: "Comprehensive precision resistor assortment kit with metal film resistors for laboratory and R&D applications.",
    features: ["1% tolerance", "500+ pieces", "Metal film type", "Organized storage case"],
  },
  {
    name: "Capacitor Assortment Kit",
    brand: "PANASONIC",
    image: electricalComponentImg,
    description: "Professional electrolytic and ceramic capacitor kit for electronics prototyping and repair work.",
    features: ["Wide value range", "300+ pieces", "High-quality brands", "Multiple types included"],
  },
  {
    name: "SMD Component Kit",
    brand: "YAGEO",
    image: electricalComponentImg,
    description: "Complete SMD component assortment including resistors, capacitors, and semiconductors for surface mount applications.",
    features: ["2000+ pieces", "Multiple package sizes", "Component book storage", "Value labeled"],
  },
  {
    name: "Digital Micrometer 0-25mm",
    brand: "MITUTOYO",
    image: vernierCaliperImg,
    description: "High-precision digital micrometer with 0-25mm range, featuring electronic display and data output.",
    features: ["0.001mm resolution", "SPC data output", "Ratchet thimble", "Carbide measuring faces"],
  },
  {
    name: "Industrial Dust Collector",
    brand: "BOSCH",
    image: airPurifierImg,
    description: "Heavy-duty industrial dust collector for workshop and manufacturing floor air quality management.",
    features: ["1000 CFM capacity", "Auto filter cleaning", "Mobile design", "Low noise operation"],
  }
];

const OtherProducts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium">Other Products</span>
            </nav>
            
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Other Products & Accessories
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore our range of precision measuring instruments, industrial air purification systems, 
                and quality electrical components from trusted brands like Mitutoyo, Honeywell, and Vishay.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OtherProducts;
