export default function Ticker() {
  const items = [
    "Java", "Python", "AWS", "Kubernetes", "Apache Kafka",
    "Apache NiFi", "Oracle OIC", "Docker", "ELK Stack", "Next.js",
    "Spring Boot", "React", "LLMs", "Agentic AI", "Redis",
    "CI/CD", "Grafana", "Microservices", "Data Pipelines", "Supabase",
  ];

  const doubled = [...items, ...items];

  return (
    <div className="border-y border-white/5 bg-surface overflow-hidden py-4">
      <div
        className="flex whitespace-nowrap animate-ticker"
        style={{ willChange: "transform" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-mono text-xs uppercase tracking-widest text-muted px-6">
              {item}
            </span>
            <span className="text-accent/30 text-xs">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
