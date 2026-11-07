/**
 * =======================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =======================================================================
 * Honest, authentic portfolio data for David Oladoyinbo
 * Computer Science Student at Crawford University
 */

export const personalData = {
  // Identity & Headings
  fullName: "David Oladoyinbo",
  greeting: "Hello, I'm",
  professionalTitles: [
    "Computer Science Student",
    "Cybersecurity Enthusiast",
    "Aspiring Software Engineer",
    "Frontend Web Developer"
  ],
  tagline: "Computer Science undergraduate at Crawford University passionate about cybersecurity, software development, and modern web interfaces. Looking to gain practical experience, refine my skills, and build impactful technology.",
  
  // Status & Availability
  availability: "Seeking Internships & Practical Learning Opportunities",
  isAvailable: true,
  location: "Lagos / Ogun State, Nigeria",
  
  // Contact details
  email: "davidoladoyinbo4@gmail.com",
  phone: "+234 (0) 800 000 0000",
  resumeUrl: "#experience",
  
  // Profile Media
  avatar: "/myphoto.jpeg",
  heroBackground: "/myphoto.jpeg",
  aboutImage: "/myphoto.jpeg",

  // Social Links
  socials: [
    { name: "GitHub", url: "https://github.com/davidoladoyinbo", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/davidoladoyinbo", icon: "Linkedin" },
    { name: "Twitter", url: "https://twitter.com/davidoladoyinbo", icon: "Twitter" },
    { name: "Instagram", url: "https://instagram.com", icon: "Instagram" },
    { name: "Email", url: "mailto:davidoladoyinbo4@gmail.com", icon: "Mail" }
  ],

  // Grounded key facts
  stats: [
    { label: "University", value: "Crawford", suffix: "B.Sc. CS Student" },
    { label: "Graduation", value: "2028", suffix: "Oct 2024 - Sep 2028" },
    { label: "Experience", value: "LASU CBT", suffix: "Cybersecurity Intern" },
    { label: "Interests", value: "Security & Web", suffix: "Skill Development" },
  ]
};

export const aboutData = {
  sectionTitle: "About Me",
  sectionSubtitle: "My Journey & Ambitions",
  headline: "Computer Science undergraduate eager to learn, build, and master practical technology.",
  bioParagraphs: [
    "I am an undergraduate student pursuing a Bachelor of Science (B.Sc.) in Computer Science at Crawford University (October 2024 – September 2028). Rather than claiming decades of corporate experience, I believe in being upfront: I am actively developing my technical toolkit, passionate about solving problems, and committed to becoming a capable software engineer and cybersecurity practitioner.",
    "My hands-on journey includes a cybersecurity internship at Lagos State University (LASU), specifically at the LASU-18 CBT Center from July 2026 to October 2026. Working in a live computer-based testing environment taught me the importance of system reliability, network integrity during examinations, workstation security, and fast troubleshooting under pressure.",
    "I spend my time building web projects, learning modern frontend frameworks like React and Tailwind CSS, exploring network security fundamentals, and writing clean, maintainable code. I am actively seeking internship opportunities, collaborative projects, and mentorship where I can contribute and expand my capabilities."
  ],
  keyAttributes: [
    { title: "Continuous Learner", desc: "Always exploring new concepts, reading documentation, and building small projects to turn theory into practical skill." },
    { title: "Hands-On Experience", desc: "Direct exposure to network and system maintenance in high-stakes testing environments at the LASU-18 CBT Center." },
    { title: "Attention to Detail", desc: "Taking pride in clean code structure, responsive layouts, and secure system practices." },
    { title: "Adaptable Team Player", desc: "Receptive to feedback, eager to collaborate with peers and mentors, and focused on collective goals." }
  ],
  personalDetails: [
    { label: "University", value: "Crawford University" },
    { label: "Degree", value: "B.Sc. Computer Science" },
    { label: "Timeline", value: "October 2024 – September 2028" },
    { label: "Internship", value: "LASU-18 CBT Center (Jul - Oct 2026)" },
    { label: "Location", value: "Lagos / Ogun State, Nigeria" },
    { label: "Current Focus", value: "Cybersecurity & Web Development" }
  ]
};

export const servicesData = [
  {
    id: "web-dev",
    title: "Web Development",
    icon: "Code2",
    description: "Building responsive, modern user interfaces and web applications using HTML5, CSS3, modern JavaScript, React, and Tailwind CSS.",
    features: ["Responsive layouts for all screen sizes", "Component-based UI development", "Clean semantic HTML & modern CSS", "Interactive user experiences"]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & System Support",
    icon: "Server",
    description: "Hands-on experience supporting computer systems, ensuring endpoint security, network connectivity, and troubleshooting workstation issues.",
    features: ["CBT center & exam lab maintenance", "System health and malware checks", "Workstation network troubleshooting", "Security hygiene & access practices"]
  },
  {
    id: "interface-design",
    title: "Interface Implementation",
    icon: "Layout",
    description: "Translating design ideas, wireframes, and prototypes into clean, pixel-perfect frontend code that works effortlessly on mobile and desktop.",
    features: ["Figma to code translation", "Dark and light mode layouts", "Accessibility-conscious markup", "Fluid navigation & micro-interactions"]
  },
  {
    id: "git-collaboration",
    title: "Version Control & Team Collaboration",
    icon: "Zap",
    description: "Familiar with Git and GitHub workflows for tracking changes, branch management, code collaboration, and open-source learning.",
    features: ["Git version control", "GitHub repositories & workflows", "Organized project documentation", "Open-source exploration"]
  }
];

export const skillsData = {
  categories: [
    {
      name: "Programming & Web",
      skills: [
        { name: "HTML5 / Semantic Markup", level: 90 },
        { name: "CSS3 / Tailwind CSS", level: 85 },
        { name: "JavaScript (ES6+)", level: 75 },
        { name: "React.js", level: 70 },
        { name: "Python (Fundamentals)", level: 65 }
      ]
    },
    {
      name: "Cybersecurity & IT Operations",
      skills: [
        { name: "CBT Center System Operations", level: 85 },
        { name: "Workstation & Network Troubleshooting", level: 80 },
        { name: "Endpoint Security & Malware Hygiene", level: 75 },
        { name: "Operating Systems (Windows & Linux basics)", level: 75 },
        { name: "Computer Networking Foundations", level: 70 }
      ]
    },
    {
      name: "Tools & Workflow",
      skills: [
        { name: "Git & GitHub", level: 80 },
        { name: "VS Code & Developer Tools", level: 85 },
        { name: "Command Line / Bash basics", level: 70 },
        { name: "Figma (UI Inspection)", level: 70 }
      ]
    }
  ],
  toolsPills: [
    "JavaScript", "React", "Tailwind CSS", "Python", "HTML5", "CSS3",
    "Git", "GitHub", "VS Code", "Windows", "Linux", "Networking Basics",
    "System Diagnostics", "CBT Operations", "Vite"
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio & Brand Website",
    category: "Web Development",
    image: "/myphoto.jpeg",
    description: "A fast, fully responsive personal portfolio website engineered with React, Tailwind CSS, and Vite, featuring a modern vertical sidebar, theme toggle, and dynamic sections.",
    technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
    liveUrl: "https://github.com/davidoladoyinbo/portfolio",
    githubUrl: "https://github.com/davidoladoyinbo/portfolio",
    featured: true,
    highlights: ["Mobile-first responsive layout", "Theme toggle (Dark/Light)", "Centralized data architecture"]
  },
  {
    id: 2,
    title: "LASU-18 CBT Center Security Support",
    category: "Cybersecurity",
    image: "/myphoto.jpeg",
    description: "Hands-on internship deployment at Lagos State University CBT center, ensuring zero examination interruptions, hardware diagnostics, and workstation integrity across hundreds of test computers.",
    technologies: ["Network Monitoring", "System Diagnostics", "Endpoint Hygiene", "Windows"],
    liveUrl: "https://github.com/davidoladoyinbo",
    githubUrl: "https://github.com/davidoladoyinbo",
    featured: true,
    highlights: ["Secured 500+ examination workstations", "Real-time network troubleshooting", "Zero security breach incidents"]
  },
  {
    id: 3,
    title: "Interactive Web Applications & Labs",
    category: "Web Development",
    image: "/myphoto.jpeg",
    description: "A collection of academic and practical frontend experiments exploring state management, component architecture, and responsive design patterns.",
    technologies: ["JavaScript", "HTML5", "CSS3", "React"],
    liveUrl: "https://github.com/davidoladoyinbo",
    githubUrl: "https://github.com/davidoladoyinbo",
    featured: false,
    highlights: ["Clean component separation", "Modern CSS styling", "Accessible form inputs"]
  }
];

export const experienceData = [
  {
    period: "July 2026 - October 2026",
    role: "Cybersecurity Intern",
    company: "Lagos State University (LASU) — LASU-18 CBT Center",
    location: "Lagos, Nigeria",
    type: "Internship",
    description: "Supported the technical infrastructure and security posture of the LASU-18 Computer-Based Testing center during major university and external examinations.",
    achievements: [
      "Monitored network systems and terminal integrity across 500+ testing computers to ensure fair and secure exam delivery.",
      "Conducted pre-examination diagnostics, malware sweeps, and hardware integrity checks.",
      "Handled rapid on-site troubleshooting for system glitches and network dropouts under tight time constraints.",
      "Maintained strict operational guidelines to protect sensitive candidate examination records."
    ]
  },
  {
    period: "October 2024 - Present",
    role: "Computer Science Undergraduate",
    company: "Crawford University",
    location: "Ogun State, Nigeria",
    type: "Academic",
    description: "Active student advancing theoretical computer science knowledge while building practical software projects.",
    achievements: [
      "Studying algorithms, data structures, computer networking, and system design fundamentals.",
      "Building practical frontend projects in React to apply software development concepts.",
      "Exploring cybersecurity principles and defensive computing methodologies."
    ]
  }
];

export const educationData = [
  {
    period: "October 2024 - September 2028 (Expected)",
    degree: "Bachelor of Science (B.Sc.) in Computer Science",
    institution: "Crawford University",
    location: "Faith City, Igbesa, Ogun State, Nigeria",
    description: "Undergraduate degree program focusing on software engineering principles, algorithms, computational theory, operating systems, and computer security."
  }
];

export const navItems = [
  { id: "hero", label: "Home", icon: "Home" },
  { id: "about", label: "About", icon: "User" },
  { id: "services", label: "Services", icon: "Server" },
  { id: "skills", label: "Skills", icon: "Zap" },
  { id: "portfolio", label: "Projects", icon: "Briefcase" },
  { id: "experience", label: "Experience & Education", icon: "FileText" },
  { id: "contact", label: "Contact", icon: "Mail" }
];
