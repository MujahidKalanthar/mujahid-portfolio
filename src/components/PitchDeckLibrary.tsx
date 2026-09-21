import React, { useState } from 'react';
import { Download, FileText, ExternalLink, Eye, X, Sparkles, Layers } from 'lucide-react';
import { ALL_COMPETITIONS, FullCompetition } from '../data/competitionsData';

export const PitchDeckLibrary: React.FC = () => {
  const [selectedDeck, setSelectedDeck] = useState<FullCompetition | null>(null);

  const deckCompetitions = ALL_COMPETITIONS.filter(c => Boolean(c.pitchDeckPath));

  return (
    <section id="decks" style={{ padding: '6rem 0', background: 'rgba(8, 12, 20, 0.7)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-title-tag" style={{ color: '#a855f7' }}>
            <FileText size={14} />
            <span>Case Archive & Slide Repositories · 17 PDF Decks</span>
          </div>
          <h2 className="section-heading">
            Pitch Deck Library
          </h2>
          <p className="section-desc">
            Explore and download original presentation decks, macroeconomic risk models, unit economic teardowns, and crisis solution decks submitted across national competitions.
          </p>
        </div>

        {/* Deck Library Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {deckCompetitions.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderColor: 'rgba(168, 85, 247, 0.25)',
                background: 'linear-gradient(150deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.4) 100%)',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <span className="badge badge-violet">{item.category}</span>
                  <span className={item.resultCategory === 'Podium' ? 'badge badge-amber' : 'badge badge-cyan'}>
                    {item.result}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.3rem' }}>
                  {item.title}
                </h3>
                <div style={{ fontSize: '0.84rem', color: '#38bdf8', fontWeight: 500, marginBottom: '0.9rem' }}>
                  {item.organizer}
                </div>

                <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  {item.description}
                </p>
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', gap: '0.6rem' }}>
                <a
                  href={item.pitchDeckPath}
                  download
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.82rem', padding: '0.5rem 0.8rem' }}
                >
                  <Download size={14} />
                  <span>Download PDF</span>
                </a>

                <button
                  onClick={() => setSelectedDeck(item)}
                  className="btn-secondary"
                  style={{ padding: '0.5rem 0.8rem', fontSize: '0.82rem' }}
                  title="Preview PDF"
                >
                  <Eye size={14} />
                  <span>Preview</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* In-App PDF Preview Drawer Modal */}
      {selectedDeck && selectedDeck.pitchDeckPath && (
        <div className="modal-overlay" onClick={() => setSelectedDeck(null)}>
          <div
            className="glass-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '95vw',
              maxWidth: '1000px',
              height: '90vh',
              padding: '1.5rem',
              background: '#080c14',
              borderColor: 'rgba(168, 85, 247, 0.4)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc' }}>
                  {selectedDeck.title} — Pitch Deck Preview
                </h3>
                <div style={{ fontSize: '0.8rem', color: '#38bdf8' }}>{selectedDeck.organizer} ({selectedDeck.result})</div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <a
                  href={selectedDeck.pitchDeckPath}
                  download
                  className="btn-primary"
                  style={{ fontSize: '0.82rem', padding: '0.4rem 0.8rem' }}
                >
                  <Download size={14} />
                  <span>Download PDF</span>
                </a>

                <button
                  onClick={() => setSelectedDeck(null)}
                  style={{
                    color: '#94a3b8',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  aria-label="Close preview"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Embedded iFrame Viewer */}
            <iframe
              src={selectedDeck.pitchDeckPath}
              title={selectedDeck.title}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '8px',
                background: '#1e293b',
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};
