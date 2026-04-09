import { useLanguage } from '../context/LanguageContext';

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="heart-icon">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" data-testid="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo-bracket">&lt;</span>
            DM
            <span className="logo-bracket">/&gt;</span>
          </div>
          
          <p className="footer-text">
            {t.footer.made} <HeartIcon /> {t.footer.by}
          </p>
          
          <p className="footer-rights">
            © {currentYear} David Marquez. {t.footer.rights}.
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          padding: 3rem 0;
          background: var(--bg-primary);
          border-top: 1px solid var(--border);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }

        .footer-brand {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .logo-bracket {
          color: var(--accent-primary);
        }

        .footer-text {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-text :global(.heart-icon) {
          color: var(--accent-secondary);
          animation: pulse 1.5s ease infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .footer-rights {
          font-size: 0.75rem;
          color: var(--text-secondary);
          opacity: 0.6;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
