import type { Metadata } from "next";
import { Playfair_Display, Inter, Gelasio } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const gelasio = Gelasio({
  variable: "--font-gelasio",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Uttarakhand Community Association of Canada | Connecting Uttarakhandi Hearts",
  description:
    "Uniting Uttarakhandi families across Canada — preserving our heritage, celebrating our culture, and building a stronger community together.",
  keywords: [
    "Uttarakhand Community Canada",
    "Uttarakhandi Association",
    "Indian Community Canada",
    "Uttarakhand Heritage",
    "Kedarnath",
    "Badrinath",
  ],
  openGraph: {
    title: "Uttarakhand Community Association of Canada",
    description:
      "Connecting Uttarakhandi Hearts Across Canada — Namaste & Jai Badri Vishal!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${gelasio.variable}`}>
      <body className={`${playfair.variable} ${inter.variable} ${gelasio.variable} font-inter text-gray-800 antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
