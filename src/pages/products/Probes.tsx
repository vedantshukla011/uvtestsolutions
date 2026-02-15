import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProductCard from "@/components/ProductCard";
import { Cable } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { probeCategories } from "@/data/probesData";

const Probes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Probes - Active, Passive, Differential & Current Probes India"
        description="Buy oscilloscope probes from Keysight, Tektronix, Rigol, Micsig. Active, passive, differential and current probes for precise measurements. Best prices in India."
        canonical="/products/probes"
        keywords="oscilloscope probes India, current probe, active probe, differential probe, passive probe, Micsig, Keysight, Tektronix"
      />
      <Header />

      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink asChild><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage className="text-accent font-semibold">Probes</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
              <Cable className="w-4 h-4" />
              <span className="text-sm font-medium">Measurement Probes</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Professional<span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Oscilloscope Probes</span></h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">Active, Passive, Differential & Current probes from KEYSIGHT, TEKTRONIX, RIGOL, MICSIG and more</p>
          </div>
        </div>
      </section>

      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="current" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-10 h-auto bg-transparent">
              {probeCategories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id} className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground px-6 py-2.5 rounded-full border border-border/50">
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {probeCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cat.products.map((product, idx) => (
                    <ProductCard key={idx} {...product} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Probes;
