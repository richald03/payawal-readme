import { profile } from '../data/profile';
import './About.css';

const BASE = import.meta.env.BASE_URL;

const details = [
  { label: 'Name', value: profile.name },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Location', value: profile.location },
  { label: 'Nationality', value: 'Filipino' },
];

export default function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-copy">
        <div className="about-copy-inner">
          <h2 className="about-heading" id="about-title">
            <span className="about-heading-dash" aria-hidden="true" />
            ABOUT ME
          </h2>
          <p className="about-intro">{profile.aboutSummary}</p>

          <dl className="about-details">
            {details.map(({ label, value, href }) => (
              <div className="about-detail-row" key={label}>
                <dt>{label}:</dt>
                <dd>
                  {href ? <a href={href}>{value}</a> : value}
                </dd>
              </div>
            ))}
          </dl>

          {profile.resumePdf && (
            <a
              className="about-resume-link"
              href={`${BASE}${profile.resumePdf}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW RESUME
            </a>
          )}
        </div>
      </div>

      <div
        className="about-portrait-stage"
        role="img"
        aria-label="Portrait of John Aldrich C. Payawal wearing a black suit"
      >
        <div className="about-portrait-half about-portrait-gray" aria-hidden="true">
          <img
            className="about-portrait-image"
            src={`${BASE}images/profile/about-portrait.png`}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="about-portrait-half about-portrait-color" aria-hidden="true">
          <img
            className="about-portrait-image"
            src={`${BASE}images/profile/about-portrait.png`}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
