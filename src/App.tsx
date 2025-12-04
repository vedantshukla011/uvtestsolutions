import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Oscilloscopes from "./pages/products/Oscilloscopes";
import Multimeters from "./pages/products/Multimeters";
import SignalGenerators from "./pages/products/SignalGenerators";
import TemperatureSensors from "./pages/products/TemperatureSensors";
import PowerSupplies from "./pages/products/PowerSupplies";
import LogicAnalyzers from "./pages/products/LogicAnalyzers";
import OtherProducts from "./pages/products/OtherProducts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/oscilloscopes" element={<Oscilloscopes />} />
          <Route path="/products/multimeters" element={<Multimeters />} />
          <Route path="/products/signal-generators" element={<SignalGenerators />} />
          <Route path="/products/temperature-sensors" element={<TemperatureSensors />} />
          <Route path="/products/power-supplies" element={<PowerSupplies />} />
          <Route path="/products/logic-analyzers" element={<LogicAnalyzers />} />
          <Route path="/products/other-products" element={<OtherProducts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
