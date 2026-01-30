import type { Metadata } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "T & T Construction & Plumbing | Newville, PA | Licensed Contractor Since 2006",
  description:
    "Family-owned construction and plumbing serving Newville, Carlisle, Shippensburg & Cumberland Valley since 2006. Licensed PA contractor. Plumbing, remodeling, electrical, bathrooms, decks & more. Free estimates. Call (717) 776-7319.",
  keywords: [
    "plumber Newville PA",
    "construction Newville PA",
    "plumbing contractor Cumberland Valley",
    "bathroom remodel Carlisle PA",
    "general contractor Shippensburg",
    "T&T Construction",
    "Tim Barrick plumber",
    "licensed plumber PA",
    "deck building Newville",
    "emergency plumber Cumberland County",
  ],
  openGraph: {
    title: "T & T Construction & Plumbing | Newville, PA",
    description:
      "Family-owned construction and plumbing serving the Cumberland Valley since 2006. 5-star rated. Free estimates. Call (717) 776-7319.",
    type: "website",
    locale: "en_US",
    url: "https://tandtconstructionplumbing.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://tandtconstructionplumbing.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PlumbingContractor",
  name: "T & T Construction & Plumbing",
  url: "https://tandtconstructionplumbing.com",
  telephone: "+17177767319",
  email: "reesepandh@embarqmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "61 Fickes Rd",
    addressLocality: "Newville",
    addressRegion: "PA",
    postalCode: "17241",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.14268780888541,
    longitude: -77.37191117629165,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "06:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "06:00",
      closes: "15:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "33",
    bestRating: "5",
  },
  priceRange: "$$",
  foundingDate: "2006",
  description:
    "Family-owned construction and plumbing serving the Cumberland Valley since 2006.",
  areaServed: [
    "Newville", "Carlisle", "Shippensburg", "Walnut Bottom",
    "Cumberland Valley", "Cumberland County",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#B87333" />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${dmSerif.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
