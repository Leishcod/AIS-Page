export interface ExecutiveMember {
  id: string;
  name: string;
  role: string;
  photoUrl?: string;
  linkedinUrl?: string;
}

export interface ChapterSocials {
  linkedin?: string;
  instagram?: string;
  discord?: string;
  github?: string;
  website?: string;
}

export interface Chapter {
  id: string;
  institutionName: string; // Nombre de la institución (usado para el sort alfabético)
  chapterName: string;      // Nombre del capítulo (ej: "AIS UNI")
  city: string;
  status: 'Activo' | 'En Formación';
  shortDescription: string;
  fullDescription: string;
  logoUrl?: string;
  coverUrl?: string;
  executiveBoard?: ExecutiveMember[];
  socialLinks?: ChapterSocials;
  gallery?: string[];
  specialties?: string[];
  researchLines?: string[];
  sharedProjects?: string[];
}

export interface FounderFormData {
  nombres: string;
  apellidos: string;
  correoInstitucional: string;
  universidadInstituto: string;
  carrera: string;
  ciclo: string;
}
