import type { Chapter } from '../types/chapters';

export const mockChapters: Chapter[] = [
  {
    id: 'ais-uni',
    institutionName: 'Universidad Nacional de Ingeniería',
    chapterName: 'AIS UNI',
    city: 'Lima',
    status: 'Activo',
    shortDescription: 'Pioneros en robótica autónoma, deep learning y visión artificial en la facultad de ciencias e ingeniería.',
    fullDescription: 'El Capítulo Estudiantil AIS UNI nació con el propósito de conectar la sólida formación físico-matemática y computacional de la UNI con las tendencias globales en Inteligencia Artificial. Con múltiples grupos de estudio e investigación aplicada, el capítulo desarrolla soluciones para la industria, papers para conferencias internacionales y organiza hackathones nacionales.',
    logoUrl: '/logos/uni_logo.png',
    coverUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&h=400&q=80',
    executiveBoard: [
      {
        id: 'uni-1',
        name: 'Emiliano de la Cruz',
        role: 'Presidente',
        linkedinUrl: 'https://www.linkedin.com'
      },
      {
        id: 'uni-2',
        name: 'Leonel Cruzado',
        role: 'Vicepresidente',
        linkedinUrl: 'https://www.linkedin.com'
      }
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/company/ais-uni',
      instagram: 'https://instagram.com/ais.uni',
      discord: 'https://discord.gg/ais-uni',
      github: 'https://github.com/ais-uni'
    },
    gallery: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80'
    ],
    specialties: ['IA Aplicada', 'Robótica', 'Deep Learning'],
    researchLines: ['Visión Computacional', 'Sistemas Autónomos'],
    sharedProjects: ['Hackathon Nacional IA', 'Vehículo Autónomo UNI']
  },
  {
    id: 'ais-unmsm',
    institutionName: 'Universidad Nacional Mayor de San Marcos',
    chapterName: 'AIS UNMSM',
    city: 'Lima',
    status: 'Activo',
    shortDescription: 'Liderando investigación interdisciplinaria en PLN médico, bioinformática y ética de algoritmos en la Decana de América.',
    fullDescription: 'AIS UNMSM integra estudiantes de Ingeniería de Sistemas, Software, Medicina y Ciencias Biológicas para aplicar modelos de lenguaje avanzados y visión computacional al diagnóstico temprano y análisis de literatura biomédica en el Perú.',
    logoUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=240&h=240&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&h=400&q=80',
    executiveBoard: [
      {
        id: 'unmsm-1',
        name: 'Camila Espinoza',
        role: 'Presidenta',
        photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
        linkedinUrl: 'https://www.linkedin.com'
      },
      {
        id: 'unmsm-2',
        name: 'Rodrigo Salazar',
        role: 'Vicepresidente',
        photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
        linkedinUrl: 'https://www.linkedin.com'
      }
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/company/ais-unmsm',
      instagram: 'https://instagram.com/ais.unmsm',
      github: 'https://github.com/ais-unmsm'
    },
    gallery: [
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
    ],
    specialties: ['PLN Médico', 'Bioinformática', 'Ética de IA'],
    researchLines: ['Modelos de Lenguaje Clínico', 'Diagnóstico por Imágenes'],
    sharedProjects: ['Dataset Médico Peruano', 'AIS MedBot']
  },
  {
    id: 'ais-pucp',
    institutionName: 'Pontificia Universidad Católica del Perú',
    chapterName: 'AIS PUCP',
    city: 'Lima',
    status: 'Activo',
    shortDescription: 'Foco en visión artificial para conservación ambiental, ética tecnológica y desarrollo de modelos de lenguaje en lenguas originarias.',
    fullDescription: 'El capítulo AIS PUCP fomenta la creación de tecnologías de IA centradas en el ser humano. Colabora activamente con centros de investigación en monitoreo satelital de la Amazonía y procesamiento del quechua y aimara mediante redes neuronales profundas.',
    logoUrl: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=240&h=240&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=400&q=80',
    executiveBoard: [
      {
        id: 'pucp-1',
        name: 'Sebastián Paredes',
        role: 'Presidente',
        photoUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&h=200&q=80',
        linkedinUrl: 'https://www.linkedin.com'
      },
      {
        id: 'pucp-2',
        name: 'Mariana Rios',
        role: 'Vicepresidenta',
        linkedinUrl: 'https://www.linkedin.com'
      }
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/company/ais-pucp',
      instagram: 'https://instagram.com/ais.pucp',
      website: 'https://aispucp.org'
    },
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80'
    ],
    specialties: ['Visión Ambiental', 'PLN Lenguas Originarias', 'IA Ética'],
    researchLines: ['Monitoreo Satelital', 'Traducción Quechua/Aimara'],
    sharedProjects: ['Amazonía AI Watch', 'Simposio Nacional de IA']
  },
  {
    id: 'ais-utec',
    institutionName: 'Universidad de Ingeniería y Tecnología',
    chapterName: 'AIS UTEC',
    city: 'Lima',
    status: 'Activo',
    shortDescription: 'Ecosistema ágil de creación de startups de IA, Edge AI en dispositivos embebidos y agentes inteligentes para la industria.',
    fullDescription: 'AIS UTEC impulsa la innovación de base tecnológica conectando estudiantes con aceleradoras, laboratorios de Silicon Valley y proyectos de Edge Computing de alto rendimiento.',
    logoUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=240&h=240&q=80',
    coverUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=400&q=80',
    executiveBoard: [
      {
        id: 'utec-1',
        name: 'Nicolás Benavides',
        role: 'Presidente',
        photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80',
        linkedinUrl: 'https://www.linkedin.com'
      },
      {
        id: 'utec-2',
        name: 'Gabriela Morales',
        role: 'Vicepresidenta',
        photoUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&h=200&q=80',
        linkedinUrl: 'https://www.linkedin.com'
      }
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/company/ais-utec',
      instagram: 'https://instagram.com/ais.utec',
      discord: 'https://discord.gg/ais-utec',
      github: 'https://github.com/ais-utec'
    },
    gallery: [
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
    ],
    specialties: ['Edge AI', 'Agentes Autónomos', 'Startups Deep Tech'],
    researchLines: ['Embedded TinyML', 'Sistemas Multi-Agente'],
    sharedProjects: ['AIS Incubation Lab', 'TinyML Peru Edge']
  },
  {
    id: 'ais-upc',
    institutionName: 'Universidad Peruana de Ciencias Aplicadas',
    chapterName: 'AIS UPC',
    city: 'Lima',
    status: 'En Formación',
    shortDescription: 'Impulsando soluciones de IA aplicada al Fintech, diseño de software escalable y ciencia de datos orientada a negocios.',
    fullDescription: 'Actualmente en fase de estructuración y conformación de equipos, AIS UPC busca congregar el talento de los campus Monterrico, San Isidro, San Miguel y Villa para potenciar habilidades en analítica predictiva y deep learning.',
    logoUrl: undefined,
    coverUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=400&q=80',
    executiveBoard: [
      {
        id: 'upc-1',
        name: 'Renato Córdova',
        role: 'Presidente Fundador',
        linkedinUrl: 'https://www.linkedin.com'
      },
      {
        id: 'upc-2',
        name: 'Andrea Valdivia',
        role: 'Vicepresidenta Fundadora',
        linkedinUrl: 'https://www.linkedin.com'
      }
    ],
    socialLinks: {
      instagram: 'https://instagram.com/ais_upc',
      linkedin: 'https://linkedin.com'
    },
    gallery: [],
    specialties: ['Fintech AI', 'Analítica Predictiva', 'Cloud AI'],
    researchLines: ['Detección de Fraude', 'Modelos Crediticios'],
    sharedProjects: ['FinAI Challenge', 'Open Banking AI']
  },
  {
    id: 'ais-unsa',
    institutionName: 'Universidad Nacional de San Agustín',
    chapterName: 'AIS UNSA',
    city: 'Arequipa',
    status: 'En Formación',
    shortDescription: 'Desarrollando el polo de Inteligencia Artificial del sur del Perú con foco en minería inteligente y visión computacional.',
    fullDescription: 'AIS UNSA nace en la ciudad blanca de Arequipa como el primer núcleo regional en el sur del país. Enfocado en minería 4.0, visión artificial para inspección industrial y modelos predictivos climáticos.',
    logoUrl: 'https://invalid-image-url-for-testing-fallback.ais.org/unsa-logo.png',
    coverUrl: undefined,
    executiveBoard: [
      {
        id: 'unsa-1',
        name: 'Carlos Montoya',
        role: 'Presidente Fundador',
        linkedinUrl: 'https://www.linkedin.com'
      },
      {
        id: 'unsa-2',
        name: 'Jimena Paredes',
        role: 'Vicepresidenta Fundadora',
        linkedinUrl: 'https://www.linkedin.com'
      }
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com'
    },
    gallery: [],
    specialties: ['Minería 4.0', 'Visión Industrial', 'Modelado Climático'],
    researchLines: ['Gemelos Digitales en Minería', 'Predicción de Heladas'],
    sharedProjects: ['Sur AI Cluster', 'Inspección Minera con Drones']
  },
  {
    id: 'ais-unt',
    institutionName: 'Universidad Nacional de Trujillo',
    chapterName: 'AIS UNT',
    city: 'Trujillo',
    status: 'En Formación',
    shortDescription: 'Promoviendo el desarrollo de modelos de aprendizaje automático aplicados a la agroindustria y biotecnología norteña.',
    fullDescription: 'Uniendo a las facultades de Ingeniería y Ciencias Físicas y Matemáticas para resolver desafíos agroindustriales y de visión por computadora en el norte peruano.',
    logoUrl: undefined,
    coverUrl: undefined,
    executiveBoard: [
      {
        id: 'unt-1',
        name: 'Lucía Vásquez',
        role: 'Presidenta Fundadora',
        linkedinUrl: 'https://www.linkedin.com'
      },
      {
        id: 'unt-2',
        name: 'Marco Torres',
        role: 'Vicepresidente Fundador',
        linkedinUrl: 'https://www.linkedin.com'
      }
    ],
    socialLinks: {
      instagram: 'https://instagram.com'
    },
    gallery: [],
    specialties: ['Agro-Tech AI', 'Biotecnología', 'Visión Multiespectral'],
    researchLines: ['Detección de Plagas', 'Optimización de Riego con IA'],
    sharedProjects: ['AgroData Norte', 'AIS BioLab']
  }
];
