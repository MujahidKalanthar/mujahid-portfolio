import React, { useState } from 'react';
import { MapPin, Compass, Navigation, Award, Download, ExternalLink, X, Image as ImageIcon, Plus, Minus, RotateCcw } from 'lucide-react';
import { CITIES_DATA, ALL_COMPETITIONS, CityLocation, FullCompetition } from '../data/competitionsData';
import { EVENT_PHOTOS } from '../data/portfolioData';
import { REGIONAL_COUNTRIES, INDIA_OUTLINE } from '../data/geoMapPaths';

export const JourneyMap: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<CityLocation | null>(CITIES_DATA.find(c => c.id === 'hyderabad') || CITIES_DATA[0]);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [zoomFocus, setZoomFocus] = useState<{ x: number; y: number }>({ x: 68, y: 45 });

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.6, 3.4));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.6, 1));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setZoomFocus({ x: 68, y: 45 });
  };

  const handleCityClick = (city: CityLocation) => {
    setSelectedCity(city);
    if (zoomLevel > 1) {
      setZoomFocus({ x: city.coordinates.x, y: city.coordinates.y });
    }
  };

  const getCityEvents = (cityName: string): FullCompetition[] => {
    if (cityName === 'New Delhi') {
      return ALL_COMPETITIONS.filter(c => c.city === 'New Delhi' || c.city === 'Delhi');
    }
    return ALL_COMPETITIONS.filter(c => c.city === cityName);
  };

  const getCityPhotos = (cityName: string) => {
    return EVENT_PHOTOS.filter(p => p.location.toLowerCase().includes(cityName.toLowerCase()) || p.event.toLowerCase().includes(cityName.toLowerCase()));
  };

  const selectedEvents = selectedCity ? getCityEvents(selectedCity.name) : [];
  const selectedPhotos = selectedCity ? getCityPhotos(selectedCity.name) : [];

  const getLabelOffsetStyle = (cityId: string): React.CSSProperties => {
    if (zoomLevel > 1.8) return {};
    switch (cityId) {
      case 'delhi':
        return { transform: 'translate(-50%, -105%)' };
      case 'kashipur':
        return { transform: 'translate(40%, -100%)' };
      case 'kanpur':
        return { transform: 'translate(-65%, 25%)' };
      case 'lucknow':
        return { transform: 'translate(50%, -25%)' };
      case 'prayagraj':
        return { transform: 'translate(45%, 30%)' };
      case 'jaipur':
        return { transform: 'translate(-70%, -20%)' };
      case 'jammu':
        return { transform: 'translate(-50%, -100%)' };
      default:
        return {};
    }
  };

  return (
    <section id="map" style={{ padding: '6.5rem 0', background: 'rgba(8, 11, 18, 0.95)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-title-tag">
            <Compass size={14} />
            <span>Interactive Cartographic Visualization · 15 Regional Hubs</span>
          </div>
          <h2 className="section-heading">
            Geography of the Grind
          </h2>
          <p className="section-desc">
            An authentic geographic visualization representing locations where I have built, competed, internee, and presented solutions across India and Saudi Arabia.
          </p>
        </div>

        {/* Map Container & Detail Panel Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
          }}
          className="map-grid-wrapper"
        >
          {/* Cartographic Visual Card */}
          <div
            className="glass-card"
            style={{
              padding: '1.5rem',
              position: 'relative',
              minHeight: '520px',
              background: 'radial-gradient(circle at 50% 50%, rgba(18, 22, 34, 0.95) 0%, rgba(10, 13, 20, 0.98) 100%)',
              borderColor: 'rgba(245, 158, 11, 0.3)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Top Instruction Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 5, marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                <Navigation size={14} color="#f59e0b" />
                <span>Select any location pin or use + / − zoom to explore regional hubs</span>
              </div>
              <span className="badge badge-amber">15 Geographic Hubs</span>
            </div>

            {/* SVG Cartographic Geographic Base with Accurate Country Outlines */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '440px',
                background: 'rgba(10, 14, 22, 0.7)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                overflow: 'hidden',
              }}
            >
              {/* Map Floating Zoom Controls */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  zIndex: 30,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  background: 'rgba(10, 13, 20, 0.88)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  borderRadius: '8px',
                  padding: '4px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <button
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 3.4}
                  aria-label="Zoom in"
                  title="Zoom In (+)"
                  className="map-zoom-btn"
                >
                  <Plus size={16} color={zoomLevel >= 3.4 ? '#475569' : '#f59e0b'} />
                </button>
                <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)' }} />
                <button
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 1}
                  aria-label="Zoom out"
                  title="Zoom Out (-)"
                  className="map-zoom-btn"
                >
                  <Minus size={16} color={zoomLevel <= 1 ? '#475569' : '#f59e0b'} />
                </button>
                {zoomLevel > 1 && (
                  <>
                    <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)' }} />
                    <button
                      onClick={handleResetZoom}
                      aria-label="Reset zoom"
                      title="Reset View"
                      className="map-zoom-btn"
                    >
                      <RotateCcw size={13} color="#94a3b8" />
                    </button>
                  </>
                )}
              </div>

              {/* Zoomable Map Layer Wrapper */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: `${zoomFocus.x}% ${zoomFocus.y}%`,
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  width: '100%',
                  height: '100%',
                }}
              >
                {/* Topographic Lines & Grid */}
                <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.12, pointerEvents: 'none' }}>
                  <pattern id="cartoGridAccurate" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f59e0b" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#cartoGridAccurate)" />
                </svg>

                {/* Accurate SVG Country & Coastline Outlines (Saudi Arabia & India + States) */}
                <svg viewBox="0 0 1000 580" width="100%" height="100%" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                  {/* Regional Countries (UAE, Oman, Yemen, Qatar, Kuwait, Iran, Iraq, Afghanistan, Nepal, Bangladesh, Sri Lanka, etc.) */}
                  {REGIONAL_COUNTRIES.map((c) => (
                    <path
                      key={c.id}
                      d={c.path}
                      fill={c.isSaudi ? 'rgba(245, 158, 11, 0.08)' : 'rgba(255, 255, 255, 0.015)'}
                      stroke={c.isSaudi ? '#f59e0b' : 'rgba(245, 158, 11, 0.22)'}
                      strokeWidth={c.isSaudi ? '1.8' : '1'}
                      strokeDasharray={c.isSaudi ? '4 2' : undefined}
                    />
                  ))}

                  {/* India Complete National Outline & Fill */}
                  {INDIA_OUTLINE && (
                    <path
                      d={INDIA_OUTLINE}
                      fill="rgba(245, 158, 11, 0.09)"
                      stroke="#f59e0b"
                      strokeWidth="2.2"
                    />
                  )}

                  {/* Country Labels */}
                  <text x="210" y="270" fill="#f59e0b" fontSize="13" fontFamily="var(--font-mono)" letterSpacing="3" opacity="0.85">SAUDI ARABIA</text>
                  <text x="690" y="320" fill="#f59e0b" fontSize="18" fontFamily="var(--font-mono)" letterSpacing="6" opacity="0.85">INDIA</text>
                </svg>

                {/* Connecting Flight/Journey Route Lines */}
                <svg viewBox="0 0 1000 580" width="100%" height="100%" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                  {CITIES_DATA.slice(1).map((city, idx) => {
                    const prayagraj = CITIES_DATA.find(c => c.id === 'prayagraj')!;
                    return (
                      <line
                        key={idx}
                        x1={`${prayagraj.coordinates.x}%`}
                        y1={`${prayagraj.coordinates.y}%`}
                        x2={`${city.coordinates.x}%`}
                        y2={`${city.coordinates.y}%`}
                        stroke="rgba(245, 158, 11, 0.25)"
                        strokeWidth="1.2"
                        strokeDasharray="4 4"
                      />
                    );
                  })}
                </svg>

                {/* Interactive City Pins */}
                {CITIES_DATA.map((city) => {
                  const isSelected = selectedCity?.id === city.id;
                  const labelOffset = getLabelOffsetStyle(city.id);
                  return (
                    <button
                      key={city.id}
                      onClick={() => handleCityClick(city)}
                      style={{
                        position: 'absolute',
                        left: `${city.coordinates.x}%`,
                        top: `${city.coordinates.y}%`,
                        transform: 'translate(-50%, -50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        zIndex: isSelected ? 20 : 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.25rem',
                      }}
                      title={city.name}
                    >
                      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {isSelected && (
                          <div
                            style={{
                              position: 'absolute',
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              background: city.isInternship ? 'rgba(234, 88, 12, 0.4)' : 'rgba(245, 158, 11, 0.4)',
                              animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                            }}
                          />
                        )}
                        <div
                          style={{
                            width: isSelected ? '18px' : '12px',
                            height: isSelected ? '18px' : '12px',
                            borderRadius: '50%',
                            background: city.isInternship
                              ? '#ea580c'
                              : city.podiumsCount > 0
                              ? '#f59e0b'
                              : '#10b981',
                            border: '2px solid #0a0d14',
                            boxShadow: isSelected
                              ? '0 0 15px #f59e0b'
                              : '0 0 8px rgba(0, 0, 0, 0.5)',
                            transition: 'all 0.25s ease',
                          }}
                        />
                      </div>

                      <span
                        style={{
                          fontSize: isSelected ? '0.78rem' : '0.68rem',
                          fontWeight: isSelected ? 700 : 500,
                          color: isSelected ? '#f8fafc' : '#94a3b8',
                          background: 'rgba(10, 13, 20, 0.88)',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '4px',
                          border: isSelected ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                          whiteSpace: 'nowrap',
                          ...labelOffset,
                        }}
                      >
                        {city.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Cartographic Legend */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', marginTop: '1rem', fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ea580c' }} />
                Internship Hub (Riyadh)
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                Podium Wins (2nd/3rd)
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                National Finalist / Semi-Finalist
              </span>
            </div>
          </div>

          {/* Contextual City Drawer */}
          {selectedCity && (
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                background: 'linear-gradient(145deg, rgba(18, 22, 34, 0.95) 0%, rgba(28, 34, 50, 0.6) 100%)',
                borderColor: 'rgba(245, 158, 11, 0.35)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.8rem' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)' }}>
                      Regional Archive Hub
                    </div>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#f8fafc' }}>
                      {selectedCity.name}
                    </h3>
                  </div>
                  <span className="badge badge-amber">{selectedEvents.length} Event{selectedEvents.length === 1 ? '' : 's'}</span>
                </div>

                <p style={{ fontSize: '0.88rem', color: '#cbd5e1', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
                  {selectedCity.subtitle}
                </p>

                {/* Riyadh Internship Highlight */}
                {selectedCity.isInternship && (
                  <div
                    style={{
                      padding: '1rem',
                      borderRadius: '10px',
                      background: 'rgba(234, 88, 12, 0.1)',
                      border: '1px solid rgba(234, 88, 12, 0.3)',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <div style={{ fontWeight: 700, color: '#ffedd5', fontSize: '0.95rem' }}>
                      Software Development Internship @ Quality Techno Certification (QTC)
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '0.3rem' }}>
                      Riyadh, Saudi Arabia · Hybrid (Jul 2025 – Aug 2025). Enterprise backend logic, MongoDB automation pipelines, and Dockerized micro-environment CI/CD workflows.
                    </div>
                  </div>
                )}

                {/* City Competition Events List */}
                {selectedEvents.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                      Case Competitions ({selectedEvents.length})
                    </div>
                    {selectedEvents.map((evt) => (
                      <div
                        key={evt.id}
                        style={{
                          padding: '0.85rem 1rem',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.07)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          flexWrap: 'wrap',
                          gap: '0.5rem',
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.92rem' }}>
                            {evt.title}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                            {evt.organizer}
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span className={evt.resultCategory === 'Podium' ? 'badge badge-amber' : 'badge badge-terracotta'}>
                            {evt.result}
                          </span>
                          {evt.pitchDeckPath && (
                            <a
                              href={evt.pitchDeckPath}
                              download
                              className="badge badge-emerald"
                              style={{ textDecoration: 'none' }}
                              title="Download PDF Pitch Deck"
                            >
                              <Download size={12} />
                              <span>Deck</span>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  !selectedCity.isInternship && (
                    <div style={{ color: '#64748b', fontSize: '0.85rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                      Academic & Institute Collaboration Hub.
                    </div>
                  )
                )}

                {/* City Photos Preview if available */}
                {selectedPhotos.length > 0 && (
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.6rem', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <ImageIcon size={14} color="#f59e0b" />
                      <span>Event Photography Preview</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '0.5rem' }}>
                      {selectedPhotos.map((photo) => (
                        <img
                          key={photo.id}
                          src={photo.imagePath}
                          alt={photo.title}
                          style={{
                            width: '100%',
                            height: '70px',
                            objectFit: 'cover',
                            borderRadius: '6px',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Panel Footer */}
              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.78rem', color: '#64748b', textAlign: 'right' }}>
                {selectedCity.name} · {selectedCity.subtitle}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .map-zoom-btn {
          background: transparent;
          border: none;
          padding: 6px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .map-zoom-btn:hover:not(:disabled) {
          background: rgba(245, 158, 11, 0.25);
        }
        .map-zoom-btn:active:not(:disabled) {
          transform: scale(0.92);
        }
        .map-zoom-btn:disabled {
          cursor: not-allowed;
          opacity: 0.45;
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @media (min-width: 992px) {
          .map-grid-wrapper {
            grid-template-columns: 1.3fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
