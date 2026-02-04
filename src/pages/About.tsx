import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Shield, Award, Users, TrendingUp } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us - UV Test Solutions"
        description="Learn about UV Test Solutions - 15+ years of expertise in electronic measuring instruments. ISO 9001 certified company serving manufacturing, R&D, and educational sectors across India."
        canonical="/about"
        keywords="UV Test Solutions, electronic instruments company, test equipment supplier India, measuring instruments dealer"
      />
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4 border-b border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-muted-foreground">
              <a href="/" className="hover:text-foreground transition-colors">Home</a>
              <span className="mx-2">&gt;</span>
              <span className="text-foreground">About Us</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About UV Test Solutions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Your trusted partner in precision electronic measuring instruments. 
                We provide cutting-edge testing and measurement solutions to industries worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">
                    Who We Are
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    UV Test Solutions is a leading provider of high-quality electronic measuring 
                    instruments and testing equipment. With years of experience in the industry, 
                    we specialize in delivering precision tools that meet the demanding requirements 
                    of modern technology.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our extensive product range includes oscilloscopes, multimeters, signal generators, 
                    power supplies, and specialized testing equipment from world-renowned manufacturers. 
                    We serve diverse sectors including manufacturing, R&D, quality control, education, 
                    and healthcare.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    To empower professionals and organizations with reliable, accurate, and 
                    innovative measurement solutions that drive quality, efficiency, and technological 
                    advancement.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We are committed to providing exceptional customer service, expert technical 
                    support, and competitive pricing while maintaining the highest standards of 
                    quality and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
                Leadership
              </h2>
              <div className="bg-card p-8 rounded-lg border border-border/50 shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-primary/20">
                    <img 
                      src={founderImage} 
                      alt="Vinod Shukla - Founder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    Vinod Shukla
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    Director (Founder)
                  </p>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    With more than 15 years in the industry, Vinod Shukla brings extensive expertise 
                    in industrial applications. His deep understanding of measurement technology and 
                    commitment to quality has been instrumental in establishing UV Test Solutions as 
                    a trusted partner for precision electronic measuring instruments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
                Why Choose UV Test Solutions
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-card p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    Quality Products
                  </h3>
                  <p className="text-muted-foreground">
                    Premium instruments from trusted global brands, ensuring accuracy and durability.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    Expert Support
                  </h3>
                  <p className="text-muted-foreground">
                    Knowledgeable team ready to assist with product selection and technical guidance.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    Reliability
                  </h3>
                  <p className="text-muted-foreground">
                    Dependable solutions backed by warranties and comprehensive after-sales service.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    Competitive Pricing
                  </h3>
                  <p className="text-muted-foreground">
                    Best value for your investment with flexible pricing and bulk order discounts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Industries We Serve
              </h2>
              <p className="text-muted-foreground mb-12 leading-relaxed">
                Our precision instruments and measurement solutions cater to a wide range of industries
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  "Manufacturing",
                  "Research & Development",
                  "Quality Control",
                  "Education",
                  "Healthcare",
                  "Telecommunications"
                ].map((industry) => (
                  <div
                    key={industry}
                    className="bg-card p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <p className="font-semibold text-foreground">{industry}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Contact us today to discuss your measurement and testing requirements
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
