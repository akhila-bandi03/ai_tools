import React from 'react';
import { MOCK_BUSINESS_FUNCTIONS, BusinessFunction } from '../data/mockEcosystem';
import { Briefcase, CheckCircle2, TrendingUp, Sparkles, ArrowRight, Building2 } from 'lucide-react';

interface BusinessViewProps {
  onSelectTool: (slug: string) => void;
}

export const BusinessView: React.FC<BusinessViewProps> = ({ onSelectTool }) => {
  return (
    <div className="wrap" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(110,86,207,0.12)', border: '1px solid rgba(110,86,207,0.25)', borderRadius: '99px', padding: '4px 14px', marginBottom: '16px' }}>
          <Briefcase size={12} color="#a78bfa" />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#a78bfa', letterSpacing: '0.04em' }}>
            Enterprise AI Architecture
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '14px' }}>
          Business AI Solutions by Function
        </h1>
        <p style={{ fontSize: '0.9375rem', color: '#a1a1aa', lineHeight: 1.6 }}>
          Explore proven enterprise AI implementations across engineering, marketing, sales, and operations with quantified ROI.
        </p>
      </div>

      {/* Grid of Business Function Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
        {MOCK_BUSINESS_FUNCTIONS.map((bf) => (
          <div
            key={bf.id}
            style={{
              background: '#0d0d12',
              border: '1px solid #1f1f26',
              borderRadius: '16px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 180ms ease'
            }}
            className="hover:border-[#383848]"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff' }}>
                  {bf.title}
                </h3>
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#34d399', background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)', padding: '3px 8px', borderRadius: '99px' }}>
                  {bf.roiMultiplier}
                </span>
              </div>

              <p style={{ fontSize: '0.8125rem', color: '#a1a1aa', lineHeight: 1.65, marginBottom: '20px' }}>
                {bf.description}
              </p>

              <div style={{ marginBottom: '20px' }}>
                <span style={{ fontSize: '0.6875rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, display: 'block', marginBottom: '10px' }}>
                  Key Enterprise Use Cases
                </span>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {bf.useCases.map((uc, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#d4d4d8' }}>
                      <CheckCircle2 size={13} color="#6E56CF" style={{ flexShrink: 0 }} />
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #1c1c24', paddingTop: '16px', marginTop: 'auto' }}>
              <span style={{ fontSize: '0.6875rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                Leading Tools in this Function
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {bf.topTools.map((toolName) => (
                  <span
                    key={toolName}
                    style={{ fontSize: '0.75rem', background: '#14141a', border: '1px solid #24242e', color: '#c4b5fd', padding: '3px 9px', borderRadius: '6px', fontWeight: 500 }}
                  >
                    {toolName}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
