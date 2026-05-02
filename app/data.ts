export const portfolio = {
  name: "Paridhi Goyal",
  tagline: "I build systems that scale — and the teams that scale with them.",
  headline: "Senior Software Engineer",
  subheadline: "Cloud-Native Architecture · Data Pipelines · Full-Stack Engineering",
  location: "Troy, NY",
  email: "paridhi.goyal1112@gmail.com",
  linkedin: "https://linkedin.com/in/paridhigoyal11",
  github: "https://github.com/Paridhi1112",
  leetcode: "https://leetcode.com/paridhi11",
  phone: "+1 (518) 244-7067",

  about: [
    "I'm a Senior Software Engineer with 5+ years of production experience designing high-throughput APIs, cloud-native data pipelines, and microservice architectures at Accenture and Tech Mahindra.",
    "Currently pursuing my MS in Information Technology (Data Science & Analytics) at RPI with a 4.0 GPA — combining deep engineering fundamentals with applied AI/ML. I served as Graduate Teaching Assistant for Statistical Methods and Managing IT Resources.",
    "My work spans the full engineering lifecycle: from architecting enterprise integrations for Fortune 500 clients like General Electric and Oracle, to authoring a published whitepaper that standardized large-file automation practices at Accenture.",
  ],

  stats: [
    { value: "5+", label: "Years of experience" },
    { value: "99.9%", label: "API uptime delivered" },
    { value: "50%", label: "Pipeline efficiency gains" },
    { value: "4.0", label: "MS GPA at RPI" },
  ],

  experience: [
    {
      title: "Senior Software Engineer",
      company: "Tech Mahindra",
      client: "Oracle",
      period: "Aug 2024 – Aug 2025",
      location: "Pune, India",
      type: "Full-time",
      highlights: [
        "Built Java & Python APIs processing 100K+ encrypted payment records/month with 99.9% accuracy across Oracle Fusion modules",
        "Optimized microservices for finance and order management, increasing transaction throughput by 30% via targeted architectural refactoring and Redis caching",
        "Automated multi-cloud CI/CD pipelines with Docker and Kubernetes, cutting production rollout time by 40%",
        "Led SOA → OIC migration for global enterprise clients including the UK's largest hospitality chain and a multinational military organization",
        "Designed inbound/outbound Oracle Integration Cloud (OIC) workflows for HCM and payment file decryption; supported full SIT/UAT cycles",
        "Resolved 25+ critical production defects across cross-functional QA and product sprints",
      ],
      tech: ["Java", "Python", "Oracle OIC", "Kubernetes", "Docker", "Redis", "CI/CD"],
    },
    {
      title: "Application Development Analyst",
      company: "Accenture",
      client: "General Electric",
      period: "Jun 2022 – Jul 2024",
      location: "Indore, India",
      type: "Full-time",
      highlights: [
        "Architected Apache NiFi + Kafka data pipelines integrating HR and finance systems across disparate platforms, boosting processing efficiency by 50%",
        "Built real-time ELK Stack & Grafana observability dashboards maintaining 99.99% uptime across 5+ production environments",
        "Automated financial reconciliation workflows in Python & JavaScript, eliminating 15+ hours of weekly manual effort",
        "Led OIC integration development for Order Management, Customer, GL, AR, FAH, and Shipment modules; drove Gen2 → Gen3 migration",
        "Authored Accenture whitepaper on 'Multipart Form-Data' — now a company-wide standard for large-file automation",
      ],
      tech: ["Apache NiFi", "Kafka", "ELK Stack", "Grafana", "Groovy", "GraphQL", "Python", "Oracle OIC"],
    },
    {
      title: "Application Development Associate",
      company: "Accenture",
      client: "General Electric",
      period: "Apr 2021 – May 2022",
      location: "Pune, India",
      type: "Full-time",
      highlights: [
        "Developed NiFi-based big data integration flows surfaced on the DIVE dashboard via ELK Stack visualizations",
        "Wrote complex Groovy scripts for high-volume data transformation and validation",
        "Owned BRD, execution documentation, and UT/SIT/UAT cycles end-to-end",
      ],
      tech: ["Apache NiFi", "Groovy", "ELK Stack", "Big Data"],
    },
    {
      title: "Trainee Developer",
      company: "BestPeers Infosystem",
      client: null,
      period: "Jan 2020 – Feb 2021",
      location: "Indore, India",
      type: "Full-time",
      highlights: [
        "Delivered full-stack features in Django + React, contributing to a 40% acceleration in deployment cycles",
        "Built RESTful web services and integrated them with frontend applications; optimized database queries to achieve near-zero defect releases",
      ],
      tech: ["Django", "React", "Python", "MySQL"],
    },
  ],

  education: [
    {
      degree: "Master of Science — Information Technology",
      focus: "Data Science & Analytics",
      school: "Rensselaer Polytechnic Institute",
      period: "Aug 2025 – May 2026 (Expected)",
      gpa: "4.0 / 4.0",
      note: "Graduate Teaching Assistant: Statistical Methods & Managing IT Resources",
    },
    {
      degree: "Bachelor of Technology — Computer Science & Engineering",
      focus: null,
      school: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
      period: "Jul 2016 – Jul 2020",
      gpa: "3.6 / 4.0",
      note: null,
    },
  ],

  projects: [
    {
      title: "Multi-Agent Autonomous Research Assistant",
      description:
        "A full-stack agentic AI system that orchestrates specialized LLMs to perform deep research tasks in parallel — decomposing queries, delegating to domain-specific agents, and synthesizing outputs into structured reports.",
      impact: "Reduced research synthesis time by ~70% in testing vs single-model baseline",
      tech: ["Next.js", "Python", "LLMs", "Supabase", "Async APIs", "Agentic Workflows"],
      featured: true,
      type: "AI / Full-Stack",
      metrics: ["Multi-LLM orchestration", "Concurrent async endpoints", "Supabase vector store"],
    },
    {
      title: "Enterprise Bike Store Data Warehouse",
      description:
        "End-to-end data warehouse solution centralizing sales, inventory, and customer data for BI reporting. Includes a robust ETL pipeline with cleansing, transformation, and incremental loading strategies.",
      impact: "Enabled executive-level BI dashboards replacing 3 siloed reporting tools",
      tech: ["T-SQL", "ETL", "Data Warehousing", "SSMS", "Star Schema"],
      featured: true,
      type: "Data Engineering",
      metrics: ["Star schema design", "Incremental ETL loads", "3 source system integrations"],
    },
    {
      title: "Cloud Deployment Framework (Accenture)",
      description:
        "Conceptualized and built a reusable internal cloud framework adopted across Oracle client teams. Standardized provisioning scripts, environment configs, and CI/CD templates.",
      impact: "Reduced cloud deployment time by 45% across Oracle client portfolio",
      tech: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform-style IaC"],
      featured: true,
      type: "Cloud / DevOps",
      metrics: ["45% faster deployments", "Adopted by 3+ teams", "Reusable IaC modules"],
    },
  ],

  skills: {
    "Languages": ["Java", "Python", "JavaScript", "TypeScript", "SQL", "PL/SQL", "Groovy", "C++"],
    "Cloud & DevOps": ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "CI/CD Pipelines", "Oracle Cloud (OIC)", "Linux", "Git", "Telemetry"],
    "Data & AI/ML": ["Apache NiFi", "Apache Kafka", "ELK Stack", "Grafana", "Pandas", "NumPy", "Scikit-learn", "LLMs", "Agentic Workflows"],
    "Full-Stack & Databases": ["Spring Boot", "Django", "Next.js", "React", "Redux", "Node.js", "Microservices", "MySQL", "Oracle DB", "NoSQL", "Redis"],
  },

  certifications: [
    "AWS Certified Developer – Associate",
    "Microsoft Azure Data Fundamentals (DP-900)",
    "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    "Oracle Cloud Infrastructure 2023 Certified Application Integration Professional",
    "Oracle Certified Associate — Java SE 8 Programmer",
    "Oracle Cloud Infrastructure 2023 AI Foundations Associate",
  ],

  achievements: [
    {
      title: "Published Technical Whitepaper",
      detail: "Authored Accenture's internal standard for Multipart Form-Data large-file automation — adopted company-wide",
    },
    {
      title: "Cloud Framework Innovation",
      detail: "Built a reusable cloud deployment framework cutting provisioning time by 45% across Oracle client teams",
    },
    {
      title: "Perfect Academic GPA",
      detail: "4.0/4.0 in MS program at Rensselaer Polytechnic Institute while serving as Graduate Teaching Assistant",
    },
  ],
};
