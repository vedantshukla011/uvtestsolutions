import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Customers from "./pages/Customers";
import Oscilloscopes from "./pages/products/Oscilloscopes";
import Multimeters from "./pages/products/Multimeters";
import SignalGenerators from "./pages/products/SignalGenerators";
import TemperatureSensors from "./pages/products/TemperatureSensors";
import PowerSupplies from "./pages/products/PowerSupplies";
import LogicAnalyzers from "./pages/products/LogicAnalyzers";
import SpectrumAnalyzers from "./pages/products/SpectrumAnalyzers";
import OtherProducts from "./pages/products/OtherProducts";
import ESDLabSolutions from "./pages/products/ESDLabSolutions";
import Probes from "./pages/products/Probes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products/oscilloscopes" element={<Oscilloscopes />} />
          <Route path="/products/multimeters" element={<Multimeters />} />
          <Route path="/products/signal-generators" element={<SignalGenerators />} />
          <Route path="/products/temperature-sensors" element={<TemperatureSensors />} />
          <Route path="/products/power-supplies" element={<PowerSupplies />} />
          <Route path="/products/logic-analyzers" element={<LogicAnalyzers />} />
          <Route path="/products/spectrum-analyzers" element={<SpectrumAnalyzers />} />
          <Route path="/products/other-products" element={<OtherProducts />} />
          <Route path="/products/esd-lab-solutions" element={<ESDLabSolutions />} />
          <Route path="/products/probes" element={<Probes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
