import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

const navLinks = [
  { label: 'ABOUT ME',   href: '#about' },
  { label: 'SKILLS',     href: '#skills' },
  { label: 'EDUCATION',  href: '#education' },
  { label: 'PROJECTS',   href: '#portfolio' },
  { label: 'Achievements', href: '#journey' },
  { label: 'Journey', href: '#life-in-frames' },
  { label: 'CONTACT',    href: '#contact' },
];

function IconFacebook() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.85-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.353V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.55 9h3.573v11.452H3.55z" />
    </svg>
  );
}

function IconDiscord() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.099.246.198.372.291a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.873.891.076.076 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.077.077 0 0 0 .084.029 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .03-.055c.5-5.177-.838-9.673-3.548-13.661a.062.062 0 0 0-.03-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419s.955-2.42 2.157-2.42 2.176 1.096 2.157 2.42c0 1.334-.955 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419s.955-2.42 2.157-2.42 2.176 1.096 2.157 2.42c0 1.334-.955 2.419-2.157 2.419z" />
    </svg>
  );
}

export default function MobileNav({ activeSection: controlledActive, onSelectSection }) {
  const [open, setOpen] = useState(false);
  const [internalActive, setInternalActive] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      return window.location.hash;
    }
    return '';
  });

  const activeSection = controlledActive !== undefined ? controlledActive : internalActive;
  const setActiveSection = onSelectSection || setInternalActive;

  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    function handleHashChange() {
      if (window.location.hash) {
        setActiveSection(window.location.hash);
      }
    }
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setActiveSection]);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target) &&
          btnRef.current && !btnRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <header className="mobile-header" aria-label="Mobile site header">
      <a
        href="#"
        className="mobile-logo"
        aria-label="Back to top – Aldrich"
        onClick={() => setActiveSection('')}
      >
        <span className="sidebar-logo-icon" aria-hidden="true">A</span>
        <span className="sidebar-logo-text">Aldrich</span>
      </a>

      <button
        ref={btnRef}
        className="mobile-menu-btn"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div
          id="mobile-menu-panel"
          className="mobile-menu-panel"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <nav aria-label="Mobile navigation">
            <ul className="mobile-nav-list">
              {navLinks.map((link, i) => {
                const isSelected = activeSection === link.href;
                return (
                  <li key={link.href} className="mobile-nav-item">
                    <a
                      href={link.href}
                      className={`mobile-link ${isSelected ? 'is-active' : ''}`}
                      aria-current={isSelected ? 'location' : undefined}
                      onClick={() => {
                        setActiveSection(link.href);
                        setOpen(false);
                      }}
                    >
                      <span className="sidebar-line" aria-hidden="true" />
                      <span className="sidebar-link-text">{link.label}</span>
                    </a>
                    {i < navLinks.length - 1 && (
                      <div className="sidebar-divider" role="separator" />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mobile-socials" aria-label="Social links">
            {profile.facebookUrl ? (
              <a
                href={profile.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="sidebar-social-link"
              >
                <IconFacebook />
              </a>
            ) : (
              <span
                className="sidebar-social-static"
                aria-label="Facebook"
                role="img"
                title="Facebook"
              >
                <IconFacebook />
              </span>
            )}
            <a
              href={profile.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="sidebar-social-link"
            >
              <IconDiscord />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="sidebar-social-link"
            >
              <IconGithub />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="sidebar-social-link"
            >
              <IconLinkedIn />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
