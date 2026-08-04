// ─── Experience ──────────────────────────────────────────────────────────────
export interface ExperienceEntry {
  company: string;
  logo: string; // 2-letter initials
  logoColor: string;
  role: string;
  client?: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  tech: string[];
}

// IMPORTANT: Tech Mahindra = "Software Development Engineer" (NOT Senior)
export const experience: ExperienceEntry[] = [
  {
    company: "Tech Mahindra",
    logo: "TM",
    logoColor: "#E31837",
    role: "Software Development Engineer",
    client: "Oracle",
    period: "Aug 2024 – Aug 2025",
    location: "Pune, India",
    type: "Full-time",
    highlights: [
      "Built Java & Python REST microservices processing 100K+ encrypted payment records/month with 99.9% accuracy across Oracle Fusion ERP modules.",
      "Increased microservice transaction throughput by 30% through Redis distributed caching and async thread-pool optimization.",
      "Automated multi-cloud CI/CD pipelines with Docker and Kubernetes, cutting production deployment time by 40%.",
      "Led enterprise SOA → Oracle Integration Cloud (OIC) migration for global accounts including the UK's largest hospitality chain.",
      "Engineered PGP-secured inbound/outbound payment file decryption workflows and supported full SIT/UAT cycles.",
      "Triaged and resolved 25+ critical production defects across cross-functional QA sprints, maintaining strict SLA response windows.",
    ],
    tech: ["Java", "Python", "Spring Boot", "Oracle OIC", "Redis", "Kubernetes", "Docker", "CI/CD", "PGP"],
  },
  {
    company: "Accenture",
    logo: "AC",
    logoColor: "#A100FF",
    role: "Application Development Analyst",
    client: "General Electric",
    period: "Jun 2022 – Jul 2024",
    location: "Indore, India",
    type: "Full-time",
    highlights: [
      "Architected Apache NiFi + Kafka real-time streaming pipelines integrating HR and Finance systems, improving data processing efficiency by 50%.",
      "Built distributed ELK Stack + Grafana telemetry dashboards maintaining 99.99% uptime across 5 production environments.",
      "Automated financial reconciliation workflows in Python and JavaScript, eliminating 15+ hours of weekly manual effort.",
      "Authored Accenture internal whitepaper on 'Multipart Form-Data Large File Automation' — adopted company-wide as engineering standard.",
      "Led Gen2 → Gen3 Oracle OIC migration for Order Management, Customer, GL, AR, and Shipment modules.",
    ],
    tech: ["Apache NiFi", "Apache Kafka", "ELK Stack", "Grafana", "Python", "Groovy", "Oracle OIC", "GraphQL"],
  },
  {
    company: "Accenture",
    logo: "AC",
    logoColor: "#A100FF",
    role: "Application Development Associate",
    client: "General Electric",
    period: "Apr 2021 – May 2022",
    location: "Pune, India",
    type: "Full-time",
    highlights: [
      "Developed NiFi big data processing flows surfaced on executive DIVE dashboards via Elasticsearch indexes.",
      "Wrote high-throughput Groovy transformation scripts for multi-format ETL payload validation.",
      "Managed end-to-end SDLC documentation, BRD authoring, and UT/SIT/UAT sign-off cycles.",
    ],
    tech: ["Apache NiFi", "Groovy", "ELK Stack", "Big Data", "REST"],
  },
  {
    company: "BestPeers Infosystem",
    logo: "BP",
    logoColor: "#2563EB",
    role: "Trainee Software Developer",
    period: "Jan 2020 – Feb 2021",
    location: "Indore, India",
    type: "Full-time",
    highlights: [
      "Delivered full-stack features in Django + React, accelerating deployment cycles by 40%.",
      "Designed relational MySQL schemas with index tuning, achieving near-zero defect production releases.",
    ],
    tech: ["Django", "React", "Python", "MySQL", "JavaScript"],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    degree: "Master of Science — Information Technology",
    specialization: "Data Science & Analytics",
    institution: "Rensselaer Polytechnic Institute (RPI)",
    period: "Aug 2025 – May 2026",
    gpa: "3.93 / 4.0",
    honors: "Graduate Teaching Assistant — Statistical Methods & Managing IT Resources",
  },
  {
    degree: "Bachelor of Technology — Computer Science & Engineering",
    specialization: "Software Engineering",
    institution: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
    period: "Jul 2016 – Jul 2020",
    gpa: "3.6 / 4.0",
    honors: "First Class with Distinction",
  },
];
