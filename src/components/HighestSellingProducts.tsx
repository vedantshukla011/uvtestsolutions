import { useState } from "react";
import { highestSellingProducts } from "@/data/highestSellingData";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import { Plus, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const HighestSellingProducts = () => {
  const { toggleItem, isInCart } = useQuoteCart();
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll
    ? highestSellingProducts
    : highestSellingProducts.slice(0, 12);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Highest Selling Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our most popular instruments trusted by professionals across India
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {visibleProducts.map((product, idx) => {
            const inCart = isInCart(product.name);
            return (
              <div
                key={idx}
                className={`group relative rounded-xl border overflow-hidden transition-all duration-200 hover:shadow-md ${
                  inCart
                    ? "border-accent bg-accent/5"
                    : "border-border/50 hover:border-accent/30 bg-card"
                }`}
              >
                <div className="aspect-square bg-muted/30 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs font-medium text-foreground line-clamp-2 min-h-[2rem] leading-tight">
                    {product.name}
                  </p>
                  <button
                    onClick={() => toggleItem(product.name)}
                    className={`mt-2 w-full flex items-center justify-center gap-1.5 text-xs font-medium py-1.5 rounded-lg transition-all ${
                      inCart
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent"
                    }`}
                  >
                    {inCart ? (
                      <>
                        <Check className="h-3 w-3" /> Added
                      </>
                    ) : (
                      <>
                        <Plus className="h-3 w-3" /> Add to Quote
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {highestSellingProducts.length > 12 && (
          <div className="text-center mt-10">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="gap-2"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  View All {highestSellingProducts.length} Products{" "}
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HighestSellingProducts;
