import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aiwithrokon.com"),

  title: {
    default: "AI with Rokon — AI Tools & Digital Services",
    template: "%s | AI with Rokon",
  },

  description:
    "Get AI tools and digital services at special prices. Explore Google AI Pro, Canva Pro and AI Pro Combo from AI with Rokon.",

  keywords: [
    "AI tools Bangladesh",
    "Google AI Pro Bangladesh",
    "Canva Pro Bangladesh",
    "AI Pro Combo",
    "AI with Rokon",
    "AI tools",
    "digital services Bangladesh",
  ],

  authors: [{ name: "AI with Rokon" }],

  creator: "AI with Rokon",

  openGraph: {
    title: "AI with Rokon — AI Tools & Digital Services",
    description:
      "Explore Google AI Pro, Canva Pro and AI Pro Combo at special prices.",
    type: "website",
    locale: "en_US",
    siteName: "AI with Rokon",
    images: [
      {
        url: "/combo.png",
        width: 1200,
        height: 630,
        alt: "AI with Rokon — AI Tools & Digital Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI with Rokon — AI Tools & Digital Services",
    description:
      "Explore Google AI Pro, Canva Pro and AI Pro Combo at special prices.",
    images: ["/combo.png"],
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}