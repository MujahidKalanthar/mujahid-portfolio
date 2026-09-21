import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" style={{ padding: '6rem 0', background: 'rgba(8, 12, 20, 0.4)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-title-tag">
            <Briefcase size={14} />
            <span>Engineering Exposure & Leadership</span>
          </div>
          <h2 className="section-heading">
            Professional Experience
          </h2>
          <p className="section-desc">
            Shipped backend features, internal automation, and production workflows in enterprise and open-source environments.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="glass-card"
              style={{
                padding: '2.25rem',
                borderLeft: exp.id === 'qtc' ? '4px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)',
                background: 'linear-gradient(150deg, rgba(18, 22, 34, 0.9) 0%, rgba(28, 34, 50, 0.5) 100%)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {/* Organization Logo Mark */}
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(245, 158, 11, 0.12)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#f59e0b',
                      fontWeight: 800,
                      fontSize: '1.1rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {exp.id === 'qtc' ? 'QTC' : exp.id === 'elsoc' ? 'MNNIT' : 'GS'}
                  </div>

                  <div>
                    <span className="badge badge-amber" style={{ marginBottom: '0.3rem' }}>{exp.type}</span>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#f8fafc' }}>
                      {exp.role} <span style={{ color: '#f59e0b', fontWeight: 600 }}>@ {exp.company}</span>
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.84rem', color: '#94a3b8', marginTop: '0.3rem', fontFamily: 'var(--font-mono)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <MapPin size={13} color="#64748b" />
                        {exp.location}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Calendar size={13} color="#64748b" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsibilities Bullets */}
              <ul style={{ padding: 0, margin: '0 0 1.5rem 0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {exp.description.map((desc, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.94rem', lineHeight: 1.6 }}>
                    <CheckCircle2 size={16} color="#f59e0b" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="badge" style={{ background: 'rgba(255, 255, 255, 0.04)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
