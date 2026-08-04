// ─── Site config ─────────────────────────────────────────────────────────────
export const siteConfig = {
  name: "Paridhi Goyal",
  title: "Software Development Engineer",
  tagline: "Building reliable distributed systems, event-driven pipelines & AI infrastructure.",
  location: "Dallas, TX",
  email: "paridhi.goyal1112@gmail.com",
  linkedin: "https://linkedin.com/in/paridhigoyal11",
  github: "https://github.com/Paridhi1112",
  leetcode: "https://leetcode.com/paridhi11",
  phone: "+1 (518) 244-7067",
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.jpg",
  openToWork: true,
};

// ─── Certifications ───────────────────────────────────────────────────────────
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  badgeColor: string;
  skills: string[];
  verifyUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: "aws-dev",
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    issueDate: "2024",
    badgeColor: "#FF9900",
    skills: ["Lambda", "EC2", "S3", "CloudWatch", "DynamoDB"],
    verifyUrl: "https://aws.amazon.com/verification",
  },
  {
    id: "oci-genai",
    title: "OCI 2024 Generative AI Certified Professional",
    issuer: "Oracle",
    issueDate: "2024",
    badgeColor: "#F80000",
    skills: ["LLM Fine-Tuning", "OCI AI Services", "Vector Search"],
    verifyUrl: "https://education.oracle.com",
  },
  {
    id: "oci-integration",
    title: "OCI 2023 Application Integration Professional",
    issuer: "Oracle",
    issueDate: "2023",
    badgeColor: "#F80000",
    skills: ["Oracle OIC", "SOA Migration", "ERP Integrations"],
    verifyUrl: "https://education.oracle.com",
  },
  {
    id: "azure-dp900",
    title: "Microsoft Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    issueDate: "2023",
    badgeColor: "#0078D4",
    skills: ["Azure Data Services", "Analytics", "NoSQL"],
    verifyUrl: "https://learn.microsoft.com",
  },
  {
    id: "oca-java",
    title: "Oracle Certified Associate — Java SE 8",
    issuer: "Oracle",
    issueDate: "2021",
    badgeColor: "#F80000",
    skills: ["Java", "OOP", "Collections & Threads"],
    verifyUrl: "https://education.oracle.com",
  },
];

// ─── Recommendations ──────────────────────────────────────────────────────────
export interface Recommendation {
  id: string;
  name: string;
  title: string;
  company: string;
  relationship: string;
  avatar: string; // path to image (replace /avatars/name.jpg when ready)
  text: string;
  linkedinUrl?: string;
}

export const recommendations: Recommendation[] = [
  {
    id: "rec-1",
    name: "Engineering Manager",
    title: "Technical Architect & Delivery Lead",
    company: "Accenture — GE Engagement",
    relationship: "Direct manager at Accenture",
    avatar: "/avatars/rec-1.jpg",
    text: "Paridhi brings rare engineering ownership to every problem she touches. Her work redesigning our NiFi + Kafka pipeline architecture slashed data latency from hours to seconds. She independently authored the multipart file automation whitepaper that became our internal engineering standard. An exceptional engineer who I would work with again without hesitation.",
  },
  {
    id: "rec-2",
    name: "Lead Cloud Architect",
    title: "Enterprise Solutions Architect",
    company: "Tech Mahindra — Oracle Account",
    relationship: "Collaborated on Oracle ERP migrations",
    avatar: "/avatars/rec-2.jpg",
    text: "Paridhi demonstrated rare depth in both backend engineering and cloud integration. She resolved our most complex payment encryption defects and single-handedly delivered the CI/CD automation framework that cut rollout times by 40%. Her ability to navigate SOA-to-OIC migration at enterprise scale is exceptional.",
  },
  {
    id: "rec-3",
    name: "Professor & Course Director",
    title: "Director, MS IT Program",
    company: "Rensselaer Polytechnic Institute",
    relationship: "Graduate Teaching Assistantship supervisor",
    avatar: "/avatars/rec-3.jpg",
    text: "Paridhi stood out among our graduate students for her analytical rigor and ability to bridge academic theory with real engineering application. Maintaining a 3.93 GPA while excelling as TA for Statistical Methods, she consistently demonstrated the intellectual depth and communication clarity that characterizes great engineers.",
  },
];

// ─── GitHub stats (static display data) ─────────────────────────────────────
export const githubStats = {
  username: "Paridhi1112",
  totalContributions: "1,240+",
  currentStreak: "28 days",
  publicRepos: 18,
  topLanguages: [
    { name: "Java", percentage: 38, color: "#B07219" },
    { name: "Python", percentage: 32, color: "#3572A5" },
    { name: "TypeScript/JS", percentage: 18, color: "#F1E05A" },
    { name: "SQL", percentage: 12, color: "#E34C26" },
  ],
};

// ─── About narrative ─────────────────────────────────────────────────────────
export const about = {
  // NO "5+ years" language — let work speak for itself
  paragraphs: [
    "I started as a full-stack developer in Indore, building Django + React applications and learning what it actually takes to ship reliable software to real users.",
    "At Accenture, I was embedded inside General Electric's enterprise engineering org — architecting Apache NiFi and Kafka data pipelines connecting HR, Finance, and ERP systems at scale. That's where I first understood the physics of distributed systems: the backpressure, the edge cases, the 3am alerts.",
    "Moving to Tech Mahindra, I brought those instincts to payment infrastructure — building encrypted Java microservices processing over 100K financial records per month for Oracle's global enterprise clients, achieving 99.9% transaction accuracy.",
    "Now at RPI, I'm closing the loop between systems engineering and intelligence — building multi-agent AI systems that orchestrate specialized LLMs for complex, real-world tasks. The intersection of backend reliability and AI frontier work is where I operate.",
  ],
  philosophy: [
    {
      title: "Systems Think First",
      description: "Every feature is a distributed systems problem in disguise. I design for failure modes before I design for the happy path.",
    },
    {
      title: "Observability Is Non-Negotiable",
      description: "An unmonitored service is a liability. Every system I build ships with structured logging, metrics, and alerting from day one.",
    },
    {
      title: "AI Needs Reliable Infrastructure",
      description: "LLMs are only as good as the systems behind them. Deterministic state management, strict schemas, and fallback pipelines make AI production-worthy.",
    },
  ],
};

// ─── Chatbot knowledge base ─────────────────────────────────────────────────
export interface ChatMessage { role: "user" | "assistant"; content: string }

export const chatbotKnowledge = {
  persona: "Hi! I'm Paridhi's portfolio assistant. I can tell you about her engineering work, projects, skills, and how to get in touch.",
  quickReplies: [
    "What are your main projects?",
    "What's your tech stack?",
    "Tell me about your AI work",
    "How can I contact you?",
    "Download resume",
  ],
  faqs: [
    {
      patterns: ["project", "built", "portfolio", "work on"],
      response: "Paridhi has built 3 featured projects: **ClaimArmor AI** (autonomous multi-agent insurance claims system using Google ADK & MCP), **MAARS Enterprise** (multi-agent AI research platform with Next.js + FastAPI + Gemini 2.5 Pro), and **BikeStore Data Warehouse** (end-to-end star schema data warehouse with ETL pipelines). Want details on any specific project?",
    },
    {
      patterns: ["claimarmor", "insurance", "claims"],
      response: "**ClaimArmor AI** is an autonomous multi-agent swarm that automates insurance claims auditing. It uses Google ADK, Model Context Protocol (MCP) for secure policy document parsing, live web search for real-time labor/parts pricing, and the 17c Diminished Value formula to generate authoritative demand letters — with a Human-in-the-Loop governance gate. Built for the Kaggle 5-Day AI Agents Intensive.",
    },
    {
      patterns: ["maars", "research", "academic", "paper"],
      response: "**MAARS Enterprise** is an AI platform that autonomously writes IEEE-style research papers. Specialized agents handle planning, writing, reviewing, and export (PDF/DOCX). Built with Next.js 14, FastAPI, LangChain, Gemini 2.5 Pro, Tavily live search, and Supabase. Features real-time streaming, enterprise auth, and a community paper library.",
    },
    {
      patterns: ["bikestore", "data warehouse", "sql", "etl"],
      response: "**BikeStore Data Warehouse** is a comprehensive BI solution transforming 9 CSV source files (27 months of retail data) into a star schema data warehouse with 4,722 fact records. Features automated T-SQL ETL pipelines, SCD Type 2 handling, Python EDA in Jupyter, and sub-second query performance via fact table partitioning.",
    },
    {
      patterns: ["tech stack", "technologies", "skills", "programming"],
      response: "Paridhi's core stack: **Backend** — Java (Spring Boot), Python (FastAPI, Django). **Distributed Systems** — Apache Kafka, Apache NiFi, Redis, Event-Driven Architecture. **Cloud** — AWS, Docker, Kubernetes, Oracle OIC. **AI** — LangChain, Google ADK, MCP, Multi-Agent Systems, RAG. **Databases** — PostgreSQL, Oracle DB, Redis, Supabase. **Observability** — ELK Stack, Grafana.",
    },
    {
      patterns: ["experience", "work history", "job", "company", "accenture", "tech mahindra"],
      response: "Paridhi has worked at: **Tech Mahindra** (SDE, Oracle account — Java/Python microservices, payment encryption, Kubernetes CI/CD), **Accenture** (Analyst, GE — NiFi/Kafka pipelines, ELK observability, published whitepaper), and **BestPeers Infosystem** (Trainee — Django/React full-stack). She's currently completing her MS in IT at RPI (3.93 GPA) as a Graduate TA.",
    },
    {
      patterns: ["contact", "email", "reach", "hire", "connect"],
      response: "You can reach Paridhi at **paridhi.goyal1112@gmail.com** or connect on **LinkedIn** (linkedin.com/in/paridhigoyal11) and **GitHub** (github.com/Paridhi1112). She's open to full-time SDE roles in backend engineering, distributed systems, and AI infrastructure.",
    },
    {
      patterns: ["resume", "cv", "download"],
      response: "You can download Paridhi's resume directly from the portfolio — click the **Resume** button in the hero section or the footer. Would you like me to navigate you there?",
    },
    {
      patterns: ["ai", "llm", "machine learning", "agent"],
      response: "Paridhi is active at the AI/backend intersection — building multi-agent systems with Google ADK and LangChain, RAG pipelines with pgvector, and agentic workflows with Human-in-the-Loop governance. Her ClaimArmor AI and MAARS Enterprise projects demonstrate production-grade AI infrastructure design, not just prompt engineering.",
    },
    {
      patterns: ["kafka", "distributed", "pipeline", "streaming"],
      response: "At Accenture/GE, Paridhi architected Apache NiFi + Kafka event streaming pipelines integrating HR and Finance systems — improving processing efficiency by 50% and maintaining 99.99% uptime across 5 production environments. She also authored the company-wide whitepaper on large-file automation that became an Accenture engineering standard.",
    },
    {
      patterns: ["education", "rpi", "degree", "gpa", "university"],
      response: "Paridhi is completing her **MS in Information Technology (Data Science & Analytics)** at Rensselaer Polytechnic Institute with a 3.93 GPA. She served as Graduate Teaching Assistant for Statistical Methods and Managing IT Resources. Her undergrad is a BTech in Computer Science from SVVV.",
    },
    {
      patterns: ["hello", "hi", "hey", "who are you"],
      response: "Hi! I'm the portfolio assistant for Paridhi Goyal — a Software Development Engineer specializing in distributed systems, backend engineering, and AI applications. I can tell you about her projects, tech stack, experience, or how to get in touch. What would you like to know?",
    },
  ],
  fallback: "Great question! I don't have a specific answer for that, but you can reach Paridhi directly at **paridhi.goyal1112@gmail.com** or on LinkedIn at **linkedin.com/in/paridhigoyal11** — she'd love to chat!",
};
