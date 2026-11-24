import { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { achievements } from '../data/achievements';
import './Achievements.css';

const BASE = import.meta.env.BASE_URL;

function getAssetUrl(path) {
  return `${BASE}${path.replace(/^\/+/, '')}`;
}

function AchievementCard({ item, kind, onPreview }) {
  if (!item.image && !item.pdf) return null;

  const issuer = kind === 'academic' ? item.institution : item.issuer;
  const imageUrl = item.image ? getAssetUrl(item.image) : null;
  const pdfUrl = item.pdf ? getAssetUrl(item.pdf) : null;
  const dateTimeYear = /^\d{4}$/.test(String(item.year)) ? String(item.year) : undefined;

  return (
    <article className={`achievement-card achievement-card--${kind}`}>
      {imageUrl ? (
        <button
          className="achievement-preview-trigger"
          type="button"
          aria-label={`Preview ${item.title} certificate`}
          onClick={() => onPreview(item)}
        >
          <span className="achievement-preview-frame">
            <img
              src={imageUrl}
              alt={`${item.title} certificate`}
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
            />
          </span>
        </button>
      ) : (
        <a
          className="achievement-pdf-link"
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${item.title} PDF in a new tab`}
        >
          <span className="achievement-preview-frame">
            <span className="achievement-pdf-label">Open certificate PDF</span>
          </span>
        </a>
      )}

      <div className="achievement-card-copy">
        <h4 className="achievement-item-title">{item.title}</h4>
        {issuer && <p className="achievement-issuer">{issuer}</p>}
        {item.year && (
          <time className="achievement-year" dateTime={dateTimeYear}>
            {item.year}
          </time>
        )}
      </div>
    </article>
  );
}

function AchievementLightbox({ item, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'Tab') {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="achievement-lightbox-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="achievement-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={`${item.title} certificate preview`}
      >
        <button
          ref={closeButtonRef}
          className="achievement-lightbox-close"
          type="button"
          aria-label="Close certificate preview"
          onClick={onClose}
        >
          <X size={20} aria-hidden="true" />
        </button>
        <figure className="achievement-lightbox-figure">
          <span className="achievement-confetti" aria-hidden="true">
            {Array.from({ length: 18 }, (_, index) => <i key={index} />)}
          </span>
          <img
            src={getAssetUrl(item.image)}
            alt={`${item.title} certificate`}
            width="1200"
            height="900"
          />
          <figcaption>{item.title}</figcaption>
        </figure>
      </section>
    </div>
  );
}

export default function Achievements() {
  const [selectedItem, setSelectedItem] = useState(null);
  const closePreview = useCallback(() => setSelectedItem(null), []);
  const academicItems = achievements.academic.filter((item) => item.image || item.pdf);
  const technicalItems = achievements.technical.filter((item) => item.image || item.pdf);

  return (
    <section
      className="achievements-section"
      id="journey"
      aria-labelledby="achievements-title"
    >
      <header className="achievements-header">
        <h2 className="achievements-heading" id="achievements-title">
          <span className="achievements-heading-dash" aria-hidden="true" />
          ACHIEVEMENTS
        </h2>
        <p className="achievements-subtitle">
          Here are some academic milestones and technical certifications earned through learning and experience.
        </p>
      </header>

      {academicItems.length > 0 && (
        <section
          className="achievement-category achievement-category--academic"
          aria-labelledby="academic-achievements-title"
        >
          <h3 className="achievement-category-title" id="academic-achievements-title">
            ACADEMIC ACHIEVEMENTS
          </h3>
          <div className="achievement-grid">
            {academicItems.map((item) => (
              <AchievementCard
                key={item.id || `${item.title}-${item.year || ''}`}
                item={item}
                kind="academic"
                onPreview={setSelectedItem}
              />
            ))}
          </div>
        </section>
      )}

      {technicalItems.length > 0 && (
        <section
          className="achievement-category achievement-category--technical"
          aria-labelledby="technical-certifications-title"
        >
          <h3 className="achievement-category-title" id="technical-certifications-title">
            TECHNICAL CERTIFICATIONS
          </h3>
          <div className="achievement-grid">
            {technicalItems.map((item) => (
              <AchievementCard
                key={item.id || `${item.title}-${item.year || ''}`}
                item={item}
                kind="technical"
                onPreview={setSelectedItem}
              />
            ))}
          </div>
        </section>
      )}

      {selectedItem && (
        <AchievementLightbox item={selectedItem} onClose={closePreview} />
      )}
    </section>
  );
}
