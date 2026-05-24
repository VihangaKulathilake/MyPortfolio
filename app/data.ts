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
    year: "2023 - 2026",
    title: "B.Sc. (Hons) in Software Engineering",
    subtitle: "University of Kelaniya",
    description: "Specialized in software architecture, distributed systems, database management, and operating system design. Graduated with First Class Honors.",
    type: "education"
  },
  {
    id: "exp-1",
    year: "2025 (6 Months)",
    title: "Full Stack Developer Intern",
    subtitle: "Apex Software Solutions",
    description: "Contributed to building enterprise Spring Boot microservices and React web applications. Optimized database query speeds by 30% and introduced CI/CD pipelines.",
    type: "internship"
  },
  {
    id: "cert-1",
    year: "2025",
    title: "AWS Certified Developer – Associate",
    subtitle: "Amazon Web Services",
    description: "Validated expertise in developing and maintaining AWS-based applications, core services (S3, EC2, Lambda, DynamoDB), and cloud security best practices.",
    type: "certification"
  },
  {
    id: "ach-1",
    year: "2024",
    title: "National Hackathon - Winner",
    subtitle: "CodeSpark Hackathon",
    description: "Led a team of four to build 'EcoRoute', an eco-friendly logistics optimization dashboard, winning the Grand Prize among 150+ teams.",
    type: "achievement"
  },
  {
    id: "ach-2",
    year: "2025",
    title: "Technical Author on Medium",
    subtitle: "Medium Publications",
    description: "Authored technical articles detailing custom x86 operating system development (vjkOS) and explaining machine learning and deep learning fundamentals.",
    type: "achievement"
  }
];

export const contactInfo: ContactInfo = {
  email: "vihangajanith12m@gmail.com",
  phone: "+94718519445",
  location: "Colombo, Sri Lanka",
  github: "https://github.com/VihangaKulathilake",
  linkedin: "https://linkedin.com/in/vihanga-kulathilake"
};
