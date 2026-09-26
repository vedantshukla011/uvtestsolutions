import { Brand } from "@/data/brandsData";
import { productCategories } from "@/data/productsData";

export const BASE_URL = "https://www.uvtestsolutions.com";

const seller = {
  "@type": "Organization",
  name: "UV Test Solutions",
  url: `${BASE_URL}/`,
  logo: `${BASE_URL}/logo.png`,
  areaServed: "IN",
};

const shortName = (brand: Brand) => brand.name.split(" ")[0];

/** Keyword-rich meta title for a brand page. */
export const brandTitle = (brand: Brand) =>
  `${shortName(brand)} India — Authorized Distributor & Price List | UV Test Solutions`;

/** Meta description that reads like a real dealer listing. */
export const brandDescription = (brand: Brand) => {
  const cats = (brand.categories ?? []).slice(0, 3).map((c) => c.title.toLowerCase());
  const catText = cats.length ? ` Buy ${cats.join(", ")} and more.` : "";
  return `Buy genuine ${brand.name} ${brand.specialty.toLowerCase()} in India from UV Test Solutions — authorized supplier with warranty, calibration and service support.${catText} Request a quote today.`.slice(
    0,
    158,
  );
};

export const brandKeywords = (brand: Brand) => {
  const s = shortName(brand);
  const base = [
    `${s} India`,
    `${s} distributor India`,
    `${s} dealer India`,
    `${s} price in India`,
    `buy ${s} online India`,
    `${s} supplier Delhi NCR`,
    `${s} authorized distributor`,
    brand.specialty,
  ];
  const cats = (brand.categories ?? []).map((c) => `${s} ${c.title.toLowerCase()} price`);
  const models = (brand.models ?? []).map((m) => `${s} ${m.id} price India`);
  const products = (brand.products ?? []).map((p) => `${s} ${p.model} price India`);
  return [...base, ...cats, ...models.slice(0, 8), ...products.slice(0, 12)].join(", ");
};

/** Product-category deep links relevant to the brand, for internal linking. */
export function getRelatedCategoryLinks(brand: Brand) {
  const haystack = [
    brand.specialty,
    brand.knownFor ?? "",
    ...(brand.categories ?? []).map((c) => `${c.title} ${c.desc}`),
    ...(brand.models ?? []).map((m) => `${m.title} ${m.tags.join(" ")}`),
    ...(brand.products ?? []).map((p) => `${p.category} ${p.description}`),
  ]
    .join(" ")
    .toLowerCase();

  const links: { label: string; href: string }[] = [];
  for (const cat of productCategories) {
    for (const sub of cat.subcategories) {
      const needle = sub.toLowerCase().replace(/\s*&\s*/g, " ").split(" (")[0];
      const words = needle.split(" ").filter((w) => w.length > 3);
      const hit =
        haystack.includes(needle) ||
        (words.length > 1 && words.every((w) => haystack.includes(w)));
      if (hit) {
        links.push({
          label: sub,
          href: `/products?category=${cat.id}&subcategory=${encodeURIComponent(sub)}`,
        });
      }
    }
  }
  return links.slice(0, 10);
}

/** Brands related by specialty or country, for internal linking between brand pages. */
export function getRelatedBrands(brand: Brand, all: Brand[]) {
  const key = brand.specialty.toLowerCase().split(" ")[0];
  const country = brand.origin.split(",").pop()?.trim().toLowerCase() ?? "";
  return all
    .filter((b) => b.slug !== brand.slug)
    .map((b) => {
      let score = 0;
      if (b.specialty.toLowerCase().includes(key)) score += 2;
      if (country && b.origin.toLowerCase().includes(country)) score += 1;
      return { b, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, x) => x.score - a.score)
    .slice(0, 6)
    .map((x) => x.b);
}

export function getBrandDetailJsonLd(brand: Brand) {
  const url = `${BASE_URL}/brands/${brand.slug}`;
  const graph: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Brand",
      name: brand.name,
      alternateName: shortName(brand),
      url,
      logo: `${BASE_URL}${brand.logo}`,
      description: brand.tagline,
      foundingDate: brand.founded,
      ...(brand.parent ? { parentOrganization: { "@type": "Organization", name: brand.parent } } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: brandTitle(brand),
      url,
      description: brandDescription(brand),
      isPartOf: { "@type": "WebSite", name: "UV Test Solutions", url: `${BASE_URL}/` },
      about: { "@type": "Brand", name: brand.name },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Brands", item: `${BASE_URL}/brands` },
        { "@type": "ListItem", position: 3, name: brand.name, item: url },
      ],
    },
  ];

  if (brand.products?.length) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${brand.name} products available in India`,
      numberOfItems: brand.products.length,
      itemListElement: brand.products.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: `${shortName(brand)} ${p.model}`,
          sku: p.model,
          mpn: p.model,
          category: p.category,
          description: p.description,
          brand: { "@type": "Brand", name: brand.name },
          offers: {
            "@type": "Offer",
            price: p.priceInr,
            priceCurrency: "INR",
            availability: brand.slug === "micsig" ? "https://schema.org/BackOrder" : "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
            url,
            seller,
          },
        },
      })),
    });
  } else if (brand.models?.length) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `Bestselling ${shortName(brand)} models in India`,
      numberOfItems: brand.models.length,
      itemListElement: brand.models.map((m, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: `${shortName(brand)} ${m.id}`,
          sku: m.id,
          description: m.desc,
          brand: { "@type": "Brand", name: brand.name },
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url,
            seller,
          },
        },
      })),
    });
  }

  return graph;
}

export function getBrandsIndexJsonLd(all: Brand[]) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Test & Measurement Brands We Distribute in India",
      url: `${BASE_URL}/brands`,
      description:
        "Authorized Indian distributor for Fluke, Keysight, Tektronix, Yokogawa, Mitutoyo, Siglent, RIGOL, ITECH, Weller, HAKKO and more test & measurement brands.",
      isPartOf: { "@type": "WebSite", name: "UV Test Solutions", url: `${BASE_URL}/` },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Brands distributed by UV Test Solutions in India",
      numberOfItems: all.length,
      itemListElement: all.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${BASE_URL}/brands/${b.slug}`,
        name: b.name,
        item: {
          "@type": "Brand",
          name: b.name,
          url: `${BASE_URL}/brands/${b.slug}`,
          logo: `${BASE_URL}${b.logo}`,
          description: b.tagline,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Brands", item: `${BASE_URL}/brands` },
      ],
    },
  ];
}
