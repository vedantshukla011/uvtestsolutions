import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Zap, CheckCircle, Settings, Shield, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Settings,
    title: "Custom Design",
    description: "Tailored ESD lab solutions designed specifically for your facility requirements and industry standards."
  },
  {
    icon: Shield,
    title: "Complete Protection",
    description: "Comprehensive ESD protection systems including flooring, workstations, grounding, and monitoring equipment."
  },
  {
    icon: CheckCircle,
    title: "Standards Compliant",
    description: "All solutions meet international ESD standards including ANSI/ESD S20.20 and IEC 61340-5-1."
  },
  {
    icon: Wrench,
    title: "Turnkey Installation",
    description: "End-to-end installation services with proper grounding verification and documentation."
  }
];

const solutions = [
  "ESD Flooring Systems",
  "ESD Workbenches & Tables",
  "ESD Chairs & Seating",
  "Ionizers & Air Ionization Systems",
  "Wrist Straps & Heel Grounders",
  "ESD Mats & Floor Mats",
  "Grounding & Bonding Equipment",
  "ESD Monitors & Testers",
  "ESD Packaging Materials",
  "Personnel Grounding Systems"
];

const ESDLabSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="ESD Lab Solutions - Turnkey ESD Protection Systems"
        description="Complete ESD lab solutions: flooring, workstations, ionizers, grounding systems. ANSI/ESD S20.20 compliant turnkey installation in India."
        canonical="/products/esd-lab-solutions"
        keywords="ESD lab India, ESD flooring, ESD workbench, ionizer, grounding system, ESD protection"
      />
      <Header />
      
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink asChild><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage className="text-accent font-semibold">ESD Lab Solutions</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Custom Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ESD Lab Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Customized ESD Lab built as per your requirement. Complete electrostatic discharge protection systems for manufacturing, testing, and research facilities.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                Request Consultation
                <Zap className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our ESD Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Solutions List */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-8">Our ESD Solutions Include</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {solutions.map((solution, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-background rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{solution}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build Your ESD Lab?</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact us today for a free consultation. Our experts will help you design the perfect ESD protection system for your facility.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                Get Free Consultation
                <Zap className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ESDLabSolutions;
