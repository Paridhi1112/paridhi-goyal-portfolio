import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Paridhi Goyal — Software Development Engineer | Distributed Systems & AI",
  description:
    "Software Development Engineer specializing in distributed systems, event-driven pipelines, cloud-native microservices, and AI agent orchestration. MS in IT from RPI.",
  keywords: [
    "Paridhi Goyal",
    "Software Development Engineer",
    "Distributed Systems",
    "Java Spring Boot",
    "Apache Kafka",
    "AWS",
    "Multi-Agent AI",
    "Backend Engineer",
    "Oracle OIC",
    "Rensselaer Polytechnic Institute",
  ],
  authors: [{ name: "Paridhi Goyal" }],
  creator: "Paridhi Goyal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://paridhigoyal.dev",
    title: "Paridhi Goyal — Software Development Engineer",
    description: "Distributed Systems, Event-Driven Pipelines, Cloud Infrastructure & AI Applications.",
    siteName: "Paridhi Goyal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paridhi Goyal — SDE | Distributed Systems & AI",
    description: "Building reliable distributed systems and intelligent AI infrastructure.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Paridhi Goyal",
  jobTitle: "Software Development Engineer",
  url: "https://paridhigoyal.dev",
  sameAs: [
    "https://linkedin.com/in/paridhigoyal11",
    "https://github.com/Paridhi1112",
  ],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Rensselaer Polytechnic Institute" },
  knowsAbout: [
    "Distributed Systems", "Java", "Spring Boot", "Apache Kafka",
    "Python", "AWS", "Kubernetes", "Multi-Agent AI", "LLMs", "System Design",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-[#00FFA3]/20 selection:text-[#00FFA3]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
