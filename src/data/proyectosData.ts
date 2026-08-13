import type { Project, FAQ } from '../types/proyectos';

export const mainProject: Project = {
  id: 'icai-2027',
  title: 'I Internacional Congress on Artificial Intelligence',
  status: 'Próximamente',
  shortDescription: 'Integra diez ejes temáticos que convocan a actores de naturaleza muy distinta entre sí: gobierno peruano, empresas privadas locales, empresas tecnológicas internacionales, organismos multilaterales y academia de investigación de alto nivel.',
  startDate: 'Agosto 2027. Lima, Perú.',
  members: [], // Hero doesn't strictly need members
};

export const projectsList: Project[] = [
  {
    id: 'feria-tecnologica',
    title: 'Feria tecnológica',
    status: 'En desarrollo',
    shortDescription: 'Stands permanentes de empresas, universidades y startups durante los 5 días, abiertos al público general en horarios específicos',
    startDate: '5 de Agosto',
    members: [
      { name: 'Leonel Cruzado', role: 'Líder de Proyecto' },
      { name: 'Jeanpier Robles', role: 'Sublíder de proyecto' },
      { name: 'John Tucto', role: 'Miembro' },
      { name: 'Joaquín Berrospi', role: 'Miembro' },
      { name: 'Diego Pinedo', role: 'Miembro' },
      { name: 'Alejandro Velarde', role: 'Miembro' },
      { name: 'Jeferson Yataco', role: 'Miembro' }
    ]
  },
  {
    id: 'taller-ia-basico',
    title: 'Taller de IA Básico',
    status: 'Próximamente',
    shortDescription: 'Introducción a los conceptos fundamentales de inteligencia artificial para el público general.',
    members: []
  },
  {
    id: 'hackathon-ais',
    title: 'Hackathon AIS 2026',
    status: 'Culminado',
    shortDescription: 'Evento de programación intensiva de 48 horas resolviendo retos de la industria con IA.',
    members: []
  }
];

export const faqList: FAQ[] = [
  {
    id: 'faq-1',
    question: '¿Cualquiera puede unirse a un proyecto?',
    answer: 'Sí, las convocatorias son abiertas al público cuando un nuevo proyecto está en fase de iniciación.'
  },
  {
    id: 'faq-2',
    question: '¿Tienen algún costo los eventos?',
    answer: 'La gran mayoría de nuestras actividades y proyectos son de libre acceso, salvo ciertos congresos internacionales.'
  },
  {
    id: 'faq-3',
    question: '¿Cómo puedo proponer un proyecto nuevo?',
    answer: 'Puedes contactarnos a través del formulario en la sección de Conócenos para evaluar tu propuesta técnica.'
  }
];
