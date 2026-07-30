import { useQuoteCart } from "@/contexts/QuoteCartContext";
import { ShoppingCart, X, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const QuoteCartFloat = () => {
  const { items, removeItem, clearItems } = useQuoteCart();
  const [expanded, setExpanded] = useState(false);

  if (items.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {expanded && (
        <div className="mb-3 w-80 max-h-96 bg-card border border-border rounded-lg shadow-xl overflow-hidden animate-in slide-in-from-bottom-2">
          <div className="p-3 border-b border-border flex items-center justify-between bg-muted/50">
            <span className="font-semibold text-sm text-foreground">
              Quote List ({items.length})
            </span>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={clearItems} aria-label="Clear all items from quote list">
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setExpanded(false)} aria-label="Close quote list">
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
          <div className="overflow-y-auto max-h-56 p-2 space-y-1">
            {items.map((item) => (
              <div key={item} className="flex items-center justify-between gap-2 px-2 py-1.5 rounded-md hover:bg-muted/50 group">
                <span className="text-xs text-foreground truncate flex-1">{item}</span>
                <button onClick={() => removeItem(item)} aria-label={`Remove ${item} from quote list`} className="text-muted-foreground hover:text-destructive shrink-0">
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border">
            <Link to={`/contact?products=${encodeURIComponent(items.join("||"))}`}>
              <Button size="sm" className="w-full">
                Request Quote for {items.length} item{items.length > 1 ? "s" : ""}
              </Button>
            </Link>
          </div>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        aria-label={`${expanded ? "Hide" : "Show"} quote list (${items.length} items)`}
        aria-expanded={expanded}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        <ShoppingCart className="h-5 w-5" />
        <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {items.length}
        </span>
      </button>
    </div>
  );
};

export default QuoteCartFloat;
