import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
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
          <div className="hidden md:flex items-center gap-4">
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
                  <a href="#about" className="cursor-pointer">
                    About Us
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#products" className="cursor-pointer">
                    Products
                  </a>
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
