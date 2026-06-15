import { Link } from "react-router-dom";
import { Download, Plus, Check, ArrowLeft, Sparkles, Zap, ShieldCheck, Activity, Thermometer } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import productImage from "@/assets/products/weller-we1010.png";

const PRODUCT_NAME = "Weller WE 1010 70W Digital Soldering Station (WEP 70 + PH 70)";
const PRICE_DISPLAY = "₹15,500 + GST";

const specs = [
  { label: "Model", value: "WE 1010 (WE Line)" },
  { label: "Brand", value: "Weller" },
  { label: "Configuration", value: "1-channel station with WEP 70 iron + PH 70 safety rest" },
  { label: "Power", value: "70 W" },
  { label: "Supply Voltage", value: "230 V AC" },
  { label: "Temperature Range", value: "100 °C – 450 °C (tool dependent)" },
  { label: "Display", value: "Digital LC Display" },
  { label: "Soldering Tips", value: "Weller ET series" },
  { label: "ESD Safety", value: "ESD safe station & iron" },
  { label: "Cable", value: "Heat-resistant silicon, industry mechanical strength" },
  { label: "Energy Saving", value: "Standby mode + auto setback" },
  { label: "Security", value: "Password-protected settings" },
  { label: "Tip Change", value: "Toolless tip change" },
  { label: "Certification", value: "UL & CE certified" },
];

const features = [
  { icon: Zap, title: "40% More Power", desc: "Delivers 40% more power than the legacy WES / WESD stations — the most powerful station in its class." },
  { icon: Thermometer, title: "Precise Temperature Control", desc: "Digital LC display with 100 – 450 °C range, standby mode and auto setback to protect equipment and tips." },
  { icon: ShieldCheck, title: "ESD Safe & Certified", desc: "ESD safe station and iron with heat-resistant silicon cable. UL and CE certified for electrical safety." },
  { icon: Activity, title: "Production Ready", desc: "Ergonomic WEP 70 iron with toolless tip change using Weller ET tips. Password protection preserves shop-floor settings." },
];

const WellerWE1010 = () => {
  const { toggleItem, isInCart } = useQuoteCart();
  const inCart = isInCart(PRODUCT_NAME);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT_NAME,
    model: "WE 1010",
    sku: "WELLER-WE1010",
    category: "Soldering Station",
    description:
      "Weller WE 1010 — 70W 1-channel digital soldering station with WEP 70 iron and PH 70 safety rest. Most powerful station in its class with 40% more power than WES/WESD, digital LCD, 100–450°C range, ESD safe, UL and CE certified. Uses Weller ET soldering tips.",
    image: "https://www.uvtestsolutions.com/assets/weller-we1010.png",
    brand: { "@type": "Brand", name: "Weller" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      price: "15500",
      url: "https://www.uvtestsolutions.com/products/weller-we1010",
      seller: { "@type": "Organization", name: "UV Test Solutions" },
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.uvtestsolutions.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.uvtestsolutions.com/products" },
      { "@type": "ListItem", position: 3, name: "Weller WE 1010", item: "https://www.uvtestsolutions.com/products/weller-we1010" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Weller WE 1010 70W Digital Soldering Station (WEP 70 + PH 70) | UV Test Solutions"
        description="Buy Weller WE 1010 70W digital soldering station with WEP 70 iron & PH 70 rest at ₹15,500 + GST. ESD safe, 100–450°C, UL/CE certified. Authorised India dealer."
        canonical="/products/weller-we1010"
        type="product"
        keywords="Weller WE 1010, Weller WE1010 price India, WEP 70 soldering iron, PH 70 safety rest, 70W digital soldering station, ESD safe soldering station, Weller ET tips, Weller India dealer, UV Test Solutions Weller"
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
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Weller · WE Line · WE 1010</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Weller WE 1010 — 70W Digital Soldering Station
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  1-channel soldering station with <strong>WEP 70 iron</strong> and <strong>PH 70 safety rest</strong>. The most powerful station in its class — <strong>40% more power</strong> than WES / WESD with a low total cost of ownership.
                </p>
                <div className="inline-flex items-baseline gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary mb-6">
                  <span className="text-2xl font-bold">{PRICE_DISPLAY}</span>
                  <span className="text-sm text-muted-foreground">(MRP, taxes extra)</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" onClick={() => toggleItem(PRODUCT_NAME)} variant={inCart ? "secondary" : "default"} className="gap-2">
                    {inCart ? <><Check className="h-4 w-4" /> Added to Quote</> : <><Plus className="h-4 w-4" /> Request Quote</>}
                  </Button>
                  <Button asChild size="lg" variant="outline" className="gap-2">
                    <Link to="/contact">Contact for Purchase</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Why the Weller WE 1010</h2>
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

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-3">Order the Weller WE 1010 from UV Test Solutions</h2>
            <p className="text-muted-foreground mb-6">
              Available at <strong>{PRICE_DISPLAY}</strong>. Add to your quote cart or contact our team for bulk pricing, ET tip selection and shipping across India.
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

export default WellerWE1010;
