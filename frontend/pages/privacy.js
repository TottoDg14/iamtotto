import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

const Privacy = () => {
  const { lang } = useLanguage();

  const content = {
    es: {
      title: 'Política de Privacidad',
      subtitle: '// privacidad.md',
      lastUpdate: 'Última actualización: Abril 2026',
      backHome: 'Volver al inicio',
      sections: [
        {
          title: '1. Introducción',
          content: 'Esta Política de Privacidad describe cómo David Marquez ("nosotros", "nuestro") maneja la información en relación con nuestros servicios de automatización desarrollados con N8N y otras herramientas. Nos comprometemos a proteger tu privacidad y a ser transparentes sobre nuestras prácticas de datos.'
        },
        {
          title: '2. Información que NO recopilamos',
          content: 'Nuestras herramientas de automatización están diseñadas con la privacidad como prioridad. NO recopilamos, almacenamos ni distribuimos:',
          list: [
            'Datos personales identificables (nombre, dirección, teléfono)',
            'Información financiera o bancaria',
            'Credenciales de acceso o contraseñas',
            'Contenido de mensajes privados',
            'Datos de ubicación',
            'Información sensible de ningún tipo'
          ]
        },
        {
          title: '3. Funcionamiento de las automatizaciones',
          content: 'Nuestras automatizaciones con N8N funcionan como intermediarios que procesan datos en tiempo real sin almacenamiento permanente:',
          list: [
            'Los datos fluyen a través del sistema y no se guardan en nuestros servidores',
            'Las automatizaciones ejecutan acciones específicas y descartan la información procesada',
            'No creamos perfiles de usuarios ni bases de datos con información personal',
            'Los flujos de trabajo están diseñados para cumplir con principios de minimización de datos'
          ]
        },
        {
          title: '4. Seguridad',
          content: 'Implementamos medidas de seguridad para proteger la integridad de los procesos:',
          list: [
            'Conexiones cifradas mediante HTTPS/SSL',
            'Autenticación segura con servicios de terceros',
            'Acceso restringido a los flujos de automatización',
            'Monitoreo y logs mínimos necesarios para el funcionamiento'
          ]
        },
        {
          title: '5. Servicios de terceros',
          content: 'Nuestras automatizaciones pueden interactuar con servicios de terceros (WhatsApp, APIs externas, etc.). Cada servicio tiene su propia política de privacidad. Te recomendamos revisar las políticas de privacidad de dichos servicios. No somos responsables de las prácticas de privacidad de terceros.'
        },
        {
          title: '6. Tus derechos',
          content: 'Tienes derecho a:',
          list: [
            'Solicitar información sobre el procesamiento de tus datos',
            'Solicitar la eliminación de cualquier dato que pudiéramos tener',
            'Revocar el acceso a las automatizaciones en cualquier momento',
            'Contactarnos para cualquier duda relacionada con privacidad'
          ]
        },
        {
          title: '7. Cambios en esta política',
          content: 'Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios significativos publicando la nueva política en esta página con una fecha de actualización revisada.'
        },
        {
          title: '8. Contacto',
          content: 'Si tienes preguntas sobre esta Política de Privacidad o sobre nuestras prácticas de datos, puedes contactarnos en:',
          contact: 'davidmarsant@gmail.com'
        }
      ]
    },
    en: {
      title: 'Privacy Policy',
      subtitle: '// privacy.md',
      lastUpdate: 'Last updated: April 2026',
      backHome: 'Back to home',
      sections: [
        {
          title: '1. Introduction',
          content: 'This Privacy Policy describes how David Marquez ("we", "our") handles information in relation to our automation services developed with N8N and other tools. We are committed to protecting your privacy and being transparent about our data practices.'
        },
        {
          title: '2. Information we DO NOT collect',
          content: 'Our automation tools are designed with privacy as a priority. We DO NOT collect, store, or distribute:',
          list: [
            'Personally identifiable data (name, address, phone)',
            'Financial or banking information',
            'Login credentials or passwords',
            'Private message content',
            'Location data',
            'Sensitive information of any kind'
          ]
        },
        {
          title: '3. How automations work',
          content: 'Our N8N automations function as intermediaries that process data in real-time without permanent storage:',
          list: [
            'Data flows through the system and is not saved on our servers',
            'Automations execute specific actions and discard processed information',
            'We do not create user profiles or databases with personal information',
            'Workflows are designed to comply with data minimization principles'
          ]
        },
        {
          title: '4. Security',
          content: 'We implement security measures to protect process integrity:',
          list: [
            'Encrypted connections via HTTPS/SSL',
            'Secure authentication with third-party services',
            'Restricted access to automation workflows',
            'Minimal monitoring and logs necessary for operation'
          ]
        },
        {
          title: '5. Third-party services',
          content: 'Our automations may interact with third-party services (WhatsApp, external APIs, etc.). Each service has its own privacy policy. We recommend reviewing the privacy policies of such services. We are not responsible for third-party privacy practices.'
        },
        {
          title: '6. Your rights',
          content: 'You have the right to:',
          list: [
            'Request information about the processing of your data',
            'Request deletion of any data we may have',
            'Revoke access to automations at any time',
            'Contact us for any privacy-related questions'
          ]
        },
        {
          title: '7. Changes to this policy',
          content: 'We may update this Privacy Policy occasionally. We will notify you of significant changes by posting the new policy on this page with a revised update date.'
        },
        {
          title: '8. Contact',
          content: 'If you have questions about this Privacy Policy or our data practices, you can contact us at:',
          contact: 'davidmarsant@gmail.com'
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <motion.div 
          className="privacy-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <a className="back-link" data-testid="back-home-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
              </svg>
              {t.backHome}
            </a>
          </Link>
          <span className="section-label">{t.subtitle}</span>
          <h1 className="page-title">{t.title}</h1>
          <p className="last-update">{t.lastUpdate}</p>
        </motion.div>

        <motion.div 
          className="privacy-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t.sections.map((section, index) => (
            <div key={index} className="privacy-section">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
              {section.list && (
                <ul>
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section.contact && (
                <a href={`mailto:${section.contact}`} className="contact-email">
                  {section.contact}
                </a>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .privacy-page {
          min-height: 100vh;
          background: #09090B;
          padding: 6rem 1.5rem 4rem;
        }

        .privacy-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .privacy-header {
          margin-bottom: 3rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875rem;
          color: #A1A1AA;
          margin-bottom: 2rem;
          transition: color 0.3s ease;
        }

        .back-link:hover {
          color: #00E5FF;
        }

        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #00E5FF;
          display: block;
          margin-bottom: 0.5rem;
        }

        .page-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #FAFAFA;
          margin: 0 0 1rem 0;
        }

        .last-update {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875rem;
          color: #A1A1AA;
          margin: 0;
        }

        .privacy-content {
          background: #18181B;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 2rem;
        }

        @media (min-width: 768px) {
          .privacy-content {
            padding: 3rem;
          }
        }

        .privacy-section {
          margin-bottom: 2.5rem;
        }

        .privacy-section:last-child {
          margin-bottom: 0;
        }

        .privacy-section h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #FAFAFA;
          margin: 0 0 1rem 0;
        }

        .privacy-section p {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 1rem;
          color: #A1A1AA;
          line-height: 1.7;
          margin: 0 0 1rem 0;
        }

        .privacy-section ul {
          margin: 0;
          padding-left: 1.5rem;
        }

        .privacy-section li {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 1rem;
          color: #A1A1AA;
          line-height: 1.7;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .privacy-section li::marker {
          color: #00E5FF;
        }

        .contact-email {
          display: inline-block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 1rem;
          color: #00E5FF;
          padding: 0.75rem 1.5rem;
          border: 1px solid #00E5FF;
          margin-top: 0.5rem;
          transition: all 0.3s ease;
        }

        .contact-email:hover {
          background: #00E5FF;
          color: #09090B;
        }
      `}</style>
    </div>
  );
};

export default Privacy;
