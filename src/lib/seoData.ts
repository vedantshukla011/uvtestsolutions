import { productCategories } from "@/data/productsData";
import { highestSellingProducts } from "@/data/highestSellingData";

const BASE_URL = "https://www.uvtestsolutions.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "UV Test Solutions",
  "url": BASE_URL,
  "logo": `${BASE_URL}/logo.png`,
  "description": "Leading Indian supplier of test and measuring instruments, oscilloscopes, multimeters, soldering stations, power tools and hand tools from top global brands.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "B-6/6 Rajendra Nagar",
    "addressLocality": "Ghaziabad",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201001",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9643295120",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-9654109754",
      "contactType": "customer service",
      "areaServed": "IN"
    }
  ],
  "sameAs": []
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "UV Test Solutions",
  "url": BASE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${BASE_URL}/products?search={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export function getHomepageJsonLd() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Highest Selling Test & Measuring Instruments",
    "numberOfItems": highestSellingProducts.length,
    "itemListElement": highestSellingProducts.slice(0, 30).map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": p.name,
        "image": p.image,
        "url": `${BASE_URL}/contact?product=${encodeURIComponent(p.name)}`,
        "brand": {
          "@type": "Brand",
          "name": extractBrand(p.name)
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "INR",
          "seller": {
            "@type": "Organization",
            "name": "UV Test Solutions"
          }
        }
      }
    }))
  };

  return [organizationSchema, websiteSchema, itemList];
}

export function getProductsPageJsonLd() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": `${BASE_URL}/products` }
    ]
  };

  const offerCatalog = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "UV Test Solutions Product Catalog",
    "url": `${BASE_URL}/products`,
    "numberOfItems": productCategories.reduce((sum, c) => sum + c.subcategories.length, 0),
    "itemListElement": productCategories.map(cat => ({
      "@type": "OfferCatalog",
      "name": cat.name,
      "url": `${BASE_URL}/products?category=${cat.id}`,
      "itemListElement": cat.subcategories.map(sub => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": sub,
          "category": cat.name
        }
      }))
    }))
  };

  return [breadcrumb, offerCatalog, organizationSchema];
}

export function getSubcategoryJsonLd(categoryName: string, subcategory: string, products: { name: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${subcategory} - ${categoryName}`,
    "numberOfItems": products.length,
    "itemListElement": products.slice(0, 50).map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": p.name,
        "category": subcategory,
        "brand": {
          "@type": "Brand",
          "name": extractBrand(p.name)
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "INR",
          "seller": { "@type": "Organization", "name": "UV Test Solutions" }
        }
      }
    }))
  };
}

function extractBrand(productName: string): string {
  const knownBrands = [
    "Keysight", "Fluke", "Tektronix", "Rigol", "Siglent", "Hantek", "UNI-T",
    "Hakko", "Quick", "Bakon", "Weller", "JBC", "Mitutoyo", "Insize", "Baker",
    "Bosch", "Makita", "Stanley", "Taparia", "Proskit", "Hioki", "Meco",
    "Lutron", "HTC", "Rish", "Goot", "Atten", "Sugon", "Solder", "GW Instek",
    "BK Precision", "Yokogawa", "Kyoritsu", "Megger", "Amprobe", "Extech",
    "Klein", "Wiha", "Knipex", "Wera", "Dewalt", "Milwaukee", "Metabo",
    "Kilews", "Hios", "Kolver", "TGK", "Agilent", "R&S", "Anritsu"
  ];
  for (const brand of knownBrands) {
    if (productName.toLowerCase().includes(brand.toLowerCase())) return brand;
  }
  return "UV Test Solutions";
}
