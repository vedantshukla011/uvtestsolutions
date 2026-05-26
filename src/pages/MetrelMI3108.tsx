import { Link } from "react-router-dom";
import { Download, Plus, Check, ArrowLeft, Sparkles, Sun, Zap, ShieldCheck, Activity } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import productImage from "@/assets/products/metrel-mi3108-eurotestpv.jpg";

const PRODUCT_NAME = "Metrel MI 3108 EurotestPV Photovoltaic & Installation Tester";
const DATASHEET = "/datasheets/metrel-mi3108-eurotestpv.pdf";

const specs = [
  { label: "Model", value: "MI 3108 EurotestPV" },
  { label: "Brand", value: "Metrel" },
  { label: "PV Voltage Range", value: "0 – 999 V DC / AC" },
  { label: "PV Current Range", value: "Up to 300 A (panel), 15 A DC (I-V)" },
  { label: "I-V Curve Capacity", value: "1000 V / 15 A / 15 kW" },
  { label: "Irradiation", value: "0 – 1.75 kW/m²" },
  { label: "Insulation Test", value: "50 V / 100 V / 250 V / 500 V / 1 kV DC, up to 999 MΩ" },
  { label: "RCD Testing", value: "Type AC, A and B (10 mA – 1 A)" },
  { label: "Earth Resistance", value: "0 – 9999 Ω (3-wire)" },
  { label: "Standards", value: "EN 61557, EN 62446, EN 61829, EN 61010" },
  { label: "Overvoltage Category", value: "CAT II / 1000 V; CAT III / 600 V; CAT IV / 300 V" },
  { label: "Memory", value: "1800 results / 500 graphical with timestamp" },
];

const applications = [
  { icon: Sun, title: "Photovoltaic Installations", desc: "Complete commissioning and periodic testing of single-phase PV plants per EN 62446." },
  { icon: Activity, title: "I-V Curve Tracing", desc: "Graphical I-V characterization of PV modules and strings up to 1000 V / 15 A." },
  { icon: Zap, title: "Electrical Installations", desc: "Insulation, continuity, loop/line impedance, RCD, earth resistance per EN 61557." },
  { icon: ShieldCheck, title: "Power & Energy Audits", desc: "Simultaneous AC & DC power, efficiency and up to 11th harmonic analysis." },
];

const MetrelMI3108 = () => {
  const { toggleItem, isInCart } = useQuoteCart();
  const inCart = isInCart(PRODUCT_NAME);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT_NAME,
    model: "MI 3108 EurotestPV",
    sku: "MI3108",
    category: "Photovoltaic & Installation Tester",
    description:
      "Metrel MI 3108 EurotestPV — combined photovoltaic and electrical installation safety tester. Supports EN 61557, EN 62446 and EN 61829 with I-V curve tracing up to 1000 V / 15 A, RCD type AC/A/B, insulation, loop, line and earth resistance testing.",
    image: "https://www.uvtestsolutions.com/assets/metrel-mi3108-eurotestpv.jpg",
    brand: { "@type": "Brand", name: "Metrel" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: "https://www.uvtestsolutions.com/products/metrel-mi3108-eurotestpv",
      seller: { "@type": "Organization", name: "UV Test Solutions" },
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.uvtestsolutions.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.uvtestsolutions.com/products" },
      { "@type": "ListItem", position: 3, name: "Metrel MI 3108 EurotestPV", item: "https://www.uvtestsolutions.com/products/metrel-mi3108-eurotestpv" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Metrel MI 3108 EurotestPV | PV & Installation Tester India"
        description="Metrel MI 3108 EurotestPV — photovoltaic and electrical installation safety tester. I-V curve to 1000 V/15 A, RCD AC/A/B, insulation, loop, earth — EN 61557 / 62446 / 61829."
        canonical="/products/metrel-mi3108-eurotestpv"
        type="product"
        keywords="Metrel MI 3108, EurotestPV, photovoltaic tester India, PV installation tester, I-V curve tracer, EN 62446 tester, EN 61557 installation tester, solar PV commissioning tester, RCD type B tester, insulation resistance tester 1kV, buy Metrel India"
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
                <img src={productImage} alt={PRODUCT_NAME} className="w-full h-full object-contain p-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Metrel · MI 3108 EurotestPV</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Metrel MI 3108 EurotestPV
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Combined <strong>photovoltaic</strong> and <strong>electrical installation</strong> safety tester. Complete EN 61557 installation testing plus EN 62446 PV tests, <strong>I-V curve tracing</strong>, STC calculation per EN 61829 and DC/AC inverter power measurements up to <strong>1000 V / 15 A DC</strong>.
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

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to evaluate the MI 3108 EurotestPV?</h2>
            <p className="text-muted-foreground mb-6">Download the datasheet or request a tailored quotation from our team.</p>
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

export default MetrelMI3108;
