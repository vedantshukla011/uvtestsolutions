import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Flame, Ruler, Zap, Wrench, Package, ArrowRight, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { productCategories } from "@/data/productsData";

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Flame,
  Ruler,
  Zap,
  Wrench,
  Package,
};

const ProductCategories = () => {
  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Product Range</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive range of professional tools and instruments across all major categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {productCategories.map((category) => {
            const Icon = iconMap[category.icon] || Package;
            return (
              <Card
                key={category.id}
                className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-accent/30"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl mb-2">{category.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {category.subcategories.slice(0, 4).join(" • ")} & more
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Link to={`/products?category=${category.id}`}>
                      <Button
                        variant="ghost"
                        className="group/btn p-0 h-auto font-semibold text-primary hover:text-accent hover:bg-transparent"
                      >
                        Explore {category.subcategories.length} Products
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* New product line: EMCSOSIN Surge Generators */}
          <Card className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 border-accent/40 bg-gradient-to-br from-accent/5 to-primary/5">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <ShieldAlert className="w-6 h-6 text-accent" />
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wide">New</span>
              </div>
              <CardTitle className="text-xl mb-2">EMCSOSIN Surge Generators</CardTitle>
              <p className="text-sm text-muted-foreground">
                IEC 61000-4-5 • Multi-Function • Three-Phase • Telecom • SPD
              </p>
            </CardHeader>
            <CardContent>
              <Link to="/products/emcsosin-surge-generators">
                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto font-semibold text-primary hover:text-accent hover:bg-transparent"
                >
                  Explore EMC Surge Range
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button size="lg" variant="default">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
