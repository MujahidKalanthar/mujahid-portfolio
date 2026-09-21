import React, { useState } from 'react';
import { Cpu, Terminal, Database, LineChart, Code2, Layers, Server } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const StackMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Core Languages':
        return <Code2 size={20} color="#f59e0b" />;
      case 'Full-Stack & Backend':
        return <Terminal size={20} color="#ea580c" />;
      case 'AI, RAG & LLM Systems':
        return <Cpu size={20} color="#10b981" />;
      case 'Databases & Cloud':
        return <Database size={20} color="#f59e0b" />;
      case 'Data Analytics & ML':
        return <LineChart size={20} color="#ea580c" />;
      default:
        return <Server size={20} color="#94a3b8" />;
    }
  };

  const filteredCategories = activeTab === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.category === activeTab);

  return (
    <section id="stack" style={{ padding: '6.5rem 0', background: 'rgba(8, 12, 20, 0.65)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-title-tag">
            <Cpu size={14} />
            <span>Categorized Engineering Ecosystem</span>
          </div>
          <h2 className="section-heading">
            Technical Stack & Architecture
          </h2>
          <p className="section-desc">
            Languages, frameworks, database architectures, and AI tooling used across production engineering and strategic analytics platforms.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <button
            onClick={() => setActiveTab('All')}
            style={{
              padding: '0.45rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.84rem',
              fontWeight: activeTab === 'All' ? 700 : 500,
              color: activeTab === 'All' ? '#0c0904' : '#94a3b8',
              background: activeTab === 'All' ? '#f59e0b' : 'rgba(255, 255, 255, 0.04)',
              border: activeTab === 'All' ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Complete Stack
          </button>
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = activeTab === cat.category;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(cat.category)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.84rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#0c0904' : '#94a3b8',
                  background: isActive ? '#f59e0b' : 'rgba(255, 255, 255, 0.04)',
                  border: isActive ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Ecosystem Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                background: 'linear-gradient(150deg, rgba(18, 22, 34, 0.9) 0%, rgba(28, 34, 50, 0.5) 100%)',
                borderColor: 'rgba(245, 158, 11, 0.25)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.85rem' }}>
                {getCategoryIcon(cat.category)}
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc' }}>
                  {cat.category}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      padding: '0.5rem 0.95rem',
                      borderRadius: '8px',
                      fontSize: '0.88rem',
                      fontFamily: 'var(--font-mono)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#f8fafc',
                      transition: 'all 0.25s ease',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
