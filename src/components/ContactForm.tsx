import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Send } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ContactForm = () => {
  const [searchParams] = useSearchParams();
  const prefillProduct = searchParams.get("product");

  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [industry, setIndustry] = useState("");
  const [timeline, setTimeline] = useState("");
  const [city, setCity] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (prefillProduct) {
      setMessage(`I am interested in the ${prefillProduct}. Please provide a quote and more details.`);
    }
  }, [prefillProduct]);

  const productOptions = [
    { id: "oscilloscopes", label: "Oscilloscopes" },
    { id: "multimeters", label: "Multimeters" },
    { id: "spectrum-analyzers", label: "Spectrum Analyzers" },
    { id: "power-supplies", label: "Power Supplies" },
    { id: "other", label: "Other Equipment" },
  ];

  const handleProductToggle = (productId: string) => {
    setSelectedProducts(prev =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 sm:p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Request a Quote</h2>
      <p className="text-muted-foreground mb-6">
        Fill out the form below and we'll get back to you with a customized solution
      </p>

      <form 
        method="POST" 
        action="https://formspree.io/f/mldqlzer"
        className="space-y-6"
      >
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email & Phone */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@company.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                +91
              </span>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="9876543210"
                className="rounded-l-none"
              />
            </div>
          </div>
        </div>

        {/* Company & City/State */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="company">Company / Organization</Label>
            <Input
              id="company"
              name="company"
              placeholder="Your Company Pvt. Ltd."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City / State</Label>
            <input type="hidden" name="city" value={city} />
            <Select onValueChange={setCity}>
              <SelectTrigger>
                <SelectValue placeholder="Select city/state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="delhi-ncr">Delhi NCR</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="hyderabad">Hyderabad</SelectItem>
                <SelectItem value="kolkata">Kolkata</SelectItem>
                <SelectItem value="pune">Pune</SelectItem>
                <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                <SelectItem value="rajasthan">Rajasthan</SelectItem>
                <SelectItem value="gujarat">Gujarat</SelectItem>
                <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                <SelectItem value="karnataka">Karnataka</SelectItem>
                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Industry & Timeline */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="industry">Industry / Application *</Label>
            <input type="hidden" name="industry" value={industry} />
            <Select onValueChange={setIndustry} required>
              <SelectTrigger>
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="research">Research & Development</SelectItem>
                <SelectItem value="quality">Quality Control</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="telecommunications">Telecommunications</SelectItem>
                <SelectItem value="aerospace">Aerospace & Defense</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Project Timeline *</Label>
            <input type="hidden" name="timeline" value={timeline} />
            <Select onValueChange={setTimeline} required>
              <SelectTrigger>
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Immediate (ASAP)</SelectItem>
                <SelectItem value="1-month">Within 1 month</SelectItem>
                <SelectItem value="1-3-months">1-3 months</SelectItem>
                <SelectItem value="3-plus-months">3+ months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Interest */}
        <div className="space-y-3">
          <Label>Product Interest *</Label>
          <input type="hidden" name="productInterest" value={selectedProducts.join(", ")} />
          <div className="grid sm:grid-cols-2 gap-3">
            {productOptions.map((product) => (
              <div key={product.id} className="flex items-center space-x-2">
                <Checkbox
                  id={product.id}
                  checked={selectedProducts.includes(product.id)}
                  onCheckedChange={() => handleProductToggle(product.id)}
                />
                <label
                  htmlFor={product.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {product.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Range */}
        <div className="space-y-2">
          <Label htmlFor="budgetRange">Budget Range (Optional)</Label>
          <input type="hidden" name="budgetRange" value={budgetRange} />
          <Select onValueChange={setBudgetRange}>
            <SelectTrigger>
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-1l">Under ₹1 Lakh</SelectItem>
              <SelectItem value="1l-5l">₹1 Lakh - ₹5 Lakh</SelectItem>
              <SelectItem value="5l-20l">₹5 Lakh - ₹20 Lakh</SelectItem>
              <SelectItem value="20l-plus">₹20 Lakh+</SelectItem>
              <SelectItem value="not-sure">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div className="space-y-2">
        <Label htmlFor="message">Message / Requirements *</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your specific measurement requirements, technical specifications, or any questions you have..."
            className="min-h-[120px]"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="w-full"
        >
          <Send className="w-4 h-4 mr-2" />
          Submit Quote Request
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
