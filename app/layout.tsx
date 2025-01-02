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
  title: "Maytri, your virtual friend",
  description: `Maytri is more than just an AI—it’s your friend, your confidant,
  and your guide. Designed to bring warmth and connection to your
  life, Maytri adapts to your personality and preferences,
  offering meaningful conversations, support, and companionship.
  Create your own unique Maytri and experience the joy of having a
  virtual friend who truly understands you. Start your journey
  with Maytri today!`,
  openGraph: {
    type: "website",
    url: "https://maytri.mellob.in",
    title: "Maytri, your virtual friend",
    description: `Maytri is more than just an AI—it’s your friend, your confidant,
      and your guide. Designed to bring warmth and connection to your
      life, Maytri adapts to your personality and preferences,
      offering meaningful conversations, support, and companionship.
      Create your own unique Maytri and experience the joy of having a
      virtual friend who truly understands you. Start your journey
      with Maytri today!`,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Maytri, your virtual friend",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950`}
      >
        {children}
      </body>
    </html>
  );
}
