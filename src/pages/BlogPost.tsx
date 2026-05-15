import { useParams, Navigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogMeta: Record<string, { title: string; description: string; file: string }> = {
  "digital-multimeter-guide": {
    title: "Digital Multimeter Guide: Uses, Features & Buying Tips 2026",
    description:
      "Complete Digital Multimeter (DMM) guide — uses, features, applications and buying tips. Find the best multimeter price in India.",
    file: "/blogs/digital-multimeter-guide.html",
  },
  "arbitrary-function-generator-guide": {
    title: "Arbitrary Function Generator Guide & Buying Tips 2026",
    description:
      "Explore Arbitrary Function Generators (AFG) — applications, features and buying guide. Best function generator prices in India.",
    file: "/blogs/arbitrary-function-generator-guide.html",
  },
  "cheap-electrical-screwdrivers-india": {
    title: "Cheap Electrical Screwdrivers in India — Best Budget Picks 2026",
    description:
      "Buy cheap electrical screwdrivers in India. Budget & industrial picks from Bakon, TGK, Kilews, Bosch and Stanley at the best prices.",
    file: "/blogs/cheap-electrical-screwdrivers-india.html",
  },
  "dc-power-supplies-guide": {
    title: "DC Power Supplies: Types, Applications & Buying Guide",
    description:
      "Guide to DC Power Supplies — types, applications, features and how to choose the right one for industrial and lab use in India.",
    file: "/blogs/dc-power-supplies-guide.html",
  },
  "esd-protection-guide": {
    title: "ESD Protection Products — The Complete Guide",
    description:
      "Guide to ESD protection: personnel grounding, workstation gear, ionization, packaging, tools, clothing and monitoring systems.",
    file: "/blogs/esd-protection-guide.html",
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const meta = slug ? blogMeta[slug] : undefined;

  if (!meta) return <Navigate to="/blog" replace />;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    author: {
      "@type": "Organization",
      name: "UV Test Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "UV Test Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://uvtestsolutions.lovable.app/favicon.jpg",
      },
    },
    mainEntityOfPage: `https://uvtestsolutions.lovable.app/blog/${slug}`,
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={meta.title}
        description={meta.description}
        canonical={`/blog/${slug}`}
        type="article"
        jsonLd={articleJsonLd}
      />
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
