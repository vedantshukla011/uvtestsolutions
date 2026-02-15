import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProductCard from "@/components/ProductCard";
import { Cable } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

import genericPlaceholder from "@/assets/products/generic-placeholder.jpg";

const currentProbes = [
  {
    name: "RCP12000XS Rogowski Current Probe",
    brand: "MICSIG",
    image: genericPlaceholder,
    description: "AC Rogowski current probe compatible with all oscilloscopes via BNC connector.",
    features: ["Bandwidth 2 Hz to 30 MHz", "Current range 12000 Apk", "0.5 mV/A sensitivity"],
  },
  {
    name: "RCP6000XS Rogowski Current Probe",
    brand: "MICSIG",
    image: genericPlaceholder,
    description: "AC Rogowski current probe compatible with all oscilloscopes via BNC connector.",
    features: ["Bandwidth 2 Hz to 30 MHz", "Current range 6000 Apk", "1 mV/A sensitivity"],
  },
  {
    name: "RCP3000XS Rogowski Current Probe",
    brand: "MICSIG",
    image: genericPlaceholder,
    description: "AC Rogowski current probe compatible with all oscilloscopes via BNC connector.",
    features: ["Bandwidth 3 Hz to 30 MHz", "Current range 3000 Apk", "2 mV/A sensitivity"],
  },
  {
    name: "RCP1200XS Rogowski Current Probe",
    brand: "MICSIG",
    image: genericPlaceholder,
    description: "AC Rogowski current probe compatible with all oscilloscopes via BNC connector.",
    features: ["Bandwidth 12 Hz to 30 MHz", "Current range 1200 Apk", "5 mV/A sensitivity"],
  },
  {
    name: "RCP600XS Rogowski Current Probe",
    brand: "MICSIG",
    image: genericPlaceholder,
    description: "AC Rogowski current probe compatible with all oscilloscopes via BNC connector.",
    features: ["Bandwidth 10 Hz to 30 MHz", "Current range 600 Apk", "10 mV/A sensitivity"],
  },
  {
    name: "RCP300XS Rogowski Current Probe",
    brand: "MICSIG",
    image: genericPlaceholder,
    description: "AC Rogowski current probe compatible with all oscilloscopes via BNC connector.",
    features: ["Bandwidth 10 Hz to 30 MHz", "Current range 300 Apk", "20 mV/A sensitivity"],
  },
  {
    name: "RCP120XS Rogowski Current Probe",
    brand: "MICSIG",
    image: genericPlaceholder,
    description: "AC Rogowski current probe compatible with all oscilloscopes via BNC connector.",
    features: ["Bandwidth 34 Hz to 30 MHz", "Current range 120 Apk", "50 mV/A sensitivity"],
  },
  {
    name: "RCP60XS Rogowski Current Probe",
    brand: "MICSIG",
    image: genericPlaceholder,
    description: "AC Rogowski current probe compatible with all oscilloscopes via BNC connector.",
    features: ["Bandwidth 85 Hz to 30 MHz", "Current range 60 Apk", "10m mV/A sensitivity"],
  },
  {
    name: "CP3005 Current Probe",
    brand: "MICSIG",
    image: genericPlaceholder,
    description: "Current probe up to 300A Peak and 5.0 MHz bandwidth.",
    features: ["5.0 MHz bandwidth", "Range: 50A / 300A", "Rise time ≤70ns"],
  },
  {
    name: "CP3008 Current Probe",
    brand: "MICSIG",
    image: genericPlaceholder,
    description: "Current probe up to 300A Peak and 8.0 MHz bandwidth.",
    features: ["8.0 MHz bandwidth", "Range: 50A / 300A", "Rise time ≤43.75ns"],
  },
  {
    name: "ACP1000 AC Current Probe",
    brand: "MICSIG",
    image: genericPlaceholder,
    description: "AC current probe with 0.1A–1000A test range and 10Hz–100kHz operating frequency.",
    features: ["Current range: 0.1A–1000A", "Frequency: 10Hz–100kHz", "Max primary current: 2000A (2s)"],
  },
  {
    name: "CP1003B AC/DC Current Probe 100MHz",
    brand: "MICSIG",
    image: genericPlaceholder,
    description: "High frequency AC/DC current probe with 100MHz bandwidth and ≤3.5ns rise time.",
    features: ["DC to 100MHz bandwidth", "Current range: 6A / 30A", "Overload flashing indicator"],
  },
];

const activeProbes = [
  {
    name: "N2795A Active Probe",
    brand: "KEYSIGHT",
    image: genericPlaceholder,
    description: "High-performance single-ended active probe for oscilloscopes.",
    features: ["1 GHz bandwidth", "1 MΩ input impedance", "Low input capacitance"],
  },
  {
    name: "TAP1500 Active Probe",
    brand: "TEKTRONIX",
    image: genericPlaceholder,
    description: "1.5 GHz single-ended active FET probe with excellent signal fidelity.",
    features: ["1.5 GHz bandwidth", "1 MΩ DC input resistance", "Low noise floor"],
  },
  {
    name: "ZS1500 Active Probe",
    brand: "RIGOL",
    image: genericPlaceholder,
    description: "Active single-ended probe for high-speed digital signal measurements.",
    features: ["1.5 GHz bandwidth", "1 MΩ input impedance", "AutoProbe interface"],
  },
];

const passiveProbes = [
  {
    name: "N2862B Passive Probe",
    brand: "KEYSIGHT",
    image: genericPlaceholder,
    description: "General-purpose passive probe with 300 MHz bandwidth.",
    features: ["300 MHz bandwidth", "10:1 attenuation ratio", "10 MΩ input impedance"],
  },
  {
    name: "TPP0500B Passive Probe",
    brand: "TEKTRONIX",
    image: genericPlaceholder,
    description: "500 MHz passive voltage probe with low loading.",
    features: ["500 MHz bandwidth", "10:1 attenuation", "3.9 pF input capacitance"],
  },
  {
    name: "PVP2350 Passive Probe",
    brand: "RIGOL",
    image: genericPlaceholder,
    description: "350 MHz passive voltage probe for general-purpose measurements.",
    features: ["350 MHz bandwidth", "10:1 / 1:1 switchable", "10 MΩ input impedance"],
  },
  {
    name: "PP-215 Passive Probe",
    brand: "OWON",
    image: genericPlaceholder,
    description: "100 MHz passive probe for entry-level oscilloscope measurements.",
    features: ["100 MHz bandwidth", "10:1 attenuation", "Compensation range 10–35 pF"],
  },
];

const differentialProbes = [
  {
    name: "N2791A Differential Probe",
    brand: "KEYSIGHT",
    image: genericPlaceholder,
    description: "25 MHz differential probe for floating and differential measurements.",
    features: ["25 MHz bandwidth", "±700V differential range", "High CMRR"],
  },
  {
    name: "TDP1500 Differential Probe",
    brand: "TEKTRONIX",
    image: genericPlaceholder,
    description: "1.5 GHz high-bandwidth differential probe for high-speed signal analysis.",
    features: ["1.5 GHz bandwidth", "±8V dynamic range", "Low noise & offset"],
  },
  {
    name: "RP1025D Differential Probe",
    brand: "RIGOL",
    image: genericPlaceholder,
    description: "25 MHz high-voltage differential probe for power electronics.",
    features: ["25 MHz bandwidth", "±1300V differential range", "50× / 500× attenuation"],
  },
];

const probeCategories = [
  { id: "current", label: "Current Probes", products: currentProbes },
  { id: "active", label: "Active Probes", products: activeProbes },
  { id: "passive", label: "Passive Probes", products: passiveProbes },
  { id: "differential", label: "Differential Probes", products: differentialProbes },
];

const Probes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Probes - Active, Passive, Differential & Current Probes India"
        description="Buy oscilloscope probes from Keysight, Tektronix, Rigol, Micsig. Active, passive, differential and current probes for precise measurements. Best prices in India."
        canonical="/products/probes"
        keywords="oscilloscope probes India, current probe, active probe, differential probe, passive probe, Micsig, Keysight, Tektronix"
      />
      <Header />

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink asChild><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage className="text-accent font-semibold">Probes</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
              <Cable className="w-4 h-4" />
              <span className="text-sm font-medium">Measurement Probes</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Professional<span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Oscilloscope Probes</span></h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">Active, Passive, Differential & Current probes from KEYSIGHT, TEKTRONIX, RIGOL, MICSIG and more</p>
          </div>
        </div>
      </section>

      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="current" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-10 h-auto bg-transparent">
              {probeCategories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id} className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground px-6 py-2.5 rounded-full border border-border/50">
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {probeCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cat.products.map((product, idx) => (
                    <ProductCard key={idx} {...product} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Probes;
