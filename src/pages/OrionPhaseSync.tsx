import { Link } from "react-router-dom";
import { Download, Plus, Check, ArrowLeft, Sparkles, Zap, ShieldCheck, Activity, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import productImage from "@/assets/products/orion-phase-sync.jpg";

const PRODUCT_NAME = "Orion EE Phase Sync — IEC 62271-215:2021 Phase Comparator";
const DATASHEET = "/datasheets/orion-phase-sync.pdf";

const specs = [
  { label: "Model", value: "Phase Sync" },
  { label: "Brand", value: "Orion EE" },
  { label: "Type of VDIS", value: "Capacitive" },
  { label: "Classification", value: "Class A" },
  { label: "Standard", value: "IEC 62271-215:2021" },
  { label: "Rated Frequency", value: "50 – 60 Hz (adjustable)" },
  { label: "Threshold Voltage", value: "10% – 45% Un" },
  { label: "Threshold Parameter", value: "10° < |φP| ≤ 30°" },
  { label: "Max Measuring Voltage", value: "60 V AC (measuring points only)" },
  { label: "Indicators", value: "LCD display + 2 LEDs" },
  { label: "Connection Leads", value: "4 mm banana plug" },
  { label: "Power Supply", value: "3.7 V / 900 mAh (14500 AA Li-ion)" },
  { label: "Charging", value: "Type-C, 5 V DC" },
  { label: "Auto Shutdown", value: "10 minutes" },
  { label: "Protection Class", value: "IP 2X / IK 07" },
  { label: "Operating Temp", value: "-25 °C to +55 °C" },
  { label: "Weight", value: "250 g" },
  { label: "Dimensions", value: "173 × 77 × 28 mm" },
];

const applications = [
  { icon: Zap, title: "MV Switchgear Commissioning", desc: "Verify phase coincidence on medium voltage equipment fitted with IEC 62271-215 measuring points." },
  { icon: Activity, title: "Voltage Presence Detection", desc: "Confirms presence or absence of voltage before any switching or maintenance operation." },
  { icon: ShieldCheck, title: "Safe Parallel Operation", desc: "Ensures correct phase sequence before paralleling MV feeders, transformers and ring-main units." },
  { icon: Star, title: "Periodic Substation Testing", desc: "Routine phasing checks in utility substations, industrial plants, renewables and railway MV networks." },
];

const OrionPhaseSync = () => {
  const { toggleItem, isInCart } = useQuoteCart();
  const inCart = isInCart(PRODUCT_NAME);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT_NAME,
    model: "Phase Sync",
    sku: "ORION-PHASE-SYNC",
    category: "Medium Voltage Phase Comparator",
    description:
      "Orion EE Phase Sync — Class A capacitive phase comparator compliant with IEC 62271-215:2021. Verifies phase coincidence and voltage presence on MV equipment via integrated measuring points. LCD + LED indication, Type-C rechargeable Li-ion battery, 50/60 Hz. Available exclusively in India through UV Test Solutions.",
    image: "https://www.uvtestsolutions.com/assets/orion-phase-sync.jpg",
    brand: { "@type": "Brand", name: "Orion EE" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: "https://www.uvtestsolutions.com/products/orion-phase-sync",
      seller: { "@type": "Organization", name: "UV Test Solutions" },
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.uvtestsolutions.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.uvtestsolutions.com/products" },
      { "@type": "ListItem", position: 3, name: "Orion EE Phase Sync", item: "https://www.uvtestsolutions.com/products/orion-phase-sync" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Orion EE Phase Sync IEC 62271-215 Phase Comparator | UV Test Solutions"
        description="Orion EE Phase Sync — Class A MV phase comparator per IEC 62271-215:2021. LCD + LED, 50/60 Hz, Type-C rechargeable. Available exclusively in India at UV Test Solutions."
        canonical="/products/orion-phase-sync"
        type="product"
        keywords="Orion EE Phase Sync, phase comparator India, IEC 62271-215:2021, MV phase comparator, medium voltage phase indicator, capacitive VDIS, Class A phase comparator, switchgear phasing tester, UV Test Solutions exclusive, Orion EE India distributor"
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
                <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide">
                  <Star className="h-3 w-3" /> Exclusive
                </span>
                <img src={productImage} alt={PRODUCT_NAME} className="w-full h-full object-contain p-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Orion EE · Phase Sync</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Orion EE Phase Sync — IEC 62271-215:2021 Phase Comparator
                </h1>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  <Star className="h-4 w-4" /> Available exclusively in India at UV Test Solutions
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Capacitive <strong>Class A phase comparator</strong> for medium voltage equipment fitted with measuring points per <strong>IEC 62271-215:2021</strong>. Compares phase, indicates voltage presence/absence, and confirms frequency on the integrated LCD — with single-earth simultaneous connected operation for safer MV switching.
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
            <h2 className="text-3xl font-bold mb-3">Exclusive to UV Test Solutions in India</h2>
            <p className="text-muted-foreground mb-6">
              The Orion EE Phase Sync is offered in India <strong>exclusively through UV Test Solutions</strong>. Get application support, calibration assistance and after-sales service from our team.
            </p>
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

export default OrionPhaseSync;
