import type { Metadata } from "next";
import { Jost, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG, FISCAL_PLANS, COWORKING_PLANS, FAQ_ITEMS } from "@/data/siteData";

const jost = Jost({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "At Work SC | Coworking & Endereço Fiscal em Florianópolis (SC-401)",
  description: SITE_CONFIG.description,
  keywords: [
    "Endereço Fiscal Florianópolis",
    "Endereço Fiscal SC-401",
    "Endereço Fiscal com Inscrição Estadual Florianópolis",
    "Coworking Florianópolis SC-401",
    "Salas Privativas Saco Grande Florianópolis",
    "At Work SC",
    "Escritório Virtual Florianópolis",
  ],
  openGraph: {
    title: "At Work SC | Coworking & Endereço Fiscal na SC-401 Florianópolis",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  icons: {
    icon: [
      { url: "/images/original/logo-square.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/original/logo-square.png" },
    ],
    shortcut: [
      { url: "/images/original/logo-square.png" },
    ],
  },
};

import CookieBanner from "@/components/CookieBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["CoworkingSpace", "LocalBusiness"],
        "@id": `${SITE_CONFIG.url}/#organization`,
        name: SITE_CONFIG.name,
        legalName: SITE_CONFIG.legalName,
        url: SITE_CONFIG.url,
        telephone: "+55-48-98415-7836",
        email: SITE_CONFIG.contact.email,
        priceRange: "R$ 54,90 - R$ 450,00+",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${SITE_CONFIG.address.street} - ${SITE_CONFIG.address.complement}`,
          addressLocality: SITE_CONFIG.address.city,
          addressRegion: SITE_CONFIG.address.state,
          postalCode: SITE_CONFIG.address.zipCode,
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE_CONFIG.address.coordinates.lat,
          longitude: SITE_CONFIG.address.coordinates.lng,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Planos de Endereço Fiscal e Coworking At Work SC",
          itemListElement: [...FISCAL_PLANS, ...COWORKING_PLANS].map((p) => ({
            "@type": "Offer",
            name: p.name,
            description: p.subtitle,
            priceSpecification: {
              "@type": "PriceSpecification",
              price: p.price,
              priceCurrency: "BRL",
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };

  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="help" type="text/plain" href="/llms.txt" title="LLM Context Summary" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${jost.variable} ${jetbrainsMono.variable} antialiased font-sans bg-white text-neutral-900`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
