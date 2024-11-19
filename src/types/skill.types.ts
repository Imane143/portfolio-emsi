// src/types/skill.types.ts
export interface Skill {
    id: string;
    name: string;
    category: 'frontend' | 'backend' | 'tools' | 'soft';
    level: number; // 1-5
    icon?: string;
  }
  
  export interface SkillSectionProps {
    skills: Skill[];
  }
  
  export interface SkillCardProps {
    skill: Skill;
  }