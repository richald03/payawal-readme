import { skills } from '../data/skills';
import './Skills.css';

const BASE = import.meta.env.BASE_URL;

export default function Skills() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <header className="skills-header">
        <h2 className="skills-heading" id="skills-title">
          <span className="skills-heading-dash" aria-hidden="true" />
          SKILLS
        </h2>
        <p className="skills-subtitle">
          Technologies and tools I use to develop, build, and secure applications.
        </p>
      </header>
      <div className="skills-grid">
        {skills.map(({ category, items }) => (
          <div
            className={`skills-group${category === 'TOOLS & PLATFORMS' ? ' skills-group-tools' : ''}${category === 'CYBERSECURITY & VIRTUALIZATION' ? ' skills-group-cybersecurity' : ''}`}
            key={category}
          >
            <h3 className="skills-group-title">{category}</h3>
            <ul className="skills-list">
              {items.map(({ name, icon, fallback }) => (
                <li className="skills-tag" key={name}>
                  {icon ? (
                    <img
                      className="skills-logo"
                      src={`${BASE}images/skills/icons/${icon}.svg`}
                      alt=""
                      aria-hidden="true"
                      decoding="async"
                    />
                  ) : (
                    <span className="skills-logo-fallback" aria-hidden="true">
                      {fallback}
                    </span>
                  )}
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
