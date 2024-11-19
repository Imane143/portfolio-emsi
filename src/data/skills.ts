// src/data/skills.ts
export interface Skill {
    name: string;
    level: number; // 1-5
  }
  
  export interface SkillCategory {
    title: string;
    skills: Skill[];
  }
  
  export const skillsData: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 5 },
        { name: "TypeScript", level: 4 },
        { name: "HTML/CSS", level: 5 },
        { name: "JavaScript", level: 5 },
        { name: "Styled Components", level: 4 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 4 },
        { name: "Express", level: 4 },
        { name: "MongoDB", level: 3 },
        { name: "SQL", level: 3 },
        { name: "RESTful APIs", level: 4 }
      ]
    },
    {
      title: "Outils",
      skills: [
        { name: "Git", level: 4 },
        { name: "VS Code", level: 5 },
        { name: "Webpack", level: 3 },
        { name: "Docker", level: 3 },
        { name: "Jest", level: 4 }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Travail d'équipe", level: 5 },
        { name: "Communication", level: 4 },
        { name: "Résolution de problèmes", level: 4 },
        { name: "Agilité", level: 4 },
        { name: "Autonomie", level: 5 }
      ]
    }
  ];