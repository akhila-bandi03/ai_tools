import React, { useState } from 'react';
import { MOCK_TASKS, TaskWorkflow } from '../data/mockEcosystem';
import { Sparkles, ArrowRight, Clock, Zap, CheckCircle2, Play, Code2, Cpu, FileText } from 'lucide-react';

interface TasksViewProps {
  onSelectTool: (slug: string) => void;
}

export const TasksView: React.FC<TasksViewProps> = ({ onSelectTool }) => {
  const [filterCat, setFilterCat] = useState('All');
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const categories = ['All', 'Engineering & Code', 'Research & Search', 'Audio & Voice', 'Video & Motion', 'Sales & Growth'];

  const samplePipelines = [
    {
      title: 'Fullstack App Prototyping Pipeline',
      steps: [
        { name: '1. UI Schema Generation', tool: 'v0 by Vercel', slug: 'v0', desc: 'Prompts generate accessible React + Tailwind components.' },
        { name: '2. Multi-File Codebase Assembly', tool: 'Cursor IDE', slug: 'cursor', desc: 'Composer agent connects API endpoints and database handlers.' },
        { name: '3. Test Suite Verification', tool: 'ChatGPT o1', slug: 'chatgpt', desc: 'Reasoning pass verifies edge cases, TypeScript strict types, and unit tests.' }
      ]
    },
    {
      title: 'Academic & Market Intelligence Pipeline',
      steps: [
        { name: '1. Real-Time Citation Search', tool: 'Perplexity Pro', slug: 'perplexity', desc: 'Extract verified facts from scientific papers with live links.' },
        { name: '2. Synthesis & Executive Summary', tool: 'Claude 3.5 Sonnet', slug: 'claude-3-5-sonnet', desc: 'Compile structured takeaways, market trends, and tables.' },
        { name: '3. Audio Briefing Generation', tool: 'ElevenLabs', slug: 'elevenlabs', desc: 'Convert structured memo into natural spoken audio briefing.' }
      ]
    }
  ];

  const filtered = MOCK_TASKS.filter((task) => {
    return filterCat === 'All' || task.category === filterCat;
  });

  return (
    <div className="wrap" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      {/* Hero Header */}
      <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 36px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(110,86,207,0.12)', border: '1px solid rgba(110,86,207,0.25)', borderRadius: '99px', padding: '4px 14px', marginBottom: '16px' }}>
          <Sparkles size={12} color="#a78bfa" />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#a78bfa', letterSpacing: '0.04em' }}>
            Interactive Automation Pipelines
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '14px' }}>
          AI Tasks & Visual Workflow Pipelines
        </h1>
        <p style={{ fontSize: '0.9375rem', color: '#a1a1aa', lineHeight: 1.6 }}>
          Explore autonomous chains where multiple specialized models cooperate to complete complex production tasks.
        </p>
      </div>

      {/* 🌟 STANDOUT FEATURE: Interactive Visual Pipeline Studio */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0e0e14 0%, #12101e 100%)',
          border: '1px solid rgba(110,86,207,0.35)',
          borderRadius: '20px',
          padding: '24px 28px',
          marginBottom: '48px',
          boxShadow: '0 20px 40px -15px rgba(0,0,0,0.8)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '4px' }}>
              VISUAL PIPELINE STUDIO
            </span>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff', margin: 0 }}>
              {samplePipelines[activeWorkflow].title}
            </h3>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            {samplePipelines.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveWorkflow(idx);
                  setActiveStep(0);
                }}
                className={`pill ${activeWorkflow === idx ? 'active' : ''}`}
                style={{ fontSize: '0.75rem', padding: '5px 12px' }}
              >
                Pipeline {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Pipeline Nodes Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', position: 'relative' }}>
          {samplePipelines[activeWorkflow].steps.map((st, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                style={{
                  background: isCurrent ? '#181528' : '#0b0b0e',
                  border: isCurrent ? '1px solid #6E56CF' : '1px solid #202028',
                  borderRadius: '14px',
                  padding: '18px',
                  cursor: 'pointer',
                  transition: 'all 150ms ease',
                  position: 'relative',
                  boxShadow: isCurrent ? '0 0 20px rgba(110,86,207,0.3)' : 'none'
                }}
                className="hover:border-[#6E56CF]/60"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: isCurrent ? '#c4b5fd' : '#71717a' }}>
                    {st.name}
                  </span>
                  <Zap size={13} color={isCurrent ? '#a78bfa' : '#52525b'} />
                </div>

                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
                  {st.tool}
                </div>

                <p style={{ fontSize: '0.75rem', color: '#a1a1aa', margin: 0, lineHeight: 1.5 }}>
                  {st.desc}
                </p>

                <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectTool(st.slug);
                    }}
                    style={{ fontSize: '0.6875rem', color: '#a78bfa', background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}
                    className="hover:text-white"
                  >
                    <span>Inspect Tool</span>
                    <ArrowRight size={10} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filter Row */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}>
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
