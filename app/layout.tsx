import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paridhi Goyal — Senior Software Engineer",
  description:
    "Senior Software Engineer with 5+ years building cloud-native systems, scalable APIs, and data pipelines. MS in Information Technology at RPI.",
  keywords: [
    "Paridhi Goyal",
    "Software Engineer",
    "Full Stack",
    "Java",
    "Python",
    "AWS",
    "Cloud",
    "Data Pipelines",
    "RPI",
  ],
  openGraph: {
    title: "Paridhi Goyal — Senior Software Engineer",
    description:
      "Senior Software Engineer with 5+ years building cloud-native systems, scalable APIs, and data pipelines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
