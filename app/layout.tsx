import "./globals.css";
import { AnimatePresence } from "framer-motion";
import type { Metadata, Viewport } from "next";
import { resume } from "@/data/resume";

const SITE_URL = "https://rodjeanverzosa.com";
const SITE_TITLE = `${resume.name} — ${resume.title}`;
const SITE_DESCRIPTION =
  "Portfolio of Rodjean Verzosa, a Senior Fullstack Developer specializing in Next.js, NestJS, Node.js, and mobile app development.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${resume.name}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [resume.name, resume.title, ...resume.skills],
  authors: [{ name: resume.name, url: SITE_URL }],
  creator: resume.name,
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: resume.name,
    locale: "en_US",
    images: [{ url: "/profile-pic.png", width: 130, height: 130, alt: resume.name }],
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/profile-pic.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: resume.name,
  jobTitle: resume.title,
  url: SITE_URL,
  email: `mailto:${resume.contact.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: resume.contact.location,
  },
  sameAs: [resume.contact.github, resume.contact.linkedin],
  knowsAbout: resume.skills,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {/* Content */}
        <div className="relative z-10 container py-10">
          <AnimatePresence mode="sync">
            {children}
          </AnimatePresence>
        </div>
        {/* AI Widget */}

      </body>
    </html>
  );
}