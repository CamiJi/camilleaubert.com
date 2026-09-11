// Shared TypeScript interfaces for the portfolio

export interface Social {
  name: string;
  url: string;
  icon: string;
  showInContact?: boolean;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  photoUrl: string;
  webpageTitle: string;
  socials: Social[];
}

export interface AboutData {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
}

export interface CareerItem {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export type ProjectKind = 'cegos' | 'side' | 'client';

export interface Project {
  title: string;
  kind: ProjectKind;
  status: string;
  description: string;
  images: string[];
  tech: string[];
  platforms: string[];
  link: string;
  category: string;
}

export interface WritingItem {
  title: string;
  url: string;
  note: string;
}

export interface NowData {
  eyebrow: string;
  heading: string;
  bullets: string[];
  writing: WritingItem[];
}
