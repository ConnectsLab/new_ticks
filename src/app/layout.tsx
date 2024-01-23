import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ticks",
  description: "Welcome to ticks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
