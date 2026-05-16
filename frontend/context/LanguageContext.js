import { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      services: 'Servicios',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    hero: {
      greeting: 'Hola, soy',
      role: 'Desarrollador Full Stack',
      description: 'Construyo soluciones prácticas que mezclan backend sólido con interfaces claras y útiles.',
      cta: 'Ver proyectos'
    },
    about: {
      title: 'Sobre mí',
      subtitle: '// quien_soy.md',
      bio: 'Soy desarrollador de software con más de 8 años de experiencia en diversos lenguajes, frameworks y entornos. He trabajado desplegando servicios completos en Kubernetes, desarrollando backend para APIs y paneles administrativos, y he publicado aplicaciones en Play Store y App Store.',
      learning: 'Actualmente trabajando en',
      learningItems: [
        'Arquitectura de apps móviles en Expo + React Native',
        'Despliegues en Google Play / App Store',
        'Servicios en Kubernetes y Docker'
      ],
      techStack: 'Tech Stack'
    },
    services: {
      title: 'Servicios',
      subtitle: '// servicios.config',
      items: [
        {
          title: 'Desarrollo Web',
          description: 'Aplicaciones web modernas con React, Next.js y Node.js. Desde landing pages hasta plataformas complejas.'
        },
        {
          title: 'Desarrollo Backend',
          description: 'APIs robustas y escalables con Node.js, Express, Java, PHP/Symfony y bases de datos PostgreSQL/MySQL.'
        },
        {
          title: 'Apps Móviles',
          description: 'Desarrollo de aplicaciones móviles multiplataforma con React Native y Expo. Publicación en Play Store y App Store.'
        },
        {
          title: 'Cloud & DevOps',
          description: 'Despliegue de servicios en Kubernetes, Docker y configuración de entornos en la nube.'
        },
        {
          title: 'Bases de Datos',
          description: 'Diseño e implementación con PostgreSQL, MySQL, Prisma. Reportes con JasperSoft.'
        },
        {
          title: 'Integraciones ERP',
          description: 'Plugins y extensiones para iDempiere. Reportes Jasper, automatizaciones y middleware.'
        }
      ]
    },
    projects: {
      title: 'Proyectos',
      subtitle: '// portafolio.json',
      viewProject: 'Ver proyecto',
      items: [
        {
          title: 'Flexor',
          description: 'Bot de Telegram para gestión de entregas, control de despachos y métricas de carriers.',
          tags: ['Telegram', 'N8N', 'Argentina'],
          link: '/flexor'
        },
        {
          title: 'iDempiere Plugins',
          description: 'Extensiones para manejo de documentos, seriales y reportes Jasper.',
          tags: ['Java', 'iDempiere', 'JasperReports']
        },
        {
          title: 'Automatización SAC',
          description: 'Asistente técnico vía WhatsApp con N8N para gestión de garantías.',
          tags: ['N8N', 'WhatsApp', 'Automation']
        },
        {
          title: 'Runner Light',
          description: 'App para corredores con sistema de recompensas y logros. Publicada en stores.',
          tags: ['React Native', 'Expo', 'Mobile']
        },
        {
          title: 'Middleware E-commerce',
          description: 'Comunicación entre PrestaShop e iDempiere para sincronización de datos.',
          tags: ['PHP', 'API', 'Integration']
        },
        {
          title: 'Directorio de Tiendas',
          description: 'Plataforma web con filtros por ciudad para encontrar tiendas locales.',
          tags: ['Next.js', 'Vercel', 'PostgreSQL']
        }
      ]
    },
    contact: {
      title: 'Contacto',
      subtitle: '// hablemos.sh',
      cta: "Hablemos",
      description: 'Siempre en busca de nuevos retos para crear proyectos que conecten tecnología + experiencia real.',
      email: 'Envíame un email'
    },
    footer: {
      made: 'Hecho con',
      by: 'por Totto',
      rights: 'Todos los derechos reservados'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Full Stack Developer',
      description: 'I build practical solutions that combine solid backend with clear and useful interfaces.',
      cta: 'View projects'
    },
    about: {
      title: 'About me',
      subtitle: '// who_am_i.md',
      bio: "I'm a software developer with over 8 years of experience in various languages, frameworks and environments. I've worked deploying complete services on Kubernetes, developing backend for APIs and admin panels, and have published applications on Play Store and App Store.",
      learning: 'Currently working on',
      learningItems: [
        'Mobile app architecture with Expo + React Native',
        'Deployments on Google Play / App Store',
        'Services on Kubernetes and Docker'
      ],
      techStack: 'Tech Stack'
    },
    services: {
      title: 'Services',
      subtitle: '// services.config',
      items: [
        {
          title: 'Web Development',
          description: 'Modern web applications with React, Next.js and Node.js. From landing pages to complex platforms.'
        },
        {
          title: 'Backend Development',
          description: 'Robust and scalable APIs with Node.js, Express, Java, PHP/Symfony and PostgreSQL/MySQL databases.'
        },
        {
          title: 'Mobile Apps',
          description: 'Cross-platform mobile application development with React Native and Expo. Published on Play Store and App Store.'
        },
        {
          title: 'Cloud & DevOps',
          description: 'Service deployment on Kubernetes, Docker and cloud environment configuration.'
        },
        {
          title: 'Databases',
          description: 'Design and implementation with PostgreSQL, MySQL, Prisma. Reports with JasperSoft.'
        },
        {
          title: 'ERP Integrations',
          description: 'Plugins and extensions for iDempiere. Jasper reports, automations and middleware.'
        }
      ]
    },
    projects: {
      title: 'Projects',
      subtitle: '// portfolio.json',
      viewProject: 'View project',
      items: [
        {
          title: 'iDempiere Plugins',
          description: 'Extensions for document handling, serial numbers and Jasper reports.',
          tags: ['Java', 'iDempiere', 'JasperReports']
        },
        {
          title: 'SAC Automation',
          description: 'Technical assistant via WhatsApp with N8N for warranty management.',
          tags: ['N8N', 'WhatsApp', 'Automation']
        },
        {
          title: 'Runner Light',
          description: 'App for runners with rewards and achievements system. Published on stores.',
          tags: ['React Native', 'Expo', 'Mobile']
        },
        {
          title: 'E-commerce Middleware',
          description: 'Communication between PrestaShop and iDempiere for data synchronization.',
          tags: ['PHP', 'API', 'Integration']
        },
        {
          title: 'Store Directory',
          description: 'Web platform with city filters to find local stores.',
          tags: ['Next.js', 'Vercel', 'PostgreSQL']
        }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: '// lets_talk.sh',
      cta: "Let's Talk",
      description: 'Always looking for new challenges to create projects that connect technology + real experience.',
      email: 'Send me an email'
    },
    footer: {
      made: 'Made with',
      by: 'by Totto',
      rights: 'All rights reserved'
    }
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved && (saved === 'es' || saved === 'en')) {
      setLang(saved);
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'es' ? 'en' : 'es';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
