export type SkillCategory = 'languages' | 'techniques' | 'tools';

export type Skill = {
  id: string;
  name: string;
  icon: string;
  category: SkillCategory;
  level: 'iniciante' | 'intermediario' | 'avancado';
  proficiency: number;
  description: string;
  examples: string[];
};

export type SoftSkill = {
  id: string;
  name: string;
  icon: string;
  description: string;
  context: string;
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  link: string;
  status: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  phone: string;
  githubUser: string;
  github: string;
  linkedin: string;
  email: string;
};
