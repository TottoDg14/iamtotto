"use strict";
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ LanguageProvider),
/* harmony export */   "Z": () => (/* binding */ useLanguage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const translations = {
    es: {
        nav: {
            home: 'Inicio',
            about: 'Sobre m\xed',
            services: 'Servicios',
            projects: 'Proyectos',
            contact: 'Contacto'
        },
        hero: {
            greeting: 'Hola, soy',
            role: 'Desarrollador Full Stack',
            description: 'Construyo soluciones pr\xe1cticas que mezclan backend s\xf3lido con interfaces claras y \xfatiles.',
            cta: 'Ver proyectos'
        },
        about: {
            title: 'Sobre m\xed',
            subtitle: '// quien_soy.md',
            bio: 'Soy desarrollador de software con m\xe1s de 4 a\xf1os de experiencia. Me apasionan las nuevas tecnolog\xedas, trabajar de manera organizada, colaborar y asumir nuevos retos.',
            learning: 'Actualmente aprendiendo',
            learningItems: [
                'Arquitectura de apps m\xf3viles en Expo + React Native',
                'Integraciones con APIs y despliegues en Google Play / App Store',
                'Administraci\xf3n de entornos Ubuntu + Apache + HTTPS'
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
                    description: 'APIs robustas y escalables con Node.js, Express, Java y bases de datos PostgreSQL/MySQL.'
                },
                {
                    title: 'Apps M\xf3viles',
                    description: 'Desarrollo de aplicaciones m\xf3viles multiplataforma con React Native y Expo.'
                },
                {
                    title: 'Integraciones ERP',
                    description: 'Plugins y extensiones para iDempiere. Reportes Jasper, automatizaciones y middleware.'
                },
                {
                    title: 'Automatizaci\xf3n',
                    description: 'Flujos automatizados con N8N, integraciones WhatsApp y sistemas de gesti\xf3n.'
                },
                {
                    title: 'Consultor\xeda',
                    description: 'Asesoramiento t\xe9cnico para elegir las mejores tecnolog\xedas para tu proyecto.'
                }
            ]
        },
        projects: {
            title: 'Proyectos',
            subtitle: '// portafolio.json',
            viewProject: 'Ver proyecto',
            items: [
                {
                    title: 'iDempiere Plugins',
                    description: 'Extensiones para manejo de documentos, seriales y reportes Jasper.',
                    tags: [
                        'Java',
                        'iDempiere',
                        'JasperReports'
                    ]
                },
                {
                    title: 'Automatizaci\xf3n SAC',
                    description: 'Asistente t\xe9cnico v\xeda WhatsApp con N8N para gesti\xf3n de garant\xedas.',
                    tags: [
                        'N8N',
                        'WhatsApp',
                        'Automation'
                    ]
                },
                {
                    title: 'Runner Light',
                    description: 'App para corredores con sistema de recompensas y logros.',
                    tags: [
                        'React Native',
                        'Expo',
                        'Mobile'
                    ]
                },
                {
                    title: 'Middleware E-commerce',
                    description: 'Comunicaci\xf3n entre PrestaShop e iDempiere para sincronizaci\xf3n de datos.',
                    tags: [
                        'PHP',
                        'API',
                        'Integration'
                    ]
                },
                {
                    title: 'Directorio de Tiendas',
                    description: 'Plataforma web con filtros por ciudad para encontrar tiendas locales.',
                    tags: [
                        'Next.js',
                        'Vercel',
                        'PostgreSQL'
                    ]
                }
            ]
        },
        contact: {
            title: 'Contacto',
            subtitle: '// hablemos.sh',
            cta: "Hablemos",
            description: 'Siempre en busca de nuevos retos para crear proyectos que conecten tecnolog\xeda + experiencia real.',
            email: 'Env\xedame un email'
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
            bio: "I'm a software developer with over 4 years of experience. I'm passionate about new technologies, working in an organized way, collaborating and taking on new challenges.",
            learning: 'Currently learning',
            learningItems: [
                'Mobile app architecture with Expo + React Native',
                'API integrations and deployments on Google Play / App Store',
                'Ubuntu + Apache + HTTPS environment administration'
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
                    description: 'Robust and scalable APIs with Node.js, Express, Java and PostgreSQL/MySQL databases.'
                },
                {
                    title: 'Mobile Apps',
                    description: 'Cross-platform mobile application development with React Native and Expo.'
                },
                {
                    title: 'ERP Integrations',
                    description: 'Plugins and extensions for iDempiere. Jasper reports, automations and middleware.'
                },
                {
                    title: 'Automation',
                    description: 'Automated workflows with N8N, WhatsApp integrations and management systems.'
                },
                {
                    title: 'Consulting',
                    description: 'Technical advice to choose the best technologies for your project.'
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
                    tags: [
                        'Java',
                        'iDempiere',
                        'JasperReports'
                    ]
                },
                {
                    title: 'SAC Automation',
                    description: 'Technical assistant via WhatsApp with N8N for warranty management.',
                    tags: [
                        'N8N',
                        'WhatsApp',
                        'Automation'
                    ]
                },
                {
                    title: 'Runner Light',
                    description: 'App for runners with rewards and achievements system.',
                    tags: [
                        'React Native',
                        'Expo',
                        'Mobile'
                    ]
                },
                {
                    title: 'E-commerce Middleware',
                    description: 'Communication between PrestaShop and iDempiere for data synchronization.',
                    tags: [
                        'PHP',
                        'API',
                        'Integration'
                    ]
                },
                {
                    title: 'Store Directory',
                    description: 'Web platform with city filters to find local stores.',
                    tags: [
                        'Next.js',
                        'Vercel',
                        'PostgreSQL'
                    ]
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
const LanguageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function LanguageProvider({ children  }) {
    const { 0: lang , 1: setLang  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('es');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const saved = localStorage.getItem('lang');
        if (saved && (saved === 'es' || saved === 'en')) {
            setLang(saved);
        }
    }, []);
    const toggleLang = ()=>{
        const newLang = lang === 'es' ? 'en' : 'es';
        setLang(newLang);
        localStorage.setItem('lang', newLang);
    };
    const t = translations[lang];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LanguageContext.Provider, {
        value: {
            lang,
            toggleLang,
            t
        },
        children: children
    }));
}
function useLanguage() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}


/***/ })

};
;