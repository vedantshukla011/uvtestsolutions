import { useEffect, useRef } from "react";

import keysightLogo from "@/assets/brands/keysight.png";
import tektronixLogo from "@/assets/brands/tektronix.png";
import keithleyLogo from "@/assets/brands/keithley.png";
import wellerLogo from "@/assets/brands/weller.png";
import metrelLogo from "@/assets/brands/metrel.png";
import flukeLogo from "@/assets/brands/fluke.png";
import insizeLogo from "@/assets/brands/insize.png";
import siglentLogo from "@/assets/brands/siglent.png";
import mitutoyoLogo from "@/assets/brands/mitutoyo.png";
import rigolLogo from "@/assets/brands/rigol.png";

const brands = [
  { name: "Keysight Technologies", logo: keysightLogo },
  { name: "Tektronix", logo: tektronixLogo },
  { name: "Keithley", logo: keithleyLogo },
  { name: "Weller", logo: wellerLogo },
  { name: "Metrel", logo: metrelLogo },
  { name: "Fluke", logo: flukeLogo },
  { name: "Insize", logo: insizeLogo },
  { name: "Siglent", logo: siglentLogo },
  { name: "Mitutoyo", logo: mitutoyoLogo },
  { name: "Rigol", logo: rigolLogo },
];

const BrandsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1.2;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset scroll when we've scrolled through half the content (since we duplicate it)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Trusted Brands
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We partner with world-leading manufacturers to bring you the finest measuring instruments
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-hidden gap-8 md:gap-12"
          style={{ scrollBehavior: "auto" }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-background rounded-xl border border-border/50 hover:border-primary hover:shadow-xl hover:shadow-primary/20 hover:bg-primary/5 transition-all duration-300 min-w-[160px] md:min-w-[200px] group"
            >
              <div className="h-16 md:h-20 flex items-center justify-center mb-3">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-h-full max-w-[120px] md:max-w-[150px] object-contain transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-sm text-muted-foreground font-medium text-center group-hover:text-foreground transition-colors">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
