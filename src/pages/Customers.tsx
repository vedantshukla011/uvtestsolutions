import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight, Building2, GraduationCap, Factory, Cpu } from "lucide-react";

// Import customer logos
import heroMotocorp from "@/assets/customers/hero-motocorp.png";
import orientElectric from "@/assets/customers/orient-electric.png";
import motherson from "@/assets/customers/motherson.png";
import eveready from "@/assets/customers/eveready.png";
import amber from "@/assets/customers/amber.png";
import amityUniversity from "@/assets/customers/amity-university.png";
import bennettUniversity from "@/assets/customers/bennett-university.png";
import lg from "@/assets/customers/lg.png";
import akgec from "@/assets/customers/akgec.png";
import kiet from "@/assets/customers/kiet.png";

interface Customer {
  name: string;
  logo?: string;
  category: "corporate" | "education" | "manufacturing" | "technology";
}

const customers: Customer[] = [
  // With logos
  { name: "Hero MotoCorp Limited", logo: heroMotocorp, category: "manufacturing" },
  { name: "Orient Electric", logo: orientElectric, category: "manufacturing" },
  { name: "Motherson Group", logo: motherson, category: "manufacturing" },
  { name: "Eveready Industries Limited", logo: eveready, category: "manufacturing" },
  { name: "Amber Enterprises India Limited", logo: amber, category: "manufacturing" },
  { name: "LG Soft India Pvt Ltd", logo: lg, category: "technology" },
  { name: "Bennett University", logo: bennettUniversity, category: "education" },
  { name: "Amity University", logo: amityUniversity, category: "education" },
  { name: "AKGEC Ghaziabad", logo: akgec, category: "education" },
  { name: "KIET Ghaziabad", logo: kiet, category: "education" },
];

// Additional customers without logos (text only)
const additionalCustomers = [
  { name: "Statcon Electronics India Limited", category: "technology" },
  { name: "Indo Wings Private Limited", category: "manufacturing" },
  { name: "Electrinno Topology", category: "technology" },
  { name: "Hero Motors", category: "manufacturing" },
  { name: "HIVE Electronics", category: "technology" },
  { name: "Vistar Technovation", category: "technology" },
  { name: "C&S Electric", category: "manufacturing" },
  { name: "ILJIN Electronics India Pvt Ltd", category: "manufacturing" },
  { name: "IIMT University", category: "education" },
  { name: "Begapt Tech Solutions Pvt Ltd", category: "technology" },
  { name: "HYM Drive Systems Pvt Ltd", category: "manufacturing" },
  { name: "Euronics", category: "technology" },
  { name: "Livguard", category: "manufacturing" },
  { name: "V-Guard", category: "manufacturing" },
  { name: "ElectroWynk", category: "technology" },
  { name: "Amar Ujala", category: "corporate" },
  { name: "Uttaranchal University", category: "education" },
  { name: "ABESEC Ghaziabad", category: "education" },
  { name: "IIMT College of Engineering Greater Noida", category: "education" },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "corporate":
      return <Building2 className="w-5 h-5" />;
    case "education":
      return <GraduationCap className="w-5 h-5" />;
    case "manufacturing":
      return <Factory className="w-5 h-5" />;
    case "technology":
      return <Cpu className="w-5 h-5" />;
    default:
      return <Building2 className="w-5 h-5" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "corporate":
      return "bg-blue-500/10 text-blue-500";
    case "education":
      return "bg-emerald-500/10 text-emerald-500";
    case "manufacturing":
      return "bg-orange-500/10 text-orange-500";
    case "technology":
      return "bg-purple-500/10 text-purple-500";
    default:
      return "bg-accent/10 text-accent";
  }
};

const Customers = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Our Customers - UV Test Solutions"
        description="Trusted by Hero MotoCorp, LG, Orient Electric, Amity University, and 25+ leading organizations. See why industry leaders choose UV Test Solutions for precision instruments."
        canonical="/customers"
        keywords="UV Test Solutions customers, test equipment clients, electronic instruments buyers India"
      />
      <Header />

      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-card border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Our Customers</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-card to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are proud to serve some of India's most renowned corporations, educational institutions, 
              and manufacturing giants with precision electronic measuring instruments.
            </p>
          </div>
        </section>

        {/* Logo Collage Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Featured Customers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {customers.map((customer, index) => (
                <div
                  key={index}
                  className="group relative bg-card border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 flex flex-col items-center justify-center aspect-square"
                >
                  {customer.logo && (
                    <img
                      src={customer.logo}
                      alt={customer.name}
                      className="max-w-full max-h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  )}
                  <p className="mt-3 text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors">
                    {customer.name}
                  </p>
                  <div className={`absolute top-2 right-2 p-1.5 rounded-full ${getCategoryColor(customer.category)}`}>
                    {getCategoryIcon(customer.category)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Customers List */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              All Our Valued Customers
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              From Fortune 500 companies to leading educational institutions, we're honored to support 
              organizations across diverse industries.
            </p>

            {/* Category Legend */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-full ${getCategoryColor("manufacturing")}`}>
                  <Factory className="w-4 h-4" />
                </div>
                <span className="text-sm text-muted-foreground">Manufacturing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-full ${getCategoryColor("technology")}`}>
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="text-sm text-muted-foreground">Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-full ${getCategoryColor("education")}`}>
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-sm text-muted-foreground">Education</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-full ${getCategoryColor("corporate")}`}>
                  <Building2 className="w-4 h-4" />
                </div>
                <span className="text-sm text-muted-foreground">Corporate</span>
              </div>
            </div>

            {/* Customer Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...customers, ...additionalCustomers].map((customer, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:border-accent/30 transition-colors"
                >
                  <div className={`p-2 rounded-lg ${getCategoryColor(customer.category)}`}>
                    {getCategoryIcon(customer.category)}
                  </div>
                  <span className="text-sm font-medium">{customer.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <p className="text-sm text-muted-foreground">Corporate Clients</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-sm text-muted-foreground">Universities</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <p className="text-sm text-muted-foreground">States Covered</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Growing List of Satisfied Customers
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the quality and reliability that leading organizations trust. 
              Contact us today for your measurement instrument needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Customers;
