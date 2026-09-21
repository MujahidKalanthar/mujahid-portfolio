import React, { useState } from 'react';
import { BookOpen, ExternalLink, Quote, Feather, Sparkles } from 'lucide-react';
import { BOOKS, PERSONAL_INFO, Book } from '../data/portfolioData';

export const LiteraryRoom: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book>(BOOKS[0]);

  return (
    <section id="reading" style={{ padding: '6.5rem 0', background: 'linear-gradient(180deg, rgba(12, 10, 20, 0.95) 0%, rgba(20, 16, 30, 0.98) 100%)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-title-tag" style={{ color: '#fbbf24' }}>
            <Feather size={14} />
            <span>Outside the Terminal · Literary Room</span>
          </div>
          <h2 className="section-heading" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, fontSize: '3rem' }}>
            The Reading Shelf
          </h2>
          <p className="section-desc" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontStyle: 'italic', color: '#e2e8f0' }}>
            "I've read more books than I could reasonably put on a list. These are a few that stayed with me — not necessarily because they're the 'greatest' books I've read, but because of something they made me feel, notice, or think about."
          </p>
        </div>

        {/* Goodreads Profile Connection Banner */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderRadius: '14px',
            background: 'rgba(251, 191, 36, 0.08)',
            border: '1px solid rgba(251, 191, 36, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '3.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <BookOpen size={24} color="#fbbf24" />
            <div>
              <div style={{ fontWeight: 700, color: '#fef3c7', fontSize: '1.05rem', fontFamily: 'var(--font-serif)' }}>
                Goodreads Reading Journal (@ardentpandabear)
              </div>
              <div style={{ fontSize: '0.84rem', color: '#cbd5e1' }}>
                Voracious reader exploring historical fiction, mythology, mystery, and philosophical prose.
              </div>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.goodreads}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{
              padding: '0.5rem 1.1rem',
              fontSize: '0.85rem',
              borderColor: 'rgba(251, 191, 36, 0.4)',
              color: '#fef3c7',
              background: 'rgba(251, 191, 36, 0.1)',
            }}
          >
            <span>Visit Goodreads Profile</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Real Book Cover Showcase Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {BOOKS.map((book) => {
            const isSelected = selectedBook.id === book.id;
            return (
              <div
                key={book.id}
                onClick={() => setSelectedBook(book)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isSelected ? 'translateY(-10px) scale(1.04)' : 'none',
                }}
              >
                {/* Book Cover Image */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '160px',
                    height: '220px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: isSelected
                      ? '0 15px 30px rgba(251, 191, 36, 0.3), 0 0 20px rgba(251, 191, 36, 0.2)'
                      : '0 8px 20px rgba(0, 0, 0, 0.6)',
                    border: isSelected ? '2px solid #fbbf24' : '1px solid rgba(255, 255, 255, 0.15)',
                    marginBottom: '0.75rem',
                  }}
                >
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: isSelected ? '#fbbf24' : '#f8fafc', fontFamily: 'var(--font-serif)' }}>
                    {book.title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontStyle: 'italic' }}>
                    {book.author}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Book Spotlight Editorial Box */}
        <div
          className="glass-card book-spotlight-grid"
          style={{
            padding: '2.5rem',
            background: 'linear-gradient(150deg, rgba(28, 22, 40, 0.95) 0%, rgba(15, 12, 24, 0.98) 100%)',
            borderColor: 'rgba(251, 191, 36, 0.35)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.7)',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          {/* Cover Art Left */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={selectedBook.coverImage}
              alt={selectedBook.title}
              style={{
                width: '180px',
                height: '260px',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.8)',
                border: '1px solid rgba(251, 191, 36, 0.3)',
              }}
            />
          </div>

          {/* Reflection Copy Right */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fbbf24', marginBottom: '0.75rem' }}>
              <Quote size={26} />
              <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Literary Reflection
              </span>
            </div>

            <h3 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#f8fafc', fontFamily: 'var(--font-serif)', marginBottom: '0.2rem' }}>
              {selectedBook.title}
            </h3>
            <div style={{ fontSize: '1.1rem', color: '#fbbf24', fontStyle: 'italic', fontFamily: 'var(--font-serif)', marginBottom: '1.4rem' }}>
              by {selectedBook.author} · <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>{selectedBook.category}</span>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                lineHeight: 1.85,
                color: '#fef3c7',
                fontStyle: 'italic',
              }}
            >
              "{selectedBook.reflection}"
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .book-spotlight-grid {
            grid-template-columns: 200px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
