// src/data/projects.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demoUrl: string;
    githubUrl: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.",
      image: "https://via.placeholder.com/600x400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com"
    },
    {
      id: 2,
      title: "Task Manager",
      description: "Application de gestion des tâches avec fonctionnalités collaboratives.",
      image: "https://via.placeholder.com/600x400",
      technologies: ["React", "Firebase", "Material-UI"],
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Site portfolio personnel avec animations et design responsive.",
      image: "https://via.placeholder.com/600x400",
      technologies: ["React", "TypeScript", "Styled Components"],
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com"
    }
  ];