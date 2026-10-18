import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    slug: "wocen-power-supply-india",
    title: "Wocen Power Supply India — Bidirectional DC Power Supply Guide",
    description:
      "Wocen WB5000, WB3000, HB, EVWB and MP series explained — which bidirectional or programmable DC power supply fits your EV, battery or inverter test.",
    date: "2026-10-18",
    readTime: "5 min read",
    tags: ["Wocen", "Bidirectional DC Power Supply", "EV Testing", "Battery Simulator"],
  },
  {
    slug: "micsig-probes-price-india",
    title: "Micsig Probes Price in India — Differential, Current, Rogowski & SigOFIT Guide",
    description:
      "Every Micsig probe family explained — DP differential, CP current, RCP Rogowski and MOIP SigOFIT — with Indian prices and how to choose.",
    date: "2026-10-18",
    readTime: "5 min read",
    tags: ["Micsig", "Differential Probe", "Current Probe", "Rogowski"],
  },
  {
    slug: "vernier-caliper-guide-india",
    title: "Vernier Caliper Price in India — Types, Least Count & Buying Guide",
    description:
      "Manual vs dial vs digital vernier calipers, how to calculate least count, how to read a vernier, and what to check before buying in India.",
    date: "2026-10-13",
    readTime: "5 min read",
    tags: ["Vernier Caliper", "Mitutoyo", "Insize", "Precision Measuring"],
  },
  {
    slug: "digital-multimeter-guide",
    title: "Digital Multimeter: Complete Guide, Uses & Buying Tips (2026)",
    description:
      "Learn everything about Digital Multimeters (DMM) — uses, features, True RMS, applications, and how to buy the best multimeter in India at the best price.",
    date: "2026-04-03",
    readTime: "7 min read",
    tags: ["Digital Multimeter", "DMM", "True RMS", "Test Equipment"],
  },
  {
    slug: "arbitrary-function-generator-guide",
    title: "Arbitrary Function Generator: Complete Guide & Buying Tips (2026)",
    description:
      "Explore Arbitrary Function Generators (AFG) — types, features, applications, and how to buy the best function generator in India at the best price.",
    date: "2026-04-03",
    readTime: "7 min read",
    tags: ["Function Generator", "AFG", "Waveform Generator", "Test Equipment"],
  },
  {
    slug: "guide-to-dc-electronic-loads",
    title: "What is a DC Electronic Load? A Comprehensive Guide for Engineers",
    description:
      "Understand DC electronic loads — CC, CV, CP and CR operating modes, battery discharge and SMPS validation applications, and how to choose the right load.",
    date: "2026-07-30",
    readTime: "8 min read",
    tags: ["Electronic Load", "Battery Testing", "SMPS", "Buyer Guide"],
  },
  {
    slug: "cheap-electrical-screwdrivers-india",
    title: "Cheap Electrical Screwdrivers in India (2026 Guide)",
    description:
      "Buy cheap electrical screwdrivers in India. Explore budget & industrial electric screwdrivers from Bakon, TGK, Kilews, Bosch & Stanley with best prices.",
    date: "2026-03-28",
    readTime: "5 min read",
    tags: ["Electric Screwdriver", "Budget Tools", "Industrial Tools", "India"],
  },
  {
    slug: "dc-power-supplies-complete-guide",
    title: "DC Power Supplies: Types, Applications & How to Choose (2026)",
    description:
      "Complete guide to DC Power Supplies — linear, switching, programmable, bidirectional, high-voltage & high-current models with applications and buying tips.",
    date: "2026-07-26",
    readTime: "9 min read",
    tags: ["DC Power Supply", "Programmable", "SCPI", "Lab Equipment"],
  },
  {
    slug: "dc-power-supplies-guide",
    title: "The Ultimate Guide to DC Power Supplies",
    description:
      "Complete guide to DC Power Supplies — types, applications, key features, market trends in India, and how to choose the right one for industrial and lab use.",
    date: "2026-03-27",
    readTime: "8 min read",
    tags: ["DC Power Supply", "Lab Equipment", "Industrial Testing", "Buyer Guide"],
  },
  {
    slug: "esd-protection-guide",
    title: "The Complete Guide to ESD Protection Products",
    description:
      "A comprehensive reference covering all 120 ESD protection and test equipment products — from personnel grounding essentials to advanced monitoring systems — aligned with every major international ESD standard.",
    date: "2026-03-25",
    readTime: "25 min read",
    tags: ["ESD", "ANSI/ESD S20.20", "IEC 61340-5-1", "Electronics Manufacturing"],
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blogs | UV Test Solutions"
        description="Expert articles on test & measuring instruments, ESD protection, soldering and more from UV Test Solutions — India's leading supplier."
        canonical="/blog"
      />
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Blog
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Expert insights on test instruments, ESD protection, and industry best practices.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block bg-card border border-border rounded-xl p-6 md:p-8 hover:border-accent/50 hover:shadow-lg transition-all"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-accent/10 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="text-accent font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
