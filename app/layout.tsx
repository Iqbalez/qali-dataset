import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";
import { StickyCTA } from "@/src/components/layout/sticky-cta";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://qali.et";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Qali | African Language Datasets for AI",
    template: "%s | Qali",
  },
  description:
    "High-quality African language datasets for LLMs, ASR, RLHF, and multimodal AI. Native speaker validated. Enterprise-ready.",
  keywords: [
    "African language datasets",
    "Amharic speech dataset",
    "RLHF African languages",
    "Low-resource language AI data",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Qali",
    title: "Qali | African Language Datasets for AI",
    description:
      "High-quality African language datasets for LLMs, ASR, RLHF, and multimodal AI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Qali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qali | African Language Datasets for AI",
    description:
      "High-quality African language datasets for LLMs, ASR, RLHF, and multimodal AI.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/icon.jpg", type: "image/jpeg" }],
    apple: [{ url: "/icon.jpg", type: "image/jpeg" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <TooltipProvider>
          <Navbar />
          <main className="flex-1 pb-20 md:pb-0">{children}</main>
          <Footer />
          <StickyCTA />
        </TooltipProvider>
      </body>
    </html>
  );
}
