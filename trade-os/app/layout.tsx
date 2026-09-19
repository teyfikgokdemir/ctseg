import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CTSEG Trade OS",
  description: "Private trade intelligence, sourcing, buyer discovery and logistics workspace for CTSEG.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
