import React, { useState } from 'react';
import { Trophy, Award, Download, Filter, Building2, MapPin, Sparkles, ExternalLink } from 'lucide-react';
import { ALL_COMPETITIONS, FullCompetition } from '../data/competitionsData';

export const CompetitionsArchive: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Podium' | 'Finalist' | 'Semi Finalist'>('All');

  const filteredCompetitions = filter === 'All'
    ? ALL_COMPETITIONS
    : ALL_COMPETITIONS.filter(c => c.resultCategory === filter);

  return (
    <section id="competitions" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <div className="section-title-tag" style={{ color: '#f59e0b' }}>
            <Trophy size={14} />
            <span>Story of the Grind · 27 National Events</span>
          </div>
          <h2 className="section-heading">
            The Competition Archive
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A dedicated record of competing, pitching ideas, solving high-pressure strategic problems, and placing across premier Indian institutes (IITs, IIMs, IISc, SRCC, NMIMS, SIBM).
          </p>
        </div>

        {/* Podium & Finalist Metrics Highlight Banner */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          <div
            className="glass-card"
            style={{
              padding: '1.5rem',
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(15, 23, 42, 0.8) 100%)',
              borderColor: 'rgba(245, 158, 11, 0.3)',
            }}
          >
            <div style={{ color: '#f59e0b', fontSize: '2.4rem', fontWeight: 800 }}>5+</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Podium Finishes (2nd & 3rd)
            </div>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.2rem' }}>
              NMIMS Hyderabad & MNNIT Allahabad
            </div>
          </div>

          <div
            className="glass-card"
            style={{
              padding: '1.5rem',
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(15, 23, 42, 0.8) 100%)',
              borderColor: 'rgba(56, 189, 248, 0.3)',
            }}
          >
            <div style={{ color: '#38bdf8', fontSize: '2.4rem', fontWeight: 800 }}>5+</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              National Finalist Shortlists
            </div>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.2rem' }}>
              SRCC, DDUC, IIT Jammu, LNMIIT, NMIMS
            </div>
          </div>

          <div
            className="glass-card"
            style={{
              padding: '1.5rem',
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(15, 23, 42, 0.8) 100%)',
              borderColor: 'rgba(168, 85, 247, 0.3)',
            }}
          >
            <div style={{ color: '#c084fc', fontSize: '2.4rem', fontWeight: 800 }}>17</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#c084fc', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              National Semi-Finalist Placements
            </div>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.2rem' }}>
              IITs, IIMs, IISc, SIBM, MCD, SSCBS
            </div>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '2.5rem',
          }}
        >
          {(['All', 'Podium', 'Finalist', 'Semi Finalist'] as const).map((tab) => {
            const active = filter === tab;
            return (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: active ? 700 : 500,
                  color: active ? '#040914' : '#94a3b8',
                  background: active ? '#f59e0b' : 'rgba(255, 255, 255, 0.04)',
                  border: active ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
              >
                {tab === 'All' ? 'All 27 Competitions' : `${tab}s (${ALL_COMPETITIONS.filter(c => c.resultCategory === tab).length})`}
              </button>
            );
          })}
        </div>

        {/* 27-Events Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredCompetitions.map((comp) => (
            <div
              key={comp.id}
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderColor: comp.resultCategory === 'Podium' ? 'rgba(245, 158, 11, 0.35)' : comp.resultCategory === 'Finalist' ? 'rgba(56, 189, 248, 0.3)' : 'rgba(255, 255, 255, 0.08)',
                background: comp.resultCategory === 'Podium' ? 'rgba(245, 158, 11, 0.04)' : 'rgba(15, 23, 42, 0.65)',
              }}
            >
              <div>
                {/* Result Tag & City Meta */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span className={comp.resultCategory === 'Podium' ? 'badge badge-amber' : comp.resultCategory === 'Finalist' ? 'badge badge-cyan' : 'badge badge-violet'}>
                    {comp.result} Place
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                    <MapPin size={12} />
                    <span>{comp.city}</span>
                  </div>
                </div>

                {/* Event Title */}
                <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.3rem', lineHeight: 1.3 }}>
                  {comp.title}
                </h3>

                {/* Organizer */}
                <div style={{ fontSize: '0.84rem', color: '#38bdf8', fontWeight: 500, marginBottom: '0.8rem' }}>
                  {comp.organizer}
                </div>

                {/* Description */}
                {comp.description && (
                  <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {comp.description}
                  </p>
                )}
              </div>

              {/* Deck Button if PDF available */}
              <div style={{ paddingTop: '0.8rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="badge" style={{ fontSize: '0.7rem' }}>
                  {comp.category}
                </span>

                {comp.pitchDeckPath ? (
                  <a
                    href={comp.pitchDeckPath}
                    download
                    className="badge badge-amber"
                    style={{ textDecoration: 'none' }}
                  >
                    <Download size={12} />
                    <span>Download Deck (PDF)</span>
                  </a>
                ) : (
                  <span style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>{comp.year}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
