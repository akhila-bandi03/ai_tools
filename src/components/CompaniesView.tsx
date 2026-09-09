import React from 'react';
import { MOCK_COMPANIES, Company } from '../data/mockEcosystem';
import { Building2, Sparkles, ExternalLink, MapPin, Calendar, DollarSign, Layers } from 'lucide-react';

interface CompaniesViewProps {
  onSelectTool: (slug: string) => void;
}

export const CompaniesView: React.FC<CompaniesViewProps> = ({ onSelectTool }) => {
  return (
    <div className="wrap" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(110,86,207,0.12)', border: '1px solid rgba(110,86,207,0.25)', borderRadius: '99px', padding: '4px 14px', marginBottom: '16px' }}>
          <Building2 size={12} color="#a78bfa" />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#a78bfa', letterSpacing: '0.04em' }}>
            Foundational Labs & Ecosystem Builders
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '14px' }}>
          Leading Global AI Companies
        </h1>
        <p style={{ fontSize: '0.9375rem', color: '#a1a1aa', lineHeight: 1.6 }}>
          Explore the venture-backed labs, research institutions, and foundational creators building next-generation neural technology.
        </p>
      </div>

      {/* Companies Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
        {MOCK_COMPANIES.map((company) => (
          <div
            key={company.id}
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
            className="hover:border-[#383848]"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img
                    src={company.logo}
                    alt={company.name}
                    style={{ width: '40px', height: '40px', borderRadius: '10px', objectFit: 'cover', background: '#16161c' }}
                  />
                  <div>
                    <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#fff' }}>{company.name}</h3>
                    <span style={{ fontSize: '0.6875rem', color: '#71717a' }}>HQ: {company.headquarters}</span>
                  </div>
                </div>
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  title="Visit Website"
                >
                  <ExternalLink size={13} />
                </a>
              </div>

              <p style={{ fontSize: '0.8125rem', color: '#d4d4d8', lineHeight: 1.6, marginBottom: '16px' }}>
                {company.tagline}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
                <div style={{ background: '#131319', padding: '8px 10px', borderRadius: '8px', border: '1px solid #1c1c24' }}>
                  <span style={{ fontSize: '0.625rem', color: '#71717a', textTransform: 'uppercase', display: 'block' }}>Founded</span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#fff' }}>{company.founded}</span>
                </div>
                <div style={{ background: '#131319', padding: '8px 10px', borderRadius: '8px', border: '1px solid #1c1c24' }}>
                  <span style={{ fontSize: '0.625rem', color: '#71717a', textTransform: 'uppercase', display: 'block' }}>Valuation / Funding</span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#34d399' }}>{company.valuation}</span>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #1c1c24', paddingTop: '14px', marginTop: 'auto' }}>
              <span style={{ fontSize: '0.6875rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                Flagship AI Products
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {company.flagshipProducts.map((prod) => (
                  <span
                    key={prod}
                    style={{ fontSize: '0.75rem', background: '#151322', border: '1px solid rgba(110,86,207,0.3)', color: '#c4b5fd', padding: '3px 8px', borderRadius: '6px', fontWeight: 500 }}
                  >
                    {prod}
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
