export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email' | 'x' | 'website';
}

export interface Profile {
  name: string;
  title: string;
  headline: string;
  bio: string;
  location: string;
  available: boolean;
  availabilityLabel: string;
  email: string;
  socials: SocialLink[];
  cvPdfPath: string;
  photoPath: string;
  contactFormEndpoint: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ProjectSection {
  problem: string;
  solution: string;
  architecture: string;
  highlights: string[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
  image: string;
  accent: string;
  featured: boolean;
  year: string;
  sections: ProjectSection;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  title: string;
  institution: string;
  year: string;
  details: string;
  type: 'degree' | 'certification' | 'course';
}

export interface MethodologyItem {
  title: string;
  description: string;
}

export interface CV {
  profile: Profile;
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  methodology: MethodologyItem[];
}

export const cv: CV = {
  profile: {
    name: 'Tomás Campo',
    title: 'Desarrollador Full-Stack · .NET & Angular',
    headline:
      'Diseño y construyo APIs REST y aplicaciones web escalables con .NET Core, C# y Angular, con foco en clean code, arquitectura limpia y entrega continua.',
    bio: 'Desarrollador Full-Stack con más de 9 años de experiencia creando soluciones web y APIs REST. Apasionado por el clean code, la arquitectura limpia y los principios SOLID. He liderado el desarrollo de sistemas escalables y mantenibles en entornos Agile, con pruebas automatizadas (xUnit) y despliegues CI/CD con Docker, GitLab y Azure DevOps.',
    location: 'Narón, Galicia, España · Remoto / híbrido',
    available: true,
    availabilityLabel: 'Abierto a conversaciones profesionales',
    email: 'tcampof@gmail.com',
    socials: [
      {
        label: 'GitHub',
        href: 'https://github.com/tcampof',
        icon: 'github',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/tcampo',
        icon: 'linkedin',
      },
      {
        label: 'Email',
        href: 'mailto:tcampof@gmail.com',
        icon: 'email',
      },
    ],
    cvPdfPath: '/cv.pdf',
    photoPath: '/perfil.png',
    // Replace with your Web3Forms / Formspree endpoint
    contactFormEndpoint: 'https://api.web3forms.com/submit',
  },

  skills: [
    {
      id: 'backend',
      title: 'Backend & APIs',
      description:
        'APIs REST robustas, dominio tipado y contratos claros entre servicios.',
      skills: [
        'C#',
        '.NET Core',
        'ASP.NET Core',
        'Blazor WASM',
        'REST APIs',
        'xUnit',
        'SOLID',
        'Clean Architecture',
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend & UI',
      description:
        'Interfaces web con TypeScript, componentes reutilizables y buena DX.',
      skills: [
        'TypeScript',
        'JavaScript',
        'Angular',
        'Blazor',
        'HTML/CSS',
        'RxJS',
        'Responsive UI',
      ],
    },
    {
      id: 'data-cloud',
      title: 'Datos, Cloud & DevOps',
      description:
        'Persistencia relacional, contenedores y pipelines de entrega continua.',
      skills: [
        'SQL Server',
        'PostgreSQL',
        'MariaDB',
        'Docker',
        'GitLab CI/CD',
        'Azure DevOps',
        'Azure',
        'Git',
      ],
    },
  ],

  projects: [
    {
      slug: 'esfera-audio',
      title: 'Esfera Audio',
      summary:
        'Web premium Hi-Fi con catálogo de audio y flujo de presupuesto/cita, orientada a propuesta comercial.',
      description:
        'Proyecto personal de producto digital para catálogo Hi-Fi. Incluye foundation de scaffolding tipado, inventario mock, i18n y flujo de trabajo basado en OpenSpec / Harness Engineering, con backlog trazable en Azure Boards.',
      stack: ['TypeScript', 'Node.js', 'OpenSpec', 'Azure Boards', 'i18n'],
      repoUrl: 'https://github.com/tcampof/esfera-audio',
      demoUrl: 'https://tcampof.github.io/esfera-audio/',
      image: '/projects/esfera.svg',
      accent: '#6366F1',
      featured: true,
      year: '2026',
      sections: {
        problem:
          'Necesitaba una base sólida para validar una propuesta comercial de catálogo Hi-Fi con presupuesto/cita, sin improvisar arquitectura ni contratos.',
        solution:
          'Scaffold tipado con harness de agente, specs OpenSpec, inventario mock e i18n, listo para iterar el MVP de catálogo y conversión.',
        architecture:
          'Frontend TypeScript con foundation documentada (PRD, skills, specs), flujo opsx (explore → propose → apply → verify) y mapa de backlog Azure ↔ specs.',
        highlights: [
          'Foundation F0 con tipos, i18n e inventario mock',
          'Flujo de trabajo documentado con OpenSpec',
          'Backlog trazable en Azure Boards',
        ],
      },
    },
    {
      slug: 'neoris-blazor',
      title: 'Plataforma interna Blazor',
      summary:
        'Aplicaciones internas con Blazor WASM y ASP.NET Core para gestión de empleados y certificaciones.',
      description:
        'En NEORIS participé en el desarrollo de aplicaciones internas orientadas a procesos administrativos y de certificación, con foco en estabilidad mediante pruebas unitarias e integración.',
      stack: ['Blazor WASM', 'ASP.NET Core', 'C#', 'SQL Server', 'xUnit'],
      image: '/projects/blazor.svg',
      accent: '#38BDF8',
      featured: true,
      year: '2025',
      sections: {
        problem:
          'Los flujos administrativos y de certificación requerían aplicaciones internas fiables, integradas con SQL Server y con baja fricción para el equipo.',
        solution:
          'Desarrollo con Blazor WASM + ASP.NET Core, optimización de flujos e implementación de batería de pruebas con xUnit.',
        architecture:
          'Frontend Blazor WASM consumiendo APIs ASP.NET Core, persistencia en SQL Server y cobertura de pruebas unitarias/integración.',
        highlights: [
          'Gestión de empleados y procesos de certificación',
          'Integración y optimización con SQL Server',
          'Pruebas unitarias e integración con xUnit',
        ],
      },
    },
    {
      slug: 'factech-fullstack',
      title: 'Soluciones Full-Stack corporativas',
      summary:
        'Entrega de soluciones Angular + .NET Core para múltiples clientes, con CI/CD en GitLab y Docker.',
      description:
        'En Factech desarrollé e implementé soluciones Full-Stack personalizadas: frontends Angular, APIs REST con C#/.NET Core e integración con SQL Server, MariaDB y PostgreSQL, automatizando despliegues con pipelines GitLab y contenedores Docker.',
      stack: ['Angular', 'C#', '.NET Core', 'SQL Server', 'PostgreSQL', 'Docker', 'GitLab CI'],
      image: '/projects/factech.svg',
      accent: '#10B981',
      featured: true,
      year: '2024',
      sections: {
        problem:
          'Clientes corporativos necesitaban soluciones a medida con stack heterogéneo de datos y un proceso de entrega repetible.',
        solution:
          'Full-Stack Angular + .NET Core, integración multi-BD y automatización de despliegues con Docker y GitLab CI/CD.',
        architecture:
          'SPA Angular + APIs REST .NET Core, bases de datos según cliente (SQL Server / MariaDB / PostgreSQL) y pipelines containerizados.',
        highlights: [
          'Soluciones personalizadas para múltiples clientes',
          'Integración con SQL Server, MariaDB y PostgreSQL',
          'Pipelines CI/CD con GitLab y Docker',
        ],
      },
    },
    {
      slug: 'infinitum-chat-apis',
      title: 'APIs de chat & analítica',
      summary:
        'APIs de backoffice para el servicio de chats e indicadores operativos que sustituyeron reporting manual en Excel.',
      description:
        'En Infinitum SciTech desarrollé APIs para exponer funcionalidades del backoffice del servicio de chats y analítica de indicadores de llamadas/mensajes del bot de atención, reduciendo el tiempo de armado de reportes que antes se hacía en Excel.',
      stack: ['C#', '.NET', 'REST APIs', 'SQL', 'Analytics'],
      image: '/projects/infinitum.svg',
      accent: '#A78BFA',
      featured: false,
      year: '2022',
      sections: {
        problem:
          'El backoffice de chats necesitaba APIs para integrar funcionalidades y los indicadores de llamadas/mensajes se armaban manualmente en Excel.',
        solution:
          'APIs para exponer capacidades del backoffice y pipelines de análisis de datos para indicadores del bot de atención.',
        architecture:
          'Servicios API sobre el dominio de chats/backoffice, con extracción y agregación de métricas operativas para reporting.',
        highlights: [
          'APIs para funcionalidades de backoffice de chats',
          'Indicadores de llamadas y mensajes del bot',
          'Reducción del tiempo de reporting frente a Excel',
        ],
      },
    },
    {
      slug: 'smileart',
      title: 'SmileArtJS',
      summary:
        'Actualización del sistema de laboratorio dental hacia una base JavaScript moderna.',
      description:
        'Proyecto de modernización del sistema de un laboratorio dental, migrando y actualizando la experiencia web hacia una base JavaScript mantenible.',
      stack: ['JavaScript', 'HTML', 'CSS'],
      repoUrl: 'https://github.com/tcampof/SmileArtJS',
      image: '/projects/smileart.svg',
      accent: '#F59E0B',
      featured: false,
      year: '2022',
      sections: {
        problem:
          'El sistema del laboratorio dental necesitaba una actualización tecnológica para mejorar mantenibilidad y experiencia de uso.',
        solution:
          'Refactor y actualización del frontend hacia una base JavaScript más moderna y operable.',
        architecture:
          'Aplicación web JavaScript orientada a flujos de laboratorio dental (pedidos, seguimiento y operativa interna).',
        highlights: [
          'Modernización del sistema legacy',
          'Código orientado a mantenibilidad',
          'Repositorio público en GitHub',
        ],
      },
    },
  ],

  experience: [
    {
      id: 'vass',
      company: 'VASS',
      role: 'Desarrollador Full-Stack',
      period: 'Oct 2025 — Presente',
      location: 'España · Remoto / híbrido',
      summary:
        'Desarrollo Full-Stack en entornos de consultoría tecnológica, aportando calidad de código, arquitectura limpia y entrega en equipos Agile.',
      achievements: [
        'Contribución al desarrollo de soluciones web y APIs en stack .NET / frontend moderno',
        'Aplicación de clean code, SOLID y prácticas de calidad en el día a día',
        'Colaboración en equipos multidisciplinares orientados a entrega continua',
      ],
      technologies: ['C#', '.NET', 'TypeScript', 'Angular', 'Azure DevOps'],
    },
    {
      id: 'neoris',
      company: 'NEORIS',
      role: 'Analista Programador .NET',
      period: 'Sep 2024 — Oct 2025',
      location: 'Madrid, España',
      summary:
        'Desarrollo de aplicaciones internas con Blazor WASM y ASP.NET Core para gestión de empleados y procesos de certificación.',
      achievements: [
        'Desarrollo de apps internas con Blazor WASM y ASP.NET Core',
        'Optimización de flujos administrativos con integración a SQL Server',
        'Implementación de pruebas unitarias e integración con xUnit',
      ],
      technologies: ['Blazor WASM', 'ASP.NET Core', 'C#', 'SQL Server', 'xUnit'],
    },
    {
      id: 'factech',
      company: 'Factech Servicios Informáticos',
      role: 'Desarrollador Full-Stack',
      period: 'Nov 2022 — Sep 2024',
      location: 'España',
      summary:
        'Soluciones Full-Stack a medida para clientes corporativos: Angular en frontend y APIs REST con C# / .NET Core.',
      achievements: [
        'Frontend con Angular y backend REST con C# / .NET Core',
        'Integración con SQL Server, MariaDB y PostgreSQL según cliente',
        'Automatización de despliegues con GitLab CI/CD y Docker',
        'Colaboración estrecha con equipos multidisciplinares de negocio y tecnología',
      ],
      technologies: ['Angular', 'C#', '.NET Core', 'Docker', 'GitLab CI', 'SQL Server'],
    },
    {
      id: 'infinitum',
      company: 'Infinitum SciTech',
      role: 'Desarrollador de software',
      period: 'Jul 2019 — Nov 2022',
      location: 'Barranquilla, Colombia',
      summary:
        'Desarrollo de APIs de backoffice para el servicio de chats y analítica de indicadores operativos del bot de atención.',
      achievements: [
        'APIs para exponer funcionalidades del backoffice de chats',
        'Análisis de datos para indicadores de llamadas y mensajes del bot',
        'Reducción del tiempo de armado de indicadores que antes se hacían en Excel',
      ],
      technologies: ['C#', '.NET', 'REST APIs', 'SQL'],
    },
  ],

  education: [
    {
      id: 'sena',
      title: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
      institution: 'Servicio Nacional de Aprendizaje (SENA)',
      year: '2015 — 2017',
      details: 'Formación técnica en análisis, diseño y desarrollo de sistemas de información. Bogotá, Colombia.',
      type: 'degree',
    },
    {
      id: 'itsa',
      title: 'Estudios universitarios',
      institution: 'Institución Universitaria ITSA',
      year: '2001 — 2004',
      details: 'Formación universitaria previa en ITSA.',
      type: 'degree',
    },
    {
      id: 'sfpc',
      title: 'Scrum Foundation Professional Certificate (SFPC™)',
      institution: 'CertiProf',
      year: '2019',
      details: 'Fundamentos de Scrum y trabajo en equipos ágiles. Credential ID: 51556464544795.',
      type: 'certification',
    },
    {
      id: 'smpc',
      title: 'Scrum Master Professional Certificate',
      institution: 'CertiProf',
      year: '2019',
      details: 'Rol de Scrum Master y facilitación de equipos Agile. Credential ID: 71556467455315.',
      type: 'certification',
    },
  ],

  methodology: [
    {
      title: 'Clean code & SOLID',
      description:
        'Código legible, principios SOLID y arquitectura limpia para sistemas que se puedan evolucionar sin fricción.',
    },
    {
      title: 'Calidad automatizada',
      description:
        'Pruebas unitarias e integración con xUnit donde aportan valor, para proteger regresiones y acelerar refactors.',
    },
    {
      title: 'Entrega continua',
      description:
        'CI/CD con Docker, GitLab y Azure DevOps para feedback rápido y despliegues repetibles.',
    },
  ],
};

export function getProjectBySlug(slug: string): Project | undefined {
  return cv.projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return cv.projects.filter((project) => project.featured);
}
