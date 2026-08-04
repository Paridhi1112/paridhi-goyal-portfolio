export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  category: "Backend & Systems" | "AI & LLMs" | "Data Engineering" | "Cloud & DevOps";
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  bannerImage?: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  problem: string;
  architectureDescription: string;
  architectureNodes: string[];
  scalabilityDetails: string;
  challenges: { problem: string; solution: string }[];
  lessonsLearned: string[];
}

export interface SystemDesignTopic {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  nodes: { id: string; name: string; type: "client" | "gateway" | "service" | "cache" | "queue" | "db"; desc: string }[];
  flows: { from: string; to: string; label: string }[];
  keyHighlights: string[];
  throughput: string;
  latency: string;
  resilience: string;
}

export interface Recommendation {
  id: string;
  name: string;
  title: string;
  company: string;
  relationship: string;
  avatar: string;
  text: string;
  linkedinUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  badgeColor: string;
  credentialId?: string;
  verifyUrl?: string;
  skills: string[];
}

export const portfolio = {
  name: "Paridhi Goyal",
  title: "Senior Backend Software Engineer",
  tagline: "I build high-throughput distributed systems, event-driven pipelines, and cloud-native AI infrastructure.",
  headline: "Senior Backend Software Engineer — Distributed Systems & AI Infrastructure",
  subheadline: "Java & Python APIs · Kafka & Event-Driven Architecture · Cloud Infrastructure · LLM Applications",
  location: "Dallas, TX",
  email: "paridhi.goyal1112@gmail.com",
  linkedin: "https://linkedin.com/in/paridhigoyal11",
  github: "https://github.com/Paridhi1112",
  leetcode: "https://leetcode.com/paridhi11",
  phone: "+1 (518) 244-7067",
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.jpg",

  about: {
    summary: [
      "I am a Senior Backend Software Engineer with 5+ years of experience architecting resilient microservices, high-volume event-driven data pipelines, and cloud-native integrations for enterprise clients including Oracle and General Electric.",
      "Recently completed an MS in Information Technology (Data Science & Analytics) at Rensselaer Polytechnic Institute with a 3.93 GPA, where I served as Graduate Teaching Assistant for Statistical Methods and Managing IT Resources—bridging advanced algorithms with production software engineering.",
      "My engineering philosophy centers on clean architectural decomposition, strict data contracts, observable fault-tolerance, and zero-downtime scalability."
    ],
    philosophy: [
      {
        title: "Distributed Resilience First",
        description: "Systems should handle network partitions, retries, and rate spikes gracefully with circuit breakers, idempotent APIs, and asynchronous message queues."
      },
      {
        title: "Clean API Contracts & Observability",
        description: "An unmonitored API is a ticking time bomb. Every microservice should expose structured telemetry, metrics, and strictly typed OpenAPI/gRPC specs."
      },
      {
        title: "Pragmatic AI & LLM Orchestration",
        description: "Generative AI is only as good as its backend infrastructure. I design deterministic multi-agent state machines, vector indices, and async fallback pipelines."
      }
    ],
    stats: [
      { value: "5+", label: "Years Experience", description: "In Enterprise Backend & Cloud" },
      { value: "99.9%", label: "API Uptime Delivered", description: "Across Oracle & GE integrations" },
      { value: "50%", label: "Pipeline Acceleration", description: "Via NiFi & Kafka refactoring" },
      { value: "3.93", label: "MS GPA at RPI", description: "Graduate TA in Stat Methods" },
    ]
  },

  experience: [
    {
      company: "Tech Mahindra",
      client: "Oracle",
      logo: "TM",
      role: "Senior Software Engineer",
      period: "Aug 2024 – Aug 2025",
      location: "Pune, India",
      type: "Full-time",
      highlights: [
        "Architected Java & Python REST microservices processing 100K+ encrypted payment records/month with 99.9% transaction accuracy across Oracle Fusion ERP modules.",
        "Optimized microservice API throughput by 30% through Redis caching layer implementation, query optimization, and asynchronous thread pooling.",
        "Automated multi-cloud CI/CD deployment pipelines using Docker and Kubernetes (OKE), cutting production deployment rollout cycles by 40%.",
        "Led enterprise SOA → Oracle Integration Cloud (OIC) migration for global accounts, including the UK's largest hospitality chain and a multinational defense client.",
        "Engineered secure inbound/outbound payment decryption workflows using PGP encryption and custom Java transformation libraries.",
        "Resolved 25+ high-priority production defects across sprint cycles, maintaining strict SLA response times."
      ],
      tech: ["Java", "Python", "Oracle OIC", "Kubernetes", "Docker", "Redis", "Spring Boot", "REST APIs", "CI/CD"]
    },
    {
      company: "Accenture",
      client: "General Electric (GE)",
      logo: "AC",
      role: "Application Development Analyst",
      period: "Jun 2022 – Jul 2024",
      location: "Indore, India",
      type: "Full-time",
      highlights: [
        "Architected Apache NiFi + Apache Kafka real-time streaming data pipelines integrating HR & Financial systems, improving data processing efficiency by 50%.",
        "Built distributed ELK Stack (Elasticsearch, Logstash, Kibana) and Grafana telemetry dashboards, maintaining 99.99% operational uptime across 5 production environments.",
        "Automated complex financial reconciliation workflows using Python and JavaScript scripts, eliminating 15+ hours of manual weekly reconciliation.",
        "Authored Accenture internal technical whitepaper on 'Multipart Form-Data Large File Automation'—adopted company-wide as an engineering standard.",
        "Spearheaded Gen2 → Gen3 OIC cloud integration migration for Order Management, Customer Data, GL, and Shipment modules."
      ],
      tech: ["Apache NiFi", "Apache Kafka", "ELK Stack", "Grafana", "Python", "Groovy", "Oracle OIC", "GraphQL"]
    },
    {
      company: "Accenture",
      client: "General Electric (GE)",
      logo: "AC",
      role: "Application Development Associate",
      period: "Apr 2021 – May 2022",
      location: "Pune, India",
      type: "Full-time",
      highlights: [
        "Developed NiFi big data processing flows surfaced on executive DIVE analytical dashboards via Elasticsearch indexes.",
        "Wrote high-throughput Groovy transformation scripts for ETL validation and multi-format payload parsing.",
        "Managed end-to-end SDLC documentation, business requirements specs (BRD), and full UT/SIT/UAT sign-offs."
      ],
      tech: ["Apache NiFi", "Groovy", "ELK Stack", "Big Data", "REST"]
    },
    {
      company: "BestPeers Infosystem",
      client: null,
      logo: "BP",
      role: "Trainee Developer",
      period: "Jan 2020 – Feb 2021",
      location: "Indore, India",
      type: "Full-time",
      highlights: [
        "Delivered full-stack web applications using Django and React, accelerating feature deployment cycles by 40%.",
        "Designed relational database schemas in MySQL with index tuning, delivering zero-defect production releases."
      ],
      tech: ["Django", "React", "Python", "MySQL", "JavaScript"]
    }
  ],

  education: [
    {
      degree: "Master of Science in Information Technology",
      specialization: "Data Science & Analytics",
      institution: "Rensselaer Polytechnic Institute (RPI)",
      period: "Aug 2025 – May 2026",
      gpa: "3.93 / 4.0",
      honors: "Graduate Teaching Assistant for Statistical Methods & Managing IT Resources",
    },
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      specialization: "Software Engineering",
      institution: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
      period: "Jul 2016 – Jul 2020",
      gpa: "3.6 / 4.0",
      honors: "First Class with Distinction",
    }
  ],

  projects: [
    {
      id: "agentic-ai-researcher",
      title: "Multi-Agent Autonomous Research Assistant",
      subtitle: "Distributed Agentic LLM Orchestration Platform",
      description: "An agentic AI system that coordinates domain-specialized LLMs in parallel—decomposing complex queries, delegating sub-tasks, executing web searches, and synthesizing peer-reviewed reports.",
      impact: "Reduced multi-source technical research synthesis time by 70%",
      category: "AI & LLMs",
      featured: true,
      githubUrl: "https://github.com/Paridhi1112/multi-agent-researcher",
      liveUrl: "https://agentic-researcher-demo.vercel.app",
      tech: ["Python", "Next.js", "LangChain / AutoGen", "Supabase Vector Store", "FastAPI", "AsyncIO", "Redis"],
      metrics: [
        { label: "Synthesis Speedup", value: "70%" },
        { label: "Parallel Agents", value: "5 Workers" },
        { label: "Vector Search Latency", value: "<45ms" }
      ],
      problem: "Traditional single-prompt LLM queries suffer from hallucination and shallow depth when synthesizing complex technical topics requiring real-time web retrieval, document cross-referencing, and multi-step reasoning.",
      architectureDescription: "Designed an asynchronous DAG workflow using FastAPI and Redis Pub/Sub. The Supervisor agent receives the user prompt, generates an execution graph, dispatches parallel sub-prompts to specialized Researcher agents, queries Supabase pgvector embeddings, and feeds structured JSON to the Writer agent for final Markdown assembly.",
      architectureNodes: ["User Client", "FastAPI Gateway", "Supervisor Agent", "Redis Task Queue", "Worker Agents (3x)", "Supabase Vector Store", "Markdown Synthesizer"],
      scalabilityDetails: "Employs task queuing via Redis and Celery, allowing the system to scale worker nodes horizontally under heavy query loads. Implements token-bucket rate limiting to prevent API budget overruns on LLM providers.",
      challenges: [
        {
          problem: "Sub-agent deadlock and inconsistent structured output formats.",
          solution: "Implemented Pydantic schema validation on every sub-agent response step with automatic retry loops on schema mismatch."
        },
        {
          problem: "High latency when executing sequential web searches.",
          solution: "Converted search dispatch to parallel Python asyncio gather routines, cutting retrieval latency from 12s to 2.4s."
        }
      ],
      lessonsLearned: [
        "Strict Pydantic contracts between autonomous agents are critical for system determinism.",
        "Caching intermediate vector embeddings in Redis reduces redundant embedding API calls by 40%."
      ]
    },
    {
      id: "enterprise-nifi-kafka-pipeline",
      title: "Real-Time Event Data Pipeline (Accenture / GE)",
      subtitle: "High-Throughput Apache NiFi & Kafka Streaming Engine",
      description: "Enterprise event-driven data streaming pipeline connecting legacy HR, Finance, and ERP databases with modern cloud analytical dashboards.",
      impact: "Engineered 50% data processing efficiency gains across 5 production environments",
      category: "Backend & Systems",
      featured: true,
      githubUrl: "https://github.com/Paridhi1112/event-streaming-pipeline",
      tech: ["Apache NiFi", "Apache Kafka", "ELK Stack", "Java", "Groovy", "Grafana", "Oracle DB"],
      metrics: [
        { label: "Throughput", value: "50K msg/sec" },
        { label: "Uptime", value: "99.99%" },
        { label: "Processing Speedup", value: "+50%" }
      ],
      problem: "GE's legacy financial reconciliation systems suffered from nightly batch job bottlenecks, multi-hour data latency, and lack of real-time pipeline observability.",
      architectureDescription: "Constructed an event-driven architecture using Apache NiFi for multi-protocol ingestion, streaming payload transformations into Kafka topics partition-keyed by transaction ID, indexed into Elasticsearch clusters, and rendered on real-time Grafana/ELK dashboards.",
      architectureNodes: ["Legacy Source DBs", "Apache NiFi Clusters", "Kafka Event Bus (3 Brokers)", "Groovy Transform Engine", "Elasticsearch Cluster", "Grafana Dashboards"],
      scalabilityDetails: "Kafka topics partitioned across 12 partitions with consumer group auto-scaling. Apache NiFi flow files processed asynchronously with backpressure bounds to handle traffic spikes.",
      challenges: [
        {
          problem: "Large 500MB+ multi-part payload processing causing JVM garbage collection pauses in NiFi.",
          solution: "Implemented record-oriented flow file streaming and wrote a custom Groovy chunking processor—the subject of an Accenture-wide published whitepaper."
        }
      ],
      lessonsLearned: [
        "Backpressure handling is indispensable when coupling high-speed producers with legacy target databases.",
        "Real-time Grafana telemetry drastically reduces Mean Time to Detection (MTTD) for data schema drift."
      ]
    },
    {
      id: "oracle-payment-microservices",
      title: "Encrypted Enterprise Payment Gateway (Tech Mahindra / Oracle)",
      subtitle: "High-Security Microservice API Engine",
      description: "Mission-critical payment processing REST microservices executing encrypted financial transactions across global Oracle Fusion ERP modules.",
      impact: "Processed 100K+ encrypted transactions monthly with 99.9% accuracy",
      category: "Backend & Systems",
      featured: true,
      githubUrl: "https://github.com/Paridhi1112/encrypted-payment-service",
      tech: ["Java", "Spring Boot", "Python", "Oracle OIC", "Redis", "Docker", "Kubernetes", "PGP Encryption"],
      metrics: [
        { label: "Monthly Volume", value: "100K+ Records" },
        { label: "Transaction Latency", value: "<120ms" },
        { label: "Error Rate", value: "<0.01%" }
      ],
      problem: "Global enterprise clients required compliant, end-to-end encrypted financial payload processing across fragmented banking APIs and Oracle ERP backends.",
      architectureDescription: "Spring Boot microservice containerized with Docker, deployed on Kubernetes (OKE), utilizing Redis for tokenized session caching and PGP encryption libraries for payfile security prior to Oracle OIC transmission.",
      architectureNodes: ["Enterprise Client", "Kubernetes Ingress", "Spring Boot API", "Redis Distributed Cache", "PGP Decryptor", "Oracle ERP Cloud"],
      scalabilityDetails: "Horizontal Pod Autoscaling (HPA) configured to scale Spring Boot pods from 3 to 15 based on CPU and memory thresholds during peak payment settlement hours.",
      challenges: [
        {
          problem: "High latency in cryptographic signature verification for high-frequency payment batches.",
          solution: "Offloaded cryptographic operations to a dedicated worker thread pool with non-blocking NIO byte streams, reducing response latency by 30%."
        }
      ],
      lessonsLearned: [
        "Idempotency keys on payment APIs are mandatory to prevent duplicate transaction charges during network retries."
      ]
    },
    {
      id: "bike-store-data-warehouse",
      title: "Enterprise Bike Store Data Warehouse & BI ETL",
      subtitle: "Star Schema Dimensional Data Engine",
      description: "End-to-end data warehouse solution centralizing sales, inventory, and customer transactional data into a star schema model for executive BI reporting.",
      impact: "Replaced 3 fragmented reporting tools with unified executive dashboards",
      category: "Data Engineering",
      featured: false,
      githubUrl: "https://github.com/Paridhi1112/bike-store-data-warehouse",
      tech: ["T-SQL", "SSMS", "SQL", "ETL Pipelines", "Star Schema", "Power BI"],
      metrics: [
        { label: "Source Systems", value: "3 DBs" },
        { label: "ETL Execution", value: "<8 mins" }
      ],
      problem: "Retail leadership had no unified view of inventory turnover vs sales metrics due to siloed relational schemas across point-of-sale and warehouse management software.",
      architectureDescription: "Designed fact and dimension tables (DimCustomer, DimProduct, DimStore, FactSales) with surrogate keys, slow-changing dimensions (SCD Type 2), and automated incremental T-SQL ETL stored procedures.",
      architectureNodes: ["POS Transactional DB", "Warehouse Inventory DB", "Staging Schema", "Star Schema DW", "Power BI Visualizations"],
      scalabilityDetails: "Partitioned Fact table by Year/Quarter with indexed view aggregations, delivering sub-second reporting query response times.",
      challenges: [
        {
          problem: "Handling duplicate customer records across disparate source systems.",
          solution: "Built a fuzzy-matching staging validation script using Jaro-Winkler distance in SQL to merge customer entities."
        }
      ],
      lessonsLearned: [
        "Incremental ETL loads save 90% execution time over full daily reloads."
      ]
    }
  ] as ProjectCaseStudy[],

  systemDesigns: [
    {
      id: "event-driven-kafka",
      title: "Event-Driven Streaming Architecture",
      subtitle: "Apache Kafka + Microservices Decoupling",
      description: "How event-driven architecture eliminates synchronous blocking calls between services, enables replayable event streams, and absorbs extreme traffic surges.",
      throughput: "100K+ msg/sec",
      latency: "<15ms processing",
      resilience: "Zero Data Loss (Replication Factor 3)",
      nodes: [
        { id: "producer", name: "Order Service Producer", type: "service", desc: "Emits OrderCreated events asynchronously" },
        { id: "gateway", name: "API Gateway", type: "gateway", desc: "Validates rate limits & authenticates requests" },
        { id: "kafka", name: "Kafka Event Bus", type: "queue", desc: "Partitioned topic log storing immutable events" },
        { id: "inventory", name: "Inventory Consumer", type: "service", desc: "Reserves stock upon OrderCreated event" },
        { id: "payment", name: "Payment Consumer", type: "service", desc: "Processes payment authorization" },
        { id: "db", name: "Events Persistence DB", type: "db", desc: "Long-term event store & read view" },
      ],
      flows: [
        { from: "gateway", to: "producer", label: "REST Request" },
        { from: "producer", to: "kafka", label: "Publish Event" },
        { from: "kafka", to: "inventory", label: "Consume Stream" },
        { from: "kafka", to: "payment", label: "Consume Stream" },
        { from: "inventory", to: "db", label: "Update Stock State" },
      ],
      keyHighlights: [
        "Asynchronous decoupling prevents downstream service failures from cascading upstream.",
        "Kafka consumer groups enable linear horizontal scaling of background workers.",
        "Dead-Letter Queues (DLQ) isolate malformed payloads without halting partition consumption."
      ]
    },
    {
      id: "redis-caching-strategy",
      title: "Distributed Caching & Read-Aside Topology",
      subtitle: "Redis Cluster + Database Cache-Aside Pattern",
      description: "A high-performance caching layer designed to protect primary databases from read overload, utilizing write-through strategy and TTL eviction.",
      throughput: "250K+ ops/sec",
      latency: "<2ms cache hit",
      resilience: "Failover Master-Replica Sentinel",
      nodes: [
        { id: "client", name: "Web / Mobile Client", type: "client", desc: "Sends high-frequency user API queries" },
        { id: "api", name: "Backend API Service", type: "service", desc: "Executes cache-aside lookup logic" },
        { id: "redis", name: "Redis Cluster Cache", type: "cache", desc: "In-memory key-value store with LRU eviction" },
        { id: "db", name: "Primary Relational DB", type: "db", desc: "Source of truth SQL Database" },
      ],
      flows: [
        { from: "client", to: "api", label: "GET /api/v1/resource" },
        { from: "api", to: "redis", label: "1. Cache Lookup" },
        { from: "api", to: "db", label: "2. DB Query (Cache Miss)" },
        { from: "api", to: "redis", label: "3. Write back to Cache" },
      ],
      keyHighlights: [
        "Achieves 95%+ cache hit ratio, reducing SQL DB CPU utilization by 70%.",
        "Implements probabilistic early expiration to solve cache stampede (thundering herd) issues.",
        "Distributed locks (Redlock) ensure single-flight execution for expensive queries."
      ]
    },
    {
      id: "microservices-api-gateway",
      title: "Microservices Architecture & API Gateway",
      subtitle: "Ingress Router + Service Mesh Decoupling",
      description: "Centralized API Gateway pattern for authentication, dynamic rate limiting, load balancing, and circuit breaking across polyglot microservices.",
      throughput: "50K+ req/sec",
      latency: "<8ms overhead",
      resilience: "Resilience4j Circuit Breakers",
      nodes: [
        { id: "client", name: "Client Requests", type: "client", desc: "Mobile & Web Client applications" },
        { id: "gateway", name: "Kong / Spring Gateway", type: "gateway", desc: "JWT Validation, TLS termination, Rate Limiting" },
        { id: "user_svc", name: "User Service", type: "service", desc: "Java Spring Boot domain service" },
        { id: "payment_svc", name: "Payment Service", type: "service", desc: "Python FastAPI domain service" },
        { id: "ai_svc", name: "AI Inference Service", type: "service", desc: "Python PyTorch / LLM service" },
        { id: "db", name: "Domain Databases", type: "db", desc: "Database-per-service isolation" },
      ],
      flows: [
        { from: "client", to: "gateway", label: "HTTPS / gRPC" },
        { from: "gateway", to: "user_svc", label: "Routed Traffic" },
        { from: "gateway", to: "payment_svc", label: "Routed Traffic" },
        { from: "gateway", to: "ai_svc", label: "Routed Traffic" },
        { from: "user_svc", to: "db", label: "Isolated DB Read/Write" },
      ],
      keyHighlights: [
        "Database-per-service pattern prevents tight coupling between microservices.",
        "Circuit breakers trip automatically during downstream degradation, returning graceful fallback responses.",
        "Distributed tracing via OpenTelemetry and Jaeger correlates requests across service boundaries."
      ]
    }
  ] as SystemDesignTopic[],

  skills: {
    "Backend Engineering": [
      { name: "Java", level: "Expert", desc: "Spring Boot, Microservices, JVM Tuning, Concurrency" },
      { name: "Python", level: "Expert", desc: "FastAPI, Django, AsyncIO, PyTest, NumPy/Pandas" },
      { name: "REST APIs & gRPC", level: "Expert", desc: "OpenAPI, Protobuf, Rate Limiting, Idempotency" },
      { name: "Groovy", level: "Advanced", desc: "Payload transformations & script automation" },
      { name: "Node.js / TypeScript", level: "Advanced", desc: "Async microservices & full-stack web" },
    ],
    "Distributed Systems & Cloud": [
      { name: "Apache Kafka", level: "Advanced", desc: "Topics, Partitions, Consumer Groups, Event Streaming" },
      { name: "AWS", level: "Advanced", desc: "EC2, S3, Lambda, CloudWatch, IAM, EKS" },
      { name: "Docker & Kubernetes", level: "Advanced", desc: "Containerization, OKE, HPA, Helm Charts, CI/CD" },
      { name: "Apache NiFi", level: "Expert", desc: "Flow File processors, Data pipelines, Automation" },
      { name: "Terraform", level: "Intermediate", desc: "Infrastructure as Code & multi-cloud provisioning" },
    ],
    "Databases & Caching": [
      { name: "Redis", level: "Advanced", desc: "Caching, Pub/Sub, Distributed Locks, Session Stores" },
      { name: "Oracle DB / PL-SQL", level: "Expert", desc: "Stored procedures, Query optimization, ERP integration" },
      { name: "PostgreSQL / MySQL", level: "Advanced", desc: "Indexing, Transaction Isolation, Schema Design" },
      { name: "Supabase Vector Store", level: "Advanced", desc: "pgvector embeddings & RAG indexing" },
    ],
    "AI & LLM Infrastructure": [
      { name: "LLMs & RAG", level: "Advanced", desc: "LangChain, AutoGen, Vector Embeddings, Prompt Design" },
      { name: "Agentic Workflows", level: "Advanced", desc: "Multi-agent coordination, DAG Execution, Async State" },
      { name: "Statistical ML", level: "Advanced", desc: "Scikit-Learn, Regression, Hypothesis Testing (RPI TA)" },
    ],
    "Observability & Tooling": [
      { name: "ELK Stack", level: "Expert", desc: "Elasticsearch indexing, Logstash parsing, Kibana" },
      { name: "Grafana", level: "Expert", desc: "Real-time metrics, Alerting, Telemetry visualizers" },
      { name: "Git & CI/CD", level: "Expert", desc: "GitHub Actions, Jenkins, Gitflow, Release Automation" },
    ]
  },

  certifications: [
    {
      id: "aws-dev-assoc",
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      issueDate: "2024",
      badgeColor: "#FF9900",
      credentialId: "AWS-DEV-ASSOC-PARIDHI",
      verifyUrl: "https://aws.amazon.com/verification",
      skills: ["AWS Lambda", "EC2", "S3", "CloudWatch", "DynamoDB", "DevOps"]
    },
    {
      id: "oracle-oci-genai",
      title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
      issuer: "Oracle",
      issueDate: "2024",
      badgeColor: "#F80000",
      verifyUrl: "https://education.oracle.com",
      skills: ["Generative AI", "LLM Fine-Tuning", "OCI AI Services", "Vector Search"]
    },
    {
      id: "oracle-oci-app-integration",
      title: "Oracle Cloud Infrastructure 2023 Certified Application Integration Professional",
      issuer: "Oracle",
      issueDate: "2023",
      badgeColor: "#F80000",
      verifyUrl: "https://education.oracle.com",
      skills: ["Oracle OIC", "SOA Migration", "ERP Integrations", "REST / SOAP Adapters"]
    },
    {
      id: "azure-dp900",
      title: "Microsoft Azure Data Fundamentals (DP-900)",
      issuer: "Microsoft",
      issueDate: "2023",
      badgeColor: "#0078D4",
      verifyUrl: "https://learn.microsoft.com",
      skills: ["Azure Data Services", "Relational & Non-Relational DBs", "Analytics"]
    },
    {
      id: "oracle-oca-java",
      title: "Oracle Certified Associate — Java SE 8 Programmer",
      issuer: "Oracle",
      issueDate: "2021",
      badgeColor: "#F80000",
      verifyUrl: "https://education.oracle.com",
      skills: ["Java Language", "Object-Oriented Design", "Collections & Threads"]
    }
  ] as Certification[],

  recommendations: [
    {
      id: "rec-1",
      name: "Senior Engineering Manager",
      title: "Technical Architect & Delivery Lead",
      company: "Accenture / General Electric Project",
      relationship: "Managed Paridhi directly at Accenture",
      avatar: "/avatars/avatar-1.jpg",
      text: "Paridhi is an exceptionally bright backend engineer who takes complete ownership of complex distributed integrations. Her work on our Apache NiFi & Kafka pipelines transformed data latency from hours to seconds. Furthermore, her whitepaper on multipart file processing became our team's gold standard. I would rehire her in a heartbeat.",
    },
    {
      id: "rec-2",
      name: "Lead Cloud Architect",
      title: "Enterprise Solutions Architect",
      company: "Tech Mahindra (Oracle Account)",
      relationship: "Worked alongside Paridhi on Oracle ERP migrations",
      avatar: "/avatars/avatar-2.jpg",
      text: "Paridhi brings a rare combination of deep backend core engineering (Java, Spring Boot, microservices) and cloud integration expertise. She single-handedly resolved several of our toughest production payment encryption defects and built automated CI/CD pipelines that saved us weeks of rollout overhead.",
    },
    {
      id: "rec-3",
      name: "Professor & Department Chair",
      title: "Director of MS IT Program",
      company: "Rensselaer Polytechnic Institute (RPI)",
      relationship: "Supervised Paridhi's Graduate Teaching Assistantship",
      avatar: "/avatars/avatar-3.jpg",
      text: "Paridhi demonstrated outstanding analytical rigor and technical leadership during her Master's program at RPI. Maintaining a 3.93 GPA while excelling as a Graduate Teaching Assistant for Statistical Methods, she displayed both engineering excellence and exceptional communication skills.",
    }
  ] as Recommendation[],

  githubStats: {
    username: "Paridhi1112",
    totalContributions: "1,240+",
    currentStreak: "28 Days",
    publicRepos: 18,
    topLanguages: [
      { name: "Java", percentage: 38, color: "#B07219" },
      { name: "Python", percentage: 32, color: "#3572A5" },
      { name: "TypeScript / JS", percentage: 18, color: "#F1E05A" },
      { name: "SQL & Shell", percentage: 12, color: "#E34C26" },
    ],
    pinnedRepos: [
      {
        name: "multi-agent-researcher",
        description: "Autonomous multi-agent research assistant orchestrating specialized LLMs in parallel with vector store RAG.",
        stars: 42,
        forks: 11,
        language: "Python",
        url: "https://github.com/Paridhi1112/multi-agent-researcher"
      },
      {
        name: "event-streaming-pipeline",
        description: "Apache NiFi & Kafka event streaming data pipeline with ELK telemetry dashboards.",
        stars: 38,
        forks: 9,
        language: "Java",
        url: "https://github.com/Paridhi1112/event-streaming-pipeline"
      },
      {
        name: "encrypted-payment-microservices",
        description: "Spring Boot + Redis microservice processing encrypted payment records across Oracle ERP modules.",
        stars: 29,
        forks: 6,
        language: "Java",
        url: "https://github.com/Paridhi1112/encrypted-payment-service"
      },
      {
        name: "bike-store-data-warehouse",
        description: "T-SQL Star Schema data warehouse with automated incremental ETL stored procedures.",
        stars: 24,
        forks: 5,
        language: "T-SQL",
        url: "https://github.com/Paridhi1112/bike-store-data-warehouse"
      }
    ]
  }
};
