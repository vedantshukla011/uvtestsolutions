import { Link } from "react-router-dom";
import { Plus, Check, ArrowLeft, Zap, ShieldCheck, Gauge, Cable, Waves } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import { micsigProbeProducts } from "@/data/micsigProducts";

// The CDN serves these immutable assets on the published host; use its absolute
// address so product photos also render in the local Vite preview.
const assetUrl = (path: string) => new URL(path, "https://uvtestsolutions.lovable.app").href;
import dpImage from "@/assets/products/micsig/dp.png.asset.json";
const productImage = assetUrl(dpImage.url);

const PAGE_URL = "https://www.uvtestsolutions.com/products/micsig-high-voltage-differential-probe";
const PAGE_TITLE = "Micsig High Voltage Differential Probes India — DP Series Price & Specs | UV Test Solutions";
const PAGE_DESC =
  "Buy Micsig high voltage differential probes in India. DP7000, DP7002, DP3000, DP1500, DP700 series — up to 7000Vpk, 200 MHz, from ₹25,350 excl. GST. Authorised Micsig distributor — request a quote.";

const dpProducts = micsigProbeProducts.filter((p) => p.category === "High-voltage differential probe");

const formatPrice = (n: number) => "₹" + n.toLocaleString("en-IN");

const highlights = [
  {
    icon: Zap,
    title: "Up to 7000 Vpk Differential Voltage",
    desc: "Measure bus voltages, IGBT collector-emitter and DC-link potentials that a standard 10x passive probe can never safely touch — with dual-range attenuation switching.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Floating & Switch-Node Measurement",
    desc: "High common-mode rejection (> -80 dB CMRR) lets you ride on EV drivetrains, solar inverters, motor drives and IGBT gate circuits without ground-loop hazards.",
  },
  {
    icon: Waves,
    title: "Up to 200 MHz Bandwidth, BNC Interface",
    desc: "Clean edges on fast switching waveforms — SiC and GaN converter edge capture included — with a standard BNC interface that connects to any oscilloscope brand.",
  },
  {
    icon: Gauge,
    title: "Dual-Range Switching",
    desc: "Switch attenuation ranges (50X/500X, 100X/1000X, 20X/200X) directly from the probe body to keep small and large signals on scale without changing probes.",
  },
];

const applications = [
  "EV battery, inverter and motor-drive testing (floating bus measurement)",
  "IGBT, SiC and GaN switching characterization in power electronics",
  "Solar / wind inverter DC-link and switching-node analysis",
  "Switch-mode power supply (SMPS) primary-side measurement",
  "Industrial motor drive and servo amplifier debugging",
  "Education and research labs teaching safe high-voltage measurement",
];

const MicsigDifferentialProbes = () => {
  const { toggleItem, isInCart } = useQuoteCart();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Micsig High Voltage Differential Probes (DP Series)",
    itemListElement: dpProducts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: `Micsig ${p.model} High Voltage Differential Probe`,
        model: p.model,
        sku: `MICSIG-${p.model}`,
        description: `Micsig ${p.model} high voltage differential probe — ${p.description}. Available in India from UV Test Solutions, authorised Micsig distributor.`,
        image: productImage,
        brand: { "@type": "Brand", name: "Micsig" },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: p.priceInr,
          availability: "https://schema.org/InStock",
          url: PAGE_URL,
          seller: { "@type": "Organization", name: "UV Test Solutions" },
        },
      },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.uvtestsolutions.com/" },
      { "@type": "ListItem", position: 2, name: "Brands", item: "https://www.uvtestsolutions.com/brands" },
      { "@type": "ListItem", position: 3, name: "Micsig", item: "https://www.uvtestsolutions.com/brands/micsig" },
      { "@type": "ListItem", position: 4, name: "High Voltage Differential Probes", item: PAGE_URL },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={PAGE_TITLE}
        description={PAGE_DESC}
        canonical="/products/micsig-high-voltage-differential-probe"
        type="product"
        keywords="high voltage differential probe, differential probe price India, Micsig differential probe, DP7000, DP7002, DP3000, DP1500, DP700, differential probe for oscilloscope, 7000V differential probe, HV probe India, differential probe dealer India, oscilloscope high voltage probe, floating voltage measurement probe, Micsig India distributor, buy differential probe online India, UV Test Solutions"
        jsonLd={[itemListJsonLd, breadcrumb]}
      />
      <Header />
      <main>
        <section className="bg-gradient-to-b from-accent/10 to-background pt-10 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/brands/micsig" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to Micsig
            </Link>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-[4/3] bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wide">
                  <ShieldCheck className="h-3 w-3" /> Authorised Distributor
                </span>
                <img
                  src={productImage}
                  alt="Micsig DP series high voltage differential probe for oscilloscopes"
                  width={600}
                  height={600}
                  className="w-full h-full object-contain p-6"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                  Micsig · DP Series · High Voltage Differential Probes
                </p>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  Micsig High Voltage Differential Probes in India — DP Series Price & Specifications
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  UV Test Solutions is an <strong>authorised Micsig distributor</strong> supplying the full DP series
                  high voltage differential probes — from the <strong>DP700 / DP7000 (700 Vpk / 7000 Vpk)</strong> up to{" "}
                  <strong>200 MHz bandwidth</strong> models. Safe, isolated measurement on EV buses, IGBTs, solar
                  inverters and motor drives, with warranty, calibration and after-sales support across India.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link to="/contact?product=Micsig%20DP%20Series%20Differential%20Probe">Request a Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="tel:+919654109754">Call +91 9654109754</a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Prices shown are indicative, exclusive of GST. Discounted project pricing available for multi-probe orders.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose a Micsig Differential Probe</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {highlights.map(({ icon: Icon, title, desc }) => (
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
            <h2 className="text-3xl font-bold mb-2 text-center">DP Series Models &amp; Prices in India</h2>
            <p className="text-center text-muted-foreground mb-8">
              Every model in stock — price exclusive of GST, indicative only. Request a confirmed quote.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border bg-card">
              <table className="w-full text-sm">
                <thead className="border-b border-border bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold">Model</th>
                    <th className="text-left p-4 font-semibold">Max Voltage / Bandwidth / Attenuation</th>
                    <th className="text-right p-4 font-semibold">Price (Excl. GST)</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {dpProducts.map((p) => (
                    <tr key={p.model} className="border-b border-border last:border-0">
                      <td className="p-4 font-semibold">{p.model}</td>
                      <td className="p-4 text-muted-foreground">{p.description}</td>
                      <td className="p-4 text-right font-semibold whitespace-nowrap">{formatPrice(p.priceInr)}</td>
                      <td className="p-4 text-right">
                        <Button
                          size="sm"
                          variant={isInCart(p.model) ? "secondary" : "default"}
                          onClick={() => toggleItem(p.model)}
                          className="gap-1.5 whitespace-nowrap"
                          aria-label={`Add Micsig ${p.model} to quote request`}
                        >
                          {isInCart(p.model) ? <><Check className="h-3.5 w-3.5" /> Added</> : <><Plus className="h-3.5 w-3.5" /> Request Quote</>}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Applications of Micsig High Voltage Differential Probes
            </h2>
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
            <h2 className="text-3xl font-bold mb-3">
              Get the Best Price on Micsig Differential Probes in India
            </h2>
            <p className="text-muted-foreground mb-6">
              Add the models you need to your quote cart or talk to our probe specialists. We also stock the complete
              Micsig range — tablet oscilloscopes, AC/DC and Rogowski current probes, and SigOFIT optical-fibre isolated
              probes — with delivery across India and support from our Ghaziabad store.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg">
                <Link to="/products/micsig-acdc-current-probe">Explore Current Probes →</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/blog/micsig-probes-price-india">Read the Micsig Probe Price Guide</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MicsigDifferentialProbes;
