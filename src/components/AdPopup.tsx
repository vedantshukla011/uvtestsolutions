import { useEffect, useState } from "react";
import { X, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import productImage from "@/assets/products/itech-it8512bg-plus.jpg";

const AD_POPUP_KEY = "uvts_ad_popup_seen_it8512bg";

const AdPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(AD_POPUP_KEY);
    if (!seen) {
      // Slight delay so the page renders first
      const timer = setTimeout(() => setIsOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem(AD_POPUP_KEY, "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Featured Product Advertisement"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Popup Card */}
      <div className="relative z-10 w-full max-w-3xl bg-background border border-border rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-background/80 border border-border hover:bg-accent transition-colors"
          aria-label="Close advertisement"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>

        {/* Hot Badge Ribbon */}
        <div className="absolute top-0 left-0 z-20">
          <div className="bg-destructive text-destructive-foreground text-xs font-bold px-4 py-1.5 rounded-br-xl flex items-center gap-1.5 shadow-md">
            <Zap className="w-3.5 h-3.5" />
            HOT SELLING
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left — Product Image */}
          <div className="md:w-5/12 bg-muted flex items-center justify-center p-6 min-h-[220px]">
            <img
              src={productImage}
              alt="ITECH IT8512BG+ Programmable DC Electronic Load"
              className="w-full max-w-[280px] object-contain drop-shadow-xl"
            />
          </div>

          {/* Right — Product Info */}
          <div className="md:w-7/12 p-6 flex flex-col justify-between gap-4">
            {/* Header */}
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                ITECH · DC Electronic Load
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-2">
                IT8512BG+
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The ultimate solution for <span className="text-foreground font-medium">Fast Charger Manufacturers</span> — test fast charging protocols accurately in minimum steps.
              </p>
            </div>

            {/* Key Highlights */}
            <ul className="space-y-2">
              {[
                "Supports all major Fast Charge protocols (QC, PD, PPS & more)",
                "150V / 60A / 600W — high-power programmable DC load",
                "CV, CC & CP modes for comprehensive charger validation",
                "Automated protocol testing in just a few steps",
                "Ideal for R&D, production & quality assurance",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link to="/contact" onClick={handleClose} className="flex-1">
                <Button variant="hero" size="lg" className="w-full group">
                  Request a Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="flex-1"
                onClick={handleClose}
              >
                Maybe Later
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary" />
      </div>
    </div>
  );
};

export default AdPopup;
