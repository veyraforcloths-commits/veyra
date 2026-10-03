import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/ui/CustomCursor";
import SmoothScrollProvider from "./components/ui/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "VEYRA | Fashion That Moves With You",
  description:
    "Discover premium clothing collections at VEYRA. Modern, sustainable fashion designed for those who refuse to stand still. Shop men's, women's, and kids' collections.",
  keywords: ["fashion", "clothing", "premium", "sustainable", "VEYRA", "menswear", "womenswear"],
  openGraph: {
    title: "VEYRA | Fashion That Moves With You",
    description: "Discover premium clothing collections at VEYRA.",
    type: "website",
    siteName: "VEYRA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
