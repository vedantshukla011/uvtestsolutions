import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, ShieldCheck, Building2, IndianRupee, Globe } from "lucide-react";
import gemLogo from "@/assets/gem-logo.png";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Transparent Procurement",
    description: "All transactions are fully transparent with complete audit trails, ensuring fair and competitive pricing.",
  },
  {
    icon: Building2,
    title: "Government Trusted",
    description: "GeM is mandated for procurement by Central and State Government Ministries, Departments, and PSUs.",
  },
  {
    icon: IndianRupee,
    title: "Competitive Pricing",
    description: "Direct procurement eliminates middlemen, ensuring the best value for government buyers.",
  },
  {
    icon: Globe,
    title: "Pan-India Reach",
    description: "Access to government buyers across all states and union territories of India through a single platform.",
  },
];

const ProductsAtGeM = () => {
  return (
    <>
      <SEO
        title="Products on GeM | UV Test Solutions - Registered GeM Supplier"
        description="UV Test Solutions is a registered supplier on Government e-Marketplace (GeM). Browse our range of precision electronic instruments available for government procurement."
        keywords="GeM supplier, Government e-Marketplace, electronic instruments GeM, UV Test Solutions GeM, government procurement"
      />
      <Header />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <Badge variant="secondary" className="mb-4 text-sm">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Registered GeM Supplier
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Products on{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    GeM Portal
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                  UV Test Solutions is a proud registered supplier on the Government e-Marketplace (GeM).
                  Our range of precision electronic measuring instruments is available for seamless
                  procurement by government organisations across India.
                </p>
                <a
                  href="https://gem.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" size="lg" className="gap-2">
                    Visit GeM Portal <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={gemLogo}
                  alt="Government e-Marketplace (GeM) Logo"
                  className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About GeM */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
                What is GeM?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  <strong className="text-foreground">Government e-Marketplace (GeM)</strong> is a unified
                  digital platform established by the Government of India for end-to-end procurement of
                  products and services by Central and State Government Ministries, Departments,
                  Public Sector Undertakings (PSUs), autonomous bodies, local bodies, and Panchayati Raj
                  Institutions.
                </p>
                <p>
                  Launched in 2016, GeM has transformed government procurement by providing a transparent,
                  efficient, and inclusive marketplace. It eliminates the need for manual tendering processes
                  and enables direct purchasing with complete price transparency and competitive bidding.
                </p>
                <p>
                  GeM is mandated by the Government of India for procurement of common-use goods and services.
                  It offers tools like e-bidding, reverse auction, and demand aggregation, making procurement
                  faster, more efficient, and cost-effective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
              Why Buy from Us on GeM?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Procure on GeM?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Search for "UV Test Solutions" on the GeM portal to browse our complete catalog of
              electronic measuring instruments available for government procurement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="gap-2">
                  Go to GeM Portal <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
              <a href="/contact">
                <Button variant="hero-outline" size="lg">
                  Contact Us for Assistance
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductsAtGeM;
