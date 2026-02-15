import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Gauge, Radio, Thermometer, Zap, Cpu, Wrench, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Zap,
    title: "ESD Lab Solutions",
    description: "Customized ESD Lab built as per your requirement",
    link: "/products/esd-lab-solutions"
  },
  {
    icon: Activity,
    title: "Oscilloscopes",
    description: "High-performance digital and analog oscilloscopes for precise waveform analysis",
    link: "/products/oscilloscopes"
  },
  {
    icon: Gauge,
    title: "Multimeters",
    description: "Professional-grade digital multimeters for accurate voltage, current, and resistance measurements",
    link: "/products/multimeters"
  },
  {
    icon: Radio,
    title: "Signal Generators",
    description: "Advanced signal generation equipment for testing and calibration applications",
    link: "/products/signal-generators"
  },
  {
    icon: Thermometer,
    title: "Temperature Sensors",
    description: "Industrial temperature measurement solutions with high accuracy and reliability",
    link: "/products/temperature-sensors"
  },
  {
    icon: Zap,
    title: "Power Supplies",
    description: "Precision programmable power supplies for laboratory and industrial use",
    link: "/products/power-supplies"
  },
  {
    icon: Cpu,
    title: "Logic Analyzers",
    description: "Digital logic analysis tools for embedded systems development and debugging",
    link: "/products/logic-analyzers"
  },
  {
    icon: Waves,
    title: "Spectrum Analyzers",
    description: "RF and signal analysis solutions for wireless testing and EMC compliance",
    link: "/products/spectrum-analyzers"
  },
  {
    icon: Wrench,
    title: "Probes",
    description: "Active, Passive, Differential & Current probes for oscilloscopes and measurement instruments",
    link: "/products/probes"
  },
  {
    icon: Wrench,
    title: "Other Products",
    description: "Vernier calipers, industrial air purifiers, electrical components, and more",
    link: "/products/other-products"
  },
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive measurement solutions across all major categories
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-accent/30"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={category.link}>
                    <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:text-accent hover:bg-transparent">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground">
            For other requirements please{" "}
            <Link to="/contact" className="text-primary hover:text-accent font-semibold underline underline-offset-4">
              share your query
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
