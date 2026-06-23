/* ==============================
   Xinity Site Data
   Centralized content for the entire site.
   ============================== */

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  builder: string;
  link: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  status: "upcoming" | "past";
  link: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

/* ---------- Navigation ---------- */

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;

/* ---------- Hero cycling headlines ---------- */

export const HERO_HEADLINES = [
  "Build products that matter.",
  "Ship code, not just ideas.",
  "Hack together. Grow together.",
  "From prototype to product.",
  "Where builders become founders.",
];

/* ---------- Manifesto ---------- */

export const MANIFESTO = {
  headline: "We don't just hack — we build.",
  body: `Xinity exists because hackathons should be more than weekend experiments that die on Monday. We're a community of builders who believe every great product starts with a bold idea and a team stubborn enough to ship it. We build in public, ship with urgency, and hold each other accountable. No fluff, no pitch decks — just code, craft, and community.`,
  cta: { label: "Read our story", href: "/about" },
};

/* ---------- Community Stats ---------- */

export const COMMUNITY_STATS: StatItem[] = [
  { label: "Community Members", value: 2500, suffix: "+" },
  { label: "Projects Shipped", value: 180, suffix: "+" },
  { label: "Hackathons Hosted", value: 24, suffix: "" },
  { label: "Cities Reached", value: 15, suffix: "+" },
];

/* ---------- Featured Projects ---------- */

export const PROJECTS: ProjectItem[] = [
  // {
  //   id: "devflow",
  //   title: "DevFlow",
  //   description:
  //     "An AI-powered developer workflow tool that automates code reviews, generates documentation, and tracks technical debt across repos.",
  //   stack: ["Next.js", "Python", "OpenAI", "PostgreSQL"],
  //   image: "/projects/devflow.svg",
  //   builder: "Arjun Mehta",
  //   link: "#",
  // },
  // {
  //   id: "mediscan",
  //   title: "MediScan",
  //   description:
  //     "A mobile-first health screening app that uses computer vision to detect skin conditions from phone camera images with 94% accuracy.",
  //   stack: ["React Native", "TensorFlow", "Flask", "AWS"],
  //   image: "/projects/mediscan.svg",
  //   builder: "Priya Sharma",
  //   link: "#",
  // },
  // {
  //   id: "greentrack",
  //   title: "GreenTrack",
  //   description:
  //     "A carbon footprint tracker for small businesses. Integrates with accounting tools to automatically calculate and offset emissions.",
  //   stack: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
  //   image: "/projects/greentrack.svg",
  //   builder: "Rohan Kapoor",
  //   link: "#",
  // },
  // {
  //   id: "learnloop",
  //   title: "LearnLoop",
  //   description:
  //     "A peer-to-peer learning platform where students teach micro-courses to each other. Built with gamification and spaced repetition.",
  //   stack: ["Next.js", "Supabase", "Tailwind", "Vercel"],
  //   image: "/projects/learnloop.svg",
  //   builder: "Sneha Reddy",
  //   link: "#",
  // },
  // {
  //   id: "farmwise",
  //   title: "FarmWise",
  //   description:
  //     "An IoT dashboard for precision agriculture. Monitors soil moisture, weather patterns, and crop health to optimize yields for small farmers.",
  //   stack: ["React", "Arduino", "Firebase", "Python"],
  //   image: "/projects/farmwise.svg",
  //   builder: "Vikram Desai",
  //   link: "#",
  // },
  // {
  //   id: "budgetbuddy",
  //   title: "BudgetBuddy",
  //   description:
  //     "A personal finance app designed for college students. Tracks spending, splits bills, and provides AI-driven savings suggestions.",
  //   stack: ["Flutter", "Dart", "Firebase", "GPT-4"],
  //   image: "/projects/budgetbuddy.svg",
  //   builder: "Ananya Iyer",
  //   link: "#",
  // },
];

/* ---------- Events ---------- */

export const EVENTS: EventItem[] = [
  {
    id: "Biothon",
    title: "Biothon",
    date: "22nd July 2026",
    location: "Rajkot, India",
    description:
      "Our flagship annual hackathon. 48 hours, 300+ builders, real products shipped live. Mentors from top startups and VCs.",
    image: "/assets/ue1.png",
    status: "upcoming",
    link: "https://biothon.xinity.in/",
  },
  // {
  //   id: "build-night-mumbai",
  //   title: "Build Night: Mumbai",
  //   date: "July 5, 2025",
  //   location: "Mumbai, India",
  //   description:
  //     "An intimate evening build session. Bring a half-finished project, get feedback from peers, and ship something by midnight.",
  //   image: "/events/buildnight.svg",
  //   status: "upcoming",
  //   link: "#",
  // },
  // {
  //   id: "web3-weekend",
  //   title: "Web3 Weekend Hack",
  //   date: "September 20–21, 2025",
  //   location: "Virtual (Discord)",
  //   description:
  //     "A weekend-long virtual hackathon focused on decentralized applications. Build on Ethereum, Solana, or any chain you choose.",
  //   image: "/events/web3.svg",
  //   status: "upcoming",
  //   link: "#",
  // },
  {
    id: "WebX",
    title: "WebX",
    date: "April 2026",
    location: "Ahmedabad, Gujarat",
    description:
      "The event that started it all. 120 builders came together to ship 32 projects in 48 hours. A weekend that defined our DNA.",
    image: "/assets/logo.png",
    status: "past",
    link: "#",
  },
];

/* ---------- Team ---------- */

export const TEAM: TeamMember[] = [
  {
    id: "shivam-tc",
    name: "Shivam Pandey",
    role: "Tech Lead",
    bio: "Full-stack builder obsessed with shipping. Started Xinity because he was tired of hackathon projects dying after the weekend. Believes in building in public and learning by doing.",
    image: "/team/aditya.svg",
    socials: { github: "#", linkedin: "#" },
  },
  {
    id: "Samim-ops",
    name: "Samim Mandal",
    role: "Creative Head",
    bio: "The glue that holds Xinity together. Runs events, manages partnerships, and makes sure every builder feels at home. Former community lead at a YC startup.",
    image: "/team/meera.svg",
    socials: { github: "#", linkedin: "#" },
  },
  // {
  //   id: "rahul-tech",
  //   name: "Rahul Verma",
  //   role: "Tech Lead",
  //   bio: "Open source contributor and systems thinker. Leads the technical direction of Xinity's internal tools and mentors new builders on architecture decisions.",
  //   image: "/team/rahul.svg",
  //   socials: { github: "#", linkedin: "#", twitter: "#" },
  // },
  // {
  //   id: "isha-design",
  //   name: "Isha Banerjee",
  //   role: "Design & Brand",
  //   bio: "Turns chaos into clean interfaces. Handles Xinity's visual identity, event branding, and makes sure everything we ship looks as good as it works.",
  //   image: "/team/isha.svg",
  //   socials: { linkedin: "#", twitter: "#" },
  // },
  // {
  //   id: "karthik-events",
  //   name: "Karthik Rajan",
  //   role: "Events & Partnerships",
  //   bio: "Connects Xinity with the broader ecosystem. Handles sponsor relationships, venue logistics, and makes sure every event runs without a hitch.",
  //   image: "/team/karthik.svg",
  //   socials: { github: "#", linkedin: "#" },
  // },
  // {
  //   id: "sanya-content",
  //   name: "Sanya Gupta",
  //   role: "Content & Outreach",
  //   bio: "Tells the Xinity story across platforms. Writes blog posts, manages social media, and documents the community's journey from the inside.",
  //   image: "/team/sanya.svg",
  //   socials: { linkedin: "#", twitter: "#" },
  // },
];

/* ---------- Footer links ---------- */

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Events", href: "/events" },
  ],
  community: [
    { label: "Join Xinity", href: "#join" },
    { label: "Code of Conduct", href: "#" },
    { label: "Contributing Guide", href: "#" },
    { label: "FAQs", href: "#" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Newsletter", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Careers", href: "#" },
  ],
};
