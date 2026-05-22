import { Link } from "react-router-dom";
import { Download, Plus, Check, ArrowLeft, Sparkles, Zap, Gauge, Activity, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import productImage from "@/assets/products/jartul-jt6311a.png";

const PRODUCT_NAME = "Jartul JT6311A DC Electronic Load (150W/150V/30A)";
const DATASHEET = "/datasheets/jartul-jt6311a.pdf";

const specs: { label: string; value: string }[] = [
  { label: "Model", value: "JT6311A" },
  { label: "Brand", value: "Jartul" },
  { label: "Input Voltage", value: "0 – 150 V DC" },
  { label: "Input Current", value: "0 – 30 A" },
  { label: "Power Rating", value: "150 W" },
  { label: "Current Rise Time", value: "10 µS (full range)" },
  { label: "Sampling Rate", value: "500 KHz synchronized" },
  { label: "Operating Modes", value: "CC / CV / CR / CP" },
  { label: "Test Functions", value: "Dynamic, List, Battery, Short, Trigger" },
  { label: "Interface", value: "Front panel keypad, rotary encoder, OLED display" },
];

const applications = [
  { icon: Zap, title: "Switching Power Supplies", desc: "Validate regulation, transient response and efficiency under programmable loads." },
  { icon: Activity, title: "LED Drivers", desc: "Test constant-current LED power supplies across full operating envelope." },
  { icon: Cpu, title: "ATE Systems", desc: "Integrate into automated test stations for production-line characterization." },
  { icon: Gauge, title: "Fuses & Batteries", desc: "Run short-circuit, battery discharge and capacity tests with precision sampling." },
];

const JartulJT6311A = () => {
  const { toggleItem, isInCart } = useQuoteCart();
  const inCart = isInCart(PRODUCT_NAME);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT_NAME,
    model: "JT6311A",
    sku: "JT6311A",
    category: "DC Electronic Load",
    description:
      "150W / 30A / 150V programmable DC electronic load with 10µS full-range current rising time and 500KHz synchronized sampling. Ideal for switching power supplies, LED drivers, ATE, fuses and battery testing.",
    image: "https://uvtestsolutions.lovable.app/assets/jartul-jt6311a.png",
    brand: { "@type": "Brand", name: "Jartul" },
    releaseDate: "2026-05",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: "https://uvtestsolutions.lovable.app/products/jartul-jt6311a",
      seller: { "@type": "Organization", name: "UV Test Solutions" },
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://uvtestsolutions.lovable.app/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://uvtestsolutions.lovable.app/products" },
      { "@type": "ListItem", position: 3, name: "Jartul JT6311A", item: "https://uvtestsolutions.lovable.app/products/jartul-jt6311a" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Jartul JT6311A 150W DC Electronic Load | Buy in India"
        description="Jartul JT6311A programmable DC electronic load (150W/150V/30A) — 10µS rise time, 500KHz sampling. For SMPS, LED drivers, ATE & batteries."
        canonical="/products/jartul-jt6311a"
        type="product"
        keywords="Jartul JT6311A, DC electronic load 150W, programmable electronic load India, 150V 30A electronic load, SMPS tester, LED driver tester, ATE electronic load, battery discharge tester, buy Jartul India"
        jsonLd={[productJsonLd, breadcrumb]}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-accent/10 to-background pt-10 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-[4/3] bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wide">
                  <Sparkles className="h-3 w-3" /> New Launch
                </span>
                <img src={productImage} alt={PRODUCT_NAME} className="w-full h-full object-contain p-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Model JT6311A · Jartul</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Jartul JT6311A DC Electronic Load
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  150W / 30A / 150V programmable DC electronic load with <strong>10µS full-range current rising time</strong> and <strong>500KHz synchronized sampling</strong>. A precision tool for testing switching power supplies, LED drivers, ATE systems, fuses and batteries.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" onClick={() => toggleItem(PRODUCT_NAME)} variant={inCart ? "secondary" : "default"} className="gap-2">
                    {inCart ? <><Check className="h-4 w-4" /> Added to Quote</> : <><Plus className="h-4 w-4" /> Request Quote</>}
                  </Button>
                  <Button asChild size="lg" variant="outline" className="gap-2">
                    <a href={DATASHEET} download target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4" /> Download Datasheet
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Specifications</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {specs.map((s) => (
                <div key={s.label} className="flex justify-between gap-4 p-4 rounded-lg border border-border bg-card">
                  <span className="text-sm font-medium text-muted-foreground">{s.label}</span>
                  <span className="text-sm font-semibold text-right">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Typical Applications</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {applications.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-6 rounded-xl border border-border bg-card">
                  <div className="inline-flex p-2 rounded-lg bg-accent/10 text-accent mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to evaluate the JT6311A?</h2>
            <p className="text-muted-foreground mb-6">Get the full datasheet and a tailored quotation from our team.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" onClick={() => toggleItem(PRODUCT_NAME)} variant={inCart ? "secondary" : "default"} className="gap-2">
                {inCart ? <><Check className="h-4 w-4" /> Added to Quote</> : <><Plus className="h-4 w-4" /> Request Quote</>}
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a href={DATASHEET} download target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" /> Download Datasheet
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JartulJT6311A;
