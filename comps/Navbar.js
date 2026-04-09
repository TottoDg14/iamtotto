import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);

const Navbar = () => {
  const { lang, toggleLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#hero', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav 
      data-testid="navbar"
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-container">
        <Link href="/">
          <a className="logo" data-testid="nav-logo">
            <span className="logo-bracket">&lt;</span>
            DM
            <span className="logo-bracket">/&gt;</span>
          </a>
        </Link>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              className="nav-link"
              data-testid={`nav-link-${item.href.slice(1)}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button 
            className="lang-toggle"
            onClick={toggleLang}
            data-testid="lang-toggle-button"
            aria-label="Toggle language"
          >
            <span className={lang === 'es' ? 'active' : ''}>ES</span>
            <span className="separator">/</span>
            <span className={lang === 'en' ? 'active' : ''}>EN</span>
          </button>

          <button 
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(9, 9, 11, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          transition: color 0.3s ease;
        }

        .logo:hover {
          color: var(--accent-primary);
        }

        .logo-bracket {
          color: var(--accent-primary);
        }

        .nav-links {
          display: none;
          gap: 2rem;
        }

        .nav-link {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-primary);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: var(--accent-primary);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .lang-toggle {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          padding: 0.5rem 0.75rem;
          border: 1px solid var(--border);
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .lang-toggle:hover {
          border-color: var(--accent-primary);
        }

        .lang-toggle .active {
          color: var(--accent-primary);
        }

        .lang-toggle .separator {
          margin: 0 0.25rem;
        }

        .menu-toggle {
          display: flex;
          color: var(--text-primary);
        }

        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }

          .menu-toggle {
            display: none;
          }

          .nav-links.open {
            display: flex;
          }
        }

        @media (max-width: 767px) {
          .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: rgba(9, 9, 11, 0.95);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            border-bottom: 1px solid var(--border);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .nav-links.open {
            display: flex;
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-link {
            font-size: 1rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
