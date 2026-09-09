import React, { useState } from 'react';
import { X, Sparkles, Plus, ChevronDown } from 'lucide-react';
import { CATEGORIES } from '../data/mockTools';
import { PricingType } from '../types/tool';

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (toolData: {
    name: string;
    tagline: string;
    description: string;
    category: string;
    tags: string[];
    pricingType: string;
    startingPrice: string;
    websiteUrl: string;
    companyName: string;
  }) => Promise<void>;
  onShowToast: (msg: string) => void;
}

export const SubmitModal: React.FC<SubmitModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  onShowToast,
}) => {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(CATEGORIES[1]);
  const [tagsStr, setTagsStr] = useState('');
  const [pricingType, setPricingType] = useState<PricingType>('Freemium');
  const [startingPrice, setStartingPrice] = useState('$0 / mo');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !tagline.trim() || !websiteUrl.trim()) {
      onShowToast('Please fill out the tool name, tagline, and website URL.');
      return;
    }

    setIsSubmitting(true);
    try {
      const tags = tagsStr
        .split(',')
        .map((t) => t.trim().replace(/^#/, ''))
        .filter(Boolean);

      await onSubmit({
        name: name.trim(),
        tagline: tagline.trim(),
        description: description.trim() || tagline.trim(),
        category,
        tags: tags.length > 0 ? tags : ['AI', category],
        pricingType,
        startingPrice: startingPrice.trim() || '$0 / mo',
        websiteUrl: websiteUrl.trim(),
        companyName: companyName.trim() || name.trim(),
      });

      onShowToast(`"${name}" was successfully submitted to the AI Orbit directory!`);
      onClose();
      // Reset form
      setName('');
      setTagline('');
      setDescription('');
      setTagsStr('');
      setWebsiteUrl('');
      setCompanyName('');
    } catch (err: any) {
      onShowToast(err.message || 'Error submitting tool.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.8125rem',
    fontWeight: 600,
    color: '#e4e4e7',
    marginBottom: '8px',
    letterSpacing: '0.01em'
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#0a0a0d',
    border: '1px solid #282832',
    borderRadius: '10px',
    padding: '11px 14px',
    color: '#ffffff',
    fontSize: '0.875rem',
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 150ms ease, box-shadow 150ms ease'
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(10px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '620px',
          borderRadius: '20px',
          border: '1px solid #272732',
          background: '#0f0f14',
          padding: '32px',
          boxShadow: '0 30px 60px -12px rgba(0,0,0,0.9), 0 0 30px rgba(110,86,207,0.15)',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ padding: '6px', borderRadius: '8px', background: 'rgba(110,86,207,0.18)', color: '#a78bfa', border: '1px solid rgba(110,86,207,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={16} />
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
                Submit AI Tool to Orbit
              </h3>
            </div>
            <p style={{ fontSize: '0.8125rem', color: '#a1a1aa', margin: 0, lineHeight: 1.5 }}>
              Join the ecosystem. Listed tools undergo real-time automated verification.
            </p>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: '6px',
              borderRadius: '8px',
              color: '#71717a',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="hover:text-white hover:bg-[#1a1a22] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            <div>
              <label style={labelStyle}>
                Tool Name <span style={{ color: '#a78bfa' }}>*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Perplexity Pro"
                style={inputStyle}
                className="focus:border-[#6E56CF] focus:shadow-[0_0_0_3px_rgba(110,86,207,0.25)]"
              />
            </div>

            <div>
              <label style={labelStyle}>
                Company / Creator
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Perplexity AI"
                style={inputStyle}
                className="focus:border-[#6E56CF] focus:shadow-[0_0_0_3px_rgba(110,86,207,0.25)]"
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>
              Tagline (One-sentence summary) <span style={{ color: '#a78bfa' }}>*</span>
            </label>
            <input
              type="text"
              required
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="e.g. AI-powered conversational search engine with real-time sources"
              style={inputStyle}
              className="focus:border-[#6E56CF] focus:shadow-[0_0_0_3px_rgba(110,86,207,0.25)]"
            />
          </div>

          <div>
            <label style={labelStyle}>
              Website URL <span style={{ color: '#a78bfa' }}>*</span>
            </label>
            <input
              type="url"
              required
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              placeholder="https://example.ai"
              style={inputStyle}
              className="focus:border-[#6E56CF] focus:shadow-[0_0_0_3px_rgba(110,86,207,0.25)]"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <label style={labelStyle}>
                Category <span style={{ color: '#a78bfa' }}>*</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', paddingRight: '36px' }}
                className="focus:border-[#6E56CF] focus:shadow-[0_0_0_3px_rgba(110,86,207,0.25)]"
              >
                {CATEGORIES.slice(1).map((c) => (
                  <option key={c} value={c} style={{ background: '#0e0e12', color: '#fff' }}>
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} color="#71717a" style={{ position: 'absolute', right: '12px', top: '40px', pointerEvents: 'none' }} />
            </div>

            <div style={{ position: 'relative' }}>
              <label style={labelStyle}>
                Pricing Model <span style={{ color: '#a78bfa' }}>*</span>
              </label>
              <select
                value={pricingType}
                onChange={(e) => setPricingType(e.target.value as any)}
                style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', paddingRight: '36px' }}
                className="focus:border-[#6E56CF] focus:shadow-[0_0_0_3px_rgba(110,86,207,0.25)]"
              >
                <option value="Free" style={{ background: '#0e0e12', color: '#fff' }}>Free</option>
                <option value="Freemium" style={{ background: '#0e0e12', color: '#fff' }}>Freemium</option>
                <option value="Paid" style={{ background: '#0e0e12', color: '#fff' }}>Paid</option>
                <option value="Open Source" style={{ background: '#0e0e12', color: '#fff' }}>Open Source</option>
              </select>
              <ChevronDown size={14} color="#71717a" style={{ position: 'absolute', right: '12px', top: '40px', pointerEvents: 'none' }} />
            </div>

            <div>
              <label style={labelStyle}>
                Starting Price
              </label>
              <input
                type="text"
                value={startingPrice}
                onChange={(e) => setStartingPrice(e.target.value)}
                placeholder="$0 / mo"
                style={inputStyle}
                className="focus:border-[#6E56CF] focus:shadow-[0_0_0_3px_rgba(110,86,207,0.25)]"
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>
              Feature Tags (comma separated)
            </label>
            <input
              type="text"
              value={tagsStr}
              onChange={(e) => setTagsStr(e.target.value)}
              placeholder="e.g. Search, Citations, Research, Agents"
              style={inputStyle}
              className="focus:border-[#6E56CF] focus:shadow-[0_0_0_3px_rgba(110,86,207,0.25)]"
            />
          </div>

          <div>
            <label style={labelStyle}>
              Full Description
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Detailed capabilities, target users, integrations..."
              style={{ ...inputStyle, resize: 'vertical', minHeight: '90px' }}
              className="focus:border-[#6E56CF] focus:shadow-[0_0_0_3px_rgba(110,86,207,0.25)]"
            />
          </div>

          <div style={{ paddingTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px' }}>
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
              style={{ padding: '10px 20px', fontSize: '0.8125rem' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{ padding: '10px 24px', fontSize: '0.8125rem' }}
            >
              <Plus size={14} strokeWidth={2.5} />
              <span>{isSubmitting ? 'Publishing...' : 'Publish to Orbit'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
