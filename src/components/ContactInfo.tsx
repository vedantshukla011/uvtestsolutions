import { Phone, Mail, MapPin, Clock, Shield, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      {/* Contact Methods */}
      <Card className="border-border shadow-lg">
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="font-medium text-sm text-muted-foreground">Phone</div>
              <a 
                href="tel:+919654109754" 
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                +91 9654109754
              </a>
              <div className="text-xs text-muted-foreground mt-1">Mon-Fri, 9AM-6PM EST</div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="font-medium text-sm text-muted-foreground">Email</div>
              <a 
                href="mailto:vinod.shukla@uvtestsolutions.com" 
                className="text-foreground hover:text-accent transition-colors font-medium break-all"
              >
                vinod.shukla@uvtestsolutions.com
              </a>
              <div className="text-xs text-muted-foreground mt-1">24/7 support</div>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="font-medium text-sm text-muted-foreground">Address</div>
              <div className="text-foreground font-medium">
                A9 Park View Apartment Ph-2<br />
                Gandhi Nagar Ghaziabad,<br />
                Uttar Pradesh, India
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="flex items-start gap-3 pt-4 border-t border-border">
            <div className="p-2 rounded-lg bg-primary/10">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-primary">24-Hour Response</div>
              <div className="text-sm text-muted-foreground">Guaranteed reply to all inquiries</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trust Indicators */}
      <Card className="border-border shadow-lg bg-gradient-to-br from-accent/5 to-primary/5">
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-semibold mb-4">Why Choose Us</h3>

          <div className="space-y-4">
            {/* Stat 1 */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">150+</div>
                <div className="text-sm text-muted-foreground">Satisfied Clients</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">30+ Years</div>
                <div className="text-sm text-muted-foreground">Experience with Testing Technology &amp; Service</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">ISO 9001</div>
                <div className="text-sm text-muted-foreground">Certified Quality</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Free Consultation Badge */}
      <Card className="border-primary/50 bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg">
        <CardContent className="p-6 text-center">
          <div className="text-lg font-bold text-foreground mb-2">
            Free Consultation Available
          </div>
          <p className="text-sm text-muted-foreground">
            Not sure what you need? Our experts are here to help you find the right solution at no cost.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
