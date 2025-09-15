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
  keywords: [
    "ASI Global IT",
    "Order a website",
    "Website development services",
    "Create a business website",
    "Affordable website design",
    "Website with SEO optimization",
    "Corporate website development",
    "Order an online store",
    "Create an online platform",
    "SaaS development services",
    "IT services for business",
    "Mobile app development services",
    "Web design and promotion",
    "Web application development",
    "IT consulting services",
    "IT outsourcing company",
    "it services in europe"
  ],
  authors: [{ name: "ASI Global IT" }],
  creator: "Muhammad Yusuf Nasrulloh",
  publisher: "Muhammad Yusuf Nasrulloh",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
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
    siteName: "ASI Global IT",
    images: [
      {
        url: "/logo.png",
        width: 630,
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#439e0a" />
        <meta name="author" content="ASI Global IT" />
        <meta
          name="description"
          content="ASI Global provides IT solutions and software services to help businesses grow worldwide"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="twitter:image" content="https://asiglobalit.com/logo.png" />
        <meta name="apple-mobile-web-app-title" content="ASI Global IT" />
        <link rel="canonical" href="https://asiglobalit.com/" />
        <meta
          name="google-site-verification"
          content="IXIEAms8POWVYMOAbBKp0rl8RNEJfXidH4eWO5urkeg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ASI Global IT",
              url: "https://asiglobalit.com",
              logo: "https://asiglobalit.com/logo.png",
              sameAs: [""],
              jobTitle: "Create An Application For Technologies",
              worksFor: {
                "@type": "Organization",
                name: "ASI Global IT",
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
