// ─── Skills ───────────────────────────────────────────────────────────────────
export interface SkillItem {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
  icon?: string;
}

export interface SkillCategory {
  category: string;
  color: string;
  items: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    category: "Backend Engineering",
    color: "#00FFA3",
    items: [
      { name: "Java", level: "Expert" },
      { name: "Spring Boot", level: "Expert" },
      { name: "Python", level: "Expert" },
      { name: "FastAPI / Django", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
      { name: "Microservices", level: "Advanced" },
      { name: "gRPC", level: "Intermediate" },
    ],
  },
  {
    category: "Distributed Systems",
    color: "#38BDF8",
    items: [
      { name: "Apache Kafka", level: "Advanced" },
      { name: "Apache NiFi", level: "Expert" },
      { name: "Event-Driven Architecture", level: "Advanced" },
      { name: "Redis / Pub-Sub", level: "Advanced" },
      { name: "System Design", level: "Advanced" },
      { name: "Message Queues", level: "Advanced" },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "#FF9900",
    items: [
      { name: "AWS (EC2, S3, Lambda)", level: "Advanced" },
      { name: "Docker", level: "Advanced" },
      { name: "Kubernetes", level: "Advanced" },
      { name: "Oracle Cloud (OIC)", level: "Expert" },
      { name: "CI/CD Pipelines", level: "Advanced" },
      { name: "Terraform / IaC", level: "Intermediate" },
    ],
  },
  {
    category: "AI & Machine Learning",
    color: "#A78BFA",
    items: [
      { name: "LLMs & Prompt Engineering", level: "Advanced" },
      { name: "Multi-Agent Systems", level: "Advanced" },
      { name: "LangChain / AutoGen", level: "Advanced" },
      { name: "RAG & Vector Stores", level: "Advanced" },
      { name: "Google ADK / MCP", level: "Advanced" },
      { name: "Scikit-Learn / ML", level: "Intermediate" },
    ],
  },
  {
    category: "Databases",
    color: "#F97316",
    items: [
      { name: "PostgreSQL / Oracle DB", level: "Expert" },
      { name: "MySQL / SQL Server", level: "Expert" },
      { name: "Redis", level: "Advanced" },
      { name: "MongoDB / NoSQL", level: "Intermediate" },
      { name: "Supabase (pgvector)", level: "Advanced" },
      { name: "Star Schema / DW Design", level: "Advanced" },
    ],
  },
  {
    category: "Observability & Tooling",
    color: "#34D399",
    items: [
      { name: "ELK Stack", level: "Expert" },
      { name: "Grafana / Prometheus", level: "Expert" },
      { name: "Git / GitHub Actions", level: "Expert" },
      { name: "OpenTelemetry", level: "Intermediate" },
      { name: "Next.js / TypeScript", level: "Advanced" },
    ],
  },
];
