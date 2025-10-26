import type { Metadata } from "next";
import { EB_Garamond, Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import SideNav from "@/components/layout/SideNav";

export const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Robin Gottschalk - Business Consultant",
    template: "%s | Robin Gottschalk"
  },
  description: "Professional business consulting services to help you achieve sustainable growth and success.",
  keywords: ["business consultant", "business coaching", "business strategy", "professional consulting"],
  authors: [{ name: "Robin Gottschalk" }],
  creator: "Robin Gottschalk",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Robin Gottschalk - Business Consultant",
  },
  twitter: {
    card: "summary_large_image",
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
    <html lang="en" className={`${garamond.variable} ${inter.variable} ${workSans.variable}`}>
      <body className="antialiased font-[family-name:var(--font-work-sans)]">
        <SideNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
