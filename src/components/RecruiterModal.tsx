import React, { useState } from 'react';
import { X, Download, Mail, ExternalLink, Check, Copy, Award, Briefcase, GraduationCap, Github, Linkedin, Code2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { ALL_COMPETITIONS, FullCompetition } from '../data/competitionsData';

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterModal: React.FC<RecruiterModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const copyEmailToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          background: '#0d1322',
          borderColor: 'rgba(168, 85, 247, 0.4)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.7)',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
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
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1.2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#c084fc', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <span>Executive Recruiter Brief</span>
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc', marginTop: '0.3rem' }}>
            {PERSONAL_INFO.name} — Candidate Profile
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
            B.Tech Electronics & Communication Engineering (2024–2028) · MNNIT Allahabad
          </p>
        </div>

        {/* 30-Second Executive Summary */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Briefcase size={16} color="#38bdf8" />
            <span>30-Second Candidate Snapshot</span>
          </h3>
          <ul style={{ paddingLeft: '1.2rem', color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li>
              <strong>Target Roles:</strong> Software Engineering Intern / Full-Stack Engineer / AI Systems Engineer / Data Analytics.
            </li>
            <li>
              <strong>Technical Strengths:</strong> Production React 19/TypeScript, FastAPI/Python, LangChain RAG architectures, Supabase RLS, SQLite WAL, Docker, and PostgreSQL.
            </li>
            <li>
              <strong>Business & Problem Solving:</strong> 5+ National Podium Finishes and 10+ Shortlists across SRCC, IITs, IIMs, IISc, and NMIMS in strategy & analytics competitions across 27 national events.
            </li>
            <li>
              <strong>Industry Experience:</strong> Software Development Intern at Quality Techno Certification (Riyadh, Saudi Arabia — Hybrid).
            </li>
          </ul>
        </div>

        {/* Top Flagship Projects (Quick Links) */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Code2 size={16} color="#a855f7" />
            <span>Key Featured Projects</span>
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {PROJECTS.filter(p => p.featured).map((proj) => (
              <div
                key={proj.id}
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.95rem' }}>
                    {proj.title} <span style={{ color: '#94a3b8', fontWeight: 400, fontSize: '0.82rem' }}>— {proj.subtitle}</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                    {proj.techStack.slice(0, 4).join(' · ')}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="badge badge-cyan"
                      style={{ textDecoration: 'none' }}
                    >
                      <ExternalLink size={12} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="badge"
                    style={{ textDecoration: 'none' }}
                  >
                    <Github size={12} />
                    <span>Repo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* National Case Competition Achievements */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Award size={16} color="#f59e0b" />
            <span>National Case Competition Podium Track Record</span>
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.6rem' }}>
            {ALL_COMPETITIONS.slice(0, 4).map((comp: FullCompetition) => (
              <div
                key={comp.id}
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: comp.resultCategory === 'Podium' ? '#f59e0b' : '#38bdf8' }}>
                  {comp.result} Place
                </div>
                <div style={{ fontSize: '0.82rem', color: '#e2e8f0', fontWeight: 600 }}>{comp.title}</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{comp.organizer}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Download CV & Direct Contact Footer */}
        <div
          style={{
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            <a
              href={PERSONAL_INFO.resumePath}
              download="Mujahid_Kalanthar_Resume.pdf"
              className="btn-primary"
              style={{ fontSize: '0.88rem' }}
            >
              <Download size={16} />
              <span>Download Official Resume (PDF)</span>
            </a>

            <button
              onClick={() => copyEmailToClipboard(PERSONAL_INFO.personalEmail)}
              className="btn-secondary"
              style={{ fontSize: '0.88rem' }}
            >
              {copiedEmail ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
              <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
            </button>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" style={{ color: '#94a3b8' }} title="GitHub">
              <Github size={20} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" style={{ color: '#38bdf8' }} title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${PERSONAL_INFO.personalEmail}`} style={{ color: '#a855f7' }} title="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
