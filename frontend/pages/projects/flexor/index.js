import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import Link from 'next/link';
import Head from 'next/head';

const Flexor = () => {
  const { lang } = useLanguage();

  const content = {
    es: {
      title: 'Flexor',
      subtitle: '// flexor.bot',
      tagline: 'Gestión inteligente de entregas',
      description: 'Bot de Telegram para empresas de envíos en Argentina. Automatiza el registro de entregas, controla despachos y genera métricas de desempeño de carriers.',
      backHome: 'Volver al inicio',
      features: {
        title: 'Características',
        items: [
          {
            icon: 'camera',
            title: 'Registro con foto',
            description: 'Los carriers pueden registrar entregas enviando una foto como comprobante junto con los datos del envío.'
          },
          {
            icon: 'message',
            title: 'Interfaz conversacional',
            description: 'Interacción simple y directa a través de Telegram. Sin apps adicionales, sin curva de aprendizaje.'
          },
          {
            icon: 'chart',
            title: 'Métricas de desempeño',
            description: 'Dashboards con estadísticas de entregas, tiempos promedio y rendimiento por carrier.'
          },
          {
            icon: 'wallet',
            title: 'Conciliación de pagos',
            description: 'Control ordenado de despachos para facilitar la liquidación y pago a los carriers.'
          },
          {
            icon: 'clock',
            title: 'Registro en tiempo real',
            description: 'Cada entrega se registra al instante, permitiendo seguimiento en vivo de las operaciones.'
          },
          {
            icon: 'shield',
            title: 'Datos seguros',
            description: 'Procesamiento seguro de la información. No almacenamos datos sensibles innecesarios.'
          }
        ]
      },
      howItWorks: {
        title: 'Cómo funciona',
        steps: [
          {
            number: '01',
            title: 'Carrier inicia chat',
            description: 'El repartidor abre el bot de Telegram y se identifica con su código de carrier.'
          },
          {
            number: '02',
            title: 'Registra la entrega',
            description: 'Envía los datos del paquete: número de seguimiento, destinatario y observaciones.'
          },
          {
            number: '03',
            title: 'Adjunta comprobante',
            description: 'Toma una foto del paquete entregado o de la firma del receptor como evidencia.'
          },
          {
            number: '04',
            title: 'Confirmación automática',
            description: 'El sistema procesa la información, actualiza el estado y notifica a quien corresponda.'
          }
        ]
      },
      techStack: {
        title: 'Tecnologías',
        items: ['Telegram Bot API', 'N8N', 'PostgreSQL', 'Node.js', 'Cloud Storage']
      },
      cta: {
        title: '¿Interesado en Flexor?',
        description: 'Si tu empresa de logística necesita una solución similar, contáctame para discutir tu proyecto.',
        button: 'Contactar'
      },
      privacy: {
        text: 'Este proyecto cumple con nuestra',
        link: 'Política de Privacidad'
      }
    },
    en: {
      title: 'Flexor',
      subtitle: '// flexor.bot',
      tagline: 'Smart delivery management',
      description: 'Telegram bot for shipping companies in Argentina. Automates delivery registration, controls dispatches and generates carrier performance metrics.',
      backHome: 'Back to home',
      features: {
        title: 'Features',
        items: [
          {
            icon: 'camera',
            title: 'Photo registration',
            description: 'Carriers can register deliveries by sending a photo as proof along with shipment data.'
          },
          {
            icon: 'message',
            title: 'Conversational interface',
            description: 'Simple and direct interaction through Telegram. No additional apps, no learning curve.'
          },
          {
            icon: 'chart',
            title: 'Performance metrics',
            description: 'Dashboards with delivery statistics, average times and performance by carrier.'
          },
          {
            icon: 'wallet',
            title: 'Payment reconciliation',
            description: 'Organized dispatch control to facilitate carrier settlement and payment.'
          },
          {
            icon: 'clock',
            title: 'Real-time registration',
            description: 'Each delivery is recorded instantly, allowing live tracking of operations.'
          },
          {
            icon: 'shield',
            title: 'Secure data',
            description: 'Secure information processing. We do not store unnecessary sensitive data.'
          }
        ]
      },
      howItWorks: {
        title: 'How it works',
        steps: [
          {
            number: '01',
            title: 'Carrier starts chat',
            description: 'The delivery person opens the Telegram bot and identifies with their carrier code.'
          },
          {
            number: '02',
            title: 'Registers delivery',
            description: 'Sends package data: tracking number, recipient and observations.'
          },
          {
            number: '03',
            title: 'Attaches proof',
            description: 'Takes a photo of the delivered package or recipient signature as evidence.'
          },
          {
            number: '04',
            title: 'Automatic confirmation',
            description: 'The system processes the information, updates the status and notifies accordingly.'
          }
        ]
      },
      techStack: {
        title: 'Technologies',
        items: ['Telegram Bot API', 'N8N', 'PostgreSQL', 'Node.js', 'Cloud Storage']
      },
      cta: {
        title: 'Interested in Flexor?',
        description: 'If your logistics company needs a similar solution, contact me to discuss your project.',
        button: 'Contact'
      },
      privacy: {
        text: 'This project complies with our',
        link: 'Privacy Policy'
      }
    }
  };

  const t = content[lang];

  const icons = {
    camera: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
        <circle cx="12" cy="13" r="3"/>
      </svg>
    ),
    message: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    chart: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>
      </svg>
    ),
    wallet: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>
      </svg>
    ),
    clock: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    shield: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>
      </svg>
    )
  };

  return (
    <>
      <Head>
        <title>Flexor - Bot de Gestión de Entregas | David Marquez</title>
        <meta name="description" content="Bot de Telegram para empresas de envíos. Automatiza registro de entregas, control de despachos y métricas de carriers." />
      </Head>

      <div className="flexor-page">
        {/* Hero Section */}
        <section className="flexor-hero">
          <div className="flexor-container">
            <Link href="/">
              <a className="back-link" data-testid="back-home-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
                </svg>
                {t.backHome}
              </a>
            </Link>

            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">{t.subtitle}</span>
              <h1 className="hero-title">{t.title}</h1>
              <p className="hero-tagline">{t.tagline}</p>
              <p className="hero-description">{t.description}</p>
              
              <div className="hero-tags">
                {['Telegram', 'N8N', 'Argentina'].map(tag => (
                  <span key={tag} className="hero-tag">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="hero-visual"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="phone-mockup">
                <div className="phone-header">
                  <span className="telegram-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </span>
                  <span>Flexor Bot</span>
                </div>
                <div className="phone-chat">
                  <div className="chat-message bot">
                    <p>¡Hola! Soy Flexor. Envía el número de seguimiento para registrar tu entrega.</p>
                  </div>
                  <div className="chat-message user">
                    <p>ARG-2024-58742</p>
                  </div>
                  <div className="chat-message bot">
                    <p>Perfecto. Ahora envía una foto del paquete entregado.</p>
                  </div>
                  <div className="chat-message user photo">
                    <div className="photo-placeholder">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                        <circle cx="9" cy="9" r="2"/>
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                      </svg>
                    </div>
                  </div>
                  <div className="chat-message bot success">
                    <p>✓ Entrega registrada correctamente</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="flexor-features">
          <div className="flexor-container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t.features.title}
            </motion.h2>

            <div className="features-grid">
              {t.features.items.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="feature-icon">{icons[feature.icon]}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="flexor-how">
          <div className="flexor-container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t.howItWorks.title}
            </motion.h2>

            <div className="steps-grid">
              {t.howItWorks.steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="step-card"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="flexor-tech">
          <div className="flexor-container">
            <h3 className="tech-title">{t.techStack.title}</h3>
            <div className="tech-items">
              {t.techStack.items.map(item => (
                <span key={item} className="tech-item">{item}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="flexor-cta">
          <div className="flexor-container">
            <motion.div 
              className="cta-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>{t.cta.title}</h2>
              <p>{t.cta.description}</p>
              <p className="privacy-note">
                {t.privacy.text}{' '}
                <Link href="/projects/flexor/privacy">
                  <a className="privacy-link">{t.privacy.link}</a>
                </Link>
              </p>
              <a href="mailto:davidmarsant@gmail.com" className="cta-button">
                {t.cta.button}
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        .flexor-page {
          background: #09090B;
          min-height: 100vh;
        }

        .flexor-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
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

        /* Hero */
        .flexor-hero {
          padding: 6rem 0 4rem;
        }

        .flexor-hero .flexor-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 1024px) {
          .flexor-hero .flexor-container {
            grid-template-columns: 1fr 1fr;
            align-items: center;
          }

          .back-link {
            grid-column: span 2;
          }
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

        .hero-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 900;
          color: #FAFAFA;
          margin: 0 0 0.5rem 0;
        }

        .hero-tagline {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #00E5FF;
          margin: 0 0 1.5rem 0;
        }

        .hero-description {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 1.125rem;
          color: #A1A1AA;
          line-height: 1.7;
          margin: 0 0 2rem 0;
          max-width: 500px;
        }

        .hero-tags {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .hero-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          text-transform: uppercase;
          padding: 0.5rem 1rem;
          background: #18181B;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #00E5FF;
        }

        /* Phone Mockup */
        .phone-mockup {
          background: #18181B;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          overflow: hidden;
          max-width: 350px;
          margin: 0 auto;
        }

        .phone-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: #0088cc;
          color: white;
          font-family: 'IBM Plex Sans', sans-serif;
          font-weight: 600;
        }

        .telegram-icon {
          display: flex;
        }

        .phone-chat {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          min-height: 300px;
        }

        .chat-message {
          max-width: 80%;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.875rem;
        }

        .chat-message p {
          margin: 0;
        }

        .chat-message.bot {
          background: #262626;
          color: #FAFAFA;
          align-self: flex-start;
          border-bottom-left-radius: 4px;
        }

        .chat-message.user {
          background: #0088cc;
          color: white;
          align-self: flex-end;
          border-bottom-right-radius: 4px;
        }

        .chat-message.success {
          background: rgba(40, 200, 64, 0.2);
          border: 1px solid #28c840;
          color: #28c840;
        }

        .photo-placeholder {
          width: 100px;
          height: 80px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.5);
        }

        /* Features */
        .flexor-features {
          padding: 4rem 0;
          background: #18181B;
        }

        .section-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #FAFAFA;
          margin: 0 0 3rem 0;
          text-align: center;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .feature-card {
          padding: 2rem;
          background: #09090B;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          border-color: rgba(0, 229, 255, 0.5);
          transform: translateY(-4px);
        }

        .feature-card:hover .feature-icon {
          color: #00E5FF;
        }

        .feature-icon {
          color: #A1A1AA;
          margin-bottom: 1rem;
          transition: color 0.3s ease;
        }

        .feature-card h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.125rem;
          font-weight: 700;
          color: #FAFAFA;
          margin: 0 0 0.75rem 0;
        }

        .feature-card p {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.875rem;
          color: #A1A1AA;
          line-height: 1.6;
          margin: 0;
        }

        /* How it works */
        .flexor-how {
          padding: 4rem 0;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .steps-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .step-card {
          padding: 1.5rem;
          border-left: 2px solid #00E5FF;
        }

        .step-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 2rem;
          font-weight: 700;
          color: #00E5FF;
          opacity: 0.5;
          display: block;
          margin-bottom: 0.5rem;
        }

        .step-card h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #FAFAFA;
          margin: 0 0 0.5rem 0;
        }

        .step-card p {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.875rem;
          color: #A1A1AA;
          line-height: 1.6;
          margin: 0;
        }

        /* Tech */
        .flexor-tech {
          padding: 3rem 0;
          background: #18181B;
        }

        .tech-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #A1A1AA;
          margin: 0 0 1.5rem 0;
          text-align: center;
        }

        .tech-items {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .tech-item {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875rem;
          padding: 0.75rem 1.5rem;
          background: #09090B;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #FAFAFA;
          transition: all 0.3s ease;
        }

        .tech-item:hover {
          border-color: #00E5FF;
          color: #00E5FF;
        }

        /* CTA */
        .flexor-cta {
          padding: 6rem 0;
        }

        .cta-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #FAFAFA;
          margin: 0 0 1rem 0;
        }

        .cta-content > p {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 1.125rem;
          color: #A1A1AA;
          line-height: 1.7;
          margin: 0 0 2rem 0;
        }

        .cta-button {
          display: inline-block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 1rem 2.5rem;
          background: #00E5FF;
          color: #09090B;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          box-shadow: 0 0 30px rgba(0, 229, 255, 0.5);
          transform: translateY(-2px);
        }

        .privacy-note {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.875rem;
          color: #A1A1AA;
          margin: 2rem 0 0 0;
        }

        .privacy-link {
          color: #00E5FF;
          text-decoration: underline;
        }

        .privacy-link:hover {
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default Flexor;
