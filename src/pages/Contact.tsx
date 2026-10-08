import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { Mail, Clock, MapPin } from "lucide-react";
import { localStoreSchema, STORE_MAP_URL } from "@/lib/seoData";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const Contact = () => {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "UV Test Solutions",
    image: "https://www.uvtestsolutions.com/logo.png",
    url: "https://www.uvtestsolutions.com/contact",
    email: "vinod.shukla@uvtestsolutions.com",
    telephone: "+91-9654109754",
    address: {
      "@type": "PostalAddress",
      streetAddress: "B-6/6 Rajendra Nagar",
      addressLocality: "Ghaziabad",
      addressRegion: "Uttar Pradesh",
      postalCode: "201001",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    priceRange: "₹₹",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Test Equipment Store in Ghaziabad & Delhi NCR | UV Test Solutions"
        description="Visit UV Test Solutions in Rajendra Nagar, Ghaziabad for oscilloscopes, multimeters, power supplies & soldering stations. Serving Delhi, Noida, Gurugram. Call +91 9654109754."
        canonical="/contact"
        keywords="test equipment shop Ghaziabad, oscilloscope dealer Delhi NCR, multimeter shop near me, measuring instruments supplier Noida, soldering station dealer Delhi, electronic test equipment store Gurugram"
        jsonLd={[localBusinessJsonLd, localStoreSchema]}
      />
      <Header />

      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-accent font-semibold">
                    Contact Us
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Get in Touch</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get Your Custom
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Quote Today
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Tell us about your measurement needs and our expert team will provide a tailored solution
            </p>

            {/* Response Time Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">24-hour response guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form - Takes up 2 columns */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info - Takes up 1 column */}
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Office */}
      <section className="py-16 bg-muted/30" aria-labelledby="visit-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 id="visit-heading" className="text-3xl font-bold mb-4">
              Visit Our Test Equipment Store in Ghaziabad, Delhi NCR
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              See oscilloscopes, digital multimeters, clamp meters, DC power supplies, electronic loads,
              LCR meters and soldering stations in person. Our office at B-6/6 Rajendra Nagar, Ghaziabad (UP 201001)
              serves customers across Delhi, Noida, Greater Noida, Gurugram, Faridabad and Meerut.
            </p>
            <p className="font-medium mb-1">Open Monday – Saturday, 9:30 AM – 6:30 PM</p>
            <p className="text-muted-foreground mb-6">
              Call <a href="tel:+919654109754" className="text-accent font-semibold">+91 9654109754</a> before visiting to book a product demo.
            </p>
            <a
              href={STORE_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
            >
              <MapPin className="w-5 h-5" /> Get Directions
            </a>
          </div>
          <div className="rounded-xl overflow-hidden border border-border aspect-video">
            <iframe
              title="UV Test Solutions location map, Rajendra Nagar, Ghaziabad"
              src="https://www.google.com/maps?q=B-6%2F6+Rajendra+Nagar+Ghaziabad+201001&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
