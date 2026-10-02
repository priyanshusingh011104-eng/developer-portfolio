import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import "./globals.css";

import CustomCursor from "../components/ui/CustomCursor";
import GlobalBackground from "../components/ui/GlobalBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://your-domain.com"
  ),

  title: {
    default:
      "Priyanshu Singh | Software Engineer",
    template:
      "%s | Priyanshu Singh",
  },

  description:
    "Portfolio of Priyanshu Singh — Software Engineer and Backend Developer building scalable web applications, REST APIs, e-commerce platforms and full-stack products.",

  keywords: [
    "Priyanshu Singh",
    "Software Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Portfolio",
  ],

  authors: [
    {
      name: "Priyanshu Singh",
    },
  ],

  creator: "Priyanshu Singh",

  openGraph: {
    type: "website",

    title:
      "Priyanshu Singh | Software Engineer",

    description:
      "Software Engineer focused on backend systems, full-stack applications, scalable APIs and modern digital products.",

    url: "https://your-domain.com",

    siteName:
      "Priyanshu Singh Portfolio",

    images: [
      {
        url: "/images/og/portfolio-og.png",
        width: 1200,
        height: 630,
        alt:
          "Priyanshu Singh Software Engineer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Priyanshu Singh | Software Engineer",

    description:
      "Backend-focused Software Engineer building scalable systems and full-stack products.",

    images: [
      "/images/og/portfolio-og.png",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <GlobalBackground />

        <CustomCursor />

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}