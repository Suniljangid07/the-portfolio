import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunil Jangid | Founding Software Engineer",
  description:
    "Immersive portfolio for Sunil Jangid, a founding software engineer focused on AI systems, integrations, and scalable product architecture.",
  keywords: [
    "Sunil Jangid",
    "Founding Software Engineer",
    "Next.js",
    "Supabase",
    "System Design",
    "Integrations",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
