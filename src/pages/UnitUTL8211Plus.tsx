import { Link } from "react-router-dom";
import { Download, Plus, Check, ArrowLeft, Sparkles, Gauge, Cpu, Cable, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import productImage from "@/assets/products/unit-utl8211plus.jpg";

const PRODUCT_NAME = "UNI-T UTL8211+ High-Precision Compact DC Electronic Load (400W/150V/40A)";
const DATASHEET = "/datasheets/unit-utl8211plus-datasheet.pdf";

const specs = [
  { label: "Model", value: "UTL8211+" },
  { label: "Brand", value: "UNI-T" },
  { label: "Series", value: "UTL8200+ Series DC Electronic Load" },
  { label: "Input Voltage", value: "0 – 150 V" },
  { label: "Input Current", value: "0 – 40 A" },
  { label: "Input Power", value: "400 W (single channel)" },
  { label: "Min. Operating Voltage", value: "2.0 V at 40 A" },
  { label: "Measurement Resolution", value: "1 mV / 1 mA" },
  { label: "Operating Modes", value: "CC / CV / CR / CP" },
  { label: "Constant Voltage Range", value: "0 – 150 V, ±(0.05% + 0.1% FS)" },
  { label: "Constant Current Range", value: "0 – 4 A / 4 – 40 A, ±(0.1% + 0.1% FS)" },
  { label: "Constant Resistance Range", value: "0.05 Ω – 7.5 kΩ, 12-bit" },
  { label: "Constant Power Range", value: "400 W, 10 mW resolution" },
  { label: "Dynamic Test", value: "Up to 5 kHz, min. rise time 100 µs" },
  { label: "Rise / Fall Slope", value: "0.08 A/ms – 0.4 A/µs" },
  { label: "ADC Sampling", value: "4.8 MHz voltage-current synchronous" },
  { label: "Display", value: "2.8-inch 24-bit true colour LCD" },
  { label: "Interface", value: "RS232, standard SCPI protocol" },
  { label: "Protection", value: "OVP / LVP / OCP / OPP / OTP + reverse polarity alarm" },
  { label: "Country of Origin", value: "China" },
];

const features = [
  {
    icon: Zap,
    title: "400 W / 150 V / 40 A Load Capacity",
    desc: "Single-channel programmable DC electronic load rated 400 W with a wide 0–150 V input voltage window and up to 40 A sink current — ideal for SMPS, adapter, charger and battery discharge testing.",
  },
  {
    icon: Gauge,
    title: "1 mV / 1 mA High-Precision Resolution",
    desc: "4.8 MHz voltage-current synchronous ADC sampling with 1 mV / 1 mA resolution delivers accurate, repeatable measurements for QA lines and R&D benches.",
  },
  {
    icon: Cpu,
    title: "CC, CV, CR & CP Modes + Battery Test",
    desc: "Four basic operating modes plus dynamic (up to 5 kHz), list, short-circuit simulation and multi-mode battery discharge testing with programmable current rise and fall rates.",
  },
  {
    icon: Cable,
    title: "RS232 + SCPI for ATE Integration",
    desc: "Standard RS232 interface with SCPI command set and bundled PC software for remote control, data logging and integration into automated test equipment racks.",
  },
];

const applications = [
  "Switching power supply (SMPS) and DC power supply testing",
  "Adapter, charger and USB PD power delivery testing",
  "Battery and lithium battery protection board (BMS) discharge testing",
  "LED driver and constant-current driver validation",
  "Automated test equipment (ATE) and production line QA",
  "Component testing, fuse testing and R&D laboratory characterisation",
];

const UnitUTL8211Plus = () => {
  const { toggleItem, isInCart } = useQuoteCart();
  const inCart = isInCart(PRODUCT_NAME);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT_NAME,
    model: "UTL8211+",
    sku: "UNIT-UTL8211PLUS",
    category: "DC Electronic Load",
    description:
      "UNI-T UTL8211+ high-precision compact programmable DC electronic load with 400 W power, 0–150 V input voltage, 0–40 A current, 1 mV/1 mA resolution, CC/CV/CR/CP modes, 5 kHz dynamic testing, 4.8 MHz synchronous ADC sampling, 2.8-inch true colour LCD and RS232 SCPI interface.",
    image: "https://www.uvtestsolutions.com/assets/unit-utl8211plus.jpg",
    brand: { "@type": "Brand", name: "UNI-T" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: "https://www.uvtestsolutions.com/products/unit-utl8211plus-dc-electronic-load",
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
        name: "UNI-T UTL8211+ DC Electronic Load",
        item: "https://www.uvtestsolutions.com/products/unit-utl8211plus-dc-electronic-load",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="UNI-T UTL8211+ 400W DC Electronic Load — Buy in India | UV Test Solutions"
        description="Buy UNI-T UTL8211+ programmable DC electronic load: 400W, 150V, 40A, 1mV/1mA resolution, CC/CV/CR/CP, 5kHz dynamic, RS232 SCPI. Best price in India — request a quote."
        canonical="/products/unit-utl8211plus-dc-electronic-load"
        type="product"
        keywords="UNI-T UTL8211+, UTL8211+ DC electronic load, 400W DC electronic load, programmable DC electronic load India, DC load tester 150V 40A, buy DC electronic load online India, DC electronic load price India, UNI-T electronic load dealer India, battery discharge tester, SMPS load tester, LED driver test load, UTL8200+ series, electronic load supplier India, UV Test Solutions"
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
                  alt="UNI-T UTL8211+ high-precision compact 400W programmable DC electronic load front panel"
                  width={600}
                  height={600}
                  className="w-full h-full object-contain p-6"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                  UNI-T · UTL8200+ Series · 400 W DC Electronic Load
                </p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  UNI-T UTL8211+ — High-Precision Compact DC Electronic Load (400W / 150V / 40A)
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  The UTL8211+ programmable DC electronic load combines <strong>400 W</strong> power handling,{" "}
                  <strong>0–150 V</strong> input voltage and up to <strong>40 A</strong> sink current with{" "}
                  <strong>1 mV / 1 mA</strong> measurement resolution. A 2.8-inch 24-bit true colour LCD, 4.8 MHz
                  synchronous ADC sampling, 5 kHz dynamic testing and RS232 SCPI control make it a compact, lab-grade
                  load for power supply, adapter, battery and LED driver testing.
                </p>
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
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose the UTL8211+ Programmable DC Electronic Load
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
              UTL8211+ Technical Specifications — 400W DC Electronic Load
            </h2>
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Applications of the UTL8211+ DC Load Tester
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
              Get the Best Price on the UNI-T UTL8211+ DC Electronic Load in India
            </h2>
            <p className="text-muted-foreground mb-6">
              Add the UTL8211+ to your quote cart or contact our team for pricing, higher-power UTL8200+ / UTL8500+
              series options, demo, installation and calibration support anywhere in India.
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

export default UnitUTL8211Plus;
