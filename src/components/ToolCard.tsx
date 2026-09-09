import React from 'react';
import { Star, CheckCircle2, Bookmark, ArrowRight, ArrowLeftRight } from 'lucide-react';
import { Tool } from '../types/tool';

interface ToolCardProps {
  tool: Tool;
  viewMode: 'grid' | 'list';
  onSelect: (slug: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (e: React.MouseEvent, slug: string) => void;
  isCompared: boolean;
  onToggleCompare: (e: React.MouseEvent, tool: Tool) => void;
}

const getBadge = (type: string) => {
  switch (type) {
    case 'Free': return 'badge-free';
    case 'Freemium': return 'badge-freemium';
    case 'Paid': return 'badge-paid';
    case 'Open Source': return 'badge-opensource';
    default: return 'badge-freemium';
  }
};

const Logo: React.FC<{ tool: Tool; size: number }> = ({ tool, size }) => {
  const [failed, setFailed] = React.useState(false);
  const s = size + 'px';
  const initial = tool.name.charAt(0).toUpperCase();

  return (
    <div
      style={{
        width: s, height: s, borderRadius: '10px', flexShrink: 0,
        background: failed ? (tool.brandColor || '#1a1a1f') : '#0f0f12',
        border: '1px solid rgba(255,255,255,0.07)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {failed ? (
        <span style={{ fontSize: size * 0.42 + 'px', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{initial}</span>
      ) : (
        <img
          src={tool.logo} alt={tool.name}
          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '3px' }}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
};

export const ToolCard: React.FC<ToolCardProps> = ({
  tool, viewMode, onSelect, isBookmarked, onToggleBookmark, isCompared, onToggleCompare,
}) => {
  if (viewMode === 'list') {
    return (
      <div className="card-list group" onClick={() => onSelect(tool.slug)}>
        <Logo tool={tool} size={44} />

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{tool.name}</span>
            {tool.isVerified && <CheckCircle2 size={13} color="#6E56CF" />}
            <span className={`badge ${getBadge(tool.pricingType)}`}>{tool.pricingType}</span>
            <span style={{ fontSize: '0.75rem', color: '#52525b' }}>· {tool.category}</span>
          </div>
          <p style={{ fontSize: '0.8125rem', color: '#71717a', lineHeight: 1.5 }} className="clamp-1">{tool.tagline}</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24' }}>
            <Star size={13} fill="#fbbf24" />
            <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#fff' }}>{tool.rating.toFixed(1)}</span>
            <span style={{ fontSize: '0.75rem', color: '#52525b' }}>({tool.reviewCount})</span>
          </div>
          <span style={{ fontSize: '0.8125rem', color: '#a1a1aa', fontWeight: 500, minWidth: '60px', textAlign: 'right' }}>{tool.startingPrice}</span>
        </div>

        <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }} onClick={e => e.stopPropagation()}>
          <button
            className={`btn-icon ${isCompared ? 'active' : ''}`}
            onClick={e => onToggleCompare(e, tool)}
            title="Compare"
          ><ArrowLeftRight size={13} /></button>
          <button
            className={`btn-icon ${isBookmarked ? 'active' : ''}`}
            onClick={e => onToggleBookmark(e, tool.slug)}
            title="Bookmark"
          ><Bookmark size={13} fill={isBookmarked ? 'currentColor' : 'none'} /></button>
          <button className="btn-icon" onClick={() => onSelect(tool.slug)} title="View">
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    );
  }

  // Grid card
  return (
    <div className="card group" onClick={() => onSelect(tool.slug)}>
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
          <Logo tool={tool} size={42} />
          <div style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '1px' }}>
              <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {tool.name}
              </span>
              {tool.isVerified && <CheckCircle2 size={13} color="#6E56CF" strokeWidth={2.5} />}
            </div>
            <span style={{ fontSize: '0.6875rem', color: '#52525b', display: 'block' }}>by {tool.companyName}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }} onClick={e => e.stopPropagation()}>
          <button className={`btn-icon ${isCompared ? 'active' : ''}`} onClick={e => onToggleCompare(e, tool)} title="Compare">
            <ArrowLeftRight size={12} />
          </button>
          <button className={`btn-icon ${isBookmarked ? 'active' : ''}`} onClick={e => onToggleBookmark(e, tool.slug)} title="Bookmark">
            <Bookmark size={12} fill={isBookmarked ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Tagline */}
      <p style={{ fontSize: '0.8125rem', color: '#71717a', lineHeight: 1.6 }} className="clamp-2">{tool.tagline}</p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
        {tool.tags.slice(0, 3).map(tag => (
          <span key={tag} className="tag">#{tag}</span>
        ))}
        {tool.tags.length > 3 && <span style={{ fontSize: '0.6875rem', color: '#52525b', padding: '2px 4px' }}>+{tool.tags.length - 3}</span>}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className={`badge ${getBadge(tool.pricingType)}`}>{tool.pricingType}</span>
          <span style={{ fontSize: '0.75rem', color: '#a1a1aa', fontWeight: 500 }}>{tool.startingPrice}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#fbbf24' }}>
          <Star size={12} fill="#fbbf24" />
          <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#fff' }}>{tool.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};
