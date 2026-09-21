import React, { useState } from 'react';
import { Mail, Github, Linkedin, Code2, BookOpen, Copy, Check, ArrowUp, Download, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactFooter: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(label);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" style={{ padding: '6rem 0 3rem 0', background: '#040710', borderTop: '1px solid rgba(255, 255, 255, 0.08)', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            marginBottom: '4rem',
          }}
          className="footer-grid"
        >
          {/* Main Contact Callout */}
          <div>
            <div className="section-title-tag">
              <Send size={14} />
              <span>Let's Build Together</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f8fafc', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Initiate a Conversation.
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: 1.65, maxWidth: '550px', marginBottom: '2rem' }}>
              Whether you are looking for an ambitious engineering intern, a strategic analytics lead, or simply want to chat about AI systems and literature — my inbox is open.
            </p>

            {/* Email Contact Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', maxWidth: '480px' }}>
              <div
                style={{
                  padding: '1.1rem 1.4rem',
                  borderRadius: '12px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Mail size={20} color="#38bdf8" />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>Personal Email</div>
                    <a href={`mailto:${PERSONAL_INFO.personalEmail}`} style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.98rem' }}>
                      {PERSONAL_INFO.personalEmail}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.personalEmail, 'personal')}
                  className="badge badge-cyan"
                  style={{ cursor: 'pointer', padding: '0.4rem 0.75rem' }}
                >
                  {copiedEmail === 'personal' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  <span>{copiedEmail === 'personal' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div
                style={{
                  padding: '1.1rem 1.4rem',
                  borderRadius: '12px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Mail size={20} color="#c084fc" />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>Institutional Email</div>
                    <a href={`mailto:${PERSONAL_INFO.schoolEmail}`} style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.98rem' }}>
                      {PERSONAL_INFO.schoolEmail}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.schoolEmail, 'school')}
                  className="badge badge-violet"
                  style={{ cursor: 'pointer', padding: '0.4rem 0.75rem' }}
                >
                  {copiedEmail === 'school' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  <span>{copiedEmail === 'school' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links & Public Handles */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '1.25rem' }}>
              Public Profiles & Digital Handles
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.8rem', marginBottom: '2rem' }}>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="glass-card"
                style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
              >
                <Github size={20} color="#f8fafc" />
                <div>
                  <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.9rem' }}>GitHub</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>@MujahidKalanthar</div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-card"
                style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
              >
                <Linkedin size={20} color="#38bdf8" />
                <div>
                  <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.9rem' }}>LinkedIn</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>/in/mujahid-kalanthar</div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noreferrer"
                className="glass-card"
                style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
              >
                <Code2 size={20} color="#f59e0b" />
                <div>
                  <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.9rem' }}>LeetCode</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>u/MujahidKalanthar</div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.goodreads}
                target="_blank"
                rel="noreferrer"
                className="glass-card"
                style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
              >
                <BookOpen size={20} color="#c084fc" />
                <div>
                  <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.9rem' }}>Goodreads</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>@ardentpandabear</div>
                </div>
              </a>
            </div>

            {/* Resume Button */}
            <div>
              <a
                href={PERSONAL_INFO.resumePath}
                download="Mujahid_Kalanthar_Resume.pdf"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Download size={16} />
                <span>Download Mujahid Kalanthar Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#64748b',
          }}
        >
          <div>
            © {new Date().getFullYear()} Mujahid Kalanthar. Designed & Built with Precision.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              color: '#94a3b8',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.82rem',
              cursor: 'pointer',
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .footer-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
