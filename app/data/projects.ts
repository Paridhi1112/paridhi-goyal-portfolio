// ─── Projects ─────────────────────────────────────────────────────────────────
export interface ProjectMetric { label: string; value: string }
export interface ProjectChallenge { problem: string; solution: string }
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  videoUrl?: string;
  category: "AI & LLMs" | "Backend & Systems" | "Data Engineering" | "Full-Stack";
  featured: boolean;
  tech: string[];
  metrics: ProjectMetric[];
  // Case study fields
  problem: string;
  solution: string;
  architectureDescription: string;
  architectureNodes: string[];
  scalabilityDetails: string;
  challenges: ProjectChallenge[];
  lessonsLearned: string[];
  impact: string;
}

export const projects: Project[] = [
  {
    id: "claimarmor-ai",
    title: "ClaimArmor AI",
    subtitle: "Intelligent Multi-Agent Claims Advocacy Swarm",
    tagline: "Autonomous insurance claims auditing via hierarchical AI agent orchestration",
    description:
      "An autonomous, event-driven multi-agent system engineered using Google ADK and agents-cli. Automates insurance policy auditing via the Model Context Protocol (MCP) and extracts real-time regional parts/labor market intelligence to calculate accurate Diminished Value and generate authoritative demand letters.",
    githubUrl: "https://github.com/Paridhi1112/claimarmor-ai",
    videoUrl: "https://www.youtube.com/watch?v=w7IDOcQFHCA",
    category: "AI & LLMs",
    featured: true,
    tech: ["Python", "Google ADK", "MCP", "Multi-Agent", "LLMs", "FastAPI", "DuckDuckGo Search"],
    metrics: [
      { label: "Agent Nodes", value: "3 Specialized" },
      { label: "Architecture", value: "Hierarchical DAG" },
      { label: "Protocol", value: "MCP Sandboxed" },
    ],
    problem:
      "Everyday insurance consumers face a massive information asymmetry: adjusters use proprietary software to generate undervalued repair offers while policyholders lack the domain expertise to challenge evaluations or recover Diminished Value — the inherent market loss even after perfect repairs.",
    solution:
      "ClaimArmor democratizes claims advocacy by deploying a specialized multi-agent swarm: The Policy Auditor parses unstructured legal documents via sandboxed MCP filesystem, The Parts Scout retrieves real-time regional labor/parts market data via web search, and The Negotiator synthesizes everything into an authoritative, formula-backed demand letter with Human-in-the-Loop governance.",
    architectureDescription:
      "Hierarchical parent-child multi-agent framework with strict execution graph routing. MCP server provides sandboxed read-only policy document access. Exponential retry backoff handles concurrent sub-agent API spikes.",
    architectureNodes: [
      "User Input",
      "The Negotiator (Supervisor)",
      "Policy Auditor (MCP Node)",
      "Parts Scout (Skill Node)",
      "DuckDuckGo Search",
      "17c Formula Engine",
      "HITL Governance Gate",
      "Demand Letter Output",
    ],
    scalabilityDetails:
      "Rate-limit backoff via HttpRetryOptions handles concurrent sub-agent API spikes. The HITL intercept gateway prevents output until human confirmation, enabling safe autonomous scaling.",
    challenges: [
      {
        problem: "Sub-agent hallucination in legal/financial document parsing.",
        solution:
          "MCP sandboxed filesystem with strict read-only access + mandatory JSON schema validation on Policy Auditor output.",
      },
      {
        problem: "Real-time regional data freshness for labor rates.",
        solution:
          "Dynamic DuckDuckGo search skill injected per agent invocation, ensuring market intelligence reflects current local rates.",
      },
    ],
    lessonsLearned: [
      "Human-in-the-Loop governance gates are essential for autonomous agents operating in high-stakes financial domains.",
      "Hierarchical agent frameworks dramatically reduce hallucination surface area versus monolithic single-agent approaches.",
    ],
    impact: "Kaggle 5-Day AI Agents Intensive Capstone — Event-driven multi-agent system",
  },
  {
    id: "maars-enterprise",
    title: "MAARS Enterprise",
    subtitle: "Multi-Agent Autonomous Research System",
    tagline: "AI platform that autonomously plans, writes and manages IEEE academic papers",
    description:
      "An AI-powered platform that autonomously plans, writes, and manages IEEE-style academic research papers using multi-agent orchestration. Specialized agents handle each lifecycle phase — planning, writing, reviewing, and exporting — all streamed in real time.",
    githubUrl: "https://github.com/Paridhi1112/MAARS-Enterprise",
    category: "AI & LLMs",
    featured: true,
    tech: ["Next.js 14", "FastAPI", "Python", "LangChain", "Gemini 2.5 Pro", "Supabase", "Tavily", "FPDF2"],
    metrics: [
      { label: "Agent Phases", value: "4 Specialized" },
      { label: "Output Formats", value: "PDF + DOCX" },
      { label: "Auth", value: "Enterprise SSO" },
    ],
    problem:
      "Academic research paper writing is slow, fragmented, and cognitively expensive — requiring researchers to juggle source discovery, outline structuring, section writing, citation management, plagiarism checking, and formatting simultaneously.",
    solution:
      "MAARS deploys a pipeline of specialized agents: a Planner that builds an interactive IEEE outline for human review, a Writer that generates section-by-section content grounded in Tavily live web search, a Reviewer for plagiarism similarity checking, and an Exporter that produces publication-ready PDF/DOCX output.",
    architectureDescription:
      "Next.js 14 App Router frontend with real-time streaming from FastAPI backend. LangChain orchestrates Gemini 2.5 Pro agents. Supabase handles auth, PostgreSQL storage, and paper library. Tavily provides live web search grounding for every section.",
    architectureNodes: [
      "Next.js Frontend (Streaming UI)",
      "FastAPI Backend",
      "Research Planner Agent",
      "Section Writer Agent",
      "Tavily Live Search",
      "Plagiarism Checker",
      "Supabase DB + Auth",
      "PDF/DOCX Exporter",
    ],
    scalabilityDetails:
      "Streaming responses prevent timeout issues on long paper generation. Supabase PostgreSQL with RLS ensures multi-tenant paper library isolation. FastAPI async endpoints handle concurrent generation requests.",
    challenges: [
      {
        problem: "Maintaining coherence across multi-agent section handoffs in long papers.",
        solution:
          "Each agent receives full preceding context + section summaries via a shared state object, ensuring narrative consistency.",
      },
      {
        problem: "Citation accuracy and avoiding hallucinated sources.",
        solution:
          "All facts grounded via Tavily search with matched source URLs surfaced inline, enabling easy plagiarism-check verification.",
      },
    ],
    lessonsLearned: [
      "Real-time streaming from FastAPI to Next.js dramatically improves perceived performance for long-running agent tasks.",
      "Interactive plan approval before full generation is critical for user trust in autonomous AI systems.",
    ],
    impact: "Full-stack AI platform with enterprise auth, real-time streaming, and multi-agent research orchestration",
  },
  {
    id: "bikestore-datawarehouse",
    title: "BikeStore Data Warehouse",
    subtitle: "Enterprise Dimensional Data Modeling & BI Analytics",
    tagline: "End-to-end data warehouse with star schema, ETL, and analytical intelligence",
    description:
      "A comprehensive data warehousing and business intelligence solution transforming raw bicycle retail operations data into a strategic star schema data warehouse. Integrates 9 source CSV files spanning 27 months into dimensional models enabling full BI analytics.",
    githubUrl: "https://github.com/Paridhi1112/BikeStore_DataWarehouse",
    category: "Data Engineering",
    featured: true,
    tech: ["SQL Server", "T-SQL", "Python", "Pandas", "Jupyter", "Star Schema", "ETL", "SSMS"],
    metrics: [
      { label: "Fact Records", value: "4,722" },
      { label: "Source Files", value: "9 CSVs" },
      { label: "Coverage", value: "27 Months" },
    ],
    problem:
      "Raw bicycle retail operational data across 9 disparate CSV files — orders, customers, products, stores, staff, inventory — had no unified analytical model, making executive business intelligence and inventory optimization impossible.",
    solution:
      "Designed a star schema data warehouse with 5 dimension tables (dimDate, dimProduct, dimCustomer, dimStore, dimStaff) and a central factSales table. Automated ETL stored procedures perform incremental loading, SCD Type 2 handling, and data quality controls.",
    architectureDescription:
      "Star schema dimensional model in SQL Server with automated T-SQL ETL pipeline. Python EDA via Jupyter for advanced analytics and visualization. Each dimension table built with surrogate keys and grain-appropriate attributes.",
    architectureNodes: [
      "9 CSV Source Files",
      "Staging Schema",
      "ETL Stored Procedures",
      "dimDate (3,653 records)",
      "dimProduct (321)",
      "dimCustomer (1,445)",
      "dimStore + dimStaff",
      "factSales (4,722 records)",
      "Python EDA + BI Reports",
    ],
    scalabilityDetails:
      "Partitioned fact table by Year/Quarter with indexed view aggregations delivers sub-second query response. Incremental ETL loads reduce execution time by 90% vs full daily reloads.",
    challenges: [
      {
        problem: "Duplicate customer records across multiple source CSV files.",
        solution:
          "Implemented fuzzy-matching deduplication using string similarity scoring in staging validation to merge customer entities.",
      },
      {
        problem: "Slow analytical queries on large fact table joins.",
        solution:
          "Created indexed views for common aggregations and partitioned by date key, reducing report query times to sub-second.",
      },
    ],
    lessonsLearned: [
      "Star schema grain selection is the most important architectural decision — wrong grain creates irreconcilable aggregation errors.",
      "Incremental ETL with proper SCD Type 2 handling is essential for maintaining historical accuracy in dimensional models.",
    ],
    impact: "RPI MGMT 6570 — Unified analytical data warehouse replacing 3 fragmented reporting systems",
  },
];
