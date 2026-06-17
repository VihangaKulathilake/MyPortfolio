export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export * from './projects';

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'internship' | 'certification' | 'achievement';
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", level: 80 },
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Figma", level: 70 }
    ]
  }
];

export const timelineItems: TimelineItem[] = [
  {
    id: "edu-1",
    year: "2023 - Present",
    title: "B.Sc. (Hons) in Software Engineering",
    subtitle: "University of Kelaniya",
    description: "Specializing in software architecture, distributed systems, database management, and operating system design. Active participant in tech clubs and community projects.",
    type: "education"
  },
  {
    id: "edu-2",
    year: "2009 - 2022",
    title: "Primary & Secondary Education",
    subtitle: "Ananda College, Colombo 10",
    description: "Completed secondary education specializing in physical science (Mathematics stream) for G.C.E. Advanced Levels, participating in various technical and science associations.",
    type: "education"
  },
  {
    id: "exp-1",
    year: "2025 (6 Months)",
    title: "Software Engineer Intern",
    subtitle: "Fortude",
    description: "Contributed to building enterprise-grade applications, implementing scalable REST APIs, optimizing database schemas, and participating in agile software delivery workflows.",
    type: "internship"
  },
  {
    id: "ach-1",
    year: "2024",
    title: "JuniorHack 7.0 - 1st Runners Up",
    subtitle: "Software Engineering Students' Association (SESA), University of Kelaniya",
    description: "Placed 1st Runners Up in JuniorHack 7.0, designing and prototyping an innovative solution under strict time pressure, presenting it to a panel of industry experts.",
    type: "achievement"
  },
  {
    id: "ach-2",
    year: "2025",
    title: "IEEEXtreme 19.0 - Participant",
    subtitle: "IEEE",
    description: "Competed in IEEEXtreme 19.0, a global 24-hour virtual competitive programming challenge, solving complex algorithmic and mathematical problems.",
    type: "achievement"
  },
  {
    id: "ach-3",
    year: "2025",
    title: "Creator of vjkOS & Technical Writer",
    subtitle: "Hobbyist OS Development",
    description: "Designed and built vjkOS, a custom x86 32-bit operating system kernel from scratch. Authored technical guides sharing insights on kernel design, memory descriptors, and low-level development.",
    type: "achievement"
  }
];

export const contactInfo: ContactInfo = {
  email: "vihangajanith12m@gmail.com",
  phone: "+94718519445",
  location: "Ganemulla, Sri Lanka",
  github: "https://github.com/VihangaKulathilake",
  linkedin: "https://linkedin.com/in/vihanga-kulathilake"
};
