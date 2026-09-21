import { Link } from "react-router-dom";
import { Plus, Check, ArrowLeft, Sparkles, Zap, ShieldCheck, Activity, Thermometer } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import productImage from "@/assets/products/weller-wt1012.jpg";

const PRODUCT_NAME = "Weller WT 1012 Soldering Station Set 95W with WSP 80 Soldering Iron";
const PRICE_DISPLAY = "₹32,495 + GST";

const specs = [
  { label: "Model", value: "WT 1012 (WT Line)" },
  { label: "Brand", value: "Weller" },
  { label: "Article Number", value: "T0053440699N" },
  { label: "Set Contents", value: "Power unit WT 1 (1 channel) + WSP 80 iron + WSR 201 safety rest" },
  { label: "Station Power", value: "95 W" },
  { label: "Soldering Iron", value: "WSP 80, 80 W with Silver-Line tips" },
  { label: "Tip Family", value: "LT series" },
  { label: "Channels", value: "1" },
  { label: "Supply Voltage", value: "230 V, 50/60 Hz" },
  { label: "Functions", value: "OFF time, process window, lock function, temperature offset" },
  { label: "Applications", value: "Standard soldering, electronics assembly, rework" },
  { label: "ESD Safety", value: "ESD safe station and iron" },
];

const features = [
  { icon: Zap, title: "95 W Power Unit", desc: "WT 1 single-channel power unit delivers 95 W for fast heat-up and stable tip temperature during continuous production soldering." },
  { icon: Thermometer, title: "WSP 80 Precision Iron", desc: "80 W WSP 80 soldering iron with Silver-Line tips (LT family) suits everything from fine SMD work to heavier through-hole joints." },
  { icon: ShieldCheck, title: "Process Control Built In", desc: "OFF time, process window, lock function and offset settings protect your process parameters on the shop floor." },
  { icon: Activity, title: "Modular WT Line", desc: "The compact, user-friendly WT Line of soldering and rework products fits together to free up bench space." },
];

const WellerWT1012 = () => {
  const { toggleItem, isInCart } = useQuoteCart();
  const inCart = isInCart(PRODUCT_NAME);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT_NAME,
    model: "WT 1012",
    sku: "WT1012",
    mpn: "T0053440699N",
    category: "Soldering Station",
    description:
      "Weller WT 1012 soldering station set — 95 W WT 1 single-channel power unit with WSP 80 (80 W) soldering iron and WSR 201 safety rest. Silver-Line LT tips, OFF time, process window, lock function and offset. 230 V, 50/60 Hz. ESD safe, part of the Weller WT Line.",
    image: "https://www.uvtestsolutions.com/assets/weller-wt1012.jpg",
    brand: { "@type": "Brand", name: "Weller" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      price: "32495",
      url: "https://www.uvtestsolutions.com/products/weller-wt1012-soldering-station",
      seller: { "@type": "Organization", name: "UV Test Solutions" },
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.uvtestsolutions.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.uvtestsolutions.com/products" },
      { "@type": "ListItem", position: 3, name: "Weller WT 1012", item: "https://www.uvtestsolutions.com/products/weller-wt1012-soldering-station" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Weller WT 1012 Soldering Station Set 95W with WSP 80 Iron — Price in India | UV Test Solutions"
        description="Buy the Weller WT 1012 95W soldering station set with WSP 80 (80W) iron and WSR 201 safety rest at ₹32,495 + GST. ESD safe WT Line station with Silver-Line LT tips, process window, lock function and offset. Weller dealer in India with GST invoice and warranty."
        canonical="/products/weller-wt1012-soldering-station"
        type="product"
        keywords="Weller WT 1012, Weller WT1012 price in India, WT1012 soldering station set, WSP 80 soldering iron, WSR 201 safety rest, 95W soldering station, Weller WT Line India, soldering station price, ESD safe soldering station India, T0053440699N, Weller soldering station dealer India, LT soldering tips, electronics rework station, production soldering station, buy Weller soldering station online India"
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
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Weller · WT Line · WT 1012 · 95W Soldering Station Set</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Weller WT 1012 — 95W Soldering Station Set with WSP 80 Iron
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  High flexibility for versatile applications. The <strong>WT 1</strong> single-channel 95 W power unit ships with the <strong>WSP 80</strong> 80 W soldering iron and <strong>WSR 201</strong> safety rest — Silver-Line LT tips cover all standard soldering applications, while OFF time, process window, lock function and offset keep your process repeatable.
                </p>
                <div className="inline-flex items-baseline gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary mb-6">
                  <span className="text-2xl font-bold">{PRICE_DISPLAY}</span>
                  <span className="text-sm text-muted-foreground">(taxes extra)</span>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose the Weller WT 1012 Soldering Station Set</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Weller WT 1012 Technical Specifications</h2>
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
            <h2 className="text-3xl font-bold mb-3">Buy the Weller WT 1012 Soldering Station Set in India</h2>
            <p className="text-muted-foreground mb-6">
              Price <strong>{PRICE_DISPLAY}</strong>. Add it to your quote cart or contact our team for bulk pricing, LT tip selection and pan-India delivery. Genuine Weller product with GST invoice and warranty support.
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

export default WellerWT1012;
