import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MeasureTech
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Products
            </a>
            <a href="#solutions" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Solutions
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors">
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
