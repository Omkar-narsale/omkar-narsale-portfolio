export interface Project {
  id: string;
  title: string;
  category: 'Data Analytics' | 'Data Engineering' | 'AI/ML' | 'Artificial Intelligence' | 'Computer Vision' | 'Full Stack' | 'Cybersecurity';
  description: string;
  detailedDescription?: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  thumbnail: string;
  status: string;
  highlights?: string[];
  stars?: number;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: 'Cloud' | 'Networking & Cyber' | 'AI & ML' | 'Data & Programming' | 'Academics';
  date?: string;
  score?: string;
  credentialId?: string;
  verificationUrl?: string;
  badgeImage?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  type: 'Internship' | 'Hackathon' | 'Leadership' | 'Academic Milestone';
  grade?: string;
  credentialId?: string;
  description: string;
  bullets: string[];
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  status: string;
  location: string;
  score?: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Omkar Narsale",
  headline: "Turning Data Into Insights. Building Technology Into Solutions.",
  subheading: "Information Technology Student | Data Analyst | Developer | AI/ML Enthusiast",
  educationBadge: "Third-Year Information Technology Student · SAKEC Mumbai",
  institution: "Shah and Anchor Kutchhi Engineering College (SAKEC), Mumbai",
  location: "Mumbai, Maharashtra, India",
  email: "omkarnarsale@gmail.com",
  github: "https://github.com/Omkar-narsale",
  linkedin: "https://www.linkedin.com/in/omkar-narsale-56b188330/",
  leetcode: "https://leetcode.com/u/qlakbkpB58/",
  resumeUrl: "/resume.html",
  intro: `I am an Information Technology student passionate about transforming raw data into meaningful insights and building intelligent, scalable applications.

My interests span Data Analytics, Data Engineering, Artificial Intelligence, Machine Learning and Full-Stack Development.

I enjoy solving real-world problems through technology, building practical projects and continuously exploring emerging technologies.`,
  corePillars: [
    { title: "Analytical Thinking", desc: "Extracting actionable intelligence from raw data, building structured ETL workflows, and uncovering data patterns." },
    { title: "Problem-Solving Ability", desc: "115+ LeetCode DSA & SQL challenges tackled with a focus on optimal algorithmic complexity." },
    { title: "Technical Versatility", desc: "Fluidly navigating Python, SQL, React 19, FastAPI, Computer Vision, and Cloud Native services." },
    { title: "Real-World Experience", desc: "Building full-stack platforms, virtual try-ons, and AI network diagnosis tools with verified implementations." },
    { title: "Continuous Learning", desc: "Holding 18+ verified industry certifications across IIT Kanpur, AWS Academy, Cisco, and Palo Alto Networks." },
    { title: "Passion for Products", desc: "Architecting clean, user-centric software that bridges complex backends with fluid visual interfaces." }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages for systems, algorithms, scripting, and web solutions.",
    iconName: "Code2",
    skills: ["Python", "SQL", "JavaScript", "C"]
  },
  {
    title: "Data Analytics",
    description: "Transforming unstructured data into executive business intelligence and visual stories.",
    iconName: "BarChart3",
    skills: [
      "NumPy", "Pandas", "Matplotlib", "Seaborn", 
      "Power BI", "DAX", "Power Query", "Excel", 
      "Data Cleaning", "Exploratory Data Analysis", 
      "Data Visualization", "Statistical Analysis"
    ]
  },
  {
    title: "Database & Data Engineering",
    description: "Architecting reliable data ingestion pipelines, relational schemas, and data warehouses.",
    iconName: "Database",
    skills: [
      "MySQL", "PostgreSQL", "MongoDB", "SQLite", 
      "ETL Pipelines", "Data Validation", "Data Transformation", 
      "Incremental Data Loading", "SQLAlchemy"
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Engineering generative AI systems, vector embeddings, and LLM orchestration.",
    iconName: "Cpu",
    skills: [
      "Generative AI", "LangChain", "Hugging Face", 
      "LLM Integration", "Prompt Engineering", 
      "Sentence Transformers", "Embeddings", 
      "Vector Similarity", "TinyLlama", "Groq API"
    ]
  },
  {
    title: "Computer Vision",
    description: "Real-time spatial perception, facial landmark tracking, and 3D visual projection.",
    iconName: "Eye",
    skills: [
      "OpenCV", "MediaPipe", "PyTorch", 
      "Face Detection", "Face Tracking", 
      "Head Pose Estimation", "3D Virtual Try-On"
    ]
  },
  {
    title: "Web Development",
    description: "Building responsive, modern, production-grade web applications and REST APIs.",
    iconName: "Globe",
    skills: [
      "HTML", "CSS", "JavaScript", "React", "React 19", 
      "TypeScript", "Vite", "Tailwind CSS", "Bootstrap", 
      "Flask", "Django", "FastAPI", "Node.js"
    ]
  },
  {
    title: "Cloud & DevOps",
    description: "Deploying and managing scalable cloud infrastructure and CI/CD version control.",
    iconName: "Cloud",
    skills: [
      "AWS", "AWS IAM", "Vercel", "Render", 
      "Git", "GitHub", "MongoDB Atlas", "Neon PostgreSQL"
    ]
  },
  {
    title: "Cybersecurity & Networking",
    description: "Network architecture design, protocol analysis, packet inspection, and access security.",
    iconName: "ShieldAlert",
    skills: [
      "Cisco Packet Tracer", "Wireshark", 
      "Network Access Control", "Network Security", 
      "SQL Injection", "Network Troubleshooting"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "retailflow",
    title: "RetailFlow",
    category: "Data Engineering",
    description: "Automated retail data engineering platform designed to streamline the complete data processing workflow from CSV drops to Power BI dashboards.",
    detailedDescription: "RetailFlow automates the entire ingestion lifecycle for high-volume retail transactions. Built around Python Watchdog, the system monitors target drop directories, applies strict schema validation, handles missing fields and anomalies, executes feature engineering, and performs incremental syncs into a MySQL data warehouse configured with reporting views.",
    features: [
      "Automated ETL pipeline with error recovery",
      "Data extraction and transformation logic",
      "Strict data cleaning and schema validation",
      "Feature engineering for retail metrics",
      "Incremental data loading to reduce DB load",
      "MySQL data warehouse architecture",
      "Watchdog-based automated file monitoring",
      "Processed file archival and management",
      "Data quality checks with JSON reporting",
      "Direct Power BI dashboard integration"
    ],
    technologies: ["Python", "Pandas", "MySQL", "SQLAlchemy", "Watchdog", "React", "Power BI"],
    githubUrl: "https://github.com/Omkar-narsale/RetailFlow-Analytics-Platform",
    thumbnail: "/assets/Dashboard 1.png",
    status: "Verified & Built",
    highlights: ["Automated Ingestion", "Incremental Loading", "Data Quality Reports"]
  },
  {
    id: "netsage-ai",
    title: "NetSage AI",
    category: "Artificial Intelligence",
    description: "AI-assisted Cisco network troubleshooting platform using LLM-powered reasoning and deterministic diagnostic rules.",
    detailedDescription: "NetSage AI combines deterministic Python network diagnosis checks with Groq LLaMA 3.3 70B reasoning. The system ingests router/switch symptom logs, verifies network topology assumptions against Cisco standards, performs evidence fusion, and outputs structured, safe troubleshooting playbooks alongside human-in-the-loop review checks.",
    features: [
      "Intelligent network troubleshooting assistant",
      "AI-based diagnostic reasoning engine",
      "Deep Cisco networking domain knowledge",
      "Ultra-fast Groq LLaMA 3.3 70B integration",
      "Structured command & fix recommendations",
      "Evidence fusion combining rules and LLM insights",
      "Human-in-the-loop governance log",
      "Interactive Streamlit & Plotly analytics dashboard"
    ],
    technologies: ["Python", "Groq API", "LLaMA 3.3", "Streamlit", "Plotly", "Pydantic", "Networking"],
    githubUrl: "https://github.com/Omkar-narsale/NetSage-AI",
    thumbnail: "/assets/war.jpeg",
    status: "62 Tests Passed · Verified",
    highlights: ["Groq LLaMA 3.3", "Deterministic Rules", "Cisco NetAcad Integration"]
  },
  {
    id: "mirrorfit",
    title: "MIRRORFIT XR",
    category: "Computer Vision",
    description: "Intelligent virtual try-on platform allowing users to visualize accessories and eyewear in real-time using live webcam feed.",
    detailedDescription: "MIRRORFIT XR utilizes MediaPipe's 468-point facial mesh model and OpenCV to compute head pose rotation (yaw, pitch, roll) in real time. It projects eyewear and accessory models accurately aligned to the wearer's facial geometry with smooth frame-to-frame interpolation and look-saving capabilities.",
    features: [
      "Live webcam integration with low-latency feed",
      "468-point 3D facial landmark tracking",
      "MediaPipe Face Mesh integration",
      "Mathematical head pose estimation (Yaw/Pitch/Roll)",
      "Dynamic 2D accessory placement and alpha blending",
      "3D glasses visualization and scale adaptation",
      "Interactive virtual try-on UI",
      "Saved look snapshot generator"
    ],
    technologies: ["Python", "OpenCV", "MediaPipe", "PyTorch", "Computer Vision", "NumPy"],
    githubUrl: "https://github.com/Omkar-narsale/MirrorFit-Real-Time-Face-Tracking",
    thumbnail: "/assets/SAM_AI_1.png",
    status: "Tested Prototype",
    highlights: ["468 Face Landmarks", "Head Pose Angles", "Real-Time 30+ FPS"]
  },
  {
    id: "fixly",
    title: "FixNear / Fixly",
    category: "Full Stack",
    description: "Modern MERN-based marketplace platform connecting local homeowners with verified repair and maintenance professionals.",
    detailedDescription: "Fixly reimagines local home services through an end-to-end two-sided marketplace. Designed with React 19, Tailwind CSS, Node.js, and MongoDB, it features verified service professional directories, an intuitive booking flow with status lifecycle tracking, and review moderation.",
    features: [
      "Modern SaaS interface with glassmorphic cards",
      "Provider search by category and locality",
      "Real-time booking status lifecycle",
      "Provider verification workflow",
      "Customer review and rating moderation",
      "Persistent notifications and user profile management",
      "Responsive layout optimized for mobile and desktop"
    ],
    technologies: ["MongoDB", "Express.js", "React 19", "Node.js", "MongoDB Atlas", "Vercel", "Render", "Tailwind CSS"],
    githubUrl: "https://github.com/Omkar-narsale/Fixly-Local-Services",
    thumbnail: "/assets/Dashboard 1.png",
    status: "Full-Stack MVP",
    highlights: ["React 19 + Node.js", "Two-Sided Marketplace", "MongoDB Atlas"]
  },
  {
    id: "sam-ai",
    title: "Sam.AI — TinyLlama Chatbot",
    category: "AI/ML",
    description: "Conversational privacy-focused chatbot powered by the open-weight TinyLlama language model running locally.",
    detailedDescription: "An interactive AI conversational application that demonstrates local model deployment. Built using Hugging Face Transformers and Streamlit, it gives users fine-grained control over hyper-parameters like temperature, top-p, and max token limits while preserving chat privacy without third-party API dependencies.",
    features: [
      "Interactive local chatbot interface",
      "Persistent conversation session history",
      "Dynamic temperature & sampling sliders",
      "Token length and generation configuration",
      "Downloadable chat session transcripts",
      "One-click clear conversation functionality"
    ],
    technologies: ["Python", "Streamlit", "TinyLlama", "Hugging Face", "Transformers", "PyTorch"],
    githubUrl: "https://github.com/Omkar-narsale/Sam-AI-Tnyllama-Chatbot",
    thumbnail: "/assets/SAM_AI_2.png",
    status: "Verified Open Source",
    highlights: ["Zero External API Fee", "Local Inference", "Hugging Face"]
  },
  {
    id: "diabetes-dashboard",
    title: "Diabetes Risk & Lifestyle Indicators Dashboard",
    category: "Data Analytics",
    description: "Analytical Power BI dashboard exploring diabetes risk factors and lifestyle indicators across patient demographics.",
    detailedDescription: "Created an in-depth data visualization suite that ingests patient clinical attributes (glucose levels, BMI, physical activity, blood pressure, family history) to calculate risk propensity scores and lifestyle correlation heatmaps using custom DAX expressions.",
    features: [
      "Interactive demographic filtering",
      "Lifestyle habit risk score modeling",
      "Correlation breakdown across BMI and age",
      "Custom DAX dynamic measures and KPI cards",
      "Data cleaning and outlier treatment in Power Query"
    ],
    technologies: ["Power BI", "DAX", "Data Cleaning", "Data Visualization", "Power Query"],
    githubUrl: "https://github.com/Omkar-narsale",
    thumbnail: "/assets/Dashboard 1.png",
    status: "Completed Analytics",
    highlights: ["DAX Measures", "Risk Correlation", "Power Query Cleaning"]
  },
  {
    id: "hr-dashboard",
    title: "HR Analytics Dashboard",
    category: "Data Analytics",
    description: "Executive HR analytics dashboard providing actionable insights into employee attrition, satisfaction, and performance metrics.",
    detailedDescription: "Designed an interactive organizational intelligence dashboard analyzing workforce patterns. Features department-level turnover rates, compensation equity, tenure distribution, and attrition indicators modeled with advanced DAX calculations.",
    features: [
      "Turnover and attrition root-cause analysis",
      "Department-wise headcount and salary distribution",
      "Job role satisfaction scoring matrix",
      "Executive summary KPI tiles",
      "Dynamic cross-filtering across tenure bands"
    ],
    technologies: ["Power BI", "DAX", "Excel", "Data Modeling"],
    githubUrl: "https://github.com/Omkar-narsale",
    thumbnail: "/assets/HR Dashboard.png",
    status: "Completed BI Suite",
    highlights: ["Attrition Analysis", "Salary Benchmarks", "Executive KPIs"]
  },
  {
    id: "war-dashboard",
    title: "Geopolitical Crisis & Economic Impact Dashboard",
    category: "Data Analytics",
    description: "Macroeconomic dashboard analyzing the relationship between international geopolitical events and global commodity prices.",
    detailedDescription: "Investigated market volatility triggered by geopolitical crises. The dashboard visualizes temporal shifts in Brent crude oil, natural gas, wheat, fertilizer commodities, and national inflation rates relative to major conflict inflection points.",
    features: [
      "Crude oil and natural gas price volatility tracking",
      "Agricultural commodity price spikes and supply impact",
      "Inflation trend analysis vs. geopolitical milestones",
      "Global stock market index impact visualizations",
      "Multi-series time-scale timeline charts"
    ],
    technologies: ["Power BI", "Data Visualization", "Data Analysis", "Economic Data Modeling"],
    githubUrl: "https://github.com/Omkar-narsale",
    thumbnail: "/assets/war.jpeg",
    status: "Completed Analysis",
    highlights: ["Energy Market Trends", "Inflation Indices", "Global Macro Metrics"]
  },
  {
    id: "hospital-system",
    title: "Hospital Information System",
    category: "Full Stack",
    description: "Comprehensive hospital operations management application facilitating patient admissions, doctor schedules, and clinical records.",
    detailedDescription: "A reliable full-stack management portal built with Flask and MySQL. Handles patient triage, bed assignments, doctor appointment scheduling, prescription tracking, and administrative reporting with secure database queries and input validation.",
    features: [
      "Patient registration and medical history management",
      "Doctor roster and appointment scheduling",
      "Departmental bed and ward allocation",
      "Role-based access for medical and admin staff",
      "Relational MySQL database with foreign key constraints"
    ],
    technologies: ["Python", "Flask", "MySQL", "HTML5", "CSS3", "Bootstrap"],
    githubUrl: "https://github.com/Omkar-narsale",
    thumbnail: "/assets/Dashboard 1.png",
    status: "Verified Project",
    highlights: ["Flask Backend", "Relational MySQL", "CRUD Operations"]
  },
  {
    id: "resume-iq",
    title: "ResumeIQ — AI Resume Analysis Platform",
    category: "AI/ML",
    description: "AI-powered career technology platform performing automated resume parsing, skill gap analysis, and tailored job recommendations.",
    detailedDescription: "ResumeIQ evaluates applicant resumes against target job descriptions using text embeddings and semantic similarity. It extracts hard and soft skills, scores qualification alignment, and outputs tailored suggestions for improvement.",
    features: [
      "Automated PDF resume text extraction",
      "Semantic similarity scoring using embeddings",
      "Hard vs. soft skill taxonomy matching",
      "Actionable critique and bullet point suggestions",
      "Keyword gap visualization for applicant tracking systems"
    ],
    technologies: ["Python", "LangChain", "Sentence Transformers", "FastAPI", "Prompt Engineering"],
    githubUrl: "https://github.com/Omkar-narsale",
    thumbnail: "/assets/SAM_AI_1.png",
    status: "Development & Research",
    highlights: ["Vector Similarity", "Semantic Matching", "Skill Extraction"]
  },
  {
    id: "eduguard-ai",
    title: "EduGuard AI — Dropout Risk Prediction",
    category: "AI/ML",
    description: "Hackathon-built ML platform predicting student dropout risk with role-based dashboards for administrators and counselors.",
    detailedDescription: "Designed the end-to-end architecture ingesting student academic history, attendance records, and socio-economic indicators. Machine learning models generate risk tiers displayed across custom role dashboards with real-time CSV data exports.",
    features: [
      "Machine learning student risk classification",
      "FastAPI backend with structured endpoints",
      "Role-based access for HOD, Teacher, Counselor, Student",
      "React frontend with live scoring updates",
      "PostgreSQL relational data store"
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "React", "Machine Learning", "REST APIs"],
    githubUrl: "https://github.com/Omkar-narsale",
    thumbnail: "/assets/Dashboard 1.png",
    status: "Hackathon Project",
    highlights: ["FastAPI + Postgres", "Role-Based Dashboards", "ML Risk Scoring"]
  },
  {
    id: "data-cleaning-sql",
    title: "Data Cleaning using Structured SQL",
    category: "Data Engineering",
    description: "Rigorous academic and practical project standardizing messy real-world datasets using advanced SQL techniques.",
    detailedDescription: "Executed multi-step data hygiene on unstructured data: deduplication using window functions (ROW_NUMBER), regex-based date/phone standardization, handling NULLs with COALESCE/CASE statements, and data type normalization.",
    features: [
      "Duplicate elimination using Window Functions (ROW_NUMBER)",
      "Standardizing date formats and inconsistent casing",
      "Handling blank and null records through conditional imputation",
      "Validating foreign key relationships and orphaned records",
      "Comprehensive performance-tuned query scripts"
    ],
    technologies: ["SQL", "MySQL", "Data Cleaning", "Data Modeling", "ETL"],
    githubUrl: "https://github.com/Omkar-narsale/Data-cleaning-using-SQL",
    thumbnail: "/assets/Dashboard 1.png",
    status: "Verified Open Source",
    highlights: ["Window Functions", "Schema Standardization", "Data Hygiene"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "nptel-cdma",
    title: "Principles of Modern CDMA/MIMO/OFDM Wireless Communications",
    issuer: "IIT Kanpur (NPTEL)",
    category: "Academics",
    date: "Jul – Sep 2026",
    score: "87% (Elite Certification)",
    featured: true,
    badgeImage: "/assets/ibm-data-fundamentals.png"
  },
  {
    id: "cisco-internship-2026",
    title: "Cisco AICTE Virtual Internship — Artificial Intelligence",
    issuer: "Cisco Networking Academy",
    category: "Networking & Cyber",
    date: "Jun – Aug 2026",
    credentialId: "STU679b8dca09b921738247626",
    featured: true,
    score: "Completed with Distinction"
  },
  {
    id: "cisco-networking-basics",
    title: "Cisco CCNA: Networking Basics (SYIT2-SLA)",
    issuer: "Cisco Networking Academy",
    category: "Networking & Cyber",
    date: "Mar 2026",
    score: "Score: 80% (Advanced Level)",
    featured: true
  },
  {
    id: "bootstrap-iitb",
    title: "Bootstrap Training Certification",
    issuer: "EduPyramids · SINE IIT Bombay · SWAYAM Plus",
    category: "Data & Programming",
    date: "Oct 2026",
    score: "100.00% Score (2 Credits)",
    credentialId: "47563922YR",
    featured: true
  },
  {
    id: "aws-cloud-foundations",
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    category: "Cloud",
    date: "2025",
    badgeImage: "/assets/aws-cloud-foundations.png",
    featured: true
  },
  {
    id: "aws-cloud-architecting",
    title: "AWS Academy Cloud Architecting",
    issuer: "Amazon Web Services",
    category: "Cloud",
    date: "2025",
    badgeImage: "/assets/aws-cloud-architecting.png",
    featured: true
  },
  {
    id: "aws-genai",
    title: "AWS Academy Generative AI Foundations",
    issuer: "Amazon Web Services",
    category: "Cloud",
    date: "2025",
    badgeImage: "/assets/aws-genai-foundations.png",
    featured: true
  },
  {
    id: "palo-alto-cyber",
    title: "Cybersecurity Fundamentals & Security Operations",
    issuer: "Palo Alto Networks",
    category: "Networking & Cyber",
    date: "2025",
    score: "Grade E (Excellent)",
    featured: true
  },
  {
    id: "ibm-ai-fundamentals",
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    category: "AI & ML",
    date: "2025",
    badgeImage: "/assets/ibm-ai-fundamentals.png",
    featured: true
  },
  {
    id: "ibm-data-fundamentals",
    title: "Data Fundamentals",
    issuer: "IBM SkillsBuild",
    category: "Data & Programming",
    date: "2026",
    badgeImage: "/assets/ibm-data-fundamentals.png"
  },
  {
    id: "redhat-python",
    title: "Python Programming (AD141 RHA)",
    issuer: "Red Hat",
    category: "Data & Programming",
    date: "2026",
    badgeImage: "/assets/redhat-python.png"
  },
  {
    id: "hp-life-data",
    title: "Data Analytics Certification",
    issuer: "HP LIFE",
    category: "Data & Programming",
    date: "2025"
  },
  {
    id: "simplilearn-prompt-eng",
    title: "Prompt Engineering & Generative AI Studio",
    issuer: "Simplilearn",
    category: "AI & ML",
    date: "2025"
  },
  {
    id: "excelr-iot",
    title: "Internet of Things (IoT)",
    issuer: "ExcelR",
    category: "Networking & Cyber",
    date: "2025"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-cisco-2026",
    title: "Cisco AICTE Virtual Internship Program",
    role: "Artificial Intelligence Intern",
    organization: "Cisco Networking Academy · AICTE",
    period: "Jun 2026 – Aug 2026",
    type: "Internship",
    credentialId: "STU679b8dca09b921738247626",
    description: "Selected for the competitive Cisco AICTE Virtual Internship focused on Artificial Intelligence and network operations.",
    bullets: [
      "Engineered automated network troubleshooting reasoning routines using deterministic checks and LLM integration.",
      "Studied enterprise network topologies, routing protocols (OSPF/BGP), and Cisco Packet Tracer network simulation.",
      "Earned Cisco official recognition partner credential through Shah and Anchor Kutchhi Engineering College."
    ],
    skills: ["Artificial Intelligence", "Cisco Packet Tracer", "Network Automation", "Troubleshooting"]
  },
  {
    id: "exp-aws-2025",
    title: "AWS Cloud Virtual Internship",
    role: "Cloud Engineering Intern",
    organization: "AICTE · EduSkills · AWS Academy",
    period: "Jul 2025 – Sep 2025",
    type: "Internship",
    grade: "Grade E (Excellent: 80–89)",
    credentialId: "8e650fa144ee80cf41fa82e53e70d858e",
    description: "Completed 10-week intensive hands-on cloud computing virtual internship provided through the National Internship Portal.",
    bullets: [
      "Deployed and configured AWS core services including EC2 compute instances, S3 storage buckets, and VPC networking.",
      "Implemented security policies using AWS IAM role-based access control and least-privilege principles.",
      "Designed fault-tolerant and highly scalable cloud-native architectures following AWS Well-Architected Framework."
    ],
    skills: ["AWS Cloud", "AWS IAM", "EC2", "S3", "Cloud-Native Architecture"]
  },
  {
    id: "exp-palo-alto-2025",
    title: "Cybersecurity Virtual Internship",
    role: "Cybersecurity Analyst Intern",
    organization: "AICTE · EduSkills · Palo Alto Networks",
    period: "Apr 2025 – Jun 2025",
    type: "Internship",
    grade: "Grade E (Excellent: 80–89)",
    credentialId: "bc8fc5aac2760456fad3895c98517e59",
    description: "10-week specialized internship covering enterprise cybersecurity operations, threat vectors, and SOC management.",
    bullets: [
      "Analyzed threat mitigation tactics, packet inspection techniques, and network access control (NAC) policies.",
      "Gained hands-on proficiency in Security Operations Center (SOC) workflows and incident detection.",
      "Explored cloud perimeter security, firewall rule configuration, and common vulnerability mitigation (SQLi, XSS)."
    ],
    skills: ["Cybersecurity", "Network Security", "SOC Operations", "Palo Alto Networks", "Threat Intelligence"]
  },
  {
    id: "exp-vega-hackathon",
    title: "VEGA Hackathon 2026",
    role: "Builder & Collaborative Developer",
    organization: "SIH-Inspired National Hackathon Track",
    period: "2026",
    type: "Hackathon",
    description: "Participated in an intensive 12-hour buildathon with ₹50,000 prize pool, turning real-world problem statements into functioning code.",
    bullets: [
      "Collaborated in a multidisciplinary team under strict time constraints to prototype a full-stack solution.",
      "Designed backend data schema and connected responsive UI views under rapid sprint cycles.",
      "Repository available on GitHub: https://github.com/Smeet-Chothani/Vega_hacks"
    ],
    skills: ["Rapid Prototyping", "Full-Stack Development", "Team Collaboration", "Git Version Control"]
  },
  {
    id: "exp-sakec-volunteer",
    title: "NSS Volunteer",
    role: "Active Student Volunteer",
    organization: "National Service Scheme (NSS) · SAKEC Mumbai",
    period: "2024 – Present",
    type: "Leadership",
    description: "Actively contributing to community outreach programs, technical awareness workshops, and college initiatives at SAKEC.",
    bullets: [
      "Organized social awareness drives, blood donation initiatives, and digital literacy campaigns.",
      "Developed communication, leadership, and empathy-driven problem-solving through real community impact."
    ],
    skills: ["Leadership", "Community Outreach", "Event Coordination"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Shah and Anchor Kutchhi Engineering College (SAKEC)",
    degree: "Bachelor of Engineering (B.E.)",
    field: "Information Technology",
    duration: "2024 — Present",
    status: "Third Year Student",
    location: "Chembur, Mumbai, Maharashtra, India",
    highlights: [
      "Specializing in Data Analytics, Database Management Systems, AI/ML, and Computer Networks.",
      "Active participant in collegiate hackathons, technical committees, and NSS social initiatives.",
      "Consistent academic record with deep project-driven practical applications."
    ]
  },
  {
    institution: "Maharashtra State Board of Secondary and Higher Secondary Education",
    degree: "Higher Secondary Certificate (HSC — 12th)",
    field: "Science Stream (Physics, Chemistry, Mathematics)",
    duration: "2024",
    status: "Completed",
    location: "Navi Mumbai, Maharashtra, India",
    score: "83.83%",
    highlights: [
      "Strong quantitative foundation in Advanced Mathematics, Calculus, and Physical Sciences.",
      "Sparked keen analytical interest in algorithmic logic and computational programming."
    ]
  },
  {
    institution: "Maharashtra State Board of Secondary and Higher Secondary Education",
    degree: "Secondary School Certificate (SSC — 10th)",
    field: "General Academic Curriculum",
    duration: "2022",
    status: "Completed",
    location: "Navi Mumbai, Maharashtra, India",
    score: "91.44%",
    highlights: [
      "Graduated with Distinction (>90%).",
      "Demonstrated academic excellence and problem-solving discipline."
    ]
  }
];

export const LEETCODE_DATA = {
  profileUrl: "https://leetcode.com/u/qlakbkpB58/",
  repoUrl: "https://github.com/Omkar-narsale/Leetcode-Solution",
  totalSolved: "115+",
  pythonDSAProblems: "70+",
  sqlSolved: "45+",
  badges: [
    { name: "100 Days Badge 2026", image: "/assets/leetcode-100days.png", desc: "Recognized for continuous daily algorithmic problem solving across 100 days in 2026." },
    { name: "50 Days Badge 2026", image: "/assets/leetcode-50days.png", desc: "Awarded for 50-day active problem-solving streak on LeetCode." },
    { name: "SQL 50 Badge", image: "/assets/leetcode-sql50.png", desc: "Mastered fundamental to complex SQL querying patterns including CTEs, Joins, and Window functions." }
  ],
  topicsPythonDSA: [
    { name: "Arrays & Strings", count: "30+ Problems", desc: "Two Sum, 3Sum, Product of Array Except Self, Rotate Array" },
    { name: "Two Pointers & Sliding Window", count: "18+ Problems", desc: "Minimum Size Subarray Sum, Trapping Rain Water, Valid Palindrome" },
    { name: "Hash Maps & Sets", count: "15+ Problems", desc: "Group Anagrams, Contains Duplicate, Subarray Sum Equals K" },
    { name: "Binary Search & Sorting", count: "12+ Problems", desc: "Search in Rotated Sorted Array, Find Peak Element, Merge Intervals" }
  ],
  topicsSQL: [
    { name: "Window Functions", desc: "ROW_NUMBER(), RANK(), DENSE_RANK(), LEAD(), LAG() across partitioned data" },
    { name: "Common Table Expressions (CTEs)", desc: "Modular, recursive, and multi-tier queries for clean readability" },
    { name: "Subqueries & Correlated Queries", desc: "Complex filtering across dynamic aggregates and exists clauses" },
    { name: "Multi-Table Joins & Unions", desc: "Inner, Left, Right, Full Outer Joins with composite key conditions" },
    { name: "Aggregations & Grouping", desc: "HAVING clauses, conditional SUM/COUNT with CASE WHEN expressions" }
  ]
};
