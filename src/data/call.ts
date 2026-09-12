export interface CallArea {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  activities: string[];
  profile: string[];
  icon: "cpu" | "operations" | "marketing" | "people";
}

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

export const callAreas: CallArea[] = [
  {
    id: "ia-proyectos",
    name: "Inteligencia Artificial & Proyectos",
    shortDescription:
      "Investiga, diseña y desarrolla soluciones basadas en Inteligencia Artificial.",
    description:
      "Área enfocada en el desarrollo técnico, la investigación aplicada y la construcción de proyectos relacionados con Inteligencia Artificial.",
    activities: [
      "Desarrollo de proyectos de IA",
      "Investigación y experimentación",
      "Participación en iniciativas técnicas",
    ],
    profile: [
      "Curiosidad por la Inteligencia Artificial",
      "Pensamiento analítico",
      "Interés por aprender y construir",
    ],
    icon: "cpu",
  },
  {
    id: "operaciones",
    name: "Operaciones & Logística",
    shortDescription:
      "Convierte ideas en actividades organizadas, eficientes y ejecutables.",
    description:
      "Área responsable de planificar, coordinar y optimizar los recursos necesarios para las actividades y proyectos de AIS.",
    activities: [
      "Planificación de actividades",
      "Coordinación logística",
      "Gestión de recursos",
    ],
    profile: [
      "Organización",
      "Capacidad de coordinación",
      "Resolución de problemas",
    ],
    icon: "operations",
  },
  {
    id: "marketing",
    name: "Marketing & Comunicaciones",
    shortDescription:
      "Construye la identidad de AIS y comunica nuestras iniciativas.",
    description:
      "Área encargada de fortalecer la presencia de AIS mediante contenido, estrategia, diseño y comunicación.",
    activities: [
      "Creación de contenido",
      "Diseño y comunicación visual",
      "Estrategia en redes sociales",
    ],
    profile: ["Creatividad", "Interés por comunicación digital", "Iniciativa"],
    icon: "marketing",
  },
  {
    id: "capital-humano",
    name: "Capital Humano & Excelencia",
    shortDescription:
      "Fortalece la comunidad y desarrolla el talento dentro de AIS.",
    description:
      "Área orientada al crecimiento de los miembros, la cultura organizacional y el desarrollo interno de la sociedad.",
    activities: [
      "Integración de miembros",
      "Actividades de desarrollo",
      "Gestión de cultura organizacional",
    ],
    profile: [
      "Empatía",
      "Comunicación",
      "Interés por el desarrollo de personas",
    ],
    icon: "people",
  },
];

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
