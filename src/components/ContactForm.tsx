import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { useState } from "react";

const contactFormSchema = z.object({
  fullName: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().optional(),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  city: z.string().optional(),
  industry: z.string().min(1, "Please select an industry"),
  productInterest: z.array(z.string()).min(1, "Select at least one product"),
  timeline: z.string().min(1, "Please select a timeline"),
  budgetRange: z.string().optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      productInterest: [],
    },
  });

  const productOptions = [
    { id: "oscilloscopes", label: "Oscilloscopes" },
    { id: "multimeters", label: "Multimeters" },
    { id: "spectrum-analyzers", label: "Spectrum Analyzers" },
    { id: "power-supplies", label: "Power Supplies" },
    { id: "other", label: "Other Equipment" },
  ];

  const handleProductToggle = (productId: string) => {
    const newSelection = selectedProducts.includes(productId)
      ? selectedProducts.filter((id) => id !== productId)
      : [...selectedProducts, productId];
    
    setSelectedProducts(newSelection);
    setValue("productInterest", newSelection);
  };

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Submit to Formspree
      const response = await fetch("https://formspree.io/f/mldqlzer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          phone: data.phone ? `+91 ${data.phone}` : "",
          company: data.company || "",
          city: data.city || "",
          industry: data.industry,
          productInterest: data.productInterest.join(", "),
          timeline: data.timeline,
          budgetRange: data.budgetRange || "",
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      
      toast({
        title: "Quote Request Submitted!",
        description: "Our team will contact you within 24 hours.",
      });
      
      // Reset form
      reset();
      setSelectedProducts([]);
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 sm:p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Request a Quote</h2>
      <p className="text-muted-foreground mb-6">
        Fill out the form below and we'll get back to you with a customized solution
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            {...register("fullName")}
            placeholder="John Doe"
            className={errors.fullName ? "border-destructive" : ""}
          />
          {errors.fullName && (
            <p className="text-sm text-destructive">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email & Phone */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="name@company.com"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                +91
              </span>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
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
              {...register("company")}
              placeholder="Your Company Pvt. Ltd."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City / State</Label>
            <Select onValueChange={(value) => setValue("city", value)}>
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
            <Select onValueChange={(value) => setValue("industry", value)}>
              <SelectTrigger className={errors.industry ? "border-destructive" : ""}>
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
            {errors.industry && (
              <p className="text-sm text-destructive">{errors.industry.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Project Timeline *</Label>
            <Select onValueChange={(value) => setValue("timeline", value)}>
              <SelectTrigger className={errors.timeline ? "border-destructive" : ""}>
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Immediate (ASAP)</SelectItem>
                <SelectItem value="1-month">Within 1 month</SelectItem>
                <SelectItem value="1-3-months">1-3 months</SelectItem>
                <SelectItem value="3-plus-months">3+ months</SelectItem>
              </SelectContent>
            </Select>
            {errors.timeline && (
              <p className="text-sm text-destructive">{errors.timeline.message}</p>
            )}
          </div>
        </div>

        {/* Product Interest */}
        <div className="space-y-3">
          <Label>Product Interest *</Label>
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
          {errors.productInterest && (
            <p className="text-sm text-destructive">{errors.productInterest.message}</p>
          )}
        </div>

        {/* Budget Range */}
        <div className="space-y-2">
          <Label htmlFor="budgetRange">Budget Range (Optional)</Label>
          <Select onValueChange={(value) => setValue("budgetRange", value)}>
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
            {...register("message")}
            placeholder="Tell us about your specific measurement requirements, technical specifications, or any questions you have..."
            className={`min-h-[120px] ${errors.message ? "border-destructive" : ""}`}
          />
          {errors.message && (
            <p className="text-sm text-destructive">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>Submitting...</>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Submit Quote Request
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
