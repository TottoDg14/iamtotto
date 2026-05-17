import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const projectImages = [
  'https://images.unsplash.com/photo-1631010231130-5c7828d9a3a7?w=800',
  'https://static.prod-images.emergentagent.com/jobs/33969333-bfdd-4d94-813c-b468782988ae/images/14806343e08b0bf6221e8ba2ba90e4c7e8b2f2c1e9978a68fb30950c0b9c2b87.png',
  'https://static.prod-images.emergentagent.com/jobs/33969333-bfdd-4d94-813c-b468782988ae/images/c6c64ea39619bf979b4e7e93fb240565ab66c8c5b3c65f9ffdbd68c2d98f4ac9.png',
  'https://static.prod-images.emergentagent.com/jobs/33969333-bfdd-4d94-813c-b468782988ae/images/8c794cc2967477e4b51a9ab336c5bba29e8ee6679d14a604a2758248d7d7d5ba.png',
  'https://static.prod-images.emergentagent.com/jobs/33969333-bfdd-4d94-813c-b468782988ae/images/1c190eb7883903d5e173dcaf06ba1a66086757d095cb121c6fc3c25a609b0a62.png',
  'https://static.prod-images.emergentagent.com/jobs/33969333-bfdd-4d94-813c-b468782988ae/images/32ce5752fa4bd389beb02bb436339663960081c25ae530f66d0b68c6b22fa847.png'
];

const projectLinks = [
  '/flexor',
  'https://github.com/TottoDg14',
  'https://github.com/TottoDg14',
  'https://github.com/TottoDg14',
  'https://github.com/TottoDg14/Middleware',
  'https://github.com/TottoDg14'
];

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" x2="21" y1="14" y2="3"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const Projects = () => {
  const { t } = useLanguage();

  const renderProjectCard = (project, index) => {
    const isInternal = project.link && project.link.startsWith('/');
    const href = projectLinks[index];
    
    const cardContent = (
      <>
        <div className="project-image">
          <img src={projectImages[index]} alt={project.title} />
          <div className="project-overlay"></div>
        </div>
        <div className="project-content">
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            <span className="project-link-icon">
              {isInternal ? <ArrowRightIcon /> : <ExternalLinkIcon />}
            </span>
          </div>
          <p className="project-description">{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        </div>
      </>
    );

    if (isInternal) {
      return (
        <Link href={project.link} key={index}>
          <motion.a
            className={`project-card ${index === 0 ? 'featured' : ''}`}
            data-testid={`project-card-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {cardContent}
          </motion.a>
        </Link>
      );
    }

    return (
      <motion.a
        key={index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`project-card ${index === 0 ? 'featured' : ''}`}
        data-testid={`project-card-${index}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {cardContent}
      </motion.a>
    );
  };

  return (
    <section id="projects" className="projects" data-testid="projects-section">
      <div className="projects-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">{t.projects.subtitle}</span>
          <h2 className="section-title">{t.projects.title}</h2>
        </motion.div>

        <div className="projects-grid">
          {t.projects.items.map((project, index) => renderProjectCard(project, index))}
        </div>
      </div>

      <style jsx global>{`
        .projects {
          padding: 6rem 0;
          background: #09090B;
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .projects .section-header {
          margin-bottom: 3rem;
        }

        .projects .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #00E5FF;
          display: block;
          margin-bottom: 0.5rem;
        }

        .projects .section-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #FAFAFA;
          margin: 0;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .project-card.featured {
            grid-column: span 2;
          }
        }

        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .project-card.featured {
            grid-column: span 2;
            grid-row: span 1;
          }
        }

        .project-card {
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
        }

        .project-card:hover {
          border-color: rgba(0, 229, 255, 0.5);
          box-shadow: 0 0 30px rgba(0, 229, 255, 0.1);
          transform: translateY(-4px);
        }

        .project-card:hover .project-image img {
          filter: saturate(1.2);
          transform: scale(1.05);
        }

        .project-card:hover .project-overlay {
          opacity: 0.7;
        }

        .project-card:hover .project-link-icon {
          color: #00E5FF;
          transform: translate(3px, -3px);
        }

        .project-image {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
        }

        .project-card.featured .project-image {
          aspect-ratio: 21/9;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.7);
          transition: all 0.5s ease;
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            #09090B 0%,
            transparent 100%
          );
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }

        .project-content {
          padding: 1.5rem;
          background: #18181B;
        }

        .project-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }

        .project-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #FAFAFA;
          margin: 0;
        }

        .project-link-icon {
          color: #A1A1AA;
          transition: all 0.3s ease;
          flex-shrink: 0;
          display: flex;
        }

        .project-description {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.875rem;
          color: #A1A1AA;
          margin: 0 0 1rem 0;
          line-height: 1.6;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .project-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.625rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.375rem 0.75rem;
          background: #09090B;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #00E5FF;
        }
      `}</style>
    </section>
  );
};

export default Projects;
