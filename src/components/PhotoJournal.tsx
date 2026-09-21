import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';

const PHOTO_STRIP_1 = [
  { id: 'p1', imagePath: '/events/dduc.jpeg', alt: 'Event Photo 1' },
  { id: 'p2', imagePath: '/events/kross.jpeg', alt: 'Event Photo 2' },
  { id: 'p3', imagePath: '/events/DSC00427.JPG', alt: 'Event Photo 3' },
  { id: 'p4', imagePath: '/events/Udhbav.jpeg', alt: 'Event Photo 4' },
];

const PHOTO_STRIP_2 = [
  { id: 'p5', imagePath: '/events/IMG_2327.JPG', alt: 'Event Photo 5' },
  { id: 'p6', imagePath: '/events/dducc.JPG', alt: 'Event Photo 6' },
  { id: 'p7', imagePath: '/events/IMG_4301.jpg', alt: 'Event Photo 7' },
  { id: 'p8', imagePath: '/events/IMG_4342 (1).jpg', alt: 'Event Photo 8' },
];

const PHOTO_STRIP_3 = [
  { id: 'p9', imagePath: '/events/Copy of Copy of IMG_9060.JPG', alt: 'Event Photo 9' },
  { id: 'p10', imagePath: '/events/Copy of Copy of IMG_9100.JPG', alt: 'Event Photo 10' },
  { id: 'p11', imagePath: '/events/IMG_4262 (1).JPG', alt: 'Event Photo 11' },
  { id: 'p12', imagePath: '/events/DSC00427.JPG', alt: 'Event Photo 12' },
];

export const PhotoJournal: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Duplicate arrays to achieve seamless infinite marquee loop
  const row1 = [...PHOTO_STRIP_1, ...PHOTO_STRIP_1, ...PHOTO_STRIP_1];
  const row2 = [...PHOTO_STRIP_2, ...PHOTO_STRIP_2, ...PHOTO_STRIP_2];
  const row3 = [...PHOTO_STRIP_3, ...PHOTO_STRIP_3, ...PHOTO_STRIP_3];

  return (
    <section id="gallery" style={{ padding: '6.5rem 0', background: 'rgba(6, 9, 16, 0.98)', position: 'relative', overflow: 'hidden' }}>
      {/* Header */}
      <div className="container" style={{ marginBottom: '2.5rem' }}>
        <div className="section-title-tag" style={{ color: '#10b981' }}>
          <Camera size={14} />
          <span>Cinematic Photo Wall · Moments & Memory Trail</span>
        </div>
        <h2 className="section-heading">
          Visual Archive
        </h2>
      </div>

      {/* 3 Parallel Infinite Moving Image Strips (NO captions, NO text, NO labels) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%', overflow: 'hidden' }}>
        {/* Strip 1 — Right Movement */}
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div className="marquee-row-right" style={{ gap: '1.25rem' }}>
            {row1.map((item, idx) => (
              <div
                key={`r1-${idx}`}
                onClick={() => setActiveImage(item.imagePath)}
                style={{
                  flexShrink: 0,
                  width: '280px',
                  height: '170px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.6)',
                }}
              >
                <img
                  src={item.imagePath}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  className="strip-img"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Strip 2 — Left Movement */}
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div className="marquee-row-left" style={{ gap: '1.25rem' }}>
            {row2.map((item, idx) => (
              <div
                key={`r2-${idx}`}
                onClick={() => setActiveImage(item.imagePath)}
                style={{
                  flexShrink: 0,
                  width: '280px',
                  height: '170px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.6)',
                }}
              >
                <img
                  src={item.imagePath}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  className="strip-img"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Strip 3 — Right Movement */}
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div className="marquee-row-right" style={{ gap: '1.25rem' }}>
            {row3.map((item, idx) => (
              <div
                key={`r3-${idx}`}
                onClick={() => setActiveImage(item.imagePath)}
                style={{
                  flexShrink: 0,
                  width: '280px',
                  height: '170px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.6)',
                }}
              >
                <img
                  src={item.imagePath}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  className="strip-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Screen Lightbox View */}
      {activeImage && (
        <div className="modal-overlay" onClick={() => setActiveImage(null)}>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
            }}
          >
            <button
              onClick={() => setActiveImage(null)}
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                background: '#0a0d14',
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
              aria-label="Close full-screen image"
            >
              <X size={20} />
            </button>

            <img
              src={activeImage}
              alt="Full-screen photograph"
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95)',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      )}

      <style>{`
        .strip-img:hover {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
};
