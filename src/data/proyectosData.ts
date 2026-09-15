import type { Project, FAQ } from '../types/proyectos';

export const mainProject: Project = {
  id: 'landing-page-de-ais',
  title: 'Landing Page de nuestro Centro Cultural',
  status: 'En desarrollo',
  shortDescription: 'La dirección de Tecnología e Investigación se encarga de la creación y mantenimiento de la página web institucional.',
  fullDescription: 'La dirección de Tecnología e Investigación se encarga de la creación y mantenimiento de la página web institucional. Esta Landing Page tiene por objetivo mostrar información acerca de AIS. El equipo de Tecnología e Investigación actualizará la información siempre que haya información nueva. Este proyecto de software inicialmente solo contendrá frontend, pero más adelante se espera contar con un CMS para automatizar muchas funciones.',
  startDate: '17 de julio del 2026',
  members: [
    { name: 'Leonel Cruzado', role: 'Líder de Proyecto' },
    { name: 'Jeanpier Robles', role: 'Sublíder de proyecto' },
    { name: 'John Tucto', role: 'Miembro' },
    { name: 'Joaquín Berrospi', role: 'Miembro' },
    { name: 'Diego Pinedo', role: 'Miembro' },
    { name: 'Alejandro Velarde', role: 'Miembro' },
    { name: 'Jeferson Yataco', role: 'Miembro' }
  ]
};

export const projectsList: Project[] = [
  {
    id: 'landing-page-de-ais',
    title: 'Landing Page de nuestro Centro Cultural',
    status: 'En desarrollo',
    shortDescription: 'La dirección de Tecnología e Investigación se encarga de la creación y mantenimiento de la página web institucional.',
    fullDescription: 'La dirección de Tecnología e Investigación se encarga de la creación y mantenimiento de la página web institucional. Esta Landing Page tiene por objetivo mostrar información acerca de AIS. El equipo de Tecnología e Investigación actualizará la información siempre que haya información nueva. Este proyecto de software inicialmente solo contendrá frontend, pero más adelante se espera contar con un CMS para automatizar muchas funciones.',
    startDate: '17 de julio del 2026',
    members: [
      { name: 'Leonel Cruzado', role: 'Líder de Proyecto' },
      { name: 'Jeanpier Robles', role: 'Sublíder de proyecto' },
      { name: 'John Tucto', role: 'Miembro' },
      { name: 'Joaquín Berrospi', role: 'Miembro' },
      { name: 'Diego Pinedo', role: 'Miembro' },
      { name: 'Alejandro Velarde', role: 'Miembro' },
      { name: 'Jeferson Yataco', role: 'Miembro' }
    ]
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
