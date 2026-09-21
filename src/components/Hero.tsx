import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Code2, BookOpen, Sparkles, MapPin, Compass, Trophy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenRecruiter: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiter }) => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % PERSONAL_INFO.taglines.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="overview" style={{ paddingTop: '8.5rem', paddingBottom: '4.5rem', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Main Hero Copy Column */}
          <div>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.35rem 0.95rem',
                borderRadius: '9999px',
                background: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                color: '#f59e0b',
                fontSize: '0.8rem',
                fontWeight: 600,
                fontFamily: 'var(--font-mono)',
                marginBottom: '1.25rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#f59e0b',
                  boxShadow: '0 0 10px #f59e0b',
                }}
              />
              B.Tech ECE @ MNNIT Allahabad · Software & Systems
            </div>

            <h1
  style={{
    fontSize: 'clamp(2.5rem, 5.5vw, 3.5rem)',
    fontWeight: 800,
    lineHeight: 1.1,
    color: '#f8fafc',
    letterSpacing: '-0.03em',
    marginBottom: '1.2rem',
  }}
>
  Hey, I'm Mujahid👋
</h1>
            {/* Dynamic Rotating Tagline */}
            <div
              style={{
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#f59e0b',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.95rem',
                fontWeight: 600,
                marginBottom: '1.4rem',
              }}
            >
              <Code2 size={16} />
              <span style={{ transition: 'opacity 0.4s ease' }}>
                {PERSONAL_INFO.taglines[taglineIndex]}
              </span>
            </div>

            {/* Authentic Personal Prose Statement */}
            <p
              style={{
                fontSize: '1.08rem',
                color: '#cbd5e1',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '680px',
              }}
            >
              I build production-grade full-stack tools, zero-hallucination RAG pipelines, and strategic analytics platforms. When I'm not writing code, you'll find me competing in national strategy challenges across premier institutes (5+ podiums), reading voraciously across historical fiction & philosophy, or writing poetry. I'm fascinated by systems that are simple on the outside and smart underneath.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href="#map" className="btn-primary">
                <Compass size={16} />
                <span>Explore 15-City Journey Map</span>
              </a>

              <a href="#projects" className="btn-secondary">
                <span>View Selected Works</span>
                <ArrowRight size={16} />
              </a>

              <button onClick={onOpenRecruiter} className="btn-secondary" style={{ borderColor: 'rgba(245, 158, 11, 0.4)', background: 'rgba(245, 158, 11, 0.08)', color: '#fef3c7' }}>
                <Sparkles size={16} color="#f59e0b" />
                <span>30-Sec Executive Brief</span>
              </button>
            </div>

            {/* Social & External Links */}
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)' }}>
                Handles:
              </span>

              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="badge" style={{ textDecoration: 'none' }}>
                <Github size={13} />
                <span>GitHub</span>
              </a>

              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="badge badge-amber" style={{ textDecoration: 'none' }}>
                <Linkedin size={13} />
                <span>LinkedIn</span>
              </a>

              <a href={PERSONAL_INFO.leetcode} target="_blank" rel="noreferrer" className="badge badge-terracotta" style={{ textDecoration: 'none' }}>
                <Code2 size={13} />
                <span>LeetCode</span>
              </a>

              <a href={PERSONAL_INFO.goodreads} target="_blank" rel="noreferrer" className="badge badge-emerald" style={{ textDecoration: 'none' }}>
                <BookOpen size={13} />
                <span>Goodreads</span>
              </a>
            </div>
          </div>

          {/* Hero Framed Portrait Column */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="glass-card"
              style={{
                position: 'relative',
                padding: '1.75rem',
                maxWidth: '430px',
                width: '100%',
                background: 'linear-gradient(150deg, rgba(18, 22, 34, 0.95) 0%, rgba(28, 34, 50, 0.5) 100%)',
                borderColor: 'rgba(245, 158, 11, 0.3)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6)',
              }}
            >
              {/* Photo Frame */}
              <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                <img
                  src={PERSONAL_INFO.photoPath}
                  alt="Mujahid Kalanthar"
                  style={{
                    width: '100%',
                    maxHeight: '340px',
                    objectFit: 'cover',
                    borderRadius: '14px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 12px 25px rgba(0, 0, 0, 0.5)',
                  }}
                />
              </div>

              {/* Identity Footer */}
              <div style={{ textAlign: 'center', marginBottom: '1.2rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc' }}>{PERSONAL_INFO.name}</h3>
                <div style={{ fontSize: '0.85rem', color: '#f59e0b', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                  {PERSONAL_INFO.subTitle}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.78rem', marginTop: '0.35rem' }}>
                  <MapPin size={12} color="#94a3b8" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Stat Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  borderRadius: '12px',
                  background: 'rgba(10, 13, 20, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  textAlign: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f59e0b' }}>5+</div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Podiums</div>
                </div>

                <div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ea580c' }}>27</div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Events</div>
                </div>

                <div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#10b981' }}>15</div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Cities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.3fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
};
