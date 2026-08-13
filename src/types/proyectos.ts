export type ProjectStatus = 'En desarrollo' | 'Próximamente' | 'Culminado';

export interface ProjectMember {
  name: string;
  role: string;
}

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  shortDescription: string;
  fullDescription?: string;
  startDate?: string;
  endDate?: string;
  members: ProjectMember[];
  image?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
