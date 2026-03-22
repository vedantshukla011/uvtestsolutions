import { useState } from "react";
import { productCategories } from "@/data/productsData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Activity, Flame, Ruler, Zap, Wrench, Package, ChevronRight, Search } from "lucide-react";
import { useEffect } from "react";

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Flame,
  Ruler,
  Zap,
  Wrench,
  Package,
};

const Products = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoryParam = params.get("category");

  const [activeCategory, setActiveCategory] = useState<string>(
    categoryParam || productCategories[0].id
  );
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const currentCategory = productCategories.find((c) => c.id === activeCategory) || productCategories[0];
  const Icon = iconMap[currentCategory.icon] || Package;

  const filteredSubcategories = searchQuery
    ? currentCategory.subcategories.filter((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currentCategory.subcategories;

  // Global search across all categories
  const globalResults = searchQuery
    ? productCategories.flatMap((cat) =>
        cat.subcategories
          .filter((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((s) => ({ category: cat, subcategory: s }))
      )
    : [];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Products - Complete Range of Tools & Instruments"
        description="Browse our complete product range: Testing & Diagnostics, Soldering Solutions, Precision Measuring, Power Tools, Hand Tools, and more."
        canonical="/products"
        keywords="test equipment, soldering, precision measuring, power tools, hand tools, industrial tools India"
      />
      <Header />
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              Comprehensive range of professional tools and instruments for every industrial need
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Search */}
          <div className="relative max-w-md mb-10">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products across all categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Show global results when searching */}
          {searchQuery && globalResults.length > 0 ? (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Search Results for "{searchQuery}"
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {globalResults.map(({ category, subcategory }, idx) => {
                  const CatIcon = iconMap[category.icon] || Package;
                  return (
                    <Link
                      key={idx}
                      to={`/contact?product=${encodeURIComponent(subcategory)}`}
                      className="group flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-accent/50 hover:shadow-md bg-card transition-all duration-200"
                    >
                      <div className="w-9 h-9 rounded-md bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                        <CatIcon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                          {subcategory}
                        </p>
                        <p className="text-xs text-muted-foreground">{category.name}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ) : searchQuery && globalResults.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found for "{searchQuery}"</p>
              <p className="text-sm text-muted-foreground mt-2">
                Can't find what you need?{" "}
                <Link to="/contact" className="text-accent underline underline-offset-4">
                  Contact us
                </Link>
              </p>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Category Sidebar */}
              <aside className="lg:w-72 shrink-0">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Categories
                </h3>
                <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                  {productCategories.map((cat) => {
                    const CatIcon = iconMap[cat.icon] || Package;
                    const isActive = cat.id === activeCategory;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 whitespace-nowrap ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "bg-card hover:bg-muted border border-border/50 text-foreground"
                        }`}
                      >
                        <CatIcon className="w-5 h-5 shrink-0" />
                        <span className="font-medium text-sm">{cat.name}</span>
                        <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                          isActive ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}>
                          {cat.subcategories.length}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </aside>

              {/* Subcategories Grid */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{currentCategory.name}</h2>
                    <p className="text-sm text-muted-foreground">
                      {currentCategory.subcategories.length} products available
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredSubcategories.map((sub, idx) => (
                    <Link
                      key={idx}
                      to={`/contact?product=${encodeURIComponent(sub)}`}
                      className="group flex items-center justify-between p-4 rounded-lg border border-border/50 hover:border-accent/50 hover:shadow-md bg-card transition-all duration-200"
                    >
                      <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {sub}
                      </span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-12 p-6 rounded-xl bg-muted/50 border border-border/50 text-center">
                  <p className="text-muted-foreground mb-4">
                    Can't find what you're looking for?
                  </p>
                  <Link to="/contact">
                    <Button>Request a Custom Quote</Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
