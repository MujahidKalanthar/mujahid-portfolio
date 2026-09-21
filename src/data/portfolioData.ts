export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack & AI' | 'Strategy & Analytics' | 'Civic Tech';
  period: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  techStack: string[];
  recognition?: string;
  liveUrl?: string;
  githubUrl: string;
  architectureHighlights?: string[];
  featured: boolean;
  imagePath?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  reflection: string;
  coverImage: string;
  gradient: string;
}

export interface PoemWork {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  manuscriptImages: string[];
  stanzas: string[][];
}

export interface EventPhoto {
  id: string;
  title: string;
  location: string;
  event: string;
  imagePath: string;
  caption: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export const PERSONAL_INFO = {
  name: "Mujahid Kalanthar",
  title: "Full-Stack & AI Systems Engineer",
  subTitle: "B.Tech Electronics & Communication Engineering — MNNIT Allahabad",
  location: "Prayagraj, UP, India / Riyadh, Saudi Arabia",
  personalEmail: "mujahidkalanthar@gmail.com",
  schoolEmail: "mujahid.20244510@mnnit.ac.in",
  github: "https://github.com/MujahidKalanthar",
  linkedin: "https://www.linkedin.com/in/mujahid-kalanthar/",
  leetcode: "https://leetcode.com/u/MujahidKalanthar/",
  goodreads: "https://www.goodreads.com/ardentpandabear",
  resumePath: "/Mujahid_Resume_2026.pdf",
  photoPath: "/pp.JPG",
  bio: `I am a third-year Electronics & Communication Engineering undergraduate at MNNIT Allahabad, building production-grade systems across full-stack engineering, AI/RAG architectures, and data analytics engines.

My engineering philosophy centers on determinism, async concurrency, and cost-aware design — building tools that serve bounded functions cleanly rather than using AI as a catch-all gimmick. Alongside code, I compete nationally in strategy, analytics, consulting, and innovation competitions hosted by premier institutes like IITs, IIMs, IISc, SRCC, NMIMS, and MNNIT, with over 5 podium finishes and 10+ finalist shortlists across 27 national events.

Beyond engineering, I am a voracious reader, a poetry writer, and an intellectually curious problem solver.`,
  taglines: [
    "Full-Stack & AI Systems Engineering",
    "RAG Pipelines · Async Backend Architecture",
    "National Case Competition Podium Strategist",
    "Data Analytics & Business Intelligence"
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "pace",
    title: "PACE",
    subtitle: "Personalized Academic Planning & Execution Platform",
    category: "Full-Stack & AI",
    period: "2026",
    imagePath: "/projects/pace.png",
    shortDesc: "Production-oriented planner for competitive exam students (JEE, NEET, GATE) combining Gemini 3.6 Flash structured syllabus parsing with a deterministic daily scheduling engine.",
    fullDesc: "PACE bridges the gap between unstructured syllabus content and actionable daily execution. Built for students preparing for high-stakes examinations like JEE, NEET, and GATE, PACE ingests raw syllabus PDFs or text using Gemini 3.6 Flash with strict Zod schema validation. Rather than relying on non-deterministic AI for daily schedule generation, all scheduling algorithms run on a multi-constraint deterministic engine with zero AI hallucination cost and sub-5ms recalculations.",
    highlights: [
      "Server-side AI ingestion pipeline with a human-in-the-loop review gate before any database commit",
      "Multi-constraint scheduler factoring difficulty weights, daily time capacity, timetable commitments, and spaced repetition (1/7/30-day intervals)",
      "Adaptive missed-work redistribution across remaining study windows without breaking existing commitments",
      "Supabase Row-Level Security (RLS) ensuring strict private data isolation across study groups",
      "13/13 automated unit test suite covering edge-case schedule overflows and constraint collisions"
    ],
    techStack: ["React 19", "TypeScript", "Vite", "Supabase RLS", "PostgreSQL", "Express.js", "Gemini 3.6 Flash", "Zod", "Vercel"],
    liveUrl: "https://pace-study.vercel.app/",
    githubUrl: "https://github.com/MujahidKalanthar/PACE-study-planner",
    architectureHighlights: [
      "AI Syllabus Parser (Gemini + Zod) -> Review Gate -> Supabase RLS",
      "Deterministic Scheduler Engine (<5ms execution) -> Adaptive Task Redistribution",
      "Spaced Repetition Engine (1/7/30 days) -> Daily Execution Matrix"
    ],
    featured: true
  },
  {
    id: "auravideo",
    title: "AuraVideo AI",
    subtitle: "Video & Meeting Intelligence Platform",
    category: "Full-Stack & AI",
    period: "2026",
    imagePath: "/projects/aura.png",
    shortDesc: "Transforms YouTube videos and meeting recordings into a structured knowledge base with grounded RAG conversational search and real-time SSE progress streaming.",
    fullDesc: "AuraVideo AI is an end-to-end video and transcript intelligence engine. It extracts, transcribes, and processes long-form audio/video content into executive summaries, action item matrices, and key decision logs. Built with a grounded LangChain LCEL RAG pipeline, every answer in the chat interface includes cited source timestamps and verbatim transcript excerpts.",
    highlights: [
      "Namespaced Chroma vector store per analysis session: complete data isolation with disk persistence",
      "Map-reduce summarization pipeline to process audio transcripts exceeding LLM context boundaries",
      "Real-time progress updates via Server-Sent Events (SSE) with per-analysis asyncio.Queue fan-out (zero client polling)",
      "Multi-provider transcription fallback chain: Groq Whisper-large-v3 -> Sarvam AI (Hinglish support) -> local Whisper",
      "Tenacity exponential-backoff retries across external APIs with shell injection prevention via shlex.quote()"
    ],
    techStack: ["Python 3.12", "FastAPI", "LangChain LCEL", "ChromaDB", "Mistral AI", "Groq Whisper", "SQLite WAL"],
    githubUrl: "https://github.com/MujahidKalanthar/auravideo-ai-assistant",
    architectureHighlights: [
      "Audio/Video Ingestion -> Multi-Provider Whisper Pipeline (Groq / Sarvam)",
      "Transcript Processing -> Chunking & Namespaced Vector Store (ChromaDB)",
      "Grounded Q&A Engine -> LangChain LCEL + Cited Timestamp Excerpts",
      "Backend Concurrency -> FastAPI + SQLite WAL + SSE Event Streaming"
    ],
    featured: true
  },
  {
    id: "voltedge",
    title: "VoltEdge Intelligence",
    subtitle: "India Energy Security & Macroeconomic Analytics Platform",
    category: "Strategy & Analytics",
    period: "2026",
    imagePath: "/projects/Voltedge intelligence.png",
    shortDesc: "Macroeconomic risk platform simulating Strait of Hormuz supply disruptions on India's GDP, CPI inflation, and FX stress.",
    fullDesc: "VoltEdge Intelligence models India's energy-security vulnerability under global geopolitical disruption scenarios, specifically evaluating supply chokepoints like the Strait of Hormuz. The platform provides policy intelligence dashboards, macroeconomic shock propagation models, and strategic energy diversification roadmaps.",
    highlights: [
      "Executive crisis dashboard with multi-dimensional KPI risk scoring",
      "Interactive geopolitical scenario simulator with adjustable monetary and energy policy levers",
      "Macroeconomic stress model linking oil price shocks to CPI inflation, currency depreciation, and GDP contraction",
      "Energy import vulnerability heatmaps and strategic petroleum reserve (SPR) buffer simulation"
    ],
    techStack: ["Python", "Pandas", "NumPy", "Streamlit", "Plotly", "SQLite", "SQL"],
    recognition: "SRCC National Finalist",
    liveUrl: "https://voltedge-energy-intelligence.streamlit.app/",
    githubUrl: "https://github.com/MujahidKalanthar/voltedge-energy-intelligence",
    featured: true
  },
  {
    id: "zeptoiq",
    title: "ZeptoIQ",
    subtitle: "Quick-Commerce Profitability & Unit Economics Intelligence",
    category: "Strategy & Analytics",
    period: "2025",
    imagePath: "/projects/ZeptoIq.png",
    shortDesc: "Strategic analytics platform evaluating Zepto's dark-store delivery model across unit economics, demand forecasting, and IPO readiness.",
    fullDesc: "ZeptoIQ breaks down the economics behind 10-minute delivery at scale. Designed to answer whether quick-commerce hyper-growth is financially sustainable, ZeptoIQ models customer acquisition cost (CAC), lifetime value (LTV), dark-store order density, and contribution margins per delivery hub.",
    highlights: [
      "Unit economics calculator modeling contribution margin 1, 2, and 3 across order size brackets",
      "Prophet time-series forecasting engine predicting dark-store order volume and seasonal demand spikes",
      "Dark-store rollout simulator with city-level profitability heatmaps and break-even timelines",
      "IPO readiness scorecard assessing balance sheet health across 8 critical financial dimensions"
    ],
    techStack: ["Python", "Streamlit", "Prophet", "Power BI", "Plotly", "Pandas"],
    recognition: "2nd Place Podium — MNNIT Allahabad",
    githubUrl: "https://github.com/MujahidKalanthar/zeptoiq-profitability-engine",
    featured: true
  },
  {
    id: "d2cgrowth",
    title: "D2C Growth Intelligence",
    subtitle: "D2C Retention Analytics & NLP Sentiment Platform",
    category: "Strategy & Analytics",
    period: "2025",
    imagePath: "/projects/d2c.png",
    shortDesc: "Retention analytics engine for direct-to-consumer brands modeling cohort retention, pricing sensitivity, RFM customer segmentation, and NLP sentiment.",
    fullDesc: "D2C Growth Intelligence turns transactional and customer feedback data into actionable retention strategies for premium D2C brands. It helps brand managers identify churn drivers, calculate customer lifetime value, simulate price elasticities, and extract product sentiment directly from unorganized reviews.",
    highlights: [
      "Cohort retention matrix and repeat-purchase frequency modeling with LTV projections",
      "Pricing and margin simulation engine across SKU tiers and marketing channel spend",
      "RFM (Recency, Frequency, Monetary) customer segmentation with automated churn risk alerts",
      "TextBlob NLP sentiment analysis pipeline extracting review sentiment and keyword cluster intent"
    ],
    techStack: ["Python", "Streamlit", "Scikit-learn", "TextBlob NLP", "Plotly", "Pandas"],
    recognition: "DDUC National Finalist",
    githubUrl: "https://github.com/MujahidKalanthar/retention-led-d2c-growth-intelligence-platform",
    featured: false
  },
  {
    id: "saveoncare",
    title: "SaveOnCare",
    subtitle: "Healthcare Billing Transparency Platform",
    category: "Civic Tech",
    period: "2025",
    imagePath: "/projects/Saveoncare.png",
    shortDesc: "AI-powered civic tech platform helping patients detect hospital overcharges and check government healthcare scheme (Ayushman Bharat) eligibility.",
    fullDesc: "SaveOnCare addresses medical bill inflation and lack of transparency in Indian healthcare. Patients can upload hospital bills to receive automated overcharge checks, line-item cost comparisons against government-capped rates, and eligibility verification for Ayushman Bharat and subsidized municipal hospitals.",
    highlights: [
      "Color-coded bill item severity classification (Green / Yellow / Red) for instant bill audit",
      "Smart Treatment Advisor matching medical conditions to nearby subsidized or Ayushman Bharat impaneled hospitals",
      "Natural language AI Health Assistant answering patient billing rights and scheme procedures",
      "Automated dispute letter generator creating formatted grievance documents for hospital administration"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Vercel", "REST APIs"],
    recognition: "IIT Jammu National Finalist",
    githubUrl: "https://github.com/MujahidKalanthar/SaveOnCare",
    featured: false
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "qtc",
    role: "Software Development Intern",
    company: "Quality Techno Certification (QTC)",
    location: "Riyadh, Saudi Arabia (Hybrid)",
    period: "July 2025 – August 2025",
    type: "Internship",
    description: [
      "Engineered backend logic, internal automation workflows, and process improvement tools for enterprise operations.",
      "Contributed to full-stack feature development and UI/UX enhancements using React.js, Node.js, and MongoDB.",
      "Optimized internal documentation pipelines and process efficiency for international certification workflows.",
      "Gained hands-on production exposure with Dockerized micro-environments, CI/CD pipelines, and cloud deployment practices."
    ],
    skills: ["React.js", "Node.js", "MongoDB", "Express", "Docker", "CI/CD", "Backend Development"]
  },
  {
    id: "elsoc",
    role: "Design & Content Team Member",
    company: "Electronics Society MNNIT",
    location: "MNNIT Allahabad, India",
    period: "November 2025 – Present",
    type: "Leadership / Society",
    description: [
      "Designing technical content, event collateral, and digital media for institute-level electronics and robotics technical initiatives.",
      "Collaborating with senior student leads to organize technical workshops, hackathons, and departmental symposiums."
    ],
    skills: ["Design Strategy", "Technical Writing", "Event Execution", "Team Collaboration"]
  },
  {
    id: "gssoc",
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code 2024",
    location: "Remote",
    period: "October 2024 – November 2024",
    type: "Open Source",
    description: [
      "Contributed community code to open-source developer repositories across frontend UI fixes, documentation, and API integrations.",
      "Collaborated with project maintainers through peer code reviews and git feature-branch workflows."
    ],
    skills: ["Git", "GitHub Workflows", "JavaScript", "Open Source", "Code Review"]
  }
];

export const BOOKS: Book[] = [
  {
    id: "book-1",
    title: "The Book Thief",
    author: "Markus Zusak",
    category: "Historical Fiction / Narrative Art",
    coverImage: "/books/Book thief.jpg",
    reflection: "I love historical fiction because it lets history stop feeling like something that happened and start feeling like somewhere you were. The Book Thief took that even further by putting Death behind the narration. It was raw, strangely intimate, and unlike anything I'd read before.",
    gradient: "from-amber-900/30 to-red-950/40"
  },
  {
    id: "book-2",
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    category: "Literary Fiction / Resilience",
    coverImage: "/books/thousand splendid.jpg",
    reflection: "Hosseini doesn't look away when things become painful. The book's heartbreak comes from how honestly it lets its characters suffer, love, endure, and keep going. There were moments I genuinely had to put it down.",
    gradient: "from-yellow-950/30 to-orange-900/30"
  },
  {
    id: "book-3",
    title: "A Good Girl's Guide to Murder",
    author: "Holly Jackson",
    category: "Mystery / Structural Craft",
    coverImage: "/books/a good girls guide.jpg",
    reflection: "What stayed with me wasn't just the mystery—it was how deliberately everything was built. Details that seemed insignificant at first eventually mattered, and watching the pieces come together made me appreciate just how much thought can go into constructing a story.",
    gradient: "from-slate-900/40 to-cyan-950/40"
  },
  {
    id: "book-4",
    title: "Percy Jackson & the Olympians",
    author: "Rick Riordan",
    category: "Mythology & Exploration",
    coverImage: "/books/percy jackson.jpg",
    reflection: "These books were probably one of the biggest reasons I became fascinated by mythology. I loved how Riordan could keep expanding the world with new gods, characters, histories, and quests without losing what came before. Somewhere along the way, Greek mythology started blending with my curiosity about astronomy and the names scattered across our skies.",
    gradient: "from-blue-950/40 to-indigo-950/40"
  },
  {
    id: "book-5",
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Philosophical Fiction",
    coverImage: "/books/alchemist.jpg",
    reflection: "I went into it expecting not to like it precisely because everyone seemed to love it. Instead, its simplicity caught me off guard. It is one of those books that can make you close the cover for a moment and just sit with what you have read.",
    gradient: "from-amber-950/30 to-yellow-900/30"
  }
];

export const POEMS_LIST: PoemWork[] = [
  {
    id: "poem-superposition",
    title: "Superposition",
    subtitle: "On Quantum Metaphor & Boundless Possibility",
    author: "~ M.K",
    manuscriptImages: ["/poems/Superposition.png"],
    stanzas: []
  },
  {
    id: "poem-child",
    title: "Child",
    subtitle: "On Innocence, Memory & Unfolding Light",
    author: "~ M.K",
    manuscriptImages: ["/poems/Child 1.png", "/poems/Child 2.png"],
    stanzas: []
  },
  {
    id: "poem-your-eyes",
    title: "Your Eyes",
    subtitle: "On Observation, Quiet Depth & Stillness",
    author: "~ M.K",
    manuscriptImages: ["/poems/Your eyes 1.png", "/poems/Your eyes 2.png"],
    stanzas: []
  }
];

export const EVENT_PHOTOS: EventPhoto[] = [
  {
    id: "photo-1",
    title: "DDUC KROSS CARTEL Podium Presentation",
    location: "Deen Dayal Upadhyaya College, Delhi University",
    event: "KROSS CARTEL Marketing Case Competition",
    imagePath: "/events/dduc.jpeg",
    caption: "Presenting D2C Growth Intelligence retention analytics and sentiment platform before the national judging panel at DDUC."
  },
  {
    id: "photo-2",
    title: "National Competition Stage",
    location: "Delhi University",
    event: "KROSS CARTEL Finals",
    imagePath: "/events/kross.jpeg",
    caption: "On stage at DDUC during the final pitch round of KROSS CARTEL National Marketing Competition."
  },
  {
    id: "photo-3",
    title: "Case Strategy Team Discussion",
    location: "MNNIT Allahabad",
    event: "Case Clash & Strategic Sprint",
    imagePath: "/events/DSC00427.JPG",
    caption: "Working through financial modeling and slide deck strategy during late-night case competition preparation."
  },
  {
    id: "photo-4",
    title: "Udhbav Leadership Event",
    location: "MNNIT Allahabad",
    event: "Institute Leadership & Event Execution",
    imagePath: "/events/Udhbav.jpeg",
    caption: "Organizing and executing technical events with the Electronics Society at MNNIT Allahabad."
  },
  {
    id: "photo-5",
    title: "National Finalist Recognition Moment",
    location: "New Delhi",
    event: "SRCC Crisis Mania & Policy Quest",
    imagePath: "/events/IMG_2327.JPG",
    caption: "Capturing the final presentation moment after defending geopolitical energy security strategy."
  },
  {
    id: "photo-6",
    title: "DDUC Award Presentation Ceremony",
    location: "Deen Dayal Upadhyaya College, Delhi",
    event: "National Finalist Certificate Distribution",
    imagePath: "/events/dducc.JPG",
    caption: "Receiving the National Finalist recognition at DDUC Delhi University."
  },
  {
    id: "photo-7",
    title: "Case Competition Team Lead Moment",
    location: "Institute Campus",
    event: "National Strategy Grind",
    imagePath: "/events/IMG_4301.jpg",
    caption: "Team collaboration during the final submission window of national case challenges."
  },
  {
    id: "photo-8",
    title: "Strategy Pitch Preparation",
    location: "MNNIT Allahabad",
    event: "Pre-Finals Deck Polish",
    imagePath: "/events/IMG_4342 (1).jpg",
    caption: "Reviewing macroeconomic risk scoring and unit economics slide decks before final defense."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Core Languages",
    skills: [
      { name: "Python" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "C++" },
      { name: "C" }
    ]
  },
  {
    category: "Full-Stack & Backend",
    skills: [
      { name: "React 19" },
      { name: "FastAPI" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Vite" },
      { name: "REST APIs" }
    ]
  },
  {
    category: "AI, RAG & LLM Systems",
    skills: [
      { name: "LangChain (LCEL)" },
      { name: "ChromaDB" },
      { name: "Google Gemini 3.6" },
      { name: "Mistral AI" },
      { name: "Groq Whisper" },
      { name: "Zod Schema Validation" },
      { name: "Sentence Transformers" }
    ]
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "PostgreSQL" },
      { name: "Supabase (RLS & GoTrue)" },
      { name: "SQLite (WAL Mode)" },
      { name: "MongoDB" },
      { name: "Docker" },
      { name: "Vercel" }
    ]
  },
  {
    category: "Data Analytics & ML",
    skills: [
      { name: "Pandas & NumPy" },
      { name: "Scikit-learn" },
      { name: "Plotly" },
      { name: "Streamlit" },
      { name: "Prophet Forecasting" },
      { name: "Power BI" },
      { name: "TextBlob NLP" }
    ]
  }
];
