import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proxa AI – Create & Plan On-Brand Content Faster",
  description: "Proxa AI helps social media managers create and plan on-brand content faster with AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
