import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Xinity — The World's First Product-Oriented Tech Community",
  description:
    "Xinity is a global hackathon community where builders ship real products, not just prototypes. Join thousands of makers building the future together.",
  keywords: [
    "hackathon",
    "tech community",
    "product building",
    "xinity",
    "developers",
    "open source",
  ],
  openGraph: {
    title: "Xinity — Build. Ship. Community.",
    description:
      "The world's first product-oriented tech community. Where builders ship real products.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="page-wrapper">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
