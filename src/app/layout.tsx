import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FooterLayout, NavbarLayout } from "@/layout";
import { LanguageProvider } from "@/context/language-context";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "ASI Global IT - Full Stack Developer | Portfolio",
  description:
    "ASI Global IT - Professional Full Stack Developer from Tashkent, Uzbekistan. Expert in React, Node.js, TypeScript, and modern web technologies. View my projects, skills, and experience.",
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicon/site.webmanifest",
  keywords: ["ASI Global IT"],
  authors: [{ name: "Muhammad Yusuf Nasrulloh" }],
  creator: "Muhammad Yusuf Nasrulloh",
  publisher: "Muhammad Yusuf Nasrulloh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://muhammad-yusuf.uz"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Muhammad Yusuf Nasrulloh - Full Stack Developer Portfolio",
    description:
      "Professional Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. Based in Tashkent, Uzbekistan.",
    url: "https://muhammad-yusuf.uz",
    siteName: "Muhammad Yusuf Nasrulloh",
    images: [
      {
        url: "/myImg.jpg",
        width: 1200,
        height: 630,
        alt: "ASI Global IT - Web Site",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Yusuf Nasrulloh - Full Stack Developer Portfolio",
    description:
      "Professional Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies.",
    images: ["https://www.muhammad-yusuf.uz/myImg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google:
      "google-site-verification=pGjS4zQzBTsiXmh_QOqD-NAmW9TH_982Mt-3gTedxGQ", // Google Search Console verification code
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <NavbarLayout />
          {children}
          <Toaster position="top-right" />
          <FooterLayout />
        </LanguageProvider>
      </body>
    </html>
  );
}
