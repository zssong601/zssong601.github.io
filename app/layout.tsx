import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Song Zhang | Materials R&D",
  description: "Materials R&D across formulation, processing, characterization, and data.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
