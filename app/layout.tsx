import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#111215",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://tinorides.com"),
  title: {
    default: "TINO RIDES | Premier Luxury Car Rental & VIP Chauffeur Service",
    template: "%s | TINO RIDES",
  },
  description:
    "Experience the pinnacle of luxury car rental, armored VIP SUV convoys, and executive chauffeur services in Nigeria. Rent Rolls-Royce, Bentley, Mercedes-Maybach, and supercars in Lagos and Abuja with TINO RIDES.",
  applicationName: "TINO RIDES",
  authors: [{ name: "TINO RIDES", url: "https://tinorides.com" }],
  generator: "Next.js",
  keywords: [
    "luxury car rental nigeria",
    "rolls royce hire lagos",
    "vip chauffeur lagos",
    "armored suvs rental abuja",
    "mercedes maybach rental",
    "executive car hire nigeria",
    "exotic sports car rental lagos",
    "airport vip transfer lagos",
    "intercity convoy escort nigeria",
    "tino rides",
  ],
  creator: "TINO RIDES",
  publisher: "TINO RIDES",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://tinorides.com",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://tinorides.com",
    siteName: "TINO RIDES",
    title: "TINO RIDES | Premier Luxury Car Rental & VIP Chauffeur Services",
    description:
      "Nigeria's premier luxury car rental, VIP chauffeur, and armored convoy escort services. Rent Rolls-Royce, Bentley, Maybach, and supercars in Lagos & Abuja.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TINO RIDES - Nigeria's Premier Luxury Fleet & VIP Chauffeur Service",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TINO RIDES | Luxury Car Rental & VIP Chauffeur Service",
    description:
      "Nigeria's finest fleet of luxury sedans, supercars, and armored executive protection across Lagos and Abuja.",
    images: ["/og-image.png"],
    creator: "@tinorides",
    site: "@tinorides",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
      { url: "/logo-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "Automotive & Luxury Travel",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} font-sans h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
