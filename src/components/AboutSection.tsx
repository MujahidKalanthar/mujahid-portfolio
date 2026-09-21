import React from 'react';
import { User, GraduationCap, MapPin, Sparkles, BookOpen, Compass, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section style={{ padding: '6.5rem 0', background: 'rgba(8, 12, 20, 0.5)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left Column: Personal Narrative */}
          <div>
            <div className="section-title-tag">
              <User size={14} />
              <span>Background & Philosophy</span>
            </div>
            <h2 className="section-heading">
              Beyond the Code Base
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              I am a third-year Electronics & Communication Engineering undergraduate at <strong style={{ color: '#f59e0b' }}>MNNIT Allahabad</strong> (2024–2028). Over the past several years, my technical work has evolved from analytics dashboards to architecting full-stack web platforms and zero-hallucination AI/RAG systems.
            </p>

            <p style={{ fontSize: '1.02rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              I believe great engineering requires clarity on the business problem first, and precision on the technical execution second. This is why I actively compete in national-level strategy and analytics competitions hosted by top Indian management and tech institutes — winning 5+ podium finishes and 10+ finalist shortlists across 27 events.
            </p>

            <p style={{ fontSize: '1.02rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem' }}>
              Outside the terminal, I read extensively across historical fiction, mythology, and philosophy, write original poetry, and continuously explore new ideas that bridge technical discipline with human storytelling.
            </p>

            {/* Key Pillars Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <Code2 size={20} color="#f59e0b" style={{ marginBottom: '0.4rem' }} />
                <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.92rem' }}>Deterministic Systems</div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Zero-hallucination logic over AI gimmickry</div>
              </div>

              <div
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <Compass size={20} color="#ea580c" style={{ marginBottom: '0.4rem' }} />
                <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.92rem' }}>Strategic Analytics</div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Macroeconomic & unit-economic modeling</div>
              </div>

              <div
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <BookOpen size={20} color="#10b981" style={{ marginBottom: '0.4rem' }} />
                <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.92rem' }}>Intellectual Depth</div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Reading, writing, and literature</div>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Institution Card */}
          <div>
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                background: 'linear-gradient(145deg, rgba(18, 22, 34, 0.9) 0%, rgba(28, 34, 50, 0.5) 100%)',
                borderColor: 'rgba(245, 158, 11, 0.3)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(245, 158, 11, 0.12)',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#f59e0b',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  MNNIT
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc' }}>Academic Journey</h3>
                  <div style={{ fontSize: '0.8rem', color: '#f59e0b', fontFamily: 'var(--font-mono)' }}>Education & Credentials</div>
                </div>
              </div>

              {/* MNNIT Allahabad */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                  2024 – 2028 (Third Year / Semester 5)
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginTop: '0.2rem' }}>
                  Motilal Nehru National Institute of Technology Allahabad
                </h4>
                <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                  B.Tech in Electronics & Communication Engineering
                </div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '0.4rem' }}>
                  Core Coursework: Data Structures & Algorithms, OOP, Operating Systems, DBMS, Computer Networks, Probability & Statistics.
                </div>
              </div>

              {/* High School Experience */}
              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  Secondary & Senior Secondary Education
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#e2e8f0', marginTop: '0.2rem' }}>
                  International Indian School, Riyadh (2024)
                </div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  International Indian School, Jeddah (2022)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
};
