import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FooterLayout, NavbarLayout } from "@/layout";
import { LanguageProvider } from "@/context/language-context";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "ASI Global | IT & Software Solutions",
  description:
    "ASI Global provides IT solutions and software services to help businesses grow worldwide",
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
  metadataBase: new URL("https://asiglobalit.com"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "ASI Global | IT & Software Solutions",
    description:
      "ASI Global provides IT solutions and software services to help businesses grow worldwide",
    url: "https://asiglobalit.com",
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
    title: "ASI Global | IT & Software Solutions",
    description:
      "ASI Global provides IT solutions and software services to help businesses grow worldwide",
    images: ["https://asiglobalit.com/logo.png"],
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
    google: "", // Google Search Console verification code
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
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="author" content="Muhammad Yusuf Nasrulloh" />
        <meta
          name="description"
          content="Muhammad Yusuf Nasrulloh - Full Stack Developer portfolio from Tashkent, Uzbekistan. React, Node.js, TypeScript expert."
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="twitter:image"
          content="https://asiglobalit.com/logo.png"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="ASI Global IT"
        />
        <link rel="canonical" href="https://asiglobalit.com/" />
        <meta
          name="google-site-verification"
          content="pGjS4zQzBTsiXmh_QOqD-NAmW9TH_982Mt-3gTedxGQ"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Yusuf Nasrulloh",
              url: "https://muhammad-yusuf.uz",
              sameAs: [
                "https://github.com/muhammadyusuf622",
                "https://www.linkedin.com/in/muhammad-yusuf-nasrulloh-1757a2357/",
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Portfolio",
              },
            }),
          }}
        />
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
