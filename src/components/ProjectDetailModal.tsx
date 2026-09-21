import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.25rem',
          background: '#0a0f1d',
          borderColor: 'rgba(56, 189, 248, 0.4)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
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
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
            <span className="badge badge-cyan">{project.category}</span>
            <span style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>{project.period}</span>
            {project.recognition && (
              <span className="badge badge-amber">{project.recognition}</span>
            )}
          </div>

          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em' }}>
            {project.title}
          </h2>
          <div style={{ fontSize: '1.05rem', color: '#38bdf8', fontWeight: 500, marginTop: '0.2rem' }}>
            {project.subtitle}
          </div>
        </div>

        {/* Full Project Description */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Layers size={18} color="#38bdf8" />
            <span>Problem & Engineering Overview</span>
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.7 }}>
            {project.fullDesc}
          </p>
        </div>

        {/* Architecture Flow / Highlights */}
        {project.architectureHighlights && (
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Cpu size={18} color="#a855f7" />
              <span>System Architecture & Pipeline Flow</span>
            </h3>
            <div
              style={{
                padding: '1rem',
                borderRadius: '10px',
                background: 'rgba(8, 12, 20, 0.8)',
                border: '1px solid rgba(168, 85, 247, 0.25)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: '#e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {project.architectureHighlights.map((arch, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ color: '#a855f7', fontWeight: 700 }}>0{idx + 1}.</span>
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Technical Decisions & Features */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={18} color="#10b981" />
            <span>Key Implementation Details</span>
          </h3>
          <ul style={{ paddingLeft: '0.5rem', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {project.highlights.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.93rem', lineHeight: 1.6 }}>
                <CheckCircle2 size={16} color="#10b981" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem', fontFamily: 'var(--font-mono)' }}>
            Technologies & Frameworks
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="badge" style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#e2e8f0', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <ExternalLink size={16} />
              <span>Launch Live Application</span>
            </a>
          )}

          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">
            <Github size={16} />
            <span>View Source Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
};
