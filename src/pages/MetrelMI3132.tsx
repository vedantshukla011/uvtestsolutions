import { Link } from "react-router-dom";
import { Download, Plus, Check, ArrowLeft, Sparkles, Car, ShieldCheck, Gauge, Battery } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import productImage from "@/assets/products/metrel-mi3132-evtester.jpg";

const PRODUCT_NAME = "Metrel MI 3132 EV Tester (Electric Vehicle Insulation Tester)";
const DATASHEET = "/datasheets/metrel-mi3132-evtester.pdf";

const specs = [
  { label: "Model", value: "MI 3132 EV Tester" },
  { label: "Brand", value: "Metrel" },
  { label: "Insulation Voltage", value: "50 V – 1500 V DC" },
  { label: "Insulation Range", value: "Up to 3 GΩ" },
  { label: "Micro Ohm (4-wire)", value: "2 A DC test current" },
  { label: "Low Ohm Current", value: "7 mA & 200 mA DC" },
  { label: "Voltage Measurement", value: "TRMS AC/DC up to 1000 V" },
  { label: "Display", value: "4.3″ colour LCD with touchscreen" },
  { label: "Overvoltage Category", value: "1000 V CAT III" },
  { label: "Standards", value: "UN ECE R100, ISO 6469-3, EN 61557, EN 61010" },
  { label: "Connectivity", value: "Built-in Bluetooth, USB" },
  { label: "Power", value: "Rechargeable Li-Ion battery + built-in charger" },
];

const applications = [
  { icon: Car, title: "EV High-Voltage Cables", desc: "Insulation and resistance test of EV traction and Mode 3 charging cables." },
  { icon: Battery, title: "Battery Pack & REESS", desc: "Insulation checks per UN ECE R100 using the instrument's own DC source." },
  { icon: ShieldCheck, title: "Chassis Bonding", desc: "4-wire 2 A micro-ohm bonding verification on EV chassis and components." },
  { icon: Gauge, title: "After-Crash & PTI", desc: "Post-accident safety checks and Periodic Technical Inspection of EVs." },
];

const MetrelMI3132 = () => {
  const { toggleItem, isInCart } = useQuoteCart();
  const inCart = isInCart(PRODUCT_NAME);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT_NAME,
    model: "MI 3132",
    sku: "MI3132",
    category: "Electric Vehicle Insulation Tester",
    description:
      "Metrel MI 3132 EV Tester — portable electric vehicle insulation and bonding tester. Insulation 50 V to 1500 V, 4-wire 2 A micro-ohm, 4.3″ touchscreen. Compliant with UN ECE R100, ISO 6469-3, EN 61557.",
    image: "https://www.uvtestsolutions.com/assets/metrel-mi3132-evtester.jpg",
    brand: { "@type": "Brand", name: "Metrel" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: "https://www.uvtestsolutions.com/products/metrel-mi3132-evtester",
      seller: { "@type": "Organization", name: "UV Test Solutions" },
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.uvtestsolutions.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.uvtestsolutions.com/products" },
      { "@type": "ListItem", position: 3, name: "Metrel MI 3132 EV Tester", item: "https://www.uvtestsolutions.com/products/metrel-mi3132-evtester" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Metrel MI 3132 EV Tester | EV Insulation Tester India"
        description="Metrel MI 3132 EV Tester — portable EV insulation & bonding tester. 50–1500 V insulation, 4-wire 2 A micro-ohm, UN ECE R100 & ISO 6469-3 compliant. Buy in India."
        canonical="/products/metrel-mi3132-evtester"
        type="product"
        keywords="Metrel MI 3132, EV tester, electric vehicle insulation tester, UN ECE R100, ISO 6469-3, EV battery insulation tester, 1500V insulation tester, micro ohm tester 2A, EV bonding tester, EV workshop equipment India, buy Metrel India"
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
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Metrel · MI 3132 EV Tester</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Metrel MI 3132 EV Tester
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Portable, battery-powered <strong>electric vehicle insulation tester</strong> designed for the latest <strong>UN ECE R100 Annex 4A/4B</strong> and <strong>ISO 6469-3</strong> standards. Insulation up to <strong>1500 V</strong>, <strong>4-wire Micro Ohm at 2 A DC</strong> and a 4.3″ colour touchscreen for field-grade EV safety testing.
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
            <h2 className="text-3xl font-bold mb-3">Ready to evaluate the MI 3132 EV Tester?</h2>
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

export default MetrelMI3132;
