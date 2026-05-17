import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import Head from 'next/head';

const Terms = () => {
  const { lang } = useLanguage();

  const content = {
    es: {
      title: 'Condiciones del Servicio',
      subtitle: '// terminos.md',
      lastUpdate: 'Última actualización: Abril 2026',
      backHome: 'Volver al inicio',
      sections: [
        {
          title: '1. Aceptación de los términos',
          content: 'Al acceder y utilizar los servicios de automatización desarrollados por David Marquez ("nosotros", "nuestro"), incluyendo bots de Telegram, flujos de N8N y otras herramientas, aceptas estar sujeto a estas Condiciones del Servicio. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.'
        },
        {
          title: '2. Descripción de los servicios',
          content: 'Proporcionamos servicios de automatización que incluyen:',
          list: [
            'Bots de mensajería (Telegram, WhatsApp) para gestión de datos',
            'Flujos de automatización con N8N',
            'Integraciones con sistemas de terceros',
            'Procesamiento y registro de información en tiempo real',
            'Generación de reportes y métricas'
          ]
        },
        {
          title: '3. Uso aceptable',
          content: 'Al utilizar nuestros servicios, te comprometes a:',
          list: [
            'Proporcionar información veraz y actualizada',
            'No utilizar los servicios para fines ilegales o no autorizados',
            'No intentar acceder a áreas restringidas del sistema',
            'No interferir con el funcionamiento normal de las automatizaciones',
            'Cumplir con todas las leyes y regulaciones aplicables',
            'No compartir credenciales de acceso con terceros no autorizados'
          ]
        },
        {
          title: '4. Responsabilidades del usuario',
          content: 'El usuario es responsable de:',
          list: [
            'La veracidad de los datos ingresados en el sistema',
            'Mantener la confidencialidad de sus credenciales de acceso',
            'El uso que sus empleados o colaboradores hagan del servicio',
            'Notificar cualquier uso no autorizado o brecha de seguridad',
            'Realizar copias de seguridad de su información crítica'
          ]
        },
        {
          title: '5. Disponibilidad del servicio',
          content: 'Nos esforzamos por mantener los servicios disponibles de manera continua. Sin embargo, no garantizamos disponibilidad ininterrumpida. Podemos suspender temporalmente el servicio para mantenimiento, actualizaciones o por circunstancias fuera de nuestro control. Notificaremos con anticipación cuando sea posible.'
        },
        {
          title: '6. Propiedad intelectual',
          content: 'Todos los derechos de propiedad intelectual sobre el software, código, diseños, flujos de automatización y documentación son propiedad de David Marquez. Se otorga una licencia limitada, no exclusiva y revocable para utilizar los servicios según estos términos. No está permitido copiar, modificar, distribuir o realizar ingeniería inversa de nuestras soluciones.'
        },
        {
          title: '7. Limitación de responsabilidad',
          content: 'En la máxima medida permitida por la ley:',
          list: [
            'Los servicios se proporcionan "tal cual" sin garantías de ningún tipo',
            'No somos responsables por daños indirectos, incidentales o consecuentes',
            'No garantizamos que los servicios cumplan todos los requisitos específicos del usuario',
            'La responsabilidad total estará limitada al monto pagado por los servicios'
          ]
        },
        {
          title: '8. Confidencialidad',
          content: 'Nos comprometemos a mantener la confidencialidad de la información procesada a través de nuestros servicios. No divulgaremos información a terceros excepto cuando sea requerido por ley o con tu consentimiento expreso. Para más detalles, consulta nuestra Política de Privacidad.'
        },
        {
          title: '9. Terminación',
          content: 'Cualquiera de las partes puede terminar el uso de los servicios:',
          list: [
            'El usuario puede dejar de usar los servicios en cualquier momento',
            'Podemos suspender o terminar el acceso por incumplimiento de estos términos',
            'Tras la terminación, cesarán todos los derechos de uso',
            'Las disposiciones sobre confidencialidad y limitación de responsabilidad sobrevivirán'
          ]
        },
        {
          title: '10. Modificaciones',
          content: 'Nos reservamos el derecho de modificar estas Condiciones del Servicio en cualquier momento. Los cambios entrarán en vigor al publicarse en esta página. El uso continuado de los servicios después de los cambios constituye aceptación de los nuevos términos.'
        },
        {
          title: '11. Ley aplicable',
          content: 'Estas condiciones se rigen por las leyes de la República Bolivariana de Venezuela. Cualquier disputa será sometida a los tribunales competentes de dicha jurisdicción.'
        },
        {
          title: '12. Contacto',
          content: 'Para cualquier pregunta sobre estas Condiciones del Servicio, puedes contactarnos en:',
          contact: 'davidmarsant@gmail.com'
        }
      ]
    },
    en: {
      title: 'Terms of Service',
      subtitle: '// terms.md',
      lastUpdate: 'Last updated: April 2026',
      backHome: 'Back to home',
      sections: [
        {
          title: '1. Acceptance of terms',
          content: 'By accessing and using the automation services developed by David Marquez ("we", "our"), including Telegram bots, N8N workflows and other tools, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our services.'
        },
        {
          title: '2. Description of services',
          content: 'We provide automation services that include:',
          list: [
            'Messaging bots (Telegram, WhatsApp) for data management',
            'Automation workflows with N8N',
            'Integrations with third-party systems',
            'Real-time information processing and registration',
            'Report and metrics generation'
          ]
        },
        {
          title: '3. Acceptable use',
          content: 'By using our services, you agree to:',
          list: [
            'Provide truthful and up-to-date information',
            'Not use the services for illegal or unauthorized purposes',
            'Not attempt to access restricted areas of the system',
            'Not interfere with the normal operation of automations',
            'Comply with all applicable laws and regulations',
            'Not share access credentials with unauthorized third parties'
          ]
        },
        {
          title: '4. User responsibilities',
          content: 'The user is responsible for:',
          list: [
            'The accuracy of data entered into the system',
            'Maintaining the confidentiality of their access credentials',
            'The use that their employees or collaborators make of the service',
            'Notifying any unauthorized use or security breach',
            'Making backup copies of their critical information'
          ]
        },
        {
          title: '5. Service availability',
          content: 'We strive to keep services available continuously. However, we do not guarantee uninterrupted availability. We may temporarily suspend the service for maintenance, updates or due to circumstances beyond our control. We will notify in advance when possible.'
        },
        {
          title: '6. Intellectual property',
          content: 'All intellectual property rights over software, code, designs, automation workflows and documentation are owned by David Marquez. A limited, non-exclusive and revocable license is granted to use the services according to these terms. Copying, modifying, distributing or reverse engineering our solutions is not permitted.'
        },
        {
          title: '7. Limitation of liability',
          content: 'To the maximum extent permitted by law:',
          list: [
            'Services are provided "as is" without warranties of any kind',
            'We are not liable for indirect, incidental or consequential damages',
            'We do not guarantee that services will meet all specific user requirements',
            'Total liability will be limited to the amount paid for services'
          ]
        },
        {
          title: '8. Confidentiality',
          content: 'We commit to maintaining the confidentiality of information processed through our services. We will not disclose information to third parties except when required by law or with your express consent. For more details, see our Privacy Policy.'
        },
        {
          title: '9. Termination',
          content: 'Either party may terminate the use of services:',
          list: [
            'The user may stop using the services at any time',
            'We may suspend or terminate access for breach of these terms',
            'Upon termination, all usage rights will cease',
            'Provisions on confidentiality and limitation of liability will survive'
          ]
        },
        {
          title: '10. Modifications',
          content: 'We reserve the right to modify these Terms of Service at any time. Changes will take effect upon posting on this page. Continued use of services after changes constitutes acceptance of the new terms.'
        },
        {
          title: '11. Governing law',
          content: 'These terms are governed by the laws of the Bolivarian Republic of Venezuela. Any dispute will be submitted to the competent courts of said jurisdiction.'
        },
        {
          title: '12. Contact',
          content: 'For any questions about these Terms of Service, you can contact us at:',
          contact: 'davidmarsant@gmail.com'
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <>
      <Head>
        <title>{t.title} | David Marquez</title>
        <meta name="description" content={lang === 'es' ? 'Condiciones del servicio para las automatizaciones y servicios de David Marquez' : 'Terms of service for David Marquez automations and services'} />
      </Head>

      <div className="terms-page">
        <div className="terms-container">
          <motion.div 
            className="terms-header"
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
            className="terms-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.sections.map((section, index) => (
              <div key={index} className="terms-section">
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

          <motion.div 
            className="related-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>{lang === 'es' ? 'Ver también:' : 'See also:'}</p>
            <Link href="/privacy">
              <a className="related-link">
                {lang === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
              </a>
            </Link>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .terms-page {
          min-height: 100vh;
          background: #09090B;
          padding: 6rem 1.5rem 4rem;
        }

        .terms-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .terms-header {
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

        .terms-content {
          background: #18181B;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 2rem;
        }

        @media (min-width: 768px) {
          .terms-content {
            padding: 3rem;
          }
        }

        .terms-section {
          margin-bottom: 2.5rem;
        }

        .terms-section:last-child {
          margin-bottom: 0;
        }

        .terms-section h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #FAFAFA;
          margin: 0 0 1rem 0;
        }

        .terms-section p {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 1rem;
          color: #A1A1AA;
          line-height: 1.7;
          margin: 0 0 1rem 0;
        }

        .terms-section ul {
          margin: 0;
          padding-left: 1.5rem;
        }

        .terms-section li {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 1rem;
          color: #A1A1AA;
          line-height: 1.7;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .terms-section li::marker {
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

        .related-links {
          margin-top: 2rem;
          padding: 1.5rem;
          background: #18181B;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .related-links p {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875rem;
          color: #A1A1AA;
          margin: 0;
        }

        .related-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875rem;
          color: #00E5FF;
          padding: 0.5rem 1rem;
          border: 1px solid rgba(0, 229, 255, 0.3);
          transition: all 0.3s ease;
        }

        .related-link:hover {
          border-color: #00E5FF;
          background: rgba(0, 229, 255, 0.1);
        }
      `}</style>
    </>
  );
};

export default Terms;
