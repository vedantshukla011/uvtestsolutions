import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuoteCartProvider } from "@/contexts/QuoteCartContext";
import ScrollToTop from "./components/ScrollToTop";
import QuoteCartFloat from "./components/QuoteCartFloat";
import WhatsAppButton from "./components/WhatsAppButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import ProductsAtGeM from "./pages/ProductsAtGeM";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import JartulJT6311A from "./pages/JartulJT6311A";
import MetrelMI3108 from "./pages/MetrelMI3108";
import MetrelMI3132 from "./pages/MetrelMI3132";
import BuyOnline from "./pages/BuyOnline";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <QuoteCartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <WhatsAppButton />
          <QuoteCartFloat />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products-at-gem" element={<ProductsAtGeM />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/products/jartul-jt6311a" element={<JartulJT6311A />} />
            <Route path="/products/metrel-mi3108-eurotestpv" element={<MetrelMI3108 />} />
            <Route path="/products/metrel-mi3132-evtester" element={<MetrelMI3132 />} />
            <Route path="/buy-online" element={<BuyOnline />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QuoteCartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
