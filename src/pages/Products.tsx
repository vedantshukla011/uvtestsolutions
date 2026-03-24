import { useState, useEffect } from "react";
import { productCategories } from "@/data/productsData";
import { categoryProducts } from "@/data/categoryProductsData";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Link, useLocation } from "react-router-dom";
import { Activity, Flame, Ruler, Zap, Wrench, Package, ChevronRight, Search, ArrowLeft, Plus, Check, ExternalLink } from "lucide-react";

const openGoogleImages = (name: string) => {
  window.open(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(name)}`, "_blank");
};

const iconMap: Record<string, React.ElementType> = {
  Activity, Flame, Ruler, Zap, Wrench, Package,
};

const Products = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoryParam = params.get("category");
  const subcategoryParam = params.get("subcategory");

  const [activeCategory, setActiveCategory] = useState<string>(
    categoryParam || productCategories[0].id
  );
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(subcategoryParam);
  const [searchQuery, setSearchQuery] = useState("");
  const { toggleItem, isInCart } = useQuoteCart();

  useEffect(() => {
    if (categoryParam) setActiveCategory(categoryParam);
    if (subcategoryParam) setActiveSubcategory(subcategoryParam);
  }, [categoryParam, subcategoryParam]);

  const currentCategory = productCategories.find((c) => c.id === activeCategory) || productCategories[0];
  const Icon = iconMap[currentCategory.icon] || Package;

  // Get products for current subcategory
  const catProducts = categoryProducts.find((cp) => cp.categoryId === activeCategory);
  const subProducts = activeSubcategory && catProducts
    ? catProducts.subcategories.find((s) => s.subcategory === activeSubcategory)
    : null;

  // Global search
  const globalResults = searchQuery
    ? categoryProducts.flatMap((cp) =>
        cp.subcategories.flatMap((sub) =>
          sub.products
            .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((p) => ({ categoryId: cp.categoryId, subcategory: sub.subcategory, product: p }))
        )
      )
    : [];

  const filteredSubcategories = searchQuery
    ? currentCategory.subcategories.filter((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currentCategory.subcategories;

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

          {/* Search Results */}
          {searchQuery && globalResults.length > 0 ? (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Search Results for "{searchQuery}" ({globalResults.length} products)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {globalResults.slice(0, 40).map(({ product, subcategory }, idx) => {
                  const inCart = isInCart(product.name);
                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between gap-2 p-3 rounded-lg border transition-all duration-200 ${
                        inCart ? "border-accent bg-accent/5" : "border-border/50 hover:border-accent/50 hover:shadow-sm bg-card"
                      }`}
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div
                            className="min-w-0 flex-1 cursor-pointer group/name"
                            onClick={() => openGoogleImages(product.name)}
                          >
                            <p className="text-sm font-medium text-foreground truncate group-hover/name:text-accent transition-colors">
                              {product.name}
                              <ExternalLink className="inline-block ml-1 h-3 w-3 opacity-0 group-hover/name:opacity-100 transition-opacity" />
                            </p>
                            <p className="text-xs text-muted-foreground">{subcategory}</p>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p>{product.name}</p>
                        </TooltipContent>
                      </Tooltip>
                      <button
                        onClick={() => toggleItem(product.name)}
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          inCart
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent"
                        }`}
                      >
                        {inCart ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : searchQuery && globalResults.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found for "{searchQuery}"</p>
              <p className="text-sm text-muted-foreground mt-2">
                Can't find what you need?{" "}
                <Link to="/contact" className="text-accent underline underline-offset-4">Contact us</Link>
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
                        onClick={() => { setActiveCategory(cat.id); setActiveSubcategory(null); }}
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

              {/* Main Content */}
              <div className="flex-1">
                {activeSubcategory && subProducts ? (
                  /* Product Listing for Subcategory */
                  <div>
                    <button
                      onClick={() => setActiveSubcategory(null)}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back to {currentCategory.name}
                    </button>

                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">{activeSubcategory}</h2>
                        <p className="text-sm text-muted-foreground">
                          {subProducts.products.length} products available
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                      {subProducts.products.map((product, idx) => {
                        const inCart = isInCart(product.name);
                        return (
                          <div
                            key={idx}
                            className={`flex items-center justify-between gap-3 p-4 rounded-lg border transition-all duration-200 ${
                              inCart ? "border-accent bg-accent/5 shadow-sm" : "border-border/50 hover:border-accent/50 hover:shadow-sm bg-card"
                            }`}
                          >
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span
                                  className="text-sm font-medium text-foreground truncate flex-1 cursor-pointer hover:text-accent transition-colors"
                                  onClick={() => openGoogleImages(product.name)}
                                >
                                  {product.name}
                                  <ExternalLink className="inline-block ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </span>
                              </TooltipTrigger>
                              <TooltipContent side="top" className="max-w-xs">
                                <p>{product.name}</p>
                              </TooltipContent>
                            </Tooltip>
                            <button
                              onClick={() => toggleItem(product.name)}
                              className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                                inCart
                                  ? "bg-accent text-accent-foreground scale-105"
                                  : "bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent"
                              }`}
                              title={inCart ? "Remove from quote" : "Add to quote"}
                            >
                              {inCart ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  /* Subcategories Grid */
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">{currentCategory.name}</h2>
                        <p className="text-sm text-muted-foreground">
                          {currentCategory.subcategories.length} subcategories
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                      {filteredSubcategories.map((sub, idx) => {
                        const productCount = catProducts?.subcategories.find(s => s.subcategory === sub)?.products.length || 0;
                        return (
                          <button
                            key={idx}
                            onClick={() => setActiveSubcategory(sub)}
                            className="group flex items-center justify-between p-4 rounded-lg border border-border/50 hover:border-accent/50 hover:shadow-md bg-card transition-all duration-200 text-left"
                          >
                            <div>
                              <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                                {sub}
                              </span>
                              <p className="text-xs text-muted-foreground mt-1">
                                {productCount} product{productCount !== 1 ? "s" : ""}
                              </p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-12 p-6 rounded-xl bg-muted/50 border border-border/50 text-center">
                      <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
                      <Link to="/contact">
                        <Button>Request a Custom Quote</Button>
                      </Link>
                    </div>
                  </div>
                )}
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
