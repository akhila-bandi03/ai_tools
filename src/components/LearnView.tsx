import React, { useState } from 'react';
import { MOCK_LEARN_RESOURCES, LearnResource } from '../data/mockEcosystem';
import { BookOpen, GraduationCap, FileText, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';

export const LearnView: React.FC = () => {
  const [activeType, setActiveType] = useState('All');
  const types = ['All', 'Guide', 'Course', 'E-Book', 'Prompt Pack'];

  const filtered = MOCK_LEARN_RESOURCES.filter(
    (res) => activeType === 'All' || res.type === activeType
  );

  return (
    <div className="wrap" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(110,86,207,0.12)', border: '1px solid rgba(110,86,207,0.25)', borderRadius: '99px', padding: '4px 14px', marginBottom: '16px' }}>
          <GraduationCap size={12} color="#a78bfa" />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#a78bfa', letterSpacing: '0.04em' }}>
            Knowledge & Mastery
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '14px' }}>
          AI Education & Implementation Guides
        </h1>
        <p style={{ fontSize: '0.9375rem', color: '#a1a1aa', lineHeight: 1.6 }}>
          Deep-dive playbooks, executive handbooks, prompt kits, and masterclasses curated by AI researchers.
        </p>
      </div>

      {/* Filter tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px', flexWrap: 'wrap' }}>
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setActiveType(t)}
            className={`pill ${activeType === t ? 'active' : ''}`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Resource Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {filtered.map((res) => (
          <div
            key={res.id}
            style={{
              background: '#0d0d12',
              border: '1px solid #1f1f26',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 180ms ease'
            }}
            className="hover:border-[#383848] group"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#a78bfa', background: 'rgba(110,86,207,0.14)', border: '1px solid rgba(110,86,207,0.25)', padding: '2px 8px', borderRadius: '99px', textTransform: 'uppercase' }}>
                  {res.type}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#71717a' }}>{res.readTime}</span>
              </div>

              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#fff', marginBottom: '10px', lineHeight: 1.35 }} className="group-hover:text-[#c4b5fd] transition-colors">
                {res.title}
              </h3>

              <p style={{ fontSize: '0.8125rem', color: '#a1a1aa', lineHeight: 1.6, marginBottom: '20px' }}>
                {res.description}
              </p>
            </div>

            <div style={{ borderTop: '1px solid #1c1c24', paddingTop: '16px', marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.75rem', color: '#71717a' }}>
                By <strong style={{ color: '#d4d4d8' }}>{res.author}</strong>
              </span>
              <button
                className="btn-secondary"
                style={{ padding: '6px 12px', fontSize: '0.75rem' }}
                onClick={() => alert(`Opening ${res.title}...`)}
              >
                <span>Read Resource</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
