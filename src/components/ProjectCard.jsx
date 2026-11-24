import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react';

export default function ProjectCard({ project, onShowDetails }) {
  const { number, title, subtitle, category, description, images, links, githubUrl, websiteUrl } = project;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imagePreviewOpen, setImagePreviewOpen] = useState(false);
  const imagePreviewTriggerRef = useRef(null);
  const imagePreviewCloseRef = useRef(null);
  const activeImage = images.length ? images[activeImageIndex % images.length] : null;

  useEffect(() => {
    if (!imagePreviewOpen) return undefined;

    const previewTrigger = imagePreviewTriggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    imagePreviewCloseRef.current?.focus();

    function handlePreviewKeyDown(event) {
      if (event.key === 'Escape') {
        setImagePreviewOpen(false);
      } else if (event.key === 'Tab') {
        event.preventDefault();
        imagePreviewCloseRef.current?.focus();
      }
    }

    document.addEventListener('keydown', handlePreviewKeyDown);
    return () => {
      document.removeEventListener('keydown', handlePreviewKeyDown);
      document.body.style.overflow = previousOverflow;
      previewTrigger?.focus();
    };
  }, [imagePreviewOpen]);

  return (
    <article className="project-card">
      {images.length > 0 ? (
        <div className="project-image-carousel">
          <button
            className="project-image-preview-trigger"
            type="button"
            aria-label={`Preview ${title} screenshot ${activeImageIndex + 1} full screen`}
            onClick={() => setImagePreviewOpen(true)}
            ref={imagePreviewTriggerRef}
          >
            <img
              className="project-thumbnail project-thumbnail-screenshot"
              src={`${import.meta.env.BASE_URL}images/projects/${activeImage.src}`}
              alt={activeImage.alt || `Screenshot ${activeImageIndex + 1} of ${title}`}
              loading="lazy"
              decoding="async"
            />
          </button>
          {images.length > 1 && (
            <>
              <button
                className="project-image-arrow project-image-arrow-previous"
                type="button"
                aria-label={`Previous ${title} screenshot`}
                onClick={() =>
                  setActiveImageIndex((index) => (index - 1 + images.length) % images.length)
                }
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button
                className="project-image-arrow project-image-arrow-next"
                type="button"
                aria-label={`Next ${title} screenshot`}
                onClick={() => setActiveImageIndex((index) => (index + 1) % images.length)}
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
              <span className="project-image-count" aria-live="polite">
                {activeImageIndex + 1} / {images.length}
              </span>
            </>
          )}
          {imagePreviewOpen && (
            <div
              className="project-image-preview-backdrop"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  setImagePreviewOpen(false);
                }
              }}
            >
              <section
                className="project-image-preview-dialog"
                role="dialog"
                aria-modal="true"
                aria-label={`${title} screenshot preview`}
              >
                <button
                  className="project-image-preview-close"
                  type="button"
                  aria-label="Close image preview"
                  onClick={() => setImagePreviewOpen(false)}
                  ref={imagePreviewCloseRef}
                >
                  <X size={20} aria-hidden="true" />
                </button>
                <img
                  className="project-image-preview-image"
                  src={`${import.meta.env.BASE_URL}images/projects/${activeImage.src}`}
                  alt={activeImage.alt || `Screenshot ${activeImageIndex + 1} of ${title}`}
                />
              </section>
            </div>
          )}
        </div>
      ) : (
        <div
          className="project-thumbnail project-thumbnail-example"
          role="img"
          aria-label={`Temporary example thumbnail for ${title}; actual project image not available.`}
        >
          <span className="project-thumbnail-accent" aria-hidden="true" />
          <span className="project-thumbnail-label">EXAMPLE THUMBNAIL</span>
        </div>
      )}

      <div className="project-card-meta">
        <span className="project-card-number">{number}</span>
        {category && <span className="project-card-category">{category}</span>}
      </div>

      <h3 className="project-card-title">
        {title}
        {subtitle && <span> — {subtitle}</span>}
      </h3>

      <p className="project-card-description">{description}</p>

      <div className="project-card-actions">
        <button
          className="project-details-button"
          type="button"
          aria-haspopup="dialog"
          onClick={() => onShowDetails(project)}
        >
          All Details
        </button>

        {githubUrl && (
          <a
            className="project-github-link"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} repository on GitHub`}
            title="View on GitHub"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/skills/icons/github.svg`}
              alt=""
              aria-hidden="true"
            />
          </a>
        )}

        {websiteUrl && (
          <a
            className="project-website-link"
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${title} website`}
            title="Visit website"
          >
            <ExternalLink size={18} aria-hidden="true" />
          </a>
        )}

        {links.length > 0 && (
          <div className="project-card-links">
            {links.map(({ label, url }) => (
              <a
                className="project-link"
                href={url}
                key={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
