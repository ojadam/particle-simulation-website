import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LJ Molecular Dynamics Portfolio",
  description: "Portfolio showcase for a from-scratch Lennard-Jones MD simulation project."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
