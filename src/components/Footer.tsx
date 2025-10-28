import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              MeasureTech
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Leading provider of precision electronic measuring instruments for industrial and laboratory applications.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Linkedin className="w-4 h-4 text-accent" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Twitter className="w-4 h-4 text-accent" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Facebook className="w-4 h-4 text-accent" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Products</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Services</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Technical Support</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Warranty Info</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>123 Tech Avenue, Industrial Park, City, State 12345</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>info@yourcompany.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 MeasureTech. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
