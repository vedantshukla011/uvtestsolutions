import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { brands } from "@/data/brandsData";
import { ArrowRight } from "lucide-react";

const Brands = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Brands We Distribute in India | UV Test Solutions"
        description="Authorized Indian distributor of Fluke, Keysight, Tektronix, Weller, Metrel, HAKKO, RIGOL, SIGLENT, Mitutoyo, ITECH and more — genuine test & measurement brands."
        canonical="/brands"
        keywords="test and measurement brands India, Fluke India, Keysight India, Tektronix India, Weller India, Metrel India, HAKKO India, RIGOL India, SIGLENT India, Mitutoyo India, authorized distributor"
      />
      <Header />
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-sm font-mono tracking-widest text-accent uppercase mb-3">
              Our Brand Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Brands We Distribute Across India
            </h1>
            <p className="text-lg text-muted-foreground">
              UV Test Solutions is an authorized Indian partner for leading test &amp;
              measurement manufacturers — from precision metrology and soldering to
              oscilloscopes, power electronics and EMC test.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((b) => (
              <Link
                key={b.slug}
                to={`/brands/${b.slug}`}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all flex flex-col"
              >
                <div className="h-20 flex items-center justify-center mb-4 bg-muted/30 rounded">
                  <img
                    src={b.logo}
                    alt={`${b.name} logo`}
                    className="max-h-16 max-w-[140px] object-contain transition-transform group-hover:scale-105"
                  />
                </div>
                <h2 className="text-lg font-semibold mb-1.5">{b.name}</h2>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                  {b.tagline}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                  View brand <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Brands;
