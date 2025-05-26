import { NavLink, Project, Experience, Education, Skill, Social } from "../types";
import { Github, Linkedin, Instagram } from "lucide-react";

export const navLinks: NavLink[] = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "contact", title: "Contact" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "KodeBase",
    description: "A modern code sharing and collaboration platform for developers.",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Next.js", "TailwindCSS", "Typescript"],
    liveUrl: "https://kodebase.vercel.app/",
    githubUrl: "https://github.com/DHEERAJSONKAR/kodebase-project",
  },
  {
    id: 2,
    title: "Gym Management System",
    description: "A comprehensive solution for gym owners to manage members, trainers, and equipment.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://dheeraj-gym.vercel.app/",
    githubUrl: "https://github.com/DHEERAJSONKAR/gym-management-system",
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    description: "A classic game of Tic Tac Toe with modern UI and animations.",
    image: "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://tic-tac-sooty.vercel.app/",
    githubUrl: "https://github.com/DHEERAJSONKAR/DHEERAJSONKAR",
  },
  {
    id: 4,
    title: "Shipra AI",
    description: "An AI-powered assistant for productivity and content creation.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "OpenAI", "TailwindCSS"],
    liveUrl: "https://shipra-ai.vercel.app/",
    githubUrl: "https://github.com/DHEERAJSONKAR/shipra-ai",
  },
  {
    id: 5,
    title: "SalesForce UI",
    description: "A modern UI redesign for SalesForce CRM platform.",
    image: "https://images.pexels.com/photos/7963572/pexels-photo-7963572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "TailwindCSS", "Figma"],
    liveUrl: "https://salesfource.vercel.app/",
    githubUrl: "https://github.com/DHEERAJSONKAR/Web_Development/tree/main/salesfourceui",
  },
  {
    id: 6,
    title: "Card Hover Effects",
    description: "A collection of beautiful hover effects for cards and UI elements.",
    image: "https://images.pexels.com/photos/6804615/pexels-photo-6804615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://cardhover-flax.vercel.app/",
    githubUrl: "https://github.com/DHEERAJSONKAR/Web_Development/tree/main/cards",
  },
];

export const skills: Skill[] = [
  { name: "HTML", icon: "🌐", level: 90, hoverColor: "#E34F26" },
  { name: "CSS", icon: "🎨", level: 85, hoverColor: "#1572B6" },
  { name: "JavaScript", icon: "⚡", level: 90, hoverColor: "#F7DF1E" },
  { name: "TypeScript", icon: "📘", level: 80, hoverColor: "#3178C6" },
  { name: "React", icon: "⚛️", level: 90, hoverColor: "#61DAFB" },
  { name: "Next.js", icon: "🔼", level: 85, hoverColor: "#000000" },
  { name: "Node.js", icon: "🟢", level: 80, hoverColor: "#339933" },
  { name: "MongoDB", icon: "🍃", level: 75, hoverColor: "#47A248" },
  { name: "Express", icon: "🚂", level: 80, hoverColor: "#000000" },
  { name: "TailwindCSS", icon: "💨", level: 90, hoverColor: "#06B6D4" },
  { name: "Git", icon: "🔄", level: 85, hoverColor: "#F05032" },
  { name: "UI/UX Design", icon: "🎭", level: 80, hoverColor: "#FF61F6" },
  { name: "Java", icon: "☕", level: 82, hoverColor: "#007396" },
  { name: "GitHub", icon: "🐙", level: 88, hoverColor: "#181717" },
  { name: "Python", icon: "🐍", level: 78, hoverColor: "#3776AB" },
];

export const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "TechCorp",
    date: "2022 - Present",
    description: "Developed and maintained modern web applications using React, Next.js, and TailwindCSS. Implemented responsive designs and interactive UI components.",
  },
  {
    title: "UI/UX Designer",
    company: "DesignStudio",
    date: "2021 - 2022",
    description: "Created user-centered designs for web and mobile applications. Collaborated with developers to implement designs with high fidelity.",
  },
  {
    title: "Web Developer Intern",
    company: "StartupHub",
    date: "2020 - 2021",
    description: "Assisted in developing web applications using HTML, CSS, and JavaScript. Learned modern frontend frameworks and best practices.",
  },
];

export const education: Education[] = [
  {
    school: "University of Technology",
    degree: "Bachelor of Science in Computer Science",
    date: "2017 - 2021",
    description: "Focused on web development, algorithms, and data structures. Participated in hackathons and coding competitions.",
  },
  {
    school: "Online Learning Platforms",
    degree: "Various Certifications",
    date: "2019 - Present",
    description: "Completed courses on React, Node.js, MongoDB, and other modern web technologies.",
  },
];

export const socialLinks: Social[] = [
  {
    name: "GitHub",
    icon: "github",
    url: "https://github.com/DHEERAJSONKAR",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/dheeraj-sonkar-304b982b7/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    url: "https://www.instagram.com/dheerajsonkar454/",
  },
];