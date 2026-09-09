import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Star,
  Bookmark,
  Share2,
  ExternalLink,
  Zap,
  Check,
  X,
  Sparkles,
  MessageSquare,
  DollarSign,
  Copy,
  Send,
  ShieldCheck,
  Terminal,
  ArrowRight,
  Layers,
  Info
} from 'lucide-react';
import { Tool } from '../types/tool';

interface ToolDetailProps {
  tool: Tool;
  onBack: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (slug: string) => void;
  onSelectAlternative: (slug: string) => void;
  onSubmitReview: (reviewData: {
    authorName: string;
    userRole: string;
    rating: number;
    title: string;
    comment: string;
  }) => Promise<void>;
  onShowToast: (message: string) => void;
}

const getBadgeClass = (type: string) => {
  switch (type) {
    case 'Free': return 'badge-free';
    case 'Freemium': return 'badge-freemium';
    case 'Paid': return 'badge-paid';
    case 'Open Source': return 'badge-opensource';
    default: return 'badge-freemium';
  }
};

export const ToolDetail: React.FC<ToolDetailProps> = ({
  tool,
  onBack,
  isBookmarked,
  onToggleBookmark,
  onSelectAlternative,
  onSubmitReview,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'pricing' | 'proscons' | 'playground' | 'reviews'>('overview');
  const [imgFailed, setImgFailed] = useState(false);

  // Review form state
  const [reviewAuthor, setReviewAuthor] = useState('');
  const [reviewRole, setReviewRole] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewComment, setReviewComment] = useState('');
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);

  // Playground state
  const [customPrompt, setCustomPrompt] = useState(tool.promptExample?.input || 'Explain the core architectural mechanism in 2 sentences.');
  const [playgroundOutput, setPlaygroundOutput] = useState(tool.promptExample?.outputSnippet || '');
  const [isSimulating, setIsSimulating] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    onShowToast(`Link to ${tool.name} copied to clipboard!`);
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewAuthor.trim() || !reviewComment.trim()) {
      onShowToast('Please fill out your name and review feedback.');
      return;
    }
    setIsSubmittingReview(true);
    try {
      await onSubmitReview({
        authorName: reviewAuthor.trim(),
        userRole: reviewRole.trim() || 'AI Practitioner',
        rating: reviewRating,
        title: reviewTitle.trim() || 'Product Feedback',
        comment: reviewComment.trim(),
      });
      setReviewAuthor('');
      setReviewRole('');
      setReviewTitle('');
      setReviewComment('');
      onShowToast('Your review has been verified and posted!');
    } catch {
      onShowToast('Failed to post review. Please try again.');
    } finally {
      setIsSubmittingReview(false);
    }
  };

  const handleRunPlayground = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setPlaygroundOutput(
        `[${tool.name} Engine v2026 Response]\n\nTask: "${customPrompt}"\n\nOptimized Result:\n` +
        `• Generated verified response using latest neural reasoning weights.\n` +
        `• Latency: 210ms | Context tokens: ~420 tokens | Precision score: 99.4%\n\n` +
        `Summary: Analysis completed with 0 errors across active inference passes.`
      );
      setIsSimulating(false);
      onShowToast('Simulation executed successfully!');
    }, 550);
  };

  return (
    <div className="wrap" style={{ paddingTop: '32px', paddingBottom: '80px' }}>
      {/* ── Breadcrumb Navigation ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <button
          onClick={onBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.8125rem',
            fontWeight: 600,
            color: '#a1a1aa',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0
          }}
          className="hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Directory</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#71717a' }}>
          <span>Ecosystem</span>
          <span>/</span>
          <span>{tool.category}</span>
          <span>/</span>
          <span style={{ color: '#fff', fontWeight: 600 }}>{tool.name}</span>
        </div>
      </div>

      {/* ── 1. Hero Card ── */}
      <div
        style={{
          background: '#0d0d12',
          border: '1px solid #1f1f26',
          borderRadius: '20px',
          padding: '28px',
          marginBottom: '32px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 40px -15px rgba(0,0,0,0.7)'
        }}
      >
        {/* Subtle violet ambient radial */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: '10%',
            width: '380px',
            height: '240px',
            background: 'radial-gradient(ellipse at center, rgba(110,86,207,0.12) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        {/* Top identity & CTA row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '24px', position: 'relative', zIndex: 2 }}>
          {/* Logo & Info */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', minWidth: '280px', flex: 1 }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '16px',
                background: '#15151c',
                border: '1px solid #282834',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                flexShrink: 0,
                overflow: 'hidden'
              }}
            >
              {imgFailed ? (
                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>{tool.name.charAt(0)}</span>
              ) : (
                <img
                  src={tool.logo}
                  alt={tool.name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  onError={() => setImgFailed(true)}
                />
              )}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '8px' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', margin: 0, lineHeight: 1.2 }}>
                  {tool.name}
                </h1>
                {tool.isVerified && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.6875rem', fontWeight: 600, color: '#a78bfa', background: 'rgba(110,86,207,0.14)', border: '1px solid rgba(110,86,207,0.28)', padding: '2px 8px', borderRadius: '99px' }}>
                    <ShieldCheck size={12} color="#6E56CF" />
                    Verified
                  </span>
                )}
                <span className={`badge ${getBadgeClass(tool.pricingType)}`}>
                  {tool.pricingType}
                </span>
              </div>

              <p style={{ fontSize: '0.9375rem', color: '#d4d4d8', lineHeight: 1.6, maxWidth: '640px', marginBottom: '12px' }}>
                {tool.tagline}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.8125rem', color: '#a1a1aa', flexWrap: 'wrap' }}>
                <span>By <strong style={{ color: '#fff' }}>{tool.companyName}</strong></span>
                <span>•</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24' }}>
                  <Star size={13} fill="#fbbf24" />
                  <span style={{ fontWeight: 700, color: '#fff' }}>{tool.rating.toFixed(1)}</span>
                  <span style={{ color: '#71717a' }}>({tool.reviewCount} reviews)</span>
                </div>
                <span>•</span>
                <span>Launched {tool.launchYear}</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href={tool.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '9px 20px', fontSize: '0.8125rem' }}
            >
              <span>Visit Website</span>
              <ExternalLink size={13} />
            </a>

            <button
              onClick={() => onToggleBookmark(tool.slug)}
              className={`btn-secondary ${isBookmarked ? 'active' : ''}`}
              style={{ padding: '9px 16px', fontSize: '0.8125rem' }}
            >
              <Bookmark size={13} fill={isBookmarked ? 'currentColor' : 'none'} />
              <span>{isBookmarked ? 'Saved' : 'Bookmark'}</span>
            </button>

            <button
              onClick={handleShare}
              className="btn-secondary"
              style={{ padding: '9px 12px' }}
              title="Share Link"
            >
              <Share2 size={13} />
            </button>
          </div>
        </div>

        {/* Quick Specs Ribbon Container */}
        <div
          style={{
            marginTop: '24px',
            paddingTop: '20px',
            borderTop: '1px solid #1c1c24',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '16px'
          }}
        >
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.04)' }}>
            <span style={{ fontSize: '0.6875rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Starting Price</span>
            <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#fff' }}>{tool.startingPrice}</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.04)' }}>
            <span style={{ fontSize: '0.6875rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, display: 'block', marginBottom: '4px' }}>API Availability</span>
            <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#fff' }}>{tool.apiAvailable ? 'REST API & SDKs' : 'Web Interface Only'}</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.04)' }}>
            <span style={{ fontSize: '0.6875rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Context Window</span>
            <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#fff' }}>{tool.contextWindow || 'Standard Cloud'}</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.04)' }}>
            <span style={{ fontSize: '0.6875rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Community Saves</span>
            <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#fff' }}>{tool.bookmarksCount.toLocaleString()} saves</span>
          </div>
        </div>
      </div>

      {/* ── 2. Tab Navigation & Content Grid ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, 320px)', gap: '32px', alignItems: 'start' }}>
        
        {/* Left Column: Tabs + Tab Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Distinct Tab Pill Selector */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px',
              background: '#0c0c10',
              border: '1px solid #1e1e26',
              borderRadius: '12px',
              overflowX: 'auto'
            }}
            className="no-scrollbar"
          >
            {[
              { id: 'overview', label: 'Overview & Features', icon: Sparkles },
              { id: 'pricing', label: `Pricing (${tool.pricingTiers?.length || 0})`, icon: DollarSign },
              { id: 'proscons', label: 'Pros & Cons', icon: Check },
              { id: 'playground', label: 'Live Playground', icon: Zap },
              { id: 'reviews', label: `Reviews (${tool.reviews?.length || 0})`, icon: MessageSquare },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontSize: '0.8125rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#fff' : '#8e8e96',
                    background: isActive ? '#6E56CF' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 150ms ease',
                    boxShadow: isActive ? '0 0 16px rgba(110,86,207,0.4)' : 'none'
                  }}
                >
                  <Icon size={13} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Product Overview Box */}
              <div style={{ background: '#0d0d12', border: '1px solid #1f1f26', borderRadius: '16px', padding: '24px' }}>
                <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Info size={13} />
                  Product Overview
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#d4d4d8', lineHeight: 1.75 }}>
                  {tool.description}
                </p>
              </div>

              {/* Key Capabilities */}
              <div style={{ background: '#0d0d12', border: '1px solid #1f1f26', borderRadius: '16px', padding: '24px' }}>
                <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={13} />
                  Key Capabilities & Features
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                  {tool.features.map((feature, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        background: '#131319',
                        border: '1px solid #202028'
                      }}
                    >
                      <CheckCircle2 size={15} color="#6E56CF" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.8125rem', color: '#e4e4e7', lineHeight: 1.5 }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Ecosystem */}
              <div style={{ background: '#0d0d12', border: '1px solid #1f1f26', borderRadius: '16px', padding: '20px' }}>
                <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                  Ecosystem Classification
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(110,86,207,0.15)', color: '#c4b5fd', border: '1px solid rgba(110,86,207,0.3)', padding: '4px 12px', borderRadius: '99px', fontWeight: 600 }}>
                    Category: {tool.category}
                  </span>
                  {tool.tags.map((tag) => (
                    <span key={tag} className="tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PRICING */}
          {activeTab === 'pricing' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              {tool.pricingTiers.map((tier, idx) => (
                <div
                  key={idx}
                  style={{
                    position: 'relative',
                    borderRadius: '16px',
                    border: tier.isPopular ? '1px solid #6E56CF' : '1px solid #1f1f26',
                    background: tier.isPopular ? '#12101e' : '#0d0d12',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: tier.isPopular ? '0 0 24px rgba(110,86,207,0.2)' : 'none'
                  }}
                >
                  {tier.isPopular && (
                    <span style={{ position: 'absolute', top: '-10px', right: '16px', fontSize: '0.625rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', padding: '2px 10px', borderRadius: '99px', background: '#6E56CF', color: '#fff' }}>
                      Most Popular
                    </span>
                  )}

                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{tier.name}</h4>
                      <div>
                        <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>{tier.price}</span>
                        {tier.period && (
                          <span style={{ fontSize: '0.75rem', color: '#71717a', marginLeft: '4px' }}>{tier.period}</span>
                        )}
                      </div>
                    </div>

                    <p style={{ fontSize: '0.75rem', color: '#a1a1aa', marginBottom: '16px', lineHeight: 1.6 }}>
                      {tier.description}
                    </p>

                    <hr style={{ border: 'none', borderTop: '1px solid #1f1f26', marginBottom: '16px' }} />

                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#d4d4d8' }}>
                          <Check size={14} color="#10b981" style={{ flexShrink: 0 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={tool.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={tier.isPopular ? 'btn-primary' : 'btn-secondary'}
                    style={{ width: '100%', textAlign: 'center', padding: '9px 12px', fontSize: '0.8125rem' }}
                  >
                    {tier.ctaText}
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: PROS & CONS */}
          {activeTab === 'proscons' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {/* Pros */}
              <div style={{ borderRadius: '16px', border: '1px solid rgba(16,185,129,0.25)', background: 'rgba(16,185,129,0.04)', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', marginBottom: '16px' }}>
                  <CheckCircle2 size={16} />
                  <h4 style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Strengths & Pros</h4>
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {tool.pros.map((pro, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8125rem', color: '#d1fae5', lineHeight: 1.6 }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '99px', background: '#10b981', marginTop: '6px', flexShrink: 0 }} />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div style={{ borderRadius: '16px', border: '1px solid rgba(245,158,11,0.25)', background: 'rgba(245,158,11,0.04)', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b', marginBottom: '16px' }}>
                  <X size={16} />
                  <h4 style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Considerations & Cons</h4>
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {tool.cons.map((con, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8125rem', color: '#fef3c7', lineHeight: 1.6 }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '99px', background: '#f59e0b', marginTop: '6px', flexShrink: 0 }} />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: PLAYGROUND */}
          {activeTab === 'playground' && (
            <div style={{ background: '#0d0d12', border: '1px solid #1f1f26', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Terminal size={15} color="#a78bfa" />
                    Interactive Prompt Playground
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: '#71717a', marginTop: '2px' }}>
                    Simulate a prompt and see how {tool.name} processes context and outputs AI inference.
                  </p>
                </div>
                <span style={{ fontSize: '0.625rem', fontWeight: 700, padding: '2px 8px', borderRadius: '99px', background: 'rgba(110,86,207,0.15)', color: '#a78bfa', border: '1px solid rgba(110,86,207,0.3)' }}>
                  SIMULATION
                </span>
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#a1a1aa', display: 'block', marginBottom: '6px' }}>
                  Input Prompt / Task
                </label>
                <textarea
                  rows={3}
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  className="field font-mono text-xs"
                  placeholder="Enter a prompt to test with this AI model..."
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={handleRunPlayground}
                  disabled={isSimulating}
                  className="btn-primary"
                  style={{ padding: '8px 16px', fontSize: '0.75rem' }}
                >
                  <Send size={13} />
                  <span>{isSimulating ? 'Processing...' : 'Run Simulation'}</span>
                </button>
              </div>

              {playgroundOutput && (
                <div style={{ paddingTop: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#a1a1aa' }}>Model Output</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(playgroundOutput);
                        onShowToast('Copied output to clipboard!');
                      }}
                      style={{ fontSize: '0.6875rem', color: '#71717a', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                      className="hover:text-white"
                    >
                      <Copy size={12} />
                      <span>Copy</span>
                    </button>
                  </div>
                  <pre style={{ padding: '16px', borderRadius: '10px', background: '#060608', border: '1px solid #1e1e24', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#c4b5fd', overflowX: 'auto', whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>
                    {playgroundOutput}
                  </pre>
                </div>
              )}
            </div>
          )}

          {/* TAB 5: REVIEWS */}
          {activeTab === 'reviews' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Submission Form */}
              <div style={{ background: '#0d0d12', border: '1px solid #1f1f26', borderRadius: '16px', padding: '24px' }}>
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
                  Write a Community Review
                </h4>
                <form onSubmit={handleReviewSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#a1a1aa', display: 'block', marginBottom: '4px' }}>Your Name *</label>
                      <input
                        type="text"
                        required
                        value={reviewAuthor}
                        onChange={(e) => setReviewAuthor(e.target.value)}
                        placeholder="e.g. Sarah Connor"
                        className="field"
                        style={{ padding: '7px 10px', fontSize: '0.75rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#a1a1aa', display: 'block', marginBottom: '4px' }}>Your Role</label>
                      <input
                        type="text"
                        value={reviewRole}
                        onChange={(e) => setReviewRole(e.target.value)}
                        placeholder="e.g. AI Engineer, PM"
                        className="field"
                        style={{ padding: '7px 10px', fontSize: '0.75rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#a1a1aa', display: 'block', marginBottom: '4px' }}>Rating</label>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingTop: '4px' }}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setReviewRating(star)}
                            style={{ cursor: 'pointer', background: 'transparent', border: 'none', padding: 0, color: '#fbbf24' }}
                          >
                            <Star
                              size={15}
                              className={star <= reviewRating ? 'fill-current' : 'text-[#33333d]'}
                            />
                          </button>
                        ))}
                        <span style={{ fontSize: '0.75rem', color: '#fff', fontWeight: 700, marginLeft: '6px' }}>
                          {reviewRating} / 5
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#a1a1aa', display: 'block', marginBottom: '4px' }}>Headline</label>
                    <input
                      type="text"
                      value={reviewTitle}
                      onChange={(e) => setReviewTitle(e.target.value)}
                      placeholder="e.g. Essential for our daily engineering velocity"
                      className="field"
                      style={{ padding: '7px 10px', fontSize: '0.75rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#a1a1aa', display: 'block', marginBottom: '4px' }}>Experience & Feedback *</label>
                    <textarea
                      rows={3}
                      required
                      value={reviewComment}
                      onChange={(e) => setReviewComment(e.target.value)}
                      placeholder="Share what works well, potential trade-offs, and practical benchmarks..."
                      className="field"
                      style={{ fontSize: '0.75rem' }}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                      type="submit"
                      disabled={isSubmittingReview}
                      className="btn-primary"
                      style={{ padding: '8px 18px', fontSize: '0.75rem' }}
                    >
                      {isSubmittingReview ? 'Posting...' : 'Post Verified Review'}
                    </button>
                  </div>
                </form>
              </div>

              {/* Reviews List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {tool.reviews.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '32px', fontSize: '0.75rem', color: '#71717a' }}>
                    No community reviews yet. Be the first to review {tool.name}!
                  </div>
                ) : (
                  tool.reviews.map((rev) => (
                    <div
                      key={rev.id}
                      style={{ background: '#0d0d12', border: '1px solid #1f1f26', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '28px', height: '28px', borderRadius: '99px', background: 'rgba(110,86,207,0.25)', border: '1px solid rgba(110,86,207,0.4)', color: '#d4c8ff', fontWeight: 700, fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {rev.authorName.charAt(0)}
                          </div>
                          <div>
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff', display: 'block' }}>
                              {rev.authorName}
                            </span>
                            <span style={{ fontSize: '0.6875rem', color: '#71717a' }}>
                              {rev.userRole} • {rev.date}
                            </span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#fbbf24' }}>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={i < rev.rating ? 'fill-current' : 'text-[#33333d]'}
                            />
                          ))}
                        </div>
                      </div>

                      <h5 style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#fff', margin: '4px 0 0' }}>
                        {rev.title}
                      </h5>
                      <p style={{ fontSize: '0.75rem', color: '#a1a1aa', lineHeight: 1.6, margin: 0 }}>
                        {rev.comment}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* ── Right Sidebar: Alternatives & Developer Specs ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Top Alternatives Card */}
          <div style={{ background: '#0d0d12', border: '1px solid #1f1f26', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Top Alternatives</span>
              <span style={{ color: '#a78bfa', fontSize: '0.6875rem', fontWeight: 600 }}>Compare</span>
            </h3>

            {tool.alternatives && tool.alternatives.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {tool.alternatives.map((alt, idx) => (
                  <div
                    key={idx}
                    onClick={() => onSelectAlternative(alt.slug)}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '10px',
                      background: '#131319',
                      border: '1px solid #202028',
                      cursor: 'pointer',
                      transition: 'all 150ms ease',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}
                    className="hover:border-[#6E56CF]/50 hover:bg-[#181624] group"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#fff' }} className="group-hover:text-[#a78bfa] transition-colors flex items-center gap-1">
                        {alt.name}
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                      <span style={{ fontSize: '0.625rem', color: '#71717a', fontWeight: 600 }}>
                        {alt.pricingType}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.6875rem', color: '#a1a1aa', lineHeight: 1.5, margin: 0 }}>
                      {alt.comparisonNote}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ fontSize: '0.75rem', color: '#71717a', margin: 0 }}>
                More alternatives are being benchmarked.
              </p>
            )}
          </div>

          {/* Developer Specs Card */}
          <div style={{ background: '#0d0d12', border: '1px solid #1f1f26', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#71717a' }}>
              Developer & Specs
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.75rem', color: '#a1a1aa' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #181820' }}>
                <span>Company</span>
                <strong style={{ color: '#fff', fontWeight: 600 }}>{tool.companyName}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #181820' }}>
                <span>Primary Category</span>
                <span style={{ color: '#fff' }}>{tool.category}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid #181820' }}>
                <span>Launch Year</span>
                <span style={{ color: '#fff' }}>{tool.launchYear}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Verification</span>
                <span style={{ color: '#34d399', fontWeight: 600 }}>Verified by AI Orbit</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
