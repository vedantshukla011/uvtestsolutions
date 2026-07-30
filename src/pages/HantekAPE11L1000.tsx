import { Link } from "react-router-dom";
import { Download, Plus, Check, ArrowLeft, Sparkles, Zap, ShieldCheck, Activity, Gauge } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import productImage from "@/assets/products/hantek-ape11l1000.jpg";

const PRODUCT_NAME = "Hantek APE11L1000 AC Power Source (1KVA, 110V/220V)";
const DATASHEET = "/datasheets/hantek-ape11l1000.pdf";

const specs = [
  { label: "Model", value: "APE11L1000" },
  { label: "Brand", value: "Hantek" },
  { label: "Output Power", value: "1 KVA" },
  { label: "Rated Voltage", value: "110 V / 220 V" },
  { label: "Rated Current", value: "9.1 A (Low) / 4.5 A (High)" },
  { label: "Output Voltage", value: "Low 0–150.0 V, High 150.0–300.0 V, High lock 0–300.0 V" },
  { label: "Voltage Setting Accuracy", value: "≤0.05%, resolution 0.1 V" },
  { label: "Output Frequency", value: "45–65 Hz, 100 / 120 / 200 / 240 Hz" },
  { label: "Frequency Accuracy", value: "≤0.05% (stability ≤0.05%)" },
  { label: "Output Mode", value: "Single-phase standard sinusoidal output" },
  { label: "Wiring Mode", value: "Input single-phase two-wire; Output single-phase two-wire + PE" },
  { label: "Isolation", value: "Built-in isolation transformer" },
  { label: "Voltage Distortion", value: "<1.5% (linear load)" },
  { label: "Reaction Time", value: "≤2 ms (voltage mutation response ≤20 ms)" },
  { label: "Peak Factor", value: "1.41 ± 0.1" },
  { label: "Source / Load Effect", value: "≤1% / ≤1%" },
  { label: "Display", value: "4.3-inch colour high-brightness LCD" },
  { label: "Protection", value: "Over-temperature, over-current, over-voltage, over-power" },
  { label: "Warranty", value: "1 Year" },
];

const features = [
  { icon: Gauge, title: "1KVA Programmable AC Output", desc: "Single-phase sinusoidal output with 110V/220V rated voltage, 0–300 V range and 45–65 Hz plus fixed 100/120/200/240 Hz frequencies for global mains simulation." },
  { icon: Activity, title: "4.3-inch Colour LCD Metering", desc: "Simultaneously shows voltage, current, frequency, power, power factor, internal temperature, apparent power and reactive power — with waveform display and up to 30 days of recording." },
  { icon: Zap, title: "Fast Dynamic Response", desc: "Reaction time ≤2 ms and voltage mutation response under 20 ms, with pure low-distortion output (<1.5% on linear loads)." },
  { icon: ShieldCheck, title: "Full Protection & Monitoring", desc: "Built-in isolation transformer plus over-temperature, over-current, over-voltage and over-power protection with real-time intelligent monitoring and alarms." },
];

const HantekAPE11L1000 = () => {
  const { toggleItem, isInCart } = useQuoteCart();
  const inCart = isInCart(PRODUCT_NAME);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT_NAME,
    model: "APE11L1000",
    sku: "HANTEK-APE11L1000",
    category: "AC Power Source",
    description:
      "Hantek APE11L1000 programmable AC power source — 1KVA output, 110V/220V rated voltage, 9.1A/4.5A rated current, 0–300 V adjustable output, 45–65 Hz plus 100/120/200/240 Hz, built-in isolation transformer, 4.3-inch colour LCD with waveform recording and full over-voltage/current/temperature protection.",
    image: "https://www.uvtestsolutions.com/assets/hantek-ape11l1000.jpg",
    brand: { "@type": "Brand", name: "Hantek" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: "https://www.uvtestsolutions.com/products/hantek-ape11l1000-ac-power-source",
      seller: { "@type": "Organization", name: "UV Test Solutions" },
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.uvtestsolutions.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.uvtestsolutions.com/products" },
      { "@type": "ListItem", position: 3, name: "Hantek APE11L1000 AC Power Source", item: "https://www.uvtestsolutions.com/products/hantek-ape11l1000-ac-power-source" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Hantek APE11L1000 1KVA AC Power Source | UV Test Solutions"
        description="Hantek APE11L1000 programmable AC power source: 1KVA, 110V/220V, 0–300V output, 45–65Hz, isolation transformer, 4.3-inch LCD. Request a quote in India."
        canonical="/products/hantek-ape11l1000-ac-power-source"
        type="product"
        keywords="Hantek APE11L1000, AC power source 1KVA, programmable AC power source India, variable AC power supply, AC power source price India, 110V 220V AC source, single phase AC power source, frequency converter power source, Hantek AC power supply dealer India, mains simulation power source, isolation transformer AC source, AC power source for testing, laboratory AC power source, 1KVA AC source, buy AC power source online India"
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
                <img src={productImage} alt={`${PRODUCT_NAME} - programmable AC power source`} className="w-full h-full object-contain p-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Hantek · Model APE11L1000 · AC Power Source</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Hantek APE11L1000 — 1KVA Programmable AC Power Source
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Single-phase <strong>1KVA AC power source</strong> with 110 V / 220 V rated voltage, 9.1 A / 4.5 A rated current and 0–300 V adjustable output. Built-in isolation transformer, 4.3-inch colour LCD with waveform recording and country-wise mains voltage simulation for product qualification, EMC pre-compliance and production testing.
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
                  <Button asChild size="lg" variant="outline" className="gap-2">
                    <Link to="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose the Hantek APE11L1000 AC Power Source</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">APE11L1000 Technical Specifications</h2>
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-3">Request a Quote for the Hantek APE11L1000 in India</h2>
            <p className="text-muted-foreground mb-6">
              Add the APE11L1000 1KVA AC power source to your quote cart or talk to our team for configuration guidance, higher power ratings and delivery across India.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" onClick={() => toggleItem(PRODUCT_NAME)} variant={inCart ? "secondary" : "default"} className="gap-2">
                {inCart ? <><Check className="h-4 w-4" /> Added to Quote</> : <><Plus className="h-4 w-4" /> Request Quote</>}
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

export default HantekAPE11L1000;
