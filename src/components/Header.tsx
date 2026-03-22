import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, ChevronRight, Activity, Flame, Ruler, Zap, Wrench, Package } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { productCategories } from "@/data/productsData";

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Flame,
  Ruler,
  Zap,
  Wrench,
  Package,
};

const Header = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeHoverCat, setActiveHoverCat] = useState<string>(productCategories[0].id);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
    }, 200);
  };

  const activeCat = productCategories.find((c) => c.id === activeHoverCat) || productCategories[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              UV TEST SOLUTIONS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {/* Products Mega Menu */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/products">
                <Button variant="ghost" size="sm" className="gap-1 text-sm font-medium">
                  Products
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                </Button>
              </Link>

              {productsOpen && (
                <div className="absolute top-full right-0 mt-1 w-[700px] bg-popover border border-border rounded-lg shadow-lg p-0 overflow-hidden">
                  <div className="flex">
                    {/* Categories List */}
                    <div className="w-56 border-r border-border bg-muted/30 py-2">
                      {productCategories.map((cat) => {
                        const CatIcon = iconMap[cat.icon] || Package;
                        const isActive = cat.id === activeHoverCat;
                        return (
                          <Link
                            key={cat.id}
                            to={`/products?category=${cat.id}`}
                            onMouseEnter={() => setActiveHoverCat(cat.id)}
                            onClick={() => setProductsOpen(false)}
                            className={`flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                              isActive
                                ? "bg-accent/10 text-accent font-medium"
                                : "text-foreground hover:bg-muted"
                            }`}
                          >
                            <CatIcon className="w-4 h-4 shrink-0" />
                            <span className="flex-1">{cat.name}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
                          </Link>
                        );
                      })}
                    </div>

                    {/* Subcategories */}
                    <div className="flex-1 p-4">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        {activeCat.name}
                      </h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 max-h-80 overflow-y-auto">
                        {activeCat.subcategories.map((sub, idx) => (
                          <Link
                            key={idx}
                            to={`/contact?product=${encodeURIComponent(sub)}`}
                            onClick={() => setProductsOpen(false)}
                            className="text-sm py-1.5 text-foreground hover:text-accent transition-colors truncate"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-t border-border">
                        <Link
                          to={`/products?category=${activeCat.id}`}
                          onClick={() => setProductsOpen(false)}
                          className="text-sm font-medium text-accent hover:underline underline-offset-4"
                        >
                          View all {activeCat.name} →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link to="/contact">
              <Button variant="default" size="sm">
                Get Quote
              </Button>
            </Link>

            {/* Hamburger Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-background">
                <DropdownMenuItem asChild>
                  <Link to="/about" className="cursor-pointer">
                    About Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/customers" className="cursor-pointer">
                    Our Customers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products-at-gem" className="cursor-pointer">
                    Products@GeM
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/contact" className="cursor-pointer">
                    Contact Us
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <Link to="/contact">
              <Button variant="default" size="sm">
                Get Quote
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-background">
                <DropdownMenuItem asChild>
                  <Link to="/about" className="cursor-pointer">
                    About Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/customers" className="cursor-pointer">
                    Our Customers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products-at-gem" className="cursor-pointer">
                    Products@GeM
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/contact" className="cursor-pointer">
                    Contact Us
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
