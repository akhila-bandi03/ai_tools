import React, { useState } from 'react';
import { MOCK_TASKS, TaskWorkflow } from '../data/mockEcosystem';
import { Sparkles, ArrowRight, Clock, Zap, CheckCircle2, Search } from 'lucide-react';

interface TasksViewProps {
  onSelectTool: (slug: string) => void;
}

export const TasksView: React.FC<TasksViewProps> = ({ onSelectTool }) => {
  const [filterCat, setFilterCat] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'Engineering & Code', 'Research & Search', 'Audio & Voice', 'Video & Motion', 'Sales & Growth'];

  const filtered = MOCK_TASKS.filter((task) => {
    const matchesCat = filterCat === 'All' || task.category === filterCat;
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase()) || task.description.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="wrap" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      {/* Hero Header */}
      <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(110,86,207,0.12)', border: '1px solid rgba(110,86,207,0.25)', borderRadius: '99px', padding: '4px 14px', marginBottom: '16px' }}>
          <Sparkles size={12} color="#a78bfa" />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#a78bfa', letterSpacing: '0.04em' }}>
            Curated Workflows & Automation
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '14px' }}>
          AI Tasks & Step-by-Step Workflows
        </h1>
        <p style={{ fontSize: '0.9375rem', color: '#a1a1aa', lineHeight: 1.6 }}>
          Discover the exact tool stacks, prompt pipelines, and automated steps top engineers and creators use daily.
        </p>
      </div>

      {/* Filter Row */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilterCat(c)}
              className={`pill ${filterCat === c ? 'active' : ''}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Workflow Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
        {filtered.map((task) => (
          <div
            key={task.id}
            style={{
              background: '#0d0d12',
              border: '1px solid #1e1e26',
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
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#a78bfa', background: 'rgba(110,86,207,0.14)', border: '1px solid rgba(110,86,207,0.25)', padding: '2px 8px', borderRadius: '99px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {task.category}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                  <Clock size={12} />
                  Saves {task.timeSaved}
                </span>
              </div>

              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#fff', marginBottom: '8px', lineHeight: 1.35 }} className="group-hover:text-[#c4b5fd] transition-colors">
                {task.title}
              </h3>

              <p style={{ fontSize: '0.8125rem', color: '#a1a1aa', lineHeight: 1.6, marginBottom: '20px' }}>
                {task.description}
              </p>
            </div>

            <div style={{ borderTop: '1px solid #1a1a22', paddingTop: '16px', marginTop: 'auto' }}>
              <span style={{ fontSize: '0.6875rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                Recommended Stack
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {task.recommendedToolSlugs.map((slug) => (
                  <button
                    key={slug}
                    onClick={() => onSelectTool(slug)}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#d4c8ff',
                      background: '#161424',
                      border: '1px solid rgba(110,86,207,0.3)',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                    className="hover:border-[#6E56CF] transition-colors"
                  >
                    <span>{slug.toUpperCase()}</span>
                    <ArrowRight size={10} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
