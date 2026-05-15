import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article" | "product";
  image?: string;
  keywords?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SEO = ({
  title,
  description,
  canonical,
  type = "website",
  image = "https://uvtestsolutions.lovable.app/favicon.jpg",
  keywords,
  jsonLd,
}: SEOProps) => {
  const siteTitle = "UV Test Solutions";
  // Avoid duplicating brand suffix when the title already includes it or is too long
  const includesBrand = title.toLowerCase().includes(siteTitle.toLowerCase());
  const fullTitle =
    includesBrand || title.length > 50 ? title : `${title} | ${siteTitle}`;
  const baseUrl = "https://uvtestsolutions.lovable.app";
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : undefined;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
