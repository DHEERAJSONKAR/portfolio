export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

export type NavLink = {
  id: string;
  title: string;
};

export type Skill = {
  name: string;
  icon: string;
  level: number;
  hoverColor?: string; // Optional property for custom hover color
};

export type Experience = {
  title: string;
  company?: string;
  date: string;
  description: string;
  icon?: string;
};

export type Education = {
  school: string;
  degree: string;
  date: string;
  description: string;
};

export type Social = {
  name: string;
  icon: string;
  url: string;
};