import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ProductCardProps {
  name: string;
  brand: string;
  image: string;
  description: string;
  features: string[];
  price?: string;
  inStock?: boolean;
}

const ProductCard = ({ name, brand, image, description, features, price, inStock = true }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-accent/30 overflow-hidden">
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={`${brand} ${name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute bottom-2 left-2 right-2 text-[10px] text-muted-foreground/70 bg-background/80 px-2 py-1 rounded text-center">
          *Image for representation only
        </span>
      </div>

      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-xl">{name}</CardTitle>
          {price && (
            <span className="text-lg font-bold text-accent whitespace-nowrap">{price}</span>
          )}
        </div>
        <Badge variant="outline" className="w-fit mb-2">
          {brand}
        </Badge>
        <CardDescription className="text-base line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex gap-2">
          <Link to="/contact" className="flex-1">
            <Button className="w-full" variant="default">
              Request Quote
            </Button>
          </Link>
          <a 
            href={`https://www.google.com/search?q=${encodeURIComponent(`${brand} ${name}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="outline" className="w-full">
              Details
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
