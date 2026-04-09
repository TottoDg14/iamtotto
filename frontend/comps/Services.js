import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ServiceIcon = ({ type }) => {
  const icons = {
    code: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    server: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>
      </svg>
    ),
    smartphone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
      </svg>
    ),
    cloud: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
    ),
    database: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>
      </svg>
    ),
    settings: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    )
  };
  return icons[type] || icons.code;
};

const iconTypes = ['code', 'server', 'smartphone', 'cloud', 'database', 'settings'];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="services" data-testid="services-section">
      <div className="services-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">{t.services.subtitle}</span>
          <h2 className="section-title">{t.services.title}</h2>
        </motion.div>

        <div className="services-grid">
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              data-testid={`service-card-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-icon">
                <ServiceIcon type={iconTypes[index]} />
              </div>
              <span className="service-number">0{index + 1}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .services {
          padding: 6rem 0;
          background: #18181B;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .services .section-header {
          margin-bottom: 3rem;
        }

        .services .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #00E5FF;
          display: block;
          margin-bottom: 0.5rem;
        }

        .services .section-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #FAFAFA;
          margin: 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .service-card {
          padding: 2rem;
          background: #09090B;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          position: relative;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          border-color: rgba(0, 229, 255, 0.5);
          background: rgba(0, 229, 255, 0.03);
          transform: translateY(-4px);
        }

        .service-card:hover .service-icon {
          color: #00E5FF;
        }

        .service-icon {
          color: #A1A1AA;
          margin-bottom: 1.5rem;
          transition: color 0.3s ease;
          display: flex;
        }

        .service-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: #00E5FF;
          opacity: 0.5;
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
        }

        .service-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #FAFAFA;
          margin: 0 0 0.75rem 0;
        }

        .service-description {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.875rem;
          color: #A1A1AA;
          line-height: 1.7;
          margin: 0;
        }
      `}</style>
    </section>
  );
};

export default Services;
