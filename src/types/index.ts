export type AreaId = 'development' | 'security-infra' | 'automation-data';

export type Area = {
  id: AreaId;
  label: string;
  title: string;
  icon: string;
  description: string;
};

export type SkillCategory = 'languages' | 'techniques' | 'tools';

export type Skill = {
  id: string;
  name: string;
  icon: string;
  category: SkillCategory;
  areas: AreaId[];
  usage: 'projects' | 'studying';
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

export type ProjectMedia = {
  type: 'image' | 'video';
  src: string;
  caption?: string;
  poster?: string;
};

export type ProjectStatus = 'Publicado' | 'Self-hosted' | 'Planejado';

export type Project = {
  name: string;
  description: string;
  stack: string[];
  areas: AreaId[];
  link?: string;
  liveLink?: string;
  isLive?: boolean;
  status: ProjectStatus;
  media?: ProjectMedia[];
  highlights?: string[];
  note?: string;
};

export type Experience = {
  /** Drives the timeline icon — never inferred from the role text. */
  type: 'education' | 'work' | 'organization';
  role: string;
  company: string;
  period: string;
  summary: string;
};

export type Resume = {
  area: AreaId;
  file?: string;
  updatedAt: string;
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

export type About = {
  headline: string;
  paragraphs: string[];
  photo?: string;
  photoAlt?: string;
  facts: { label: string; value: string }[];
};
