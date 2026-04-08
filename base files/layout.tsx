import type { Metadata } from "next";
import { Inter, Barlow_Condensed, Roboto } from "next/font/google";
import "./globals.css";
import { NewsletterModal } from "@/components/ui/NewsletterModal";
import { AOSInit } from "@/components/AOSInit";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Avista Real Estate Mazatlán | Luxury Life in México",
  description: "Premier real estate, luxury rentals, and expert property management in Mazatlán. Founded by Danny Andrade.",
  icons: {
    icon: "/reference_images/avista logo for button.svg",
    shortcut: "/reference_images/avista logo for button.svg",
    apple: "/reference_images/avista logo for button.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/ogroup-css/global.css" />
        <link rel="stylesheet" href="/ogroup-css/homepage.css" />
        <link rel="stylesheet" href="/ogroup-css/avista-overrides.css" />
      </head>
      <body className={`${inter.variable} ${roboto.variable} ${barlowCondensed.variable} antialiased font-sans flex flex-col min-h-screen`}>
        <AOSInit />
        {children}
        <NewsletterModal />
      </body>
    </html>
  );
}
