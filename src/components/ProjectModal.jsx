import { useEffect, useRef } from 'react';
import { ExternalLink, X } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null);
  const githubLinkRef = useRef(null);
  const websiteLinkRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    previousFocusRef.current = document.activeElement;
    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'Tab') {
        const focusableElements = [
          closeButtonRef.current,
          githubLinkRef.current,
          websiteLinkRef.current,
        ].filter(Boolean);
        const activeIndex = focusableElements.indexOf(document.activeElement);

        if (event.shiftKey && activeIndex === 0) {
          event.preventDefault();
          focusableElements[focusableElements.length - 1]?.focus();
        } else if (!event.shiftKey && activeIndex === focusableElements.length - 1) {
          event.preventDefault();
          focusableElements[0]?.focus();
        } else if (activeIndex === -1) {
          event.preventDefault();
          focusableElements[0]?.focus();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="project-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <header className="project-modal-header">
          <div className="project-modal-heading">
            <div className="project-modal-meta">
              <span>{project.number}</span>
              {project.category && <span>{project.category}</span>}
            </div>
            <h2 id="project-modal-title">
              {project.title}
              {project.subtitle && <span> — {project.subtitle}</span>}
            </h2>
          </div>
          <button
            className="project-modal-close"
            type="button"
            aria-label="Close project details"
            ref={closeButtonRef}
            onClick={onClose}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </header>

        <p className="project-modal-description">
          {project.details?.overview || project.description}
        </p>

        {project.details?.features?.length > 0 && (
          <section className="project-modal-section" aria-labelledby="project-features-title">
            <h3 id="project-features-title">Key Capabilities</h3>
            <ul className="project-modal-feature-list">
              {project.details.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {project.details?.architecture?.length > 0 && (
          <section className="project-modal-section" aria-labelledby="project-architecture-title">
            <h3 id="project-architecture-title">System Architecture</h3>
            <dl className="project-modal-architecture">
              {project.details.architecture.map(({ layer, description }) => (
                <div className="project-modal-architecture-item" key={layer}>
                  <dt>{layer}</dt>
                  <dd>{description}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {project.githubUrl && (
          <a
            className="project-modal-github"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            ref={githubLinkRef}
          >
            <img src={`${BASE}images/skills/icons/github.svg`} alt="" aria-hidden="true" />
            <span>View repository on GitHub</span>
          </a>
        )}

        {project.websiteUrl && (
          <a
            className="project-modal-website"
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            ref={websiteLinkRef}
          >
            <ExternalLink size={18} aria-hidden="true" />
            <span>Visit live Shopify store</span>
          </a>
        )}
      </section>
    </div>
  );
}
