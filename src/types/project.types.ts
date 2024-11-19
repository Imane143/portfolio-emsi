// src/types/project.types.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    demoUrl?: string;
    githubUrl?: string;
    highlights: string[];
  }
  
  export interface ProjectSectionProps {
    projects: Project[];
  }
  
  export interface ProjectCardProps {
    project: Project;
  }