import React, { useState } from 'react';
import { Feather, ChevronLeft, ChevronRight, X, Sparkles, ZoomIn } from 'lucide-react';

interface PoemImage {
  id: string;
  title: string;
  subtitle: string;
  imagePath: string;
}

const POEM_IMAGES: PoemImage[] = [
  { id: '1', title: 'Superposition', subtitle: 'Calligraphic Poem Artwork', imagePath: '/poems/Superposition.png' },
  { id: '2', title: 'Child — Part I', subtitle: 'Manuscript Page 1', imagePath: '/poems/Child 1.png' },
  { id: '3', title: 'Child — Part II', subtitle: 'Manuscript Page 2', imagePath: '/poems/Child 2.png' },
  { id: '4', title: 'Your Eyes — Part I', subtitle: 'Manuscript Page 1', imagePath: '/poems/Your eyes 1.png' },
  { id: '5', title: 'Your Eyes — Part II', subtitle: 'Manuscript Page 2', imagePath: '/poems/Your eyes 2.png' },
];

export const PoetryCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const currentItem = POEM_IMAGES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % POEM_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + POEM_IMAGES.length) % POEM_IMAGES.length);
  };

  return (
    <section id="poetry" style={{ padding: '6.5rem 0', background: 'rgba(8, 11, 18, 0.98)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <div className="section-title-tag" style={{ color: '#ea580c' }}>
            <Feather size={14} />
            <span>Creative Sanctuary · Calligraphic Works</span>
          </div>
          <h2 className="section-heading" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500 }}>
            Poetic Manuscripts
          </h2>
          <p className="section-desc" style={{ margin: '0 auto', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
            Original calligraphic manuscripts and visual poetry created by ~M.K.
          </p>
        </div>

        {/* Pure Image Carousel Display */}
        <div
          style={{
            maxWidth: '750px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Navigation Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.8rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
              {POEM_IMAGES.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: currentIndex === idx ? 700 : 400,
                    color: currentIndex === idx ? '#ea580c' : '#94a3b8',
                    background: currentIndex === idx ? 'rgba(234, 88, 12, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                    border: currentIndex === idx ? '1px solid rgba(234, 88, 12, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={handlePrev}
                className="btn-secondary"
                style={{ padding: '0.45rem', borderRadius: '50%' }}
                aria-label="Previous poem manuscript"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="btn-secondary"
                style={{ padding: '0.45rem', borderRadius: '50%' }}
                aria-label="Next poem manuscript"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Poem Image Card */}
          <div
            className="glass-card"
            style={{
              padding: '1.5rem',
              background: 'linear-gradient(150deg, rgba(20, 24, 38, 0.95) 0%, rgba(10, 13, 22, 0.98) 100%)',
              borderColor: 'rgba(234, 88, 12, 0.35)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
              position: 'relative',
              textAlign: 'center',
            }}
          >
            {/* Header info */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                  {currentItem.title}
                </h3>
                <div style={{ fontSize: '0.8rem', color: '#ea580c', fontFamily: 'var(--font-mono)' }}>
                  {currentItem.subtitle} ~ M.K
                </div>
              </div>

              <button
                onClick={() => setLightboxImage(currentItem.imagePath)}
                className="btn-secondary"
                style={{ fontSize: '0.78rem', padding: '0.4rem 0.75rem' }}
              >
                <ZoomIn size={14} />
                <span>Expand Fullscreen</span>
              </button>
            </div>

            {/* Pure Poem Image Artwork (No OCR text underneath) */}
            <div
              onClick={() => setLightboxImage(currentItem.imagePath)}
              style={{
                position: 'relative',
                cursor: 'pointer',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7)',
                background: '#0a0d14',
              }}
            >
              <img
                src={currentItem.imagePath}
                alt={currentItem.title}
                style={{
                  width: '100%',
                  maxHeight: '620px',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="modal-overlay" onClick={() => setLightboxImage(null)}>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '92vh',
            }}
          >
            <button
              onClick={() => setLightboxImage(null)}
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                background: '#04070e',
                color: '#f8fafc',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
              }}
              aria-label="Close manuscript image"
            >
              <X size={20} />
            </button>

            <img
              src={lightboxImage}
              alt="Calligraphic Poem Artwork"
              style={{
                maxWidth: '100%',
                maxHeight: '88vh',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95)',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};
