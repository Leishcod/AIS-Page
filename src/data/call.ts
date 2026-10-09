export interface Benefit {
  title: string;
  description: string;
  icon: "learning" | "project" | "community" | "growth";
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    title: "Aprendizaje continuo",
    description:
      "Desarrolla nuevas habilidades trabajando junto a estudiantes con intereses similares.",
    icon: "learning",
  },
  {
    title: "Proyectos reales",
    description:
      "Participa en iniciativas que te permitan llevar tus conocimientos más allá del aula.",
    icon: "project",
  },
  {
    title: "Comunidad",
    description:
      "Conecta con estudiantes interesados en tecnología, investigación e innovación.",
    icon: "community",
  },
  {
    title: "Desarrollo profesional",
    description:
      "Fortalece habilidades técnicas, de liderazgo, comunicación y trabajo colaborativo.",
    icon: "growth",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Postulación",
    description:
      "Completa el formulario y selecciona el área que más se alinee contigo.",
  },
  {
    number: "02",
    title: "Evaluación",
    description:
      "Revisaremos tu perfil, intereses y motivación para formar parte de AIS.",
  },
  {
    number: "03",
    title: "Entrevista",
    description: "Conversemos sobre tus intereses, experiencia y expectativas.",
  },
  {
    number: "04",
    title: "Bienvenida",
    description: "Conoce a tu equipo e inicia tu experiencia dentro de AIS.",
  },
];

export const requirements = [
  "Ser estudiante universitario.",
  "Tener interés por la Inteligencia Artificial, tecnología o innovación.",
  "Contar con disponibilidad para participar activamente.",
  "Tener iniciativa, compromiso y disposición para aprender.",
];
