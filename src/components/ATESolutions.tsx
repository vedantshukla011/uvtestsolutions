import { Link } from "react-router-dom";
import { Check, Cpu, Factory, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    badge: "Entry Level ATE",
    title: "Starter Production Line Testing System",
    icon: Cpu,
    desc: "Designed for startups, laboratories, educational manufacturing facilities and small-scale charger manufacturers requiring reliable and affordable automated testing.",
    features: [
      "Basic automated charger testing",
      "Programmable DC load integration",
      "Voltage & current monitoring",
      "Compact industrial PC integration",
      "LabVIEW-based testing interface",
      "Manual + semi-automatic workflow",
      "Data logging & report generation",
    ],
  },
  {
    badge: "Moderate ATE",
    title: "Advanced Manufacturing Automation System",
    icon: Factory,
    desc: "Built for medium-scale production facilities demanding faster throughput, multi-channel testing and intelligent automated workflows.",
    features: [
      "Multi-channel power testing",
      "Integrated programmable oscilloscope",
      "DAQ-based signal acquisition",
      "Automated pass/fail analytics",
      "Industrial rack-mounted architecture",
      "Fixture-based rapid testing",
      "Real-time graphical monitoring",
      "Barcode & production integration",
    ],
  },
  {
    badge: "Premium ATE",
    title: "High-Speed Enterprise Grade ATE Platform",
    icon: Zap,
    desc: "Engineered for large-scale OEMs and enterprise electronics manufacturers requiring world-class testing infrastructure with maximum precision and scalability.",
    features: [
      "8-channel high-power DC electronic load system",
      "4-channel precision power meter architecture",
      "3KVA programmable AC power source",
      "Advanced waveform analysis",
      "High-speed automated production testing",
      "Complete LabVIEW automation suite",
      "Industrial-grade rackmount computing",
      "Custom fixture and PCB integration",
      "Cloud-ready data logging architecture",
      "MES/ERP integration support",
    ],
  },
];

const hardware = [
  "Hantek HDL2513C+ DC Electronic Loads",
  "Tonghui TH3422 Multi-Channel Power Meter",
  "Hantek HAP11L3000 3KVA AC Power Supply",
  "RIGOL DAQ M302 20-Channel Data Acquisition System",
  "RIGOL Programmable Digital Oscilloscope",
  "Industrial Rackmount PC with Intel Core i5 Platform",
  "Custom Panel Development & Fixture PCB Design",
  "LabVIEW-Based Software Development",
  "Automated Data Logging & Analytics",
  "Installation, Calibration & Commissioning Support",
];

const turnkey = [
  "Electrical Panel Design & Manufacturing",
  "Fixture & PCB Development",
  "Industrial Automation Integration",
  "LabVIEW Software Development",
  "Production Line Automation",
  "Calibration & Validation",
  "On-Site Installation & Training",
  "AMC & Technical Support",
];

const ATESolutions = () => {
  return (
    <section id="ate-solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            <Factory className="h-4 w-4" /> Automated Test Equipment
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            ATE for Chargers &amp; Adapters
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            UV Test Solutions designs and manufactures world-class Automated Test Equipment (ATE)
            systems for charger, adapter, SMPS and power supply manufacturing — engineered for
            accuracy, repeatability and production efficiency.
          </p>
          <div className="mt-6">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>

        {/* Key Applications */}
        <div className="max-w-5xl mx-auto mb-16 p-6 rounded-xl border-l-4 border-accent bg-accent/5">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
            Key Applications
          </p>
          <p className="text-foreground leading-relaxed">
            Mobile Charger Testing • Laptop Adapter Testing • SMPS Testing • Power Supply Validation •
            Production Line Automation • Burn-In Testing • Quality Control Testing • Electrical Safety
            Testing • R&amp;D Validation • OEM Manufacturing
          </p>
        </div>

        {/* Tiers */}
        <div className="mb-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            ATE Solutions Based on Budget &amp; Production Requirements
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <article
                key={tier.badge}
                className="flex flex-col p-6 rounded-2xl border border-border bg-card shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide mb-4">
                  <Icon className="h-3.5 w-3.5" /> {tier.badge}
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">{tier.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{tier.desc}</p>
                <ul className="space-y-2 mb-4">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-auto">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </article>
            );
          })}
        </div>

        {/* Hardware */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-card border border-border shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Premium Hardware &amp; Instrumentation
            </h3>
            <p className="text-muted-foreground mb-4">
              We integrate globally trusted instrumentation and industrial automation hardware to ensure
              reliable, repeatable and highly accurate testing performance.
            </p>
            <ul className="grid sm:grid-cols-1 gap-2">
              {hardware.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Complete Turnkey Solutions</h3>
            <p className="text-muted-foreground mb-4">
              From concept development to installation and commissioning, we deliver complete turnkey
              ATE solutions including:
            </p>
            <ul className="grid gap-2 mb-6">
              {turnkey.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="hero">
              <Link to="/contact">Contact UV Test Solutions</Link>
            </Button>
          </div>
        </div>

        {/* SEO content */}
        <div className="max-w-5xl mx-auto p-8 rounded-2xl bg-muted/30 border border-border">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Leading Manufacturer of ATE Systems in India
          </h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              UV Test Solutions is among the leading manufacturers of Automated Test Equipment (ATE)
              for chargers and adapters in India. We provide customized production line testing systems
              for mobile chargers, laptop adapters, power supplies, EV chargers and SMPS products — helping
              manufacturers improve quality control, reduce manual testing errors and achieve high-speed
              automated testing.
            </p>
            <p>
              Our advanced ATE systems include programmable DC electronic loads, multi-channel power
              analyzers, programmable AC power sources, industrial DAQ systems and LabVIEW-based automation
              software, used for adapter validation, production line automation, electrical testing, power
              analysis, waveform monitoring and automated reporting.
            </p>
            <p>
              Businesses searching for charger testing machines, adapter testing systems, automated
              electrical testing solutions, power supply validation equipment, QC automation systems,
              LabVIEW ATE development or industrial production line testing can rely on UV Test Solutions
              for high-performance engineering solutions tailored to industrial manufacturing requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATESolutions;
