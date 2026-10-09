import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { brands } from "@/data/brandsData";
import { getBrandsIndexJsonLd } from "@/lib/brandSeo";
import { ArrowRight } from "lucide-react";

const Brands = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Test & Measurement Brands in India — Authorized Distributor | UV Test Solutions"
        description="Authorized Indian distributor of Fluke, Keysight, Tektronix, Yokogawa, Mitutoyo, Siglent, RIGOL, ITECH, Weller, HAKKO, Metrel and more — genuine instruments with warranty and calibration support."
        canonical="/brands"
        keywords="test and measurement brands India, Fluke distributor India, Keysight India, Tektronix India, Yokogawa India, Weller India, Metrel India, HAKKO India, RIGOL India, SIGLENT India, Mitutoyo India, ITECH India, UNI-T India, authorized distributor test equipment India"
        jsonLd={getBrandsIndexJsonLd(brands)}
      />
      <Header />
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground font-medium">Brands</li>
            </ol>
          </nav>

          <div className="max-w-3xl mb-12">
            <div className="text-sm font-mono tracking-widest text-accent uppercase mb-3">
              Our Brand Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Test &amp; Measurement Brands We Distribute Across India
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              UV Test Solutions is an Indian partner for {brands.length} leading test
              &amp; measurement manufacturers — covering oscilloscopes, digital multimeters,
              DC power supplies and electronic loads, spectrum and power analyzers, precision
              metrology, environmental measurement, soldering and rework, and EMC/safety test.
            </p>
            <p className="text-muted-foreground">
              Every brand page below lists the manufacturer's product range, bestselling models
              and indicative Indian pricing, so you can compare specifications and request a
              quote in one place. We supply pan-India to R&amp;D labs, EV and power-electronics
              manufacturers, universities, electrical contractors and calibration labs — with
              genuine warranty, calibration and after-sales service.
            </p>
          </div>

          <h2 className="sr-only">All brands distributed by UV Test Solutions</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0">
            {brands.map((b) => (
              <li key={b.slug}>
                <Link
                  to={`/brands/${b.slug}`}
                  title={`${b.name} — distributor in India`}
                  className="group h-full bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all flex flex-col"
                >
                  <div className={`h-20 flex items-center justify-center mb-4 rounded ${b.slug === "wocen" ? "bg-primary" : "bg-muted/30"}`}>
                    <img
                      src={b.logo}
                      alt={`${b.name} logo — ${b.specialty} supplied in India by UV Test Solutions`}
                      width={140}
                      height={64}
                      loading="lazy"
                      className="max-h-16 max-w-[140px] object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">
                    {b.name} <span className="sr-only">distributor in India</span>
                  </h3>
                  {b.authorisedDistributor && (
                    <p className="text-xs font-semibold text-primary mb-2">Authorised Distributor</p>
                  )}
                  <div className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground mb-2">
                    {b.origin.split(",").pop()?.trim()} · {b.specialty}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                    {b.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                    View {b.name.split(" ")[0]} range <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Brands;
