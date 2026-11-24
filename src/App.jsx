import { useState, useEffect, useRef, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import WorkImmersion from './components/WorkImmersion';
import Portfolio from './components/Portfolio';
import Achievements from './components/Achievements';
import LifeInFrames from './components/LifeInFrames';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  const pendingSectionRef = useRef('');
  const scrollSettleTimerRef = useRef(null);
  const updateActiveSectionRef = useRef(null);
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      return window.location.hash;
    }
    return '';
  });

  const handleSelectSection = useCallback((section) => {
    pendingSectionRef.current = section;
    setActiveSection(section);

    if (scrollSettleTimerRef.current) {
      window.clearTimeout(scrollSettleTimerRef.current);
    }

    if (!section) {
      scrollSettleTimerRef.current = null;
      return;
    }

    scrollSettleTimerRef.current = window.setTimeout(() => {
      pendingSectionRef.current = '';
      updateActiveSectionRef.current?.();
      scrollSettleTimerRef.current = null;
    }, 2000);
  }, []);

  useEffect(() => {
    function handleHashChange() {
      if (window.location.hash) {
        setActiveSection(window.location.hash);
      }
    }
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const sectionIds = ['about', 'skills', 'education', 'portfolio', 'journey', 'life-in-frames', 'contact'];

    function updateActiveSection() {
      if (pendingSectionRef.current) {
        setActiveSection(pendingSectionRef.current);
        return;
      }

      let nextSection = '';
      const activeLine = window.innerHeight * 0.4;
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= activeLine) {
          nextSection = `#${id}`;
        }
      }

      const hashId = window.location.hash.slice(1);
      const hashSection = sectionIds.includes(hashId)
        ? document.getElementById(hashId)
        : null;
      if (hashSection) {
        const { top, bottom } = hashSection.getBoundingClientRect();
        if (top < window.innerHeight && bottom > activeLine) {
          nextSection = `#${hashId}`;
        }
      }

      setActiveSection(nextSection);
    }

    function handleScrollEnd() {
      pendingSectionRef.current = '';
      if (scrollSettleTimerRef.current) {
        window.clearTimeout(scrollSettleTimerRef.current);
        scrollSettleTimerRef.current = null;
      }
      updateActiveSection();
    }

    updateActiveSectionRef.current = updateActiveSection;
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    window.addEventListener('scrollend', handleScrollEnd);
    updateActiveSection();
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      window.removeEventListener('scrollend', handleScrollEnd);
      if (scrollSettleTimerRef.current) {
        window.clearTimeout(scrollSettleTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="app-layout">
      {/* Fixed sidebar — desktop only */}
      <Sidebar activeSection={activeSection} onSelectSection={handleSelectSection} />

      {/* Mobile header — hidden on desktop */}
      <MobileNav activeSection={activeSection} onSelectSection={handleSelectSection} />

      {/* Main content — offset by sidebar on desktop */}
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Education />
        <WorkImmersion />
        <Portfolio />
        <Achievements />
        <LifeInFrames />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
