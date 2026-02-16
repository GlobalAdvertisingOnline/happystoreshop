import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HappyStoreShop — Your Trusted Online Shopping Partner",
    template: "%s | HappyStoreShop",
  },
  description:
    "HappyStoreShop is your trusted online shopping partner, delivering quality products and exceptional customer service to thousands of happy customers worldwide.",
  keywords: ["online shopping", "trusted store", "customer service", "order tracking", "secure shopping"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "HappyStoreShop",
    title: "HappyStoreShop — Your Trusted Online Shopping Partner",
    description:
      "Delivering quality products and exceptional customer service to thousands of happy customers worldwide.",
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
