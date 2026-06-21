import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { DM_Sans, Playfair_Display, Cormorant_Garamond, Great_Vibes } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Divine Beauty & Nails Studio Wien – Nägel, Beauty & Waxing",
  description: "Dein Beauty-Studio in Wien – Gelmodellage, Shellac, Pediküre, Waxing & Gesichtsbehandlung. Individuelle Beratung & gepflegte Ergebnisse.",
  authors: [{ name: "Divine Beauty & Nails Studio" }],
  openGraph: {
    type: "website",
    siteName: "Divine Beauty & Nails Studio",
    url: "https://divinenails.at",
    title: "Divine Beauty & Nails Studio Wien – Nägel, Beauty & Waxing",
    description: "Dein Beauty-Studio in Wien – Gelmodellage, Shellac, Pediküre, Waxing & Gesichtsbehandlung. Individuelle Beratung & gepflegte Ergebnisse.",
    images: [{ url: "https://divinenails.at/studio5opt.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Beauty & Nails Studio Wien",
    description: "Nägel, Beauty & Waxing in Wien. Gelmodellage, Shellac, Pediküre, Wimpernlifting & mehr. Jetzt Termin anfragen!",
    images: ["https://divinenails.at/studio5opt.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Divine Beauty & Nails Studio",
  image: "https://divinenails.at/studio5opt.jpg",
  url: "https://divinenails.at",
  telephone: "+43676363372",
  email: "kontakt@divinenails.at",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Klosterneuburger Straße 98",
    addressLocality: "Wien",
    postalCode: "1200",
    addressCountry: "AT",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "17:00" },
  ],
  sameAs: ["https://www.instagram.com/divine.beauty.nails.studio"],
  priceRange: "€€",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${dmSans.variable} ${playfair.variable} ${cormorant.variable} ${greatVibes.variable}`}>
      <head>
        <link rel="canonical" href="https://divinenails.at" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
