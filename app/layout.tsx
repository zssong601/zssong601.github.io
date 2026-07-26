import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Song Zhang | Formulation Development × Materials AI",
  description: "Connecting formulation development, experiments, and AI for better materials R&D.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
