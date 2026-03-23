import { createContext, useContext, useState, ReactNode, useCallback } from "react";

interface QuoteCartContextType {
  items: string[];
  addItem: (name: string) => void;
  removeItem: (name: string) => void;
  clearItems: () => void;
  isInCart: (name: string) => boolean;
  toggleItem: (name: string) => void;
}

const QuoteCartContext = createContext<QuoteCartContextType | undefined>(undefined);

export const QuoteCartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<string[]>([]);

  const addItem = useCallback((name: string) => {
    setItems((prev) => (prev.includes(name) ? prev : [...prev, name]));
  }, []);

  const removeItem = useCallback((name: string) => {
    setItems((prev) => prev.filter((i) => i !== name));
  }, []);

  const clearItems = useCallback(() => setItems([]), []);

  const isInCart = useCallback((name: string) => items.includes(name), [items]);

  const toggleItem = useCallback((name: string) => {
    setItems((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  }, []);

  return (
    <QuoteCartContext.Provider value={{ items, addItem, removeItem, clearItems, isInCart, toggleItem }}>
      {children}
    </QuoteCartContext.Provider>
  );
};

export const useQuoteCart = () => {
  const ctx = useContext(QuoteCartContext);
  if (!ctx) throw new Error("useQuoteCart must be used within QuoteCartProvider");
  return ctx;
};
