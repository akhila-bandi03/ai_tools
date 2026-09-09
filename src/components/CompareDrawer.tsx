import React from 'react';
import { X, Check, Star, ArrowRight } from 'lucide-react';
import { Tool } from '../types/tool';

interface CompareDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  tools: Tool[];
  onRemoveTool: (slug: string) => void;
  onSelectTool: (slug: string) => void;
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

export const CompareDrawer: React.FC<CompareDrawerProps> = ({
  isOpen,
  onClose,
  tools,
  onRemoveTool,
  onSelectTool,
}) => {
  if (!isOpen || tools.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl border border-[#202026] bg-[#0d0d11] p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#1f1f26] pb-4">
          <div>
            <h3 className="text-lg font-bold text-white">Compare AI Tools Side-by-Side</h3>
            <p className="text-xs text-[#a1a1aa]">
              Review core architectures, pricing models, benchmarks, and strengths.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#71717a] hover:text-white hover:bg-[#1f1f26] transition-colors cursor-pointer bg-transparent border-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Grid */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-[#1f1f26]">
                <th className="p-3.5 text-[#71717a] font-semibold w-1/4">Feature / Metric</th>
                {tools.map((t) => (
                  <th key={t.id} className="p-3.5 w-1/4">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-bold text-white text-sm">{t.name}</span>
                      <button
                        onClick={() => onRemoveTool(t.slug)}
                        className="text-[#71717a] hover:text-red-400 p-0.5 cursor-pointer bg-transparent border-0"
                        title="Remove from comparison"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectTool(t.slug);
                      }}
                      className="text-[11px] text-[#a78bfa] hover:text-white flex items-center gap-1 cursor-pointer bg-transparent border-0 font-medium"
                    >
                      <span>View full specs</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#17171e]">
              <tr>
                <td className="p-3.5 font-medium text-[#a1a1aa]">Category</td>
                {tools.map((t) => (
                  <td key={t.id} className="p-3.5 text-white font-medium">{t.category}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-[#a1a1aa]">Pricing Model</td>
                {tools.map((t) => (
                  <td key={t.id} className="p-3.5">
                    <span className={`badge ${getBadgeClass(t.pricingType)}`}>{t.pricingType}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-[#a1a1aa]">Starting Price</td>
                {tools.map((t) => (
                  <td key={t.id} className="p-3.5 text-white font-semibold">{t.startingPrice}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-[#a1a1aa]">Community Rating</td>
                {tools.map((t) => (
                  <td key={t.id} className="p-3.5">
                    <div className="flex items-center gap-1 text-[#fbbf24]">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-bold text-white">{t.rating.toFixed(1)}</span>
                      <span className="text-[#71717a]">({t.reviewCount})</span>
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-[#a1a1aa]">Context Window</td>
                {tools.map((t) => (
                  <td key={t.id} className="p-3.5 text-[#d4d4d8]">{t.contextWindow || 'Standard Cloud'}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-[#a1a1aa]">API Availability</td>
                {tools.map((t) => (
                  <td key={t.id} className="p-3.5">
                    {t.apiAvailable ? (
                      <span className="text-[#34d399] flex items-center gap-1 font-medium">
                        <Check className="w-3.5 h-3.5" /> REST & SDK
                      </span>
                    ) : (
                      <span className="text-[#71717a]">Web Only</span>
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-[#a1a1aa] align-top">Key Strengths</td>
                {tools.map((t) => (
                  <td key={t.id} className="p-3.5 align-top">
                    <ul className="space-y-1.5 text-[#d1fae5]">
                      {t.pros.slice(0, 2).map((p, idx) => (
                        <li key={idx} className="flex items-start gap-1 text-[11px] leading-relaxed">
                          <span className="text-[#34d399] mt-0.5">•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
