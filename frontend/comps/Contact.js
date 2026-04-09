import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// Icons as SVG components
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7h10v10"/>
    <path d="M7 17 17 7"/>
  </svg>
);

const Contact = () => {
  const { t } = useLanguage();

  const contactLinks = [
    { 
      icon: MailIcon, 
      label: t.contact.email, 
      href: 'mailto:davidmarsant@gmail.com',
      value: 'davidmarsant@gmail.com'
    },
    { 
      icon: GithubIcon, 
      label: 'GitHub', 
      href: 'https://github.com/TottoDg14',
      value: '@TottoDg14'
    },
    { 
      icon: TwitterIcon, 
      label: 'Twitter', 
      href: 'https://twitter.com/TottoDg14',
      value: '@TottoDg14'
    }
  ];

  return (
    <section id="contact" className="contact" data-testid="contact-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">{t.contact.subtitle}</span>
          <h2 className="section-title">{t.contact.title}</h2>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="cta-title">{t.contact.cta}</h3>
            <p className="cta-description">{t.contact.description}</p>
          </motion.div>

          <motion.div 
            className="contact-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {contactLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a 
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-link"
                  data-testid={`contact-${link.label.toLowerCase().replace(/\s/g, '-')}-link`}
                >
                  <span className="link-icon">
                    <IconComponent />
                  </span>
                  <span className="link-content">
                    <span className="link-label">{link.label}</span>
                    <span className="link-value">{link.value}</span>
                  </span>
                  <span className="link-arrow">
                    <ArrowUpRightIcon />
                  </span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact {
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

        .contact-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }

        @media (min-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr 1fr;
            align-items: start;
          }
        }

        .cta-title {
          font-family: var(--font-heading);
          font-size: clamp(3rem, 10vw, 6rem);
          font-weight: 900;
          color: var(--text-primary);
          line-height: 1;
          margin-bottom: 1.5rem;
        }

        .cta-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 400px;
          line-height: 1.7;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          border: 1px solid var(--border);
          background: var(--bg-primary);
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          border-color: var(--accent-primary);
          background: rgba(0, 229, 255, 0.03);
        }

        .contact-link:hover .link-icon {
          color: var(--accent-primary);
          transform: scale(1.1);
        }

        .contact-link:hover .link-arrow {
          color: var(--accent-primary);
          transform: translate(3px, -3px);
        }

        .link-icon {
          color: var(--text-secondary);
          transition: all 0.3s ease;
          display: flex;
        }

        .link-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .link-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-primary);
        }

        .link-value {
          font-family: var(--font-heading);
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .link-arrow {
          color: var(--text-secondary);
          transition: all 0.3s ease;
          display: flex;
        }
      `}</style>
    </section>
  );
};

export default Contact;
