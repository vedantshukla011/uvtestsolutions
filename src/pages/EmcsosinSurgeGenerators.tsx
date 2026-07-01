import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Check, Zap, ShieldCheck, Cpu, Globe2, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/contexts/QuoteCartContext";

const PRODUCT_NAME = "EMCSOSIN Surge Generators (IEC 61000-4-5)";

const whyCards = [
  { icon: Zap, title: "Up to 10 kV", desc: "High-energy surge generation for demanding EMC compliance testing." },
  { icon: ShieldCheck, title: "IEC 61000-4-5", desc: "Designed and validated for international surge immunity standards." },
  { icon: Cpu, title: "Automation Ready", desc: "Programmable test sequences, PC control and repeatable results." },
  { icon: Globe2, title: "Industry Ready", desc: "Ideal for automotive, power electronics, telecom, defence and medical." },
];

const portfolio = [
  { name: "Combination Wave Surge Generator", desc: "Surge pulses from direct/indirect lightning strokes and switching transients on external circuits.", image: "https://www.sosinemctest.com/uploads/35478/page/small/combination-wave-surge-generatoraf508.jpg", link: "https://www.sosinemctest.com/emc-general-test-equipment/surge-generator/combination-wave-surge-generator.html" },
  { name: "1kV Surge Generator", desc: "SOSIN 8/20 for telecom, digital products and anti-surge semiconductor devices up to 1000V.", image: "https://www.sosinemctest.com/uploads/35478/page/small/1kv-surge-generator5fb98.jpg", link: "https://www.sosinemctest.com/emc-general-test-equipment/surge-generator/1kv-surge-generator.html" },
  { name: "Telecom Surge Generator", desc: "SUR 700 / SUR 700L lightning surge generator for communication product immunity testing.", image: "https://www.sosinemctest.com/uploads/35478/page/small/telecom-surge-generator27a14.jpg", link: "https://www.sosinemctest.com/emc-general-test-equipment/surge-generator/telecom-surge-generator.html" },
  { name: "Multi-function Surge Generator", desc: "SUR S10L / SUR T10L generating 1.2/50 μs and 10/700 μs surge waveforms for power ports.", image: "https://www.sosinemctest.com/uploads/35478/page/small/multi-function-surge-generatora34b3.jpg", link: "https://www.sosinemctest.com/emc-general-test-equipment/surge-generator/multi-function-surge-generator.html" },
  { name: "Data Line Coupling Networks", desc: "CDN-I/O and CDN-I/OE coupling/decoupling networks for signal-line surge testing.", image: "https://www.sosinemctest.com/uploads/35478/page/small/data-line-coupling-networksc319c.jpg", link: "https://www.sosinemctest.com/emc-general-test-equipment/surge-generator/data-line-coupling-networks.html" },
  { name: "10kV Surge Generator", desc: "High-energy surge generation for lightning and switching transient immunity testing.", image: "https://www.sosinemctest.com/uploads/35478/page/small/10kv-surge-generatorebe70.jpg", link: "https://www.sosinemctest.com/emc-general-test-equipment/surge-generator/10kv-surge-generator.html" },
  { name: "High Voltage Surge Generator", desc: "For direct/indirect lightning strikes and power-system switching transient testing.", image: "https://www.sosinemctest.com/uploads/35478/page/small/high-voltage-surge-generatorf6077.jpg", link: "https://www.sosinemctest.com/emc-general-test-equipment/surge-generator/high-voltage-surge-generator.html" },
  { name: "Lightning Surge Simulator", desc: "Simulates lightning-induced and switching-transient surge events for EMC compliance.", image: "https://www.sosinemctest.com/uploads/35478/page/small/lightning-surge-simulator451b7.jpg", link: "https://www.sosinemctest.com/emc-general-test-equipment/surge-generator/lightning-surge-simulator.html" },
  { name: "EMC Test 3-Phase Surge Immunity Generator", desc: "Three-phase surge immunity testing for industrial equipment and power systems.", image: "https://www.sosinemctest.com/uploads/35478/page/small/emc-test-voltage-dips-generator55d86.jpg", link: "https://www.sosinemctest.com/emc-general-test-equipment/surge-generator/emc-test-voltage-dips-generator.html" },
  { name: "SPD Surge Generator", desc: "SOSIN 2/10, SUR 1000, SUR 360 for surge protection devices and semiconductor testing.", image: "https://www.sosinemctest.com/uploads/35478/page/small/spd-surge-generator1597b.jpg", link: "https://www.sosinemctest.com/emc-general-test-equipment/surge-generator/spd-surge-generator.html" },
  { name: "Lightning Surge Generator SUR 1000L", desc: "Designed for SPDs and communication products, meeting latest standard requirements.", image: "https://www.sosinemctest.com/uploads/35478/page/small/lightning-surge-generator-sur-1000ldd7d9.jpg", link: "https://www.sosinemctest.com/emc-general-test-equipment/surge-generator/lightning-surge-generator-sur-1000l.html" },
  { name: "Surge Generator For SPDs Testing", desc: "SUR 350L anti-surge test device for surge protective devices and communication products.", image: "https://www.sosinemctest.com/uploads/35478/page/small/surge-generator-for-spds-testing6ad50.jpg", link: "https://www.sosinemctest.com/emc-general-test-equipment/surge-generator/surge-generator-for-spds-testing.html" },
];

const specs = [
  { label: "Voltage", value: "Up to 10 kV" },
  { label: "Waveforms", value: "1.2/50 μs, 8/20 μs, 10/700 μs (model dependent)" },
  { label: "Control", value: "Touchscreen + PC" },
  { label: "Compliance", value: "IEC 61000-4-5" },
];

const EmcsosinSurgeGenerators = () => {
  const { toggleItem, isInCart } = useQuoteCart();
  const inCart = isInCart(PRODUCT_NAME);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT_NAME,
    category: "EMC Surge Immunity Test Equipment",
    description:
      "EMCSOSIN surge generators for IEC 61000-4-5 lightning surge immunity testing. Multi-function, three-phase, telecom and SPD models up to 10 kV with programmable PC control. Available in India from UV Test Solutions.",
    brand: { "@type": "Brand", name: "EMCSOSIN" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: "https://www.uvtestsolutions.com/products/emcsosin-surge-generators",
      seller: { "@type": "Organization", name: "UV Test Solutions" },
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.uvtestsolutions.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.uvtestsolutions.com/products" },
      { "@type": "ListItem", position: 3, name: "EMCSOSIN Surge Generators", item: "https://www.uvtestsolutions.com/products/emcsosin-surge-generators" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="EMCSOSIN Surge Generators (IEC 61000-4-5) — Buy in India | UV Test Solutions"
        description="EMCSOSIN IEC 61000-4-5 surge generators up to 10 kV — multi-function, three-phase, telecom and SPD models. EMC surge immunity test systems available in India from UV Test Solutions."
        canonical="/products/emcsosin-surge-generators"
        type="product"
        keywords="EMCSOSIN, Surge Generator, Lightning Surge Generator, EMC Test Equipment, IEC 61000-4-5, Surge Immunity, Combination Wave Generator, High Voltage Testing, EMC Compliance, Industrial Test Equipment, surge generator, surge generator india, emc surge generator, iec61000-4-5, lightning surge generator, combination wave generator, emc test equipment, surge immunity tester, surge testing machine, emcsosin, emcsosin india, surge simulator, telecom surge generator, high voltage surge generator, industrial emc testing, ev charger testing, automotive emc, electronic product testing, power electronics testing, laboratory testing equipment, UV Test Solutions"
        jsonLd={[productJsonLd, breadcrumb]}
      />
      <Header />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground">
          <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-accent/30 blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
            <Link to="/" className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100 mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-bold uppercase tracking-wide mb-4">
              <Sparkles className="h-3 w-3" /> New Product Line
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3 max-w-3xl">
              EMCSOSIN Surge Generators
            </h1>
            <p className="text-xl md:text-2xl font-medium opacity-90 mb-4">
              IEC 61000-4-5 Lightning Surge Immunity Test Systems
            </p>
            <p className="max-w-2xl text-base md:text-lg opacity-90 mb-8">
              Advanced <strong>EMCSOSIN surge generators</strong> and <strong>surge immunity testers</strong> engineered for EMC laboratories, R&amp;D centres, electronics manufacturers, certification facilities and industrial test equipment users. From <strong>combination wave generators</strong> to <strong>telecom surge generators</strong> and <strong>high voltage surge simulators</strong>, get reliable <strong>lightning surge immunity</strong> testing for power electronics, automotive EMC, EV charger testing and electronic product testing in India from <strong>UV Test Solutions</strong>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary">
                <a href="#products">Explore Products</a>
              </Button>
              <Button
                size="lg"
                onClick={() => toggleItem(PRODUCT_NAME)}
                variant={inCart ? "secondary" : "default"}
                className="gap-2 bg-white text-primary hover:bg-white/90"
              >
                {inCart ? <><Check className="h-4 w-4" /> Added to Quote</> : <><Plus className="h-4 w-4" /> Request a Quote</>}
              </Button>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why EMCSOSIN?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyCards.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all"
                >
                  <div className="inline-flex p-3 rounded-lg bg-accent/10 text-accent mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="products" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Product Portfolio</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A complete EMCSOSIN range covering combination wave, three-phase, telecom and SPD surge testing.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolio.map((p) => (
                <div
                  key={p.name}
                  className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/40 hover:shadow-[var(--shadow-elegant)] transition-all"
                >
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${p.name} details`}
                    className="block aspect-[4/3] bg-white overflow-hidden"
                  >
                    <img
                      src={p.image}
                      alt={`EMCSOSIN ${p.name}`}
                      loading="lazy"
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                  <div className="p-5 flex flex-col flex-1">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-lg mb-2 hover:text-accent transition-colors"
                    >
                      {p.name}
                    </a>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{p.desc}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleItem(`EMCSOSIN ${p.name}`)}
                      className="gap-2 w-full"
                    >
                      {isInCart(`EMCSOSIN ${p.name}`) ? <><Check className="h-4 w-4" /> Added</> : <><Plus className="h-4 w-4" /> Request Quote</>}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SPECS */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Technical Highlights</h2>
            <div className="overflow-hidden rounded-2xl border border-border">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold">Parameter</th>
                    <th className="text-left p-4 font-semibold">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map((s) => (
                    <tr key={s.label} className="border-t border-border">
                      <td className="p-4 text-muted-foreground">{s.label}</td>
                      <td className="p-4 font-medium">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="rounded-3xl bg-gradient-to-r from-primary to-accent p-10 md:p-14 text-center text-primary-foreground shadow-[var(--shadow-elegant)]">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Need the Right Surge Generator?</h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                UV Test Solutions provides application support, demonstrations, installation assistance and
                after-sales support across India.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button
                  size="lg"
                  onClick={() => toggleItem(PRODUCT_NAME)}
                  variant={inCart ? "secondary" : "default"}
                  className="gap-2 bg-white text-primary hover:bg-white/90"
                >
                  {inCart ? <><Check className="h-4 w-4" /> Added to Quote</> : <><Plus className="h-4 w-4" /> Request a Quote</>}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EmcsosinSurgeGenerators;
