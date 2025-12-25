
export interface Project {
  id: string;
  title: string;
  problem: string;
  why: string;
  learned: string;
  status: 'Finished' | 'In Progress' | 'Abandoned' | 'Infinite Loop';
  link?: string;
}

export interface LearningPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  topic: string;
}

export interface RabbitHole {
  id: string;
  topic: string;
  description: string;
  intensity: 'Mildly Obsessed' | 'Deep Dive' | 'Total Absorption';
}
