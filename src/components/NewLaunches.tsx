import { Link } from "react-router-dom";
import { Download, Plus, Check, Sparkles, ArrowRight, Star, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import jartulImage from "@/assets/products/jartul-jt6311a.png";
import metrelPvImage from "@/assets/products/metrel-mi3108-eurotestpv.jpg";
import metrelEvImage from "@/assets/products/metrel-mi3132-evtester.jpg";
import orionPhaseSyncImage from "@/assets/products/orion-phase-sync.jpg";
import wellerWe1010Image from "@/assets/products/weller-we1010.png";
import hantekApe11l1000Image from "@/assets/products/hantek-ape11l1000.jpg";
import unitUtr2830eImage from "@/assets/products/unit-utr2830e.jpg";
import unitUap1000aImage from "@/assets/products/unit-uap1000a.jpg";
import unitUtl8211plusImage from "@/assets/products/unit-utl8211plus.jpg";
import wellerWt1012Image from "@/assets/products/weller-wt1012.jpg";

export const newLaunches = [
  {
    name: "Weller WT 1012 Soldering Station Set 95W with WSP 80 Soldering Iron",
    model: "WT 1012",
    brand: "Weller",
    price: "₹32,495 + GST",
    brief:
      "95 W WT 1 single-channel power unit supplied with the WSP 80 (80 W) soldering iron and WSR 201 safety rest. Silver-Line LT tips cover all standard soldering applications, with OFF time, process window, lock function and offset for repeatable production soldering. 230 V, 50/60 Hz.",
    image: wellerWt1012Image,
    href: "/products/weller-wt1012-soldering-station",
    highlights: [
      "95 W WT 1 power unit, 1 channel",
      "WSP 80 iron (80 W) with Silver-Line LT tips",
      "Includes WSR 201 safety rest",
      "OFF time, process window, lock function, offset",
      "230 V, 50/60 Hz · Article no. T0053440699N",
    ],
  },
  {
    name: "UNI-T UTL8211+ High-Precision Compact DC Electronic Load (400W/150V/40A)",
    model: "UTL8211+",
    brand: "UNI-T",
    brief:
      "400 W single-channel programmable DC electronic load with 0–150 V input, up to 40 A sink current and 1 mV / 1 mA resolution. 4.8 MHz synchronous ADC sampling, 5 kHz dynamic testing, CC/CV/CR/CP modes, battery discharge & list modes, 2.8-inch true colour LCD and RS232 SCPI control.",
    image: unitUtl8211plusImage,
    datasheet: "/datasheets/unit-utl8211plus-datasheet.pdf",
    href: "/products/unit-utl8211plus-dc-electronic-load",
    highlights: [
      "400 W / 150 V / 40 A single channel",
      "1 mV / 1 mA measurement resolution",
      "CC / CV / CR / CP + dynamic up to 5 kHz",
      "4.8 MHz voltage-current synchronous ADC",
      "RS232 with SCPI protocol & PC software",
    ],
  },
  {
    name: "UNI-T UAP1000A AC Power Source (1000VA Programmable AC Source)",
    model: "UAP1000A",
    brand: "UNI-T",
    brief:
      "1000 VA single-phase programmable AC power source with dual voltage ranges (150 V / 300 V), current up to 8.4 A, 0.01 V / 0.001 A resolution and RS-232C remote control in a compact 3U chassis — built for mains simulation, appliance and adapter testing.",
    image: unitUap1000aImage,
    datasheet: "/datasheets/unit-uap1000a-datasheet.pdf",
    href: "/products/unit-uap1000a-ac-power-source",
    highlights: [
      "Output capacity 1000 VA",
      "Voltage range L: 150 V / H: 300 V",
      "Current range L: 8.4 A / H: 4.2 A",
      "Resolution 0.01 V / 0.001 A",
      "RS-232C interface, 3U rack size",
    ],
  },
  {
    name: "UNI-T UTR2830E LCR Meter (100 kHz Digital LCR Bridge)",
    model: "UTR2830E",
    brand: "UNI-T",
    price: "₹66,499 incl. taxes",
    brief:
      "New generation 100 kHz digital LCR bridge with 0.05% LCRZ / 0.1% DCR accuracy, 6-bit display count and up to 80 readings per second. 4.3-inch TFT LCD with dual primary/secondary readout and RS232, HANDLER, LAN, USB Host & Device interfaces for production QA and automated testing.",
    image: unitUtr2830eImage,
    datasheet: "/datasheets/unit-utr2830e-datasheet.pdf",
    manual: "/datasheets/unit-utr2830e-user-manual.pdf",
    href: "/products/unit-utr2830e-lcr-meter",
    highlights: [
      "Max test frequency 100 kHz",
      "Accuracy LCRZ 0.05%, DCR 0.1%",
      "6-bit display count, 80 rdgs/s",
      "4.3\" TFT LCD, dual parameter readout",
      "RS232, HANDLER, LAN, USB Host/Device",
    ],
  },
  {
    name: "Hantek APE11L1000 AC Power Source (1KVA, 110V/220V)",
    model: "APE11L1000",
    brand: "Hantek",
    brief:
      "1KVA single-phase programmable AC power source with 110 V / 220 V rated voltage, 9.1 A / 4.5 A rated current and 0–300 V adjustable output. Built-in isolation transformer, 4.3-inch colour LCD with waveform recording and country-wise mains voltage simulation.",
    image: hantekApe11l1000Image,
    datasheet: "/datasheets/hantek-ape11l1000.pdf",
    href: "/products/hantek-ape11l1000-ac-power-source",
    highlights: [
      "Output power 1KVA, rated 110V/220V",
      "Rated current 9.1 A / 4.5 A",
      "Output 0–300 V, 45–65 Hz + 100/120/200/240 Hz",
      "4.3-inch colour LCD, 30-day waveform recording",
      "Built-in isolation transformer, OVP/OCP/OTP/OPP",
    ],
  },

  {
    name: "Jartul JT6311A DC Electronic Load (150W/150V/30A)",
    model: "JT6311A",
    brand: "Jartul",
    brief:
      "150W / 30A / 150V programmable DC electronic load with 10µS full-range current rising time and 500KHz synchronized sampling. Ideal for testing switching power supplies, LED drivers, ATE systems, fuses, batteries and adapters.",
    image: jartulImage,
    datasheet: "/datasheets/jartul-jt6311a.pdf",
    href: "/products/jartul-jt6311a",
    highlights: [
      "150W / 150V / 30A range",
      "10µS full-range current rise time",
      "500KHz synchronized sampling",
      "CC / CV / CR / CP modes",
      "Dynamic, list, battery & short test",
    ],
  },
  {
    name: "Metrel MI 3108 EurotestPV Photovoltaic & Installation Tester",
    model: "MI 3108",
    brand: "Metrel",
    brief:
      "Combined photovoltaic and electrical installation safety tester. Performs complete EN 61557 installation tests plus EN 62446 PV tests, I-V curve tracing, STC calculation (EN 61829) and DC/AC inverter power measurements up to 1000 V / 15 A DC.",
    image: metrelPvImage,
    datasheet: "/datasheets/metrel-mi3108-eurotestpv.pdf",
    href: "/products/metrel-mi3108-eurotestpv",
    highlights: [
      "I-V curve tracing up to 1000 V / 15 A",
      "STC recalculation per EN 61829",
      "RCD (AC/A/B), loop, line, insulation, earth",
      "Simultaneous AC & DC power / efficiency",
      "PV Safety Probe for safe disconnection",
    ],
  },
  {
    name: "Metrel MI 3132 EV Tester (Electric Vehicle Insulation Tester)",
    model: "MI 3132",
    brand: "Metrel",
    brief:
      "Portable EV insulation and bonding tester compliant with UN ECE R100 Annex 4A/4B and ISO 6469-3. Insulation up to 1500 V, 4-wire micro-ohm measurement at 2 A DC, 4.3″ colour touchscreen and Li-Ion battery operation for field use.",
    image: metrelEvImage,
    datasheet: "/datasheets/metrel-mi3132-evtester.pdf",
    href: "/products/metrel-mi3132-evtester",
    highlights: [
      "Insulation test 50 V – 1500 V, up to 3 GΩ",
      "4-wire Micro Ohm with 2 A DC current",
      "Compliant with UN ECE R100 & ISO 6469-3",
      "4.3″ colour touchscreen, AUTO SEQUENCE",
      "CAT III 1000 V, Li-Ion battery powered",
    ],
  },
  {
    name: "Orion EE Phase Sync — IEC 62271-215:2021 Phase Comparator",
    model: "Phase Sync",
    brand: "Orion EE",
    exclusive: true,
    brief:
      "Class A capacitive phase comparator for medium voltage equipment with IEC 62271-215:2021 measuring points. LCD + LED indication of phase coincidence, voltage presence and frequency. Type-C rechargeable Li-ion battery. Available exclusively in India at UV Test Solutions.",
    image: orionPhaseSyncImage,
    datasheet: "/datasheets/orion-phase-sync.pdf",
    href: "/products/orion-phase-sync",
    highlights: [
      "IEC 62271-215:2021 Class A compliant",
      "Phase, voltage presence & frequency on LCD",
      "Single-earth simultaneous connected operation",
      "50/60 Hz, threshold 10%–45% Un",
      "Type-C rechargeable, IP 2X / IK 07, 250 g",
    ],
  },
  {
    name: "Weller WE 1010 70W Digital Soldering Station (WEP 70 + PH 70)",
    model: "WE 1010",
    brand: "Weller",
    price: "₹15,500 + GST",
    brief:
      "1-channel 70W digital soldering station with WEP 70 iron and PH 70 safety rest — the most powerful station in its class with 40% more power than WES / WESD. ESD safe, UL & CE certified, with heat-resistant silicon cable and toolless ET tip change.",
    image: wellerWe1010Image,
    href: "/products/weller-we1010",
    highlights: [
      "70 W, 230 V, 100 °C – 450 °C range",
      "Digital LC display, standby & auto setback",
      "ESD safe iron, heat-resistant silicon cable",
      "Toolless tip change — Weller ET tips",
      "Password-protected settings, UL & CE certified",
    ],
  },
];

const NewLaunches = () => {
  const { toggleItem, isInCart } = useQuoteCart();

  return (
    <section id="new-launches" className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            <Sparkles className="h-4 w-4" /> New Launches
          </div>
          <h2 className="text-4xl font-bold mb-3">Just Launched</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Latest additions to our test &amp; measurement portfolio
          </p>
        </div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {newLaunches.map((product) => {
            const inCart = isInCart(product.name);
            return (
              <article
                key={product.model}
                className="grid md:grid-cols-2 gap-8 p-6 md:p-8 rounded-2xl border-2 border-accent/20 bg-card shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link to={product.href} className="relative aspect-[4/3] bg-muted/30 rounded-xl overflow-hidden group/img">
                  <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wide">
                    New
                  </span>
                  {(product as { exclusive?: boolean }).exclusive && (
                    <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide">
                      <Star className="h-3 w-3" /> Exclusive
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={`${product.name} - ${product.brand} test instrument`}
                    loading="lazy"
                    className="w-full h-full object-contain p-4 group-hover/img:scale-105 transition-transform"
                  />
                </Link>
                <div className="flex flex-col">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                    {product.brand} · Model {product.model}
                  </p>
                  <h3 className="text-2xl font-bold mb-3">
                    <Link to={product.href} className="hover:text-accent transition-colors">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.brief}
                  </p>
                  <ul className="space-y-1.5 mb-6">
                    {product.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <Button asChild className="gap-2">
                      <Link to={product.href}>
                        View Details <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      onClick={() => toggleItem(product.name)}
                      variant={inCart ? "secondary" : "outline"}
                      className="gap-2"
                    >
                      {inCart ? (
                        <><Check className="h-4 w-4" /> Added</>
                      ) : (
                        <><Plus className="h-4 w-4" /> Request Quote</>
                      )}
                    </Button>
                    {product.datasheet && (
                      <Button asChild variant="outline" className="gap-2">
                        <a
                          href={product.datasheet}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download className="h-4 w-4" /> Datasheet
                        </a>
                      </Button>
                    )}
                    {(product as { manual?: string }).manual && (
                      <Button asChild variant="outline" className="gap-2">
                        <a
                          href={(product as { manual?: string }).manual}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText className="h-4 w-4" /> User Manual
                        </a>
                      </Button>
                    )}

                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewLaunches;
