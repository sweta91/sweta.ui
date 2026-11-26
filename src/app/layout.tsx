import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '../components/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL("https://sweta91.github.io"),

  title: "Sweta Patil | Senior Frontend Developer & UI Engineer",

  description:
    "Senior Frontend Developer with 10+ years of experience building responsive, scalable and user-focused web applications using React, Next.js, JavaScript, TypeScript and modern UI technologies.",

  keywords: [
    "Sweta Patil",
    "Senior Frontend Developer",
    "Senior UI Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "TypeScript",
    "UI Engineering",
    "Web Development"
  ],

  authors: [{ name: "Sweta Patil" }],

  creator: "Sweta Patil",

  alternates: {
    canonical: "https://sweta91.github.io/sweta.ui/",
  },

  openGraph: {
    title: "Sweta Patil | Senior Frontend Developer & UI Engineer",
    description:
      "Explore my frontend development projects, UI engineering work and experience with React, Next.js and modern web technologies.",
    url: "https://sweta91.github.io/sweta.ui/",
    siteName: "Sweta Patil Portfolio",
    type: "website",
    images: [
      {
        url: "/sweta.ui/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sweta Patil - Senior Frontend Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sweta Patil | Senior Frontend Developer",
    description:
      "Frontend Developer & UI Engineer showcasing React, Next.js and modern web development projects.",
    images: ["/sweta.ui/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
