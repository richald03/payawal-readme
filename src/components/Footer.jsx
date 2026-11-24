import { ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.099.246.198.372.291a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.873.891.076.076 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.077.077 0 0 0 .084.029 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .03-.055c.5-5.177-.838-9.673-3.548-13.661a.062.062 0 0 0-.03-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419s.955-2.42 2.157-2.42 2.176 1.096 2.157 2.42c0 1.334-.955 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419s.955-2.42 2.157-2.42 2.176 1.096 2.157 2.42c0 1.334-.955 2.419-2.157 2.419z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.85-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.353V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.55 9h3.573v11.452H3.55z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5 0-1.15 0-2.35 0-3.5 0 0-1 0-3 1.5a15.4 15.4 0 0 0-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function scrollToTop() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-copyright">&copy; {CURRENT_YEAR} payawal-readme</p>

        <nav className="footer-socials" aria-label="Social profiles">
          <a
            className="footer-social-link"
            href={profile.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
          <a
            className="footer-social-link"
            href={profile.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <DiscordIcon />
          </a>
          <a
            className="footer-social-link"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            className="footer-social-link"
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </nav>

        <button className="footer-back-to-top" type="button" onClick={scrollToTop} aria-label="Back to top">
          <ArrowUp size={18} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
