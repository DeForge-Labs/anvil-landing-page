import { Lexend_Deca } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/home/navbar/Navbar";
import CTA from "@/components/home/CTA";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["variable"],
});

export const metadata = {
  title: "Anvil: Web3 AI Agents and Automations in Minutes",
  description:
    "Web3 AI Agents and automations built in minutes. Anvil lets you build and deploy powerful Web3 workflows without writing a single line of code.",
  keywords: [
    "AI Agents",
    "No-Code AI",
    "Build AI Assistant",
    "AI Workflows",
    "Automation",
    "Anvil",
    "Web3",
  ],
  authors: [{ name: "Anvil Team" }],
  creator: "Anvil",

  metadataBase: new URL("https://runanvil.com"),
  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Anvil: Web3 AI Agents and Automations in Minutes",
    description:
      "Web3 AI Agents and automations built in minutes. Anvil lets you build and deploy powerful Web3 workflows without writing a single line of code.",
    url: "https://runanvil.com",
    siteName: "Anvil",
    type: "website",
    images: [
      {
        url: "/logo/Cover.jpg",
        width: 1200,
        height: 675,
        alt: "Anvil Social Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Anvil: Web3 AI Agents and Automations in Minutes",
    description:
      "Web3 AI Agents and automations built in minutes. Anvil lets you build and deploy powerful Web3 workflows without writing a single line of code.",
    images: ["/logo/Cover.jpg"],
    creator: "@Deforge_io",
  },

  other: {
    "application/ld+json": `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Anvil",
        "url": "https://runanvil.com",
        "description": "Web3 AI Agents and automations built in minutes. Anvil lets you build and deploy powerful Web3 workflows without writing a single line of code.",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Anvil",
          "url": "https://runanvil.com",
          "logo": "https://runanvil.com/logo/logo-black.svg",
          "sameAs": [
            "https://x.com/Deforge_io",
            "https://twitter.com/Deforge_io"
          ]
        }
      }
    </script>`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lexendDeca.className} antialiased overflow-x-hidden light`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1 relative">{children}</main>
        <CTA />
      </body>
    </html>
  );
}
