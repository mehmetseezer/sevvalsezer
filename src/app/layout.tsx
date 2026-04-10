import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Şevval Sezer | Klinik Psikolog",
    template: "%s | Şevval Sezer",
  },
  description:
    "Şevval Sezer — klinik psikolog. Bireysel terapi, psikolojik danışmanlık ve ruh sağlığı blogu.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Şevval Sezer | Klinik Psikolog",
    description:
      "Yumuşak ve güvenli bir terapi ortamında bilimsel yaklaşım ve empati.",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Şevval Sezer" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${dmSans.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="pastel-surface bg-page-mesh flex min-h-full flex-col font-sans text-foreground">
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
