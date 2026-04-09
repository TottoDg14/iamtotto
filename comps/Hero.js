import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const socials = [
    { name: 'GitHub', href: 'https://github.com/TottoDg14' },
    { name: 'Twitter', href: 'https://twitter.com/TottoDg14' },
    { name: 'Email', href: 'mailto:davidmarsant@gmail.com' },
  ];

  return (
    <section id="hero" className="hero" data-testid="hero-section">
      <div className="hero-bg">
        <img 
          src="https://static.prod-images.emergentagent.com/jobs/33969333-bfdd-4d94-813c-b468782988ae/images/dca4b186d1274cc9752b540d335b8a0160984981cedaba160d9534d1cfee6d34.png" 
          alt="" 
          className="hero-bg-img"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-greeting">{t.hero.greeting}</span>
          <h1 className="hero-name">
            <span>David</span>
            <span className="accent">Marquez</span>
          </h1>
          <p className="hero-role">{t.hero.role}</p>
          <p className="hero-description">{t.hero.description}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary" data-testid="hero-cta">
              {t.hero.cta}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-socials"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {socials.map((social) => (
            <a 
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              data-testid={`hero-social-${social.name.toLowerCase()}`}
              aria-label={social.name}
            >
              {social.name === 'GitHub' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              )}
              {social.name === 'Twitter' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              )}
              {social.name === 'Email' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              )}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="scroll-line"></div>
      </motion.div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 6rem 1.5rem 4rem;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.3;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(9, 9, 11, 0.7) 0%,
            rgba(9, 9, 11, 0.9) 50%,
            rgba(9, 9, 11, 1) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 3rem;
        }

        .hero-greeting {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--accent-primary);
          display: block;
          margin-bottom: 1rem;
        }

        .hero-name {
          font-family: var(--font-heading);
          font-size: clamp(3rem, 12vw, 7rem);
          font-weight: 900;
          line-height: 1;
          margin-bottom: 1rem;
        }

        .hero-name span {
          display: block;
        }

        .hero-name .accent {
          color: var(--accent-primary);
          text-shadow: 0 0 40px rgba(0, 229, 255, 0.3);
        }

        .hero-role {
          font-family: var(--font-mono);
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          padding-left: 1rem;
          border-left: 2px solid var(--accent-primary);
        }

        .hero-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 500px;
          margin-bottom: 2rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 1rem 2rem;
          border: 1px solid var(--accent-primary);
          color: var(--accent-primary);
          background: transparent;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: var(--accent-primary);
          color: var(--bg-primary);
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.4);
        }

        .hero-socials {
          position: fixed;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          z-index: 100;
        }

        .social-link {
          color: var(--text-secondary);
          padding: 0.75rem;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-link:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          transform: translateX(-5px);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
        }

        .scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(
            to bottom,
            var(--accent-primary),
            transparent
          );
          animation: scroll 2s ease-in-out infinite;
        }

        @keyframes scroll {
          0%, 100% {
            transform: scaleY(0);
            transform-origin: top;
          }
          50% {
            transform: scaleY(1);
            transform-origin: top;
          }
          51% {
            transform-origin: bottom;
          }
          100% {
            transform: scaleY(0);
            transform-origin: bottom;
          }
        }

        @media (max-width: 767px) {
          .hero-socials {
            position: relative;
            right: auto;
            top: auto;
            transform: none;
            flex-direction: row;
          }

          .social-link:hover {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
