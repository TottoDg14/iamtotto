import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const icons = [
  // Code icon
  <svg key="code" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  // Server icon
  <svg key="server" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>,
  // Smartphone icon
  <svg key="smartphone" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>,
  // Plug icon
  <svg key="plug" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/></svg>,
  // Zap icon
  <svg key="zap" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  // MessageSquare icon
  <svg key="message" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="services" data-testid="services-section">
      <div className="container">
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
                {icons[index]}
              </div>
              <div className="service-number">0{index + 1}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services {
          padding: 8rem 0;
          background: var(--bg-surface);
        }

        .section-header {
          margin-bottom: 4rem;
        }

        .section-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--accent-primary);
          display: block;
          margin-bottom: 0.5rem;
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: var(--text-primary);
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
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
          background: var(--bg-primary);
          position: relative;
          transition: all 0.3s ease;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-primary);
          transition: width 0.3s ease;
        }

        .service-card:hover {
          background: rgba(0, 229, 255, 0.03);
        }

        .service-card:hover::before {
          width: 100%;
        }

        .service-card:hover .service-icon {
          color: var(--accent-primary);
          transform: scale(1.1);
        }

        .service-icon {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .service-number {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-primary);
          opacity: 0.5;
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
        }

        .service-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .service-description {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }
      `}</style>
    </section>
  );
};

export default Services;
