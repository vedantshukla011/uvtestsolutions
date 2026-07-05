import keysightLogo from "@/assets/brands/keysight.png";
import tektronixLogo from "@/assets/brands/tektronix.png";
import keithleyLogo from "@/assets/brands/keithley.png";
import wellerLogo from "@/assets/brands/weller.png";
import metrelLogo from "@/assets/brands/metrel.png";
import flukeLogo from "@/assets/brands/fluke.png";
import insizeLogo from "@/assets/brands/insize.png";
import siglentLogo from "@/assets/brands/siglent.png";
import mitutoyoLogo from "@/assets/brands/mitutoyo.png";
import rigolLogo from "@/assets/brands/rigol.png";
import unitLogo from "@/assets/brands/uni-t.png";
import owonLogo from "@/assets/brands/owon.png";
import hantekLogo from "@/assets/brands/hantek.png";
import hakkoLogo from "@/assets/brands/hakko.png";
import itechLogo from "@/assets/brands/itech.png";
import gwinstekLogo from "@/assets/brands/gwinstek.png";
import testoLogo from "@/assets/brands/testo.png";
import htcLogo from "@/assets/brands/htc.png";
import rishabhLogo from "@/assets/brands/rishabh.png";
import bakonLogo from "@/assets/brands/bakon.png";
import scientechLogo from "@/assets/brands/scientech.png";
import jomaLogo from "@/assets/brands/joma.png";
import embuiltLogo from "@/assets/brands/embuilt.png";
import rionLogo from "@/assets/brands/rion.gif";
import vaisalaLogo from "@/assets/brands/vaisala.svg";

export interface BrandCategory {
  title: string;
  desc: string;
}
export interface BrandModel {
  id: string;
  title: string;
  desc: string;
  tags: string[];
}
export interface Brand {
  slug: string;
  name: string;
  logo: string;
  tagline: string;
  origin: string;
  founded: string;
  specialty: string;
  parent?: string;
  popularIn?: string;
  knownFor?: string;
  about: string[];
  categories?: BrandCategory[];
  models?: BrandModel[];
}

export const brands: Brand[] = [
  {
    slug: "fluke",
    name: "Fluke Corporation",
    logo: flukeLogo,
    tagline:
      "The yellow multimeter every electrician recognizes — rugged, reliable field test tools since 1948.",
    origin: "Everett, Washington, USA",
    founded: "1948",
    specialty: "Rugged field test & measurement",
    parent: "Fortive Corporation",
    popularIn: "Electrical maintenance, industrial plants, calibration",
    knownFor: "Rugged CAT III/IV field reliability",
    about: [
      "Fluke Corporation has built rugged, field-ready test instruments since 1948, and its yellow-cased multimeters have become almost synonymous with the profession of electrical testing and maintenance itself.",
      "Fluke's product range covers digital multimeters, clamp meters, thermal imaging cameras, insulation and earth testers, and process calibrators — all built to survive drops, dust and the CAT III/IV environments found on real industrial sites.",
      "UV Test Solutions supplies genuine Fluke test tools to electrical contractors, facility maintenance teams, industrial plants and calibration labs across India.",
    ],
    categories: [
      { title: "Digital Multimeters", desc: "True-RMS handheld and industrial multimeters." },
      { title: "Clamp Meters", desc: "AC/DC current clamp meters for electrical maintenance." },
      { title: "Thermal Imagers", desc: "Infrared cameras for electrical and mechanical inspection." },
      { title: "Insulation & Earth Testers", desc: "Insulation resistance and ground testing instruments." },
      { title: "Process Calibrators", desc: "Multifunction calibrators for instrumentation loops." },
    ],
    models: [
      { id: "Fluke 87V", title: "Industrial True-RMS Multimeter", desc: "The reference multimeter for industrial electricians, valued for its accuracy, ruggedness and true-RMS measurement.", tags: ["True RMS", "CAT IV 600V", "6000 count display"] },
      { id: "Fluke 117", title: "Electrician's True-RMS Multimeter", desc: "A compact, non-contact voltage-detecting multimeter built specifically for residential/commercial electricians.", tags: ["Non-contact V detect", "True RMS", "Auto-range"] },
      { id: "Fluke Ti300", title: "Thermal Imaging Camera", desc: "A high-resolution thermal camera for electrical panel and mechanical inspection with Fluke Connect integration.", tags: ["320x240 resolution", "Multi-mode focus", "Fluke Connect"] },
      { id: "Fluke 376 FC", title: "True-RMS AC/DC Clamp Meter", desc: "A clamp meter with iFlex flexible current probe support and wireless Fluke Connect data sharing.", tags: ["AC/DC clamp", "iFlex compatible", "Wireless data"] },
      { id: "Fluke 1587 FC", title: "Insulation Multimeter", desc: "Combines a full digital multimeter with an insulation resistance tester for one-tool troubleshooting.", tags: ["Insulation to 2000MΩ", "True RMS DMM", "Fluke Connect"] },
    ],
  },
  { slug: "keysight", name: "Keysight Technologies", logo: keysightLogo, tagline: "Global leader in electronic design and test solutions for R&D, manufacturing and services.", origin: "Santa Rosa, California, USA", founded: "2014 (spun off from Agilent)", specialty: "High-end oscilloscopes, signal & network analyzers", about: ["Keysight Technologies delivers premium test and measurement instruments used by R&D labs, semiconductor fabs and communications engineers worldwide.", "UV Test Solutions distributes Keysight oscilloscopes, spectrum & network analyzers, waveform generators and power supplies across India."] },
  { slug: "tektronix", name: "Tektronix", logo: tektronixLogo, tagline: "Pioneer of the oscilloscope — trusted benchtop and portable test instruments for six decades.", origin: "Beaverton, Oregon, USA", founded: "1946", specialty: "Oscilloscopes and signal analyzers", about: ["Tektronix invented the modern oscilloscope and continues to lead in signal integrity, high-speed serial and power measurement.", "UV Test Solutions supplies Tektronix bench and portable oscilloscopes, arbitrary function generators and probes across India."] },
  { slug: "keithley", name: "Keithley Instruments", logo: keithleyLogo, tagline: "Low-level precision DC and sensitive current measurement specialists.", origin: "Cleveland, Ohio, USA", founded: "1946", specialty: "SourceMeters, electrometers, DMMs", about: ["Keithley (a Tektronix company) is the reference for low-current, high-resistance and precision DC test — the go-to brand for semiconductor and materials characterization.", "UV Test Solutions supplies Keithley SourceMeter SMUs, DMMs and electrometers to research labs and semiconductor test facilities in India."] },
  { slug: "weller", name: "Weller", logo: wellerLogo, tagline: "The world's soldering standard since 1945 — professional soldering, desoldering and rework.", origin: "Besigheim, Germany", founded: "1945", specialty: "Soldering & desoldering stations, rework", about: ["Weller has set the industry standard for soldering technology for over 75 years, with ESD-safe stations trusted on electronics manufacturing lines globally.", "UV Test Solutions supplies the complete Weller range — WE 1010, WT / WX series, WXsmart, hot-air rework and fume extraction — across India."] },
  { slug: "metrel", name: "Metrel", logo: metrelLogo, tagline: "European specialist in electrical safety, PV and EV charger testing.", origin: "Horjul, Slovenia", founded: "1957", specialty: "Installation, PV & EV charger testers", about: ["Metrel is a European leader in electrical safety testing, including PV / solar installation testers and EV charger analyzers compliant with the latest IEC standards.", "UV Test Solutions is a partner for Metrel MI 3108 EurotestPV, MI 3132 EV Tester and the full range of insulation, earth and machine safety analyzers in India."] },
  { slug: "insize", name: "INSIZE", logo: insizeLogo, tagline: "Value-engineered precision measurement instruments for quality inspection.", origin: "Suzhou, China", founded: "1995", specialty: "Precision measuring tools", about: ["INSIZE offers a broad catalog of calipers, micrometers, indicators, gauges and metrology tools that combine reliable accuracy with practical pricing.", "UV Test Solutions supplies the INSIZE precision measurement range to manufacturing and QC teams across India."] },
  { slug: "siglent", name: "SIGLENT Technologies", logo: siglentLogo, tagline: "Modern, feature-rich benchtop test instruments at exceptional value.", origin: "Shenzhen, China", founded: "2002", specialty: "Oscilloscopes, AFGs, power supplies", about: ["SIGLENT delivers modern touch-screen oscilloscopes, spectrum analyzers, arbitrary function generators and power supplies with a strong price/performance ratio.", "UV Test Solutions distributes the SIGLENT SDS, SDG, SPD and SSA series across India."] },
  { slug: "mitutoyo", name: "Mitutoyo", logo: mitutoyoLogo, tagline: "The Japanese benchmark for precision metrology — since 1934.", origin: "Kawasaki, Japan", founded: "1934", specialty: "Precision measurement & metrology", about: ["Mitutoyo is the world's most trusted name in dimensional metrology — micrometers, calipers, height gauges, CMMs and optical measuring systems.", "UV Test Solutions supplies genuine Mitutoyo precision instruments to Indian manufacturing, tool rooms and inspection labs."] },
  { slug: "rigol", name: "RIGOL Technologies", logo: rigolLogo, tagline: "Innovative digital oscilloscopes and RF instruments for engineers and educators.", origin: "Beijing, China", founded: "1998", specialty: "Oscilloscopes, RF & DC instruments", about: ["RIGOL brings modern digital scopes, spectrum analyzers, waveform generators and DC loads to engineering teams and universities worldwide.", "UV Test Solutions supplies the RIGOL DHO, MSO, DSG and DL3000 lines across India."] },
  { slug: "uni-t", name: "UNI-T", logo: unitLogo, tagline: "Handheld test tools and benchtop instruments for field and lab use.", origin: "Dongguan, China", founded: "1988", specialty: "Multimeters, clamp meters, oscilloscopes", about: ["UNI-T offers a full range of handheld digital multimeters, clamp meters, insulation testers and entry-level oscilloscopes trusted by field electricians and technicians.", "UV Test Solutions supplies the UNI-T UT series across India."] },
  { slug: "owon", name: "OWON", logo: owonLogo, tagline: "Digital oscilloscopes, handheld scopes and portable test tools.", origin: "Fujian, China", founded: "2000", specialty: "Oscilloscopes and portable test", about: ["OWON specializes in portable and benchtop digital oscilloscopes plus arbitrary waveform generators and handheld multimeters.", "UV Test Solutions distributes OWON scopes and portable T&M instruments across India."] },
  { slug: "hantek", name: "Hantek", logo: hantekLogo, tagline: "Affordable digital oscilloscopes, USB scopes and automotive diagnostic tools.", origin: "Qingdao, China", founded: "2005", specialty: "Digital & USB oscilloscopes, auto diagnostics", about: ["Hantek is known for value-priced desktop and USB oscilloscopes, arbitrary function generators, DC loads and automotive diagnostic scopes.", "UV Test Solutions supplies Hantek scopes, AFGs and automotive test kits across India."] },
  { slug: "hakko", name: "HAKKO", logo: hakkoLogo, tagline: "Japanese soldering excellence — trusted stations, tweezers and desoldering tools.", origin: "Osaka, Japan", founded: "1954", specialty: "Soldering & desoldering equipment", about: ["HAKKO manufactures precision soldering stations, desoldering tools, hot-air rework and fume extractors used worldwide in EMS lines and repair benches.", "UV Test Solutions supplies HAKKO FX-888D, FX-951, FR series rework and consumables across India."] },
  { slug: "itech", name: "ITECH Electronics", logo: itechLogo, tagline: "Programmable power supplies, DC electronic loads and regenerative sources.", origin: "Nanjing, China", founded: "1988", specialty: "Programmable DC power & electronic loads", about: ["ITECH designs high-power programmable DC power supplies, electronic loads and bidirectional / regenerative sources used in EV, battery and power electronics test.", "UV Test Solutions is a partner for ITECH IT6000, IT8500, IT8512BG+ and the regenerative source-load family in India."] },
  { slug: "gwinstek", name: "GW Instek", logo: gwinstekLogo, tagline: "Complete test & measurement portfolio from a Taiwanese specialist.", origin: "New Taipei, Taiwan", founded: "1975", specialty: "Oscilloscopes, power supplies, safety testers", about: ["GW Instek offers a broad, well-engineered range of oscilloscopes, DC power supplies, electrical safety testers, DMMs and function generators.", "UV Test Solutions supplies GW Instek GDS, GPP, GPT and MDO products across India."] },
  { slug: "testo", name: "Testo", logo: testoLogo, tagline: "German precision for portable measurement in HVAC, refrigeration and industry.", origin: "Titisee-Neustadt, Germany", founded: "1957", specialty: "HVAC, thermal, refrigeration test", about: ["Testo is a global leader in portable measurement — flue gas analyzers, thermal imagers, refrigeration manifolds, IAQ and food safety instruments.", "UV Test Solutions supplies Testo instruments to HVAC contractors, refrigeration engineers and industrial users across India."] },
  { slug: "htc", name: "HTC Instruments", logo: htcLogo, tagline: "Trusted Indian brand for affordable digital test & measurement.", origin: "India", founded: "1985", specialty: "DMMs, clamps, environment meters", about: ["HTC Instruments is a widely used Indian brand for handheld multimeters, clamp meters, tachometers, lux meters and process calibrators.", "UV Test Solutions stocks the HTC range for maintenance and service teams across India."] },
  { slug: "rishabh", name: "Rishabh Instruments", logo: rishabhLogo, tagline: "Indian manufacturer of electrical measurement and power quality instruments.", origin: "Nashik, India", founded: "1982", specialty: "Panel meters, power quality analyzers", about: ["Rishabh Instruments designs and manufactures analog & digital panel meters, multifunction meters, power quality analyzers and portable test equipment in India.", "UV Test Solutions distributes Rishabh's DMMs, clamps and panel meters across India."] },
  { slug: "bakon", name: "BAKON", logo: bakonLogo, tagline: "Professional lead-free soldering, desoldering and rework systems.", origin: "China", founded: "1993", specialty: "Soldering stations & rework", about: ["BAKON specializes in lead-free soldering stations, automatic soldering robots, desoldering guns, hot-air rework and fume extractors for EMS lines.", "UV Test Solutions supplies BAKON soldering and rework equipment across India."] },
  { slug: "scientech", name: "Scientech Technologies", logo: scientechLogo, tagline: "Indian manufacturer of T&M instruments and technical education platforms.", origin: "Indore, India", founded: "1972", specialty: "Test instruments & tech education", about: ["Scientech makes function generators, DMMs, DC power supplies, LCR meters, spectrum analyzers and a wide range of engineering education kits.", "UV Test Solutions distributes Scientech's test instruments across India."] },
  { slug: "joma", name: "JOMA", logo: jomaLogo, tagline: "Reliable industrial test and measurement solutions.", origin: "India", founded: "—", specialty: "Industrial T&M", about: ["JOMA supplies practical, industrial-grade test and measurement instruments for maintenance and production teams.", "UV Test Solutions stocks the JOMA range for Indian industry."] },
  { slug: "embuilt", name: "EMbuilt Technologies", logo: embuiltLogo, tagline: "Indian design house for signal generation and test systems.", origin: "India", founded: "—", specialty: "Signal generation & test systems", about: ["EMbuilt Technologies develops signal generators and specialized test systems engineered and manufactured in India.", "UV Test Solutions distributes the EMbuilt range across India."] },
  { slug: "rion", name: "RION", logo: rionLogo, tagline: "Japanese specialists in sound level meters and vibration measurement.", origin: "Kokubunji, Japan", founded: "1944", specialty: "Sound & vibration measurement", about: ["RION is a globally trusted Japanese manufacturer of Class 1 sound level meters, vibration meters and environmental noise monitoring instruments.", "UV Test Solutions supplies RION NL, VM and NA series across India."] },
  { slug: "vaisala", name: "Vaisala", logo: vaisalaLogo, tagline: "Finnish measurement leader for weather, humidity and industrial environments.", origin: "Vantaa, Finland", founded: "1936", specialty: "Humidity, temperature, environmental", about: ["Vaisala provides world-reference instruments for humidity, temperature, dew point, CO₂ and weather measurement used in life sciences, industry and meteorology.", "UV Test Solutions supplies Vaisala HMP, DMP, GMP and weather sensors in India."] },
];

export const getBrandBySlug = (slug: string) => brands.find((b) => b.slug === slug);
