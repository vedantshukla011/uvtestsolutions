import { Link } from "react-router-dom";
import { Download, Plus, Check, ArrowLeft, Sparkles, Gauge, Cpu, Cable, MonitorSmartphone, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import productImage from "@/assets/products/unit-utr2830e.jpg";

const PRODUCT_NAME = "UNI-T UTR2830E LCR Meter (100 kHz Digital LCR Bridge)";
const PRICE_DISPLAY = "₹66,499 (incl. taxes)";
const DATASHEET = "/datasheets/unit-utr2830e-datasheet.pdf";
const MANUAL = "/datasheets/unit-utr2830e-user-manual.pdf";

const specs = [
  { label: "Model", value: "UTR2830E" },
  { label: "Brand", value: "UNI-T" },
  { label: "Max Test Frequency", value: "100 kHz" },
  { label: "Basic Accuracy", value: "LCRZ 0.05%, DCR 0.1%" },
  { label: "Display Count", value: "6-bit" },
  { label: "Max Test Rate", value: "80 rdgs/s" },
  { label: "DC Resistance (DCR)", value: "Yes" },
  { label: "Connectivity", value: "RS232, HANDLER, USB HOST, USB DEVICE, LAN" },
  { label: "Display", value: "4.3\" TFT LCD" },
  { label: "Primary Parameters", value: "|Z|, |Y|, L, C, R, G, DCR" },
  { label: "Secondary Parameters", value: "D, Q, Rs (ESR), Rp (EPR), Rd, X, B, Θ" },
  { label: "Warranty", value: "3 Years" },
];

const features = [
  {
    icon: Gauge,
    title: "100 kHz Test Frequency",
    desc: "Wide frequency coverage up to 100 kHz with 0.05% LCRZ basic accuracy for precise inductor, capacitor and resistor characterisation.",
  },
  {
    icon: Cpu,
    title: "Fast, Stable Measurements",
    desc: "Up to 80 readings/second with 6-bit resolution and excellent test stability — ideal for production line quality assurance and incoming inspection.",
  },
  {
    icon: Cable,
    title: "Full Automation Interfaces",
    desc: "RS232, HANDLER, LAN, USB Host and USB Device interfaces make the UTR2830E ready for ATE racks and automated component sorting.",
  },
  {
    icon: MonitorSmartphone,
    title: "4.3\" TFT LCD Dual Readout",
    desc: "Primary and secondary parameters shown simultaneously in large characters on a bright 4.3-inch colour TFT display.",
  },
];

const UnitUTR2830E = () => {
  const { toggleItem, isInCart } = useQuoteCart();
  const inCart = isInCart(PRODUCT_NAME);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT_NAME,
    model: "UTR2830E",
    sku: "UNIT-UTR2830E",
    category: "LCR Meter / Component Testing",
    description:
      "UNI-T UTR2830E digital LCR meter with 100 kHz maximum test frequency, 0.05% LCRZ accuracy, 0.1% DCR accuracy, 6-bit display count, 80 rdgs/s test rate, 4.3-inch TFT LCD and RS232 / HANDLER / LAN / USB connectivity for production QA, incoming inspection and automated testing.",
    image: "https://www.uvtestsolutions.com/assets/unit-utr2830e.jpg",
    brand: { "@type": "Brand", name: "UNI-T" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      price: "66499",
      url: "https://www.uvtestsolutions.com/products/unit-utr2830e-lcr-meter",
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
        name: "UNI-T UTR2830E LCR Meter",
        item: "https://www.uvtestsolutions.com/products/unit-utr2830e-lcr-meter",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="UNI-T UTR2830E LCR Meter Price India | ₹66,499 incl. Tax"
        description="UTR2830E / UTR2830 100 kHz digital LCR meter with 0.05% accuracy and LAN, USB and HANDLER. ₹66,499 incl. taxes. Download the datasheet and manual or request a UNI-T quote in India."
        canonical="/products/unit-utr2830e-lcr-meter"
        type="product"
        keywords="UNI-T UTR2830E, UTR2830E LCR meter price India, 100 kHz LCR meter, digital LCR bridge, LCR meter 0.05% accuracy, UNI-T LCR meter dealer India, component testing LCR meter, impedance analyser, inductance capacitance resistance meter, ESR meter, DCR measurement, HANDLER interface LCR meter, production line LCR tester, UTR2830 series, buy LCR meter online India, UV Test Solutions"
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
                  alt="UNI-T UTR2830E 100 kHz digital LCR meter front panel with 4.3-inch TFT display"
                  className="w-full h-full object-contain p-6"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                  UNI-T · UTR2830 Series · Model UTR2830E · 100 kHz LCR Meter
                </p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  UNI-T UTR2830E — 100 kHz Digital LCR Meter for Precision Component Testing
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  The UTR2830 series LCR digital bridge is a new generation low-frequency component measuring instrument —
                  compact, easy to operate and highly stable. With <strong>100 kHz maximum test frequency</strong>,{" "}
                  <strong>0.05% LCRZ accuracy</strong> and <strong>80 readings/second</strong>, it meets the needs of
                  production line quality assurance, incoming inspection and automated production.
                </p>
                <div className="inline-flex items-baseline gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary mb-6">
                  <span className="text-2xl font-bold">{PRICE_DISPLAY}</span>
                  <span className="text-sm text-muted-foreground">(GST included)</span>
                </div>
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
                  <Button asChild size="lg" variant="outline" className="gap-2">
                    <a href={MANUAL} download target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4" /> User Manual
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
              Why the UNI-T UTR2830E is a Preferred 100 kHz LCR Meter in India
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
              UTR2830E Technical Specifications — 100 kHz LCR Digital Bridge
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {specs.map((s) => (
                <div key={s.label} className="flex justify-between gap-4 p-4 rounded-lg border border-border bg-card">
                  <span className="text-sm font-medium text-muted-foreground">{s.label}</span>
                  <span className="text-sm font-semibold text-right">{s.value}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              Measurement results display the primary parameter on the upper line and the secondary parameter on the
              lower line in large characters for quick shop-floor reading.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-3">Buy the UNI-T UTR2830E LCR Meter in India</h2>
            <p className="text-muted-foreground mb-6">
              Price <strong>{PRICE_DISPLAY}</strong>. Add it to your quote cart or contact our team for bulk pricing,
              test fixtures, calibration and delivery anywhere in India. Genuine UNI-T product with 3-year warranty.
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

export default UnitUTR2830E;
