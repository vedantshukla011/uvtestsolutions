import type { BrandProduct } from "./brandsData";
import moipImage from "@/assets/products/micsig/moip.png.asset.json";
import tipImage from "@/assets/products/micsig/tip.png.asset.json";
import cpHighImage from "@/assets/products/micsig/cp-high.png.asset.json";
import cpHighCompactImage from "@/assets/products/micsig/cp-high2.png.asset.json";
import cpLowImage from "@/assets/products/micsig/cp-low.png.asset.json";
import rcpImage from "@/assets/products/micsig/rcp.png.asset.json";
import dpImage from "@/assets/products/micsig/dp.png.asset.json";

// The CDN serves these immutable assets on the published host; use its absolute
// address so product photos also render in the local Vite preview.
const assetUrl = (path: string) => new URL(path, "https://uvtestsolutions.lovable.app").href;

// Prices/specifications: Website_price_probes.xlsx supplied by UV Test Solutions.
// Photos: official micsig.com product galleries, cached as site assets.
export const micsigProbeProducts: BrandProduct[] = [
  { model: "MOIP1000P", category: "SigOFIT optical-fibre isolated probe", description: "1GHz, 60kVpk; 2m fiber cable, std. with OP50-1G & OP2000-1G tips, BNC interface", priceInr: 1499850, image: moipImage.url },
  { model: "MOIP500P", category: "SigOFIT optical-fibre isolated probe", description: "500MHz, 60kVpk; 2m fiber cable, std. with OP50-5 & OP2000-5 tips, BNC interface", priceInr: 899850, image: moipImage.url },
  { model: "MOIP350P", category: "SigOFIT optical-fibre isolated probe", description: "350MHz, 60kVpk; 2m fiber cable, std. with OP20-3 & OP1000-3 tips, BNC interface", priceInr: 478350, image: moipImage.url },
  { model: "MOIP200P", category: "SigOFIT optical-fibre isolated probe", description: "200MHz, 60kVpk; 2m fiber cable, std. with OP20-2 tip, BNC interface", priceInr: 299850, image: moipImage.url },
  { model: "OP10-1G, OP20-1G, OP50-1G, OP100-1G", category: "SigOFIT attenuator tip", description: "Range: <500V", priceInr: 44850, image: tipImage.url },
  { model: "OP1000-1G, OP2000-1G", category: "SigOFIT attenuator tip", description: "Range: ≤500V to <2500V", priceInr: 47850, image: tipImage.url },
  { model: "OP5000-1G, OP10000-1G", category: "SigOFIT attenuator tip", description: "Range: ≤2500V to ≤5000V", priceInr: 65850, image: tipImage.url },
  { model: "OP10-5, OP20-5, OP50-5, OP100-5, OP200-5, OP500-5", category: "SigOFIT attenuator tip", description: "Range: <500V", priceInr: 25350, image: tipImage.url },
  { model: "OP1000-5, OP2000-5", category: "SigOFIT attenuator tip", description: "Range: ≤500V to <2500V", priceInr: 31350, image: tipImage.url },
  { model: "OP5000-5, OP10000-5", category: "SigOFIT attenuator tip", description: "Range: ≤2500V to ≤5000V", priceInr: 47850, image: tipImage.url },
  { model: "OP10-3, OP20-3, OP50-3, OP100-3, OP200-3, OP500-3", category: "SigOFIT attenuator tip", description: "Range: <500V", priceInr: 19350, image: tipImage.url },
  { model: "OP1000-3, OP2000-3", category: "SigOFIT attenuator tip", description: "Range: ≤500V to <2500V", priceInr: 22350, image: tipImage.url },
  { model: "OP5000-3, OP10000-3", category: "SigOFIT attenuator tip", description: "Range: ≤2500V to ≤5000V", priceInr: 39750, image: tipImage.url },
  { model: "CP3008", category: "High-frequency AC/DC current probe", description: "8MHz; 50Arms/300Arms", priceInr: 179850, image: cpHighImage.url },
  { model: "CP3005", category: "High-frequency AC/DC current probe", description: "5MHz; 50Arms/300Arms", priceInr: 119850, image: cpHighImage.url },
  { model: "CP1510", category: "High-frequency AC/DC current probe", description: "10MHz; 30Arms/150Arms", priceInr: 115350, image: cpHighImage.url },
  { model: "CP1003B", category: "High-frequency AC/DC current probe", description: "100MHz; 5Arms/30Arms", priceInr: 85350, image: cpHighCompactImage.url },
  { model: "CP503B", category: "High-frequency AC/DC current probe", description: "50MHz; 5Arms/30Arms", priceInr: 74850, image: cpHighCompactImage.url },
  { model: "CP2100B", category: "Low-frequency AC/DC current probe", description: "2.5MHz; 10Apk/100Apk; USB", priceInr: 47850, image: cpLowImage.url },
  { model: "CP2100A", category: "Low-frequency AC/DC current probe", description: "800kHz; 10Apk/100Apk; USB", priceInr: 38850, image: cpLowImage.url },
  { model: "RCP12000XS", category: "Rogowski AC current probe", description: "2Hz - 30MHz, 12000Apk, 0.5mV/A (2000X)", priceInr: 85350, image: rcpImage.url },
  { model: "RCP6000XS", category: "Rogowski AC current probe", description: "2Hz - 30MHz, 6000Apk, 1mV/A (1000X)", priceInr: 85350, image: rcpImage.url },
  { model: "RCP3000XS", category: "Rogowski AC current probe", description: "3Hz - 30MHz, 3000Apk, 2mV/A (500X)", priceInr: 85350, image: rcpImage.url },
  { model: "RCP1200XS", category: "Rogowski AC current probe", description: "12Hz - 30MHz, 1200Apk, 5mV/A (200X)", priceInr: 85350, image: rcpImage.url },
  { model: "RCP600XS", category: "Rogowski AC current probe", description: "10Hz - 30MHz, 600Apk, 10mV/A (100X)", priceInr: 85350, image: rcpImage.url },
  { model: "RCP300XS", category: "Rogowski AC current probe", description: "10Hz - 30MHz, 300Apk, 20mV/A (50X)", priceInr: 85350, image: rcpImage.url },
  { model: "RCP120XS", category: "Rogowski AC current probe", description: "34Hz - 30MHz, 120Apk, 50mV/A (20X)", priceInr: 85350, image: rcpImage.url },
  { model: "RCP60XS", category: "Rogowski AC current probe", description: "85Hz - 30MHz, 60Apk, 100mV/A (10X)", priceInr: 85350, image: rcpImage.url },
  { model: "DP7002", category: "High-voltage differential probe", description: "7000Vpk; 200MHz; 100X/1000X", priceInr: 76350, image: dpImage.url },
  { model: "DP7000", category: "High-voltage differential probe", description: "7000Vpk; 100MHz; 100X/1000X", priceInr: 70350, image: dpImage.url },
  { model: "DP3002", category: "High-voltage differential probe", description: "3000Vpk; 200MHz; 50X/500X", priceInr: 40350, image: dpImage.url },
  { model: "DP3000", category: "High-voltage differential probe", description: "3000Vpk; 100MHz; 50X/500X", priceInr: 28350, image: dpImage.url },
  { model: "DP1502", category: "High-voltage differential probe", description: "1500Vpk; 200MHz; 50X/500X", priceInr: 40350, image: dpImage.url },
  { model: "DP1500", category: "High-voltage differential probe", description: "1500Vpk; 100MHz; 50X/500X", priceInr: 26850, image: dpImage.url },
  { model: "DP702", category: "High-voltage differential probe", description: "700Vpk; 200MHz; 20X/200X", priceInr: 40350, image: dpImage.url },
  { model: "DP700", category: "High-voltage differential probe", description: "700Vpk; 100MHz; 20X/200X", priceInr: 25350, image: dpImage.url },
];
