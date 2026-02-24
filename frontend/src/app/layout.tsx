import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Random Cheat Selling — Premium Gaming Cheats | Instant Delivery",
  description:
    "Buy premium gaming cheats for BGMI, Free Fire, and more. Instant delivery, 100% secure payments, 24/7 support. Mobile, PC, iOS, and Bypass cheats available.",
  keywords:
    "gaming cheats, BGMI cheat, Free Fire cheat, mobile cheat, PC cheat, bypass cheat, silent aim, root cheat, instant delivery, premium gaming tools",
  themeColor: "#00eaff",
  openGraph: {
    title: "Random Cheat Selling — Premium Gaming Cheats",
    description:
      "Instant delivery, 100% secure, 24/7 support. Premium cheats for BGMI, Free Fire, PC & more.",
    type: "website",
    url: "https://offlinee.online",
    siteName: "Random Cheat Selling",
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Cheat Selling — Premium Gaming Cheats",
    description:
      "Instant delivery, 100% secure. Buy gaming cheats for BGMI, Free Fire & more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-[#0a0d18] text-white min-h-screen antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
