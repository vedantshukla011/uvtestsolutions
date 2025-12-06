import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface QuoteRequest {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  industry: string;
  productInterest: string[];
  timeline: string;
  budgetRange?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: QuoteRequest = await req.json();
    console.log("Received quote request:", data);

    const productsList = data.productInterest.join(", ");
    
    // Send notification email to UV Test Solutions
    const emailResponse = await resend.emails.send({
      from: "UV Test Solutions <onboarding@resend.dev>",
      to: ["vinod.shukla@uvtestsolutions.com"],
      subject: `New Quote Request from ${data.fullName}`,
      html: `
        <h1>New Quote Request</h1>
        <p>You have received a new quote request from your website.</p>
        
        <h2>Contact Details</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.company || "Not provided"}</td>
          </tr>
        </table>
        
        <h2>Request Details</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Industry</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.industry}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Products Interested</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${productsList}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Timeline</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.timeline}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Budget Range</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.budgetRange || "Not specified"}</td>
          </tr>
        </table>
        
        <h2>Message</h2>
        <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${data.message}</p>
        
        <hr style="margin-top: 30px;">
        <p style="color: #666; font-size: 12px;">This email was sent from the UV Test Solutions website contact form.</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-quote-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
