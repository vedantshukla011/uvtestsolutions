import { Link, useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { getBrandBySlug, brands as allBrands } from "@/data/brandsData";
import {
  brandTitle,
  brandDescription,
  brandKeywords,
  getBrandDetailJsonLd,
  getRelatedCategoryLinks,
  getRelatedBrands,
} from "@/lib/brandSeo";
import { ArrowLeft, Mail, Package } from "lucide-react";

const BrandDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const brand = slug ? getBrandBySlug(slug) : undefined;

  if (!brand) return <Navigate to="/brands" replace />;

  const short = brand.name.split(" ")[0];
  const categoryLinks = getRelatedCategoryLinks(brand);
  const relatedBrands = getRelatedBrands(brand, allBrands);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={brandTitle(brand)}
        description={brandDescription(brand)}
        canonical={`/brands/${brand.slug}`}
        keywords={brandKeywords(brand)}
        jsonLd={getBrandDetailJsonLd(brand)}
      />
      <Header />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/95 via-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-primary-foreground/80">
                <li>
                  <Link to="/" className="hover:text-primary-foreground">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link to="/brands" className="hover:text-primary-foreground">
                    Brands
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-primary-foreground font-medium">{brand.name}</li>
              </ol>
            </nav>

            <Link
              to="/brands"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> All Brands
            </Link>

            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="text-xs font-mono tracking-widest uppercase text-accent mb-4">
                  ── Authorized Distributor — India
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  {brand.slug === "wocen" ? "Wocen Power Supplies — Authorised Distributor in India" : `${short} in India — Authorized Distributor & Price List`}
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mb-4">
                  {brand.tagline}
                </p>
                <p className="text-primary-foreground/80 max-w-2xl mb-8">
                  Buy genuine {brand.name} {brand.specialty.toLowerCase()} in India from UV Test
                  Solutions — pan-India supply with warranty, calibration and application support.
                </p>
                <div className="flex flex-wrap gap-6 md:gap-10">
                  <MetaItem label="Origin" value={brand.origin} />
                  {brand.founded && <MetaItem label="Founded" value={brand.founded} />}
                  <MetaItem label="Specialty" value={brand.specialty} />
                </div>
              </div>
              <div className="bg-background/10 backdrop-blur border border-primary-foreground/20 rounded-xl p-8 flex items-center justify-center min-w-[220px] min-h-[180px]">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo — ${brand.specialty} distributor in India`}
                  width={200}
                  height={96}
                  className="max-h-24 max-w-[200px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About + Fact card */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-16 items-start">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  About {brand.name.split(" ")[0]}
                </h2>
                {brand.about.map((p, i) => (
                  <p key={i} className="text-base md:text-lg leading-relaxed text-foreground/85 mb-4">
                    {p}
                  </p>
                ))}
              </div>
              <div className="bg-card border border-border rounded-lg p-6 md:p-7">
                <FactRow label="Headquarters" value={brand.origin} />
                {brand.founded && <FactRow label="Founded" value={brand.founded} />}
                {brand.parent && <FactRow label="Parent" value={brand.parent} />}
                {brand.popularIn && <FactRow label="Popular in" value={brand.popularIn} />}
                {brand.knownFor && <FactRow label="Known for" value={brand.knownFor} />}
                <FactRow label="Specialty" value={brand.specialty} last />
              </div>
            </div>
          </div>
        </section>

        {/* Buy in India / related product categories */}
        <section className="py-12 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-3">
              Buying {short} in India — price, warranty and support
            </h2>
            <p className="text-muted-foreground max-w-3xl mb-6 leading-relaxed">
              UV Test Solutions supplies {brand.name} {brand.specialty.toLowerCase()} to customers
              in Delhi NCR, Noida, Gurugram, Bengaluru, Pune, Chennai, Hyderabad and Ahmedabad —
              with GST invoicing, manufacturer warranty, NABL-traceable calibration on request and
              on-site application support. Share your model number or application and we will send
              you a {short} quote with current pricing and lead time.
            </p>
            {brand.slug === "micsig" && (
              <p className="mb-6">
                <Link to="/blog/micsig-probes-price-india" className="text-primary font-medium underline underline-offset-4">
                  Micsig probes price list &amp; selection guide — differential, current, Rogowski and SigOFIT
                </Link>
              </p>
            )}
            {brand.slug === "wocen" && (
              <p className="mb-6">
                <Link to="/blog/wocen-power-supply-india" className="text-primary font-medium underline underline-offset-4">
                  Wocen power supply guide — which bidirectional or programmable DC supply fits your test
                </Link>
              </p>
            )}
            {categoryLinks.length > 0 && (
              <>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Shop {short}-related product categories
                </h3>
                <ul className="flex flex-wrap gap-2 list-none p-0">
                  {categoryLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        to={l.href}
                        className="inline-block text-sm px-3 py-1.5 rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>



        {/* Categories */}
        {brand.categories && brand.categories.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHead title="Product Range" count={`${brand.categories.length} CATEGORIES`} />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {brand.categories.map((c) => (
                  <div
                    key={c.title}
                    className="bg-card border border-border rounded-lg p-5 flex gap-4 items-start hover:border-primary hover:-translate-y-0.5 transition-all"
                  >
                    <div className="w-10 h-10 rounded-md bg-accent/15 text-accent flex items-center justify-center shrink-0">
                      <Package className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{c.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bestselling Models */}
        {brand.models && brand.models.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHead title={brand.slug === "wocen" ? "Featured Wocen Power Supplies" : `Bestselling ${brand.name.split(" ")[0]} Models`} count={`${brand.models.length} MODELS`} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {brand.models.map((m) => (
                  <div
                    key={m.id}
                    className="relative bg-card border border-border rounded-lg p-6 overflow-hidden"
                  >
                    <span className="absolute top-0 left-0 w-1 h-full bg-accent" />
                    {m.image && (
                      <div className="h-48 bg-background mb-5 flex items-center justify-center">
                        <img src={m.image} alt={`${brand.name} ${m.id} — ${m.title}`} loading="lazy" width={320} height={192} className="max-h-full max-w-full object-contain" />
                      </div>
                    )}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-10 h-10 rounded-md bg-accent/15 text-accent flex items-center justify-center">
                        <Package className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-primary text-primary-foreground tracking-wide">
                        {m.id}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{m.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {m.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] px-2 py-1 rounded bg-accent/10 text-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {brand.slug === "wocen" && (
                      <Button asChild variant="outline" size="sm" className="mt-5">
                        <Link to="/contact"><Mail className="w-4 h-4" /> Request Quote</Link>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Products with pricing */}
        {brand.products && brand.products.length > 0 && (
          <section className="py-16 bg-muted/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHead
                title={`${brand.name.split(" ")[0]} Products & Indicative Pricing`}
                count={`${brand.products.length} PRODUCTS`}
              />
              <p className="text-sm text-muted-foreground mb-6 -mt-2">
                Prices are indicative in INR (ex-works, exclusive of GST). {brand.slug === "micsig" ? "Micsig probes are in stock within 2–4 weeks. Contact us for a confirmed quote and delivery date." : "Contact us for the latest quote, applicable discounts and lead time."}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {brand.products.map((p) => (
                  <div
                    key={p.model}
                    className="bg-card border border-border rounded-lg overflow-hidden flex flex-col hover:border-primary hover:shadow-md transition-all"
                  >
                    <div className="h-40 bg-white flex items-center justify-center p-3 border-b border-border">
                      <img
                        src={p.image}
                        alt={`${brand.name} ${p.model} — ${p.description}`}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="font-mono text-[11px] text-muted-foreground tracking-wide uppercase mb-1">
                        {p.category}
                      </div>
                      <h3 className="font-semibold text-base mb-1">{p.model}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        {p.description}
                      </p>
                      {brand.slug === "micsig" && (
                        <p className="text-xs font-medium text-primary mb-3">In stock within 2–4 weeks</p>
                      )}
                      <div className="flex items-center justify-between border-t border-border pt-3">
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                            Price (Excl. GST)
                          </div>
                          <div className="text-base font-bold text-primary">
                            ₹{p.priceInr.toLocaleString("en-IN")}
                          </div>
                        </div>
                        <Button asChild size="sm" variant="outline">
                          <Link to="/contact">Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related brands — internal linking */}
        {relatedBrands.length > 0 && (
          <section className="py-14 border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-semibold mb-2">
                Brands similar to {short} we also distribute
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Comparing options? These manufacturers cover overlapping instrument ranges in India.
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 list-none p-0">
                {relatedBrands.map((rb) => (
                  <li key={rb.slug}>
                    <Link
                      to={`/brands/${rb.slug}`}
                      title={`${rb.name} distributor in India`}
                      className="h-full flex flex-col items-center justify-center gap-2 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                    >
                      <img
                        src={rb.logo}
                        alt={`${rb.name} logo`}
                        width={90}
                        height={40}
                        loading="lazy"
                        className="max-h-10 max-w-[90px] object-contain"
                      />
                      <span className="text-xs text-center text-muted-foreground">{rb.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* CTA */}

        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-14">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Sourcing {brand.name.split(" ")[0]} instruments for your lab or line?
              </h2>
              <p className="text-primary-foreground/85 max-w-xl">
                UV Test Solutions supplies genuine {brand.name} equipment across India — with
                calibration, application support and after-sales service.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  <Mail className="w-4 h-4" /> Get a Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="hero-outline">
                <Link to="/brands">View All Brands</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const MetaItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="font-mono text-[11px] tracking-widest uppercase text-primary-foreground/90 mb-1">
      {label}
    </div>
    <div className="text-sm font-semibold">{value}</div>
  </div>
);

const FactRow = ({ label, value, last }: { label: string; value: string; last?: boolean }) => (
  <div
    className={`flex justify-between gap-4 py-3 text-sm ${
      last ? "" : "border-b border-border"
    }`}
  >
    <span className="text-muted-foreground">{label}</span>
    <span className="font-mono text-right">{value}</span>
  </div>
);

const SectionHead = ({ title, count }: { title: string; count: string }) => (
  <div className="flex items-baseline justify-between border-b border-border pb-4 mb-6">
    <h2 className="text-2xl font-semibold">{title}</h2>
    <span className="font-mono text-xs text-muted-foreground">{count}</span>
  </div>
);

export default BrandDetail;
