import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siena Siege Dashboard",
  description: "Fasting phase tracker for Vercel deployment"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
