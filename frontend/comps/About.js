import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const techStack = {
  backend: ['Java', 'Node.js', 'Express', 'PHP', 'Symfony', 'iDempiere'],
  frontend: ['React', 'Next.js', 'React Native', 'Expo'],
  database: ['PostgreSQL', 'MySQL', 'Prisma', 'JasperSoft'],
  devops: ['Kubernetes', 'Docker', 'AWS', 'Git']
};

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about" data-testid="about-section">
      <div className="about-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">{t.about.subtitle}</span>
          <h2 className="section-title">{t.about.title}</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div 
            className="about-bio"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="terminal">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">about.md</span>
              </div>
              <div className="terminal-body">
                <p className="terminal-line">
                  <span className="prompt">$</span> cat bio.txt
                </p>
                <p className="terminal-output">{t.about.bio}</p>
                <p className="terminal-line">
                  <span className="prompt">$</span> cat learning.md
                </p>
                <p className="terminal-label">{t.about.learning}:</p>
                <ul className="terminal-list">
                  {t.about.learningItems.map((item, i) => (
                    <li key={i}>
                      <span className="list-marker">-</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-tech"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="tech-title">{t.about.techStack}</h3>
            <div className="tech-grid">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category} className="tech-category">
                  <span className="tech-label">{`// ${category}`}</span>
                  <div className="tech-items">
                    {items.map((item) => (
                      <span key={item} className="tech-item" data-testid={`tech-${item.toLowerCase().replace(/\s/g, '-')}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .about {
          padding: 6rem 0;
          background: #09090B;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .about .section-header {
          margin-bottom: 3rem;
        }

        .about .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #00E5FF;
          display: block;
          margin-bottom: 0.5rem;
        }

        .about .section-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #FAFAFA;
          margin: 0;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
        }

        .terminal {
          background: #18181B;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          overflow: hidden;
        }

        .terminal-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .terminal-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .terminal-dot.red { background: #ff5f57; }
        .terminal-dot.yellow { background: #febc2e; }
        .terminal-dot.green { background: #28c840; }

        .terminal-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: #A1A1AA;
          margin-left: auto;
        }

        .terminal-body {
          padding: 1.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875rem;
          line-height: 1.8;
        }

        .terminal-line {
          color: #FAFAFA;
          margin: 0 0 0.5rem 0;
        }

        .prompt {
          color: #00E5FF;
          margin-right: 0.5rem;
        }

        .terminal-output {
          color: #A1A1AA;
          margin: 0 0 1.5rem 0;
          padding-left: 1rem;
          border-left: 2px solid rgba(255, 255, 255, 0.1);
        }

        .terminal-label {
          color: #FF3366;
          margin: 0 0 0.5rem 0;
        }

        .terminal-list {
          color: #A1A1AA;
          padding-left: 1rem;
          margin: 0;
          list-style: none;
        }

        .terminal-list li {
          margin-bottom: 0.5rem;
        }

        .list-marker {
          color: #00E5FF;
          margin-right: 0.5rem;
        }

        .tech-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #A1A1AA;
          margin: 0 0 2rem 0;
        }

        .tech-grid {
          display: grid;
          gap: 2rem;
        }

        .tech-category {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .tech-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: #00E5FF;
          text-transform: lowercase;
        }

        .tech-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-item {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          padding: 0.5rem 1rem;
          background: #18181B;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #FAFAFA;
          transition: all 0.3s ease;
        }

        .tech-item:hover {
          border-color: #00E5FF;
          color: #00E5FF;
          box-shadow: 0 0 10px rgba(0, 229, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default About;
