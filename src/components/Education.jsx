import { education } from '../data/education';
import './Education.css';

const BASE = import.meta.env.BASE_URL;

export default function Education() {
  return (
    <section
      className="education-section"
      id="education"
      aria-labelledby="education-title"
    >
      <header className="education-intro">
        <h2 className="education-heading" id="education-title">
          <span className="education-heading-dash" aria-hidden="true" />
          EDUCATION
        </h2>
        <p className="education-description">
          My academic journey spans elementary through college, where I’m
          studying Information Technology at T.I.P. Manila.
        </p>
      </header>

      <ol className="education-list">
        {education.map((entry) => (
          <li className="education-entry" key={entry.number}>
            <span className="education-number" aria-hidden="true">
              {entry.number}
            </span>
            <div className="education-entry-copy">
              <p className="education-level">{entry.level}</p>
              <h3 className="education-school">{entry.school}</h3>
              {entry.location && (
                <p className="education-detail">{entry.location}</p>
              )}
              {entry.program && (
                <p className="education-detail">{entry.program}</p>
              )}
              <p className="education-years">{entry.years}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="education-portrait-wrap">
        <img
          className="education-portrait"
          src={`${BASE}images/education/graduate-portrait.png`}
          alt="John Aldrich C. Payawal wearing graduation attire"
          loading="lazy"
          decoding="async"
        />
        <img
          className="education-portrait education-portrait--hover"
          src={`${BASE}images/education/graduate-portrait-hover.png`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
      </div>

      <figure className="education-quote">
        <span className="education-quote-mark" aria-hidden="true">“</span>
        <div className="education-quote-copy">
          <blockquote>
            <p>It is your commitment to the process that will determine your progress.</p>
          </blockquote>
          <figcaption>James Clear</figcaption>
        </div>
        <span className="education-quote-mark" aria-hidden="true">”</span>
      </figure>
    </section>
  );
}
