import { Link } from "react-router-dom";
import { Download, Plus, Check, ArrowLeft, Sparkles, Gauge, Cpu, Cable, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import productImage from "@/assets/products/unit-uap1000a.jpg";

const PRODUCT_NAME = "UNI-T UAP1000A AC Power Source (1000VA Programmable AC Source)";
const DATASHEET = "/datasheets/unit-uap1000a-datasheet.pdf";

const specs = [
  { label: "Model", value: "UAP1000A" },
  { label: "Brand", value: "UNI-T" },
  { label: "Series", value: "UAP1000A Series AC Power Source" },
  { label: "Output Capacity", value: "1000 VA" },
  { label: "Voltage Range", value: "L: 150 V / H: 300 V" },
  { label: "Current Range", value: "L: 8.4 A / H: 4.2 A" },
  { label: "Resolution", value: "0.01 V / 0.001 A" },
  { label: "Connectivity", value: "RS-232C" },
  { label: "Enclosure Size", value: "3U rack height" },
  { label: "Warranty", value: "3 Years (Industrial)" },
];

const features = [
  {
    icon: Zap,
    title: "1000 VA Programmable AC Output",
    desc: "Single-phase 1 kVA AC power source with dual voltage ranges — 150 V low range and 300 V high range — for testing appliances, adapters, chargers and electronic assemblies.",
  },
  {
    icon: Gauge,
    title: "High Resolution Metering",
    desc: "0.01 V voltage and 0.001 A current resolution give precise programming and read-back of output parameters for repeatable production and lab measurements.",
  },
  {
    icon: Cpu,
    title: "Wide Current Capability",
    desc: "Delivers up to 8.4 A on the low voltage range and 4.2 A on the high voltage range, covering both 110 V and 230 V class mains simulation requirements.",
  },
  {
    icon: Cable,
    title: "RS-232C Remote Control",
    desc: "Built-in RS-232C interface allows the UAP1000A to be integrated into automated test equipment (ATE) racks and PC-based test sequences.",
  },
];

const applications = [
  "Mains voltage simulation for export product testing (110 V / 230 V regions)",
  "Switching power supply, adapter and charger performance testing",
  "Home appliance and consumer electronics safety & endurance testing",
  "Brown-out, over-voltage and voltage fluctuation immunity checks",
  "Motor, pump and lighting product qualification",
  "Automated test equipment (ATE) racks and R&D laboratories",
];

const UnitUAP1000A = () => {
  const { toggleItem, isInCart } = useQuoteCart();
  const inCart = isInCart(PRODUCT_NAME);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT_NAME,
    model: "UAP1000A",
    sku: "UNIT-UAP1000A",
    category: "AC Power Source / Programmable Power Supply",
    description:
      "UNI-T UAP1000A Series AC power source with 1000 VA output capacity, dual voltage ranges (150 V / 300 V), 8.4 A / 4.2 A current ranges, 0.01 V / 0.001 A resolution, RS-232C interface and compact 3U enclosure for mains simulation, appliance testing and ATE integration.",
    image: "https://www.uvtestsolutions.com/assets/unit-uap1000a.jpg",
    brand: { "@type": "Brand", name: "UNI-T" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: "https://www.uvtestsolutions.com/products/unit-uap1000a-ac-power-source",
      seller: { "@type": "Organization", name: "UV Test Solutions" },
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.uvtestsolutions.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.uvtestsolutions.com/products" },
      {
        "@type": "ListItem",
        position: 3,
        name: "UNI-T UAP1000A AC Power Source",
        item: "https://www.uvtestsolutions.com/products/unit-uap1000a-ac-power-source",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="UNI-T UAP1000A 1000VA AC Power Source — Supplier in India | UV Test Solutions"
        description="UNI-T UAP1000A Series programmable AC power source: 1000VA output, 150V/300V ranges, 8.4A/4.2A, 0.01V resolution, RS-232C, 3U. Datasheet download & quote in India."
        canonical="/products/unit-uap1000a-ac-power-source"
        type="product"
        keywords="UNI-T UAP1000A, UAP1000A AC power source, 1000VA AC power source, programmable AC power source India, AC power supply 300V, variable AC source 1kVA, mains simulation power source, RS-232C AC source, UNI-T AC power source dealer India, AC power source price India, appliance testing power source, UV Test Solutions"
        jsonLd={[productJsonLd, breadcrumb]}
      />
      <Header />
      <main>
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
                <img
                  src={productImage}
                  alt="UNI-T UAP1000A Series 1000VA programmable AC power source front panel"
                  className="w-full h-full object-contain p-6"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                  UNI-T · UAP1000A Series · 1000 VA AC Power Source
                </p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  UNI-T UAP1000A — 1000VA Programmable AC Power Source
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  The UAP1000A Series AC power source delivers a stable, adjustable single-phase AC output of{" "}
                  <strong>1000 VA</strong> with dual ranges of <strong>150 V and 300 V</strong> and currents up to{" "}
                  <strong>8.4 A</strong>. High 0.01 V / 0.001 A resolution and an RS-232C interface in a compact 3U
                  chassis make it ideal for mains voltage simulation, appliance and adapter testing, and automated test
                  systems.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    size="lg"
                    onClick={() => toggleItem(PRODUCT_NAME)}
                    variant={inCart ? "secondary" : "default"}
                    className="gap-2"
                    aria-label={`Add ${PRODUCT_NAME} to quote request`}
                  >
                    {inCart ? (
                      <><Check className="h-4 w-4" /> Added to Quote</>
                    ) : (
                      <><Plus className="h-4 w-4" /> Request Quote</>
                    )}
                  </Button>
                  <Button asChild size="lg" variant="outline" className="gap-2">
                    <a href={DATASHEET} download target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4" /> Datasheet
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose the UAP1000A Programmable AC Power Source
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map(({ icon: Icon, title, desc }) => (
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

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">
              UAP1000A Technical Specifications — 1000VA AC Power Source
            </h2>
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

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Applications of the UAP1000A AC Source</h2>
            <ul className="space-y-3">
              {applications.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-3">Get a Quote for the UNI-T UAP1000A in India</h2>
            <p className="text-muted-foreground mb-6">
              Add the UAP1000A AC power source to your quote cart or contact our team for pricing, higher power ratings
              in the UAP series, installation and calibration support anywhere in India.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                size="lg"
                onClick={() => toggleItem(PRODUCT_NAME)}
                variant={inCart ? "secondary" : "default"}
                className="gap-2"
                aria-label={`Add ${PRODUCT_NAME} to quote request`}
              >
                {inCart ? (
                  <><Check className="h-4 w-4" /> Added to Quote</>
                ) : (
                  <><Plus className="h-4 w-4" /> Request Quote</>
                )}
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UnitUAP1000A;
