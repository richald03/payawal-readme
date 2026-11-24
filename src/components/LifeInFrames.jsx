import { useCallback, useEffect, useRef, useState } from 'react';
import { Pause, Play, X } from 'lucide-react';
import './LifeInFrames.css';

const BASE = import.meta.env.BASE_URL;
const PHOTO_ALT = "Photo from Aldrich's school journey";

const photoRows = [
  [
    { src: 'images/life-in-frames/frame-01.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-02.webp', width: 1024, height: 768, orientation: 'landscape' },
    { src: 'images/life-in-frames/frame-05.webp', width: 768, height: 1365, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-07.webp', width: 1366, height: 768, orientation: 'landscape' },
    { src: 'images/life-in-frames/frame-08.webp', width: 1024, height: 768, orientation: 'landscape' },
    { src: 'images/life-in-frames/frame-10.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-13.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-14.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-15.webp', width: 768, height: 874, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-16.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-22.webp', width: 768, height: 1365, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-23.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-24.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-25.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-26.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-27.webp', width: 1024, height: 768, orientation: 'landscape' },
    { src: 'images/life-in-frames/frame-33.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-34.webp', width: 1365, height: 768, orientation: 'landscape' },
    { src: 'images/life-in-frames/frame-35.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-36.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-37.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-38.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-39.webp', width: 768, height: 1365, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-40.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-41.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-42.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-43.webp', width: 768, height: 1024, orientation: 'portrait' },
  ],
  [
    { src: 'images/life-in-frames/frame-03.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-04.webp', width: 768, height: 956, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-06.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-09.webp', width: 1024, height: 768, orientation: 'landscape' },
    { src: 'images/life-in-frames/frame-11.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-12.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-17.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-18.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-19.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-20.webp', width: 1172, height: 768, orientation: 'landscape' },
    { src: 'images/life-in-frames/frame-21.webp', width: 1024, height: 768, orientation: 'landscape' },
    { src: 'images/life-in-frames/frame-28.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-29.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-30.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-31.webp', width: 768, height: 801, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-32.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-44.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-45.webp', width: 1024, height: 768, orientation: 'landscape' },
    { src: 'images/life-in-frames/frame-46.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-47.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-48.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-49.webp', width: 768, height: 770, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-50.webp', width: 768, height: 771, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-51.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-52.webp', width: 768, height: 1024, orientation: 'portrait' },
    { src: 'images/life-in-frames/frame-53.webp', width: 768, height: 1024, orientation: 'portrait' },
  ],
];

function PhotoSet({ photos, duplicate = false, onPhotoSelect }) {
  return (
    <div
      className={`life-frames-set${duplicate ? ' life-frames-set--duplicate' : ''}`}
      aria-hidden={duplicate || undefined}
    >
      {photos.map((photo) => (
        duplicate ? (
          <figure
            className={`life-frames-card life-frames-card--${photo.orientation}`}
            key={photo.src}
          >
            <img
              src={`${BASE}${photo.src}`}
              alt=""
              width={photo.width}
              height={photo.height}
              loading="lazy"
              decoding="async"
            />
          </figure>
        ) : (
          <button
            className={`life-frames-card life-frames-card--${photo.orientation}`}
            type="button"
            key={photo.src}
            aria-label="View photo from Aldrich's school journey"
            onClick={() => onPhotoSelect(photo)}
          >
            <img
              src={`${BASE}${photo.src}`}
              alt={PHOTO_ALT}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              decoding="async"
            />
          </button>
        )
      ))}
    </div>
  );
}

function PhotoLightbox({ photo, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll('button:not([disabled])');
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
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
      className="life-frames-lightbox-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="life-frames-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Photo viewer"
        ref={dialogRef}
      >
        <button
          className="life-frames-lightbox-close"
          type="button"
          aria-label="Close photo viewer"
          onClick={onClose}
          ref={closeButtonRef}
        >
          <X size={24} aria-hidden="true" />
        </button>
        <img
          className="life-frames-lightbox-image"
          src={`${BASE}${photo.src}`}
          alt={PHOTO_ALT}
          width={photo.width}
          height={photo.height}
        />
      </div>
    </div>
  );
}

export default function LifeInFrames() {
  const [playbackOverride, setPlaybackOverride] = useState('auto');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const closePhoto = useCallback(() => setSelectedPhoto(null), []);
  const isManuallyPaused = playbackOverride === 'paused';

  return (
    <section
      className="life-frames-section"
      id="life-in-frames"
      aria-labelledby="journey-title"
    >
      <header className="life-frames-header">
        <h2 className="life-frames-heading" id="journey-title">
          <span className="life-frames-heading-dash" aria-hidden="true" />
          JOURNEY
        </h2>
        <p className="life-frames-subtitle">
          Moments from school, learning, and growing.
        </p>
      </header>

      <div className={`life-frames-carousel${playbackOverride === 'playing' ? ' is-manually-playing' : ''}`}>
        <div className="life-frames-controls">
          <button
            className="life-frames-pause"
            type="button"
            aria-label={isManuallyPaused ? 'Play photo marquee' : 'Pause photo marquee'}
            aria-pressed={isManuallyPaused}
            onClick={() => setPlaybackOverride(isManuallyPaused ? 'playing' : 'paused')}
          >
            {isManuallyPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
            <span>{isManuallyPaused ? 'Play' : 'Pause'}</span>
          </button>
        </div>

        {photoRows.map((photos, index) => (
          <div
            className="life-frames-marquee"
            role="region"
            aria-label={`Journey photo gallery, row ${index + 1}`}
            tabIndex={0}
            key={`life-frames-row-${index + 1}`}
          >
            <div className={`life-frames-track${index === 1 ? ' life-frames-track--reverse' : ''}${isManuallyPaused ? ' is-paused' : ''}`}>
              <PhotoSet photos={photos} onPhotoSelect={setSelectedPhoto} />
              <PhotoSet photos={photos} duplicate />
            </div>
          </div>
        ))}
      </div>
      {selectedPhoto && (
        <PhotoLightbox photo={selectedPhoto} onClose={closePhoto} />
      )}
    </section>
  );
}
