import "../styles/globals.css";

import { Geist } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projin",
  description:
    "Open-source and AI-native project manager, reimagined for speed and clarity",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
