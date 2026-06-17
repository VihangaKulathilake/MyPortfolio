export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  tags: string[];
  owner: string; // GitHub repository owner/organization
  repoName: string; // The exact repository name on GitHub
  githubUrl: string; // Fallback URL
  liveUrl: string;
  featured: boolean; // Individual Projects = true, Group Projects = false
}

export const projects: Project[] = [
  // Individual Projects (Featured)
  {
    id: "staymate",
    title: "StayMate",
    description: "A comprehensive boarding and property management platform featuring geospatial discovery and a custom ML recommendation engine.",
    detailedDescription: "StayMate is a comprehensive, full-stack platform designed to revolutionize the boarding and rental marketplace. It bridges the gap between tenants looking for the perfect living space and landlords managing their properties, all overseen by a robust platform administration system. Features advanced Geospatial Search (location proximity) combined with a custom Machine Learning recommendation engine service.",
    image: "",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Shadcn/UI", "AWS S3", "FastAPI", "Scikit-Learn"],
    owner: "VihangaKulathilake",
    repoName: "StayMate",
    githubUrl: "https://github.com/VihangaKulathilake/StayMate",
    liveUrl: "https://staymate-demo.vercel.app",
    featured: true
  },
  {
    id: "devguardian",
    title: "DevGuardian",
    description: "An AI-powered developer security platform analyzing repository source code for secret leaks and security vulnerabilities.",
    detailedDescription: "DevGuardian integrates with version control platforms to run static code analysis (SAST) and scans repository source code for security hazards. Composed of a Spring Boot Java backend and a Next.js TypeScript frontend, it automatically detects API keys, database credentials, and security misconfigurations to provide clear remediation advice.",
    image: "",
    tags: ["Next.js", "TypeScript", "Java", "Spring Boot", "Tailwind CSS", "Shadcn/UI"],
    owner: "VihangaKulathilake",
    repoName: "DevGuardian",
    githubUrl: "https://github.com/VihangaKulathilake/DevGuardian",
    liveUrl: "https://devguardian-demo.vercel.app",
    featured: true
  },
  {
    id: "boarding-recommendation",
    title: "StayMate ML Recommendation Engine",
    description: "A Python-based machine learning model using collaborative and content-based filtering algorithms to match tenants with boarding houses.",
    detailedDescription: "This machine learning project implements a boarding house recommendation engine to accompany the StayMate platform. Built with Python and Jupyter Notebooks, it utilizes Pandas and Scikit-Learn to process tenant preferences and boarding data, implementing content-based and collaborative filtering to deliver personalized location suggestions.",
    image: "",
    tags: ["Python", "Pandas", "Scikit-Learn", "Machine Learning", "FastAPI"],
    owner: "VihangaKulathilake",
    repoName: "ml-boarding-recommendation-system",
    githubUrl: "https://github.com/VihangaKulathilake/ml-boarding-recommendation-system",
    liveUrl: "",
    featured: true
  },
  
  // Group Projects (Academic)
  {
    id: "smartdietdl",
    title: "Smart Diet SL",
    description: "A comprehensive MERN stack application for managing nutrition and diet plans designed for Sri Lankan diets, with an OpenAI chatbot.",
    detailedDescription: "Smart Diet SL is a MERN stack application designed to recommend personalized meal schedules and diet plans tailored to Sri Lankan cuisine. Features user registration with JWT authentication, product management, custom nutrition calculator, Cloudinary media upload, and an AI LankaNutri Advisor chatbot powered by OpenAI APIs.",
    image: "",
    tags: ["React 19", "Redux Toolkit", "Node.js", "Express", "MongoDB", "OpenAI", "Cloudinary"],
    owner: "VihangaKulathilake",
    repoName: "Smart-Diet-SL",
    githubUrl: "https://github.com/VihangaKulathilake/Smart-Diet-SL",
    liveUrl: "",
    featured: false
  },
  {
    id: "tedxuok",
    title: "TEDxUOK",
    description: "Official community website for TEDx at University of Kelaniya, showcasing events, speaker registrations, and talk schedules.",
    detailedDescription: "Official community website for TEDx at University of Kelaniya, showcasing events, speaker registrations, and talk schedules.",
    image: "",
    tags: ["TypeScript", "React", "HTML5", "CSS3", "Tailwind CSS"],
    owner: "VihangaKulathilake",
    repoName: "TEDx-UOK",
    githubUrl: "https://github.com/VihangaKulathilake/TEDx-UOK",
    liveUrl: "",
    featured: false
  },
  {
    id: "event-management",
    title: "Event Management System",
    description: "A PHP-based web application facilitating online event booking, attendee registration, and schedule management.",
    detailedDescription: "A PHP-based web application facilitating online event booking, attendee registration, and schedule management.",
    image: "",
    tags: ["PHP", "MySQL", "CSS", "JavaScript", "HTML"],
    owner: "VihangaKulathilake",
    repoName: "Event-management-system",
    githubUrl: "https://github.com/VihangaKulathilake/Event-management-system",
    liveUrl: "",
    featured: false
  },
  {
    id: "bookfair-reservation",
    title: "BookFair Reservation System",
    description: "A digital stall reservation and booking platform for book fair vendors and event planners with live map layouts.",
    detailedDescription: "A digital stall reservation and booking platform for book fair vendors and event planners with live map layouts.",
    image: "",
    tags: ["Java", "Servlets", "JSP", "MySQL", "JavaScript", "CSS"],
    owner: "VihangaKulathilake",
    repoName: "bookfair-reservation-system",
    githubUrl: "https://github.com/VihangaKulathilake/bookfair-reservation-system",
    liveUrl: "",
    featured: false
  },
  {
    id: "sports-equipments-stock",
    title: "Sports Equipments Stock Management System",
    description: "A PHP-based inventory tracking dashboard for school sports departments monitoring equipment loans, damages, and stock levels.",
    detailedDescription: "An inventory tracking web dashboard for school sports departments monitoring equipment loans, damages, and stock level warnings.",
    image: "",
    tags: ["PHP", "MySQL", "CSS", "JavaScript", "HTML"],
    owner: "VihangaKulathilake",
    repoName: "sports_eqiupments_stock",
    githubUrl: "https://github.com/VihangaKulathilake/sports_eqiupments_stock",
    liveUrl: "",
    featured: false
  },
  {
    id: "vjkos",
    title: "vjkOS",
    description: "A custom x86 32-bit operating system kernel written in C and Assembly, booting via GRUB and visualized in QEMU.",
    detailedDescription: "vjkOS is a custom hobbyist x86 32-bit operating system kernel developed to study low-level system design. It features customized GDT/IDT descriptors, interrupt request routing (IRQs), terminal VGA drivers, compilation routines, and a custom Makefile setup to launch emulator instances in QEMU.",
    image: "",
    tags: ["Assembly", "Shell", "C", "GRUB", "QEMU"],
    owner: "VihangaKulathilake",
    repoName: "vjkOS",
    githubUrl: "https://github.com/VihangaKulathilake/vjkOS",
    liveUrl: "",
    featured: false
  }
];
