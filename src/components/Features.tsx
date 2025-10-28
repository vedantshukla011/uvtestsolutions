import { CheckCircle2, Target, Users, Headphones } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Certified Quality",
    description: "All our instruments meet international quality standards and certifications",
  },
  {
    icon: Target,
    title: "Precision Engineering",
    description: "Built with cutting-edge technology for maximum accuracy and reliability",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated technical team to assist with installation, calibration, and maintenance",
  },
  {
    icon: Headphones,
    title: "24/7 Service",
    description: "Round-the-clock customer support and emergency service availability",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence in measurement technology and customer service
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
