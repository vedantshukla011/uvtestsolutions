import { Link } from "react-router-dom";
import { Download, Plus, Check, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import productImage from "@/assets/products/jartul-jt6311a.png";

export const newLaunches = [
  {
    name: "Jartul JT6311A DC Electronic Load (150W/150V/30A)",
    model: "JT6311A",
    brief:
      "150W / 30A / 150V programmable DC electronic load with 10µS full-range current rising time and 500KHz synchronized sampling. Ideal for testing switching power supplies, LED drivers, ATE systems, fuses, batteries and adapters.",
    image: productImage,
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
                  <img
                    src={product.image}
                    alt={`${product.name} - programmable DC electronic load`}
                    loading="lazy"
                    className="w-full h-full object-contain p-4 group-hover/img:scale-105 transition-transform"
                  />
                </Link>
                <div className="flex flex-col">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                    Model {product.model}
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
