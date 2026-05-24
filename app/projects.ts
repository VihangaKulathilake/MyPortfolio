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
    description: "A comprehensive boarding and hostel management system simplifying room allocation, rent tracking, and complaint management.",
    detailedDescription: "StayMate is a full-featured boarding management system built to ease the burden of hostel operations. It allows landlords and administrators to manage rooms, check occupant statuses, track monthly rental payments, and resolve complaints. Occupants get their own portal to pay rent, view payment history, and report issues. Designed for high performance and clean operations.",
    image: "/projects/staymate.png",
    tags: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
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
    detailedDescription: "DevGuardian integrates with popular version control platforms to run static code analysis (SAST) and utilizes large language models to inspect security hazards. It automatically detects API keys, database credentials, security misconfigurations, and common injection vulnerabilities, providing clear remediation advice directly inside code review interfaces.",
    image: "/projects/devguardian.png",
    tags: ["Next.js", "TypeScript", "Python", "PostgreSQL", "Tailwind CSS"],
    owner: "VihangaKulathilake",
    repoName: "DevGuardian",
    githubUrl: "https://github.com/VihangaKulathilake/DevGuardian",
    liveUrl: "https://devguardian-demo.vercel.app",
    featured: true
  },
  
  // Group Projects (Academic)
  {
    id: "tedxuok",
    title: "TEDxUOK",
    description: "Official community website for TEDx at University of Kelaniya, showcasing events, speaker registrations, and talk schedules.",
    detailedDescription: "Official community website for TEDx at University of Kelaniya, showcasing events, speaker registrations, and talk schedules.",
    image: "",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    owner: "VihangaKulathilake",
    repoName: "TEDx-UOK",
    githubUrl: "https://github.com/VihangaKulathilake/TEDx-UOK",
    liveUrl: "",
    featured: false
  },
  {
    id: "smartdietdl",
    title: "SmartDietDL",
    description: "A deep learning-based diet planning and meal recommendation system utilizing image classification for calorie estimation.",
    detailedDescription: "A deep learning-based diet planning and meal recommendation system utilizing image classification for calorie estimation.",
    image: "",
    tags: ["Python", "TensorFlow", "FastAPI", "React"],
    owner: "YasiruUpananda",
    repoName: "Smart-Diet-SL",
    githubUrl: "https://github.com/YasiruUpananda/Smart-Diet-SL",
    liveUrl: "",
    featured: false
  },
  {
    id: "bookfair-reservation",
    title: "BookFair Reservation System",
    description: "A digital stall reservation and booking platform for book fair vendors and event planners with live map layouts.",
    detailedDescription: "A digital stall reservation and booking platform for book fair vendors and event planners with live map layouts.",
    image: "",
    tags: ["Java", "Servlet", "MySQL", "Bootstrap"],
    owner: "VihangaKulathilake",
    repoName: "bookfair-reservation-system",
    githubUrl: "https://github.com/VihangaKulathilake/bookfair-reservation-system",
    liveUrl: "",
    featured: false
  },
  {
    id: "sports-equipments-stock",
    title: "Sports Equipments Stock Management System",
    description: "An inventory tracking dashboard for school sports departments monitoring equipment loans, damages, and stock level warnings.",
    detailedDescription: "An inventory tracking dashboard for school sports departments monitoring equipment loans, damages, and stock level warnings.",
    image: "",
    tags: ["C#", ".NET", "SQL Server", "Windows Forms"],
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
    tags: ["C", "Assembly", "GRUB", "QEMU", "Makefile"],
    owner: "VihangaKulathilake",
    repoName: "vjkOS",
    githubUrl: "https://github.com/VihangaKulathilake/vjkOS",
    liveUrl: "",
    featured: false
  }
];
