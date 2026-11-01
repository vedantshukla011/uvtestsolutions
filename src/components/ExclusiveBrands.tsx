import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star, ArrowRight, BadgeCheck, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import micsigLogo from "@/assets/brands/micsig.png";
import dpBannerAsset from "@/assets/micsig-banners/dp.png.asset.json";
import cp2100BannerAsset from "@/assets/micsig-banners/cp2100.png.asset.json";
import acp1000BannerAsset from "@/assets/micsig-banners/acp1000.png.asset.json";
import cpBannerAsset from "@/assets/micsig-banners/cp.jpg.asset.json";
import moipBannerAsset from "@/assets/micsig-banners/moip.png.asset.json";
import rcpBannerAsset from "@/assets/micsig-banners/rcp.png.asset.json";

// Asset pointers serve relative URLs; resolve against the hosted origin like brandsData does.
const hostedAsset = (url: string) => new URL(url, "https://uvtestsolutions.lovable.app").href;

const banners = [
  {
    src: hostedAsset(dpBannerAsset.url),
    alt: "Micsig DP Series High Voltage Differential Probe — up to 300 MHz bandwidth, 7000 Vpk differential voltage, dual-range switching, BNC interface",
    label: "DP Series · High Voltage Differential Probes",
  },
  {
    src: cp2100BannerAsset.url,
    alt: "Micsig CP2100 Series Low Frequency AC/DC Current Probe — 800 kHz to 2.5 MHz bandwidth, switchable 10A/100A ranges",
    label: "CP2100 Series · Low Frequency AC/DC Current Probes",
  },
  {
    src: acp1000BannerAsset.url,
    alt: "Micsig ACP1000 AC Current Probe — 10 Hz to 100 kHz, tests up to 1000 A with 1% accuracy clamp design",
    label: "ACP1000 · AC Current Probes",
  },
  {
    src: cpBannerAsset.url,
    alt: "Micsig CP Series High Frequency AC/DC Current Probe — up to 150 MHz bandwidth, dual-range small and high current probes",
    label: "CP Series · High Frequency AC/DC Current Probes",
  },
  {
    src: moipBannerAsset.url,
    alt: "Micsig MOIP Series SigOFIT Optical-fibre Isolated Probe — up to 180 dB CMRR, 200 MHz to 1 GHz, zero drift and calibration-free",
    label: "MOIP Series · SigOFIT Optical-fibre Isolated Probes",
  },
  {
    src: rcpBannerAsset.url,
    alt: "Micsig RCP Series Rogowski AC Current Probe — up to 30 MHz bandwidth, 30–12000 Apk, slim 1.6 mm coil, customizable diameter",
    label: "RCP Series · Rogowski AC Current Probes",
  },
];

const AUTOPLAY_MS = 6000;

const ExclusiveBrands = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i + dir + banners.length) % banners.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, go]);

  return (
    <section id="exclusive-brands" className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Star className="h-4 w-4" /> Exclusive Brands
          </div>
          <h2 className="text-4xl font-bold mb-3">Exclusive Brand Introduction — Micsig</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Isolated tablet oscilloscopes and probe technology from Shenzhen, introduced in India by UV Test Solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-8 max-w-6xl mx-auto items-stretch">
          {/* Left — banner carousel */}
          <div
            className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-lg group/carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {banners.map((banner, i) => (
              <img
                key={banner.src}
                src={banner.src}
                alt={banner.alt}
                loading={i === 0 ? "eager" : "lazy"}
                aria-hidden={i !== index}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  i === index ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              />
            ))}

            {/* Series caption */}
            <div className="absolute bottom-0 left-0 right-0 px-5 py-3 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white text-sm font-semibold tracking-wide">{banners[index].label}</p>
            </div>

            {/* Controls */}
            <button
              type="button"
              aria-label="Previous Micsig banner"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next Micsig banner"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label={paused ? "Play banner rotation" : "Pause banner rotation"}
              onClick={() => setPaused((p) => !p)}
              className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-background"
            >
              {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 right-4 flex gap-1.5">
              {banners.map((b, i) => (
                <button
                  key={b.src}
                  type="button"
                  aria-label={`Go to banner ${i + 1} of ${banners.length}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right — brand introduction card */}
          <div className="rounded-2xl border border-primary/20 bg-card shadow-lg p-6 md:p-8 flex flex-col">
            <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide mb-4">
              <BadgeCheck className="h-3.5 w-3.5" /> Brand Introduction
            </div>
            <img
              src={micsigLogo}
              alt="Micsig official logo — UV Test Solutions exclusive test & measurement brand"
              loading="lazy"
              className="h-12 w-auto object-contain object-left mb-4"
            />
            <h3 className="text-2xl font-bold mb-3">
              Micsig <span className="text-muted-foreground font-normal">(Shenzhen, China)</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Micsig pioneered the world&apos;s first handheld tablet oscilloscopes and leads in isolated probe
              technology — high-voltage differential, AC/DC current, Rogowski coil and SigOFIT optical-fibre isolated
              probes — for power electronics, inverters, EV and high-voltage laboratories.
            </p>
            <ul className="space-y-1.5 mb-6 text-sm">
              <li className="flex items-start gap-2">
                <Star className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>TO &amp; MDO tablet oscilloscopes with up to 4 GHz bandwidth</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>Differential probes up to 7000 Vpk · current probes up to 1000 A</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>SigOFIT optical-fibre isolated probes with up to 180 dB CMRR</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 mt-auto">
              <Button asChild className="gap-2">
                <Link to="/brands/micsig">
                  Explore Micsig <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <Link to="/contact?product=Micsig%20Probe">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveBrands;
