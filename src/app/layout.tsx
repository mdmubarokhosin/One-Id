import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/components/nid/language-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoBangla = Noto_Sans_Bengali({
  variable: "--font-noto-bangla",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "এক-আইডি (One-ID) | ইউনিফাইড ডিজিটাল আইডেন্টিটি — বাংলাদেশ সরকার",
  description:
    "এক নাগরিক, এক পরিচয়, এক ওয়ালেট। বাংলাদেশ সরকারের এক-আইডি (Unified Digital Identity) পোর্টাল — জন্ম থেকে মৃত্যু পর্যন্ত একটিমাত্র পরিচয়পত্র। D-STAR প্রকল্প, বাংলাদেশ কম্পিউটার কাউন্সিল, তথ্য ও যোগাযোগপ্রযুক্তি বিভাগ।",
  keywords: [
    "এক-আইডি",
    "One-ID",
    "Unified Digital Identity",
    "D-STAR",
    "Bangladesh NID",
    "জাতীয় পরিচয়পত্র",
    "ডিজিটাল পরিচয়",
    "বাংলাদেশ সরকার",
  ],
  authors: [{ name: "Bangladesh Election Commission / ICT Division" }],
  icons: {
    icon: "/logo-ec.png",
  },
  openGraph: {
    title: "এক-আইডি (One-ID) — Unified Digital Identity",
    description:
      "এক নাগরিক, এক পরিচয়, এক ওয়ালেট। বাংলাদেশের একীভূত ডিজিটাল পরিচয় ব্যবস্থা।",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        {/* Bootstrap Icons CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body
        className={`${inter.variable} ${notoBangla.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>{children}</LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
