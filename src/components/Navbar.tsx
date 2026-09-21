import React, { useState, useEffect } from 'react';
import { Sparkles, Download, Menu, X, Compass, Layers, Trophy, FileText, BookOpen, Feather, Camera } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenRecruiter: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRecruiter }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['overview', 'map', 'projects', 'competitions', 'decks', 'reading', 'poetry', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview', id: 'overview' },
    { label: 'Journey Map', href: '#map', id: 'map' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Competitions', href: '#competitions', id: 'competitions' },
    { label: 'Decks', href: '#decks', id: 'decks' },
    { label: 'Reading Room', href: '#reading', id: 'reading' },
    { label: 'Poetry', href: '#poetry', id: 'poetry' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10, 13, 20, 0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: scrolled ? '0.7rem 0' : '1.25rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo / Identity */}
        <a href="#overview" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img
            src={PERSONAL_INFO.photoPath}
            alt="Mujahid"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid rgba(245, 158, 11, 0.4)',
              boxShadow: '0 0 12px rgba(245, 158, 11, 0.2)',
            }}
          />
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Mujahid Kalanthar
            </div>
            <div style={{ fontSize: '0.72rem', color: '#f59e0b', fontFamily: 'var(--font-mono)' }}>
              ECE @ MNNIT Allahabad
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '0.2rem' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                style={{
                  padding: '0.4rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#f59e0b' : '#94a3b8',
                  background: isActive ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
                  border: isActive ? '1px solid rgba(245, 158, 11, 0.25)' : '1px solid transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={onOpenRecruiter}
            className="btn-secondary"
            style={{
              padding: '0.45rem 0.9rem',
              fontSize: '0.82rem',
              borderColor: 'rgba(245, 158, 11, 0.35)',
              background: 'rgba(245, 158, 11, 0.1)',
              color: '#fef3c7',
              borderRadius: '9999px',
            }}
          >
            <Sparkles size={14} color="#f59e0b" />
            <span style={{ fontWeight: 600 }}>Recruiter Mode</span>
          </button>

          <a
            href={PERSONAL_INFO.resumePath}
            download="Mujahid_Kalanthar_Resume.pdf"
            className="btn-primary"
            style={{
              padding: '0.45rem 0.9rem',
              fontSize: '0.82rem',
              borderRadius: '9999px',
            }}
          >
            <Download size={14} />
            <span>CV</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              color: '#f8fafc',
              padding: '0.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(10, 13, 20, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
          }}
          className="mobile-dropdown"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: activeSection === link.id ? '#f59e0b' : '#cbd5e1',
                fontWeight: 600,
                fontSize: '0.92rem',
                padding: '0.4rem 0',
                display: 'block',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 1040px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .mobile-dropdown {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
