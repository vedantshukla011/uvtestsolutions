import { Link } from "react-router-dom";
import { Plus, Check, ArrowLeft, Zap, ShieldCheck, Gauge, Waves, Cable } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import { micsigProbeProducts } from "@/data/micsigProducts";

// The CDN serves these immutable assets on the published host; use its absolute
// address so product photos also render in the local Vite preview.
const assetUrl = (path: string) => new URL(path, "https://uvtestsolutions.lovable.app").href;
import cpLowImage from "@/assets/products/micsig/cp-low.png.asset.json";
import cpHighImage from "@/assets/products/micsig/cp-high.png.asset.json";
import cpHighCompactImage from "@/assets/products/micsig/cp-high2.png.asset.json";
import rcpImage from "@/assets/products/micsig/rcp.png.asset.json";
const imageFor = (category: string) =>
  assetUrl(
    (category.startsWith("Rogowski") && rcpImage.url) ||
      (category.startsWith("Low-frequency") && cpLowImage.url) ||
      (category.startsWith("High-frequency compact") && cpHighCompactImage.url) ||
      cpHighImage.url
  );

const PAGE_URL = "https://www.uvtestsolutions.com/products/micsig-acdc-current-probe";
const PAGE_TITLE = "Micsig AC/DC Current Probes India | CP2100 & CP Series";
const PAGE_DESC =
  "Micsig low- and high-frequency AC/DC current probes in India: CP2100, CP Series and RCP Rogowski. Compare bandwidths up to 100 MHz and request a quote from an authorised distributor.";

const currentGroups = [
  {
    title: "Low-Frequency AC/DC Current Probes (CP2100 Series)",
    desc: "Clamp-on AC/DC probes for general power measurement — inverters, chargers, adapters and battery current draw.",
    filter: (c: string) => c.startsWith("Low-frequency"),
  },
  {
    title: "High-Frequency AC/DC Current Probes (CP Series)",
    desc: "Wideband AC/DC probes up to 100 MHz for switching-edge analysis in SMPS, SiC/GaN converters and high-speed power stages.",
    filter: (c: string) => c.startsWith("High-frequency") && !c.includes("compact"),
  },
  {
    title: "High-Frequency Compact Probes (CPxB)",
    desc: "Compact 5 A / 30 A wideband probes with small jaws for PCB-level current probing.",
    filter: (c: string) => c.includes("compact"),
  },
  {
    title: "Rogowski AC Current Probes (RCP Series)",
    desc: "Flexible Rogowski coils — up to 12000 Apk and 30 MHz bandwidth, with customisable coil diameter and circumference for busbar and high-current measurement.",
    filter: (c: string) => c.startsWith("Rogowski"),
  },
];

const allCurrent = micsigProbeProducts.filter(
  (p) =>
    p.category.startsWith("Low-frequency") ||
    p.category.startsWith("High-frequency") ||
    p.category.startsWith("Rogowski")
);

const formatPrice = (n: number) => "₹" + n.toLocaleString("en-IN");

const highlights = [
  {
    icon: Zap,
    title: "800 kHz – 30 MHz Bandwidth Range",
    desc: "Pick the bandwidth that matches your converter — CP2100 for line-frequency power, CP series for switching-edge rise/fall capture, RCP for fast high-current events.",
  },
  {
    icon: Gauge,
    title: "10 Apk to 12000 Apk Current Range",
    desc: "From small PCB traces to EV busbars and industrial feeders — the Rogowski family covers 60 Apk up to 12000 Apk with flexible, customisable coil sizes.",
  },
  {
    icon: Cable,
    title: "BNC Interface — Works with Any Scope",
    desc: "Standard BNC output connects directly to Micsig, Siglent, Rigol, Keysight or Tektronix oscilloscopes — no proprietary interface or external power module needed.",
  },
  {
    icon: ShieldCheck,
    title: "True AC/DC + High CMRR",
    desc: "Measure DC bias and AC ripple in one clamp with accurate low-frequency response and 1% class accuracy on the ACP1000-compatible ranges.",
  },
];

const applications = [
  "EV inverter, OBC and DC-DC converter current waveform analysis",
  "Switch-mode power supply and PFC stage input/output current",
  "Motor drives, servo amplifiers and industrial drive commissioning",
  "Battery charge/discharge current profiling",
  "Busbar and high-current distribution measurement with Rogowski coils",
  "R&D, production QA and field-service current diagnostics",
];

const MicsigCurrentProbes = () => {
  const { toggleItem, isInCart } = useQuoteCart();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Micsig AC/DC Current Probes (CP2100, CP Series, RCP Rogowski)",
    itemListElement: allCurrent.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: `Micsig ${p.model} Current Probe`,
        model: p.model,
        sku: `MICSIG-${p.model}`,
        description: `Micsig ${p.model} current probe — ${p.description}. Available in India from UV Test Solutions, authorised Micsig distributor.`,
        image: imageFor(p.category),
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
      { "@type": "ListItem", position: 4, name: "AC/DC Current Probes", item: PAGE_URL },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={PAGE_TITLE}
        description={PAGE_DESC}
        canonical="/products/micsig-acdc-current-probe"
        type="product"
        keywords="Micsig current probe price India, low frequency AC/DC current probe, high frequency AC/DC current probe, CP2100 price, CP2100A, CP2100B, CP3008, CP1510, CP1003B, CP503B, Rogowski current probe, Rogowski coil probe for oscilloscope, current probe India, wideband current probe, authorised Micsig distributor India, UV Test Solutions"
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
                  src={assetUrl(cpHighImage.url)}
                  alt="Micsig CP series AC/DC current probes for oscilloscopes"
                  width={600}
                  height={600}
                  className="w-full h-full object-contain p-6"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                  Micsig · CP2100 / CP Series / RCP Rogowski
                </p>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  Micsig AC/DC Current Probes in India — Low &amp; High Frequency, Price &amp; Specifications
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  UV Test Solutions is an <strong>authorised Micsig distributor</strong> supplying the complete Micsig
                  current-probe range — <strong>CP2100 low-frequency</strong> clamp probes, <strong>CP series
                  high-frequency</strong> probes up to 100 MHz, and <strong>RCP Rogowski coils</strong> up to 12000 Apk.
                  With warranty, calibration and after-sales support across India.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link to="/contact?product=Micsig%20Current%20Probe">Request a Quote</Link>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose a Micsig Current Probe</h2>
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
            <h2 className="text-3xl font-bold mb-2 text-center">Micsig Current Probe Models &amp; Prices in India</h2>
            <p className="text-center text-muted-foreground mb-8">
              Every model in stock — price exclusive of GST, indicative only. Request a confirmed quote.
            </p>
            {currentGroups.map((g) => {
              const items = allCurrent.filter((p) => g.filter(p.category));
              if (!items.length) return null;
              return (
                <div key={g.title} className="mb-10">
                  <h3 className="text-xl font-semibold mb-1">{g.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{g.desc}</p>
                  <div className="overflow-x-auto rounded-xl border border-border bg-card">
                    <table className="w-full text-sm">
                      <thead className="border-b border-border bg-muted/50">
                        <tr>
                          <th className="text-left p-4 font-semibold">Model</th>
                          <th className="text-left p-4 font-semibold">Bandwidth / Range</th>
                          <th className="text-right p-4 font-semibold">Price (Excl. GST)</th>
                          <th className="p-4"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((p) => (
                          <tr key={p.model} className="border-b border-border last:border-0">
                            <td className="p-4 font-semibold whitespace-nowrap">{p.model}</td>
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
              );
            })}
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Applications of Micsig Current Probes
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
              Get the Best Price on Micsig Current Probes in India
            </h2>
            <p className="text-muted-foreground mb-6">
              Add the models you need to your quote cart or talk to our probe specialists. We also stock the complete
              Micsig range — tablet oscilloscopes, high voltage differential probes and SigOFIT optical-fibre isolated
              probes — with delivery across India and support from our Ghaziabad store.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg">
                <Link to="/products/micsig-high-voltage-differential-probe">Explore Differential Probes →</Link>
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

export default MicsigCurrentProbes;
