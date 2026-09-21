import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Layers, Cpu, Sparkles } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'All' | 'Full-Stack & AI' | 'Strategy & Analytics' | 'Civic Tech'>('All');

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ padding: '6.5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div className="section-title-tag" style={{ color: '#f59e0b' }}>
            <Layers size={14} />
            <span>Engineered Products & Intelligence Platforms</span>
          </div>
          <h2 className="section-heading">
            Selected Technical Works
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Production-grade systems built around deterministic logic, zero-hallucination RAG pipelines, and strategic analytics engines.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3.5rem',
          }}
        >
          {(['All', 'Full-Stack & AI', 'Strategy & Analytics', 'Civic Tech'] as const).map((tab) => {
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
                  color: active ? '#0c0904' : '#94a3b8',
                  background: active ? '#f59e0b' : 'rgba(255, 255, 255, 0.04)',
                  border: active ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
              >
                {tab === 'All' ? 'All Platforms (6)' : tab}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.25rem',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem',
                position: 'relative',
                background: project.featured
                  ? 'linear-gradient(160deg, rgba(18, 22, 34, 0.95) 0%, rgba(28, 34, 50, 0.5) 100%)'
                  : 'rgba(18, 22, 34, 0.65)',
                borderColor: project.featured
                  ? 'rgba(245, 158, 11, 0.35)'
                  : 'rgba(255, 255, 255, 0.08)',
              }}
            >
              <div>
                {/* Image Screenshot Preview */}
                {project.imagePath && (
                  <div
                    onClick={() => onSelectProject(project)}
                    style={{
                      position: 'relative',
                      height: '210px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      marginBottom: '1.4rem',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6)',
                      cursor: 'pointer',
                    }}
                  >
                    <img
                      src={project.imagePath}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease',
                      }}
                      className="project-screenshot-img"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, transparent 50%, rgba(10, 13, 20, 0.85) 100%)',
                      }}
                    />
                  </div>
                )}

                {/* Header Meta */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <span className={project.category === 'Full-Stack & AI' ? 'badge badge-amber' : project.category === 'Strategy & Analytics' ? 'badge badge-terracotta' : 'badge badge-emerald'}>
                    {project.category}
                  </span>

                  <span style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                    {project.period}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.2rem' }}>
                  {project.title}
                </h3>
                <div style={{ fontSize: '0.86rem', color: '#f59e0b', fontWeight: 600, marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>
                  {project.subtitle}
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.4rem' }}>
                  {project.shortDesc}
                </p>

                {/* Bullet Highlights */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {project.highlights.slice(0, 2).map((hl, idx) => (
                    <li key={idx} style={{ fontSize: '0.84rem', color: '#94a3b8', display: 'flex', alignItems: 'flex-start', gap: '0.4rem', lineHeight: 1.5 }}>
                      <span style={{ color: '#f59e0b', fontWeight: 700 }}>›</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#cbd5e1',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <button
                    onClick={() => onSelectProject(project)}
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#f59e0b',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      cursor: 'pointer',
                    }}
                  >
                    <span>Architecture & Case Study</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="Live Application"
                        style={{ color: '#10b981', display: 'flex', alignItems: 'center' }}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      title="GitHub Repository"
                      style={{ color: '#94a3b8', display: 'flex', alignItems: 'center' }}
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-screenshot-img:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};
