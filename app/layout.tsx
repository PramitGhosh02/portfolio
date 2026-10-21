import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Tracker from "@/components/Tracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pramit Kumar Ghosh",
    template: "%s — Pramit Kumar Ghosh",
  },
  description:
    "Computer Science student at Symbiosis Institute of Technology, Nagpur. Focus on backend development and applied machine learning.",
  authors: [{ name: "Pramit Kumar Ghosh" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pramitghosh.dev",
    siteName: "Pramit Kumar Ghosh",
    title: "Pramit Kumar Ghosh",
    description:
      "CS student at SIT Nagpur. Backend development and applied ML.",
  },
  twitter: {
    card: "summary",
    title: "Pramit Kumar Ghosh",
    description:
      "CS student at SIT Nagpur. Backend development and applied ML.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Tracker />
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
