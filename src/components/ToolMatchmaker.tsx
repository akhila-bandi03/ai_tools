import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, Zap, DollarSign, Layers } from 'lucide-react';

interface ToolMatchmakerProps {
  onSelectTool: (slug: string) => void;
}

export const ToolMatchmaker: React.FC<ToolMatchmakerProps> = ({ onSelectTool }) => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');
  const [goal, setGoal] = useState('');

  const roles = [
    { id: 'dev', label: 'Developer / Engineer', icon: '💻' },
    { id: 'creator', label: 'Creator / Marketer', icon: '🎨' },
    { id: 'researcher', label: 'Researcher / Student', icon: '🔬' },
    { id: 'founder', label: 'Founder / Business Lead', icon: '🚀' },
  ];

  const goalsByRole: Record<string, { id: string; label: string; tools: string[]; reason: string }[]> = {
    dev: [
      { id: 'build-app', label: 'Build fullstack web apps fast', tools: ['cursor', 'v0'], reason: 'Cursor provides multi-file AI editing while v0 generates full React components.' },
      { id: 'debug-refactor', label: 'Refactor legacy code & write tests', tools: ['cursor', 'chatgpt'], reason: 'Automated test suite generation with deep codebase context.' },
    ],
    creator: [
      { id: 'video-audio', label: 'Produce high-converting video & voiceover', tools: ['runway-gen3', 'elevenlabs'], reason: 'Generate 4K cinematic scenes with Runway and studio-grade voice with ElevenLabs.' },
      { id: 'brand-visuals', label: 'Create photorealistic brand visuals', tools: ['midjourney', 'chatgpt'], reason: 'State-of-the-art aesthetic rendering with custom prompt styling.' },
    ],
    researcher: [
      { id: 'papers-citations', label: 'Search literature with live verified sources', tools: ['perplexity', 'chatgpt'], reason: 'Extract verified facts with direct academic links.' },
    ],
    founder: [
      { id: 'automate-workflows', label: 'Automate sales outreach & customer tickets', tools: ['chatgpt', 'perplexity'], reason: 'Low-latency agent pipelines with high resolution rate.' },
    ],
  };

  const handleReset = () => {
    setStep(1);
    setRole('');
    setGoal('');
  };

  const selectedGoalObj = role && goal ? goalsByRole[role]?.find(g => g.id === goal) : null;

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, rgba(20,18,32,0.85) 0%, rgba(13,13,18,0.9) 100%)',
        border: '1px solid rgba(110,86,207,0.35)',
        borderRadius: '20px',
        padding: '24px 28px',
        maxWidth: '780px',
        margin: '0 auto 40px',
        boxShadow: '0 20px 50px -15px rgba(110,86,207,0.25)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Top ambient glow */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '120px', background: 'radial-gradient(circle, rgba(110,86,207,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ padding: '5px 8px', borderRadius: '8px', background: 'rgba(110,86,207,0.2)', color: '#a78bfa', fontSize: '0.75rem', fontWeight: 700, border: '1px solid rgba(110,86,207,0.4)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Sparkles size={12} />
            AI MATCHMAKER
          </span>
          <span style={{ fontSize: '0.8125rem', color: '#e4e4e7', fontWeight: 600 }}>
            Find Your Ideal AI Tool Stack in 10 Seconds
          </span>
        </div>

        {step > 1 && (
          <button
            onClick={handleReset}
            style={{ fontSize: '0.75rem', color: '#a78bfa', background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Start Over
          </button>
        )}
      </div>

      {/* Step 1: Select Role */}
      {step === 1 && (
        <div>
          <p style={{ fontSize: '0.8125rem', color: '#a1a1aa', marginBottom: '14px' }}>
            1. What best describes your primary role?
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' }}>
            {roles.map((r) => (
              <button
                key={r.id}
                onClick={() => {
                  setRole(r.id);
                  setStep(2);
                }}
                style={{
                  padding: '12px 14px',
                  borderRadius: '12px',
                  background: '#13131a',
                  border: '1px solid #252532',
                  color: '#fff',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 150ms ease'
                }}
                className="hover:border-[#6E56CF] hover:bg-[#191728]"
              >
                <span>{r.icon}</span>
                <span>{r.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Select Goal */}
      {step === 2 && (
        <div>
          <p style={{ fontSize: '0.8125rem', color: '#a1a1aa', marginBottom: '14px' }}>
            2. What specific task do you want to accomplish?
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {goalsByRole[role]?.map((g) => (
              <button
                key={g.id}
                onClick={() => {
                  setGoal(g.id);
                  setStep(3);
                }}
                style={{
                  padding: '14px 18px',
                  borderRadius: '12px',
                  background: '#13131a',
                  border: '1px solid #252532',
                  color: '#fff',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 150ms ease'
                }}
                className="hover:border-[#6E56CF] hover:bg-[#191728]"
              >
                <span>{g.label}</span>
                <ArrowRight size={14} color="#a78bfa" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Recommendation */}
      {step === 3 && selectedGoalObj && (
        <div style={{ animation: 'fadeIn 200ms ease' }}>
          <div style={{ background: '#0e0e14', border: '1px solid rgba(110,86,207,0.4)', borderRadius: '14px', padding: '18px', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.6875rem', color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
              ✓ Recommended AI Match
            </span>
            <p style={{ fontSize: '0.8125rem', color: '#d4d4d8', margin: '0 0 14px 0', lineHeight: 1.5 }}>
              {selectedGoalObj.reason}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {selectedGoalObj.tools.map((slug) => (
                <button
                  key={slug}
                  onClick={() => onSelectTool(slug)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '99px',
                    background: '#6E56CF',
                    color: '#fff',
                    border: 'none',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 0 16px rgba(110,86,207,0.4)'
                  }}
                  className="hover:bg-[#7D66D9] transition-all"
                >
                  <Zap size={12} />
                  <span>Launch {slug.toUpperCase()}</span>
                  <ArrowRight size={12} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
