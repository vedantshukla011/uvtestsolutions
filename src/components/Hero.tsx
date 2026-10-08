import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Award } from "lucide-react";
import heroImage from "@/assets/hero-instruments.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Electronic test and measuring instruments"
          width={1920}
          height={1080}
          fetchpriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6 animate-fade-in">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Precision Measurement Solutions</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            Advanced Electronic
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Measuring Instruments
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in leading-relaxed max-w-2xl">
            Industry-leading precision instruments for testing, measurement, and analysis. 
            Trusted by professionals worldwide for accuracy and reliability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/contact">
              <Button variant="hero-outline" size="lg">
                Contact Sales
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in">
            <div className="group flex items-center gap-3 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 hover:bg-background/95">
              <div className="p-3 rounded-lg bg-primary/20 transition-all duration-300 group-hover:bg-primary/30 group-hover:scale-110">
                <Shield className="w-6 h-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">ISO 9001</div>
                <div className="text-sm text-muted-foreground font-medium">Certified</div>
              </div>
            </div>
            <div className="group flex items-center gap-3 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 hover:bg-background/95">
              <div className="p-3 rounded-lg bg-primary/20 transition-all duration-300 group-hover:bg-primary/30 group-hover:scale-110">
                <Award className="w-6 h-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">15+ Years</div>
                <div className="text-sm text-muted-foreground font-medium">Experience</div>
              </div>
            </div>
            <div className="group flex items-center gap-3 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 hover:bg-background/95">
              <div className="p-3 rounded-lg bg-primary/20 transition-all duration-300 group-hover:bg-primary/30 group-hover:scale-110">
                <Zap className="w-6 h-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">150+</div>
                <div className="text-sm text-muted-foreground font-medium">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
