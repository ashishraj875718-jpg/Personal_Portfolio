export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  status?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  year: string;
  grade: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  year: string;
  description?: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  year: string;
  type: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
}