/**
 * =======================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =======================================================================
 * Customize all content, links, projects, and personal details here.
 * Every section of the website dynamically reads from this file.
 */

export const personalData = {
  // Identity & Headings
  fullName: "David Oladoyinbo",
  greeting: "Hello, I'm",
  professionalTitles: [
    "Senior Software Engineer",
    "Full-Stack Developer",
    "UI/UX Craftsperson",
    "Creative Web Architect",
    "Cloud & System Designer"
  ],
  tagline: "Crafting scalable architectures and pixel-perfect digital experiences that captivate users and accelerate business growth.",
  
  // Status & Availability
  availability: "Available for new projects & opportunities",
  isAvailable: true,
  location: "Lagos, Nigeria / Remote Worldwide",
  
  // Contact details
  email: "davidoladoyinbo4@gmail.com",
  phone: "+234 (0) 800 000 0000", // Placeholder - easily update with your direct phone number
  calendlyUrl: "https://calendly.com", // Optional booking link
  resumeUrl: "#resume", // Link to your CV/PDF or experience section
  
  // Profile & Hero Media
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  heroBackground: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1920&q=80",
  aboutImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",

  // Social Links
  socials: [
    { name: "GitHub", url: "https://github.com/davidoladoyinbo", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/davidoladoyinbo", icon: "Linkedin" },
    { name: "Twitter", url: "https://twitter.com/davidoladoyinbo", icon: "Twitter" },
    { name: "Instagram", url: "https://instagram.com", icon: "Instagram" },
    { name: "Email", url: "mailto:davidoladoyinbo4@gmail.com", icon: "Mail" }
  ],

  // Key metrics & numbers
  stats: [
    { label: "Years Experience", value: "5+", suffix: "Years" },
    { label: "Projects Delivered", value: "35+", suffix: "Completed" },
    { label: "Client Satisfaction", value: "99%", suffix: "Rating" },
    { label: "Code Commits", value: "2.4k+", suffix: "Contributions" },
  ]
};

export const aboutData = {
  sectionTitle: "About Me",
  sectionSubtitle: "Who I Am & What I Stand For",
  headline: "Passionate developer bridging the gap between engineering rigor and aesthetic perfection.",
  bioParagraphs: [
    "I am a forward-thinking Software Engineer with a deep obsession for clean code, responsive interfaces, and seamless user experiences. Over the past 5+ years, I have architected and deployed modern web applications, distributed APIs, and scalable cloud systems.",
    "My journey combines a strong foundation in computer science with a creative eye for typography, motion design, and ergonomic human-computer interfaces. I don't just write code to make things function; I engineer digital solutions that solve real problems and leave lasting impressions.",
    "When I'm not coding, I contribute to open-source software, explore generative design trends, mentor emerging developers, and continuously experiment with cutting-edge web technologies."
  ],
  keyAttributes: [
    { title: "Architectural Thinking", desc: "Designing modular, resilient software built to scale smoothly as user demand multiplies." },
    { title: "Pixel-Perfect Craftsmanship", desc: "Obsessing over typography, fluid micro-interactions, accessibility (WCAG), and responsive breakpoints." },
    { title: "Performance First", desc: "Optimizing Core Web Vitals, tree-shaking assets, and ensuring sub-second page loads." },
    { title: "Collaborative Leadership", desc: "Bridging communication between stakeholders, designers, and engineering teammates seamlessly." }
  ],
  personalDetails: [
    { label: "Birthday", value: "Available upon request" },
    { label: "Degree", value: "B.Sc. Computer Science / Software Engineering" },
    { label: "Website", value: "davidoladoyinbo.dev" },
    { label: "City", value: "Lagos, NG (Open to Relocation & Remote)" },
    { label: "Employment", value: "Full-Time / Contract" },
    { label: "Freelance", value: "Available" }
  ]
};

export const servicesData = [
  {
    id: "web-dev",
    title: "Full-Stack Web Development",
    icon: "Code2",
    description: "End-to-end development of modern, responsive, lightning-fast web applications using React, Next.js, Node.js, and modern cloud databases.",
    features: ["Single Page & SSR Apps", "Scalable REST & GraphQL APIs", "Microservices & Database Design", "Performance & SEO Optimization"]
  },
  {
    id: "ui-ux",
    title: "UI/UX & Design Systems",
    icon: "Layout",
    description: "Creating intuitive interfaces, interactive design prototypes, and coherent design systems that establish brand dominance and user loyalty.",
    features: ["Component Libraries", "User Journey & Wireframing", "Figma to React Translation", "Micro-interactions & Motion"]
  },
  {
    id: "mobile-responsive",
    title: "Mobile-First Responsive Engineering",
    icon: "Smartphone",
    description: "Ensuring applications look immaculate on smartphones, tablets, high-res laptops, and ultra-wide desktop monitors with zero visual compromise.",
    features: ["Adaptive Touch Interfaces", "Progressive Web Apps (PWA)", "Cross-Browser Compatibility", "Optimized Asset Delivery"]
  },
  {
    id: "api-backend",
    title: "API & Cloud Infrastructure",
    icon: "Server",
    description: "Robust backend services with secure authentication, caching, rate limiting, and automated deployment pipelines (CI/CD) on AWS or Vercel.",
    features: ["Serverless Architecture", "JWT & OAuth2 Security", "Automated CI/CD Pipelines", "Containerization (Docker)"]
  },
  {
    id: "performance-audit",
    title: "Performance & Code Audits",
    icon: "Zap",
    description: "Refactoring legacy codebases, resolving memory bottlenecks, improving Core Web Vitals scores, and implementing accessibility standards.",
    features: ["Core Web Vitals 95+", "Lighthouse Optimization", "Accessibility (a11y) Audits", "Security Vulnerability Scans"]
  },
  {
    id: "consulting",
    title: "Technical Advisory & Strategy",
    icon: "Compass",
    description: "Guiding product teams and startups on tech stack selection, project scoping, technical architecture, and agile engineering roadmaps.",
    features: ["Tech Stack Feasibility", "System Architecture Blueprints", "Sprint & Milestone Planning", "Code Review & Mentorship"]
  }
];

export const skillsData = {
  categories: [
    {
      name: "Frontend Architecture",
      skills: [
        { name: "React.js / Next.js", level: 95 },
        { name: "TypeScript / JavaScript (ESNext)", level: 92 },
        { name: "Tailwind CSS / CSS3 / Sass", level: 95 },
        { name: "HTML5 / Semantic Web / a11y", level: 98 },
        { name: "State Management (Redux, Zustand)", level: 88 },
        { name: "Motion & Animation (Framer, CSS)", level: 85 }
      ]
    },
    {
      name: "Backend & Systems",
      skills: [
        { name: "Node.js / Express.js", level: 90 },
        { name: "RESTful APIs & GraphQL", level: 92 },
        { name: "PostgreSQL / MongoDB / Prisma", level: 86 },
        { name: "Python / FastApi", level: 80 },
        { name: "Authentication (OAuth, JWT)", level: 90 },
        { name: "Redis Caching", level: 78 }
      ]
    },
    {
      name: "DevOps & Tooling",
      skills: [
        { name: "Git / GitHub / Workflows", level: 95 },
        { name: "Docker & Containerization", level: 82 },
        { name: "Vercel / Netlify / AWS Basics", level: 88 },
        { name: "Vite / Webpack / TurboPack", level: 90 },
        { name: "Linux / Shell Scripting", level: 82 },
        { name: "CI / CD Pipelines", level: 84 }
      ]
    }
  ],
  toolsPills: [
    "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Express",
    "PostgreSQL", "MongoDB", "Prisma", "Docker", "Git", "GitHub Actions",
    "Vercel", "Figma", "REST APIs", "GraphQL", "Jest", "Vite"
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "ApexPulse SaaS Analytics Platform",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description: "A real-time enterprise observability and web analytics dashboard tracking user behavior, performance metrics, and sales conversion funnels with sub-100ms response times.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Chart.js"],
    liveUrl: "https://example.com/project-one",
    githubUrl: "https://github.com/davidoladoyinbo",
    featured: true,
    highlights: ["Real-time websocket telemetry", "Customizable data widgets", "Enterprise RBAC security"]
  },
  {
    id: 2,
    title: "Nexus Commerce Experience",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: "High-conversion headless e-commerce store with dynamic inventory filtering, instant search, frictionless Stripe checkout, and automated customer order notifications.",
    technologies: ["Next.js", "Tailwind CSS", "Stripe API", "Prisma", "Zustand"],
    liveUrl: "https://example.com/project-two",
    githubUrl: "https://github.com/davidoladoyinbo",
    featured: true,
    highlights: ["Sub-second static site generation", "Integrated Stripe webhooks", "Fluid cart animation"]
  },
  {
    id: 3,
    title: "Synthetix AI Content Studio",
    category: "AI & Tools",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    description: "Next-generation generative AI workspace enabling creators to synthesize multimedia briefs, code snippets, and automated marketing copy with intuitive revision history.",
    technologies: ["React", "Tailwind CSS", "OpenAI API", "Python FastAPI", "Redis"],
    liveUrl: "https://example.com/project-three",
    githubUrl: "https://github.com/davidoladoyinbo",
    featured: true,
    highlights: ["Streaming token responses", "Multi-modal prompt chains", "Export to PDF & Markdown"]
  },
  {
    id: 4,
    title: "Aura Luxury Brand Identity & Web",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    description: "Award-winning portfolio website developed for an architectural and interior design firm featuring smooth inertia scrolling, interactive 3D galleries, and dark mode elegance.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "WebGL", "Vite"],
    liveUrl: "https://example.com/project-four",
    githubUrl: "https://github.com/davidoladoyinbo",
    featured: false,
    highlights: ["Award-winning minimal aesthetics", "Smooth horizontal scroll galleries", "Flawless mobile layout"]
  },
  {
    id: 5,
    title: "VaultFlow Crypto Portfolio Tracker",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80",
    description: "Decentralized asset tracking dashboard delivering live price feeds, historical yield analysis, transaction history auditing, and automated profit/loss calculation.",
    technologies: ["React", "TypeScript", "CoinGecko API", "Ethers.js", "Tailwind CSS"],
    liveUrl: "https://example.com/project-five",
    githubUrl: "https://github.com/davidoladoyinbo",
    featured: false,
    highlights: ["Live cryptocurrency price tickers", "Wallet connection integration", "Offline caching capability"]
  },
  {
    id: 6,
    title: "TaskMatrix Team Workflow Hub",
    category: "Productivity",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    description: "Collaborative project management board featuring drag-and-drop kanban columns, markdown task notes, activity timelines, and real-time team notifications.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com/project-six",
    githubUrl: "https://github.com/davidoladoyinbo",
    featured: false,
    highlights: ["Drag-and-drop Kanban interface", "Instant multi-user sync", "Keyboard shortcut workflows"]
  }
];

export const experienceData = [
  {
    period: "2023 - PRESENT",
    role: "Senior Full-Stack Engineer",
    company: "TechNova Solutions",
    location: "Remote",
    type: "Full-Time",
    description: "Leading frontend architecture and cloud integrations for enterprise clients. Mentoring engineers and establishing rigorous design system standards.",
    achievements: [
      "Engineered micro-frontend architecture resulting in 40% reduction in deployment build times.",
      "Spearheaded redesign of core product dashboard, improving user retention by 28%.",
      "Conducted thorough code reviews and instituted comprehensive automated testing."
    ]
  },
  {
    period: "2021 - 2023",
    role: "Full-Stack Software Developer",
    company: "Vanguard Digital Labs",
    location: "Lagos, Nigeria",
    type: "Full-Time",
    description: "Built scalable web applications, REST APIs, and third-party integrations for high-growth tech startups in fintech and logistics.",
    achievements: [
      "Developed high-throughput payment settlement engine handling thousands of daily transactions.",
      "Reduced average page load times from 3.2s to 0.9s via code-splitting and asset optimization.",
      "Integrated automated CI/CD pipelines deploying directly to AWS environments."
    ]
  },
  {
    period: "2019 - 2021",
    role: "Frontend Web Developer",
    company: "Creative Pulse Studio",
    location: "Lagos, Nigeria",
    type: "Contract",
    description: "Collaborated closely with UX designers to translate complex wireframes and prototypes into responsive, accessible web interfaces.",
    achievements: [
      "Delivered 20+ responsive web projects on time and within client budget specifications.",
      "Implemented WCAG 2.1 AA accessibility standards across all client web properties."
    ]
  }
];

export const educationData = [
  {
    period: "2016 - 2020",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Lagos",
    location: "Lagos, Nigeria",
    description: "Graduated with honors. Coursework: Data Structures & Algorithms, Software Engineering, Database Systems, Computer Networks, and Artificial Intelligence."
  },
  {
    period: "2022",
    degree: "AWS Certified Solutions Architect",
    institution: "Amazon Web Services (AWS)",
    location: "Online Credential",
    description: "Validated expertise in designing resilient, high-performing, secure, and cost-optimized cloud architectures."
  },
  {
    period: "2021",
    degree: "Advanced Full-Stack Engineering Specialization",
    institution: "Meta / Coursera Professional Certificate",
    location: "Credential ID: META-FS-9428",
    description: "Comprehensive mastery in React, advanced JavaScript, server architecture, automated testing, and CI/CD."
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "VP of Product",
    company: "Elevate Global",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "David's craftsmanship is nothing short of exceptional. He transformed our complex product workflow into an effortless, visually breathtaking web app. His attention to detail and reliability make him a dream collaborator."
  },
  {
    id: 2,
    name: "Marcus Vance",
    role: "Co-Founder & CTO",
    company: "OmniFintech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "From day one, David demonstrated both high-level system architectural maturity and unmatched CSS/frontend finesse. The performance gains he delivered directly boosted our customer conversion rates."
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Creative Director",
    company: "Studio Kinetix",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "Rarely do you find a developer who truly respects design nuances. David takes our Figma designs and elevates them with fluid animations and responsive perfection. Outstanding work!"
  }
];

export const navItems = [
  { id: "hero", label: "Home", icon: "Home" },
  { id: "about", label: "About", icon: "User" },
  { id: "services", label: "Services", icon: "Server" },
  { id: "skills", label: "Skills", icon: "Zap" },
  { id: "portfolio", label: "Portfolio", icon: "Briefcase" },
  { id: "experience", label: "Resume", icon: "FileText" },
  { id: "testimonials", label: "Reviews", icon: "Star" },
  { id: "contact", label: "Contact", icon: "Mail" }
];
