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

          <div className="hero-socials-mobile">
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
          </div>
        </motion.div>

        {/* Code Animation / Image Section */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="code-window">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="file-name">developer.js</span>
            </div>
            <div className="code-body">
              <pre>
                <code>
{`const developer = {
  name: "David Marquez",
  role: "Full Stack Developer",
  experience: "8+ years",
  
  skills: {
    backend: ["Java", "Node.js", 
      "PHP", "Express"],
    frontend: ["React", "Next.js", 
      "React Native"],
    database: ["PostgreSQL", 
      "MySQL", "Prisma"],
    devops: ["Kubernetes", 
      "Docker", "AWS"]
  },
  
  passion: "Building solutions"
};`}
                </code>
              </pre>
              <div className="cursor"></div>
            </div>
          </div>
        </motion.div>

        <div className="hero-socials-desktop">
          {socials.map((social) => (
            <a 
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
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
        </div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="scroll-line"></div>
      </motion.div>

      <style jsx global>{`
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
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr 1fr;
          }
        }

        .hero-greeting {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #00E5FF;
          display: block;
          margin-bottom: 1rem;
        }

        .hero-name {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.5rem, 10vw, 5rem);
          font-weight: 900;
          line-height: 1;
          margin: 0 0 1rem 0;
          color: #FAFAFA;
        }

        .hero-name span {
          display: block;
        }

        .hero-name .accent {
          color: #00E5FF;
          text-shadow: 0 0 40px rgba(0, 229, 255, 0.3);
        }

        .hero-role {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1rem;
          color: #A1A1AA;
          margin: 0 0 1.5rem 0;
          padding-left: 1rem;
          border-left: 2px solid #00E5FF;
        }

        .hero-description {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 1.125rem;
          color: #A1A1AA;
          max-width: 500px;
          margin: 0 0 2rem 0;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 1rem 2rem;
          border: 1px solid #00E5FF;
          color: #00E5FF;
          background: transparent;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-primary:hover {
          background: #00E5FF;
          color: #09090B;
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.4);
        }

        /* Code Window Visual */
        .hero-visual {
          display: none;
        }

        @media (min-width: 1024px) {
          .hero-visual {
            display: block;
          }
        }

        .code-window {
          background: #18181B;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .code-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dot.red { background: #ff5f57; }
        .dot.yellow { background: #febc2e; }
        .dot.green { background: #28c840; }

        .file-name {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: #A1A1AA;
          margin-left: auto;
        }

        .code-body {
          padding: 1.5rem;
          position: relative;
        }

        .code-body pre {
          margin: 0;
          overflow: hidden;
        }

        .code-body code {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          line-height: 1.6;
          color: #A1A1AA;
          white-space: pre;
        }

        .cursor {
          display: inline-block;
          width: 8px;
          height: 16px;
          background: #00E5FF;
          animation: blink 1s infinite;
          position: absolute;
          bottom: 1.5rem;
          margin-left: 4px;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        /* Social Links */
        .hero-socials-mobile {
          display: flex;
          gap: 1rem;
        }

        .hero-socials-desktop {
          position: fixed;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          display: none;
          flex-direction: column;
          gap: 1.5rem;
          z-index: 100;
        }

        @media (min-width: 1024px) {
          .hero-socials-mobile {
            display: none;
          }
          .hero-socials-desktop {
            display: flex;
          }
        }

        .social-link {
          color: #A1A1AA;
          padding: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-link:hover {
          color: #00E5FF;
          border-color: #00E5FF;
          transform: translateX(-5px);
        }

        .hero-socials-mobile .social-link:hover {
          transform: translateY(-5px);
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
            #00E5FF,
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
      `}</style>
    </section>
  );
};

export default Hero;
