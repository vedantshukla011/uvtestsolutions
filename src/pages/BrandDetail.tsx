import { Link, useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { getBrandBySlug } from "@/data/brandsData";
import { ArrowLeft, Mail, Package } from "lucide-react";

const BrandDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const brand = slug ? getBrandBySlug(slug) : undefined;

  if (!brand) return <Navigate to="/brands" replace />;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${brand.name} in India — Authorized Distributor | UV Test Solutions`}
        description={`${brand.name} — ${brand.tagline} Supplied across India by UV Test Solutions with genuine warranty and after-sales support.`}
        canonical={`/brands/${brand.slug}`}
        keywords={`${brand.name} India, ${brand.name} distributor India, ${brand.name} price India, ${brand.specialty}, buy ${brand.name} online India, UV Test Solutions`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Brand",
            name: brand.name,
            logo: `https://www.uvtestsolutions.com${brand.logo}`,
            description: brand.tagline,
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.uvtestsolutions.com/" },
              { "@type": "ListItem", position: 2, name: "Brands", item: "https://www.uvtestsolutions.com/brands" },
              { "@type": "ListItem", position: 3, name: brand.name, item: `https://www.uvtestsolutions.com/brands/${brand.slug}` },
            ],
          },
        ]}
      />
      <Header />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/95 via-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
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
                  {brand.name}
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mb-8">
                  {brand.tagline}
                </p>
                <div className="flex flex-wrap gap-6 md:gap-10">
                  <MetaItem label="Origin" value={brand.origin} />
                  <MetaItem label="Founded" value={brand.founded} />
                  <MetaItem label="Specialty" value={brand.specialty} />
                </div>
              </div>
              <div className="bg-background/10 backdrop-blur border border-primary-foreground/20 rounded-xl p-8 flex items-center justify-center min-w-[220px] min-h-[180px]">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
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
                <FactRow label="Founded" value={brand.founded} />
                {brand.parent && <FactRow label="Parent" value={brand.parent} />}
                {brand.popularIn && <FactRow label="Popular in" value={brand.popularIn} />}
                {brand.knownFor && <FactRow label="Known for" value={brand.knownFor} />}
                <FactRow label="Specialty" value={brand.specialty} last />
              </div>
            </div>
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
              <SectionHead title={`Bestselling ${brand.name.split(" ")[0]} Models`} count={`${brand.models.length} MODELS`} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {brand.models.map((m) => (
                  <div
                    key={m.id}
                    className="relative bg-card border border-border rounded-lg p-6 overflow-hidden"
                  >
                    <span className="absolute top-0 left-0 w-1 h-full bg-accent" />
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
                  </div>
                ))}
              </div>
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
    <div className="font-mono text-[11px] tracking-widest uppercase text-primary-foreground/60 mb-1">
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
