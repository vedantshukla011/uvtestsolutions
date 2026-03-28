import { useParams, Navigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogMeta: Record<string, { title: string; description: string; file: string }> = {
  "cheap-electrical-screwdrivers-india": {
    title: "Cheap Electrical Screwdrivers in India | Best Budget Electric Screwdrivers 2026",
    description:
      "Buy cheap electrical screwdrivers in India. Explore budget & industrial electric screwdrivers from Bakon, TGK, Kilews, Bosch & Stanley. Best prices available.",
    file: "/blogs/cheap-electrical-screwdrivers-india.html",
  },
  "dc-power-supplies-guide": {
    title: "DC Power Supplies: Types, Applications & Buying Guide | UV Test Solutions",
    description:
      "Complete guide to DC Power Supplies — types, applications, features, and how to choose the right one for industrial and lab use in India.",
    file: "/blogs/dc-power-supplies-guide.html",
  },
  "esd-protection-guide": {
    title: "The Complete Guide to ESD Protection Products | UV Test Solutions",
    description:
      "A comprehensive guide to all ESD protection products — from personnel grounding, workstation equipment and ionization to packaging, tools, clothing, testing instruments and monitoring systems.",
    file: "/blogs/esd-protection-guide.html",
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const meta = slug ? blogMeta[slug] : undefined;

  if (!meta) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen bg-background">
      <SEO title={meta.title} description={meta.description} />
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-4">
          <Link to="/blog">
            <Button variant="ghost" size="sm" className="gap-1 mb-2">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Button>
          </Link>
        </div>
        <iframe
          src={meta.file}
          title={meta.title}
          className="w-full border-0"
          style={{ minHeight: "calc(100vh - 120px)" }}
          onLoad={(e) => {
            const iframe = e.target as HTMLIFrameElement;
            try {
              const height = iframe.contentDocument?.documentElement?.scrollHeight;
              if (height) iframe.style.height = `${height}px`;
            } catch {
              // cross-origin fallback
              iframe.style.height = "6000px";
            }
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
