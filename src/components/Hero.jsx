import { useEffect, useState } from 'react';

const BASE = import.meta.env.BASE_URL;

const slides = [
  {
    id: 'portrait',
    src: `${BASE}images/profile/hero-slide-1.png`,
    alt: 'John Aldrich wearing a backward cap, without sunglasses',
    className: 'hero-portrait-slide-1',
  },
  {
    id: 'chin-pose',
    src: `${BASE}images/profile/hero-slide-2.png`,
    alt: 'John Aldrich seated with his hand resting at his chin',
    className: 'hero-portrait-slide-2',
  },
  {
    id: 'seated',
    src: `${BASE}images/profile/2-cutout.png`,
    alt: 'John Aldrich seated and adjusting his sunglasses',
    className: 'hero-portrait-slide-3',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length);
    }, 10000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="hero-section" id="home" aria-label="Introduction">
      <div className="hero-pink-layer">
        <div className="hero-portrait-stage">
          {slides.map((slide, index) => (
            slide.src ? (
              <img
                key={slide.id}
                src={slide.src}
                alt={index === current ? slide.alt : ''}
                aria-hidden={index !== current}
                className={`hero-portrait-img ${slide.className} ${
                  index === current ? 'portrait-active' : 'portrait-hidden'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            ) : null
          ))}
        </div>
      </div>

      <div className="hero-yellow-layer" aria-hidden="true">
        <div className="hero-portrait-stage">
          {slides.map((slide, index) => (
            slide.src ? (
              <img
                key={slide.id}
                src={slide.src}
                alt=""
                className={`hero-portrait-img ${slide.className} ${
                  index === current ? 'portrait-active' : 'portrait-hidden'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            ) : null
          ))}
        </div>
      </div>

      <div className="hero-text-container">
        <p className="hero-greeting">HELLO I&apos;M</p>
        <h1 className="hero-name">
          <span className="hero-name-line1">JOHN ALDRICH C.</span>
          <span className="hero-name-line2">PAYAWAL</span>
        </h1>
        <div className="hero-badge-wrap">
          <span className="hero-badge">TECH ENTHUSIAST</span>
        </div>
      </div>

      <div className="hero-indicators" role="group" aria-label="Choose a portrait">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`hero-indicator-btn ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={
              slide.src
                ? `Show portrait ${index + 1}`
                : 'Portrait 1 unavailable; clean cutout required'
            }
            aria-pressed={index === current}
          />
        ))}
      </div>
    </section>
  );
}
